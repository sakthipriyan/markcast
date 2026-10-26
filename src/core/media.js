// @ts-check
// YouTube links in plain markdown. A link to a video alone on a line becomes the video, embedded from
// youtube-nocookie.com (YouTube's embed that sets no tracking cookies until someone plays it).

/**
 * The video a link points at, or null for anything that isn't a single YouTube video.
 * @param {string} href
 * @returns {{id: string, start: number, portrait: boolean} | null}
 */
export function youtubeVideo(href){
  /** @type {URL} */
  let u;
  try { u = new URL(href); } catch(e){ return null; }
  const host = u.hostname.replace(/^(www\.|m\.)/, '');
  let id = null, portrait = false;
  if (host === 'youtu.be') id = u.pathname.slice(1).split('/')[0];
  else if (host === 'youtube.com' || host === 'youtube-nocookie.com'){
    const parts = u.pathname.split('/').filter(Boolean);
    if (parts[0] === 'watch') id = u.searchParams.get('v');
    else if (['shorts', 'live', 'embed'].includes(parts[0])){ id = parts[1] || null; portrait = parts[0] === 'shorts'; }
  }
  if (!id || !/^[\w-]{6,}$/.test(id)) return null;
  return {id, start: parseStart(u.searchParams.get('t') || u.searchParams.get('start') || ''), portrait};
}

/** "90", "90s", "1m30s", "1h2m3s" → seconds. @param {string} t */
export function parseStart(t){
  if (/^\d+$/.test(t)) return +t;
  const m = t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  return m && t ? (+(m[1] || 0)) * 3600 + (+(m[2] || 0)) * 60 + (+(m[3] || 0)) : 0;
}

/** The embed address: no related videos from other channels, and the JS API on so the deck can play and pause it. @param {{id: string, start: number}} v */
export function embedUrl(v){
  return 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.id) +
    '?enablejsapi=1&rel=0&playsinline=1' + (v.start ? '&start=' + v.start : '');
}
