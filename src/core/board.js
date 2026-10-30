// @ts-check
// A deck's take board: every take of every slide from every recording made in the browser, in one place.
// Each take remembers what its slide said, so editing a slide marks its old takes outdated. Pure.
import {takesOf} from './cut.js';

/**
 * @typedef {object} BoardTake
 * @property {string} uid    its clip's path, unique on the board
 * @property {string} id     the slide
 * @property {string} title
 * @property {string} clip   "<recording>/<file>" in the browser's private storage
 * @property {number} ms     how much of the clip is the take
 * @property {string} run    the recording it came from
 * @property {string} date   when that recording was made
 * @property {string} fp     the slide's fingerprint when it was recorded
 *
 * @typedef {{takes: BoardTake[], picks: Record<string, string>}} Board  picks: slide id → take uid ('' leaves it out)
 * @typedef {{id: string, title: string, fp: string}} DeckSlide
 * @typedef {BoardTake & {no: number, outdated: boolean}} RowTake
 * @typedef {{id: string, title: string, takes: RowTake[], pick: string | null}} Row  pick: a uid, '' left out, null no take
 */

/** A short hash of a slide's content (FNV-1a). @param {string} text */
export function fingerprint(text){
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++){ h ^= text.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(36);
}

/**
 * The takes one recording made, in the order they were recorded.
 * @param {{events: {id: string, title: string, t: number, clip?: string, lead?: number}[], picks: Record<string, number>, total: number, date: string}} sess
 * @param {string} run
 * @param {(id: string) => string} fpOf  the fingerprint of a slide now
 * @returns {BoardTake[]}
 */
export function takesFromRun(sess, run, fpOf){
  /** @type {Map<string, {clip?: string}[]>} */
  const evs = new Map();
  sess.events.forEach(e=>{ if (!evs.has(e.id)) evs.set(e.id, []); /** @type {any[]} */ (evs.get(e.id)).push(e); });
  /** @type {(BoardTake & {at: number})[]} */
  const out = [];
  takesOf(/** @type {any} */ (sess)).forEach(slide=>slide.takes.forEach((t, k)=>{
    const e = /** @type {any[]} */ (evs.get(slide.id))[k];
    if (!e || !e.clip || t.end <= t.start) return;
    out.push({uid: e.clip, id: slide.id, title: slide.title, clip: e.clip, ms: t.end - t.start, run, date: sess.date, fp: fpOf(slide.id), at: t.start});
  }));
  return out.sort((a, b)=>a.at - b.at).map(({at, ...take})=>take);
}

/**
 * Every slide of the deck, in order, with its takes. A take of a slide that has changed since is outdated;
 * the pick is the one chosen, or else the newest take that is not outdated.
 * @param {Board} board
 * @param {DeckSlide[]} slides
 * @returns {Row[]}
 */
export function boardRows(board, slides){
  return slides.map(s=>{
    const takes = board.takes.filter(t=>t.id === s.id).map((t, i)=>({...t, no: i + 1, outdated: t.fp !== s.fp}));
    const chosen = board.picks[s.id];
    let pick = null;
    if (chosen === '') pick = '';
    else if (chosen && takes.some(t=>t.uid === chosen)) pick = chosen;
    else {
      const fresh = takes.filter(t=>!t.outdated);
      pick = fresh.length ? fresh[fresh.length - 1].uid : null;
    }
    return {id: s.id, title: s.title, takes, pick};
  });
}

/**
 * The final cut as a recording session: the picked takes back to back, in deck order. Chapters, the clip
 * plan and the publish pack work on it as on any recording.
 * @param {Row[]} rows
 */
export function boardSession(rows){
  /** @type {{id: string, title: string, t: number, clip: string}[]} */
  const events = [];
  let t = 0;
  rows.forEach(r=>{
    const take = r.pick ? r.takes.find(x=>x.uid === r.pick) : null;
    if (!take) return;
    events.push({id: r.id, title: r.title, t, clip: take.clip});
    t += take.ms;
  });
  return {events, picks: {}, total: t};
}

/**
 * What "Record selected" records: from the first selected slide to the last, in deck order.
 * @param {string[]} order @param {Iterable<string>} selected
 * @returns {{from: string, to: string} | null}
 */
export function selectionSpan(order, selected){
  const set = new Set(selected);
  const idx = order.map((id, i)=>set.has(id) ? i : -1).filter(i=>i >= 0);
  return idx.length ? {from: order[idx[0]], to: order[idx[idx.length - 1]]} : null;
}

/**
 * A shift-click: everything between the slide clicked before and this one becomes selected.
 * @param {string[]} order @param {string | null} anchor @param {string} id
 */
export function rangeOf(order, anchor, id){
  const a = anchor ? order.indexOf(anchor) : -1, b = order.indexOf(id);
  if (a < 0 || b < 0) return [id];
  return order.slice(Math.min(a, b), Math.max(a, b) + 1);
}
