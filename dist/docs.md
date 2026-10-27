---
title: Slidetake docs
brand: slidetake
pip: none
---

# ![](/favicon.svg) Slidetake docs

Everything in order: **get started → write → present → record → share**. Press → to read step by step, ↓ ↑ to go into a step and back out, or **O** for the whole map. The features at a glance: [/features](/features).

## 1️⃣ Get started

Four ways to use Slidetake, one deck format for all of them: a markdown file.

| Where | Best for |
|---|---|
| **slidetake.com** | opening any deck from a link, or typing one |
| **Your computer** | your own files and images, offline |
| **Your website** | decks inside your own pages |
| **With AI** | having Claude or another AI write the deck |

### On slidetake.com

Open a deck straight from a link: a GitHub file, a gist or any markdown URL. Or press **✎ Editor** and type: the first keystroke makes it [your copy](#your-copy), kept in this browser.

| Link | Opens |
|---|---|
| `/gh/owner/repo/path/deck.md` | a GitHub file, default branch |
| `/gh/owner/repo@branch/deck.md` | another branch or tag |
| `/gist/<id>` | a gist's first markdown file |
| `/?src=https://…/deck.md` | anything else |
| `/new` | a template: blank, talk or recording |

### On your computer

Keep the deck and its images together in a folder, and run one command there:

```sh
npx slidetake deck.md
```

It opens on `http://localhost:4300` with the files next to the deck served beside it, so `![](diagram.png)` just works. Save the file in any editor and the deck reloads where you are; type in the browser's editor and it saves to the file. Nothing leaves your machine. Needs Node 20 or later.

`npx slidetake` in a folder opens its `index.md`, `deck.md`, `slides.md` or `README.md`. `--open` opens the browser; `--port 5000` picks the port.

### On your website

`slidetake.js` turns a deck on any page into a Slidetake deck. Describe the deck, then load the script:

```html
<script>
window.SLIDETAKE = {
  markdown: "# My deck\n\n## A section",
  settings: {title: "My deck"},
  base: location.href,                 // where relative images resolve
  trail: [{label: "My site", url: "/"}],
  themeKey: "my-site-theme",           // optional: your site's light/dark key
  colors: {accent: "#2563eb"}          // optional: your colours
};
</script>
<script src="https://cdn.jsdelivr.net/npm/slidetake/dist/slidetake.js"></script>
```

Readers get a viewer with no recording controls; `?obs` on the page's address brings them back for you. The hugo-continuum theme writes this for slide pages with `engine: slidetake`, so a Hugo site previews decks locally with `hugo server`.

### With AI

The deck is plain markdown, so any AI can write one. Point it at the format, [slidetake.com/llms.txt](/llms.txt), and say what the talk is about.

- **With an agent that edits files** (Claude Code and the like): *"Write a Slidetake deck about X in talk/deck.md, following slidetake.com/llms.txt"*, then `npx slidetake talk/deck.md`. Ask for changes and the open deck reloads as the file is saved.
- **In a chat** (Claude, no tools): ask for the deck as one markdown block, then on slidetake.com press **✎ Editor**, select all and paste. It's your copy at once; **Share** gives a link with the deck inside it.
- **Images:** an agent places them next to the file; in a chat, use full image URLs, or `base:` pointing at where they live.

## 2️⃣ Write a deck

A deck is an ordinary markdown file. **Every heading becomes a card**, and a heading branches off the nearest shallower heading above it.

```md
# Product            ← the first card
Intro text.

## Pricing           ← branches from Product
### Enterprise       ← branches from Pricing
## Roadmap {#plan}   ← branches from Product, id "plan"

See the [roadmap](#plan).
```

### Cards

- Text before the first heading becomes a card of its own.
- Headings inside fenced code blocks are ignored.
- A card's id is its heading slugified (`## Moving around` → `moving-around`), or set one with `{#id}` at the end of the heading.
- A link to `#id` flies to that card.
- Cards widen for wide tables, columns, diagrams and embeds; anything wider still is scaled to fit.

### What a card can hold

Plain markdown, and the layout follows from what's on the card. [See every one →](/examples)

| Write | Get |
|---|---|
| `<!-- steps -->` before a list | one item per press |
| ` ```dot `, ` ```d2 ` | a Graphviz or D2 diagram |
| ` ```echarts ` with JSON options | a chart, in the deck's colours for dark and light |
| ` ```svg ` or `![](drawing.svg)` | an SVG drawing |
| an image alone | an image card: a phone shot sits beside the heading and caption, a landscape one spans the card between them, a 16:9 one fills it |
| an image and text | a split card: the image sits on the side written first |
| a list of images | a gallery; with `<!-- steps -->` a carousel, one image per press |
| images in one paragraph | a grid, up to four a row |
| `<!-- view: full -->` in a card | a 16:9 card for a big image, without the camera unless the card asks for it |
| a YouTube link alone on a line | the video: the next press plays it, leaving pauses it |

The first and last cards animate in on their own. The alt text of an image is its caption.

### Deck settings

An optional block at the top of the file:

```yaml
---
title: My talk               ← the page title, and the video's
duration: 10m                ← talk length, for the timer
accent: "#3b82f6"            ← the deck's colour (Slidetake's own is green)
brand: example.com/talks     ← text in the top-right corner
logo: https://…/logo.png     ← image beside it
base: https://…/deck-folder/ ← where relative images live, for a file opened from elsewhere
---
```

`accent` is one colour; Slidetake makes it bright for dark mode and deep enough to read on white for light mode, and uses it for text accents, lines, charts and diagrams. Camera and recording settings are in [step 4](#4-record-a-video).

### Decks from elsewhere

**reveal.js** decks open as they are: `---` starts a slide and `--` a vertical one beneath it. Fragments (`fade-up`, `grow`, …), `r-stack`, `<!-- .element: … -->`, `<section>` slides, `data-autoslide`, `data-gsap` entrances and `title-scramble` all work.

**Older `+++` decks**, with `id`, `parent`, `x`, `y` frontmatter, still load.

## 3️⃣ Present

Click a card to fly to it. Drag to pan; scroll or pinch to zoom. On a touch screen, the bottom bar adds ← → buttons.

| Key | Does |
|---|---|
| → ← Space | next / previous step, in document order |
| ↓ ↑ | first child / parent |
| O | the whole map; **O** again or Esc goes back |
| F | fullscreen; **F** again or Esc leaves |
| K or ? | these keys; again closes them |
| 1 2 3 4 | tree, radial, path, focus |
| + − | bigger / smaller slides (remembered) |
| E · L | editor · light / dark |
| C · V · R | camera · camera layouts · record |

### Layouts

**Tree** is a top-down chart and **radial** rings out from the root.

**Path** is made for video: a staircase in presenting order. Each section is a row, and the next one starts just below where the last ended, so every move is a short step right or down.

**Focus** doesn't travel at all: the next slide fades in where the last one was.

### On screen

Text keeps one size within a section and only changes when the section does; charts and diagrams are fitted on their own.

`<!-- view: overview -->` on a slide pulls back to the whole map for a beat before flying in: a good start to a chapter.

### Progress and timer

In fullscreen the cursor and controls hide after two seconds without the mouse moving, and a thin bar along the bottom fills with every press.

With `duration: 10m` (or `90s`, `1h`, `12:30`), a lighter layer of the same colour grows behind it with the clock: if it shows past the solid fill, you're behind; if it reaches the end, the bar pulses. The timer is for you, so recordings show progress only, unless the deck says `timer: always`. `progress: off` hides the bar.

## 4️⃣ Record a video

Recording takes **[OBS Studio](https://obsproject.com)** (free). OBS records at full quality; Slidetake drives it, slide by slide, so there's no timeline to edit afterwards.

### Set up OBS

1. In OBS, turn on Tools → WebSocket Server Settings.
2. In Slidetake, press **● Record** and enter OBS's host, port and password. Tick *Remember* to skip this next time.
3. Use a 16:9 screen (YouTube is 16:9): the Record dialog checks yours. If it isn't, move the window to one that is, physical or virtual (say 1920×1080), and press **F** there.

`?obs=localhost:4455` (or `?obs=host:port:password`) in the address fills this in and connects as the page opens.

From https://slidetake.com, OBS must be on the same computer: browsers block secure pages from reaching plain `ws://` addresses elsewhere. For OBS on another machine, use `npx slidetake`, which serves over http.

### Add your camera

**C** (or **Camera**) turns your webcam on in its box, and OBS records you and the slides together. The camera is off every time the page opens; until it's on, the deck's camera settings are ignored, so readers get slides using the whole screen.

```yaml
---
pip: bottom-right            ← camera corner, or none
pip_size: 24%                ← camera box width
pip_shape: rect              ← rect (16:9) or circle
pip_mirror: yes              ← mirror the webcam
camera: 24%, 40%, full, off  ← layouts V cycles through
---
```

Slides are always placed clear of the brand and the camera box.

### Move the camera per slide

A comment in a slide changes the camera from that slide on:

```md
## Intro
<!-- camera: full -->       ← camera fills the screen

## Pricing
<!-- camera: 18% flip -->   ← small, on the other side
```

Words you can combine: `on`, `off`, `full`, a size like `30%`, a corner, `flip`, `circle` / `rect`, `mirror` / `unmirror`. List them with commas to step through them on one slide: `full, on` opens on you, and the next → shrinks the camera to its corner and shows the slide.

**V** steps through the deck's `camera:` list by hand.

### Take by take

**● Record** (or **R**) connects to OBS, counts down and starts recording. From then on the deck drives everything: camera layouts, reveals and slides follow → (a Bluetooth clicker works).

- **←** takes the current slide again, keeping every attempt
- **B** pauses and resumes
- one press past the last step stops OBS

Clicks, dragging and the map are locked so the take only moves forward.

### Review, cut and publish

Then the review opens: every slide with its takes (the last one picked), previews from the OBS file, a ready-to-run **ffmpeg** command for the picked takes (frame-exact), and the YouTube title, description with **chapters** and links, and tags. Sessions are kept in this browser, so a take can be reviewed again later from ● Record.

The description comes from the deck's top block:

| Key | Used for |
|---|---|
| `title` | the video title |
| `summary` | the description's first paragraph |
| `related` | a list of `[Title](url)` links |
| `tags` | tags (any other list ending in `_tags` is added too) |
| `permalink` or `site` | the link back to the deck |

## 5️⃣ Share and keep

Every deck you open is **read-only**: Slidetake's own decks, templates, files on the web and shared links. Viewing one never changes anything.

### Your copy

**Type in a deck**, and it becomes your copy, at `/edit`. It lives in this browser, remembers where it came from, and is there whenever you come back: **Your copy →** in the editor takes you to it.

- There's one copy at a time; the editor bar says whose it is, and marks **edited** while it has changes you haven't saved or shared.
- **Reset to original** throws your edits away.
- Starting a new copy asks first if the old one has edits you haven't kept.

### Save and share

**Save** downloads the markdown. **Share** copies a link: the short link while your copy still matches an online original, otherwise a `/share#deflate:…` link with the whole deck compressed inside it. That part of a link never reaches a server. **Open** loads a markdown file from your computer into your copy.

### Address options

| Option | Does |
|---|---|
| `?edit=1` | opens the editor |
| `?layout=tree` (radial, path, focus) | picks the layout |
| `?mode=light` | light theme |
| `?duration=10m` | talk length for the timer |
| `#card-id` | opens at a card |

## 🔒 Your data

Your copy and settings stay in this browser. Decks inside links live in the part of the address after `#`, which browsers never send to a server. Slidetake has no accounts and stores no decks; `npx slidetake` keeps everything on your machine.

slidetake.com counts visits with Google Analytics, leaving out the `#` part and `?obs=`, so neither your deck nor an OBS password reaches it. Copies you host yourself send nothing.

Slidetake is open source: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake).
