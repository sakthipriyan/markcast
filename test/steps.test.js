import {test} from 'node:test';
import assert from 'node:assert/strict';
import {applyPreset, stepsFor, cameraPresets} from '../src/core/steps.js';

test('no camera: one step per fragment, plus the bare slide', ()=>{
  assert.deepEqual(stepsFor([], 2), [{cam: 0, frag: 0}, {cam: 0, frag: 1}, {cam: 0, frag: 2}]);
});

test('"full, on": opens on camera, then the slide and its fragments', ()=>{
  assert.deepEqual(stepsFor(cameraPresets('full, on'), 1), [{cam: 0, frag: 0}, {cam: 1, frag: 0}, {cam: 1, frag: 1}]);
});

test('"on, full, on, off": fragments first, the remaining camera layouts at the end', ()=>{
  assert.deepEqual(stepsFor(cameraPresets('on, full, on, off'), 1), [
    {cam: 0, frag: 0}, {cam: 0, frag: 1}, {cam: 1, frag: 1}, {cam: 2, frag: 1}, {cam: 3, frag: 1}
  ]);
});

test('"off, on" (the Disclaimer): content first, camera back on the next press', ()=>{
  assert.deepEqual(stepsFor(cameraPresets('off, on'), 0), [{cam: 0, frag: 0}, {cam: 1, frag: 0}]);
});

test('presets', ()=>{
  assert.deepEqual(applyPreset({}, 'full'), {full: true, off: false, used: true});
  assert.equal(applyPreset({}, '30%').size, 30);
  assert.equal(applyPreset({}, '90%').size, 60);          // clamped
  assert.equal(applyPreset({}, 'top-left').corner, 'top-left');
  assert.deepEqual(applyPreset({flip: true}, 'flip').flip, false);
  assert.equal(applyPreset({}, 'off').off, true);
});
