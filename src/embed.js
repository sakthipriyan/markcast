// Slidetake as one script for other sites (the hugo-continuum theme vendors it). The host page sets
// window.SLIDETAKE = {markdown, settings, base, back, themeKey} and loads this; it adds Slidetake's markup,
// styles, fonts and libraries to the page, then starts the app in embed mode (see EMBED in app.js).
import CSS from './styles.css';
import SHELL from 'slidetake:shell';
import HEAD from 'slidetake:head';

const loadScript = src=>new Promise((resolve, reject)=>{
  const s = document.createElement('script');
  s.src = src; s.onload = resolve; s.onerror = ()=>reject(new Error('could not load ' + src));
  document.head.appendChild(s);
});

async function start(){
  document.head.insertAdjacentHTML('beforeend', HEAD);
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);
  document.body.insertAdjacentHTML('afterbegin', SHELL);
  // the same pinned libraries the standalone page loads
  await Promise.all([
    window.gsap ? null : loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'),
    window.marked ? null : loadScript('https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js')
  ]);
  await import('./app.js');
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once: true});
else start();
