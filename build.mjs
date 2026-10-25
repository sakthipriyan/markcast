// Builds dist/index.html: the page shell with the styles and the bundled app inlined, so the result is
// still one file you can open, copy or host anywhere. `node build.mjs --watch` rebuilds on every change.
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
      await cp('src/help.md', 'dist/help.md');
      await cp('src/sample.md', 'dist/home.md');
      console.log('built dist/index.html (' + Math.round(page.length / 1024) + ' KB)');
    });
  }
};

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
  await ctx.watch();
  console.log('watching src/ …');
} else {
  await ctx.rebuild();
  await ctx.dispose();
}
