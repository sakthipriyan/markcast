// @ts-check
// Camera presets and a slide's steps. A preset is a few words applied on top of the deck's pip settings:
//   off · on · full · 18% (size) · top-left … bottom-right · flip (other side) · circle · rect · mirror · unmirror

export const CORNERS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
/** @param {number} v */
export const clampPipSize = v=>Math.max(8, Math.min(60, v));

/**
 * @typedef {object} PipState
 * @property {string} [corner]
 * @property {number} [size]
 * @property {boolean} [circle]
 * @property {boolean} [mirror]
 * @property {boolean} [full]
 * @property {boolean} [off]
 * @property {boolean} [flip]
 * @property {boolean} [used]
 *
 * @typedef {{cam: number, frag: number}} Step  which camera layout and how many fragments are showing
 */

/** @param {PipState} st @param {string|null|undefined} preset @returns {PipState} */
export function applyPreset(st, preset){
  String(preset || '').toLowerCase().split(/\s+/).forEach(t=>{
    if (!t) return;
    if (t === 'off' || t === 'hide'){ st.off = true; }
    else if (t === 'on' || t === 'pip' || t === 'show'){ st.off = false; st.full = false; st.used = true; }
    else if (t === 'full' || t === 'fullscreen'){ st.full = true; st.off = false; st.used = true; }
    else if (/^\d+(\.\d+)?%?$/.test(t)){ st.size = clampPipSize(parseFloat(t)); st.used = true; }
    else if (CORNERS.includes(t)){ st.corner = t; st.used = true; }
    else if (t === 'flip'){ st.flip = !st.flip; st.used = true; }
    else if (t === 'circle'){ st.circle = true; }
    else if (t === 'rect'){ st.circle = false; }
    else if (t === 'mirror'){ st.mirror = true; }
    else if (t === 'unmirror' || t === 'no-mirror'){ st.mirror = false; }
  });
  return st;
}

/** "full, on" → ['full', 'on'] @param {string|null|undefined} directive */
export function cameraPresets(directive){
  return directive ? directive.split(',').map(x=>x.trim()).filter(Boolean) : [];
}

/**
 * A slide's steps are its camera layouts and its fragments (reveal-one-at-a-time items). Camera layouts up
 * to the first one that shows the slide come first, then the fragments, then any remaining layouts, so
 * "full, on" opens on camera and "on, full" ends on camera after everything is revealed.
 * @param {string[]} cams
 * @param {number} frags
 * @returns {Step[]}
 */
export function stepsFor(cams, frags){
  /** @type {Step[]} */
  const out = [];
  if (!cams.length){
    for (let f = 0; f <= frags; f++) out.push({cam: 0, frag: f});
    return out;
  }
  let k = cams.findIndex(c=>!applyPreset({}, c).full);
  if (k < 0) k = cams.length - 1;
  for (let i = 0; i <= k; i++) out.push({cam: i, frag: 0});
  for (let f = 1; f <= frags; f++) out.push({cam: k, frag: f});
  for (let i = k + 1; i < cams.length; i++) out.push({cam: i, frag: frags});
  return out;
}
