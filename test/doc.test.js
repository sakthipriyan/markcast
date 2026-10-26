import {test} from 'node:test';
import assert from 'node:assert/strict';
import {routeOf, originLabel, makeCopy, isEdited, matchesOrigin, parseCopy} from '../src/core/doc.js';
import {shortLink} from '../src/core/source.js';

test('routes', ()=>{
  assert.deepEqual(routeOf('/', '', ''), {page: 'source', source: {kind: 'builtin', id: 'home'}, slide: ''});
  assert.deepEqual(routeOf('/help', '', '#keys'), {page: 'source', source: {kind: 'builtin', id: 'help'}, slide: 'keys'});
  assert.deepEqual(routeOf('/edit', '', '#two'), {page: 'edit', slide: 'two'});
  assert.deepEqual(routeOf('/examples', '', ''), {page: 'source', source: {kind: 'builtin', id: 'showcase'}, slide: ''});
  assert.deepEqual(routeOf('/new', '', ''), {page: 'pick'});
  assert.deepEqual(routeOf('/new', '?template=talk', ''), {page: 'source', source: {kind: 'builtin', id: 'template:talk'}, slide: ''});
  assert.deepEqual(routeOf('/new', '?template=nope', ''), {page: 'pick'});
  assert.deepEqual(routeOf('/share', '', '#deflate:abc~s'), {page: 'share', data: 'abc', slide: 's'});
  assert.equal(routeOf('/share', '', '').page, 'source');            // nothing to show: home
  assert.equal(routeOf('/gh/a/b/d.md', '', '').source.url, 'https://raw.githubusercontent.com/a/b/HEAD/d.md');
  assert.deepEqual(routeOf('/', '?src=https://x.org/d.md', '').source, {kind: 'url', url: 'https://x.org/d.md'});
  assert.equal(routeOf('/whatever', '', '').source.id, 'home');
});

test('builtin short links', ()=>{
  assert.equal(shortLink({kind: 'builtin', id: 'home'}), '/');
  assert.equal(shortLink({kind: 'builtin', id: 'help'}), '/help');
  assert.equal(shortLink({kind: 'builtin', id: 'showcase'}), '/examples');
  assert.equal(shortLink({kind: 'builtin', id: 'template:talk'}), '/new?template=talk');
});

test('labels', ()=>{
  assert.equal(originLabel({kind: 'builtin', id: 'help'}), 'Help');
  assert.equal(originLabel({kind: 'builtin', id: 'template:talk'}), 'the talk template');
  assert.equal(originLabel({kind: 'url', url: 'https://raw.githubusercontent.com/a/b/HEAD/talks/x.md'}), 'a/b/talks/x.md');
  assert.equal(originLabel({kind: 'url', url: 'https://example.com/d/deck.md'}), 'example.com/d/deck.md');
  assert.equal(originLabel({kind: 'file', name: 'talk.md'}), 'talk.md');
});

test('the copy: edited until saved or shared, reset by matching the original', ()=>{
  const c = makeCopy('# A', {kind: 'builtin', id: 'help'});
  assert.equal(isEdited(c), false);
  c.text = '# A!';
  assert.equal(isEdited(c), true);
  assert.equal(matchesOrigin(c), false);
  c.exported = c.text;                       // saved or shared
  assert.equal(isEdited(c), false);
  c.text = c.originText;                     // reset to the original
  assert.equal(matchesOrigin(c), true);
  // a file opened from disk starts out saved
  assert.equal(isEdited(makeCopy('x', {kind: 'file', name: 'x.md'}, {exported: true})), false);
});

test('stored copies are read defensively', ()=>{
  assert.equal(parseCopy('nope'), null);
  assert.equal(parseCopy('{"text":1}'), null);
  assert.deepEqual(parseCopy(JSON.stringify(makeCopy('t', {kind: 'shared'}))), {text: 't', origin: {kind: 'shared'}, originText: 't', exported: null});
});
