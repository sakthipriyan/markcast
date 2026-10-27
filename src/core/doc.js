// @ts-check
// Which deck a page shows, and the working copy.
//
// Every deck comes from a read-only source: Slidetake's own decks (home, help, templates), a file on
// GitHub, a gist, any URL, or a shared link. Viewing one never changes anything. Typing in it makes the
// working copy: one per browser, at /edit, remembering where it came from so it can be reset.
//
//   /                          home                 read-only
//   /help                      the guide            read-only
//   /new, /new?template=talk   templates            read-only
//   /gh/…  /gist/…  /?src=…    files on the web     read-only
//   /share#deflate:<data>      a shared deck        read-only (the deck is in the link)
//   /edit                      your working copy    editable
import {sourceFromPath} from './source.js';
import {parseHash} from './share.js';

/**
 * @typedef {import('./source.js').DeckSource} DeckSource
 *
 * @typedef {DeckSource | {kind: 'shared'} | {kind: 'file', name: string}} Origin
 *   where a working copy came from: a source, a shared link, or a file opened from this computer
 *
 * @typedef {{page: 'source', source: DeckSource, slide: string}
 *         | {page: 'share', data: string, slide: string}
 *         | {page: 'edit', slide: string}
 *         | {page: 'pick'}} Route
 *   pick: /new without a template, which asks for one
 *
 * @typedef {object} Copy  the working copy, kept in this browser
 * @property {string} text
 * @property {Origin} origin
 * @property {string} originText     the source as it was when the copy was made, for Reset and Share
 * @property {string|null} exported  the text as last saved or shared; null if never
 */

export const TEMPLATES = /** @type {const} */ (['blank', 'talk', 'recording']);

/**
 * @param {string} pathname
 * @param {string} search
 * @param {string} hash
 * @returns {Route}
 */
export function routeOf(pathname, search, hash){
  const path = pathname.replace(/\/+$/, '') || '/';
  const q = new URLSearchParams(search);
  const {data, slide} = parseHash(hash);
  if (path === '/share') return data ? {page: 'share', data, slide} : {page: 'source', source: {kind: 'builtin', id: 'home'}, slide: ''};
  if (path === '/edit') return {page: 'edit', slide};
  if (path === '/new'){
    const t = q.get('template');
    return t && /** @type {readonly string[]} */ (TEMPLATES).includes(t)
      ? {page: 'source', source: {kind: 'builtin', id: 'template:' + t}, slide}
      : {page: 'pick'};
  }
  const fromPath = sourceFromPath(path);
  if (fromPath) return {page: 'source', source: fromPath, slide};
  const src = q.get('src');
  if (path === '/' && src) return {page: 'source', source: {kind: 'url', url: src}, slide};
  return {page: 'source', source: {kind: 'builtin', id: 'home'}, slide};
}

/** A short, human name for where a deck came from. @param {Origin} origin */
export function originLabel(origin){
  switch (origin.kind){
    case 'builtin':
      if (origin.id === 'home') return 'Home';
      if (origin.id === 'docs' || origin.id === 'help') return 'the docs';   // help: copies saved before the move
      if (origin.id === 'showcase') return 'the examples';
      return 'the ' + origin.id.replace(/^template:/, '') + ' template';
    case 'gist': return 'a gist' + (origin.file ? ' (' + origin.file + ')' : '');
    case 'shared': return 'a shared deck';
    case 'file': return origin.name;
    case 'url': {
      const m = origin.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/[^/]+\/(.+)$/);
      if (m) return m[1] + '/' + m[2] + '/' + m[3];
      try { const u = new URL(origin.url); return u.hostname + u.pathname; } catch(e){ return origin.url; }
    }
  }
}

/** A new working copy of a deck. @param {string} text @param {Origin} origin @param {{exported?: boolean}} [opts] */
export function makeCopy(text, origin, {exported = false} = {}){
  /** @type {Copy} */
  const copy = {text, origin, originText: text, exported: exported ? text : null};
  return copy;
}

/** Edits not yet saved or shared: differs from the last export, or from the original if never exported. @param {Copy} copy */
export function isEdited(copy){
  return copy.text !== (copy.exported ?? copy.originText);
}

/** Still the same as its source, so a short link to the source shows exactly this. @param {Copy} copy */
export function matchesOrigin(copy){
  return copy.text === copy.originText;
}

/** Reads a stored copy, tolerating anything malformed. @param {string|null} json @returns {Copy|null} */
export function parseCopy(json){
  try {
    const c = JSON.parse(json || 'null');
    if (!c || typeof c.text !== 'string' || !c.origin || typeof c.origin.kind !== 'string') return null;
    return {text: c.text, origin: c.origin, originText: typeof c.originText === 'string' ? c.originText : c.text,
      exported: typeof c.exported === 'string' ? c.exported : null};
  } catch(e){ return null; }
}
