# Slidetake plan

Markdown to finished video: a spatial deck that records itself, take by take. The lineage it continues: reveal.js (slides in the browser) → Slidev (slides as code) → Slidetake (the deck directs the video).

## Two views on one core

The **core** is shared: parsing (headings, `+++`, reveal.js), layouts, camera moves, fragments and rendering.

| | Studio (today's view) | Embed (for hugo-continuum and any site) |
|---|---|---|
| Lives at | slidetake.com, or `npx slidetake` locally | Inside a page: `<div class="slidetake" data-src="deck.md">` |
| Has | Editor, four layouts, minimap, help, recording, review, ffmpeg cut, publish pack | The deck in a 16:9 box, arrow keys when focused, progress bar, Fullscreen |
| Theme | Its own palettes | The site's colours and fonts (CSS variables) |
| Recording | With `?obs=` | Add `?obs=` to the page: the recording controls load on demand |
| Size | Full app | Small script; ECharts, Viz.js and OBS code load only when needed |

## Phases

### 1. Restructure the repo
- Split the single file into `src/`: the HTML shell, styles, the app, and pure `core/` modules (parsing, camera steps, takes → cut → chapters → ffmpeg, text helpers).
- esbuild builds a single-file `dist/index.html`, still with no install needed to *use* it.
- Types for the deck model (JSDoc, checked by TypeScript) and tests (`node --test`) for the pure core: parsing, steps and directives, and the cut maths, where a silent bug ruins a recording.
- Decks in `examples/` as fixtures.
- Later in the phase: carve the stateful app into `core/` (layout, camera, render) and `studio/` (editor, recording, review) modules.

### 2. Embed view and the Hugo integration
- `Slidetake.mount(el, {src | markdown, layout, theme})` and an auto-mounting `<div class="slidetake">`.
- hugo-continuum: a slides layout for decks with `engine: slidetake`, handing the page's raw markdown to the embed. The theme bundles a pinned copy of the script, so site builds never break on an upstream change.
- Switch the three new decks over, compare with reveal.js on the Hugo server, decide deck by deck.

### 3. Hosted Studio at slidetake.com
- Deployed from GitHub Actions with wrangler as an assets-only Cloudflare Worker on slidetake.com, the same setup as xfina-labs. Any path serves the app (single-page-application), so short links need no redirect rules.
- `slidetake.com/?src=<any URL>` already works, including GitHub raw URLs (raw.githubusercontent.com sends `Access-Control-Allow-Origin: *`). Add short links: `/gh/owner/repo/path/deck.md` and `/gist/<id>`.
- A landing page that is itself a Slidetake deck.

### 4. npm and `npx slidetake`
- `npm i slidetake` for the embed and studio builds.
- `npx slidetake deck.md` serves the deck's folder locally and opens Studio: local images, and recording with OBS on another machine (see below).

### 5. Polish (ongoing)
Docs, an example gallery, themes, versioned releases; later a browser-based recorder (no OBS) if people ask for it.

## Recording from the hosted site

- OBS on the same computer: `slidetake.com/?obs=localhost:4455&src=…` works, since browsers let a secure page talk to `localhost`.
- OBS on another machine: browsers block a secure (https) page from opening a plain `ws://` connection on the network, and OBS has no secure WebSocket of its own. Use `npx slidetake` (http, local) for that setup.

## Decisions so far

- Name: **Slidetake** (Traverse → Markcast → Slidetake). Repo: github.com/sakthipriyan/slidetake, public, Apache 2.0.
- Recording mode only with `?obs=host:port[:password]`, the same format as the reveal.js slides; otherwise a viewer with Fullscreen.
- Plain JavaScript (no Rust/Wasm): the work is DOM, CSS, animation and browser APIs.
- Domain: slidetake.com, registered at Spaceship, DNS on Cloudflare.
