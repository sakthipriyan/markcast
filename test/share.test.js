import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {encodeDeck, decodeDeck, parseHash, deckHash} from '../src/core/share.js';

test('a deck survives the round trip, unicode and all', async ()=>{
  const md = '# Héllo 👋\n\n## Ⅱ\n\n- ₹ and $ and “quotes”\n';
  const data = await encodeDeck(md);
  assert.match(data, /^[A-Za-z0-9_-]+$/);           // URL-safe, no padding
  assert.equal(await decodeDeck(data), md);
});

test('a real deck compresses well', async ()=>{
  const md = await readFile(new URL('../examples/why-debt-is-not-bad.md', import.meta.url), 'utf8');
  const data = await encodeDeck(md);
  assert.equal(await decodeDeck(data), md);
  assert.ok(data.length < md.length * 0.75, data.length + ' vs ' + md.length);
});

test('damaged data throws instead of returning garbage', async ()=>{
  await assert.rejects(decodeDeck('not-a-deck'));
});

test('hash: deck, deck at a slide, plain slide', ()=>{
  assert.deepEqual(parseHash('#deflate:abc_-'), {data: 'abc_-', slide: ''});
  assert.deepEqual(parseHash('#deflate:abc~my-slide'), {data: 'abc', slide: 'my-slide'});
  assert.deepEqual(parseHash('#my-slide'), {data: null, slide: 'my-slide'});
  assert.equal(deckHash('abc', 'a b'), '#deflate:abc~a%20b');
  assert.deepEqual(parseHash(deckHash('abc', 'a b')), {data: 'abc', slide: 'a b'});
});
