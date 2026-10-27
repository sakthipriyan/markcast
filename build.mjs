// Builds two things from src/:
//   dist/index.html    the page shell with the styles and the bundled app inlined: one file you can open,
//                      copy or host anywhere (slidetake.com serves it)
//   dist/slidetake.js  the same app as one script for other sites' pages (src/embed.js), which adds the
//                      markup, styles and fonts itself; the hugo-continuum theme vendors it
// `node build.mjs --watch` rebuilds both on every change.
import * as esbuild from 'esbuild';
import {readFile, writeFile, mkdir, cp} from 'node:fs/promises';

const watch = process.argv.includes('--watch');

/** @type {import('esbuild').Plugin} */
const inlinePage = {
  name: 'inline-page',
  setup(build){
    build.onEnd(async result=>{
      if (result.errors.length) return;
      const js = result.outputFiles.find(f=>f.path.endsWith('.js')).text;
      const [shell, css] = await Promise.all([readFile('src/index.html', 'utf8'), readFile('src/styles.css', 'utf8')]);
      // a literal "</script" inside the bundle would end the inline script early
      const page = shell
        .replace('<style>/*@styles*/</style>', ()=>'<style>\n' + css + '</style>')
        .replace('<script>/*@app*/</script>', ()=>'<script>\n' + js.replace(/<\/script/gi, '<\\/script') + '</script>');
      await mkdir('dist', {recursive: true});
      await writeFile('dist/index.html', page);
      // favicon, preview image and other files served as they are
      await cp('src/public', 'dist', {recursive: true});
      // the guide and the home deck as plain markdown, for people and AI tools (see llms.txt)
      await cp('src/docs.md', 'dist/docs.md');
      await cp('src/features.md', 'dist/features.md');
      await cp('src/privacy.md', 'dist/privacy.md');
      await cp('src/gallery.md', 'dist/examples.md');
      await cp('src/docs.md', 'dist/help.md');   // the old address, kept for links already out there
      await cp('src/sample.md', 'dist/home.md');
      console.log('built dist/index.html (' + Math.round(page.length / 1024) + ' KB)');
    });
  }
};

// the embed script carries the page's markup and font links, read from the same src/index.html
/** @type {import('esbuild').Plugin} */
const shellModules = {
  name: 'shell-modules',
  setup(build){
    build.onResolve({filter: /^slidetake:(shell|head)$/}, args=>({path: args.path, namespace: 'slidetake'}));
    build.onLoad({filter: /.*/, namespace: 'slidetake'}, async args=>{
      const page = await readFile('src/index.html', 'utf8');
      const text = args.path === 'slidetake:shell'
        ? page.slice(page.indexOf('<body>') + 6, page.indexOf('<script>/*@app*/</script>'))
        : (page.match(/<link rel="preconnect"[^>]*>\s*<link href="https:\/\/fonts[^>]*>/) || [''])[0];
      return {contents: text, loader: 'text', watchFiles: ['src/index.html']};
    });
  }
};
const pkg = JSON.parse(await readFile('package.json', 'utf8'));
const embed = await esbuild.context({
  entryPoints: ['src/embed.js'],
  bundle: true,
  format: 'iife',
  target: 'es2022',
  minify: true,
  loader: {'.md': 'text', '.css': 'text'},
  outfile: 'dist/slidetake.js',
  banner: {js: '/* Slidetake ' + pkg.version + ' · https://slidetake.com · Apache-2.0 */'},
  logLevel: 'warning',
  plugins: [shellModules, {name: 'report', setup(b){ b.onEnd(r=>{ if (!r.errors.length) console.log('built dist/slidetake.js'); }); }}]
});

const ctx = await esbuild.context({
  entryPoints: ['src/app.js'],
  bundle: true,
  format: 'iife',
  target: 'es2022',
  loader: {'.md': 'text'},
  outfile: 'dist/app.js',
  write: false,
  logLevel: 'warning',
  plugins: [inlinePage]
});

if (watch){
  await Promise.all([ctx.watch(), embed.watch()]);
  console.log('watching src/ …');
} else {
  await Promise.all([ctx.rebuild(), embed.rebuild()]);
  await Promise.all([ctx.dispose(), embed.dispose()]);
}
