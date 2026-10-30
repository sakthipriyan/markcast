import {test} from 'node:test';
import assert from 'node:assert/strict';
import {takesOf, pickedRanges, mergedRanges, finalChapters, ffmpegScript} from '../src/core/cut.js';

// title → section: slides a1/a2 are in section A, b1 in B
const SECTIONS = {a1: 'A', a2: 'A', b1: 'B'};
const sectionOf = (id, fallback)=>({sec: SECTIONS[id] || id, title: SECTIONS[id] ? 'Section ' + SECTIONS[id] : fallback});

// a1 at 0s, a2 at 20s, a retake of a2 at 30s, b1 at 50s, end at 80s (OBS clock)
const session = (picks = {})=>({
  events: [
    {id: 'a1', title: 'A1', t: 0, obsT: 0},
    {id: 'a2', title: 'A2', t: 20000, obsT: 20000},
    {id: 'a2', title: 'A2', t: 30000, obsT: 30000},
    {id: 'b1', title: 'B1', t: 50000, obsT: 50000}
  ],
  picks, total: 80000, totalObs: 80000, fps: 60, withObs: true, deckTitle: 'Deck', outputPath: '/m/raw.mov'
});

test('takes run from one event to the next', ()=>{
  const t = takesOf(session());
  assert.deepEqual(t.get('a2').takes, [{no: 1, start: 20000, end: 30000}, {no: 2, start: 30000, end: 50000}]);
  assert.deepEqual(t.get('b1').takes, [{no: 1, start: 50000, end: 80000}]);
});

test('a take that was retaken ends where ← was pressed, before the deck went back to replay the entry', ()=>{
  const s = session();
  s.events[2].lead = 800;               // ← at 29.2 s; the retake (entry included) starts at 30 s
  const t = takesOf(s).get('a2').takes;
  assert.deepEqual(t, [{no: 1, start: 20000, end: 29200}, {no: 2, start: 30000, end: 50000}]);
});

test('default pick is the last take; the retake drops the first attempt', ()=>{
  const r = pickedRanges(session());
  assert.deepEqual(r.map(x=>[x.id, x.f0, x.f1]), [['a1', 0, 1200], ['a2', 1800, 3000], ['b1', 3000, 4800]]);
  // a2's second take runs straight into b1: one cut, not two
  assert.deepEqual(mergedRanges(r).map(x=>[x.f0, x.f1]), [[0, 1200], [1800, 4800]]);
});

test('picks: an earlier take, or 0 to leave a slide out', ()=>{
  assert.deepEqual(pickedRanges(session({a2: 1})).map(x=>x.id + ':' + x.f0), ['a1:0', 'a2:1200', 'b1:3000']);
  assert.deepEqual(pickedRanges(session({a1: 0})).map(x=>x.id), ['a2', 'b1']);
});

test('cut points land on frames', ()=>{
  const s = session();
  s.events[1].obsT = 20008;                // 20.008 s at 60 fps → frame 1200.48 → 1200
  assert.equal(pickedRanges(s)[0].f1, 1200);
});

test('chapters: sections on the final timeline, first at 0:00', ()=>{
  const c = finalChapters(session(), sectionOf);
  assert.deepEqual(c.lines, ['0:00 Section A', '0:40 Section B']);
  assert.equal(c.length, 70000);
});

test('chapters shorter than 10 s are dropped', ()=>{
  const s = session();
  s.events[3].obsT = 75000;                // section B lasts 5 s
  const c = finalChapters(s, sectionOf);
  assert.deepEqual(c.lines, ['0:00 Section A']);
  assert.equal(c.dropped, 1);
});

test('ffmpeg x264: frame-exact select, explicit maps, chapters file', ()=>{
  const cmd = ffmpegScript(session(), 'x264', {input: '/m/raw.mov', outputName: 'deck-final.mp4', sectionOf});
  assert.match(cmd, /gte\(t,-0\.008333\)\*lt\(t,19\.991667\)\+gte\(t,29\.991667\)\*lt\(t,79\.991667\)/);
  assert.match(cmd, /aselect='gte\(t,0\.000000\)\*lt\(t,20\.000000\)\+gte\(t,30\.000000\)\*lt\(t,80\.000000\)'/);
  assert.match(cmd, / -map 0:v:0 -map 0:a:0 -map_metadata 1 -map_chapters 1/);
  assert.match(cmd, /START=0\nEND=40000\ntitle=Section A/);
  assert.match(cmd, /'\/m\/deck-final\.mp4'$/);
});

test('ffmpeg copy mode warns about keyframes when there is more than one cut', ()=>{
  const cmd = ffmpegScript(session(), 'copy', {input: '/m/raw.mov', outputName: 'out.mp4', sectionOf});
  assert.match(cmd, /^# Careful: without re-encoding/);
  assert.match(cmd, /inpoint 30\.000\noutpoint 80\.000/);
});

test('a rehearsal renders nothing', ()=>{
  const s = session(); s.withObs = false;
  assert.match(ffmpegScript(s, 'x264', {input: 'x', outputName: 'y', sectionOf}), /rehearsal/);
});

test('file names with quotes are shell-safe', ()=>{
  const cmd = ffmpegScript(session(), 'x264', {input: "/m/it's.mov", outputName: 'o.mp4', sectionOf});
  assert.match(cmd, /-i '\/m\/it'\\''s\.mov'/);
});

test('loudness: re-encoding commands bring the sound to -14 LUFS at 48 kHz; the copy command cannot', ()=>{
  const opts = {input: '/m/raw.mov', outputName: 'out.mp4', sectionOf, loudness: true};
  const cmd = ffmpegScript(session(), 'x264', opts);
  assert.match(cmd, /asetpts=N\/SR\/TB,loudnorm=I=-14:TP=-1:LRA=11"/);
  assert.match(cmd, / -ar 48000 /);
  assert.doesNotMatch(ffmpegScript(session(), 'x264', {...opts, loudness: false}), /loudnorm/);
  assert.doesNotMatch(ffmpegScript(session(), 'copy', opts), /loudnorm/);
});
