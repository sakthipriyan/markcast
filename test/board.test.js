import {test} from 'node:test';
import assert from 'node:assert/strict';
import {fingerprint, deckSlides, takesFromRun, boardRows, boardSession, selectionSpan, rangeOf} from '../src/core/board.js';
import {clipPlan} from '../src/core/record.js';
import {finalChapters} from '../src/core/cut.js';

// the deck: slides a, b, c with their fingerprints
const deck = (order, fps = {})=>deckSlides(order, id=>({title: id.toUpperCase(), fp: fps[id] || 'f' + id}));
const slides = deck(['a', 'b', 'c']);

// a recording: a from 0 s, b from 10 s, b again from 18 s (← at 17.5 s), c from 25 s, stopped at 30 s
const run1 = {date: 'D1', picks: {}, total: 30000, events: [
  {id: 'a', title: 'A', t: 0, clip: 'r1/take-0.mp4'},
  {id: 'b', title: 'B', t: 10000, clip: 'r1/take-1.mp4'},
  {id: 'b', title: 'B', t: 18000, lead: 500, clip: 'r1/take-2.mp4'},
  {id: 'c', title: 'C', t: 25000, clip: 'r1/take-3.mp4'},
]};
// a later recording of just b
const run2 = {date: 'D2', picks: {}, total: 6000, events: [{id: 'b', title: 'B', t: 0, clip: 'r2/take-0.mp4'}]};
const board = (picks = {})=>({picks, takes: [...takesFromRun(run1, 'r1', slides), ...takesFromRun(run2, 'r2', slides)]});

test('fingerprints change with the content', ()=>{
  assert.equal(fingerprint('## B\nhello'), fingerprint('## B\nhello'));
  assert.notEqual(fingerprint('## B\nhello'), fingerprint('## B\nhello!'));
});

test('the deck as compared: each slide with the slide before it', ()=>{
  assert.deepEqual(slides.map(s=>[s.id, s.prev, s.prevFp]), [['a', '', ''], ['b', 'a', 'fa'], ['c', 'b', 'fb']]);
});

test('a recording becomes takes in recording order, the retaken one cut at ←, each knowing the slide before', ()=>{
  const t = takesFromRun(run1, 'r1', slides);
  assert.deepEqual(t.map(x=>[x.id, x.clip, x.ms, x.fp, x.prev]), [
    ['a', 'r1/take-0.mp4', 10000, 'fa', ''], ['b', 'r1/take-1.mp4', 7500, 'fb', 'a'], ['b', 'r1/take-2.mp4', 7000, 'fb', 'a'], ['c', 'r1/take-3.mp4', 5000, 'fc', 'b']]);
});

test('takes from every recording sit on their slide; the newest is picked', ()=>{
  const rows = boardRows(board(), slides);
  assert.deepEqual(rows.map(r=>[r.id, r.takes.map(t=>t.no), r.pick]), [
    ['a', [1], 'r1/take-0.mp4'], ['b', [1, 2, 3], 'r2/take-0.mp4'], ['c', [1], 'r1/take-3.mp4']]);
  assert.ok(rows.every(r=>r.takes.every(t=>t.outdated === '')));
});

test('editing a slide outdates its takes and the takes of the slide after it', ()=>{
  const rows = boardRows(board(), deck(['a', 'b', 'c'], {b: 'fb2'}));
  assert.deepEqual(rows.map(r=>[r.id, r.takes.map(t=>t.outdated), r.pick]), [
    ['a', [''], 'r1/take-0.mp4'], ['b', ['slide', 'slide', 'slide'], null], ['c', ['before'], null]]);
});

test('deleting a slide outdates the slide after it: its entry came from the deleted one', ()=>{
  const rows = boardRows(board(), deck(['a', 'c']));
  assert.deepEqual(rows.map(r=>[r.id, r.takes.map(t=>t.outdated), r.pick]), [['a', [''], 'r1/take-0.mp4'], ['c', ['before'], null]]);
});

test('an outdated take can still be picked by hand; a slide with no take is skipped', ()=>{
  const edited = deck(['a', 'b', 'c', 'd'], {c: 'fc2'});
  const rows = boardRows(board({b: 'r1/take-1.mp4', c: 'r1/take-3.mp4'}), edited);
  assert.deepEqual(rows.map(r=>r.pick), ['r1/take-0.mp4', 'r1/take-1.mp4', 'r1/take-3.mp4', null]);
  assert.deepEqual(boardSession(rows).events.map(e=>e.id), ['a', 'b', 'c']);
});

test('the final cut plays the picked takes in deck order, with chapters and clips', ()=>{
  const s = boardSession(boardRows(board(), slides));
  assert.deepEqual(clipPlan(s).map(c=>[c.clip, c.keep]), [['r1/take-0.mp4', 10], ['r2/take-0.mp4', 6], ['r1/take-3.mp4', 5]]);
  assert.equal(s.total, 21000);
  assert.equal(finalChapters(s, (id, title)=>({sec: id, title})).length, 21000);
});

test('recording a selection spans the first to the last selected slide; shift-click selects a range', ()=>{
  const order = ['a', 'b', 'c', 'd', 'e'];
  assert.deepEqual(selectionSpan(order, ['d', 'b']), {from: 'b', to: 'd'});
  assert.equal(selectionSpan(order, []), null);
  assert.deepEqual(rangeOf(order, 'b', 'd'), ['b', 'c', 'd']);
  assert.deepEqual(rangeOf(order, 'd', 'b'), ['b', 'c', 'd']);
  assert.deepEqual(rangeOf(order, null, 'c'), ['c']);
});
