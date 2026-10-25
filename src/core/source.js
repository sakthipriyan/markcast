// @ts-check
// Where a deck comes from, and the short links for it.
//
//   /gh/owner/repo/path/deck.md        a file on GitHub, default branch
//   /gh/owner/repo@branch/path/deck.md a file on a branch or tag
//   /gist/<id>                         a gist (its first markdown file)
//   /help                              the help deck, built in
//   ?src=<any URL>                     anything else that allows cross-site reads
//
// GitHub page URLs pasted by people (github.com/…/blob/…, gist.github.com/…) are turned into these.

const RAW = 'https://raw.githubusercontent.com/';

/**
 * @typedef {{kind: 'url', url: string} | {kind: 'gist', id: string, file?: string} | {kind: 'builtin', id: 'help'}} DeckSource
 */

/**
 * A pasted link → where to fetch the deck from. Unknown URLs are used as they are.
 * @param {string} input
 * @returns {DeckSource | null}
 */
export function normalizeSource(input){
  const text = String(input || '').trim();
  if (!text) return null;
  /** @type {URL} */
  let u;
  try { u = new URL(/^[a-z]+:\/\//i.test(text) ? text : 'https://' + text); }
  catch(e){ return null; }
  const parts = u.pathname.split('/').filter(Boolean);
  if (u.hostname === 'github.com' || u.hostname === 'www.github.com'){
    // github.com/owner/repo/blob/ref/path, …/raw/ref/path, …/tree/ref/folder
    const [owner, repo, kind, ref, ...rest] = parts;
    if (owner && repo && (kind === 'blob' || kind === 'raw' || kind === 'tree') && ref){
      let path = rest.join('/');
      if (kind === 'tree' || !/\.(md|markdown|txt)$/i.test(path)) path = (path ? path + '/' : '') + 'index.md';
      return {kind: 'url', url: RAW + [owner, repo, ref].join('/') + '/' + path};
    }
    if (owner && repo && !kind) return {kind: 'url', url: RAW + owner + '/' + repo + '/HEAD/README.md'};
  }
  if (u.hostname === 'gist.github.com'){
    const id = parts.length >= 2 ? parts[1] : parts[0];
    if (id && /^[\da-f]+$/i.test(id)) return {kind: 'gist', id};
  }
  if (u.hostname === 'slidetake.com' || u.hostname === 'www.slidetake.com'){
    const fromPath = sourceFromPath(u.pathname);
    if (fromPath) return fromPath;
    const src = u.searchParams.get('src');
    if (src) return {kind: 'url', url: src};
  }
  return {kind: 'url', url: u.href};
}

/**
 * The deck named by a short-link path, or null for any other path.
 * @param {string} pathname
 * @returns {DeckSource | null}
 */
export function sourceFromPath(pathname){
  const parts = String(pathname || '').split('/').filter(Boolean).map(p=>{ try { return decodeURIComponent(p); } catch(e){ return p; } });
  if (parts[0] === 'gh' && parts.length >= 4){
    const [, owner, repoRef, ...rest] = parts;
    const at = repoRef.indexOf('@');
    const repo = at < 0 ? repoRef : repoRef.slice(0, at);
    const ref = at < 0 ? 'HEAD' : repoRef.slice(at + 1);
    if (!owner || !repo || !ref) return null;
    return {kind: 'url', url: RAW + [owner, repo, ref, ...rest].map(encodeURIComponent).join('/')};
  }
  if (parts.length === 1 && parts[0] === 'help') return {kind: 'builtin', id: 'help'};
  if (parts[0] === 'gist' && parts[1] && /^[\da-f]+$/i.test(parts[1])){
    return parts[2] ? {kind: 'gist', id: parts[1], file: parts[2]} : {kind: 'gist', id: parts[1]};
  }
  return null;
}

/**
 * The shortest link to a deck: /gh/… for GitHub raw files, /gist/… for gists, ?src= for anything else.
 * Returned as a path plus query, to put after the site's origin.
 * @param {DeckSource} source
 */
export function shortLink(source){
  if (source.kind === 'builtin') return '/' + source.id;
  if (source.kind === 'gist') return '/gist/' + source.id + (source.file ? '/' + encodeURIComponent(source.file) : '');
  const m = source.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);
  if (m){
    const [, owner, repo, ref, path] = m;
    // refs/heads/main style refs have slashes and can't be told apart from the path; keep those as ?src=
    if (!/^refs$/.test(ref)) return '/gh/' + owner + '/' + repo + (ref === 'HEAD' ? '' : '@' + ref) + '/' + path;
  }
  return '/?src=' + encodeURIComponent(source.url);
}
