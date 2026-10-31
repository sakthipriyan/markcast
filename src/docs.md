---
title: Slidetake Docs
brand: slidetake
pip: none
---

# ![](/favicon.svg) Slide<span class="st-take">take</span> Docs

Everything in order: **get started → write → present → record → share**. Press → to walk it, ↓ ↑ to go into a step and back out, **O** for the map.

## 1️⃣ Get started

Three places to use Slidetake, one deck format for all of them: a markdown file. And any AI can write the deck.

| Where | Best for |
|---|---|
| **slidetake.com** | writing in the Editor, viewing any deck from a link, sharing |
| **Your computer** | the same on your own files and images, offline, with an AI agent writing alongside |
| **Your website** | decks your users view, and the page you record from |

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

Users get a viewer with no recording controls; `?obs` on the page's address brings them back for you. The hugo-continuum theme writes this for slide pages with `engine: slidetake`, so a Hugo site previews decks locally with `hugo server`.

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

Plain markdown, and the layout follows from what's on the card. [See every one in the showcase →](/showcase)

| Write | Get |
|---|---|
| `<!-- steps -->` | what follows, one press each (a list item by item), to the end of the card or a `<!-- steps: off -->` |
| ` ```dot `, ` ```d2 ` | a Graphviz or D2 diagram |
| ` ```echarts ` with JSON options | a chart, in the deck's colours for dark and light |
| ` ```svg ` | an SVG drawing, inline: `currentColor` is the text colour and `var(--text)`, `var(--text-muted)`, `var(--accent)` switch with dark and light; scripts, styles and links are removed |
| `![](drawing.svg)` | an SVG image, as drawn |
| an image alone | an image card: a phone shot sits beside the heading and caption, a landscape one spans the card between them, a 16:9 one fills it |
| an image and text | a split card: the image sits on the side written first |
| a list of images, diagrams or charts | a gallery; with `<!-- steps -->` a carousel, one per press |
| two or more images, diagrams or charts in a row after `<!-- steps -->` | a carousel, one per press |
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
| 1 2 3 4 | focus, path, radial, tree |
| + − | bigger / smaller slides (remembered) |
| E · L | editor · light / dark |
| C · V · R | camera · camera layouts · record |

### Layouts

**Focus** doesn't travel at all: the next slide fades in where the last one was.

**Path**, the default, is made for presenting and video: a staircase in presenting order. Each section is a row, and the next one starts just below where the last ended, so every move is a short step right or down.

**Radial** rings out from the first card, and **tree** is a top-down chart.

The layout you pick is remembered in this browser, for every deck.

### On screen

Text keeps one size within a section and only changes when the section does; charts and diagrams are fitted on their own.

`<!-- view: overview -->` on a slide pulls back to the whole map for a beat before flying in: a good start to a chapter.

### Progress and timer

In fullscreen the cursor and controls hide after two seconds without the mouse moving, and a thin bar along the bottom fills with every press.

With `duration: 10m` (or `90s`, `1h`, `12:30`), a lighter layer of the same colour grows behind it with the clock: if it shows past the solid fill, you're behind; if it reaches the end, the bar pulses. The timer is for you, so recordings show progress only, unless the deck says `timer: always`. `progress: off` hides the bar.

## 4️⃣ Record a video

Two ways to record, both slide by slide, so there's no timeline to edit afterwards. Press **● Record** and pick one:

| | In this browser | OBS |
|---|---|---|
| Install | nothing | [OBS Studio](https://obsproject.com) (free) |
| Browser | Chrome, Edge or another Chromium browser, on a computer | any |
| Screen | any shape: the deck is recorded in a 16:9 frame | a 16:9 screen, physical or virtual |
| Quality | 1080p, or 720p on a smaller screen | whatever OBS records |
| Final video | **Download** joins the picked takes, in the browser | an ffmpeg command |

### Record in the browser

**● Record** opens the deck's **take board**: every slide, in order, with every take recorded of it, from every recording.

1. The first time, **⚙ Setup** (top right of the board) checks the browser and screen and lists your cameras and microphones with a level meter. The camera you pick there (or **No camera**) is remembered for the deck, and **● Record turns it on by itself**, before the countdown so you can check your framing, then back off afterwards. It defaults to your camera when the deck has a camera box or camera moves. **C** is for presenting live.
2. **● Record**, and when Chrome asks, share **this tab**. The deck goes fullscreen in a 16:9 frame; only the frame (slides and camera) is recorded, never the rest of the screen.
3. To redo part of it later, tick slides (shift-click ticks a range): **● Record** then records exactly those, each with its entry, and stops by itself after the last. Between ticked slides that aren't next to each other the deck jumps, as a retake does, so the slides in between keep their takes.
4. Every take starts with the move in from the slide before it, so it depends on both. Edit a slide and its takes and the next slide's are marked *outdated*: kept, but no longer picked, until you record them again (or pick one yourself). To drop a slide, delete it from the deck, then record the slide that followed it again.

Every take is its own file, kept in this browser's private storage until you purge it: **🗑 Purge takes → Unused takes** keeps only the ones the video uses, **All takes** clears this deck, and **Every deck's takes…** clears everything Slidetake keeps in this browser (it says how much first), including takes of decks since renamed or deleted.

In fullscreen, the frame must be at least 1280×720 real pixels for 720p, 1920×1080 for 1080p: a Retina laptop makes 1080p, a 1366×768 screen 720p. Below that, use OBS.

### Set up OBS

1. In OBS, turn on Tools → WebSocket Server Settings.
2. In Slidetake, press **● Record**, then **⚙ Setup → Use OBS**, and enter OBS's host, port and password. Tick *Remember* to skip this next time. ● Record opens in the mode you used last; **Use Chrome** (or Edge, Brave…: your browser's name) switches back. Beside ⚙ Setup, a line shows what a take will use: `In Chrome · camera · microphone`, or `OBS · camera`.
3. Use a 16:9 screen (YouTube is 16:9): Setup checks yours. If it isn't, move the window to one that is, physical or virtual (say 1920×1080), and press **F** there.

`?obs=localhost:4455` (or `?obs=host:port:password`) in the address fills this in and connects as the page opens.

From https://slidetake.com, OBS must be on the same computer: browsers block secure pages from reaching plain `ws://` addresses elsewhere. For OBS on another machine, use `npx slidetake`, which serves over http.

### Add your camera

**C** (or **Camera**) turns your webcam on in its box while presenting. A recording doesn't depend on it: it turns on the camera chosen for the deck (or none) by itself. The camera is off every time the page opens; until it's on, the deck's camera settings are ignored, so readers get slides using the whole screen.

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

**● Record** (or **R**) counts down and starts recording. From then on the deck drives everything: camera layouts, reveals and slides follow → (a Bluetooth clicker works).

- **←** takes the current slide again, keeping every attempt. The deck goes back and plays the slide's entry again (the flight, the camera moving), so every take starts with it and whichever you pick joins smoothly
- **B** pauses and resumes
- one press past the last step ends the take (**Esc** ends it early)

Clicks, dragging and the map are locked so the take only moves forward.

### Review, cut and publish

Then the takes screen opens, the same in both modes: the player with **● Record** and **▶ Preview** under it, every slide with its takes on the right (click one to preview it), and under them **⧉ Chapters**, which copies the final cut's chapters (`0:00 Intro`, one per section) to paste into the YouTube description; YouTube needs at least three, each 10 seconds or more. Messages share one line beside Preview, in full on hover.

- **Recorded in the browser:** the board is the review. **▶ Preview** plays the picked takes back to back, following along in the take list; right after you play a single take it continues from the next slide (a message says so), otherwise from the start. **↓ Download** joins them into one MP4, in a few seconds, without re-encoding, and saves it like OBS does: a new file named by the date (`deck 2026-10-30 20-04-49.mp4`) in a folder you pick once, starting in your videos folder. Pressing it again without changing a take or the sound settings says where the video already is, rather than making it again.
- **Recorded with OBS:** one video at a time, the deck's latest recording; recording again replaces it here (the old file stays in your OBS folder). Previews come from the OBS file: open it once, or pick your OBS recordings folder and later recordings load by themselves. **⧉ ffmpeg** copies a ready-to-run **[ffmpeg](https://ffmpeg.org)** command that cuts the picked takes (frame-exact); ⚙ Setup → Video sets how it encodes, the frame rate and Volume boost.
- **The microphone's sound**, in ⚙ Setup → Microphone:
  - **Sound: Raw** (the default) records the mic as it is, best for a good mic in a quiet room. **Voice** turns on Chrome's noise suppression, which takes out fans, hum and other steady noise. On a Mac, Control Center → Mic Mode → Voice Isolation does the same for every app, before Chrome hears it.
  - **🔊 Volume boost** (on by default): YouTube plays videos at about −14 LUFS and turns louder ones down, but not quieter ones up, so a voice recorded as it is sounds quiet next to other videos. The final cut is measured the way YouTube measures it and raised towards −14 LUFS, stopping where its loudest peak would reach −1.5 dB, so it never clips. The status line says when a peak held it back.
  - **Peak limiter** (off by default) lets the boost go all the way to −14 LUFS by catching the few peaks (a clicker press, a bump on the mic, a hard "p") that would pass −1.5 dB.
  - The video is copied as it is; only the sound is re-encoded. In the ffmpeg command, Volume boost adds `loudnorm` (not in the no-re-encode mode), which also holds peaks below −1 dB.

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
| `?layout=focus` (path, radial, tree) | picks the layout; path is the default |
| `?mode=light` | light theme |
| `?duration=10m` | talk length for the timer |
| `#card-id` | opens at a card |

## 🔒 Your data

No accounts, and no decks kept: your copy and settings stay in this browser, and decks inside links never reach a server. `npx slidetake` keeps everything on your machine. What slidetake.com does collect (Google Analytics, which the **Privacy & analytics** button in the header turns off), and which services a deck can reach, is all on the [privacy page](/privacy).

Slidetake is open source: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake).
