import {test} from 'node:test';
import assert from 'node:assert/strict';
import {loudnessMeter, gainToTarget, dbToGain, peakLimiter, MAX_BOOST_DB} from '../src/core/loudness.js';

// a 1 kHz sine, the same in both channels, at a level in dBFS, fed in 0.5 s pieces like decoded audio
function measure(parts, rate = 48000){
  const m = loudnessMeter(rate, 2);
  let n = 0;
  for (const [secs, dbfs] of parts){
    const amp = dbfs === null ? 0 : Math.pow(10, dbfs / 20);
    for (let left = Math.round(secs * rate); left > 0;){
      const len = Math.min(left, rate / 2), x = new Float32Array(len);
      for (let i = 0; i < len; i++, n++) x[i] = amp * Math.sin(2 * Math.PI * 1000 * n / rate);
      m.add([x, x]);
      left -= len;
    }
  }
  return m.result();
}
const near = (a, b, tol = 0.1)=>assert.ok(Math.abs(a - b) <= tol, a + ' is not within ' + tol + ' of ' + b);

// EBU Tech 3341 reference cases (minimum requirements for a loudness meter)
test('a stereo 1 kHz sine at -23 dBFS reads -23 LUFS', ()=>near(measure([[20, -23]]).integrated, -23));
test('the same at -33 dBFS reads -33 LUFS', ()=>near(measure([[20, -33]]).integrated, -33));
test('quiet passages 10 LU below the rest are gated out: -36, -23, -36 dBFS reads -23', ()=>
  near(measure([[10, -36], [60, -23], [10, -36]]).integrated, -23));
test('-26, -20, -26 dBFS for 20 s each reads -23 (relative gate)', ()=>near(measure([[20, -26], [20.1, -20], [20, -26]]).integrated, -23));
test('silence does not count: half silent still reads the speech level', ()=>near(measure([[10, -23], [10, null]]).integrated, -23));
test('44.1 kHz works the same', ()=>near(measure([[20, -23]], 44100).integrated, -23));

test('pure silence has no loudness and gets no gain', ()=>{
  const r = measure([[5, null]]);
  assert.equal(r.integrated, -Infinity);
  assert.equal(gainToTarget(r), 0);
});

test('the peak is the largest sample', ()=>near(measure([[2, -6]]).peakDb, -6, 0.01));

test('gain brings a recording to -14 LUFS: up for a quiet one (at most +20 dB), down for a loud one', ()=>{
  near(gainToTarget({integrated: -25.5}), 11.5, 1e-9);     // a quiet voice: all the way, peaks are the limiter's job
  near(gainToTarget({integrated: -10}), -4, 1e-9);         // too loud: turned down
  near(gainToTarget({integrated: -60}), MAX_BOOST_DB, 1e-9);
  near(dbToGain(6.0206), 2, 1e-4);
});

// the limiter, fed in pieces of 1024 frames like decoded audio, all of its output taken
function limit(x, ceilingDb = -1.5){
  const lim = peakLimiter(48000, 1, {ceilingDb});
  const out = [];
  for (let i = 0; i < x.length; i += 1024){
    lim.push([x.subarray(i, i + 1024)]);
    out.push(...lim.take(lim.ready())[0]);
  }
  lim.end();
  out.push(...lim.take(lim.ready())[0]);
  return {out: Float32Array.from(out), events: lim.events};
}
const sine = (secs, amp, f = 220)=>Float32Array.from({length: Math.round(secs * 48000)}, (_, i)=>amp * Math.sin(2 * Math.PI * f * i / 48000));
const peakOf = a=>a.reduce((m, v)=>Math.max(m, Math.abs(v)), 0);
const ceiling = dbToGain(-1.5);

test('the limiter leaves audio below the ceiling exactly as it is, every frame, in order', ()=>{
  const x = sine(2, 0.5);
  const {out, events} = limit(x);
  assert.equal(out.length, x.length);
  assert.ok(out.every((v, i)=>v === x[i]));
  assert.equal(events, 0);
});

test('a sudden click is held to the ceiling; the voice around it is untouched', ()=>{
  const x = sine(2, 0.3);
  for (let i = 48000; i < 48000 + 48; i++) x[i] = i % 2 ? 0.99 : -0.99;   // a 1 ms click, nearly full scale
  const {out, events} = limit(x);
  assert.equal(out.length, x.length);
  assert.ok(peakOf(out) <= ceiling + 1e-6, 'peak ' + peakOf(out));
  assert.equal(events, 1);
  // half a second before and after the click, nothing changed
  assert.ok(out.slice(0, 20000).every((v, i)=>v === x[i]));
  assert.ok(out.slice(96000 - 20000).every((v, i)=>v === x[96000 - 20000 + i]));
});

test('a loud passage never passes the ceiling, and changes smoothly', ()=>{
  const x = sine(1, 2.0);                                   // twice full scale, as after a big boost
  const {out} = limit(x);
  assert.ok(peakOf(out) <= ceiling + 1e-6);
  const jump = out.reduce((m, v, i)=>i ? Math.max(m, Math.abs(v - out[i - 1])) : 0, 0);
  assert.ok(jump < 0.1, 'largest step ' + jump);              // no clicks of its own
});
