// @ts-check
// A recording session → takes per slide → the picked ranges → chapters → the ffmpeg command.
// Pure: the app passes in what it knows about the deck (which section a slide belongs to, file names).
import {fmtTime} from './text.js';

/**
 * @typedef {object} TakeEvent  one press that reached a slide during the recording
 * @property {string} id
 * @property {string} title
 * @property {number} t          ms on the browser clock since the take started
 * @property {number} [obsT]     ms on OBS's own recording clock, when OBS was connected
 * @property {number} [lead]     for a retake: ms from the ← press to this take's start, while the deck went back
 *                               to replay the slide's entry. Neither take keeps it: the one retaken ends at the press.
 * @property {number} [skip]     ms this take's start is moved in: with OBS a retake holds still a moment before its
 *                               entry, and the cut starts inside that hold, so a cut point a little early or late
 *                               (OBS reports time as encoded, a few hundred ms behind the screen) still joins.
 *
 * @typedef {object} Session
 * @property {TakeEvent[]} events
 * @property {Record<string, number>} picks  slide id → take number (0 = leave out); default is the last take
 * @property {number} total
 * @property {number} [totalObs]
 * @property {number} [fps]
 * @property {boolean} [withObs]
 * @property {string} [outputPath]
 * @property {string} [deckTitle]
 *
 * @typedef {{no: number, start: number, end: number}} Take
 * @typedef {{id: string, title: string, takes: Take[]}} SlideTakes
 * @typedef {{id: string, title: string, f0: number, f1: number, start: number, end: number}} Range
 * @typedef {(id: string, fallbackTitle: string) => {sec: string, title: string}} SectionOf  a slide's section and its title
 */

/** @param {TakeEvent} e */
const evTime = e=>e.obsT ?? e.t;
/** @param {Session} sess */
export const sessionFps = sess=>sess.fps || 60;
/** @param {number} ms @param {number} fps */
const toFrame = (ms, fps)=>Math.round(ms * fps / 1000);

/** Every slide attempt runs from its start to the next event (or the end of the recording); an attempt that was
 * taken again ends where ← was pressed. @param {Session} sess */
export function takesOf(sess){
  /** @type {Map<string, SlideTakes>} */
  const out = new Map();
  const end = sess.totalObs ?? sess.total;
  sess.events.forEach((e, i)=>{
    if (!out.has(e.id)) out.set(e.id, {id: e.id, title: e.title, takes: []});
    const slide = /** @type {SlideTakes} */ (out.get(e.id));
    const next = sess.events[i + 1];
    slide.takes.push({no: slide.takes.length + 1, start: evTime(e) + (e.skip || 0), end: next ? evTime(next) - (next.lead || 0) : end});
  });
  return out;   // in the order slides were first reached
}

/**
 * The picked take of each slide (default: the last attempt) as ranges of the recording, in order. Cut points
 * sit on frame boundaries, so video and audio are cut at exactly the same moments.
 * @param {Session} sess
 * @returns {Range[]}
 */
export function pickedRanges(sess){
  /** @type {Range[]} */
  const ranges = [];
  const fps = sessionFps(sess);
  takesOf(sess).forEach(slide=>{
    const pick = sess.picks[slide.id] ?? slide.takes.length;
    if (!pick) return;                       // 0 = leave this slide out
    const t = slide.takes[pick - 1];
    if (!t) return;
    const f0 = toFrame(t.start, fps), f1 = toFrame(t.end, fps);
    if (f1 > f0) ranges.push({id: slide.id, title: slide.title, f0, f1, start: f0 * 1000 / fps, end: f1 * 1000 / fps});
  });
  return ranges;
}

/** Back-to-back ranges become one, so a take without retakes is a single cut. @param {Range[]} ranges */
export function mergedRanges(ranges){
  /** @type {{f0: number, f1: number, start: number, end: number}[]} */
  const out = [];
  ranges.forEach(r=>{
    const last = out[out.length - 1];
    if (last && r.f0 === last.f1){ last.f1 = r.f1; last.end = r.end; }
    else out.push({f0: r.f0, f1: r.f1, start: r.start, end: r.end});
  });
  return out;
}

/**
 * Chapters on the final timeline: the deck's sections, where they start once the picked takes are joined.
 * @param {Session} sess
 * @param {SectionOf} sectionOf
 */
export function sectionChapters(sess, sectionOf){
  let at = 0;
  /** @type {{sec: string, title: string, t: number}[]} */
  const list = [];
  pickedRanges(sess).forEach(r=>{
    const {sec, title} = sectionOf(r.id, r.title);
    const last = list[list.length - 1];
    if (!last || last.sec !== sec && last.title !== title) list.push({sec, title, t: at});
    at += r.end - r.start;
  });
  return {list, length: at};
}

/**
 * YouTube chapters: the first at 0:00 and every chapter at least 10 seconds long.
 * @param {Session} sess
 * @param {SectionOf} sectionOf
 */
export function finalChapters(sess, sectionOf){
  const {list, length: at} = sectionChapters(sess, sectionOf);
  const kept = list.filter((c, i)=>i === 0 || (list[i + 1] ? list[i + 1].t : at) - c.t >= 10000);
  if (kept.length) kept[0].t = 0;
  return {lines: kept.map(c=>fmtTime(c.t) + ' ' + c.title), dropped: list.length - kept.length, length: at};
}

/** @param {unknown} p */
export const baseName = p=>String(p || '').split(/[\\/]/).pop() || '';
/** @param {unknown} p */
export const dirName = p=>{ const i = Math.max(String(p).lastIndexOf('/'), String(p).lastIndexOf('\\')); return i >= 0 ? String(p).slice(0, i + 1) : ''; };
/** Single-quoted for the shell. @param {unknown} p */
export const shq = p=>"'" + String(p).replace(/'/g, "'\\''") + "'";
/** @param {number} ms */
const secs = ms=>(ms / 1000).toFixed(3);

/**
 * The shell commands that render the final cut.
 * @param {Session} sess
 * @param {'x264' | 'mac' | 'copy' | string} mode  frame-accurate x264, frame-accurate Mac hardware, or keyframe copy
 * @param {{input: string, outputName: string, sectionOf: SectionOf, loudness?: boolean}} opts  loudness: bring the sound
 *   to YouTube's level (-14 LUFS, peaks under -1 dB); only where the audio is re-encoded anyway
 */
export function ffmpegScript(sess, mode, {input, outputName, sectionOf, loudness}){
  const ranges = mergedRanges(pickedRanges(sess));
  if (!sess.withObs) return '# This was a rehearsal: nothing was recorded.';
  if (!ranges.length) return '# Every slide is left out: nothing to render.';
  const output = dirName(input) + outputName;
  // chapters for the final cut, written into the file (players show them; YouTube reads the description).
  // Only the picked video and audio are kept: OBS's own chapter track still spans the raw recording
  // and would make players report the uncut length.
  const {list, length} = sectionChapters(sess, sectionOf);
  /** @param {unknown} v */
  const esc = v=>String(v).replace(/[=;#\\\n]/g, m=>'\\' + m);
  const meta = ';FFMETADATA1\ntitle=' + esc(sess.deckTitle) + '\n' + list.map((c, i)=>
    '[CHAPTER]\nTIMEBASE=1/1000\nSTART=' + Math.round(c.t) + '\nEND=' + Math.round(list[i + 1] ? list[i + 1].t : length) + '\ntitle=' + esc(c.title)).join('\n');
  const chapters = "cat > /tmp/slidetake-chapters.txt <<'EOF'\n" + meta + "\nEOF\n";
  const maps = ' -map 0:v:0 -map 0:a:0 -map_metadata 1 -map_chapters 1';
  if (mode === 'copy'){
    const cuts = ranges.map(r=>'file ' + shq(input) + '\ninpoint ' + secs(r.start) + '\noutpoint ' + secs(r.end)).join('\n');
    const warn = ranges.length > 1
      ? '# Careful: without re-encoding, cuts can only land on keyframes (OBS puts one about every 2 s),\n# so ' + (ranges.length === 2 ? 'the cut' : 'each of the ' + (ranges.length - 1) + ' cuts') + ' here may keep or lose up to ~2 s. Use a frame-accurate option for retakes.\n'
      : '';
    return warn + "cat > /tmp/slidetake-cuts.txt <<'EOF'\n" + cuts + "\nEOF\n" + chapters +
      'ffmpeg -f concat -safe 0 -i /tmp/slidetake-cuts.txt -i /tmp/slidetake-chapters.txt' + maps + ' -c copy -movflags +faststart ' + shq(output);
  }
  // one pass: keep frames f0 … f1-1 of each picked range, then renumber timestamps so they play back to back.
  // Video thresholds sit half a frame early so float timestamps can't land on the wrong side of a boundary;
  // audio is regrouped into 1 ms blocks (48 samples) and cut at the very same frame times, so audio and
  // video stay in sync however many cuts there are.
  const fps = sessionFps(sess);
  /** @param {number} f */
  const at = f=>(f / fps).toFixed(6);
  /** @param {number} f */
  const half = f=>((f - 0.5) / fps).toFixed(6);
  const vKeep = ranges.map(r=>'gte(t,' + half(r.f0) + ')*lt(t,' + half(r.f1) + ')').join('+');
  const aKeep = ranges.map(r=>'gte(t,' + at(r.f0) + ')*lt(t,' + at(r.f1) + ')').join('+');
  const video = mode === 'mac' ? '-c:v h264_videotoolbox -b:v 12M' : '-c:v libx264 -crf 18 -preset medium';
  return chapters + 'ffmpeg -i ' + shq(input) + ' -i /tmp/slidetake-chapters.txt' + maps +
    ' -vf "select=\'' + vKeep + '\',setpts=N/FRAME_RATE/TB"' +
    ' -af "asetnsamples=n=48:p=0,aselect=\'' + aKeep + '\',asetpts=N/SR/TB' + (loudness ? ',loudnorm=I=-14:TP=-1:LRA=11' : '') + '"' +
    (loudness ? ' -ar 48000' : '') +    // loudnorm works at 192 kHz; the file goes back to 48 kHz
    ' ' + video + ' -c:a aac -b:a 192k -movflags +faststart ' + shq(output);
}
