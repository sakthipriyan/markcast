---
title: Slidetake help
brand: slidetake
pip: none
---

# Slidetake help

The details behind the [home deck](/): writing, sharing, presenting, recording and the camera. Press → to read in order, ↓ ↑ to go into a section and back out, or **O** for the whole map.

## ✍️ Writing a deck

A deck is an ordinary markdown file. **Every heading becomes a card**, and a heading branches off the nearest shallower heading above it.

```md
# Product            ← the first card
Intro text.

## Pricing           ← branches from Product
### Enterprise       ← branches from Pricing
## Roadmap {#plan}   ← branches from Product, id "plan"

See the [roadmap](#plan).
```

### Rules

- Text before the first heading becomes a card of its own.
- Headings inside fenced code blocks are ignored.
- A card's id is its heading slugified (`## Moving around` → `moving-around`), or set one with `{#id}` at the end of the heading.
- A link to `#id` flies to that card.

### reveal.js decks

Decks written for reveal.js open as they are: `---` starts a slide and `--` a vertical one beneath it, and the first slide becomes the root card.

Supported: fragments (`fade-up`, `fade-in-then-out`, `grow`, …, one per →), `r-stack`, `<!-- .element: … -->`, `<section>` slides, `data-autoslide`, Graphviz `dot` diagrams, ECharts charts, `data-gsap` entrance animations and `title-scramble`.

### Older +++ decks

Decks that separate slides with `+++` and use `id`, `parent`, `x`, `y` frontmatter still load.

### Wide content

Cards widen for wide tables, columns, diagrams and embeds; anything wider still is scaled to fit.

## 🔗 Opening, editing and sharing

Every deck you open is **read-only**: Slidetake's own decks, templates, files on the web and shared links. Viewing one never changes anything.

**Type in it**, and it becomes **your copy**, at `/edit`. Your copy lives in this browser, remembers where it came from, and is there whenever you come back: the **Your copy →** button at the top takes you to it.

### Where decks come from

Press **✎ Editor**, then **⇣ Load**, and paste a link: a GitHub file or folder, a gist, or any URL that lets other sites read it. Or link straight to a deck:

| Link | Opens |
|---|---|
| `/gh/owner/repo/path/deck.md` | a GitHub file, default branch |
| `/gh/owner/repo@branch/deck.md` | another branch or tag |
| `/gist/<id>` | a gist's first markdown file |
| `/?src=https://…/deck.md` | anything else |
| `/share#deflate:…` | a shared deck, carried inside the link |
| `/new` | a template: blank, talk or recording |

Images next to the deck load as they are. **Open** opens a markdown file from your computer, straight into your copy.

### Your copy

There's one working copy at a time. The editor bar says whose copy it is, and marks **edited** while it has changes you haven't saved or shared.

- **Reset to original** throws your edits away and goes back to the deck you started from.
- Starting a new copy, by typing in another deck or opening a file, asks first if the old one has edits you haven't kept.

### Saving and sharing

**Save** downloads your markdown as a file. **Share** copies a link: the short link while your copy still matches an online original, and otherwise a `/share#deflate:…` link with the whole deck compressed inside it. That part of a link is never sent to a server, so nothing is uploaded. Shared links never include `?obs=`.

For a file from your computer whose images sit next to it online, add `base: https://…/deck-folder/` to its top block.

### Address options

| Option | Does |
|---|---|
| `?edit=1` | opens the editor |
| `?layout=tree` (radial, path, focus) | picks the layout |
| `?mode=light` | light theme |
| `?duration=10m` | talk length for the timer |
| `#card-id` | opens at a card |

## 🧭 Moving around

| Key | Does |
|---|---|
| → ← Space | next / previous step, in document order |
| ↓ ↑ | first child / parent |
| O | the whole map |
| 1 2 3 4 | tree, radial, path, focus |
| F | fullscreen |
| + − | bigger / smaller slides (remembered) |
| E | editor |
| L | light / dark |
| ? | keys (also ⌨ in the bottom bar) |
| C · V · R | camera, camera layouts, record |

Click a card to fly to it. Drag to pan; scroll or pinch to zoom. On a touch screen, the bottom bar adds ← → buttons.

### Layouts

**Tree** is a top-down chart and **radial** rings out from the root.

**Path** is made for video: a staircase in presenting order. Each section is a row, and the next one starts just below where the last ended, so every move is a short step right or down.

**Focus** doesn't travel at all: the next slide fades in where the last one was.

### Steady text

Text keeps one size within a section and only changes when the section does. Charts and diagrams are fitted on their own.

### Map moments

`<!-- view: overview -->` on a slide pulls back to the whole map for a beat before flying in: a good start to a chapter.

## 🎬 Presenting

**F** goes fullscreen. The current slide fills the screen, and the cursor and controls hide after two seconds without the mouse moving.

### Progress and talk timer

While presenting, a thin bar along the bottom fills with every press.

Give the deck a length, `duration: 10m` (or `90s`, `1h`, `12:30`), and a lighter layer of the same colour grows behind it with the clock: if the lighter stretch shows past the solid fill, you're behind; if it reaches the end, the bar pulses.

The timer is for you, so recordings show progress only, unless the deck says `timer: always`. `progress: off` hides the bar.

## ⏺️ Recording

Recording needs **[OBS Studio](https://obsproject.com)** (free) with its WebSocket server on: in OBS, Tools → WebSocket Server Settings. OBS records; Slidetake drives it.

### Connecting to OBS

Press **● Record** and enter where OBS is: host, port and the password from OBS's WebSocket settings. Tick *Remember* to skip this next time.

`?obs=localhost:4455` (or `?obs=host:port:password`) in the address fills this in and connects as the page opens.

### A 16:9 screen

YouTube is 16:9, and many laptop screens aren't. The Record dialog checks yours: if it isn't 16:9, move the window to a screen that is, physical or virtual (say 1920×1080), and press **F** there.

### OBS on another computer

From https://slidetake.com, OBS must be on the same computer (`localhost`): browsers block secure pages from reaching plain `ws://` addresses elsewhere. For OBS on another machine, serve a local copy of [`dist/index.html`](https://github.com/sakthipriyan/slidetake) over http.

### Taking a take

**● Record** (or **R**) connects to OBS, counts down and starts recording. From then on the deck drives everything: camera layouts, reveals and slides follow → (a Bluetooth clicker works).

- **←** takes the current slide again, keeping every attempt
- **B** pauses and resumes
- one press past the last step stops OBS

Clicks, dragging and the map are locked so the take only moves forward.

### Review and cut

Then the review opens: every slide with its takes (the last one picked), previews from the OBS file, a ready-to-run **ffmpeg** command for the picked takes (frame-exact), and the YouTube title, description with **chapters** and links, and tags.

Sessions are kept in this browser, so a take can be reviewed again later from ● Record.

## 📷 Camera

**C** (or **Camera** in the bottom bar) turns your webcam on in its box; a plain screen recording then captures you and the slides together. The camera is off every time the page opens, and until it's on, the deck's camera settings are ignored, so readers get slides using the whole screen.

### Deck settings

An optional block at the top of the file:

```yaml
---
brand: example.com/talks     ← text in the top-right corner
logo: https://…/logo.png     ← image beside it
pip: bottom-right            ← camera corner, or none
pip_size: 24%                ← camera box width
pip_shape: rect              ← rect (16:9) or circle
pip_mirror: yes              ← mirror the webcam
camera: 24%, 40%, full, off  ← layouts V cycles through
---
```

Slides are always placed clear of the brand and the camera box.

### Camera per slide

A comment in a slide changes the camera from that slide on:

```md
## Intro
<!-- camera: full -->       ← camera fills the screen

## Pricing
<!-- camera: 18% flip -->   ← small, on the other side
```

Words you can combine: `on`, `off`, `full`, a size like `30%`, a corner, `flip`, `circle` / `rect`, `mirror` / `unmirror`.

### Several steps on one slide

List layouts with commas to step through them: `full, on` opens full screen on you, and the next → shrinks the camera to its corner and shows the slide. `on, full, on, off` ends a closing slide on you, then the slide again, then without the camera.

**V** steps through the deck's `camera:` list for the current slide.

## 📋 Publish pack

The review fills the YouTube description from the deck's top block:

| Key | Used for |
|---|---|
| `title` | the video title |
| `summary` | the description's first paragraph |
| `related` | a list of `[Title](url)` links |
| `tags` | tags (any other list ending in `_tags` is added too) |
| `permalink` or `site` | the link back to the deck |

## 🔒 Your data

Your draft and settings stay in this browser. Decks inside links live in the part of the address after `#`, which browsers never send to a server. Slidetake has no accounts and stores no decks.

slidetake.com counts visits with Google Analytics. What it records leaves out the `#` part and `?obs=`, so neither your deck nor an OBS password reaches it. Copies you host yourself send nothing.

Slidetake is open source: [github.com/sakthipriyan/slidetake](https://github.com/sakthipriyan/slidetake).
