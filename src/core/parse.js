// @ts-check
// Markdown → deck: the deck-wide settings and one card per slide. Three formats open as they are:
//   headings   each heading starts a card; nesting follows heading level
//   +++        the older format: slides split by "+++", optional id/parent/title/x/y frontmatter
//   reveal.js  "---" between slides, "--" between the vertical slides of a stack
// No DOM needed: rendering markdown to HTML is passed in, so this runs in tests and on a server too.
import {slugify, plainText, decodeEntities, attrsOf, splitOutsideFences} from './text.js';

/**
 * @typedef {Record<string, string | string[]>} DeckSettings
 *   The frontmatter block, keys lowercased. "key:" followed by "- item" lines becomes a list.
 *
 * @typedef {object} Card
 * @property {string} id
 * @property {string|null} parent
 * @property {string} title
 * @property {string} html
 * @property {string|null} err
 * @property {string|null} camera     the slide's <!-- camera: … --> directive, e.g. "full, on"
 * @property {boolean} mapFirst      <!-- view: overview --> pulls back to the whole map first
 * @property {number} [autoslide]    reveal.js data-autoslide, in ms
 * @property {number|null} x
 * @property {number|null} y
 * @property {string[]} children
 *
 * @typedef {'headings' | '+++' | 'reveal'} DeckFormat
 *
 * @typedef {object} ParsedDeck
 * @property {DeckSettings} deck
 * @property {Map<string, Card>} nodes  in document order
 * @property {DeckFormat} format
 * @property {number} errCount
 *
 * @typedef {(markdown: string) => {html: string, err: string|null}} Render
 */

/** The text that can hold directives: fenced code blocks and `inline code` show examples, not settings. @param {string} body */
function directiveText(body){
  /** @type {string|null} */
  let fence = null;
  return body.split('\n').filter(line=>{
    const f = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (f){
      if (!fence) fence = f[1];
      else if (f[1][0] === fence[0] && f[1].length >= fence.length) fence = null;
      return false;
    }
    return !fence;
  }).join('\n').replace(/`[^`\n]*`/g, '');
}

/** <!-- view: overview --> @param {string} body */
export function mapDirective(body){ return /<!--\s*view\s*:\s*(overview|map)\s*-->/i.test(directiveText(body)); }

/** <!-- camera: full, on --> → "full, on" @param {string} body */
export function cameraDirective(body){
  const m = directiveText(body).match(/<!--\s*camera\s*:\s*([\s\S]*?)\s*-->/i);
  return m ? m[1].trim() : null;
}

/**
 * Deck-wide settings from an optional frontmatter block at the very top (the same block Hugo and Jekyll
 * use, so their keys are simply ignored).
 * @param {string} src
 * @returns {{deck: DeckSettings, body: string}}
 */
export function parseDeckSettings(src){
  /** @type {DeckSettings} */
  const deck = {};
  const fm = src.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);
  if (!fm) return {deck, body: src};
  /** @type {string|null} */
  let listKey = null;
  fm[1].split('\n').forEach(l=>{
    const item = l.match(/^\s+-\s+(.*)$/);
    if (item && listKey){ /** @type {string[]} */ (deck[listKey]).push(item[1].trim().replace(/^["']|["']$/g, '')); return; }
    const m = l.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (!m){ listKey = null; return; }
    const key = m[1].toLowerCase(), val = m[2].trim().replace(/^["']|["']$/g, '');
    // "key:" with nothing after it starts a "- item" list
    if (val === ''){ deck[key] = []; listKey = key; } else { deck[key] = val; listKey = null; }
  });
  return {deck, body: src.slice(fm[0].length)};
}

/** A +++ slide's own frontmatter. @param {string} block */
export function parseFrontmatter(block){
  const lines = block.split('\n');
  /** @type {Record<string,string>} */
  const meta = {};
  let body = block;
  if (lines[0] !== undefined && lines[0].trim() === '---'){
    let end = -1;
    for (let i = 1; i < lines.length; i++){ if (lines[i].trim() === '---'){ end = i; break; } }
    if (end !== -1){
      lines.slice(1, end).forEach(l=>{
        const idx = l.indexOf(':');
        if (idx > -1) meta[l.slice(0, idx).trim()] = l.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
      });
      body = lines.slice(end + 1).join('\n').replace(/^\n+/, '');
    }
  }
  return {meta, body};
}

/** A slide's title: its first heading (markdown or HTML), else its first line of text. @param {string} body */
export function slideTitle(body){
  const clean = body.replace(/<!--[\s\S]*?-->/g, '');
  const h = clean.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m);
  const t = clean.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i);
  let raw = null;
  if (h && (!t || /** @type {number} */ (h.index) < /** @type {number} */ (t.index))) raw = h[1];
  else if (t) raw = t[1].replace(/<[^>]+>/g, ' ');
  if (!raw){
    const line = clean.split('\n').map(l=>l.replace(/<[^>]+>/g, '').trim()).find(l=>l && !/^[-|:\s]+$/.test(l));
    raw = line ? line.slice(0, 60) : null;
  }
  return raw ? decodeEntities(plainText(raw)).replace(/\s+/g, ' ').trim() : null;
}

/** @param {string} body */
function slideAttrs(body){
  const m = body.match(/<!--\s*\.slide:([\s\S]*?)-->/i);
  return m ? attrsOf(m[1]) : {};
}

/**
 * @param {string} src
 * @param {{render?: Render}} [opts]
 * @returns {ParsedDeck}
 */
export function parseDeck(src, {render = md=>({html: md, err: null})} = {}){
  /** @type {Map<string, Card>} */
  const nodes = new Map();
  /** @param {string} base */
  const uniqueId = base=>{
    let id = base, i = 2;
    while (nodes.has(id)) id = base + '-' + (i++);
    return id;
  };
  /** @param {Omit<Card, 'children'|'x'|'y'> & Partial<Card>} c */
  const add = c=>{ nodes.set(c.id, {x: null, y: null, children: [], ...c}); return c.id; };

  src = src.replace(/\r\n?/g, '\n');
  const legacy = /^\+\+\+[ \t]*$/m.test(src);
  /** @type {DeckSettings} */
  let deck = {};
  if (!legacy) ({deck, body: src} = parseDeckSettings(src));
  const reveal = !legacy && (/^slides?$/i.test(String(deck.layout || '')) || /^slides?$/i.test(String(deck.type || ''))
    || splitOutsideFences(src, /^--\s*$/).length > 1);
  const errCount = legacy ? parseLegacy() : reveal ? parseReveal() : parseHeadings();

  // drop unknown/self parents, then break any parent cycles
  nodes.forEach(n=>{ if (!n.parent || n.parent === n.id || !nodes.has(n.parent)) n.parent = null; });
  nodes.forEach(n=>{
    const seen = new Set([n.id]);
    let p = n.parent;
    while (p){
      if (seen.has(p)){ n.parent = null; break; }
      seen.add(p); p = /** @type {Card} */ (nodes.get(p)).parent;
    }
  });
  nodes.forEach(n=>{ if (n.parent) /** @type {Card} */ (nodes.get(n.parent)).children.push(n.id); });

  return {deck, nodes, format: legacy ? '+++' : reveal ? 'reveal' : 'headings', errCount};

  function parseHeadings(){
    /** @typedef {{level: number, title: string|null, explicitId: string|null, lines: string[], id?: string}} Section */
    /** @type {Section[]} */
    const sections = [];
    /** @type {Section|null} */
    let cur = null;
    /** @type {string|null} */
    let fence = null;
    /** @type {Section} */
    const preface = {level: 0, title: null, explicitId: null, lines: []};
    src.split('\n').forEach(line=>{
      const f = line.match(/^\s{0,3}(`{3,}|~{3,})/);
      if (f){
        if (!fence) fence = f[1];
        else if (f[1][0] === fence[0] && f[1].length >= fence.length) fence = null;
      }
      const h = (!fence && !f) ? line.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/) : null;
      if (h){
        let text = h[2];
        /** @type {string|null} */
        let explicitId = null;
        const attr = text.match(/\s*\{#([\w\-:.]+)\}\s*$/);
        if (attr){ explicitId = attr[1]; text = text.slice(0, attr.index); }
        cur = {level: h[1].length, title: plainText(text), explicitId, lines: [h[1] + ' ' + text]};
        sections.push(cur);
      } else (cur || preface).lines.push(line);
    });
    if (preface.lines.join('').trim()) sections.unshift(preface);

    /** @type {Section[]} */
    const stack = [];
    sections.forEach(s=>{
      while (stack.length && stack[stack.length - 1].level >= s.level) stack.pop();
      const parent = stack.length ? /** @type {string} */ (stack[stack.length - 1].id) : null;
      const body = s.lines.join('\n').trim();
      const title = s.title || plainText((body.split('\n').find(l=>l.trim()) || 'Intro').slice(0, 48));
      s.id = uniqueId(s.explicitId || slugify(title));
      const {html, err} = render(body);
      add({id: s.id, parent, title, html, err, camera: cameraDirective(body), mapFirst: mapDirective(body)});
      stack.push(s);
    });
    return 0;
  }

  function parseLegacy(){
    const blocks = src.split(/\n\+\+\+[ \t]*\n/).map(b=>b.trim()).filter(b=>b.length);
    /** @type {string|null} */
    let prevId = null, errs = 0;
    blocks.forEach((raw, i)=>{
      const {meta, body} = parseFrontmatter(raw);
      const id = uniqueId(meta.id || ('slide-' + (i + 1)));
      const parent = ('parent' in meta) ? (meta.parent || null) : prevId;
      const m = body.match(/^#{1,6}\s+(.+)$/m);
      const title = meta.title || (m ? plainText(m[1]) : id);
      const {html, err} = render(body);
      if (err) errs++;
      add({
        id, parent, title, html, err, camera: meta.camera || cameraDirective(body), mapFirst: mapDirective(body),
        x: meta.x !== undefined ? parseFloat(meta.x) : null,
        y: meta.y !== undefined ? parseFloat(meta.y) : null
      });
      prevId = id;
    });
    return /** @type {number} */ (errs);
  }

  // The first slide becomes the root card, every other stack hangs off it, and the vertical slides of a
  // stack hang off the stack's first slide. Whole <section> elements are slides of their own.
  function parseReveal(){
    let errs = 0, slideNo = 0;
    /** @type {string|null} */
    let root = null;
    /** @param {{body: string, attrs: Record<string,string>}} slide @param {string|null} parent */
    function addSlide(slide, parent){
      const body = slide.body.trim();
      slideNo++;
      let title = slideTitle(body) || ('Slide ' + slideNo);
      // vertical slides are often titled "Section / Detail"; under the Section card, "Detail" is enough
      const pTitle = parent ? /** @type {Card} */ (nodes.get(parent)).title : null;
      if (pTitle && title.startsWith(pTitle + ' / ')) title = title.slice(pTitle.length + 3);
      const id = uniqueId(slugify(title));
      const {html, err} = render(body);
      if (err) errs++;
      return add({id, parent, title, html, err, camera: cameraDirective(body), mapFirst: mapDirective(body),
        autoslide: parseInt(slide.attrs['data-autoslide'], 10) || 0});
    }
    /** @type {{body: string, attrs: Record<string,string>}[][]} */
    const stacks = [];
    splitOutsideFences(src, /^---\s*$/).forEach(chunk=>{
      if (/<section\b/i.test(chunk)){
        for (const m of chunk.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi)) stacks.push([{body: m[2], attrs: attrsOf(m[1])}]);
        const rest = chunk.replace(/<section\b[^>]*>[\s\S]*?<\/section>/gi, '');
        if (rest.trim()) stacks.push([{body: rest, attrs: slideAttrs(rest)}]);
        return;
      }
      const stack = splitOutsideFences(chunk, /^--\s*$/).filter(b=>b.trim()).map(b=>({body: b, attrs: slideAttrs(b)}));
      if (stack.length) stacks.push(stack);
    });
    stacks.forEach(stack=>{
      /** @type {string|null} */
      let top = null;
      stack.forEach((slide, i)=>{
        if (!root){ root = top = addSlide(slide, null); return; }
        if (i === 0) top = addSlide(slide, root);
        else addSlide(slide, top);
      });
    });
    return errs;
  }
}
