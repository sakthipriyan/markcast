import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizeSource, sourceFromPath, shortLink} from '../src/core/source.js';

const RAW = 'https://raw.githubusercontent.com/';

test('GitHub page links become raw file links', ()=>{
  assert.deepEqual(normalizeSource('https://github.com/a/b/blob/main/talks/deck.md'), {kind: 'url', url: RAW + 'a/b/main/talks/deck.md'});
  assert.deepEqual(normalizeSource('github.com/a/b/raw/v1.2/deck.md'), {kind: 'url', url: RAW + 'a/b/v1.2/deck.md'});
  // a folder (a Hugo page bundle) means its index.md
  assert.deepEqual(normalizeSource('https://github.com/a/b/tree/main/slides/talk'), {kind: 'url', url: RAW + 'a/b/main/slides/talk/index.md'});
  assert.deepEqual(normalizeSource('https://github.com/a/b'), {kind: 'url', url: RAW + 'a/b/HEAD/README.md'});
});

test('gists, other URLs, and slidetake links', ()=>{
  assert.deepEqual(normalizeSource('https://gist.github.com/someone/0123abcd'), {kind: 'gist', id: '0123abcd'});
  assert.deepEqual(normalizeSource('https://example.com/x/deck.md'), {kind: 'url', url: 'https://example.com/x/deck.md'});
  assert.deepEqual(normalizeSource('https://slidetake.com/gh/a/b/deck.md'), {kind: 'url', url: RAW + 'a/b/HEAD/deck.md'});
  assert.deepEqual(normalizeSource('https://slidetake.com/?src=https%3A%2F%2Fx.org%2Fd.md'), {kind: 'url', url: 'https://x.org/d.md'});
  assert.equal(normalizeSource('   '), null);
});

test('short-link paths', ()=>{
  assert.deepEqual(sourceFromPath('/gh/a/b/talks/deck.md'), {kind: 'url', url: RAW + 'a/b/HEAD/talks/deck.md'});
  assert.deepEqual(sourceFromPath('/gh/a/b@v2/deck.md'), {kind: 'url', url: RAW + 'a/b/v2/deck.md'});
  assert.deepEqual(sourceFromPath('/gist/0123abcd'), {kind: 'gist', id: '0123abcd'});
  assert.deepEqual(sourceFromPath('/gist/0123abcd/talk.md'), {kind: 'gist', id: '0123abcd', file: 'talk.md'});
  assert.equal(sourceFromPath('/'), null);
  assert.equal(sourceFromPath('/gh/a/b'), null);
  assert.equal(sourceFromPath('/about'), null);
  assert.deepEqual(sourceFromPath('/docs'), {kind: 'builtin', id: 'docs'});
  assert.deepEqual(sourceFromPath('/features'), {kind: 'builtin', id: 'features'});
  assert.deepEqual(sourceFromPath('/privacy'), {kind: 'builtin', id: 'privacy'});
  assert.deepEqual(sourceFromPath('/help'), {kind: 'builtin', id: 'docs'});
});

test('short links round-trip', ()=>{
  for (const path of ['/gh/a/b/talks/deck.md', '/gh/a/b@v2/deck.md', '/gist/0123abcd', '/docs']){
    assert.equal(shortLink(/** @type {any} */ (sourceFromPath(path))), path);
  }
  assert.equal(shortLink({kind: 'url', url: 'https://x.org/d.md'}), '/?src=https%3A%2F%2Fx.org%2Fd.md');
});
