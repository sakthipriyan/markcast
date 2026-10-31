import {test} from 'node:test';
import assert from 'node:assert/strict';
import {frame16x9, bestQuality, recordingType, clipExt, bytesPerMinute, QUALITIES, clipPlan, afterPrevious, deviceName, sizeName} from '../src/core/record.js';

test('the 16:9 frame fits the area and is centred', ()=>{
  assert.deepEqual(frame16x9(1440, 900), {w: 1440, h: 810, x: 0, y: 45});      // 16:10: bars top and bottom
  assert.deepEqual(frame16x9(2560, 1080), {w: 1920, h: 1080, x: 320, y: 0});   // ultrawide: bars at the sides
});

test('quality from the frame in device pixels', ()=>{
  // a 13" Retina MacBook in fullscreen: 1440×900 at 2× → 2880×1620
  assert.deepEqual(bestQuality(1440, 900, 2), {quality: QUALITIES[0], device: [2880, 1620]});
  // a 1366×768 laptop at 1×: a 1365×768 frame, enough for 720p; a 1024×768 screen is not
  assert.equal(bestQuality(1366, 768, 1).quality.name, '720p');
  assert.equal(bestQuality(1024, 768, 1).quality, null);
  assert.equal(bestQuality(1280, 800, 1).quality.name, '720p');
  assert.equal(bestQuality(1920, 1080, 1).quality.name, '1080p');
  // a small window on a Retina screen still makes 720p
  assert.equal(bestQuality(800, 600, 2).quality.name, '720p');
  assert.equal(bestQuality(600, 400, 2).quality, null);
});

test('the recorder writes MP4 where it can, WebM otherwise', ()=>{
  assert.equal(recordingType(t=>t.startsWith('video/mp4;codecs=avc1.640028')), 'video/mp4;codecs=avc1.640028,mp4a.40.2');
  assert.equal(recordingType(t=>t.startsWith('video/webm')), 'video/webm;codecs=vp9,opus');
  assert.equal(recordingType(()=>false), '');
  assert.equal(clipExt('video/mp4;codecs=avc1'), 'mp4');
  assert.equal(clipExt('video/webm;codecs=vp9'), 'webm');
  assert.equal(bytesPerMinute(QUALITIES[0]), 61440000);   // about 61 MB a minute at 1080p
});

// a1 from 0 s; a2 from 20 s, said again at 30 s; b1 from 50 s; stopped at 80 s. Every event has its clip.
const session = (picks = {})=>({
  events: [
    {id: 'a1', title: 'A1', t: 0, clip: 'take-0.mp4'},
    {id: 'a2', title: 'A2', t: 20000, clip: 'take-1.mp4'},
    {id: 'a2', title: 'A2', t: 30000, clip: 'take-2.mp4'},
    {id: 'b1', title: 'B1', t: 50000, clip: 'take-3.mp4'},
  ],
  picks, total: 80000,
});

test('the picked take of each slide is its clip, kept up to where the next take began', ()=>{
  assert.deepEqual(clipPlan(session()), [
    {id: 'a1', title: 'A1', clip: 'take-0.mp4', keep: 20},
    {id: 'a2', title: 'A2', clip: 'take-2.mp4', keep: 20},
    {id: 'b1', title: 'B1', clip: 'take-3.mp4', keep: 30},
  ]);
});

test('an earlier take or leaving a slide out changes the clips', ()=>{
  assert.deepEqual(clipPlan(session({a2: 1, b1: 0})).map(c=>[c.clip, c.keep]), [['take-0.mp4', 20], ['take-1.mp4', 10]]);
});

test('takes without a clip (an OBS session) are not in the plan', ()=>{
  const s = session();
  s.events.forEach(e=>{ delete e.clip; });
  assert.deepEqual(clipPlan(s), []);
});

test('joined timestamps always move forward', ()=>{
  assert.equal(afterPrevious(1.5, 1.6), 1.6);
  assert.equal(afterPrevious(1.5, 1.5), 1.501);
  assert.equal(afterPrevious(1.5, 1.2), 1.501);
});

test('a length reads in words: 45s, 1m 09s, 1h 02m', async ()=>{
  const {fmtLength} = await import('../src/core/text.js');
  assert.deepEqual([45e3, 69e3, 166e3, 3725e3].map(fmtLength), ['45s', '1m 09s', '2m 46s', '1h 02m']);
});

test('device names drop the USB ids Chrome adds', ()=>{
  assert.equal(deviceName('MacBook Pro Camera (0000:0001)'), 'MacBook Pro Camera');
  assert.equal(deviceName('Sennheiser Profile (1377:1100)'), 'Sennheiser Profile');
  assert.equal(deviceName('Studio Mic (USB)'), 'Studio Mic (USB)');
});

test('video sizes read as 1080p, or 1080p portrait when taller than wide', ()=>{
  assert.equal(sizeName(1920, 1080), '1080p');
  assert.equal(sizeName(1280, 720), '720p');
  assert.equal(sizeName(1080, 1920), '1080p portrait');
});
