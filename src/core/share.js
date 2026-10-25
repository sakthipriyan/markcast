// @ts-check
// A whole deck inside a link, the way edotor.net shares graphs: the markdown is compressed (deflate-raw)
// and base64url-encoded into the hash, so it never reaches a server and needs no storage.
//
//   https://slidetake.com/#deflate:<data>             the deck
//   https://slidetake.com/#deflate:<data>~<slide-id>  …opened at a slide
//
// "~" never occurs in base64url, so it separates the slide cleanly.

export const PREFIX = 'deflate:';

/** @param {Uint8Array} bytes */
function toBase64Url(bytes){
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
/** @param {string} s */
function fromBase64Url(s){
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4));
  return Uint8Array.from(bin, c=>c.charCodeAt(0));
}
/** @param {Uint8Array} bytes @param {CompressionStream | DecompressionStream} stream */
async function pipe(bytes, stream){
  const out = new Response(new Blob([/** @type {BlobPart} */ (bytes)]).stream().pipeThrough(stream));
  return new Uint8Array(await out.arrayBuffer());
}

/** markdown → the data part of a #deflate: link. @param {string} markdown */
export async function encodeDeck(markdown){
  return toBase64Url(await pipe(new TextEncoder().encode(markdown), new CompressionStream('deflate-raw')));
}

/** the data part of a #deflate: link → markdown. Throws on damaged data. @param {string} data */
export async function decodeDeck(data){
  return new TextDecoder().decode(await pipe(fromBase64Url(data), new DecompressionStream('deflate-raw')));
}

/**
 * Splits a location hash: "#deflate:<data>~<slide>" → {data, slide}; any other hash → {data: null, slide}.
 * @param {string} hash
 */
export function parseHash(hash){
  const h = hash.replace(/^#/, '');
  if (!h.startsWith(PREFIX)){
    let slide = h;
    try { slide = decodeURIComponent(h); } catch(e){}
    return {data: null, slide};
  }
  const rest = h.slice(PREFIX.length), at = rest.indexOf('~');
  let slide = at < 0 ? '' : rest.slice(at + 1);
  try { slide = decodeURIComponent(slide); } catch(e){}
  return {data: at < 0 ? rest : rest.slice(0, at), slide};
}

/** @param {string} data @param {string} [slide] */
export function deckHash(data, slide){
  return '#' + PREFIX + data + (slide ? '~' + encodeURIComponent(slide) : '');
}
