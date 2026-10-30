import {test} from 'node:test';
import assert from 'node:assert/strict';
import {fingerprint, takesFromRun, boardRows, boardSession, selectionSpan, rangeOf} from '../src/core/board.js';
import {clipPlan} from '../src/core/record.js';
import {finalChapters} from '../src/core/cut.js';

const fp = {a: 'fa', b: 'fb', c: 'fc'};
const slides = [{id: 'a', title: 'A', fp: 'fa'}, {id: 'b', title: 'B', fp: 'fb'}, {id: 'c', title: 'C', fp: 'fc'}];

// a recording: a from 0 s, b from 10 s, b again from 18 s (← at 17.5 s), c from 25 s, stopped at 30 s
const run1 = {date: 'D1', picks: {}, total: 30000, events: [
  {id: 'a', title: 'A', t: 0, clip: 'r1/take-0.mp4'},
  {id: 'b', title: 'B', t: 10000, clip: 'r1/take-1.mp4'},
  {id: 'b', title: 'B', t: 18000, lead: 500, clip: 'r1/take-2.mp4'},
  {id: 'c', title: 'C', t: 25000, clip: 'r1/take-3.mp4'},
]};
// a later recording of just b
const run2 = {date: 'D2', picks: {}, total: 6000, events: [{id: 'b', title: 'B', t: 0, clip: 'r2/take-0.mp4'}]};

test('fingerprints change with the content', ()=>{
  assert.equal(fingerprint('## B\nhello'), fingerprint('## B\nhello'));
  assert.notEqual(fingerprint('## B\nhello'), fingerprint('## B\nhello!'));
});

test('a recording becomes takes in recording order, the retaken one cut at ←', ()=>{
  const t = takesFromRun(run1, 'r1', id=>fp[id]);
  assert.deepEqual(t.map(x=>[x.id, x.clip, x.ms, x.fp]), [
    ['a', 'r1/take-0.mp4', 10000, 'fa'], ['b', 'r1/take-1.mp4', 7500, 'fb'], ['b', 'r1/take-2.mp4', 7000, 'fb'], ['c', 'r1/take-3.mp4', 5000, 'fc']]);
});

const board = (picks = {}, fpNow = fp)=>({picks, takes: [...takesFromRun(run1, 'r1', id=>fp[id]), ...takesFromRun(run2, 'r2', id=>fpNow[id])]});

test('takes from every recording sit on their slide; the newest is picked', ()=>{
  const rows = boardRows(board(), slides);
  assert.deepEqual(rows.map(r=>[r.id, r.takes.map(t=>t.no), r.pick]), [
    ['a', [1], 'r1/take-0.mp4'], ['b', [1, 2, 3], 'r2/take-0.mp4'], ['c', [1], 'r1/take-3.mp4']]);
});

test('a slide edited since: its takes are outdated and not picked unless chosen', ()=>{
  const edited = slides.map(s=>s.id === 'c' ? {...s, fp: 'fc2'} : s);
  const rows = boardRows(board(), edited);
  assert.equal(rows[2].takes[0].outdated, true);
  assert.equal(rows[2].pick, null);
  assert.equal(boardRows(board({c: 'r1/take-3.mp4'}), edited)[2].pick, 'r1/take-3.mp4');
});

test('a chosen take, a slide left out, and a slide with no take yet', ()=>{
  const rows = boardRows(board({b: 'r1/take-1.mp4', a: ''}), [...slides, {id: 'd', title: 'D', fp: 'fd'}]);
  assert.deepEqual(rows.map(r=>r.pick), ['', 'r1/take-1.mp4', 'r1/take-3.mp4', null]);
});

test('the final cut plays the picked takes in deck order, with chapters and clips', ()=>{
  const s = boardSession(boardRows(board(), slides));
  assert.deepEqual(clipPlan(s).map(c=>[c.clip, c.keep]), [['r1/take-0.mp4', 10], ['r2/take-0.mp4', 6], ['r1/take-3.mp4', 5]]);
  assert.equal(s.total, 21000);
  const ch = finalChapters(s, (id, title)=>({sec: id, title}));
  assert.equal(ch.length, 21000);
});

test('record selected spans the first to the last selected slide; shift-click selects a range', ()=>{
  const order = ['a', 'b', 'c', 'd', 'e'];
  assert.deepEqual(selectionSpan(order, ['d', 'b']), {from: 'b', to: 'd'});
  assert.equal(selectionSpan(order, []), null);
  assert.deepEqual(rangeOf(order, 'b', 'd'), ['b', 'c', 'd']);
  assert.deepEqual(rangeOf(order, 'd', 'b'), ['b', 'c', 'd']);
  assert.deepEqual(rangeOf(order, null, 'c'), ['c']);
});
