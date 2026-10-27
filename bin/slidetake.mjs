#!/usr/bin/env node
// npx slidetake [deck.md | folder] [--port 4300] [--open]
//
// Slidetake on your own machine: serves the app and the deck's folder on localhost, so images next to the
// markdown load as they are, and the deck reloads whenever a file in the folder changes. Typing in the
// browser's editor writes back to the file, so your editor, an AI writing the file, and the browser all
// work on the same deck.md. Nothing leaves the machine, and it needs no install beyond Node.
import {createServer} from 'node:http';
import {readFileSync, statSync, existsSync, readdirSync, watch, createReadStream} from 'node:fs';
import {writeFile} from 'node:fs/promises';
import {resolve, dirname, basename, extname, join, relative, sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';

const PKG = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const APP = fileURLToPath(new URL('../dist/index.html', import.meta.url));

const args = process.argv.slice(2);
if (args.includes('-h') || args.includes('--help')){
  console.log(`Slidetake ${PKG.version}: present and record a markdown deck from this machine.

  npx slidetake [deck.md | folder] [--port 4300] [--open]

  deck.md   the deck to open; a folder opens its index.md, README.md or only .md file (default: .)
  --port    the port to try first (default 4300; the next free one is used if it's taken)
  --open    open the deck in the browser

Files next to the deck (images, video) are served beside it, so relative paths work. Saving the
file reloads the deck; typing in the browser's editor saves to the file.`);
  process.exit(0);
}
const opt = name=>{ const i = args.indexOf(name); return i >= 0 ? args.splice(i, 2)[1] : undefined; };
const flag = name=>{ const i = args.indexOf(name); if (i >= 0) args.splice(i, 1); return i >= 0; };
const port0 = parseInt(opt('--port') || '4300', 10);
const open = flag('--open');

// the deck: a file, or the markdown file a folder holds
let target = resolve(args[0] || '.');
if (!existsSync(target)){ console.error('No such file or folder: ' + target); process.exit(1); }
if (statSync(target).isDirectory()){
  const mds = readdirSync(target).filter(f=>/\.(md|markdown)$/i.test(f));
  const pick = ['index.md', 'deck.md', 'slides.md', 'README.md'].find(f=>mds.includes(f)) || (mds.length === 1 ? mds[0] : null);
  if (!pick){
    console.error(mds.length ? 'Several markdown files here; name one: ' + mds.join(', ') : 'No markdown file in ' + target);
    process.exit(1);
  }
  target = join(target, pick);
}
const ROOT = dirname(target), DECK = '/' + encodeURIComponent(basename(target));

const TYPES = {'.md': 'text/markdown; charset=utf-8', '.markdown': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon', '.mp4': 'video/mp4', '.webm': 'video/webm',
  '.mov': 'video/quicktime', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.pdf': 'application/pdf',
  '.woff': 'font/woff', '.woff2': 'font/woff2'};

// the app page, told which deck to open and where to hear about changes
const page = ()=>readFileSync(APP, 'utf8').replace('<head>',
  '<head><script>window.SLIDETAKE_LOCAL=' + JSON.stringify({deck: DECK, file: basename(target), events: '/__slidetake/events', save: '/__slidetake/save'}) + '</script>');

// a file inside the deck's folder, or null for anything outside it
function inRoot(urlPath){
  let p;
  try { p = decodeURIComponent(urlPath.split('?')[0]); } catch(e){ return null; }
  const file = resolve(ROOT, '.' + p);
  return file === ROOT || file.startsWith(ROOT + sep) ? file : null;
}

const clients = new Set();
let lastSaved = null;   // what the browser last wrote, so its own save doesn't bounce back as a change

const server = createServer(async (req, res)=>{
  const url = req.url || '/';
  if (url.startsWith('/__slidetake/events')){
    res.writeHead(200, {'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive'});
    res.write('retry: 1000\n\n');
    clients.add(res);
    req.on('close', ()=>clients.delete(res));
    return;
  }
  if (url.startsWith('/__slidetake/save') && req.method === 'PUT'){
    let body = '';
    req.setEncoding('utf8');
    for await (const chunk of req) body += chunk;
    lastSaved = body;
    await writeFile(target, body);
    res.writeHead(204); res.end();
    return;
  }
  const file = inRoot(url);
  if (file && existsSync(file) && statSync(file).isFile()){
    res.writeHead(200, {'Content-Type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store'});
    createReadStream(file).pipe(res);
    return;
  }
  // every other path is the app: /, /docs, /examples, /edit and the rest
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store'});
  res.end(page());
});

// any change in the folder reloads the deck (an image redrawn counts too); bursts from one save are merged
let timer = null;
watch(ROOT, {recursive: true}, (event, name)=>{
  if (!name || /(^|[/\\])(\.|node_modules)/.test(name)) return;
  clearTimeout(timer);
  timer = setTimeout(()=>{
    if (name === basename(target) && lastSaved !== null){
      try { if (readFileSync(target, 'utf8') === lastSaved) return; } catch(e){}
    }
    for (const c of clients) c.write('data: ' + JSON.stringify({file: name}) + '\n\n');
  }, 80);
});

function listen(port){
  server.once('error', e=>{
    if (e.code === 'EADDRINUSE' && port < port0 + 20) listen(port + 1);
    else { console.error(e.message); process.exit(1); }
  });
  server.listen(port, '127.0.0.1', ()=>{
    const link = 'http://localhost:' + port + '/';
    console.log(`\n  Slidetake ${PKG.version} · ${link}\n  ${relative(process.cwd(), target) || basename(target)} · saves reload the deck; Ctrl+C stops\n`);
    if (open){
      const cmd = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
      spawn(cmd, [link], {stdio: 'ignore', detached: true, shell: process.platform === 'win32'}).unref();
    }
  });
}
listen(port0);
