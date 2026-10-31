// @ts-check
// Recording in the browser: the 16:9 frame that is captured, the quality a screen allows, the recorder's
// format, and which part of which take clip goes into the final video. Pure: the app passes in what the
// browser reports.
import {takesOf} from './cut.js';

/** @typedef {{name: string, w: number, h: number, bitrate: number}} Quality */
/** @type {Quality[]} best first */
export const QUALITIES = [
  {name: '1080p', w: 1920, h: 1080, bitrate: 8e6},
  {name: '720p', w: 1280, h: 720, bitrate: 5e6},
];
export const AUDIO_BITRATE = 192e3;
export const FPS = 30;

/**
 * The largest 16:9 rectangle that fits a w×h area, centred in it.
 * @param {number} w @param {number} h
 */
export function frame16x9(w, h){
  const fw = Math.min(w, h * 16 / 9), fh = fw * 9 / 16;
  return {w: fw, h: fh, x: (w - fw) / 2, y: (h - fh) / 2};
}

/**
 * The best quality a w×h area (CSS pixels, at a device pixel ratio) can record at: the 16:9 frame in it, in
 * device pixels, must cover the output size. null when it can't make even 720p.
 * @param {number} w @param {number} h @param {number} dpr
 * @returns {{quality: Quality | null, device: [number, number]}}
 */
export function bestQuality(w, h, dpr){
  const f = frame16x9(w, h);
  const device = /** @type {[number, number]} */ ([Math.floor(f.w * dpr), Math.floor(f.h * dpr)]);
  return {quality: QUALITIES.find(q=>device[0] >= q.w && device[1] >= q.h) || null, device};
}

/** What the recorder writes, best first: MP4 (H.264 + AAC) where the browser can, otherwise WebM. */
export const RECORDING_TYPES = [
  'video/mp4;codecs=avc1.640028,mp4a.40.2', 'video/mp4;codecs=avc1,mp4a.40.2', 'video/mp4',
  'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm',
];
/** @param {(type: string) => boolean} isSupported */
export const recordingType = isSupported=>RECORDING_TYPES.find(t=>isSupported(t)) || '';
/** @param {string} type */
export const clipExt = type=>type.startsWith('video/mp4') ? 'mp4' : 'webm';

/** Bytes a minute of recording takes at a quality, sound included. @param {Quality} q */
export const bytesPerMinute = q=>Math.round((q.bitrate + AUDIO_BITRATE) / 8 * 60);

/**
 * @typedef {object} ClipPart  one picked take: its clip, and how many seconds of it from its start
 * @property {string} id
 * @property {string} title
 * @property {string} clip
 * @property {number} keep
 */

/**
 * The picked take of each slide (default: the last), in the order slides were first reached, as the clip
 * it was recorded into and how much of it to keep. A take's clip starts when the take does; it ends where
 * the take recorded after it began (or where the recording stopped), and the rest is the next take's.
 * @param {{events: {id: string, title: string, t: number, clip?: string}[], picks: Record<string, number>, total: number}} sess
 * @returns {ClipPart[]}
 */
export function clipPlan(sess){
  /** @type {Map<string, number[]>} each slide's events, in order */
  const evs = new Map();
  sess.events.forEach((e, i)=>{ if (!evs.has(e.id)) evs.set(e.id, []); /** @type {number[]} */ (evs.get(e.id)).push(i); });
  /** @type {ClipPart[]} */
  const out = [];
  takesOf(/** @type {any} */ (sess)).forEach(slide=>{
    const pick = sess.picks[slide.id] ?? slide.takes.length;
    const take = pick ? slide.takes[pick - 1] : null;
    if (!take) return;                       // 0 = leave this slide out
    const e = sess.events[/** @type {number[]} */ (evs.get(slide.id))[pick - 1]];
    if (e && e.clip && take.end > take.start) out.push({id: slide.id, title: slide.title, clip: e.clip, keep: (take.end - take.start) / 1000});
  });
  return out;
}

/**
 * A timestamp for the joined file that is never at or before the one before it: a recorder now and then
 * stamps two frames alike, and some players and muxers reject that.
 * @param {number} prev @param {number} t  seconds
 */
export const afterPrevious = (prev, t)=>t > prev ? t : prev + 0.001;

/**
 * A device's name as people know it: without the USB ids Chrome adds ("MacBook Pro Camera (0000:0001)").
 * @param {string} label
 */
export const deviceName = label=>label.replace(/\s*\([0-9a-f]{4}:[0-9a-f]{4}\)\s*$/i, '');

/**
 * A video size the way people say it: the short side and "p" (1080p), and "portrait" when it is taller than
 * wide (a Short or a Reel: 1080p portrait).
 * @param {number} w @param {number} h
 */
export const sizeName = (w, h)=>Math.min(w, h) + 'p' + (h > w ? ' portrait' : '');
