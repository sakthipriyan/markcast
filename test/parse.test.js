import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {parseDeck, parseDeckSettings, slideTitle, cameraDirective, settingsBlock} from '../src/core/parse.js';

const tree = nodes=>[...nodes.values()].map(n=>[n.id, n.parent]);

test('headings: each heading is a card, nested by level', ()=>{
  const {nodes, format} = parseDeck('# Root\n\nintro\n\n## One\n\n### One A\n\n## Two\n');
  assert.equal(format, 'headings');
  assert.deepEqual(tree(nodes), [['root', null], ['one', 'root'], ['one-a', 'one'], ['two', 'root']]);
  assert.deepEqual(nodes.get('root').children, ['one', 'two']);
});

test('headings inside code fences are not cards', ()=>{
  const {nodes} = parseDeck('# Root\n\n```md\n# not a card\n```\n');
  assert.equal(nodes.size, 1);
});

test('directive comments above the first heading belong to the first card', ()=>{
  const {nodes} = parseDeck('<!-- camera: full, on -->\n\n# Root\n\nHi\n\n## Two\n');
  assert.deepEqual([...nodes.keys()], ['root', 'two']);
  assert.equal(nodes.get('root').camera, 'full, on');
  // real text before the first heading is still a card of its own
  assert.equal(parseDeck('Hello\n\n# Root\n').nodes.size, 2);
});

test('duplicate titles get unique ids; {#id} sets one', ()=>{
  const {nodes} = parseDeck('# A\n## Same\n## Same\n## Custom {#mine}\n');
  assert.deepEqual([...nodes.keys()], ['a', 'same', 'same-2', 'mine']);
});

test('frontmatter: values, lists, quotes; Hugo keys are kept but harmless', ()=>{
  const {deck, body} = parseDeckSettings('---\ntitle: "Hello"\nduration: 14m\ncamera: 24%, full\nrelated:\n  - "[a](b)"\n  - c\n---\n# Root\n');
  assert.equal(deck.title, 'Hello');
  assert.equal(deck.duration, '14m');
  assert.equal(deck.camera, '24%, full');
  assert.deepEqual(deck.related, ['[a](b)', 'c']);
  assert.equal(body, '# Root\n');
});

test('reveal.js: first slide is the root, stacks hang off it, vertical slides off their stack', ()=>{
  const src = '---\ntype: slides\n---\n# Title\n\n---\n\n### Part 1\n\n--\n\n### Part 1 / Detail\n\n---\n\n### Part 2\n';
  const {nodes, format} = parseDeck(src);
  assert.equal(format, 'reveal');
  assert.deepEqual(tree(nodes), [['title', null], ['part-1', 'title'], ['detail', 'part-1'], ['part-2', 'title']]);
  // "Part 1 / Detail" under "Part 1" is titled just "Detail"
  assert.equal(nodes.get('detail').title, 'Detail');
});

test('reveal.js: directives and data-autoslide are read', ()=>{
  const src = '# Root\n\n---\n\n<!-- .slide: data-autoslide="3000" -->\n<!-- camera: full, on -->\n### Next\n\n--\n\n### Child\n';
  const {nodes} = parseDeck(src);
  assert.equal(nodes.get('next').autoslide, 3000);
  assert.equal(nodes.get('next').camera, 'full, on');
});

test('+++ format: frontmatter ids, parents and positions', ()=>{
  const src = '---\nid: a\n---\n# A\n+++\n---\nid: b\nparent: a\nx: 10\n---\n# B\n';
  const {nodes, format} = parseDeck(src);
  assert.equal(format, '+++');
  assert.deepEqual(tree(nodes), [['a', null], ['b', 'a']]);
  assert.equal(nodes.get('b').x, 10);
});

test('unknown parents and cycles are broken', ()=>{
  const src = '---\nid: a\nparent: b\n---\n# A\n+++\n---\nid: b\nparent: a\n---\n# B\n+++\n---\nid: c\nparent: nope\n---\n# C\n';
  const {nodes} = parseDeck(src);
  assert.equal(nodes.get('c').parent, null);
  assert.ok(nodes.get('a').parent === null || nodes.get('b').parent === null);
});

test('slideTitle: markdown heading, HTML heading, or first line; entities decoded', ()=>{
  assert.equal(slideTitle('<!-- x -->\n### Hello **World**'), 'Hello World');
  assert.equal(slideTitle('<h2 class="t">Fish &amp; Chips</h2>'), 'Fish & Chips');
  assert.equal(slideTitle('<p>Just <b>text</b></p>\n\nmore'), 'Just text');
});

test('cameraDirective', ()=>{
  assert.equal(cameraDirective('<!-- camera: on, full, on -->\n# x'), 'on, full, on');
  assert.equal(cameraDirective('# x'), null);
});

test('directives shown as examples in code are not applied', ()=>{
  assert.equal(cameraDirective('Write `<!-- camera: full -->` in a slide.'), null);
  assert.equal(cameraDirective('```md\n## Intro\n<!-- camera: full -->\n```\nText'), null);
  assert.equal(cameraDirective('```md\n<!-- camera: full -->\n```\n<!-- camera: off -->'), 'off');
});

test('render is called per card and errors are counted', ()=>{
  let calls = 0;
  // reveal.js and +++ decks count cards that failed to render
  const {errCount} = parseDeck('---\ntype: slides\n---\n# A\n\n---\n\n# B\n', {render: md=>{ calls++; return {html: md, err: md.includes('B') ? 'bad' : null}; }});
  assert.equal(calls, 2);
  assert.equal(errCount, 1);
});

test('example deck parses', async ()=>{
  const src = await readFile(new URL('../examples/why-debt-is-not-bad.md', import.meta.url), 'utf8');
  const {nodes, deck} = parseDeck(src);
  assert.ok(nodes.size > 5);
  assert.ok(deck.title || deck.brand);
});

test('settingsBlock: frontmatter data from a host round-trips through the parser', ()=>{
  const settings = {title: 'Talk', duration: '14m', draft: true, weight: 3, related: ['[a](b)', 'c'], tags: [], nested: {x: 1}, 'bad key': 1};
  const block = settingsBlock(settings);
  assert.match(block, /^---\n[\s\S]*\n---\n$/);
  const {deck} = parseDeckSettings(block + '# Root\n');
  assert.equal(deck.title, 'Talk');
  assert.equal(deck.duration, '14m');
  assert.equal(deck.draft, 'true');
  assert.deepEqual(deck.related, ['[a](b)', 'c']);
  assert.equal(deck.nested, undefined);
  assert.equal(settingsBlock({}), '');
});
