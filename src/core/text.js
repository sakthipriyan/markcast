// @ts-check
// Small text helpers shared by the parser, the app and the publish pack. No DOM needed.

/** @param {string} s */
export function slugify(s){
  return s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '') || 'card';
}

/** Markdown inline syntax stripped: links keep their text, emphasis marks and HTML tags go. @param {string} s */
export function plainText(s){
  return s.replace(/<[^>]*>/g, '').replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*_`~]/g, '').trim();
}

/** @param {unknown} s */
export function escapeHtml(s){
  return String(s).replace(/[&<>"]/g, c=>/** @type {Record<string,string>} */ ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
}

const ENTITIES = /** @type {Record<string,string>} */ ({amp:'&', lt:'<', gt:'>', quot:'"', apos:"'", nbsp:' ', mdash:'—', ndash:'–', hellip:'…', rsquo:'’', lsquo:'‘', rdquo:'”', ldquo:'“'});
/** HTML entities decoded, using the browser when there is one. @param {string} s */
export function decodeEntities(s){
  if (typeof document !== 'undefined'){
    const t = document.createElement('textarea');
    t.innerHTML = s;
    return t.value;
  }
  return s.replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (m, e)=>{
    if (e[0] === '#') return String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENTITIES[e.toLowerCase()] ?? m;
  });
}

/** name="value" pairs, as in reveal.js's <!-- .slide: … --> and <!-- .element: … -->. @param {string} text */
export function attrsOf(text){
  /** @type {Record<string,string>} */
  const a = {};
  for (const x of text.matchAll(/([\w-]+)="([^"]*)"/g)) a[x[1]] = x[2];
  return a;
}

/** Lines split on a separator line, ignoring separators inside ``` / ~~~ fences. @param {string} text @param {RegExp} sep */
export function splitOutsideFences(text, sep){
  /** @type {string[][]} */
  const out = [[]];
  /** @type {string|null} */
  let fence = null;
  text.split('\n').forEach(line=>{
    const f = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (f){
      if (!fence) fence = f[1];
      else if (f[1][0] === fence[0] && f[1].length >= fence.length) fence = null;
    }
    if (!fence && !f && sep.test(line)) out.push([]);
    else out[out.length - 1].push(line);
  });
  return out.map(l=>l.join('\n'));
}

/** A talk length in ms: 10m, 90s, 1h, 12:30, or a bare number of minutes. 0 when unset or unreadable. @param {unknown} v */
export function parseDuration(v){
  const t = String(v ?? '').trim().toLowerCase();
  if (!t) return 0;
  let m = t.match(/^(\d+):(\d{1,2})$/);
  if (m) return (+m[1] * 60 + +m[2]) * 1000;
  m = t.match(/^(\d+(?:\.\d+)?)\s*(h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)?$/);
  if (!m) return 0;
  const unit = (m[2] || 'm')[0];
  return parseFloat(m[1]) * (unit === 'h' ? 3600 : unit === 's' ? 1 : 60) * 1000;
}

/** ms as m:ss or h:mm:ss. @param {number} ms */
export function fmtTime(ms){
  const s = Math.max(0, Math.round(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
  return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(sec).padStart(2, '0');
}
