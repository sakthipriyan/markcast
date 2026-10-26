import {test} from 'node:test';
import assert from 'node:assert/strict';
import {youtubeVideo, parseStart, embedUrl} from '../src/core/media.js';

test('YouTube links in their usual forms', ()=>{
  assert.deepEqual(youtubeVideo('https://youtu.be/dQw4w9WgXcQ'), {id: 'dQw4w9WgXcQ', start: 0, portrait: false});
  assert.deepEqual(youtubeVideo('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=90'), {id: 'dQw4w9WgXcQ', start: 90, portrait: false});
  assert.deepEqual(youtubeVideo('https://youtu.be/dQw4w9WgXcQ?t=1m30s'), {id: 'dQw4w9WgXcQ', start: 90, portrait: false});
  assert.deepEqual(youtubeVideo('https://m.youtube.com/shorts/abcdefghijk'), {id: 'abcdefghijk', start: 0, portrait: true});
  assert.deepEqual(youtubeVideo('https://www.youtube.com/live/abcdefghijk'), {id: 'abcdefghijk', start: 0, portrait: false});
});

test('anything else is not a video', ()=>{
  assert.equal(youtubeVideo('https://www.youtube.com/playlist?list=PL123'), null);
  assert.equal(youtubeVideo('https://www.youtube.com/@channel'), null);
  assert.equal(youtubeVideo('https://example.com/watch?v=dQw4w9WgXcQ'), null);
  assert.equal(youtubeVideo('not a url'), null);
});

test('start times', ()=>{
  assert.equal(parseStart('90'), 90);
  assert.equal(parseStart('1h2m3s'), 3723);
  assert.equal(parseStart(''), 0);
  assert.equal(parseStart('nonsense'), 0);
});

test('the embed is privacy-friendly and scriptable', ()=>{
  assert.equal(embedUrl({id: 'abc_def-123', start: 30}), 'https://www.youtube-nocookie.com/embed/abc_def-123?enablejsapi=1&rel=0&playsinline=1&start=30');
});
