import {test} from 'node:test';
import assert from 'node:assert/strict';
import {loudnessMeter, gainToTarget, dbToGain} from '../src/core/loudness.js';

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

test('gain reaches -14 LUFS unless the peaks would pass the ceiling first', ()=>{
  near(gainToTarget({integrated: -22, peakDb: -12}), 8, 1e-9);        // room to spare: all the way
  near(gainToTarget({integrated: -24, peakDb: -6}), 4.5, 1e-9);        // peaks stop it at -1.5 dB
  near(gainToTarget({integrated: -10, peakDb: -1}), -4, 1e-9);         // too loud: turned down
  assert.equal(gainToTarget({integrated: -16, peakDb: 1.4}), 0);          // quiet but already clipping: left alone
  near(dbToGain(6.0206), 2, 1e-4);
});
