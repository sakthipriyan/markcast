/* Slidetake 0.3.4 · https://slidetake.com · Apache-2.0 */
"use strict";(()=>{var G=(e,t)=>()=>(e&&(t=e(e=0)),t);var $a,yn=G(()=>{$a=`---
title: Slidetake \u2014 write in markdown, record without timeline editing
brand: slidetake
pip: bottom-right
---

<!-- camera: on, full, on -->

# ![](/favicon.svg) Slide<span class="st-take">take</span>

**Write in markdown. Present on a spatial canvas. Record without timeline editing.**

For developers and technical educators who explain things on video. You're inside a Slidetake deck right now. Press \u2192 to walk it, **O** for the map.

## \u2702\uFE0F Record without timeline editing

**Retake by slide.** The slide is the timeline marker, so a fumbled line costs one press, not an editing session.

### Record right here, nothing to install

Press **<span class="st-rec">\u25CF Record</span>** and the deck records itself, in Chrome or Edge: your slides and camera in one 16:9 frame, at 1080p. Or let **[OBS Studio](https://obsproject.com)** record while the deck drives it. No scenes to switch, no recording to watch.

### Every slide is a take

Stumbled on a slide? Press \u2190 and say it again. Every attempt is kept, and recording carries on.

### Pick, don't scrub

Choose the best take of each slide. Slidetake joins them into the final video in seconds (or writes the **[ffmpeg](https://ffmpeg.org)** cut for OBS), with the YouTube **chapters**.

### One session, one finished video

Write, present and record in one sitting. What comes out is ready to upload.

## \u{1F5FA}\uFE0F A map, not a stack

<!-- view: overview -->

Your headings are the hierarchy: zoom out for the whole system, zoom in for one part. This slide just showed you the map.

### Headings become cards

\`#\` is the first card, \`##\` branches from it, \`###\` goes a level deeper. No layout to draw.

### A path your viewer can follow

\u2192 always walks the same order, and **path** lays it out as a staircase, so the audience never loses its place.

## \u{1F3A5} The camera is part of the deck

<!-- camera: on, full, on -->

A comment in a slide moves you: corner, full screen, or off. Turn on **Camera** and watch this slide do it.

### Camera moves, step by step

<!-- camera: 40%, full, on -->

With **Camera** on, press \u2192: this slide puts you large in the corner, then full screen, then back to the corner. One comment, one press per move:

\`\`\`md
### Camera moves, step by step
<!-- camera: 40%, full, on -->
\`\`\`

Combine \`on\`, \`off\`, \`full\`, a size like \`40%\`, a corner, \`flip\` or \`circle\`.

## \u270D\uFE0F Plain markdown in

Markdown you already know: headings, lists, tables, code, steps, diagrams (Graphviz, D2, SVG), charts, images and YouTube links. [See them all in the showcase \u2192](/showcase)

### A few comments do the rest

Markdown has no word for "reveal one at a time" or "move the camera", so a handful of HTML comments say it. They stay invisible anywhere else markdown is read:

\`\`\`md
<!-- steps -->             \u2190 the rest, one press each
<!-- camera: full, on -->  \u2190 move the camera
<!-- view: overview -->    \u2190 the map first
<!-- view: full -->        \u2190 a big-image card
\`\`\`

## \u{1F3A8} Your colours

One line, \`accent: "#3b82f6"\`, gives a deck its own colour, shaded for dark and light. On your website, decks wear your site's palette.

\`brand:\` and \`logo:\` put your name and logo in the corner of every slide, so every frame of the video carries them.

## \u{1F310} Run it anywhere

Three places, one deck format: a markdown file.

### slidetake.com: write, view, share

Write a deck in the **\u270E Editor**, or view one straight from a link: a GitHub file, a gist or any markdown URL. **Share** a link with the deck inside it. Nothing to install.

### Your computer: all that, plus AI

The same app on your own files, offline:

\`\`\`sh
npx slidetake deck.md
\`\`\`

Images next to the markdown load as they are. Save in any editor and the deck reloads where you are; type in the browser and it saves to the file. So an AI agent can write \`deck.md\` while you watch it take shape.

### Your website: users view, you record

\`slidetake.js\` puts decks inside your own pages, in your site's colours. Users get a clean viewer; add \`?obs\` to the address and the same page records your video.

## <span class="st-heart" aria-hidden="true"></span> Open source

Open source, Apache 2.0: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake). Nothing to sign up for, and your decks stay yours: [Privacy](/privacy).

Next, every feature and what it saves you: **[Features \u2192](/features)**
`});var kn,wn=G(()=>{kn=`---
title: Slidetake Docs
brand: slidetake
pip: none
---

# ![](/favicon.svg) Slide<span class="st-take">take</span> Docs

Everything in order: **get started \u2192 write \u2192 present \u2192 record \u2192 share**. Press \u2192 to walk it, \u2193 \u2191 to go into a step and back out, **O** for the map.

## 1\uFE0F\u20E3 Get started

Three places to use Slidetake, one deck format for all of them: a markdown file. And any AI can write the deck.

| Where | Best for |
|---|---|
| **slidetake.com** | writing in the Editor, viewing any deck from a link, sharing |
| **Your computer** | the same on your own files and images, offline, with an AI agent writing alongside |
| **Your website** | decks your users view, and the page you record from |

### On slidetake.com

Open a deck straight from a link: a GitHub file, a gist or any markdown URL. Or press **\u270E Editor** and type: the first keystroke makes it [your copy](#your-copy), kept in this browser.

| Link | Opens |
|---|---|
| \`/gh/owner/repo/path/deck.md\` | a GitHub file, default branch |
| \`/gh/owner/repo@branch/deck.md\` | another branch or tag |
| \`/gist/<id>\` | a gist's first markdown file |
| \`/?src=https://\u2026/deck.md\` | anything else |
| \`/new\` | a template: blank, talk or recording |

### On your computer

Keep the deck and its images together in a folder, and run one command there:

\`\`\`sh
npx slidetake deck.md
\`\`\`

It opens on \`http://localhost:4300\` with the files next to the deck served beside it, so \`![](diagram.png)\` just works. Save the file in any editor and the deck reloads where you are; type in the browser's editor and it saves to the file. Nothing leaves your machine. Needs Node 20 or later.

\`npx slidetake\` in a folder opens its \`index.md\`, \`deck.md\`, \`slides.md\` or \`README.md\`. \`--open\` opens the browser; \`--port 5000\` picks the port.

### On your website

\`slidetake.js\` turns a deck on any page into a Slidetake deck. Describe the deck, then load the script:

\`\`\`html
<script>
window.SLIDETAKE = {
  markdown: "# My deck\\n\\n## A section",
  settings: {title: "My deck"},
  base: location.href,                 // where relative images resolve
  trail: [{label: "My site", url: "/"}],
  themeKey: "my-site-theme",           // optional: your site's light/dark key
  colors: {accent: "#2563eb"}          // optional: your colours
};
<\/script>
<script src="https://cdn.jsdelivr.net/npm/slidetake/dist/slidetake.js"><\/script>
\`\`\`

Users get a viewer with no recording controls; \`?obs\` on the page's address brings them back for you. The hugo-continuum theme writes this for slide pages with \`engine: slidetake\`, so a Hugo site previews decks locally with \`hugo server\`.

### With AI

The deck is plain markdown, so any AI can write one. Point it at the format, [slidetake.com/llms.txt](/llms.txt), and say what the talk is about.

- **With an agent that edits files** (Claude Code and the like): *"Write a Slidetake deck about X in talk/deck.md, following slidetake.com/llms.txt"*, then \`npx slidetake talk/deck.md\`. Ask for changes and the open deck reloads as the file is saved.
- **In a chat** (Claude, no tools): ask for the deck as one markdown block, then on slidetake.com press **\u270E Editor**, select all and paste. It's your copy at once; **Share** gives a link with the deck inside it.
- **Images:** an agent places them next to the file; in a chat, use full image URLs, or \`base:\` pointing at where they live.

## 2\uFE0F\u20E3 Write a deck

A deck is an ordinary markdown file. **Every heading becomes a card**, and a heading branches off the nearest shallower heading above it.

\`\`\`md
# Product            \u2190 the first card
Intro text.

## Pricing           \u2190 branches from Product
### Enterprise       \u2190 branches from Pricing
## Roadmap {#plan}   \u2190 branches from Product, id "plan"

See the [roadmap](#plan).
\`\`\`

### Cards

- Text before the first heading becomes a card of its own.
- Headings inside fenced code blocks are ignored.
- A card's id is its heading slugified (\`## Moving around\` \u2192 \`moving-around\`), or set one with \`{#id}\` at the end of the heading.
- A link to \`#id\` flies to that card.
- Cards widen for wide tables, columns, diagrams and embeds; anything wider still is scaled to fit.

### What a card can hold

Plain markdown, and the layout follows from what's on the card. [See every one in the showcase \u2192](/showcase)

| Write | Get |
|---|---|
| \`<!-- steps -->\` | what follows, one press each (a list item by item), to the end of the card or a \`<!-- steps: off -->\` |
| \` \`\`\`dot \`, \` \`\`\`d2 \` | a Graphviz or D2 diagram |
| \` \`\`\`echarts \` with JSON options | a chart, in the deck's colours for dark and light |
| \` \`\`\`svg \` | an SVG drawing, inline: \`currentColor\` is the text colour and \`var(--text)\`, \`var(--text-muted)\`, \`var(--accent)\` switch with dark and light; scripts, styles and links are removed |
| \`![](drawing.svg)\` | an SVG image, as drawn |
| an image alone | an image card: a phone shot sits beside the heading and caption, a landscape one spans the card between them, a 16:9 one fills it |
| an image and text | a split card: the image sits on the side written first |
| a list of images, diagrams or charts | a gallery; with \`<!-- steps -->\` a carousel, one per press |
| two or more images, diagrams or charts in a row after \`<!-- steps -->\` | a carousel, one per press |
| images in one paragraph | a grid, up to four a row |
| \`<!-- view: full -->\` in a card | a 16:9 card for a big image, without the camera unless the card asks for it |
| a YouTube link alone on a line | the video: the next press plays it, leaving pauses it |

The first and last cards animate in on their own. The alt text of an image is its caption.

### Deck settings

An optional block at the top of the file:

\`\`\`yaml
---
title: My talk               \u2190 the page title, and the video's
duration: 10m                \u2190 talk length, for the timer
accent: "#3b82f6"            \u2190 the deck's colour (Slidetake's own is green)
brand: example.com/talks     \u2190 text in the top-right corner
logo: https://\u2026/logo.png     \u2190 image beside it
base: https://\u2026/deck-folder/ \u2190 where relative images live, for a file opened from elsewhere
---
\`\`\`

\`accent\` is one colour; Slidetake makes it bright for dark mode and deep enough to read on white for light mode, and uses it for text accents, lines, charts and diagrams. Camera and recording settings are in [step 4](#4-record-a-video).

### Decks from elsewhere

**reveal.js** decks open as they are: \`---\` starts a slide and \`--\` a vertical one beneath it. Fragments (\`fade-up\`, \`grow\`, \u2026), \`r-stack\`, \`<!-- .element: \u2026 -->\`, \`<section>\` slides, \`data-autoslide\`, \`data-gsap\` entrances and \`title-scramble\` all work.

**Older \`+++\` decks**, with \`id\`, \`parent\`, \`x\`, \`y\` frontmatter, still load.

## 3\uFE0F\u20E3 Present

Click a card to fly to it. Drag to pan; scroll or pinch to zoom. On a touch screen, the bottom bar adds \u2190 \u2192 buttons.

| Key | Does |
|---|---|
| \u2192 \u2190 Space | next / previous step, in document order |
| \u2193 \u2191 | first child / parent |
| O | the whole map; **O** again or Esc goes back |
| F | fullscreen; **F** again or Esc leaves |
| K or ? | these keys; again closes them |
| 1 2 3 4 | focus, path, radial, tree |
| + \u2212 | bigger / smaller slides (remembered) |
| E \xB7 L | editor \xB7 light / dark |
| C \xB7 V \xB7 R | camera \xB7 camera layouts \xB7 record |

### Layouts

**Focus** doesn't travel at all: the next slide fades in where the last one was.

**Path**, the default, is made for presenting and video: a staircase in presenting order. Each section is a row, and the next one starts just below where the last ended, so every move is a short step right or down.

**Radial** rings out from the first card, and **tree** is a top-down chart.

The layout you pick is remembered in this browser, for every deck.

### On screen

Text keeps one size within a section and only changes when the section does; charts and diagrams are fitted on their own.

\`<!-- view: overview -->\` on a slide pulls back to the whole map for a beat before flying in: a good start to a chapter.

### Progress and timer

In fullscreen the cursor and controls hide after two seconds without the mouse moving, and a thin bar along the bottom fills with every press.

With \`duration: 10m\` (or \`90s\`, \`1h\`, \`12:30\`), a lighter layer of the same colour grows behind it with the clock: if it shows past the solid fill, you're behind; if it reaches the end, the bar pulses. The timer is for you, so recordings show progress only, unless the deck says \`timer: always\`. \`progress: off\` hides the bar.

## 4\uFE0F\u20E3 Record a video

Two ways to record, both slide by slide, so there's no timeline to edit afterwards. Press **\u25CF Record** and pick one:

| | In this browser | OBS |
|---|---|---|
| Install | nothing | [OBS Studio](https://obsproject.com) (free) |
| Browser | Chrome, Edge or another Chromium browser, on a computer | any |
| Screen | any shape: the deck is recorded in a 16:9 frame | a 16:9 screen, physical or virtual |
| Quality | 1080p, or 720p on a smaller screen | whatever OBS records |
| Final video | **Download** joins the picked takes, in the browser | an ffmpeg command |

### Record in the browser

**\u25CF Record** opens the deck's **take board**: every slide, in order, with every take recorded of it, from every recording.

1. The first time, **\u2699 Setup** (top right of the board) checks the browser and screen and lists your cameras and microphones with a level meter. The camera you pick there (or **No camera**) is remembered for the deck, and **\u25CF Record turns it on by itself**, before the countdown so you can check your framing, then back off afterwards. It defaults to your camera when the deck has a camera box or camera moves. **C** is for presenting live.
2. **\u25CF Record**, and when Chrome asks, share **this tab**. The deck goes fullscreen in a 16:9 frame; only the frame (slides and camera) is recorded, never the rest of the screen.
3. To redo part of it later, tick slides (shift-click ticks a range): **\u25CF Record** then records exactly those, each with its entry, and stops by itself after the last. Between ticked slides that aren't next to each other the deck jumps, as a retake does, so the slides in between keep their takes.
4. Every take starts with the move in from the slide before it, so it depends on both. Edit a slide and its takes and the next slide's are marked *outdated*: kept, but no longer picked, until you record them again (or pick one yourself). To drop a slide, delete it from the deck, then record the slide that followed it again.

Every take is its own file, kept in this browser's private storage until you purge it: **\u{1F5D1} Purge takes \u2192 Unused takes** keeps only the ones the video uses.

In fullscreen, the frame must be at least 1280\xD7720 real pixels for 720p, 1920\xD71080 for 1080p: a Retina laptop makes 1080p, a 1366\xD7768 screen 720p. Below that, use OBS.

### Set up OBS

1. In OBS, turn on Tools \u2192 WebSocket Server Settings.
2. In Slidetake, press **\u25CF Record**, then **\u2699 Setup \u2192 Use OBS**, and enter OBS's host, port and password. Tick *Remember* to skip this next time. \u25CF Record opens in the mode you used last; **Use Chrome** (or Edge, Brave\u2026: your browser's name) switches back. Beside \u2699 Setup, a line shows what a take will use: \`In Chrome \xB7 camera \xB7 microphone\`, or \`OBS \xB7 camera\`.
3. Use a 16:9 screen (YouTube is 16:9): Setup checks yours. If it isn't, move the window to one that is, physical or virtual (say 1920\xD71080), and press **F** there.

\`?obs=localhost:4455\` (or \`?obs=host:port:password\`) in the address fills this in and connects as the page opens.

From https://slidetake.com, OBS must be on the same computer: browsers block secure pages from reaching plain \`ws://\` addresses elsewhere. For OBS on another machine, use \`npx slidetake\`, which serves over http.

### Add your camera

**C** (or **Camera**) turns your webcam on in its box while presenting. A recording doesn't depend on it: it turns on the camera chosen for the deck (or none) by itself. The camera is off every time the page opens; until it's on, the deck's camera settings are ignored, so readers get slides using the whole screen.

\`\`\`yaml
---
pip: bottom-right            \u2190 camera corner, or none
pip_size: 24%                \u2190 camera box width
pip_shape: rect              \u2190 rect (16:9) or circle
pip_mirror: yes              \u2190 mirror the webcam
camera: 24%, 40%, full, off  \u2190 layouts V cycles through
---
\`\`\`

Slides are always placed clear of the brand and the camera box.

### Move the camera per slide

A comment in a slide changes the camera from that slide on:

\`\`\`md
## Intro
<!-- camera: full -->       \u2190 camera fills the screen

## Pricing
<!-- camera: 18% flip -->   \u2190 small, on the other side
\`\`\`

Words you can combine: \`on\`, \`off\`, \`full\`, a size like \`30%\`, a corner, \`flip\`, \`circle\` / \`rect\`, \`mirror\` / \`unmirror\`. List them with commas to step through them on one slide: \`full, on\` opens on you, and the next \u2192 shrinks the camera to its corner and shows the slide.

**V** steps through the deck's \`camera:\` list by hand.

### Take by take

**\u25CF Record** (or **R**) counts down and starts recording. From then on the deck drives everything: camera layouts, reveals and slides follow \u2192 (a Bluetooth clicker works).

- **\u2190** takes the current slide again, keeping every attempt. The deck goes back and plays the slide's entry again (the flight, the camera moving), so every take starts with it and whichever you pick joins smoothly
- **B** pauses and resumes
- one press past the last step ends the take (**Esc** ends it early)

Clicks, dragging and the map are locked so the take only moves forward.

### Review, cut and publish

Then the takes screen opens, the same in both modes: the player with **\u25CF Record** and **\u25B6 Preview** under it, every slide with its takes on the right (click one to preview it), and under them **\u29C9 Chapters**, which copies the final cut's chapters (\`0:00 Intro\`, one per section) to paste into the YouTube description; YouTube needs at least three, each 10 seconds or more. Messages share one line beside Preview, in full on hover.

- **Recorded in the browser:** the board is the review. **\u25B6 Preview** plays the picked takes back to back, following along in the take list; right after you play a single take it continues from the next slide (a message says so), otherwise from the start. **\u2193 Download** joins them into one MP4, in a few seconds, without re-encoding, and saves it like OBS does: a new file named by the date (\`deck 2026-10-30 20-04-49.mp4\`) in a folder you pick once, starting in your videos folder. Pressing it again without changing a take or the sound settings says where the video already is, rather than making it again.
- **Recorded with OBS:** one video at a time, the deck's latest recording; recording again replaces it here (the old file stays in your OBS folder). Previews come from the OBS file: open it once, or pick your OBS recordings folder and later recordings load by themselves. **\u29C9 ffmpeg** copies a ready-to-run **[ffmpeg](https://ffmpeg.org)** command that cuts the picked takes (frame-exact); \u2699 Setup \u2192 Video sets how it encodes, the frame rate and Volume boost.
- **The microphone's sound**, in \u2699 Setup \u2192 Microphone:
  - **Sound: Raw** (the default) records the mic as it is, best for a good mic in a quiet room. **Voice** turns on Chrome's noise suppression, which takes out fans, hum and other steady noise. On a Mac, Control Center \u2192 Mic Mode \u2192 Voice Isolation does the same for every app, before Chrome hears it.
  - **\u{1F50A} Volume boost** (on by default): YouTube plays videos at about \u221214 LUFS and turns louder ones down, but not quieter ones up, so a voice recorded as it is sounds quiet next to other videos. The final cut is measured the way YouTube measures it and raised towards \u221214 LUFS, stopping where its loudest peak would reach \u22121.5 dB, so it never clips. The status line says when a peak held it back.
  - **Peak limiter** (off by default) lets the boost go all the way to \u221214 LUFS by catching the few peaks (a clicker press, a bump on the mic, a hard "p") that would pass \u22121.5 dB.
  - The video is copied as it is; only the sound is re-encoded. In the ffmpeg command, Volume boost adds \`loudnorm\` (not in the no-re-encode mode), which also holds peaks below \u22121 dB.

## 5\uFE0F\u20E3 Share and keep

Every deck you open is **read-only**: Slidetake's own decks, templates, files on the web and shared links. Viewing one never changes anything.

### Your copy

**Type in a deck**, and it becomes your copy, at \`/edit\`. It lives in this browser, remembers where it came from, and is there whenever you come back: **Your copy \u2192** in the editor takes you to it.

- There's one copy at a time; the editor bar says whose it is, and marks **edited** while it has changes you haven't saved or shared.
- **Reset to original** throws your edits away.
- Starting a new copy asks first if the old one has edits you haven't kept.

### Save and share

**Save** downloads the markdown. **Share** copies a link: the short link while your copy still matches an online original, otherwise a \`/share#deflate:\u2026\` link with the whole deck compressed inside it. That part of a link never reaches a server. **Open** loads a markdown file from your computer into your copy.

### Address options

| Option | Does |
|---|---|
| \`?edit=1\` | opens the editor |
| \`?layout=focus\` (path, radial, tree) | picks the layout; path is the default |
| \`?mode=light\` | light theme |
| \`?duration=10m\` | talk length for the timer |
| \`#card-id\` | opens at a card |

## \u{1F512} Your data

No accounts, and no decks kept: your copy and settings stay in this browser, and decks inside links never reach a server. \`npx slidetake\` keeps everything on your machine. What slidetake.com does collect (Google Analytics, which the **Privacy & analytics** button in the header turns off), and which services a deck can reach, is all on the [privacy page](/privacy).

Slidetake is open source: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake).
`});var Sn,xn=G(()=>{Sn=`---
title: Slidetake Features
brand: slidetake
pip: none
---

# ![](/favicon.svg) Slide<span class="st-take">take</span> Features

The complete list, one line each. Press \u2192 to walk it, **O** for the map.

## \u2702\uFE0F Record without timeline editing

| Feature | Advantage |
|---|---|
| **Takes per slide** (\u2190) | every attempt kept; recording never stops |
| **Record in the browser** | nothing to install: the deck records itself in a 16:9 frame, at 1080p |
| **Or OBS, driven by the deck** | it starts and stops for you; you only talk |
| **Pause and resume** (B) | step away without a gap to cut |
| **Clicker support** | any Bluetooth presenter remote moves the deck |
| **16:9 check** | Setup warns before a video with bars |
| **One takes screen** | every slide's takes, Preview and Chapters, the same in the browser and with OBS |
| **Download in the browser** | the picked takes joined into one MP4 in seconds |
| **Frame-exact [ffmpeg](https://ffmpeg.org) cut** | with OBS: one command, no video editor |
| **YouTube chapters** | one click copies them, one per section |

## \u{1F5FA}\uFE0F A map, not a stack

| Feature | Advantage |
|---|---|
| **Four layouts** | focus, path (the default), radial, tree |
| **The map** (O) | the whole talk at a glance, and back |
| **Map moments** (\`view: overview\`) | open a chapter on the big picture |
| **Steady text** | one size per section, so slides don't jump |
| **Short flights** | camera moves made to read well on video |
| **Progress and timer** | a bar that fills, and a clock that tells you if you're behind |

## \u{1F3A5} The camera is part of the deck

| Feature | Advantage |
|---|---|
| **Webcam in its box** | you and the slides in one recording, no compositing |
| **Camera per slide** | corner, size, side, circle, full screen or off |
| **Steps on one slide** | open on you, then reveal the slide |
| **V** | try camera layouts live without editing |
| **Off until you turn it on** | readers never see an empty camera box |

## \u270D\uFE0F Plain markdown in

| Feature | Advantage |
|---|---|
| **One file** | any editor, versioned in git, reviewed like code |
| **Steps, diagrams, charts** | Graphviz, D2, SVG and ECharts as text |
| **Image cards** | laid out by shape: beside text, across the card, galleries, carousels, grids |
| **Full-screen cards** (\`view: full\`) | a 16:9 frame for a big image |
| **YouTube** | plays on the next press, pauses when you leave |
| **reveal.js and \`+++\` decks** | open as they are |

## \u{1F3A8} Your colours

| Feature | Advantage |
|---|---|
| **Dark and light** (L) | follows the reader, or your site |
| **\`accent:\`** | one colour, shaded for both modes, charts and diagrams included |
| **\`brand:\` and \`logo:\`** | your name on every frame |
| **Site colours** | embedded decks wear your site's palette and header |

## \u{1F310} Run it anywhere

| Where | Also gives you |
|---|---|
| **slidetake.com** | share links that carry the whole deck; your copy of any deck, kept in this browser |
| **Your computer** | relative images, reload on save, browser edits saved to the file; OBS on another machine |
| **Your website** | \`?obs\` turns your page into the recorder; the hugo-continuum theme with one frontmatter key |

## \u{1F512} Private and open

| Feature | Advantage |
|---|---|
| **No accounts, no stored decks** | nothing to sign up for or lose ([privacy](/privacy)) |
| **Decks inside links** | the deck stays in the \`#\` part, never sent to a server |
| **Analytics you can turn off** | one button on slidetake.com |
| **Open source, Apache 2.0** | read it, host it, change it: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake) |

Next, see them working: **[Showcase \u2192](/showcase)**
`});var Cn,En=G(()=>{Cn=`---
title: Slidetake Privacy
brand: slidetake
pip: none
---

# ![](/favicon.svg) Slide<span class="st-take">take</span> Privacy

Slidetake has no accounts and keeps no decks. This page lists everything that leaves your browser, and where it goes.

*Last updated 27 October 2026.*

## \u{1F4CA} What slidetake.com collects

slidetake.com counts visits with **Google Analytics**: the page's address, your browser and screen, and roughly where you are. Google Analytics sets its own cookies (\`_ga\`) to tell visits apart.

The address it records leaves out the part after \`#\` and \`?obs=\`, so neither a deck carried in a link nor an OBS password reaches it.

**You can turn it off:** the **Privacy & analytics** button in the header (the pulse icon) \u2192 *Turn analytics off*. Nothing more is sent from that browser, the \`_ga\` cookies are removed, and the tag isn't loaded on later visits. Cloudflare, which serves the site, still sees each request the way any web server does.

That is the only analytics. A copy of Slidetake you host yourself, the embed on your own site, and \`npx slidetake\` send none.

## \u{1F4BE} What stays in your browser

Kept in this browser's storage on your device, and never sent anywhere:

| What | Why |
|---|---|
| Your copy of a deck | so it's there when you come back |
| Theme, layout, slide size, editor width | your preferences |
| Recorded sessions and publish-pack settings | to review takes later |
| OBS host, port and password | only if you tick *Remember*, stored as plain text |
| Your analytics choice | so *off* stays off |

Clearing this site's data in your browser removes all of it.

## \u{1F310} Services a deck can reach

Opening Slidetake, or a deck that uses these, loads files from other services. Each sees your IP address, as with any web request.

| Service | When |
|---|---|
| Google Fonts | every page, for the typefaces |
| cdnjs, jsDelivr | every page (animation, markdown) and for diagrams, charts and OBS |
| esm.sh | a deck with a D2 diagram |
| GitHub | opening a GitHub file or gist |
| YouTube (youtube-nocookie.com) | a deck with a YouTube link; YouTube's own cookies only once you play it |
| The deck's own address | opening a deck from a link, and its images |

OBS is reached only on the address you give it, normally your own computer.

## \u{1F517} Decks in links

A shared link carries the whole deck after \`#\`. Browsers never send that part of an address to a server, so the deck travels from you to whoever opens the link without passing through slidetake.com.

## \u{1F4BB} On your computer

\`npx slidetake\` runs on your machine, serves only the deck's folder, and listens only on \`localhost\`. It sends nothing to slidetake.com or anyone else. The deck's own diagrams, charts and fonts load from the services above as on the web.

## \u2709\uFE0F Questions

Open an issue on [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake/issues). Slidetake is open source, so everything above can be checked in its code.
`});var Ln,Tn=G(()=>{Ln=`---
title: My deck
---

# My deck

Start typing: this becomes your own copy, and the template stays as it is.

## A section

Every heading is a card. \`##\` sections branch from the first card.

### A detail

\`###\` branches from the section above it.
`});var On,Mn=G(()=>{On=`---
title: Talk title
duration: 15m
---

# Talk title

One line on what the audience will take away.

## \u{1F9ED} Why this matters

- The problem, in the audience's words
- Why now
- What changes if it's solved

## \u{1F4A1} The idea

The one thing to remember, stated plainly.

### How it works

Three steps, a diagram or a table.

### An example

Something concrete the audience will recognise.

## \u2696\uFE0F Trade-offs

- What it costs
- When not to use it

## \u2705 Summary

- Point one
- Point two
- Point three

## \u{1F64F} Thank you

Where to find you, and the link to these slides.
`});var Bn,An=G(()=>{Bn=`---
title: Video title
duration: 10m
pip: bottom-right
pip_size: 24%
camera: 24%, 40%, full, off
---

<!-- camera: full, on -->

# Video title

Opens full screen on you; the next press shows this slide with you in the corner.

## \u{1F4CC} Disclaimer

<!-- camera: off, on -->

Opens without the camera, so the text has the whole screen; the next press brings you back.

## \u{1F9ED} Contents

- Part one
- Part two
- Part three

## \u{1F539} Part one

<!-- view: overview -->

The overview comment pulls back to the whole map first: a good start to a chapter.

### A detail

Slides you talk over in the corner.

## \u{1F538} Part two

### A detail

## \u{1F537} Part three

### A detail

## \u{1F64F} Thanks for watching

<!-- camera: on, full, on, off -->

Ends on you full screen, then back to the slide, then without the camera.
`});var Pn,In=G(()=>{Pn=`---
title: Slidetake Showcase
brand: slidetake
duration: 10m
---

# ![](https://slidetake.com/favicon.svg) Slide<span class="st-take">take</span> Showcase

Everything a deck can hold, written in plain markdown and working on screen. Open **\u270E Editor** to see the source of any card. Press \u2192 to walk it, **O** for the map.

## \u270D\uFE0F Text

Paragraphs, **bold**, *italic*, \`code\`, [links](https://slidetake.com) and lists, as markdown writes them.

- One point
- Another point
  - A detail under it

### Steps

Put \`<!-- steps -->\` before a list and it reveals one item per press. Everything after it on the card steps too, so a closing line waits its turn:

<!-- steps -->
- First, the problem
- Then, the idea
- Finally, the result

> The conclusion comes last. \`<!-- steps: off -->\` ends the steps early.

### Quotes and tables

> A quote stands out from the text around it.

| Plan | Price | Users |
|---|---:|---:|
| Starter | \u20B90 | 1 |
| Team | \u20B9499 | 10 |

### Code

\`\`\`python
def take(slide):
    return slide.best_attempt()
\`\`\`

## \u{1F4D0} Diagrams

Write the diagram in a fenced block named after its language.

### Graphviz

\`\`\`dot
digraph {
  rankdir=LR
  node [shape=box style=rounded]
  Markdown -> Deck -> Takes -> Video
}
\`\`\`

### D2

\`\`\`d2
direction: right
write: Write {shape: rectangle}
present: Present
record: Record
write -> present -> record: one session
\`\`\`

### SVG

Drawn inline, so \`currentColor\` and \`var(--accent)\` follow the deck's colours. Press **L** and watch it switch.

\`\`\`svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 130">
  <rect x="10" y="10" width="90" height="80" rx="10" style="fill:var(--accent)"/>
  <rect x="115" y="10" width="90" height="80" rx="10" style="fill:var(--accent);opacity:.6"/>
  <rect x="220" y="10" width="90" height="80" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="160" y="120" text-anchor="middle" font-size="14" fill="currentColor">accent, faded, outlined</text>
</svg>
\`\`\`

## \u{1F4CA} Charts

ECharts, as a fenced \`echarts\` block of JSON options.

### A bar chart

\`\`\`echarts
{
  "xAxis": {"type": "category", "data": ["Jan", "Feb", "Mar", "Apr", "May"]},
  "yAxis": {"type": "value"},
  "series": [{"type": "bar", "data": [12, 19, 15, 24, 30]}]
}
\`\`\`

### A donut

\`\`\`echarts
{
  "series": [{"type": "pie", "radius": ["45%", "70%"],
    "data": [{"name": "Equity", "value": 85}, {"name": "Debt", "value": 5}, {"name": "Gold", "value": 10}]}]
}
\`\`\`

## \u{1F5BC}\uFE0F Images

The layout comes from what's on the slide; the alt text is the caption.

### One image

![An image alone fills the card edge to edge](https://slidetake.com/og.jpg)

### Image and text

![Written first, so it sits on the left](https://slidetake.com/og.jpg)

An image beside text makes a split card. Write the text first and the image moves to the right.

### A gallery

A list of images is a gallery. With \`<!-- steps -->\` it becomes a carousel: one image at a time, the next on each press. Diagrams and charts work the same, and after \`<!-- steps -->\` two or more of them in a row are a carousel without the list.

<!-- steps -->
- ![The logo](https://slidetake.com/favicon.svg)
- ![The home-screen icon](https://slidetake.com/apple-touch-icon.png)
- ![The link preview](https://slidetake.com/og.jpg)

### A grid

Several images in one paragraph sit side by side, up to four a row:

![Logo](https://slidetake.com/favicon.svg) ![Icon](https://slidetake.com/apple-touch-icon.png) ![Preview](https://slidetake.com/og.jpg)

### Full screen

<!-- view: full -->

![A card tagged view: full is a 16:9 frame for a big image](https://slidetake.com/og.jpg)

## \u25B6\uFE0F YouTube

A YouTube link alone on a line becomes the video. The next press plays it; leaving the slide pauses it.

https://www.youtube.com/watch?v=jNQXAC9IVRw

## \u{1F3A5} Camera

<!-- camera: on, full, on -->

Try it: press **C** to turn on your camera, then \u2192. This card puts you in the corner, then full screen, then back, from one comment: \`<!-- camera: on, full, on -->\`.

## \u{1F5FA}\uFE0F Layouts and the map

<!-- view: overview -->

This card began by pulling back to the whole map: \`<!-- view: overview -->\` does that. Try it: press **1** to **4** for focus, path (the default), radial and tree, and **O** to zoom out and back.

## \u{1F3A8} Colours

Try it: press **L** now. Dark and light switch, charts and diagrams included.

A deck sets its own colour with one line, \`accent: "#3b82f6"\`, shaded for both modes. See it in [blue](/share#deflate:ZVJNa9wwEL3rV0y1hzZGTummn6YENodCoYVCAjksC9Zak5VY1zKacXZN2Gt-QH9if0kl2aSBnPTGevPmjZ_KshTsuMUKvnewbQcUummw4wrk4mL7eXn3UYoyksTiiSBurCMw2OzBagLfIeCRg4bWRagZ2CKw7xXUL7RqBbozgPcYRrau28Gdb1t_oAo4iqisQSpLNFYHzvRUGad3Qf8-h18BiaAofhRFnAKECFvPFshqg3QenS7gmrEnIb6-KkughKEsL0UZu658a4pCwToO2tPmzVuy_tBowrM8yaI20RUB6z1OLnzrhxB7rz0YjzR5n3b1Xab0mm0krGanIa2lgx_mmlpnEEY_vA6pJRtcTdsJUdc1ZkjiQR5XR0eyggfJY48RyEYz7nwYpQJpNOv4bS1_-i7VNwOm4xZNruyQjm_Byc0pgvGF1r2O6cmTEiAJg8N0u_5_vdXh-ZT3Cj4p-KDgi4J3y81pc0peZ_NzGNm-WQrjAjbsfFfF5XeWxSE4RigvoY9hxReQYKT4YKr8XihGGOlPile62QuxTkfKNP-1ORf4-_jnWUyLKQ86E_8A), [coral](/share#deflate:ZVJNa9wwEL3rV0y1hzZGSkn6EWJKYHMoFFooJNDDsrATa7IS61pGI2fXhL32B-Qn9pdUkk0TyElvrDdv3vhJay2iiy3V8K2DxgdsBTYNdbEGubi_vPhw9lkKnVhi8cwQt9YxGGp2YJHBdwR0iAGhdQlihGgJou8VbF6JbRRgZ4AeKIzRum4L975t_Z5riElEFQ1WRaKxGGKh58o43Ab8fQo_AzFDVX2vqjQFmAjufLTAFg3xabK6gJtIPQvx5Y3WwBmD1ldCp65r35qqUrBKg3a8fveerd83yHRSJllCk1wxRNzR5MK3fgip98aD8cST92lX3xVKj9EmwnJ2GvJaGPww19w6QzD64W3ILcXgctpOiM1mQwWyeJSH5cGxrOFRxrGnBGSDkbY-jFKBNBgxfVvJH77L9e1A-fhFplR2yMfX4OT6mMD4SusB29RxVAIkU3CUb1fP13cYXk75qOBCwScFlwrOztfH9TF7nc3PYRT75lwYF6iJznd1Wn5ro9gHFwn0FfQprPQCMkwUH0xd3gunCBP9v-I1NjshVvnImZa_NucCf_88vYhpMeXBJ-If) or [violet](/share#deflate:ZVJNa9wwEL3rV0y1hzZGTmlo-mFKYHMoFFooJJDDsmCtNVmJdS2jGe-uCXvtD-hP7C-pJJt0ISe9sd68eeOnsiwFO26xgm8d7J1vkYVuGuy4Arn4tLluHj9IUUaaWJxRxL11BAabHVhN4DsEPHLQ0LoINQNbBPa9gvqFWq1AdwZwj2Fk67otPPq29QeqgKOIyhqkskRjdeBMT5Vxehv0r0v4GZAIiuJ7UcQpQIiw8WyBrDZIl9HrAu4YexLiy6uyBEoYyvJGlLHr1remKBSs4qAdrd-8JesPjSa8yJMsahNdEbDe4eTCt34IsffOg_FIk_dpV99lSq_ZRsJydhrSWjr4Ya6pdQZh9MPrkFqyweW0nRB1XWOGJJ7kcXl0JCt4kjz2GIFsNOPWh1EqkEazjt9W8ofvUn0_YDoe0OTKDun4GpxcnyIYX2jtdRs7TkqAJAwO0-3q__VGh_Mp7xV8VHCt4LOCd1fr0_qUvM7m5zCyfXMljAvYsPNdFZffWhaH4BihvIE-hhVfQIKR4oOp8nuhGGGkPyve6mYnxCodKdP81-Zc4O_vP2cxLaY86EL8Aw).

## \u2702\uFE0F Record a video

Try it with [OBS](https://obsproject.com) open and its WebSocket server on: press **\u25CF Record**. This deck records slide by slide; stumble, press \u2190, say it again. At the end the review hands you the cut and the YouTube chapters. Step by step: [Docs \u2192 Record a video](/docs#4-record-a-video).

## \u{1F310} Open from anywhere

Try it: this deck is a file on GitHub, and opens from there too: **[slidetake.com/gh/slidetake/slidetake/examples/showcase.md](/gh/slidetake/slidetake/examples/showcase.md)**. Gists, any markdown URL, and a link with the deck inside it open the same way, and \`npx slidetake deck.md\` opens one from your computer.

## \u{1F680} Start your own

Open **\u270E Editor** and press **New** for a template (blank, talk or recording), or type in this deck to make it your copy.

The templates and this deck live in [examples/](https://github.com/slidetake/slidetake/tree/main/examples) on GitHub.

Next, how it all works, step by step: **[Docs \u2192](/docs)**
`});function Qe(e){return e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"")||"card"}function xt(e){return e.replace(/<[^>]*>/g,"").replace(/!?\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").trim()}function O(e){return String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Rn(e){if(typeof document<"u"){let t=document.createElement("textarea");return t.innerHTML=e,t.value}return e.replace(/&(#x[\da-f]+|#\d+|\w+);/gi,(t,a)=>a[0]==="#"?String.fromCodePoint(a[1].toLowerCase()==="x"?parseInt(a.slice(2),16):parseInt(a.slice(1),10)):us[a.toLowerCase()]??t)}function St(e){let t={};for(let a of e.matchAll(/([\w-]+)="([^"]*)"/g))t[a[1]]=a[2];return t}function Et(e,t){let a=[[]],o=null;return e.split(`
`).forEach(n=>{let r=n.match(/^\s{0,3}(`{3,}|~{3,})/);r&&(o?r[1][0]===o[0]&&r[1].length>=o.length&&(o=null):o=r[1]),!o&&!r&&t.test(n)?a.push([]):a[a.length-1].push(n)}),a.map(n=>n.join(`
`))}function zn(e){let t=String(e??"").trim().toLowerCase();if(!t)return 0;let a=t.match(/^(\d+):(\d{1,2})$/);if(a)return(+a[1]*60+ +a[2])*1e3;if(a=t.match(/^(\d+(?:\.\d+)?)\s*(h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)?$/),!a)return 0;let o=(a[2]||"m")[0];return parseFloat(a[1])*(o==="h"?3600:o==="s"?1:60)*1e3}function na(e){let t=Math.max(0,Math.round(e/1e3)),a=Math.floor(t/3600),o=Math.floor(t%3600/60),n=t%60;return(a?a+":"+String(o).padStart(2,"0"):o)+":"+String(n).padStart(2,"0")}function Ze(e){let t=Math.max(0,Math.round(e/1e3)),a=Math.floor(t/3600),o=Math.floor(t%3600/60),n=t%60;return a?a+"h "+String(o).padStart(2,"0")+"m":o?o+"m "+String(n).padStart(2,"0")+"s":n+"s"}var us,ra=G(()=>{"use strict";us={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:"\xA0",mdash:"\u2014",ndash:"\u2013",hellip:"\u2026",rsquo:"\u2019",lsquo:"\u2018",rdquo:"\u201D",ldquo:"\u201C"}});function Fn(e){let t=null;return e.split(`
`).filter(a=>{let o=a.match(/^\s{0,3}(`{3,}|~{3,})/);return o?(t?o[1][0]===t[0]&&o[1].length>=t.length&&(t=null):t=o[1],!1):!t}).join(`
`).replace(/`[^`\n]*`/g,"")}function Xa(e){return/<!--\s*view\s*:\s*(overview|map)\s*-->/i.test(Fn(e))}function Qa(e){let t=Fn(e).match(/<!--\s*camera\s*:\s*([\s\S]*?)\s*-->/i);return t?t[1].trim():null}function hs(e){let t={},a=e.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);if(!a)return{deck:t,body:e};let o=null;return a[1].split(`
`).forEach(n=>{let r=n.match(/^\s+-\s+(.*)$/);if(r&&o){t[o].push(r[1].trim().replace(/^["']|["']$/g,""));return}let i=n.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);if(!i){o=null;return}let s=i[1].toLowerCase(),l=i[2].trim().replace(/^["']|["']$/g,"");l===""?(t[s]=[],o=s):(t[s]=l,o=null)}),{deck:t,body:e.slice(a[0].length)}}function Nn(e){let t=n=>typeof n=="string"||typeof n=="number"||typeof n=="boolean",a=n=>String(n).replace(/\s*\n\s*/g," "),o=[];for(let[n,r]of Object.entries(e||{}))/^[A-Za-z_][\w-]*$/.test(n)&&(t(r)?o.push(n+": "+a(r)):Array.isArray(r)&&r.every(t)&&(o.push(n+":"),r.forEach(i=>o.push("  - "+a(i)))));return o.length?`---
`+o.join(`
`)+`
---
`:""}function ms(e){let t=e.split(`
`),a={},o=e;if(t[0]!==void 0&&t[0].trim()==="---"){let n=-1;for(let r=1;r<t.length;r++)if(t[r].trim()==="---"){n=r;break}n!==-1&&(t.slice(1,n).forEach(r=>{let i=r.indexOf(":");i>-1&&(a[r.slice(0,i).trim()]=r.slice(i+1).trim().replace(/^["']|["']$/g,""))}),o=t.slice(n+1).join(`
`).replace(/^\n+/,""))}return{meta:a,body:o}}function fs(e){let t=e.replace(/<!--[\s\S]*?-->/g,""),a=t.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m),o=t.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i),n=null;if(a&&(!o||a.index<o.index)?n=a[1]:o&&(n=o[1].replace(/<[^>]+>/g," ")),!n){let r=t.split(`
`).map(i=>i.replace(/<[^>]+>/g,"").trim()).find(i=>i&&!/^[-|:\s]+$/.test(i));n=r?r.slice(0,60):null}return n?Rn(xt(n)).replace(/\s+/g," ").trim():null}function Dn(e){let t=e.match(/<!--\s*\.slide:([\s\S]*?)-->/i);return t?St(t[1]):{}}function jn(e,{render:t=a=>({html:a,err:null})}={}){let a=new Map,o=y=>{let v=y,u=2;for(;a.has(v);)v=y+"-"+u++;return v},n=y=>(a.set(y.id,{x:null,y:null,children:[],...y}),y.id);e=e.replace(/\r\n?/g,`
`);let r=/^\+\+\+[ \t]*$/m.test(e),i={};r||({deck:i,body:e}=hs(e));let s=/^slides?$/i.test(String(i.layout||""))||/^slides?$/i.test(String(i.type||"")),l=!r&&(Et(e,/^--\s*$/).length>1||s&&Et(e,/^---\s*$/).length>1),c=r?M():l?g():d();return a.forEach(y=>{(!y.parent||y.parent===y.id||!a.has(y.parent))&&(y.parent=null)}),a.forEach(y=>{let v=new Set([y.id]),u=y.parent;for(;u;){if(v.has(u)){y.parent=null;break}v.add(u),u=a.get(u).parent}}),a.forEach(y=>{y.parent&&a.get(y.parent).children.push(y.id)}),{deck:i,nodes:a,format:r?"+++":l?"reveal":"headings",errCount:c};function d(){let y=[],v=null,u=null,T={level:0,title:null,explicitId:null,lines:[]};e.split(`
`).forEach(k=>{let f=k.match(/^\s{0,3}(`{3,}|~{3,})/);f&&(u?f[1][0]===u[0]&&f[1].length>=u.length&&(u=null):u=f[1]);let x=!u&&!f?k.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/):null;if(x){let C=x[2],J=null,ee=C.match(/\s*\{#([\w\-:.]+)\}\s*$/);ee&&(J=ee[1],C=C.slice(0,ee.index)),v={level:x[1].length,title:xt(C),explicitId:J,lines:[x[1]+" "+C]},y.push(v)}else(v||T).lines.push(k)});let L=T.lines.join(`
`);L.trim()&&(y.length&&!L.replace(/<!--[\s\S]*?-->/g,"").trim()?y[0].lines.splice(1,0,...T.lines):y.unshift(T));let w=[];return y.forEach(k=>{for(;w.length&&w[w.length-1].level>=k.level;)w.pop();let f=w.length?w[w.length-1].id:null,x=k.lines.join(`
`).trim(),C=k.title||xt((x.split(`
`).find($=>$.trim())||"Intro").slice(0,48));k.id=o(k.explicitId||Qe(C));let{html:J,err:ee}=t(x);n({id:k.id,parent:f,title:C,html:J,err:ee,camera:Qa(x),mapFirst:Xa(x)}),w.push(k)}),0}function M(){let y=e.split(/\n\+\+\+[ \t]*\n/).map(T=>T.trim()).filter(T=>T.length),v=null,u=0;return y.forEach((T,L)=>{let{meta:w,body:k}=ms(T),f=o(w.id||"slide-"+(L+1)),x="parent"in w?w.parent||null:v,C=k.match(/^#{1,6}\s+(.+)$/m),J=w.title||(C?xt(C[1]):f),{html:ee,err:$}=t(k);$&&u++,n({id:f,parent:x,title:J,html:ee,err:$,camera:w.camera||Qa(k),mapFirst:Xa(k),x:w.x!==void 0?parseFloat(w.x):null,y:w.y!==void 0?parseFloat(w.y):null}),v=f}),u}function g(){let y=0,v=0,u=null;function T(w,k){let f=w.body.trim();v++;let x=fs(f)||"Slide "+v,C=k?a.get(k).title:null;C&&x.startsWith(C+" / ")&&(x=x.slice(C.length+3));let J=o(Qe(x)),{html:ee,err:$}=t(f);return $&&y++,n({id:J,parent:k,title:x,html:ee,err:$,camera:Qa(f),mapFirst:Xa(f),autoslide:parseInt(w.attrs["data-autoslide"],10)||0})}let L=[];return Et(e,/^---\s*$/).forEach(w=>{if(/<section\b/i.test(w)){for(let x of w.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi))L.push([{body:x[2],attrs:St(x[1])}]);let f=w.replace(/<section\b[^>]*>[\s\S]*?<\/section>/gi,"");f.trim()&&L.push([{body:f,attrs:Dn(f)}]);return}let k=Et(w,/^--\s*$/).filter(f=>f.trim()).map(f=>({body:f,attrs:Dn(f)}));k.length&&L.push(k)}),L.forEach(w=>{let k=null;w.forEach((f,x)=>{if(!u){u=k=T(f,null);return}x===0?k=T(f,u):T(f,k)})}),y}}var _n=G(()=>{"use strict";ra()});function ia(e,t){return String(t||"").toLowerCase().split(/\s+/).forEach(a=>{a&&(a==="off"||a==="hide"?e.off=!0:a==="on"||a==="pip"||a==="show"?(e.off=!1,e.full=!1,e.used=!0):a==="full"||a==="fullscreen"?(e.full=!0,e.off=!1,e.used=!0):/^\d+(\.\d+)?%?$/.test(a)?(e.size=Za(parseFloat(a)),e.used=!0):Ct.includes(a)?(e.corner=a,e.used=!0):a==="flip"?(e.flip=!e.flip,e.used=!0):a==="circle"?e.circle=!0:a==="rect"?e.circle=!1:a==="mirror"?e.mirror=!0:(a==="unmirror"||a==="no-mirror")&&(e.mirror=!1))}),e}function Un(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Hn(e,t){let a=[];if(!e.length){for(let n=0;n<=t;n++)a.push({cam:0,frag:n});return a}let o=e.findIndex(n=>!ia({},n).full);o<0&&(o=e.length-1);for(let n=0;n<=o;n++)a.push({cam:n,frag:0});for(let n=1;n<=t;n++)a.push({cam:o,frag:n});for(let n=o+1;n<e.length;n++)a.push({cam:n,frag:t});return a}var Ct,Za,qn=G(()=>{"use strict";Ct=["top-left","top-right","bottom-left","bottom-right"],Za=e=>Math.max(8,Math.min(60,e))});function Wn(e){let t=String(e||"").trim();if(!t)return null;let a;try{a=new URL(/^[a-z]+:\/\//i.test(t)?t:"https://"+t)}catch{return null}let o=a.pathname.split("/").filter(Boolean);if(a.hostname==="github.com"||a.hostname==="www.github.com"){let[n,r,i,s,...l]=o;if(n&&r&&(i==="blob"||i==="raw"||i==="tree")&&s){let c=l.join("/");return(i==="tree"||!/\.(md|markdown|txt)$/i.test(c))&&(c=(c?c+"/":"")+"index.md"),{kind:"url",url:eo+[n,r,s].join("/")+"/"+c}}if(n&&r&&!i)return{kind:"url",url:eo+n+"/"+r+"/HEAD/README.md"}}if(a.hostname==="gist.github.com"){let n=o.length>=2?o[1]:o[0];if(n&&/^[\da-f]+$/i.test(n))return{kind:"gist",id:n}}if(a.hostname==="slidetake.com"||a.hostname==="www.slidetake.com"){let n=to(a.pathname);if(n)return n;let r=a.searchParams.get("src");if(r)return{kind:"url",url:r}}return{kind:"url",url:a.href}}function to(e){let t=String(e||"").split("/").filter(Boolean).map(a=>{try{return decodeURIComponent(a)}catch{return a}});if(t[0]==="gh"&&t.length>=4){let[,a,o,...n]=t,r=o.indexOf("@"),i=r<0?o:o.slice(0,r),s=r<0?"HEAD":o.slice(r+1);return!a||!i||!s?null:{kind:"url",url:eo+[a,i,s,...n].map(encodeURIComponent).join("/")}}return t.length===1&&(t[0]==="docs"||t[0]==="help")?{kind:"builtin",id:"docs"}:t[0]==="showcase"&&t.length===1?{kind:"builtin",id:"showcase"}:t[0]==="examples"&&(t.length===1||t.length===2&&t[1]==="showcase")?{kind:"builtin",id:"showcase"}:t.length===1&&t[0]==="features"?{kind:"builtin",id:"features"}:t.length===1&&t[0]==="privacy"?{kind:"builtin",id:"privacy"}:t[0]==="gist"&&t[1]&&/^[\da-f]+$/i.test(t[1])?t[2]?{kind:"gist",id:t[1],file:t[2]}:{kind:"gist",id:t[1]}:null}function Gn(e){if(e.kind==="builtin")return e.id==="home"?"/":e.id==="showcase"?"/showcase":e.id.startsWith("template:")?"/new?template="+e.id.slice(9):"/"+e.id;if(e.kind==="gist")return"/gist/"+e.id+(e.file?"/"+encodeURIComponent(e.file):"");let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);if(t){let[,a,o,n,r]=t;if(!/^refs$/.test(n))return"/gh/"+a+"/"+o+(n==="HEAD"?"":"@"+n)+"/"+r}return"/?src="+encodeURIComponent(e.url)}var eo,ao=G(()=>{"use strict";eo="https://raw.githubusercontent.com/"});function gs(e){let t="";for(let a=0;a<e.length;a+=32768)t+=String.fromCharCode(...e.subarray(a,a+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function bs(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}async function Yn(e,t){let a=new Response(new Blob([e]).stream().pipeThrough(t));return new Uint8Array(await a.arrayBuffer())}async function Vn(e){return gs(await Yn(new TextEncoder().encode(e),new CompressionStream("deflate-raw")))}async function Kn(e){return new TextDecoder().decode(await Yn(bs(e),new DecompressionStream("deflate-raw")))}function sa(e){let t=e.replace(/^#/,"");if(!t.startsWith(oo)){let r=t;try{r=decodeURIComponent(t)}catch{}return{data:null,slide:r}}let a=t.slice(oo.length),o=a.indexOf("~"),n=o<0?"":a.slice(o+1);try{n=decodeURIComponent(n)}catch{}return{data:o<0?a:a.slice(0,o),slide:n}}function no(e,t){return"#"+oo+e+(t?"~"+encodeURIComponent(t):"")}var oo,ro=G(()=>{"use strict";oo="deflate:"});function Jn(e,t,a){let o=e.replace(/\/+$/,"")||"/",n=new URLSearchParams(t),{data:r,slide:i}=sa(a);if(o==="/share")return r?{page:"share",data:r,slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:""};if(o==="/edit")return{page:"edit",slide:i};if(o==="/new"){let c=n.get("template");return c&&vs.includes(c)?{page:"source",source:{kind:"builtin",id:"template:"+c},slide:i}:{page:"pick"}}let s=to(o);if(s)return{page:"source",source:s,slide:i};let l=n.get("src");return o==="/"&&l?{page:"source",source:{kind:"url",url:l},slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:i}}function ke(e){switch(e.kind){case"builtin":return e.id==="home"?"Home":e.id==="docs"||e.id==="help"?"the docs":e.id==="showcase"?"the showcase":e.id==="features"?"the features":e.id==="privacy"?"the privacy page":"the "+e.id.replace(/^template:/,"")+" template";case"gist":return"a gist"+(e.file?" ("+e.file+")":"");case"shared":return"a shared deck";case"file":return e.name;case"url":{let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/[^/]+\/(.+)$/);if(t)return t[1]+"/"+t[2]+"/"+t[3];try{let a=new URL(e.url);return a.hostname+a.pathname}catch{return e.url}}}}function la(e,t,{exported:a=!1}={}){return{text:e,origin:t,originText:e,exported:a?e:null}}function ca(e){return e.text!==(e.exported??e.originText)}function da(e){return e.text===e.originText}function $n(e){try{let t=JSON.parse(e||"null");return!t||typeof t.text!="string"||!t.origin||typeof t.origin.kind!="string"?null:{text:t.text,origin:t.origin,originText:typeof t.originText=="string"?t.originText:t.text,exported:typeof t.exported=="string"?t.exported:null}}catch{return null}}var vs,Xn=G(()=>{"use strict";ao();ro();vs=["blank","talk","recording"]});function io(e){let t;try{t=new URL(e)}catch{return null}let a=t.hostname.replace(/^(www\.|m\.)/,""),o=null,n=!1;if(a==="youtu.be")o=t.pathname.slice(1).split("/")[0];else if(a==="youtube.com"||a==="youtube-nocookie.com"){let r=t.pathname.split("/").filter(Boolean);r[0]==="watch"?o=t.searchParams.get("v"):["shorts","live","embed"].includes(r[0])&&(o=r[1]||null,n=r[0]==="shorts")}return!o||!/^[\w-]{6,}$/.test(o)?null:{id:o,start:ys(t.searchParams.get("t")||t.searchParams.get("start")||""),portrait:n}}function ys(e){if(/^\d+$/.test(e))return+e;let t=e.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);return t&&e?+(t[1]||0)*3600+ +(t[2]||0)*60+ +(t[3]||0):0}function Qn(e){return"https://www.youtube-nocookie.com/embed/"+encodeURIComponent(e.id)+"?enablejsapi=1&rel=0&playsinline=1"+(e.start?"&start="+e.start:"")}var Zn=G(()=>{"use strict"});function he(e){let t=new Map,a=e.totalObs??e.total;return e.events.forEach((o,n)=>{t.has(o.id)||t.set(o.id,{id:o.id,title:o.title,takes:[]});let r=t.get(o.id),i=e.events[n+1];r.takes.push({no:r.takes.length+1,start:er(o),end:i?er(i)-(i.lead||0):a})}),t}function Tt(e){let t=[],a=ua(e);return he(e).forEach(o=>{let n=e.picks[o.id]??o.takes.length;if(!n)return;let r=o.takes[n-1];if(!r)return;let i=tr(r.start,a),s=tr(r.end,a);s>i&&t.push({id:o.id,title:o.title,f0:i,f1:s,start:i*1e3/a,end:s*1e3/a})}),t}function ws(e){let t=[];return e.forEach(a=>{let o=t[t.length-1];o&&a.f0===o.f1?(o.f1=a.f1,o.end=a.end):t.push({f0:a.f0,f1:a.f1,start:a.start,end:a.end})}),t}function so(e,t){let a=0,o=[];return Tt(e).forEach(n=>{let{sec:r,title:i}=t(n.id,n.title),s=o[o.length-1];(!s||s.sec!==r&&s.title!==i)&&o.push({sec:r,title:i,t:a}),a+=n.end-n.start}),{list:o,length:a}}function or(e,t){let{list:a,length:o}=so(e,t),n=a.filter((r,i)=>i===0||(a[i+1]?a[i+1].t:o)-r.t>=1e4);return n.length&&(n[0].t=0),{lines:n.map(r=>na(r.t)+" "+r.title),dropped:a.length-n.length,length:o}}function nr(e,t,{input:a,outputName:o,sectionOf:n,loudness:r}){let i=ws(Tt(e));if(!e.withObs)return"# This was a rehearsal: nothing was recorded.";if(!i.length)return"# Every slide is left out: nothing to render.";let s=ks(a)+o,{list:l,length:c}=so(e,n),d=f=>String(f).replace(/[=;#\\\n]/g,x=>"\\"+x),g=`cat > /tmp/slidetake-chapters.txt <<'EOF'
`+(`;FFMETADATA1
title=`+d(e.deckTitle)+`
`+l.map((f,x)=>`[CHAPTER]
TIMEBASE=1/1000
START=`+Math.round(f.t)+`
END=`+Math.round(l[x+1]?l[x+1].t:c)+`
title=`+d(f.title)).join(`
`))+`
EOF
`,y=" -map 0:v:0 -map 0:a:0 -map_metadata 1 -map_chapters 1";if(t==="copy"){let f=i.map(C=>"file "+pa(a)+`
inpoint `+ar(C.start)+`
outpoint `+ar(C.end)).join(`
`);return(i.length>1?`# Careful: without re-encoding, cuts can only land on keyframes (OBS puts one about every 2 s),
# so `+(i.length===2?"the cut":"each of the "+(i.length-1)+" cuts")+` here may keep or lose up to ~2 s. Use a frame-accurate option for retakes.
`:"")+`cat > /tmp/slidetake-cuts.txt <<'EOF'
`+f+`
EOF
`+g+"ffmpeg -f concat -safe 0 -i /tmp/slidetake-cuts.txt -i /tmp/slidetake-chapters.txt"+y+" -c copy -movflags +faststart "+pa(s)}let v=ua(e),u=f=>(f/v).toFixed(6),T=f=>((f-.5)/v).toFixed(6),L=i.map(f=>"gte(t,"+T(f.f0)+")*lt(t,"+T(f.f1)+")").join("+"),w=i.map(f=>"gte(t,"+u(f.f0)+")*lt(t,"+u(f.f1)+")").join("+"),k=t==="mac"?"-c:v h264_videotoolbox -b:v 12M":"-c:v libx264 -crf 18 -preset medium";return g+"ffmpeg -i "+pa(a)+" -i /tmp/slidetake-chapters.txt"+y+` -vf "select='`+L+`',setpts=N/FRAME_RATE/TB" -af "asetnsamples=n=48:p=0,aselect='`+w+"',asetpts=N/SR/TB"+(r?",loudnorm=I=-14:TP=-1:LRA=11":"")+'"'+(r?" -ar 48000":"")+" "+k+" -c:a aac -b:a 192k -movflags +faststart "+pa(s)}var er,ua,tr,et,ks,pa,ar,ha=G(()=>{"use strict";ra();er=e=>e.obsT??e.t,ua=e=>e.fps||60,tr=(e,t)=>Math.round(e*t/1e3);et=e=>String(e||"").split(/[\\/]/).pop()||"",ks=e=>{let t=Math.max(String(e).lastIndexOf("/"),String(e).lastIndexOf("\\"));return t>=0?String(e).slice(0,t+1):""},pa=e=>"'"+String(e).replace(/'/g,"'\\''")+"'",ar=e=>(e/1e3).toFixed(3)});function xs(e,t){let a=Math.min(e,t*16/9),o=a*9/16;return{w:a,h:o,x:(e-a)/2,y:(t-o)/2}}function rr(e,t,a){let o=xs(e,t),n=[Math.floor(o.w*a),Math.floor(o.h*a)];return{quality:tt.find(r=>n[0]>=r.w&&n[1]>=r.h)||null,device:n}}function Mt(e){let t=new Map;e.events.forEach((o,n)=>{t.has(o.id)||t.set(o.id,[]),t.get(o.id).push(n)});let a=[];return he(e).forEach(o=>{let n=e.picks[o.id]??o.takes.length,r=n?o.takes[n-1]:null;if(!r)return;let i=e.events[t.get(o.id)[n-1]];i&&i.clip&&r.end>r.start&&a.push({id:o.id,title:o.title,clip:i.clip,keep:(r.end-r.start)/1e3})}),a}var tt,ma,Lt,Ss,ir,lo,sr,fa,lr,cr=G(()=>{"use strict";ha();tt=[{name:"1080p",w:1920,h:1080,bitrate:8e6},{name:"720p",w:1280,h:720,bitrate:5e6}],ma=192e3,Lt=30;Ss=["video/mp4;codecs=avc1.640028,mp4a.40.2","video/mp4;codecs=avc1,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],ir=e=>Ss.find(t=>e(t))||"",lo=e=>e.startsWith("video/mp4")?"mp4":"webm",sr=e=>Math.round((e.bitrate+ma)/8*60);fa=(e,t)=>t>e?t:e+.001,lr=e=>e.replace(/\s*\([0-9a-f]{4}:[0-9a-f]{4}\)\s*$/i,"")});function Es(e){let t=1681.974450955533,a=.7071752369554196,o=Math.tan(Math.PI*t/e),n=Math.pow(10,3.999843853973347/20),r=Math.pow(n,.4996667741545416),i=1+o/a+o*o,s={b0:(n+r*o/a+o*o)/i,b1:2*(o*o-n)/i,b2:(n-r*o/a+o*o)/i,a1:2*(o*o-1)/i,a2:(1-o/a+o*o)/i};t=38.13547087602444,a=.5003270373238773,o=Math.tan(Math.PI*t/e),i=1+o/a+o*o;let l={b0:1,b1:-2,b2:1,a1:2*(o*o-1)/i,a2:(1-o/a+o*o)/i};return{shelf:s,highPass:l}}function dr(e,t){let{shelf:a,highPass:o}=Es(e),n=Math.round(e/10),r=[],i=Array.from({length:t},()=>new Float64Array(8)),s=d=>d>=3&&d<=4?1.41:1,l=0,c=0;return{add(d){let M=d[0].length;for(let g=0;g<t;g++){let y=d[g]||d[0],v=i[g],u=s(g),[T,L,w,k,f,x,C,J]=v,ee=l,$=Math.floor(ee/n),z=($+1)*n,q=0;for(let se=0;se<M;se++){let te=y[se];te>c?c=te:-te>c&&(c=-te);let X=a.b0*te+a.b1*T+a.b2*L-a.a1*w-a.a2*k;L=T,T=te,k=w,w=X;let kt=o.b0*X+o.b1*f+o.b2*x-o.a1*C-o.a2*J;x=f,f=X,J=C,C=kt,q+=kt*kt,++ee===z&&(r[$]=(r[$]||0)+u*q,q=0,$++,z+=n)}q&&(r[$]=(r[$]||0)+u*q),v.set([T,L,w,k,f,x,C,J])}l+=M},result(){let d=Math.floor(l/n),M=[];for(let u=3;u<d;u++)M.push(((r[u-3]||0)+(r[u-2]||0)+(r[u-1]||0)+(r[u]||0))/(4*n));let g=u=>u.reduce((T,L)=>T+L,0)/u.length,y=M.filter(u=>ga(u)>-70),v=y.length?y.filter(u=>ga(u)>ga(g(y))-10):[];return{integrated:v.length?ga(g(v)):-1/0,peak:c,peakDb:c>0?Cs(c):-1/0}}}}function po(e,{limit:t=!1,target:a=-14,ceiling:o=-1.5}={}){if(!isFinite(e.integrated))return 0;let n=Math.min(a-e.integrated,co);return n<=0||t||e.peakDb==null||!isFinite(e.peakDb)?n:Math.max(0,Math.min(n,o-e.peakDb))}function uo(e,t,a={}){let o=ba(a.ceilingDb??-1.5),n=Math.max(1,Math.round((a.lookahead??.005)*e)),r=1-Math.exp(-1/((a.release??.05)*e)),i=Array.from({length:t},()=>[]),s=[],l=[],c=new Float64Array(n),d=0,M=n,g=1,y=!1,v=0,u=0;c.fill(1);let T=L=>{for(;l.length&&l[l.length-1][1]>=L;)l.pop();for(l.push([d,L]);l[0][0]<=d-n;)l.shift();let w=l[0][1];if(g=w<g?w:g+(w-g)*r,g>.999&&(g=1),M+=g-c[d%n],c[d%n]=g,d>=n-1){let k=M/n,f=k>.999?1:k;s.push(f),f<.999&&!y&&v++,y=f<.999}d++};return{push(L){let w=L[0].length;for(let k=0;k<w;k++){let f=0;for(let x=0;x<t;x++){let C=(L[x]||L[0])[k];i[x].push(C),C>f?f=C:-C>f&&(f=-C)}T(f>o?o/f:1)}},ready:()=>s.length-u,take(L){let w=Array.from({length:t},()=>new Float32Array(L));for(let k=0;k<L;k++){let f=s[u+k];for(let x=0;x<t;x++)w[x][k]=i[x][u+k]*f}return u+=L,u>65536&&(s.splice(0,u),i.forEach(k=>k.splice(0,u)),u=0),w},end(){for(let L=0;L<n-1;L++){for(let w=0;w<t;w++)i[w].push(0);T(1)}},get events(){return v}}}var Cs,ga,co,ba,pr=G(()=>{"use strict";Cs=e=>20*Math.log10(e),ga=e=>-.691+10*Math.log10(e);co=20;ba=e=>Math.pow(10,e/20)});function ur(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function hr(e,t){return e.map((a,o)=>{let n=e[o-1]||"";return{id:a,title:t(a).title,fp:t(a).fp,prev:n,prevFp:n?t(n).fp:""}})}function mr(e,t,a){let o=new Map(a.map(i=>[i.id,i])),n=new Map;e.events.forEach(i=>{n.has(i.id)||n.set(i.id,[]),n.get(i.id).push(i)});let r=[];return he(e).forEach(i=>i.takes.forEach((s,l)=>{let c=n.get(i.id)[l];if(!c||!c.clip||s.end<=s.start)return;let d=o.get(i.id);d&&r.push({uid:c.clip,id:i.id,title:i.title,clip:c.clip,ms:s.end-s.start,run:t,date:e.date,fp:d.fp,prev:d.prev,prevFp:d.prevFp,at:s.start})})),r.sort((i,s)=>i.at-s.at).map(({at:i,...s})=>s)}function ho(e,t){return t.map(a=>{let o=e.takes.filter(i=>i.id===a.id).map((i,s)=>({...i,no:s+1,outdated:i.fp!==a.fp?"slide":(i.prev??null)!==a.prev||i.prevFp!==a.prevFp?"before":""})),n=e.picks[a.id],r=null;if(n&&o.some(i=>i.uid===n))r=n;else{let i=o.filter(s=>!s.outdated);r=i.length?i[i.length-1].uid:null}return{id:a.id,title:a.title,takes:o,pick:r}})}function fr(e){let t=[],a=0;return e.forEach(o=>{let n=o.pick?o.takes.find(r=>r.uid===o.pick):null;n&&(t.push({id:o.id,title:o.title,t:a,clip:n.clip}),a+=n.ms)}),{events:t,picks:{},total:a}}function va(e,t){let a=new Set(t);return e.filter(o=>a.has(o))}function gr(e,t,a){let o=t?e.indexOf(t):-1,n=e.indexOf(a);return o<0||n<0?[a]:e.slice(Math.min(o,n),Math.max(o,n)+1)}var br=G(()=>{"use strict";ha()});var Ec={};function H(e){try{let t=localStorage.getItem(e);if(t!==null||!e.startsWith("slidetake:"))return t;let a=e.slice(10);return localStorage.getItem("slidetake:"+a)??localStorage.getItem("traverse:"+a)}catch{return null}}function K(e,t){try{localStorage.setItem(e,t)}catch{}}function zs(e){try{return{html:window.marked?window.marked.parse(e):"<pre>"+O(e)+"</pre>",err:null}}catch{return{html:"<p>(could not render)</p>",err:"render error"}}}function Ta(){let e=D.brand||"",t=D.logo||"",a=/^chip$/i.test(D.brand_style||""),o=/^slidetake$/i.test(e)?'<span class="st-mark">'+_r+'<span class="word">Slide<span>take</span></span></span>':(t?'<img alt="" src="'+O(t)+'">':"")+(e?"<span"+(a?' class="chip"':"")+">"+O(e)+"</span>":"");if(Ce.dataset.html!==o){Ce.dataset.html=o,Ce.innerHTML=o;let n=Ce.querySelector("img");n&&(n.onload=n.onerror=()=>we(!0))}Ce.hidden=!o,qo(),document.title=D.title||"Slidetake",Fs(),Ur()}function Ds(){let e=String(D.accent||"").trim();if(!e||!window.CSS||!CSS.supports("color",e))return null;if(!CSS.supports("color","oklch(from red l c h)"))return{accent:e,line:e};let t=a=>"oklch(from "+e+" "+a+" c h)";return{dark:{accent:t(.8),accentSoft:t(.87),line:t(.5)},light:{accent:t(.45),accentSoft:t(.4),line:t(.75),ring:t(.7)}}}function Fs(){let e="",t=(o,n)=>{let r=Object.entries(n||{}).filter(([i,s])=>yr[i]&&s&&typeof s!="object").map(([i,s])=>yr[i]+":"+String(s).replace(/[;{}<>]/g,"")).join(";");r&&(e+=o+"{"+r+`}
`)};[U&&U.colors,Ds()].filter(Boolean).forEach(o=>{["dark","light"].forEach(n=>{let r={...o,...o[n]||{}},i=n==="dark";r.accent&&typeof r.accent=="string"&&(r.accentSoft=r.accentSoft||r.accent,r.line=r.line||"color-mix(in srgb, "+r.accent+(i?" 45%, #09090b)":" 55%, #fff)"),r.ring=r.ring||(i?r.accent:r.line),r.onAccent=r.onAccent||(i?"color-mix(in srgb, "+r.accent+" 15%, #000)":"#fff")),t(i?'body:not([data-mode="light"])':'body[data-mode="light"]',r)})});let a=document.getElementById("st-colors");a||(a=document.createElement("style"),a.id="st-colors",document.head.appendChild(a)),a.textContent!==e&&(a.textContent=e),document.body.classList.toggle("st-header-color",e.includes("--header-bg"))}function Bt(e){let t=document.createElement("span");t.style.color="var("+e+")",document.body.appendChild(t);let a=getComputedStyle(t).color;return t.remove(),De=De||Object.assign(document.createElement("canvas"),{width:1,height:1}).getContext("2d",{willReadFrequently:!0}),De.clearRect(0,0,1,1),De.fillStyle="#000",De.fillStyle=a,De.fillRect(0,0,1,1),"#"+[...De.getImageData(0,0,1,1).data.slice(0,3)].map(o=>o.toString(16).padStart(2,"0")).join("")}function Ns(e,t,a){let o=i=>[1,3,5].map(s=>parseInt(i.slice(s,s+2),16)),n=o(e),r=o(t);return"#"+n.map((i,s)=>Math.round(i*a+r[s]*(1-a)).toString(16).padStart(2,"0")).join("")}function ja(){if(U&&U.themeKey&&!wr){let t=H(U.themeKey);return t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return String(wr||H("slidetake:mode")||D.mode||"dark").toLowerCase()==="light"?"light":"dark"}function Ur(){let e=ja()==="light";e?document.body.dataset.mode="light":delete document.body.dataset.mode;let t=document.getElementById("btn-mode");t&&(t.innerHTML=e?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',t.title=(e?"Dark theme":"Light theme")+" (L)",t.setAttribute("aria-label",t.title))}function Hr(){let e=ja()==="light"?"dark":"light";U&&U.themeKey?(K(U.themeKey,e),document.documentElement.classList.toggle("dark",e==="dark")):K("slidetake:mode",e),Ur(),ie.querySelector(".echarts-container, .diagram.d2")&&dt(!0)}function js(){let t=(D.camera||"").replace(/^\[|\]$/g,"").split(",").map(a=>a.trim().replace(/^["']|["']$/g,"")).filter(Boolean);return t.length?t:["on","full","off"]}function Oo(e){return!oe&&e?Un(e.camera):[]}function bt(e){return Hn(Oo(e),e&&e.frags?e.frags.length:0)}function qr(){let e=bt(h.get(m));return e[Math.min(ye,e.length-1)]||{cam:0,frag:0}}function _s(){if(!m)return null;let e=h.get(m),t=Oo(e);if(t.length)return t[Math.min(qr().cam,t.length-1)];if(e&&e.el&&e.el.classList.contains("card-full"))return"off";for(let a=b.indexOf(m)-1;a>=0;a--){let o=Oo(h.get(b[a]));if(o.length)return o[o.length-1]}return null}function Us(){let e={corner:(D.pip||"none").toLowerCase(),size:Za(parseFloat(D.pip_size)||24),circle:(D.pip_shape||"").toLowerCase()==="circle",mirror:!/^(no|false|off)$/i.test(D.pip_mirror||""),full:!1,off:!1,flip:!1,used:!1};return ia(e,_s()),fe&&!/\b(off|hide)\b/i.test(fe)&&(e.off=!1),ia(e,fe),!Ct.includes(e.corner)&&(ae||e.used)&&(e.corner="bottom-right"),e.flip&&Ct.includes(e.corner)&&(e.corner=e.corner.includes("left")?e.corner.replace("left","right"):e.corner.replace("right","left")),e}function qo(){let e=!P.hidden&&P.offsetWidth?P.getBoundingClientRect():null,t=Ye=Us(),a=Ct.includes(t.corner);if(P.className=a?[t.corner,t.circle&&"circle",ae&&"live",t.mirror&&"mirror",t.full&&"full",P.classList.contains("msg")&&"msg"].filter(Boolean).join(" "):"",P.style.width=t.size+"%",P.hidden=!a||oe||t.off,Mo.dataset.pip=P.hidden||t.full?"none":t.corner,P.hidden||gt||!P.animate)return;let o="cubic-bezier(.65,0,.35,1)";if(!e){P.animate([{opacity:0},{opacity:1}],{duration:300,easing:"ease-out"});return}let n=P.getBoundingClientRect();Math.abs(e.left-n.left)+Math.abs(e.top-n.top)+Math.abs(e.width-n.width)+Math.abs(e.height-n.height)<2||P.animate([{transformOrigin:"0 0",transform:"translate("+(e.left-n.left)+"px,"+(e.top-n.top)+"px) scale("+e.width/n.width+","+e.height/n.height+")"},{transformOrigin:"0 0",transform:"none"}],{duration:600,easing:o})}function Hs(){let e=Ye;if(!e||P.hidden||e.full)return null;let t=j.clientWidth,a=j.clientHeight,o=16,n=t*e.size/100,r=e.circle?n:n*9/16,i=e.corner.includes("left")?o:t-o-n,s=e.corner.includes("top")?o:a-o-r;return{x0:i,y0:s,x1:i+n,y1:s+r}}function qs(){if(!ft)return;if(oe){aa(!0);return}let e=js();Oe=(Oe+1)%e.length,fe=e[Oe],qo(),V||rt("Camera: "+fe),!ae&&!P.hidden?Je():we()}function Wr(e){let t=jn(e,{render:zs});D=t.deck,h=t.nodes,Ta();let a={"+++":"+++ format",reveal:"reveal.js format",headings:"headings"}[t.format];Ts.textContent=h.size+(h.size===1?" card":" cards")+" \xB7 "+a,_t.textContent=t.errCount?t.errCount+" card(s) had errors":""}function Gr(){He=[...h.values()].filter(o=>!o.parent).map(o=>o.id);let e=0;function t(o,n){let r=h.get(o);if(r.depth=n,r.children.length===0)r._slot=e++;else{r.children.forEach(s=>t(s,n+1));let i=r.children.map(s=>h.get(s)._slot);r._slot=(Math.min(...i)+Math.max(...i))/2}}He.forEach(o=>t(o,0)),b=[];function a(o){b.push(o),h.get(o).children.forEach(a)}return He.forEach(a),Math.max(1,e)}function Ws(){let e=[],t=[],a=[];return h.forEach(o=>{e[o.depth]=Math.max(e[o.depth]||0,o._h),t[o.depth]=Math.max(t[o.depth]||0,o._w),a[o.depth]=(a[o.depth]||0)+1}),{maxH:e,maxW:t,count:a,maxDepth:e.length-1}}function Yr(e){e.x!==null&&!isNaN(e.x)&&(e.cx=e.x+e._w/2),e.y!==null&&!isNaN(e.y)&&(e.cy=e.y+e._h/2)}function Gs(){let{maxH:e,maxDepth:t}=Ws(),a=[0];for(let l=1;l<=t;l++)a[l]=a[l-1]+e[l-1]+As;let o=Os-st,n=[],r=(l,c)=>{let d=h.get(l);d.cx+=c,d.children.forEach(M=>r(M,c))},i=l=>{let c=h.get(l);n[c.depth]=Math.max(n[c.depth]??-1/0,c.cx+c._w/2),c.children.forEach(i)};function s(l){let c=h.get(l),d=n[c.depth]!==void 0?n[c.depth]+o:-1/0;c.children.length?(c.children.forEach(s),c.cx=(h.get(c.children[0]).cx+h.get(c.children[c.children.length-1]).cx)/2,c.cx-c._w/2<d&&r(l,d-(c.cx-c._w/2))):c.cx=(d===-1/0?0:d)+c._w/2,i(l)}He.forEach(s),h.forEach(l=>{l.cy=a[l.depth]+l._h/2,Yr(l)})}function Ys(e){let t=Math.PI*2/e,a=32,o=[],n=(s,l)=>Math.abs(s.cx-l.cx)<(s._w+l._w)/2+a&&Math.abs(s.cy-l.cy)<(s._h+l._h)/2+a,r=Math.max(0,...[...h.values()].map(s=>s.depth)),i=0;for(let s=0;s<=r;s++){let l=[...h.values()].filter(d=>d.depth===s);if(!l.length)continue;let c=s===0?He.length>1?Is*.5:0:i+Bs;for(let d=0;d<400&&(l.forEach(g=>{let y=(g._slot+.5)*t-Math.PI/2;g.cx=c*Math.cos(y),g.cy=c*Math.sin(y),Yr(g)}),!!l.some((g,y)=>l.some((v,u)=>u>y&&n(g,v))||o.some(v=>n(g,v))));d++)c=c*1.02+10;i=c,o.push(...l)}}function Vs(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),a=[];for(;t.nextNode();)a.push(t.currentNode);a.forEach(o=>{let n=o.data.match(/^\s*\.element:\s*([\s\S]*)$/);if(!n)return;let r=o.previousSibling;for(;r&&r.nodeType===3&&!r.data.trim();)r=r.previousSibling;let i=r&&r.nodeType===1?r:o.parentElement;i&&Object.entries(St(n[1])).forEach(([s,l])=>{s==="class"?i.classList.add(...l.split(/\s+/).filter(Boolean)):s==="style"?i.style.cssText+=";"+l:i.setAttribute(s,l)})})}function $s(e){let t=new DOMParser().parseFromString(e,"image/svg+xml"),a=t.documentElement;if(!a||a.localName!=="svg"||t.getElementsByTagName("parsererror").length)return null;let o=a.namespaceURI,n=i=>{[...i.children].forEach(s=>{s.namespaceURI!==o||!Ks.has(s.localName)?s.remove():n(s)}),[...i.attributes].forEach(s=>{let l=s.name.toLowerCase(),c=s.value;(l.startsWith("on")||/javascript:|expression\(/i.test(c)||/url\(\s*['"]?(?!#)/i.test(c)||(l==="href"||l==="xlink:href")&&!c.trim().startsWith("#"))&&i.removeAttribute(s.name)})};n(a);let r="st-svg"+ ++Js+"-";return[a,...a.querySelectorAll("*")].forEach(i=>[...i.attributes].forEach(s=>{let l=s.name==="id"?r+s.value:s.value.replace(/url\(\s*(['"]?)#/g,"url($1#"+r);(s.name==="href"||s.name==="xlink:href")&&l.startsWith("#")&&(l="#"+r+l.slice(1)),l!==s.value&&(s.value=l)})),document.importNode(a,!0)}function Le(e,t){let a=e.classList.contains("fragment");["fragment","fade-up","visible","current-fragment"].forEach(o=>{e.classList.contains(o)&&(t.classList.add(o),e.classList.remove(o))}),e.dataset.fragmentIndex!==void 0&&(t.dataset.fragmentIndex=e.dataset.fragmentIndex,delete e.dataset.fragmentIndex),e.replaceWith(t),a&&h.forEach(o=>o.frags&&o.frags.forEach(n=>{let r=n.indexOf(e);r>=0&&(n[r]=t)}))}function bo(e){let t=document.createElement("figure");t.className="media",Le(e,t),t.appendChild(e);let a=e.getAttribute("alt");return a&&t.insertAdjacentHTML("beforeend","<figcaption>"+O(a)+"</figcaption>"),t}function Xs(e,t){let a=document.createElement("figure");return a.className="media yt fragment yt-play"+(e.portrait?" portrait":""),a.innerHTML='<div class="frame"><iframe src="'+Qn(e)+'" title="'+O(t||"YouTube video")+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>'+(t?"<figcaption>"+O(t)+"</figcaption>":""),a}function kr(e,t){let a=t<=4?t:t<=6?3:4;e.style.setProperty("--cols",a),e.style.setProperty("--rows",Math.ceil(t/a))}function Zs(e,t){t.querySelectorAll("pre > code.language-svg").forEach(r=>{let i=$s(r.textContent.trim()),s=document.createElement("div");s.className=i?"diagram svg":"diagram err",i?s.appendChild(i):s.textContent="SVG error: not a valid <svg> drawing",Le(r.parentElement,s)}),t.querySelectorAll(":scope > p").forEach(r=>{let i=r.children.length===1?r.children[0]:null;if(!i)return;let s=i.tagName==="A"&&r.textContent.trim()===i.textContent.trim()?i.getAttribute("href"):i.tagName==="IMG"?i.getAttribute("src"):null,l=s&&io(s);l&&Le(r,Xs(l,i.tagName==="IMG"?i.getAttribute("alt"):""))}),t.querySelectorAll(":scope > ul, :scope > ol").forEach(r=>{let i=[...r.children];!i.length||!i.every(s=>vo(s)||tl(s))||(r.classList.add("gallery"),i.some(s=>!vo(s))&&r.classList.add("diagrams"),i.forEach(s=>{if(!vo(s))return;let l=s.querySelector("img");s.innerHTML="",s.appendChild(l),bo(l)}),i.length>1&&i.every(s=>s.classList.contains("fragment"))?(r.classList.add("carousel"),i[0].classList.remove("fragment","fade-up"),i.forEach((s,l)=>{s.classList.replace("fade-up","current-visible");let c=s.querySelector("figcaption");c&&(c.dataset.count=l+1+" / "+i.length)})):kr(r,i.length))}),t.querySelectorAll(":scope > p").forEach(r=>{if(!Qs(r))return;let i=[...r.querySelectorAll("img")];if(i.length===1){Le(r,i[0]),bo(i[0]);return}let s=document.createElement("div");s.className="gallery grid",Le(r,s),i.forEach(l=>{s.appendChild(l),bo(l)}),kr(s,i.length)});let a=[...t.children].filter(r=>!/^H[1-6]$/.test(r.tagName)&&!(r.nodeType===1&&r.tagName==="HR")),o=a.filter(r=>r.matches("figure.media"));o.length===1&&a.length===1&&e.classList.add("card-media"),a.length===1&&(a[0].matches("figure.media:not(.yt)")||a[0].matches(".gallery.carousel:not(.diagrams)"))&&e.classList.add("card-bleed");let n=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT);for(;n.nextNode();)if(/^\s*view\s*:\s*full\s*$/i.test(n.currentNode.data))e.classList.add("card-full");else if(o.length===1){e.classList.add("card-split",a.indexOf(o[0])===0?"media-first":"media-last");let r=document.createElement("div");r.className="split-text",a.filter(i=>i!==o[0]).forEach(i=>r.appendChild(i)),o[0].after(r),a.indexOf(o[0])!==0&&r.after(o[0])}t.querySelector(".gallery")&&e.classList.add("card-gallery")}function Vr(e,t){let a=e.querySelector("iframe");a&&a.contentWindow&&a.contentWindow.postMessage(JSON.stringify({event:"command",func:t,args:[]}),"*")}function el(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),a=[];for(;t.nextNode();)/^\s*steps\s*$/i.test(t.currentNode.data)&&a.push(t.currentNode);a.forEach(o=>{for(let n=o.nextSibling;n&&!(n.nodeType===8&&/^\s*steps\s*:\s*off\s*$/i.test(n.data));n=n.nextSibling)n.nodeType!==1||n.classList.contains("fragment")||(/^(UL|OL)$/.test(n.tagName)?n.querySelectorAll(":scope > li").forEach(r=>r.classList.add("fragment","fade-up")):n.classList.add("fragment","fade-up"))})}function al(e){let t=n=>n.classList.contains("fragment")&&(n.tagName==="P"&&n.children.length===1&&n.children[0].tagName==="IMG"&&!n.textContent.trim()&&!io(n.children[0].getAttribute("src")||"")||n.tagName==="PRE"&&!!n.querySelector(Kr)),a=[],o=[];[...e.children].forEach(n=>{t(n)?o.push(n):(o.length>1&&a.push(o),o=[])}),o.length>1&&a.push(o),a.forEach(n=>{let r=document.createElement("ul");n[0].before(r),n.forEach(i=>{let s=document.createElement("li");s.className="fragment fade-up",i.classList.remove("fragment","fade-up"),s.appendChild(i),r.appendChild(s)})})}function ol(e){let t=[...e.querySelectorAll(".fragment")].map((n,r)=>({e:n,i:r,k:n.dataset.fragmentIndex}));if(t.every(n=>n.k===void 0))return t.map(n=>[n.e]);let a=0;t.forEach(n=>{n.k=n.k===void 0?a:parseFloat(n.k),a=Math.max(a,n.k)+1}),t.sort((n,r)=>n.k-r.k||n.i-r.i);let o=[];return t.forEach((n,r)=>{r&&t[r-1].k===n.k?o[o.length-1].push(n.e):o.push([n.e])}),o}function Wo(e,t,a){!e||!e.frags||(a&&e.el.classList.add("snap"),e.frags.forEach((o,n)=>o.forEach(r=>{let i=r.classList.contains("visible");r.classList.toggle("visible",n<t),r.classList.toggle("current-fragment",n===t-1),r.classList.contains("yt-play")&&i!==n<t&&!a&&Vr(r,n<t?"playVideo":"pauseVideo")})),a&&(e.el.offsetWidth,e.el.classList.remove("snap")))}function nl(){try{return D.base?new URL(D.base,Ae||location.href):Ae?new URL(Ae):null}catch{return null}}function rl(e){let t=nl(),a=0;return e.querySelectorAll("img[src], source[src], video[src], iframe[src], a[href]").forEach(o=>{let n=o.hasAttribute("src")?"src":"href",r=o.getAttribute(n);if(!r||/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(r))return;if(!t){n==="src"&&!r.startsWith("/")&&a++;return}let i=t;try{D.site&&(i=new URL(D.site,t))}catch{}o.setAttribute(n,new URL(r,r.startsWith("/")?i:t).href)}),a}function _a(e){let t=e.el,a=t.querySelector(".body");t.classList.add("measuring"),a.style.zoom="";let o=st;e.visual=!!a.querySelector("iframe, .echarts-container, pre > code.language-dot, pre > code.language-d2, pre > code.language-echarts, .diagram, figure.media"),e.visual&&(o=le);let n=t.classList.contains("card-full");if(t.classList.remove("img-portrait","img-landscape","img-overlay"),n&&(o=le),t.classList.contains("card-bleed")){let s=Math.max(0,...[...a.querySelectorAll("img")].map(c=>c.naturalWidth&&c.naturalHeight?c.naturalWidth/c.naturalHeight:0))||1.7777777777777777,l=le-ya*s>=260;if(n&&l)t.classList.add("img-portrait"),t.style.setProperty("--img-w",Math.round(ya*s)+"px"),o=le;else if(n||Math.abs(s-16/9)<.08)t.classList.add("img-overlay"),o=le;else if(s<1.3){let c=Math.min(Math.round(ya*s),le-300);t.classList.add("img-portrait"),t.style.setProperty("--img-w",c+"px"),o=Math.min(le,Math.max(go,c*2))}else t.classList.add("img-landscape"),o=Math.round(Math.max(st,Math.min(le,(ya-Ms)*s))),t.style.setProperty("--img-h",Math.round(o/s)+"px")}else(a.querySelector('[style*="flex"], [style*="grid"], .r-hstack')||a.querySelectorAll("img").length>=4)&&(o=go);let r=a.querySelectorAll("table");if(r.length){t.style.width=le+"px";let s=t.offsetWidth-a.clientWidth;r.forEach(l=>{o=Math.max(o,Math.min(go,Math.ceil(l.offsetWidth)+s+12))})}let i=a.querySelectorAll(".fragment.grow");if(i.length){t.style.width=o+"px";let s=t.offsetWidth-a.clientWidth;i.forEach(l=>{o=Math.max(o,Math.min(le,Math.ceil(l.offsetWidth*1.3)+s))})}t.style.width=o+"px",t.scrollWidth>o+2&&(t.style.width=(o=Math.min(le,t.scrollWidth+24))+"px"),a.scrollWidth>a.clientWidth+2&&(a.style.zoom=(a.clientWidth/a.scrollWidth).toFixed(3)),e._w=o,e._h=t.offsetHeight||Lo,t.classList.remove("measuring")}function il(){clearTimeout(xr),xr=setTimeout(()=>{h.forEach(_a),Kt(),we(!0)},200)}function dl(){let e=ja()==="light"?"light":"dark",t=Bt(e==="light"?"--accent-ring":"--accent"),a="slidetake-"+e+"-"+t.slice(1);return Sr.has(a)||(pl(a,cl[e],t),Sr.add(a)),a}function pl(e,t,a){let o={axisLine:{lineStyle:{color:t.line}},axisTick:{lineStyle:{color:t.line}},axisLabel:{color:t.muted},splitLine:{lineStyle:{color:t.split}},nameTextStyle:{color:t.muted}};echarts.registerTheme(e,{color:[a,...t.palette],backgroundColor:"transparent",textStyle:{color:t.text,fontFamily:"'IBM Plex Sans', sans-serif"},title:{textStyle:{color:t.text},subtextStyle:{color:t.muted}},legend:{textStyle:{color:t.text}},tooltip:{backgroundColor:t.tip,borderColor:t.line,textStyle:{color:t.text}},categoryAxis:o,valueAxis:o,logAxis:o,timeAxis:o,line:{symbolSize:6,lineStyle:{width:2.5}},pie:{label:{color:t.text,textBorderWidth:0},labelLine:{lineStyle:{color:t.muted}}},funnel:{label:{color:t.text,textBorderWidth:0}}})}function ml(){let e=ja()==="light"?"light":"dark",t=Bt("--node-bg"),a=Bt(e==="dark"?"--accent":"--accent-line"),o=e==="dark"?[.58,.38,.25,.18,.12]:[.7,.45,.25,.15,.08],n={...hl[e],N7:t,B1:Bt("--accent")};return o.forEach((r,i)=>{n["B"+(i+2)]=Ns(a,t,r)}),n}function Ao(e){return yo[e]||(yo[e]=new Promise((t,a)=>{let o=document.createElement("script");o.src=e,o.onload=t,o.onerror=()=>{delete yo[e],a(new Error("could not load "+e))},document.head.appendChild(o)}))}async function gl(){let e=Fe,t=[...ie.querySelectorAll(".node pre > code.language-dot")];ie.querySelectorAll(".node pre > code.language-echarts").forEach(r=>{let i=document.createElement("div");i.className="echarts-container",i.dataset.chart=r.textContent,Le(r.parentElement,i)});let a=[...ie.querySelectorAll(".node .echarts-container[data-chart]")],o=[...ie.querySelectorAll(".node pre > code.language-d2")];if(!t.length&&!a.length&&!o.length)return;let n=[];if(t.length)try{if(await Ao(sl),wo=wo||await Viz.instance(),e!==Fe)return;t.forEach(r=>{let i=document.createElement("div");i.className="diagram";try{i.appendChild(wo.renderSVGElement(r.textContent))}catch(s){i.className="diagram err",i.textContent="Diagram error: "+s.message}Le(r.parentElement,i)})}catch{n.push("diagrams")}if(o.length)try{if(!wa){let i=await import(ul);wa=new i.D2}if(e!==Fe)return;let r=ml();for(let i of o){let s=document.createElement("div");s.className="diagram d2";try{let l=await wa.compile(fl(i.textContent));s.innerHTML=await wa.render(l.diagram,{...l.renderOptions||{},themeOverrides:r,darkThemeOverrides:r})}catch(l){s.className="diagram err",s.textContent="Diagram error: "+(l.message||l)}if(e!==Fe)return;Le(i.parentElement,s)}}catch{n.push("D2 diagrams")}if(a.length)try{if(await Ao(ll),e!==Fe)return;let r=dl();a.forEach(i=>{let s;try{s=JSON.parse(i.dataset.chart)}catch{i.textContent="Chart data is not valid JSON.";return}echarts.init(i,r,{renderer:"svg"}).setOption(Object.assign({backgroundColor:"transparent",animation:!gt},s))})}catch{n.push("charts")}e===Fe&&(n.length&&(_t.textContent="Could not load the "+n.join(" and ")+" renderer (offline?)"),h.forEach(_a),Kt(),we(!0))}function bl(){let e=[];return b.forEach(t=>{let a=ht(t),o=e[e.length-1];o&&o.sec===a?o.ids.push(t):e.push({sec:a,ids:[t]})}),e}function vl(){let a=0,o=0,n=0;bl().forEach((r,i)=>{let s=Math.max(...r.ids.map(d=>h.get(d)._h));i&&(a+=n/2+120+s/2);let l=o,c=o;r.ids.forEach((d,M)=>{let g=h.get(d);M&&(l+=90+g._w/2),g.cx=l,g.cy=a,c=l,l+=g._w/2}),o=c,n=s})}function yl(){h.forEach(e=>{e.cx=0,e.cy=0})}function Jr(){Fe++,window.echarts&&ie.querySelectorAll(".echarts-container").forEach(a=>{let o=echarts.getInstanceByDom(a);o&&o.dispose()}),ie.querySelectorAll("div.node").forEach(a=>a.remove());let e=Gr(),t=0;h.forEach(a=>{let o=document.createElement("div");o.className="node",o.tabIndex=0,o.dataset.id=a.id;let n=a.parent?Ua(a.id).slice(0,-1).map(i=>h.get(i).title).join(" / "):"";o.innerHTML=(n?'<div class="crumb">'+O(n)+"</div>":"")+'<div class="body">'+a.html+"</div>"+(a.err?'<div class="err-badge">!</div>':"");let r=o.querySelector(".body");Vs(r),el(r),al(r),Zs(o,r),r.querySelectorAll("thead").forEach(i=>{i.textContent.trim()||i.remove()}),t+=rl(r),a.frags=ol(r),r.querySelectorAll("img").forEach(i=>{i.complete||i.addEventListener("load",il,{once:!0})}),o.querySelectorAll("a[href]").forEach(i=>{let s=i.getAttribute("href");if(s.startsWith("#")){let l=decodeURIComponent(s.slice(1));h.has(l)&&(i.classList.add("xlink"),i.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),p.active||_(l)}))}else i.target="_blank",i.rel="noopener",i.addEventListener("click",l=>l.stopPropagation())}),o.addEventListener("click",()=>{p.active||_(a.id)}),o.addEventListener("keydown",i=>{i.key==="Enter"&&i.target===o&&_(a.id)}),ie.appendChild(o),a.el=o,Wo(a,a.frags.length)}),t&&!_t.textContent&&(_t.textContent=t+" image(s) use relative paths: add base: to the deck, or open it with ?src="),h.forEach(_a),Kt(e),gl()}function Kt(e){e===void 0&&(e=Gr()),Y==="radial"?Ys(e):Y==="path"?vl():Y==="focus"?yl():Gs(),ie.classList.toggle("focus",Y==="focus"),h.forEach(t=>{let a=t.el.style;a.setProperty("--cx",t.cx),a.setProperty("--cy",t.cy)}),wl(),vt(),Vo()}function wl(){let e="";if(Y==="focus"){fo.innerHTML="";return}if(Y==="path"){for(let t=1;t<b.length;t++){let a=h.get(b[t-1]),o=h.get(b[t]);e+='<path data-from="'+a.id+'" data-to="'+o.id+'" d="M '+a.cx+" "+a.cy+" L "+o.cx+" "+o.cy+'"/>'}fo.innerHTML=e;return}h.forEach(t=>{if(!t.parent)return;let a=h.get(t.parent);if(Y==="radial")e+='<path data-from="'+a.id+'" data-to="'+t.id+'" d="M '+a.cx+" "+a.cy+" L "+t.cx+" "+t.cy+'"/>';else{let o=a.cy+a._h/2,n=t.cy-t._h/2,r=o+(n-o)/2;e+='<path data-from="'+a.id+'" data-to="'+t.id+'" d="M '+a.cx+" "+o+" L "+a.cx+" "+r+" L "+t.cx+" "+r+" L "+t.cx+" "+n+'"/>'}}),fo.innerHTML=e}function Ua(e){let t=[],a=e;for(;a;)t.unshift(a),a=h.get(a).parent;return t}function lt(){let e=j.clientWidth,t=j.clientHeight;ie.style.transform="translate("+e/2+"px,"+t/2+"px) scale("+R.zoom+") translate("+-R.x+"px,"+-R.y+"px)",ni()}function Go(){Dt&&(Dt.kill(),Dt=null)}function $r(e,t){if(Go(),t||gt||!window.gsap){Object.assign(R,e),lt();return}let a=j.clientWidth,o=Math.hypot(e.x-R.x,e.y-R.y),n=e.zoom,r=gsap.timeline({onUpdate:lt,onComplete:()=>{Dt=null}}),{zoom:i,...s}=e,l=o*Math.min(R.zoom,n),c=Math.max(.55,Math.min(1.3,.55+l/a*.3));if(r.to(R,{...s,duration:c,ease:"power2.inOut"},0),l>a*1.2){let d=Math.max(.06,Math.min(R.zoom,n,a*.9/(o+st)));r.to(R,{zoom:d,duration:c/2,ease:"sine.out"},0).to(R,{zoom:n,duration:c/2,ease:"sine.in"},c/2)}else r.to(R,{zoom:n,duration:c,ease:"power2.inOut"},0);Dt=r}function kl(){let e=j.getBoundingClientRect(),t=14,a=[];if(!Ce.hidden&&Ce.offsetWidth){let n=Ce.getBoundingClientRect();a.push({x0:n.left-e.left-t,y0:n.top-e.top-t,x1:n.right-e.left+t,y1:n.bottom-e.top+t})}let o=Hs();return o&&a.push({x0:o.x0-t,y0:o.y0-t,x1:o.x1+t,y1:o.y1+t}),a}function xl(){let e=j.clientWidth,t=j.clientHeight,a=[{x0:16,y0:V?20:56,x1:e-16,y1:t-(V?20:74)}];return kl().forEach(o=>{let n=[];a.forEach(r=>{if(o.x1<=r.x0||o.x0>=r.x1||o.y1<=r.y0||o.y0>=r.y1){n.push(r);return}[{...r,x1:Math.min(r.x1,o.x0)},{...r,x0:Math.max(r.x0,o.x1)},{...r,y1:Math.min(r.y1,o.y0)},{...r,y0:Math.max(r.y0,o.y1)}].forEach(i=>{i.x1-i.x0>80&&i.y1-i.y0>80&&n.push(i)})}),n.length&&(a=n)}),a}function Bo(e,t,a){let o=j.clientWidth,n=j.clientHeight,r=null;return xl().forEach(i=>{let s=a*Math.min((i.x1-i.x0)/e,(i.y1-i.y0)/t);(!r||s>r.zoom)&&(r={zoom:s,sx:(i.x0+i.x1)/2-o/2,sy:(i.y0+i.y1)/2-n/2})}),r}function Xr(e,t,a,o){return{x:e-a.sx/o,y:t-a.sy/o}}function Ve(e,t){let a=h.get(e);if(!a)return;let o=Bo(a._w,a._h,Ut),n=ht(e),r=b.filter(l=>ht(l)===n&&!h.get(l).visual).map(l=>{let c=h.get(l);return Bo(c._w,c._h,Ut).zoom}).sort((l,c)=>l-c),i=r.length?r[Math.floor((r.length-1)/2)]:o.zoom,s=Math.max(.2,Math.min(5,o.zoom,i));$r(Object.assign(Xr(a.cx,a.cy,o,s),{zoom:s}),t)}function Jt(e){let t=[...h.values()];if(!t.length)return;let a=j.clientWidth,o=j.clientHeight,n=Math.min(...t.map(d=>d.cx-d._w/2)),r=Math.max(...t.map(d=>d.cx+d._w/2)),i=Math.min(...t.map(d=>d.cy-d._h/2)),s=Math.max(...t.map(d=>d.cy+d._h/2)),l=Bo(r-n,s-i,.94),c=Math.max(.05,Math.min(1,l.zoom));$r(Object.assign(Xr((n+r)/2,(i+s)/2,l,c),{zoom:c}),e)}function we(e){m&&h.has(m)?Ve(m,e):Jt(e)}function vt(){let e=m?Ua(m):[];h.forEach(t=>{let a=t.el;a.classList.toggle("current",t.id===m),a.classList.toggle("active-path",e.includes(t.id))}),ie.querySelectorAll("#connectors path").forEach(t=>{let a=Y==="path"?!!m&&b.indexOf(t.dataset.to)<=b.indexOf(m):e.includes(t.dataset.from)&&e.includes(t.dataset.to);t.classList.toggle("active",a)}),Tl(e),Zr()}function Qr(){return zn(new URLSearchParams(location.search).get("duration")??D.duration)}function Sl(){return V&&Qr()>0&&(!p.active||/^always$/i.test(D.timer||""))}function La(){let e=Sl()&&Be.start>0;if(je.classList.toggle("timed",e),!e){je.classList.remove("over");return}let a=(p.active&&p.t0?qe():performance.now()-Be.start)/Qr();je.firstChild.style.width=Math.min(100,a*100)+"%",je.classList.toggle("over",a>=1)}function El(){Be.start=performance.now(),clearInterval(Be.timer),Be.timer=setInterval(La,1e3),La()}function Cl(){clearInterval(Be.timer),Be.timer=null,Be.start=0,La()}function Zr(){let e=V&&b.length>1&&!/^(off|no|false)$/i.test(D.progress||"");if(je.classList.toggle("show",e),!e)return;La();let t=b.indexOf(m),a=0,o=0;b.forEach((n,r)=>{let i=bt(h.get(n)).length;a+=i,r<t?o+=i:r===t&&(o+=Math.min(ye,i-1)+1)}),je.lastChild.style.width=(a?o/a*100:0)+"%"}function Tl(e){vr.innerHTML=e.map((t,a)=>(a>0?'<span class="sep">\u203A</span>':"")+'<button class="crumb-btn'+(t===m?" here":"")+'" data-id="'+O(t)+'">'+O(h.get(t).title)+"</button>").join(""),vr.querySelectorAll(".crumb-btn").forEach(t=>t.addEventListener("click",()=>{p.active||_(t.dataset.id)}))}function $t(e){let t=h.get(m);t&&(Wo(t,qr().frag,e),qo(),(P.hidden||!Ye||!Ye.full)&&Ol(t),Yo(t))}function Ml(e){return!b.length||e.id!==b[0]&&e.id!==b[b.length-1]||e.el.querySelector("[data-gsap], .title-scramble")?null:[...e.el.querySelector(".body").children].filter(t=>!t.classList.contains("fragment"))}function Ol(e){if(e._played||!window.gsap||gt)return;e._played=!0;let t=Ml(e);if(t&&t.length){e._auto=t;let[a,...o]=t;/^H[1-3]$/.test(a.tagName)&&!a.children.length?(a.classList.add("auto-scramble"),Er(a)):o.unshift(a),gsap.from(o,{opacity:0,y:24,duration:.7,ease:"power2.out",delay:.5,stagger:.45})}e.el.querySelectorAll("[data-gsap]").forEach(a=>{let o;try{o=JSON.parse(a.dataset.gsap)}catch{return}let n={duration:o.duration??1,delay:o.delay??0,ease:o.ease||"power2.out"};o.to?gsap.fromTo(a,o.from||{},Object.assign({},o.to,n)):o.from&&gsap.from(a,Object.assign({},o.from,n))}),e.el.querySelectorAll(".title-scramble").forEach(Er)}function Ht(e){!e||!e._played||(e._played=!1,window.gsap&&(e._auto&&(e._auto.forEach(t=>{gsap.killTweensOf(t),gsap.set(t,{clearProps:"opacity,transform"})}),e._auto=null),e.el.querySelectorAll("[data-gsap]").forEach(t=>{gsap.killTweensOf(t);let a={};try{a=JSON.parse(t.dataset.gsap)}catch{}let o=new Set(Object.keys(Object.assign({},a.from,a.to)).map(n=>Ll.includes(n)?"transform":n));o.size&&gsap.set(t,{clearProps:[...o].join(",")})}),e.el.querySelectorAll(".title-scramble, .auto-scramble").forEach(t=>{t._scramble&&t._scramble.kill(),t.dataset.text&&(t.textContent=t.dataset.text)})))}function Er(e){let t=e.dataset.text||(e.dataset.text=e.textContent),a=Array.from(t),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?",n={p:0};e._scramble=gsap.to(n,{p:1,duration:1.4,ease:"none",onUpdate(){let r=Math.floor(n.p*a.length);e.textContent=a.map((i,s)=>s<r||/\s/.test(i)?i:o[Math.random()*o.length|0]).join("")},onComplete(){e.textContent=t}})}function Yo(e){clearTimeout(ct),!(!V||!e||!e.autoslide||p.active&&(!p.t0||p.paused))&&(ct=setTimeout(()=>{m===e.id&&Ie(1)},e.autoslide))}function ei(e){let t=e&&e!==b[0]?e:"";try{E&&E.kind==="share"?history.replaceState(null,"",location.pathname+location.search+no(E.data,t)):history.replaceState(null,"",e?"#"+encodeURIComponent(e):location.pathname+location.search)}catch{}}function _(e,t,a){if(!h.has(e))return;if(e!==m){fe=null,Oe=-1,ye=a?bt(h.get(e)).length-1:0;let r=h.get(m);r&&Y==="focus"&&!t&&(r.el.classList.add("leaving"),setTimeout(()=>r.el.classList.remove("leaving"),600)),ai()}let o=e!==m;if(o&&(ti=m),m=e,clearTimeout(me),me=null,o&&Y==="focus"&&!t&&!gt){let r=h.get(e).el;r.classList.add("entering"),r.offsetWidth,r.classList.remove("entering")}$t(o),o&&!Ee&&Gt("slide",e);let n=h.get(e);o&&n.mapFirst&&!a&&!t&&Y!=="focus"?(Jt(),me=setTimeout(()=>{me=null,m===e&&Ve(e)},1900)):Ve(e,t),vt(),Vo(),ei(e)}function ai(){let e=h.get(m);e&&(e.el.querySelectorAll("figure.yt").forEach(t=>Vr(t,"pauseVideo")),Wo(e,e.frags.length,!0),Ht(e))}function Al(){if(!m&&_e&&h.has(_e)){oi();return}m&&(_e=m),Y==="focus"&&Ha("path"),ai(),clearTimeout(ct),m=null,vt(),Vo(),Jt(),ei(null)}function oi(){if(me)return clearTimeout(me),me=null,Ve(m),!0;if(!m&&_e&&h.has(_e)){let e=_e;return _e=null,_(e),!0}return!1}function Ie(e){if(!m){b.length&&_(b[e>0?0:b.length-1]);return}if(me&&e>0){clearTimeout(me),me=null,Ve(m);return}let t=bt(h.get(m)),a=Math.min(ye,t.length-1)+e;if(a>=0&&a<t.length){ye=a,fe=null,Oe=-1,$t(),!ae&&!P.hidden&&Ye.used?Je():we(),vt();return}let o=b.indexOf(m)+e;o>=0&&o<b.length&&_(b[o],!1,e<0)}function Bl(){let e=h.get(m);e&&e.parent&&_(e.parent)}function Il(){let e=h.get(m);e&&e.children.length?_(e.children[0]):!m&&b.length&&_(b[0])}function Vo(){let e=[...h.values()];if(!e.length){To.innerHTML="",xe=null;return}Ls.textContent="map";let t=u=>u.cx,a=u=>u.cy,o=Math.min(...e.map(t))-st/2,n=Math.max(...e.map(t))+st/2,r=Math.min(...e.map(a))-Lo/2,i=Math.max(...e.map(a))+Lo/2,s=16,l=180,c=130,d=Math.min((l-2*s)/Math.max(1,n-o),(c-2*s-6)/Math.max(1,i-r)),M=l/2-(o+n)/2*d,g=c/2+5-(r+i)/2*d,y=m?Ua(m):[],v="";e.forEach(u=>{if(!u.parent)return;let T=h.get(u.parent);v+='<line x1="'+(t(T)*d+M)+'" y1="'+(a(T)*d+g)+'" x2="'+(t(u)*d+M)+'" y2="'+(a(u)*d+g)+'" stroke="var(--panel-line)" stroke-width="1"/>'}),e.forEach(u=>{let T=u.id===m?"var(--accent)":y.includes(u.id)?"var(--accent-teal)":"var(--node-border)";v+='<circle data-id="'+O(u.id)+'" cx="'+(t(u)*d+M)+'" cy="'+(a(u)*d+g)+'" r="'+(u.id===m?4:3)+'" fill="'+T+'"><title>'+O(u.title)+"</title></circle>"}),v+='<rect id="mm-viewport" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.7"/>',To.innerHTML=v,xe={s:d,ox:M,oy:g},ni()}function ni(){let e=document.getElementById("mm-viewport");if(!e||!xe)return;let t=j.clientWidth/R.zoom,a=j.clientHeight/R.zoom;e.setAttribute("x",(R.x-t/2)*xe.s+xe.ox),e.setAttribute("y",(R.y-a/2)*xe.s+xe.oy),e.setAttribute("width",Math.max(2,t*xe.s)),e.setAttribute("height",Math.max(2,a*xe.s))}function dt(e){Wr(re.value),m&&!h.has(m)&&(m=null),Jr(),m?_(m,e):b.length?_(b[0],e):(m=null,Jt(!0))}function Ha(e,t){Y=e,K("slidetake:layout",e),document.querySelectorAll("#layout-toggle .seg-btn").forEach(a=>a.classList.toggle("active",a.dataset.mode===e)),h.size&&(!t&&!gt&&(ie.classList.add("morph"),setTimeout(()=>ie.classList.remove("morph"),700)),Kt(),lt(),m?Ve(m,t):Jt(t))}function ri(e){return Math.max(.04,Math.min(5,e))}function Pl(e){Ut=Math.round(Math.max(Ps,Math.min(Rs,e))*100)/100,K("slidetake:slideSize",Ut),m&&Ve(m)}function Cr(e){m?Pl(Ut+e*.1):ii(e>0?1.2:1/1.2)}function ii(e,t,a){Go();let o=ri(R.zoom*e);if(t!==void 0){let n=j.getBoundingClientRect(),r=t-n.left-n.width/2,i=a-n.top-n.height/2;R.x+=r/R.zoom-r/o,R.y+=i/R.zoom-i/o}R.zoom=o,lt()}function qa(){U||(ze.classList.toggle("collapsed"),document.getElementById("btn-edit-toggle").classList.toggle("active",!ze.classList.contains("collapsed")))}function ge(e){V=e,document.body.classList.toggle("presenting",e),Vi();let t=document.documentElement;e&&t.requestFullscreen&&!document.fullscreenElement&&t.requestFullscreen().catch(()=>{}),!e&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),e&&!m&&b.length&&_(b[0]);let a=D.camera||[...h.values()].some(o=>o.camera);e&&a&&!ae&&!oe&&Je(),e?Yo(h.get(m)):clearTimeout(ct),e?El():Cl(),Zr()}function qe(){return(p.paused?p.pauseAt:performance.now())-p.t0-p.pausedMs}function Xt(e){e.classList.add("open")}function Fl(e){if(K("slidetake:analytics",e?"on":"off"),!e){window["ga-disable-"+zl]=!0;let t=["","; Domain="+location.hostname,"; Domain=."+location.hostname.replace(/^www\./,"")];document.cookie.split(";").map(a=>a.split("=")[0].trim()).filter(a=>a==="_ga"||a.startsWith("_ga_")).forEach(a=>t.forEach(o=>{document.cookie=a+"=; Max-Age=0; Path=/"+o}))}si()}function si(){$o.querySelectorAll("[data-analytics]").forEach(e=>e.setAttribute("aria-checked",String(e.dataset.analytics==="on"===Dl())))}function Wa(){document.querySelectorAll(".modal.open").forEach(e=>e.classList.remove("open"))}function Nl(){let e=new URLSearchParams(location.search).get("obs");if(e){let[t,a,...o]=e.split(":");return Ma.value=t||"localhost",Oa.value=a||"4455",Aa.value=o.join(":"),!0}try{let t=JSON.parse(H("slidetake:obs")||"null");t&&(Ma.value=t.host||"localhost",Oa.value=t.port||"4455",Aa.value=t.password||"",Ko.checked=!0)}catch{}return!1}function ci(){if(Ko.checked)K("slidetake:obs",JSON.stringify({host:Ma.value.trim(),port:Oa.value.trim(),password:Aa.value}));else try{localStorage.removeItem("slidetake:obs")}catch{}}function Ot(e,t,a){Ft.textContent=e,Ft.className=t||"",Ft.title=a||e;let o=document.getElementById("obs-detail");o.textContent=a||"",o.hidden=!a}function _l(e){return location.protocol==="https:"&&!jl(e)}async function di(){let e=Ma.value.trim()||"localhost",t="ws://"+e+":"+(Oa.value.trim()||"4455");if(_l(e)){Me=!1,Ot("Blocked here","err",Ul);return}Ot("Connecting\u2026"),Ft.title="Connecting to "+t;try{await Ao(Rl);let a=window.OBSWebSocket&&(window.OBSWebSocket.default||window.OBSWebSocket);if(ne)try{await ne.disconnect()}catch{}ne=new a,ne.on("ConnectionClosed",()=>{Me=!1,Ot("Disconnected","err")}),ne.on("RecordStateChanged",n=>{n.outputState==="OBS_WEBSOCKET_OUTPUT_STARTED"&&Ue&&(Ue(),Ue=null),n.outputState==="OBS_WEBSOCKET_OUTPUT_STOPPED"&&p.active&&p.withObs&&!p.finishing&&ut("Stopped in OBS")});let o=await ne.connect(t,Aa.value||void 0);Me=!0;try{let n=await ne.call("GetVideoSettings");n&&n.fpsNumerator&&n.fpsDenominator&&(Jo=n.fpsNumerator/n.fpsDenominator)}catch{}Ot("Connected","ok",""),Ft.title="Connected"+(o&&o.obsWebSocketVersion?" \xB7 OBS WebSocket "+o.obsWebSocketVersion:""),ci()}catch(a){Me=!1;let o=a&&a.message&&a.message!=="Error"?a.message+".":"Nothing answered at "+t+".";Ot("Could not connect","err",o+" Is OBS running with its WebSocket server on, and are the port and password right?")}}function Hl(){let e=document.getElementById("rec-screen"),t=screen.width,a=screen.height;if(Math.abs(t/a-16/9)<.02){e.innerHTML='<span class="ok">This screen is 16:9 ('+t+"\xD7"+a+"), right for YouTube.</span>";return}let o=[["16:10",1.6],["3:2",1.5],["4:3",4/3],["21:9",21/9],["16:9",16/9]],[n,r]=o.reduce((s,l)=>Math.abs(l[1]-t/a)<Math.abs(s[1]-t/a)?l:s),i=Math.abs(r-t/a)<.005?n:"about "+n;e.innerHTML='<span class="warn">This screen is '+i+" ("+t+"\xD7"+a+"), not 16:9, so the video will have bars or be cropped. Move this window to a 16:9 screen, physical or virtual (say 1920\xD71080), then press F there.</span>"}function yt(){let e=navigator.mediaDevices;if(!window.isSecureContext||!e||!e.getDisplayMedia)return{why:"This page can\u2019t capture itself here. Open Slidetake in Chrome or Edge on a computer."};if(!window.RestrictionTarget&&!window.CropTarget)return{why:"Recording in the browser needs Chrome or Edge (or another Chromium browser) on a computer."};let t=window.MediaRecorder?ir(n=>MediaRecorder.isTypeSupported(n)):"";if(!t||!navigator.storage||!navigator.storage.getDirectory)return{why:"This browser can\u2019t record video here. Use a recent Chrome or Edge."};let{quality:a,device:o}=rr(screen.width,screen.height,devicePixelRatio||1);return a?{ok:!0,type:t,quality:a}:{why:"This screen gives a "+o[0]+"\xD7"+o[1]+" frame, less than 720p. Use OBS, or a larger screen."}}async function Ga(){Ro++,ce&&(cancelAnimationFrame(ce.raf),ce.stream.getTracks().forEach(e=>e.stop()),ce.ctx.close().catch(()=>{}),ce=null,Po.value=0)}async function Ia(){await Ga();let e=Ro;try{let t=pt.value,a=await navigator.mediaDevices.getUserMedia({audio:Ci(t)});if(e!==Ro){a.getTracks().forEach(l=>l.stop());return}let o=new AudioContext,n=o.createAnalyser();n.fftSize=512,o.createMediaStreamSource(a).connect(n);let r=new Float32Array(n.fftSize),i=ce={stream:a,ctx:o,raf:0},s=()=>{if(ce!==i)return;n.getFloatTimeDomainData(r);let l=0;for(let c of r)l=Math.max(l,Math.abs(c));Po.value=Math.max(l,Po.value*.85),i.raf=requestAnimationFrame(s)};s()}catch(t){ot.innerHTML='<span class="warn">The microphone isn\u2019t available: '+O(t.message||t.name)+". Allow it in the site settings.</span>"}}async function Pa(e=!0){try{e&&!ce&&await Ia();let t=await navigator.mediaDevices.enumerateDevices(),a=(r,i)=>{let s=t.filter(v=>v.kind===r),l=s.find(v=>v.deviceId==="default"),c=l?l.label.replace(/^Default - /,""):"",d=s.filter(v=>v.deviceId!=="default"&&v.deviceId!=="communications"),M=v=>!!l&&(v.label===c||!!l.groupId&&v.groupId===l.groupId&&!d.some(u=>u!==v&&u.label===c)),g=d.map((v,u)=>lr(v.label)||(r==="audioinput"?"Microphone ":"Camera ")+(u+1));g.forEach((v,u)=>{let T=g.slice(0,u).filter(L=>L===v).length;T&&(g[u]=v+" "+(T+1))});let y=d.some(v=>v.deviceId===i)||i==="none"?i:(d.find(M)||d[0]||{}).deviceId;return d.map((v,u)=>'<option value="'+O(v.deviceId)+'"'+(v.deviceId===y?" selected":"")+">"+O(g[u]+(M(v)?" (system default)":""))+"</option>").join("")},o=Xo();Nt.innerHTML='<option value="none"'+(o==="none"?" selected":"")+">No camera</option>"+a("videoinput",o);let n=H("slidetake:mic")||"";pt.innerHTML=a("audioinput",n),n&&pt.value===n&&ce&&ce.stream.getAudioTracks()[0].getSettings().deviceId!==n&&Ia()}catch{}}function Xo(){let e=H(ui());return e||(Wl()?H("slidetake:cam")||"default":"none")}function Gl(e){K(ui(),e),e!=="none"&&e!=="default"&&K("slidetake:cam",e)}function Yl(){p.camWas=!oe;let e=Xo()!=="none";e!==!oe&&aa(e,!0)}function hi(){p.camWas!=null&&(p.camWas!==!oe&&aa(p.camWas,!0),p.camWas=null)}async function Vl(){let e=yt();if(!e.ok)return ot.innerHTML='<span class="warn">'+O(e.why)+"</span>",e;xa&&(ot.innerHTML='<span class="warn">'+O(xa)+"</span>",xa="");let t=tt.indexOf(e.quality),a=H("slidetake:quality");Wt.innerHTML=tt.slice(t).map(n=>"<option"+(n.name===a?" selected":"")+">"+n.name+"</option>").join("");let o="";try{let{quota:n,usage:r}=await navigator.storage.estimate(),i=tt.find(s=>s.name===Wt.value)||e.quality;o=" Room for about "+Math.floor((n-r)/sr(i))+" minutes of takes."}catch{}return ot.querySelector(".warn")||(ot.innerHTML='<span class="ok">Ready: this screen records up to '+e.quality.name+" in fullscreen."+O(o)+"</span>"),e}function mi(e){pi=e,K("slidetake:rec-mode",e),be.classList.contains("open")&&Ra({setup:!0})}function Ra(e={}){ft&&((pi||(yt().ok?"browser":"obs"))==="browser"?cn(e):Kl(e))}function Kl(e={}){let t=yi().find(a=>a.key===Ke()&&a.withObs&&!a.inBrowser);Oi(t||{key:Ke(),deckTitle:D.title||(b[0]?h.get(b[0]).title:"Deck"),date:new Date().toISOString(),withObs:!0,outputPath:null,reason:"",total:0,totalObs:null,fps:Jo,events:[],picks:{},empty:!0},e)}async function Zo(e,t){return(await(await navigator.storage.getDirectory()).getDirectoryHandle("slidetake-takes",{create:!0})).getDirectoryHandle(e,{create:!!t})}async function en(e){try{await(await(await navigator.storage.getDirectory()).getDirectoryHandle("slidetake-takes")).removeEntry(e,{recursive:!0})}catch{}}async function gi(e){window.RestrictionTarget&&e.restrictTo?await e.restrictTo(await RestrictionTarget.fromElement(Mo)):await e.cropTo(await CropTarget.fromElement(Mo))}async function Jl(e){try{window.RestrictionTarget&&e.track.restrictTo?await e.track.restrictTo(null):await e.track.cropTo(null),await gi(e.track)}catch{}await e.track.applyConstraints(fi(e.quality)).catch(()=>{}),await qt()}async function $l(){let e=yt();if(!e.ok)throw new Error(e.why);let t=tt.find(s=>s.name===Wt.value)||e.quality;document.body.classList.add("rec-frame");let a=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:Lt},audio:!1,preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude",monitorTypeSurfaces:"exclude"}),o=a.getVideoTracks()[0],n=()=>a.getTracks().forEach(s=>s.stop());if(!o.restrictTo&&!o.cropTo)throw n(),new Error("Share \u201Cthis tab\u201D to record the slides.");try{await gi(o)}catch(s){throw n(),new Error("Chrome could not record just the slides ("+(s.message||s.name)+").")}await o.applyConstraints(fi(t)).catch(()=>{});let r;try{let s=H("slidetake:mic");r=await navigator.mediaDevices.getUserMedia({audio:Ci(s)})}catch(s){throw n(),new Error("The microphone isn\u2019t available ("+(s.message||s.name)+").")}let i=new Date().toISOString().replace(/[:.]/g,"-");p.browser={id:i,display:a,mic:r,track:o,quality:t,type:e.type,stream:new MediaStream([o,...r.getAudioTracks()]),dir:await Zo(i,!0),clips:[],cur:null,chain:Promise.resolve(),error:null},o.addEventListener("ended",()=>{p.active&&!p.finishing&&ut("Sharing stopped")})}function bi(){let e=p.browser;e&&(e.display.getTracks().forEach(t=>t.stop()),e.mic.getTracks().forEach(t=>t.stop()),document.body.classList.remove("rec-frame"))}function Xl(e){let t=p.browser,a="take-"+t.clips.length+"."+lo(t.type),o={name:a,rec:null,done:null};t.clips.push(o),e.clip=t.id+"/"+a,t.chain=t.chain.then(async()=>{let n=await(await t.dir.getFileHandle(a,{create:!0})).createWritable(),r=new MediaRecorder(t.stream,{mimeType:t.type,videoBitsPerSecond:t.quality.bitrate,audioBitsPerSecond:ma}),i=Promise.resolve();r.ondataavailable=l=>{l.data.size&&(i=i.then(()=>n.write(l.data)).catch(c=>{t.error=c}))},o.done=new Promise(l=>{r.onstop=async()=>{await i,await n.close().catch(()=>{}),l()}}),await new Promise(l=>{r.onstart=l,r.start(1e3)}),e.t=Math.round(qe()),e.cutAt!=null&&(e.lead=Math.max(0,Math.round(e.t-e.cutAt)));let s=t.cur;t.cur=o,o.rec=r,s&&s.rec.state!=="inactive"&&s.rec.stop()}).catch(n=>{t.error=n})}async function Ar(e,t){if(p.active||!b.length)return;let a=e==="obs";if(Ga(),e==="browser"){V||ge(!0);try{await $l()}catch(c){document.body.classList.remove("rec-frame"),V&&ge(!1),xa=c.name==="NotAllowedError"?"Recording needs this tab shared: press \u25CF Record again and choose Share.":c.message,cn({setup:!0});return}}Wa();let o=t&&t.length?t.filter(c=>b.includes(c)):null,n=o?o[0]:b[0],r=b[b.indexOf(n)-1]||null;Object.assign(p,{active:!0,withObs:a,counting:!0,paused:!1,finishing:!1,t0:0,pausedMs:0,events:[],outputPath:null,only:o?new Set(o):null}),e!=="browser"&&(p.browser=null),document.body.classList.add("recording"),pn();let i=document.getElementById("rec-layout").value;i!=="current"&&i!==Y&&Ha(i,!0),V||ge(!0),Yl(),r?(document.body.classList.add("no-anim"),h.get(r)._played=!0,Ee=!0,_(r,!0,!0),Ee=!1,P.getAnimations().forEach(c=>c.finish()),await qt(),document.body.classList.remove("no-anim")):(m===n&&(ye=0,fe=null,Oe=-1),_(n,!0)),!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen().catch(()=>{});let s=It.querySelector(".hint");for(let c=3;c>0;c--)if(s.textContent=(document.fullscreenElement?"":"Press F for fullscreen \xB7 ")+"recording starts after the countdown \xB7 Esc to cancel",It.querySelector(".num").textContent=c,It.classList.add("show"),await Ba(1e3),!p.active)return;if(It.classList.remove("show"),await qt(),a){let c=new Promise(d=>{Ue=d,setTimeout(()=>{Ue&&(Ue(),Ue=null)},2500)});try{await ne.call("StartRecord")}catch(d){tn("OBS could not start recording: "+(d&&d.message||d));return}if(await c,!p.active)return}p.browser&&await Jl(p.browser),p.counting=!1,p.t0=performance.now();let l=h.get(n);if(r){Gt("slide",n),p.browser&&await p.browser.chain,Ht(l),Ee=!0,_(n),Ee=!1;return}Ht(l),$t(!0),Gt("slide",m)}function tn(e){if(p.active=!1,p.counting=!1,p.browser){let t=p.browser;t.chain.then(()=>{t.cur&&t.cur.rec.state!=="inactive"&&t.cur.rec.stop()}).then(()=>en(t.id)),bi(),p.browser=null}It.classList.remove("show"),document.body.classList.remove("recording"),V&&ge(!1),hi(),rt(e)}function Gt(e,t,a){if(!p.active||!p.t0||p.finishing)return;let o=h.get(t),n={id:t,title:o?o.title:t,retake:e==="retake",t:Math.round(qe()),obsT:null};a==null&&p.browser&&(a=n.t),a!=null&&(n.cutAt=a,n.lead=Math.max(0,Math.round(n.t-a))),p.events.push(n),p.browser&&Xl(n),p.withObs&&Me&&(ne.call("GetRecordStatus").then(r=>{r&&typeof r.outputDuration=="number"&&(n.obsT=r.outputDuration)}).catch(()=>{}),o&&ne.call("CreateRecordChapter",{chapterName:(n.retake?"RETAKE \xB7 ":"")+o.title}).catch(()=>{}))}function Ql(e){let t=e.key;if((Lr.includes(t)||Mr.includes(t)||Or.includes(t)||t==="Escape")&&e.preventDefault(),t==="Escape"){p.counting?tn("Take cancelled"):ut("Stopped early");return}if((t==="f"||t==="F")&&!document.fullscreenElement&&document.documentElement.requestFullscreen){e.preventDefault(),document.documentElement.requestFullscreen().catch(()=>{});return}if(!(p.counting||p.finishing||jt)){if(Or.includes(t)){ac();return}p.paused||(Lr.includes(t)?Zl():Mr.includes(t)&&ec())}}function Zl(){let e=bt(h.get(m)),t=Math.min(ye,e.length-1)>=e.length-1,a=b.indexOf(m);if(!t){Ie(1);return}if(!p.only){a===b.length-1?ut():Ie(1);return}let o=b.slice(a+1).find(n=>p.only.has(n));o?b[a+1]===o?Ie(1):vi(b[b.indexOf(o)-1],o,"slide"):ut()}async function ec(){let e=h.get(m);if(!e||jt)return;let t=m,a=ti;if(!a||a===t||!h.has(a)){tc(e);return}vi(a,t,"retake")}async function vi(e,t,a){let o=h.get(t);if(!o||jt)return;jt=!0;let n=qe();document.body.classList.add("no-anim");let r=h.get(e);Ee=!0,r._played=!0,_(e,!0,!0),P.getAnimations().forEach(i=>i.finish()),Ee=!1,await qt(),document.body.classList.remove("no-anim"),Gt(a,t,n),p.browser&&await p.browser.chain,Ht(o),Ee=!0,_(t),Ee=!1,!ae&&!P.hidden&&Ye.used&&Je(),jt=!1}function tc(e){Gt("retake",m),ye=0,fe=null,Oe=-1,Ht(e),$t(!0),!ae&&!P.hidden&&Ye.used?Je():we(),vt()}async function ac(){if(p.t0)if(p.paused){if(Io.classList.remove("show"),await qt(),p.withObs&&await ne.call("ResumeRecord").catch(()=>{}),p.browser){let e=p.browser;e.chain=e.chain.then(()=>{e.cur&&e.cur.rec.state==="paused"&&e.cur.rec.resume()})}p.pausedMs+=performance.now()-p.pauseAt,p.paused=!1,Yo(h.get(m))}else{if(p.paused=!0,p.pauseAt=performance.now(),clearTimeout(ct),p.withObs&&await ne.call("PauseRecord").catch(()=>{}),p.browser){let e=p.browser;e.chain=e.chain.then(()=>{e.cur&&e.cur.rec.state==="recording"&&e.cur.rec.pause()})}Io.classList.add("show")}}async function ut(e){if(!p.active||p.finishing)return;if(p.counting){tn("Take cancelled");return}p.finishing=!0,clearTimeout(ct),p.paused&&(p.pausedMs+=performance.now()-p.pauseAt,p.paused=!1,Io.classList.remove("show"));let t=Math.round(qe()),a=null;if(p.withObs){await Ba(1200),t=Math.round(qe());try{let r=await ne.call("GetRecordStatus");r&&typeof r.outputDuration=="number"&&(a=r.outputDuration)}catch{}try{let r=await ne.call("StopRecord");p.outputPath=r&&r.outputPath}catch(r){e=(e?e+". ":"")+"OBS did not confirm the stop ("+(r&&r.message||r)+")"}}let o=p.browser;o&&(await Ba(600),await o.chain,t=Math.round(qe()),o.cur&&o.cur.rec&&o.cur.rec.state!=="inactive"&&o.cur.rec.stop(),await Promise.all(o.clips.map(r=>r.done)),bi(),p.browser=null,o.error&&(e=(e?e+". ":"")+"Some of the take could not be saved ("+(o.error.message||o.error.name)+")")),p.active=!1,p.finishing=!1,document.body.classList.remove("recording"),V&&ge(!1),hi();let n={key:Ke(),deckTitle:D.title||h.get(b[0]).title,date:new Date().toISOString(),withObs:p.withObs,outputPath:p.outputPath,reason:e||"",total:t,totalObs:a,fps:o?Lt:Jo,...o?{inBrowser:!0,takesId:o.id,quality:o.quality.name,type:o.type}:{},events:p.events.map(r=>({id:r.id,title:r.title,retake:r.retake,t:r.t,obsT:r.obsT,...r.lead?{lead:r.lead}:{},...r.clip?{clip:r.clip}:{}})),picks:{}};if(n.inBrowser){dc(n);return}an(n),Oi(n,{note:(e?e+". ":"")+he(n).size+" slides recorded with OBS."})}function Ke(){return Qe(D.title||(b[0]?h.get(b[0]).title:"deck"))}function yi(){try{return JSON.parse(H("slidetake:sessions")||"[]")}catch{return[]}}function an(e){let t=yi().filter(a=>a.date!==e.date);t.unshift(e),t.slice(12).forEach(a=>{a.takesId&&en(a.takesId)}),K("slidetake:sessions",JSON.stringify(t.slice(0,12)))}function ht(e){let t=h.has(e)?Ua(e):[e];return t[Math.min(1,t.length-1)]}function wi(e,t){let a=ht(e);return{sec:a,title:h.has(a)?h.get(a).title:t}}function A(e,{warn:t=!1,html:a="",title:o=""}={}){At.classList.toggle("warn",t),a?At.innerHTML=a:At.textContent=e,At.title=o||At.textContent;let n=document.getElementById("rv-save-again");n&&(n.onclick=()=>Ni(!0))}function Oi(e,t={}){Wa(),N=e,Q=null;let a=e.events.filter(r=>r.retake).length,o=e.empty?"":he(e).size+" slides, "+(a?a+" retake"+(a>1?"s":""):"no retakes")+", recorded "+Ze(e.totalObs??e.total)+". ";be.classList.remove("in-browser","board"),be.classList.add("obs"),document.getElementById("rv-rec").title="Records the deck with OBS: a new video in place of this one",document.getElementById("rv-render-btn").disabled=document.getElementById("rv-clean").disabled=!!e.cleaned,document.getElementById("rv-file").textContent=e.outputPath?" ("+et(e.outputPath)+")":"";let n=ua(e);za.value=[...za.options].reduce((r,i)=>Math.abs(i.value-n)<Math.abs(r.value-n)?i:r).value,S.src&&(e.inBrowser||Pe!==et(e.outputPath)&&e.outputPath)&&(S.removeAttribute("src"),S.load(),Pe=""),document.getElementById("rv-novideo").hidden=!!S.src||!!e.empty,Q=null,F=null,Qt(),Ya(),Xt(be),ve.open=!!t.setup||!Me||!!e.empty,ve.open?ln():Pa(!1).then(Ge),A(t.note||(e.empty?Me?"Press \u25CF Record: OBS records the deck.":"Connect to OBS in Setup, then press \u25CF Record.":o+(S.src?"Click a take to preview it.":"Open the recording to preview it."))),e.empty||mc(e)}function Ya(){if(N&&N.board){mt();return}let e=N,t=document.getElementById("rv-list"),a=null;t.innerHTML=[...he(e).values()].map(o=>{let n=e.picks[o.id]??o.takes.length,r=ht(o.id),i=r!==a;a=r;let s=o.takes.map(l=>'<button class="rv-chip'+(n===l.no?" on":"")+'" data-id="'+O(o.id)+'" data-take="'+l.no+'">Take '+l.no+" \xB7 "+Ze(l.end-l.start)+"</button>").join("");return'<div class="rv-row'+(i?" sec":"")+'"><div class="t">'+O(o.title)+"<small>"+na(o.takes[0].start)+'</small></div><div class="rv-chips">'+s+"</div></div>"}).join(""),t.querySelectorAll(".rv-chip").forEach(o=>o.onclick=()=>{e.picks[o.dataset.id]=+o.dataset.take,an(e),Ya();let n=he(e).get(o.dataset.id),r=n&&n.takes[+o.dataset.take-1];if(!r)return;let i=n.title+(n.takes.length>1?" \xB7 take "+r.no:"");if(e.inBrowser){let s=e.events.filter(l=>l.id===o.dataset.id)[r.no-1];s&&s.clip&&Va([{clip:s.clip,keep:(r.end-r.start)/1e3,title:i}])}else Fa([{start:r.start,end:r.end,title:i}])}),document.getElementById("rv-ffmpeg-copy").disabled=document.getElementById("rv-play-final").disabled=!e.events.length,Bi(e),Pi(e)}function Bi(e){let t=oc(e),a=document.getElementById("rv-chapters");Ai=t.lines.join(`
`),a.disabled=t.lines.length<3,a.title=t.lines.length<3?"YouTube needs at least three chapters of 10 seconds or more":"Copies the "+t.lines.length+" chapters, to paste into the YouTube description"}function Ii(e,t){let a=e.dataset.label||(e.dataset.label=e.textContent);(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).catch(()=>{}),e.textContent="\u2713 Copied",clearTimeout(+e.dataset.timer),e.dataset.timer=String(setTimeout(()=>{e.textContent=a},1500))}async function Pi(e){let t=document.getElementById("rv-final"),a=++So,o=Tt(e).reduce((r,i)=>r+i.end-i.start,0),n=r=>(r?"about "+(r>1e9?(r/1e9).toFixed(1)+" GB":Math.max(1,Math.round(r/1e6))+" MB")+" \xB7 ":"Final cut ")+Ze(o);if(!e.inBrowser||e.cleaned){t.textContent=n(null);return}try{let r=0;for(let i of Mt(e))xo.has(i.clip)||xo.set(i.clip,(await Zt(i.clip)).size),r+=xo.get(i.clip);a===So&&(t.textContent=n(r))}catch{a===So&&(t.textContent=n(null))}}function Fa(e){if(!S.src){Da=e,A(No?"Opening the recording\u2026 it plays when ready.":"Open the recording to preview.");return}Da=null,Q={ranges:e,i:0},A("\u25B6 "+e[0].title);let t=()=>{S.currentTime=e[0].start/1e3,S.play().catch(a=>{a&&a.name!=="AbortError"&&A("Could not play: "+a.message,{warn:!0})})};S.readyState>=1?t():S.addEventListener("loadedmetadata",t,{once:!0})}function Qt(){nt=null}function on(){let e=F&&!F.single&&!S.paused;Ri.textContent=e?"\u275A\u275A Pause":"\u25B6 Preview",document.querySelectorAll("#rv-list .rv-row.playing").forEach(o=>o.classList.remove("playing"));let t=F&&F.parts[F.i],a=t&&t.id&&document.querySelector('#rv-list .rv-row[data-id="'+CSS.escape(t.id)+'"]');a&&(a.classList.add("playing"),a.scrollIntoView({block:"nearest"}))}function rc(e){let t=N?Mt(N):[],a=t.findIndex(n=>n.id===e.id),o=a>=0?t[a+1]:null;nt=o?o.id:null,A(o?"Preview continues from "+o.title+".":"That was the last slide: Preview plays from the start.")}function zi(e){return Array.from({length:e.numberOfChannels},(t,a)=>{let o=new Float32Array(e.numberOfFrames);return e.copyTo(o,{planeIndex:a,format:"f32-planar"}),o})}async function Zt(e){let[t,a]=e.split("/");return(await(await Zo(t)).getFileHandle(a)).getFile()}async function Va(e,t=0,a=!1){if(!(!N||N.cleaned||!e.length)){Q=null,F={parts:e,i:t,single:a};try{let o=await Zt(e[t].clip);S.src&&URL.revokeObjectURL(S.src),S.src=URL.createObjectURL(o),A("\u25B6 "+e[t].title),await S.play()}catch(o){if(o&&o.name==="AbortError")return;F=null,A(o&&o.name==="NotFoundError"?"This take is no longer in the browser.":"Could not play this take: "+(o&&o.message||o),{warn:!0})}}}function Di(){let e=F;if(e.i+1<e.parts.length){Va(e.parts,e.i+1,e.single);return}F=null,S.pause(),e.single?rc(e.parts[0]):A(""),on()}async function ic(e){if(!e.where)return!0;try{let t=await dn("video-folder");return!t||t.name!==e.where||await t.queryPermission({mode:"readwrite"})!=="granted"||await t.getFileHandle(e.name),!0}catch{return!1}}async function Ni(e){let t=N;if(!t||!t.inBrowser||t.cleaned)return;let a=Mt(t);if(!a.length){A("No slide has a take yet: nothing to save.",{warn:!0});return}let o=JSON.stringify([a.map(d=>[d.clip,Math.round(d.keep*1e3)]),We(),Yt(),t.type]),n=t.board&&B.lastDownload;if(!e&&n&&n.sig===o&&await ic(n)){A("",{html:'<button class="btn small" id="rv-save-again">Save another copy</button> Already saved in '+O(Eo(n))+".",title:"Already saved in "+Eo(n)+". A new video is made only when a take or the sound settings change."});return}let r=lo(t.type||"")==="mp4",i=Ke()+" "+lc(new Date)+"."+(r?"mp4":"webm"),s=null,l="";try{let d=await ji(!1);d&&(s=await(await d.getFileHandle(i,{create:!0})).createWritable(),l=d.name)}catch(d){if(d&&d.name==="AbortError")return}let c=nn;c.disabled=!0,Ne("Preparing\u2026");try{let d=await import(ql),M=s?new d.StreamTarget(s):new d.BufferTarget,g=new d.Output({format:r?new d.Mp4OutputFormat({fastStart:s?!1:"in-memory"}):new d.WebMOutputFormat,target:M}),y=1,v="",u=We()&&Yt();if(We()){let z=await Br(d,a,1,!1,"Measuring");if(z&&isFinite(z.integrated)){let q=po(z,{limit:u});if(u&&Math.abs(q)>=.05){let X=await Br(d,a,ba(q),!0,"Checking");X&&isFinite(X.integrated)&&(q=Math.min(q+(-14-X.integrated),co))}y=ba(q);let se=u?-14:z.integrated+q,te=!u&&po(z,{limit:!0})-q>.5;v=" \xB7 loudness "+z.integrated.toFixed(1)+(Math.abs(q)<.05?" LUFS, left as is":" \u2192 "+se.toFixed(1)+" LUFS")+(te?"; a loud peak held it back, turn on Peak limiter to reach "+-14:"")}}let T=y!==1||u;await sc(d,a);let L=null,w=null,k=0,f=-1,x=-1,C=null,J=[],ee=async()=>{for(;J.length&&C.ready()>=J[0].n;){let z=J.shift(),q=C.take(z.n),se=new Float32Array(z.n*z.ch);q.forEach((te,X)=>se.set(te,X*z.n)),await w.add(new d.AudioSample({data:se,format:"f32-planar",numberOfChannels:z.ch,sampleRate:z.rate,timestamp:z.t}))}};for(let[z,q]of a.entries()){Ne("Joining "+(z+1)+"/"+a.length);let se=new d.Input({source:new d.BlobSource(await Zt(q.clip)),formats:d.ALL_FORMATS}),te=await se.getPrimaryVideoTrack(),X=await se.getPrimaryAudioTrack();if(!te)throw new Error(q.title+" has no video");L||(L=new d.EncodedVideoPacketSource(await te.getCodec()),g.addVideoTrack(L,{frameRate:Lt}),X&&(w=T?new d.AudioSampleSource({codec:r?"aac":"opus",bitrate:ma}):new d.EncodedAudioPacketSource(await X.getCodec()),g.addAudioTrack(w)),await g.start());let kt={decoderConfig:await te.getDecoderConfig()},$e=0,fn=!0;for await(let W of new d.EncodedPacketSink(te).packets())W.timestamp>=q.keep||(f=fa(f,k+W.timestamp),await L.add(W.clone({timestamp:f}),fn&&z===0?kt:void 0),fn=!1,$e=Math.max($e,W.timestamp+W.duration));if(X&&w&&T)for await(let W of new d.AudioSampleSink(X).samples(0,$e)){if(W.timestamp+W.duration>$e+1e-4){W.close();continue}x=fa(x,k+W.timestamp);let pe=zi(W);if(pe.forEach(ue=>{for(let Xe=0;Xe<ue.length;Xe++)ue[Xe]*=y}),u)C=C||uo(W.sampleRate,pe.length),C.push(pe),J.push({t:x,n:W.numberOfFrames,rate:W.sampleRate,ch:pe.length}),W.close(),await ee();else{let ue=W.numberOfFrames,Xe=new Float32Array(ue*pe.length);pe.forEach((Zi,es)=>Xe.set(Zi,es*ue)),await w.add(new d.AudioSample({data:Xe,format:"f32-planar",numberOfChannels:pe.length,sampleRate:W.sampleRate,timestamp:x})),W.close()}}else if(X&&w){let W={decoderConfig:await X.getDecoderConfig()},pe=!0;for await(let ue of new d.EncodedPacketSink(X).packets())ue.timestamp+ue.duration>$e+1e-4||(x=fa(x,k+ue.timestamp),await w.add(ue.clone({timestamp:x}),pe&&z===0?W:void 0),pe=!1)}k+=$e}if(C&&(C.end(),await ee(),C.events&&(v+=", "+C.events+" peak"+(C.events===1?"":"s")+" limited")),Ne("Finishing\u2026"),await g.finalize(),!s){let z=document.createElement("a");z.href=URL.createObjectURL(new Blob([M.buffer],{type:r?"video/mp4":"video/webm"})),z.download=i,z.click(),setTimeout(()=>URL.revokeObjectURL(z.href),1e4)}let $={sig:o,name:i,where:l};t.board&&(B.lastDownload=$,ea()),A("Saved in "+Eo($)+" ("+Ze(k*1e3)+v+")."),Ne("\u2713 Saved"),Fi=setTimeout(()=>Ne(),2500)}catch(d){Ne(),A("Could not save the video: "+(d&&d.message||d),{warn:!0}),s&&s.abort().catch(()=>{})}finally{c.disabled=!!t.cleaned}}async function Br(e,t,a,o,n){let r=null,i=null;for(let[s,l]of t.entries()){Ne(n+" "+(s+1)+"/"+t.length);let c=await new e.Input({source:new e.BlobSource(await Zt(l.clip)),formats:e.ALL_FORMATS}).getPrimaryAudioTrack();if(c)for await(let d of new e.AudioSampleSink(c).samples(0,l.keep)){let M=zi(d);r=r||dr(d.sampleRate,M.length),a!==1&&o?(M.forEach(g=>{for(let y=0;y<g.length;y++)g[y]*=a}),i=i||uo(d.sampleRate,M.length),i.push(M),i.ready()&&r.add(i.take(i.ready()))):r.add(M),d.close()}}return i&&(i.end(),i.ready()&&r.add(i.take(i.ready()))),r?r.result():null}async function sc(e,t){let a=[];for(let i of t){let s=await new e.Input({source:new e.BlobSource(await Zt(i.clip)),formats:e.ALL_FORMATS}).getPrimaryVideoTrack(),l=s&&await s.getDecoderConfig();a.push(l?l.codec+" "+l.codedWidth+"\xD7"+l.codedHeight+" "+(l.description?[...new Uint8Array(l.description)].join("."):""):"none")}let o=new Map;a.forEach(i=>o.set(i,(o.get(i)||0)+1));let n=[...o.entries()].sort((i,s)=>s[1]-i[1])[0][0],r=t.filter((i,s)=>a[s]!==n);if(r.length)throw new Error(r.map(i=>i.title).join(", ")+(r.length===1?" was":" were")+" recorded at a different size ("+a[t.indexOf(r[0])].split(" ")[1]+", not "+n.split(" ")[1]+"). Tick "+(r.length===1?"it":"them")+" and record again")}async function ji(e){if(!window.showDirectoryPicker)return null;let t=e?null:await dn("video-folder");if(t){let a=await t.queryPermission({mode:"readwrite"});if(a==="prompt"&&(a=await t.requestPermission({mode:"readwrite"})),a==="granted")return t}return t=await window.showDirectoryPicker({id:"slidetake-videos",mode:"readwrite",startIn:"videos"}),qi("video-folder",t),t}function Ka(){let e=_i();if(B&&Ir===e)return B;Ir=e;try{B=JSON.parse(H(e)||"null")}catch{B=null}return(!B||!Array.isArray(B.takes))&&(B={takes:[],picks:{},type:"",quality:""}),B}function dc(e){Ka();let t=mr(e,e.takesId,rn());t.forEach(a=>{delete B.picks[a.id]}),B.takes.push(...t),Object.assign(B,{type:e.type,quality:e.quality}),ea(),Te.clear(),cn({note:(e.reason?e.reason+". ":"")+t.length+" new take"+(t.length===1?"":"s")+" on the board."})}function Ui(){let e=ho(Ka(),rn()),t=Object.assign(fr(e),{board:!0,inBrowser:!0,withObs:!1,type:B.type||"video/mp4",quality:B.quality||"",deckTitle:D.title||(b[0]?h.get(b[0]).title:"Deck"),date:new Date().toISOString()});return{rows:e,sess:t}}function ln(){if(Qo()){Hl(),Pa(!1).then(Ge);return}ot.innerHTML="",Vl().then(e=>{e.ok?Pa().then(Ge):Ge()})}function Ge(){let e=n=>{let r=n.selectedOptions[0];return r?r.textContent.replace(/ \(system default\)$/,""):""},t=e(Nt)||(Xo()==="none"?"No camera":"Camera"),a=Qo()?["OBS",t]:yt().ok?["In "+Do,t,e(pt)||"Microphone"]:["In "+Do,"can\u2019t record here"],o=document.getElementById("rv-using");o.textContent=a.join(" \xB7 "),o.title=sn.title="Recording with "+a.join(" \xB7 ")}function cn(e={}){if(!ft)return;Wa(),Ka(),be.classList.remove("obs"),be.classList.add("in-browser","board"),document.getElementById("rv-rec").title="Records the whole deck, or only the ticked slides (shift-click ticks a range)",document.getElementById("rv-novideo").hidden=!0,S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),Q=null,F=null,Qt(),Sa=-1,mt(),Xt(be);let t=yt().ok;ve.open=!!e.setup||!t||!B.takes.length,ve.open?ln():Pa(!1).then(Ge),A(e.note||Mi()||(B.takes.length?pc()+". Click a take to preview it.":b.length+" slides, nothing recorded yet. Press \u25CF Record."))}function pc(){let e=ho(Ka(),rn()),t=e.filter(o=>o.pick).length,a=e.filter(o=>o.takes.length&&!o.pick).length;return t+" of "+e.length+" slides ready"+(a?", "+a+" to record again":"")}function mt(){let{rows:e,sess:t}=Ui();N=t;let a=document.getElementById("rv-list"),o=null;a.innerHTML=e.map(i=>{let s=ht(i.id),l=s!==o;o=s;let c=O(i.id),d={slide:"Recorded before this slide changed",before:"Starts with the entry from the slide before, which has changed or is gone: record this slide again"},M=i.takes.length?i.takes.map(g=>'<button class="rv-chip'+(i.pick===g.uid?" on":"")+(g.outdated?' outdated" title="'+d[g.outdated]:"")+'" data-id="'+c+'" data-uid="'+O(g.uid)+'">Take '+g.no+" \xB7 "+Ze(g.ms)+"</button>").join("")+(i.pick?"":'<span class="rv-none">'+(i.takes.some(g=>g.outdated==="before")&&!i.takes.some(g=>g.outdated==="slide")?"The slide before changed: record again":"Changed since: record again")+"</span>"):'<span class="rv-none">No take yet</span>';return'<div class="rv-row with-sel'+(l?" sec":"")+(Te.has(i.id)?" selected":"")+'" data-id="'+c+'"><input type="checkbox" class="rv-sel" data-id="'+c+'"'+(Te.has(i.id)?" checked":"")+' aria-label="Select '+O(i.title)+' to record"><div><div class="t">'+O(i.title)+'</div><div class="rv-chips">'+M+"</div></div></div>"}).join(""),a.querySelectorAll(".rv-chip").forEach(i=>i.onclick=()=>{B.picks[i.dataset.id]=i.dataset.uid,ea(),mt();let s=e.find(c=>c.id===i.dataset.id),l=s&&s.takes.find(c=>c.uid===i.dataset.uid);l&&Va([{id:s.id,clip:l.clip,keep:l.ms/1e3,title:s.title+" \xB7 take "+l.no}],0,!0)}),a.querySelectorAll(".rv-sel").forEach(i=>i.addEventListener("click",s=>{(s.shiftKey?gr(b,Pr,i.dataset.id):[i.dataset.id]).forEach(c=>{i.checked?Te.add(c):Te.delete(c)}),Qt(),Pr=i.dataset.id,mt()}));let n=va(b,Te),r=yt().ok;document.getElementById("rv-rec").disabled=!r,Sa>=0&&n.length!==Sa&&A(Mi()||"Record takes the whole deck."),Sa=n.length,document.getElementById("rv-render-btn").disabled=document.getElementById("rv-play-final").disabled=!t.events.length,Bi(t),Pi(t)}async function uc(e){for(let a of e)try{let[o,n]=a.clip.split("/");await(await Zo(o)).removeEntry(n)}catch{}let t=new Set(e.map(a=>a.uid));B.takes=B.takes.filter(a=>!t.has(a.uid)),Object.keys(B.picks).forEach(a=>{t.has(B.picks[a])&&delete B.picks[a]}),ea(),S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),F=null,Qt(),mt()}function Hi(e){return new Promise((t,a)=>{let o=indexedDB.open(e||"slidetake",1);o.onupgradeneeded=()=>o.result.createObjectStore("kv"),o.onsuccess=()=>t(o.result),o.onerror=()=>a(o.error)})}async function dn(e){let t=async a=>{let o=await Hi(a);return await new Promise(n=>{let r=o.transaction("kv").objectStore("kv").get(e);r.onsuccess=()=>n(r.result),r.onerror=()=>n(null)})};try{return await t()??await t("markcast")??await t("traverse")??null}catch{return null}}async function qi(e,t){try{(await Hi()).transaction("kv","readwrite").objectStore("kv").put(t,e)}catch{}}async function Ja(e){No=!0;try{return await hc(e)}finally{No=!1}}async function hc(e){let t=await e.getFile();for(let a=0;a<10;a++){await new Promise(n=>setTimeout(n,1e3));let o=await e.getFile();if(o.size===t.size&&o.lastModified===t.lastModified)return o;t=o}return t}function ta(e,t,a){S.src&&URL.revokeObjectURL(S.src),Pt=t||null,a||(Fo=0),S.src=URL.createObjectURL(e),Pe=e.name,document.getElementById("rv-novideo").hidden=!0,A("Loaded "+e.name+". Click a take to preview it."),Da?Fa(Da):a&&Q&&Fa(Q.ranges.slice(Q.i))}async function mc(e){let t=et(e.outputPath);if(!(!t||!window.showDirectoryPicker)&&!(Pe===t&&S.src))try{let a=await dn("obs-folder");if(!a||await a.queryPermission({mode:"read"})!=="granted")return;let o=await a.getFileHandle(t);A("Opening "+t+"\u2026"),ta(await Ja(o),o)}catch{}}function rt(e,t){if(!p.active){if(clearTimeout(Ea),!P.hidden&&!P.classList.contains("live")){zt.classList.remove("show"),Gi.textContent=e,P.classList.add("msg"),t||(Ea=setTimeout(Yi,9e3));return}zt.textContent=e,zt.classList.add("show"),t||(Ea=setTimeout(()=>zt.classList.remove("show"),9e3))}}function Yi(){Gi.textContent="PIP camera",P.classList.remove("msg")}function pn(){clearTimeout(Ea),zt.classList.remove("show"),Yi()}function Co(){let e=!1;try{e=window.top!==window.self}catch{e=!0}return e?" This page is running inside a preview frame that may not allow cameras. Open Slidetake directly in Chrome (from localhost or as a file).":window.isSecureContext?" Allow camera access for this page in the browser\u2019s site settings (the icon at the left of the address bar), then try again.":" Browsers only allow cameras on secure pages. Open it from http://localhost or as a local file in Chrome."}function un(){ae&&ae.getTracks().forEach(t=>t.stop()),ae=null;let e=P.querySelector("video");e&&e.remove()}async function Je(){if(!(ae||oe)){{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){rt("Camera not available on this page."+Co(),!0);return}if(Se.disabled)return;Se.disabled=!0,rt("Waiting for camera permission \u2014 check the browser prompt near the address bar.",!0);try{let t=H("slidetake:cam");ae=await navigator.mediaDevices.getUserMedia({video:{...t?{deviceId:{ideal:t}}:{},width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30}},audio:!1}),pn()}catch(t){let a=t&&t.name;rt(a==="NotAllowedError"||a==="SecurityError"?"Camera access was blocked."+Co():a==="NotFoundError"||a==="OverconstrainedError"?"No camera was found. Check that a webcam is connected.":a==="NotReadableError"?"The camera is busy \u2014 close other apps using it (Zoom, OBS, FaceTime) and try again.":"Could not start the camera"+(a?" ("+a+")":"")+"."+Co(),!0);return}finally{Se.disabled=!1,hn()}ae.getVideoTracks().forEach(t=>t.addEventListener("ended",()=>{un(),Ta(),we()}));let e=document.createElement("video");e.autoplay=!0,e.muted=!0,e.playsInline=!0,e.srcObject=ae,P.appendChild(e)}Ta(),we()}}function hn(){Se.querySelector("svg")||(Se.innerHTML=fc+'<span class="lbl"> Camera</span>'),Se.classList.toggle("on",!oe),Se.setAttribute("aria-pressed",String(!oe)),Se.title=oe?"Camera is off for every slide (C)":"Camera is on and follows the deck (C)"}function aa(e,t){e&&!ft||(oe=!e,oe&&(un(),pn()),fe=null,Oe=-1,ye=Math.min(ye,Math.max(0,bt(h.get(m)).length-1)),hn(),Ta(),$t(),vt(),we(),!V&&!t&&rt(e?"Camera on \u2014 slides follow their camera settings.":"Camera off \u2014 camera settings are ignored and slides use the whole screen."),e&&Je())}function Vi(){document.body.classList.remove("idle"),clearTimeout(Rr),V&&(Rr=setTimeout(()=>document.body.classList.add("idle"),2e3))}function Vt(e,t){it.textContent=e,it.classList.add("show"),clearTimeout(Dr),Dr=setTimeout(()=>it.classList.remove("show"),t||2500)}function jo(e,{keepObs:t=!0,keepEdit:a=!0,slide:o=""}={}){let n=new URL(Gn(e),location.origin);return new URLSearchParams(location.search).forEach((r,i)=>{i==="src"||i==="obs"&&!t||i==="edit"&&!a||n.searchParams.set(i,r)}),o&&(n.hash=o),n.href.replace(n.pathname,n.pathname.replace(/%40/g,"@"))}async function bc(e){let t={keepObs:!1,keepEdit:!1,slide:e};if(E.kind==="source")return{link:jo(E.source,t),inside:!1};if(E.kind==="copy"&&da(I)&&["url","gist","builtin"].includes(I.origin.kind))return{link:jo(I.origin,t),inside:!1};let o=E.kind==="share"?E.data:await Vn(re.value),n=new URLSearchParams(location.search);return["src","obs","edit"].forEach(r=>n.delete(r)),{link:location.origin+"/share"+(n.toString()?"?"+n:"")+no(o,e),inside:!0}}function vc(){let e=H("slidetake:draft");if(!e||e===$a)return null;let t=la(e,{kind:"file",name:"your earlier draft"},{exported:!0});K("slidetake:copy",JSON.stringify(t));try{localStorage.removeItem("slidetake:draft")}catch{}return t}function oa(){K("slidetake:copy",JSON.stringify(I))}function wt(){if(U)return;let e;if(mn())e='<span class="mine">'+O(de.file)+'</span> <span class="ro">\xB7 on this computer, saved as you type</span>';else if(E.kind==="copy")e='<span class="mine">Your copy of '+O(ke(I.origin))+"</span>"+(ca(I)?' <span class="edited">\xB7 edited</span>':"");else{let a=E.kind==="share"?"a shared deck":ke(E.source);e='<span class="mine">'+O(a.charAt(0).toUpperCase()+a.slice(1))+'</span> <span class="ro">\xB7 read-only, typing makes your copy</span>'}document.getElementById("doc-state").innerHTML=e,ze.classList.toggle("unsaved",E.kind==="copy"&&ca(I)),document.getElementById("btn-reset").hidden=!(E.kind==="copy"&&!da(I));let t=document.getElementById("continue");t.hidden=E.kind==="copy"||!I,I&&(t.textContent="Your copy \u2192",t.title="Continue your copy of "+ke(I.origin))}function Ki(e){return!I||!ca(I)?!0:confirm("Your copy of "+ke(I.origin)+" has edits you haven't saved or shared. Replace it with "+e+"?")}function Ji(){let e=new URLSearchParams(location.search);return e.delete("src"),e.delete("template"),"/edit"+(e.toString()?"?"+e:"")}function yc(){let e=E.kind==="share"?{kind:"shared"}:E.source;return Ki("a copy of "+ke(e))?(I=la(E.text,e),E={kind:"copy"},history.pushState(null,"",Ji()+(m&&m!==b[0]?"#"+encodeURIComponent(m):"")),Vt("Editing your own copy of "+ke(e)+". The original is unchanged.",4e3),!0):(re.value=E.text,!1)}function wc(){E={kind:"copy"},history.pushState(null,"",Ji()),ze.classList.contains("collapsed")&&qa(),re.value=I.text,dt(!0),wt()}function mn(){return!!(de&&E&&E.kind==="source"&&E.source.kind==="url"&&new URL(E.source.url,location.href).pathname===de.deck)}function kc(e){fetch(de.save,{method:"PUT",body:e}).catch(()=>Vt("Could not save "+de.file+": is npx slidetake still running?",6e3))}async function xc(e){if(e.kind==="builtin")return Ca[e.id==="help"?"docs":e.id]??Ca.home;if(e.kind==="gist"){let a=await fetch("https://api.github.com/gists/"+encodeURIComponent(e.id));if(!a.ok)throw new Error(a.status===404?"no such gist":a.status+" "+a.statusText);let o=Object.values((await a.json()).files||{}),n=o.find(r=>r.filename===e.file)||o.find(r=>/\.(md|markdown)$/i.test(r.filename))||o[0];if(!n)throw new Error("the gist has no files");return Ae=n.raw_url,n.truncated?await(await fetch(n.raw_url)).text():n.content}let t=await fetch(e.url);if(!t.ok)throw new Error(t.status===404?"not found":t.status+" "+t.statusText);return Ae=new URL(e.url,location.href).href,await t.text()}function jr(){return E={kind:"source",source:{kind:"builtin",id:"home"},text:Ca.home},E.text}async function Sc(){if(de&&Z.page==="source"&&Z.source.kind==="builtin"&&Z.source.id==="home"&&location.pathname==="/"&&(Z.source={kind:"url",url:de.deck}),U)return Ae=U.base||location.href,E={kind:"source",source:{kind:"url",url:Ae},text:Nn(U.settings||{})+String(U.markdown||"")},E.text;if(Z.page==="edit"){if(I)return E={kind:"copy"},I.text;history.replaceState(null,"","/new"+location.search),Z.page="pick"}if(Z.page==="pick")return Xt(document.getElementById("new-dialog")),E={kind:"source",source:{kind:"builtin",id:"template:blank"},text:Ca["template:blank"]},E.text;if(Z.page==="share")try{let e=await Kn(Z.data);return E={kind:"share",data:Z.data,text:e},e}catch{return Vt("This link's deck is damaged or cut short, so it could not be opened.",6e3),jr()}try{let e=await xc(Z.source);return E={kind:"source",source:Z.source,text:e},e}catch(e){return _t.textContent="Could not load the deck ("+e.message+")",Vt("Could not load "+ke(Z.source)+": "+e.message,6e3),jr()}}var U,de,_r,ft,gt,Ca,re,j,ie,fo,vr,Ts,_t,To,Ls,ze,ya,Ms,st,go,le,Lo,Os,As,Bs,Is,Ps,Rs,Ut,h,b,He,m,Ho,Y,V,D,oe,ae,Ce,P,Mo,R,Dt,yr,De,wr,ye,fe,Oe,Ye,Ks,Js,Qs,Kr,vo,tl,Ae,xr,sl,ll,cl,Sr,ul,wa,hl,fl,yo,Fe,wo,je,Be,Ll,ct,me,ti,Ee,_e,xe,ka,ko,at,Tr,Rl,Lr,Mr,Or,be,It,Io,Ma,Oa,Aa,Ko,Ft,ne,Me,Ue,Jo,p,Ba,qt,zl,$o,Dl,li,jl,Ul,ql,Nt,pt,Wt,Po,ot,pi,xa,ce,Ro,Wl,ui,Qo,fi,jt,Pe,oc,nc,ki,We,xi,zo,Yt,Si,Ei,Ci,Ti,Li,N,Q,S,At,Sa,Mi,Ai,xo,So,za,Da,Ri,nt,F,nn,Fi,Ne,Eo,lc,B,Ir,Pr,Te,_i,ea,cc,rn,ve,sn,Do,Pt,Fo,No,Rt,Wi,Se,zt,Ea,Gi,fc,Rr,Re,zr,it,Dr,gc,_o,Uo,Fr,Na,Z,Nr,E,I,$i=G(()=>{"use strict";yn();wn();xn();En();Tn();Mn();An();In();ra();_n();qn();ao();ro();Xn();Zn();cr();pr();br();ha();U=window.SLIDETAKE||null,de=window.SLIDETAKE_LOCAL||null,_r=document.querySelector("header .mark .logo").outerHTML;document.documentElement.classList.toggle("embed",!!U);ft=!U||U.recording===!0||new URLSearchParams(location.search).has("obs");document.documentElement.classList.toggle("no-record",!ft);gt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ca={home:$a,docs:kn,features:Sn,privacy:Cn,showcase:Pn,"template:blank":Ln,"template:talk":On,"template:recording":Bn},re=document.getElementById("editor"),j=document.getElementById("stage"),ie=document.getElementById("world"),fo=document.getElementById("connectors"),vr=document.getElementById("breadcrumbs"),Ts=document.getElementById("status-count"),_t=document.getElementById("status-err"),To=document.getElementById("mm-svg"),Ls=document.getElementById("mm-label"),ze=document.getElementById("editor-pane"),ya=540,Ms=96,st=440,go=720,le=960,Lo=180,Os=540,As=100,Bs=110,Is=420,Ps=.35,Rs=1,Ut=parseFloat(H("slidetake:slideSize"))||.92,h=new Map,b=[],He=[],m=null,Ho=["focus","path","radial","tree"],Y="path",V=!1,D={},oe=!0,ae=null,Ce=document.getElementById("brand"),P=document.getElementById("pip"),Mo=document.getElementById("stage-wrap"),R={x:0,y:0,zoom:.6},Dt=null;yr={accent:"--accent",accentSoft:"--accent-teal",line:"--accent-line",ring:"--accent-ring",header:"--header-bg",headerText:"--header-ink",onAccent:"--on-accent"};De=null;wr=new URLSearchParams(location.search).get("mode");ye=0;fe=null,Oe=-1,Ye=null;Ks=new Set("svg g defs symbol use path rect circle ellipse line polyline polygon text tspan textPath title desc marker linearGradient radialGradient stop clipPath mask pattern filter feGaussianBlur feOffset feBlend feFlood feComposite feMerge feMergeNode feColorMatrix feDropShadow".split(" ")),Js=0;Qs=e=>e.querySelector("img")&&!e.textContent.trim()&&[...e.children].every(t=>/^(IMG|BR)$/.test(t.tagName));Kr=["dot","d2","echarts","svg"].map(e=>":scope > code.language-"+e).join(", "),vo=e=>!!e.querySelector("img")&&!e.textContent.trim(),tl=e=>e.children.length===1&&(e.children[0].tagName==="PRE"&&!!e.children[0].querySelector(Kr)||e.children[0].matches("div.diagram"));Ae=null;xr=null;sl="https://cdn.jsdelivr.net/npm/@viz-js/viz@3.4.0/lib/viz-standalone.js",ll="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js",cl={dark:{palette:["#60a5fa","#f472b6","#a78bfa","#fb923c","#facc15","#a1a1aa"],text:"#e4e4e7",muted:"#a1a1aa",line:"#3f3f46",split:"#27272a",tip:"#18181b"},light:{palette:["#2563eb","#db2777","#7c3aed","#ea580c","#ca8a04","#71717a"],text:"#27272a",muted:"#71717a",line:"#d4d4d8",split:"#e4e4e7",tip:"#ffffff"}};Sr=new Set;ul="https://esm.sh/@terrastruct/d2@0.1.33",wa=null,hl={dark:{N1:"#e4e4e7",N2:"#a1a1aa",N3:"#a1a1aa",N4:"#323238",N5:"#27272a",N6:"#18181b",N7:"#09090b"},light:{N1:"#27272a",N2:"#71717a",N3:"#71717a",N4:"#e4e4e7",N5:"#e4e4e7",N6:"#f4f4f5",N7:"#ffffff"}};fl=e=>/d2-config\s*:/.test(e)?e:`vars: {
  d2-config: {
    layout-engine: elk
  }
}
`+e,yo={};Fe=0,wo=null;je=document.getElementById("progress");je.innerHTML="<b></b><i></i>";Be={start:0,timer:null};Ll=["x","y","xPercent","yPercent","scale","scaleX","scaleY","rotation","rotate","skewX","skewY"];ct=null;me=null,ti=null,Ee=!1;_e=null;xe=null;To.addEventListener("click",e=>{let t=e.target.closest("circle");t&&!p.active&&_(t.dataset.id)});ka=null;re.addEventListener("input",()=>{if(mn()){E.text=re.value,clearTimeout(ka),ka=setTimeout(()=>{kc(re.value),dt(!0)},300);return}E.kind!=="copy"&&!yc()||(I.text=re.value,wt(),clearTimeout(ka),ka=setTimeout(()=>{oa(),dt(!0)},300))});document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>{e.addEventListener("click",()=>{e.dataset.mode!==Y&&Ha(e.dataset.mode)})});(function(){let e=new Map,t=0,a=!1,o=null,n=()=>{let[i,s]=[...e.values()];return Math.hypot(i.x-s.x,i.y-s.y)||1};j.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||p.active||i.target.closest("a, pre, code, input, textarea")||(e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t=0,a=!1,e.size===2&&(o={d:n(),zoom:R.zoom}))}),window.addEventListener("pointermove",i=>{let s=e.get(i.pointerId);if(!s)return;let l=i.clientX-s.x,c=i.clientY-s.y;e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t+=Math.abs(l)+Math.abs(c),!a&&t>5&&(a=!0,Go(),j.classList.add("dragging")),a&&(e.size===2&&o?R.zoom=ri(o.zoom*n()/o.d):(R.x-=l/R.zoom,R.y-=c/R.zoom),lt())});let r=i=>{e.delete(i.pointerId),e.size<2&&(o=null),e.size||j.classList.remove("dragging")};window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),j.addEventListener("click",i=>{a&&(i.stopPropagation(),i.preventDefault(),a=!1)},!0)})();j.addEventListener("wheel",e=>{e.preventDefault(),!p.active&&ii(Math.exp(-e.deltaY*(e.ctrlKey?.01:.0015)),e.clientX,e.clientY)},{passive:!1});document.getElementById("nav-prev").onclick=()=>Ie(-1);document.getElementById("nav-next").onclick=()=>Ie(1);document.getElementById("btn-open").onclick=()=>document.getElementById("file-input").click();document.getElementById("file-input").addEventListener("change",e=>{let t=e.target.files[0];if(!t)return;let a=new FileReader;a.onload=()=>{Ki("a copy of "+t.name)&&(I=la(String(a.result),{kind:"file",name:t.name},{exported:!0}),oa(),Ae=null,m=null,wc())},a.readAsText(t),e.target.value=""});document.getElementById("btn-save").onclick=()=>{let e=new Blob([re.value],{type:"text/markdown"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=(He[0]?Qe(h.get(He[0]).title):"deck")+".md",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3),E.kind==="copy"&&(I.exported=I.text,oa(),wt())};document.getElementById("btn-reset").onclick=()=>{E.kind!=="copy"||da(I)||confirm("Discard your edits and go back to "+ke(I.origin)+" as it was?")&&(I.text=I.originText,oa(),re.value=I.text,m=null,dt(!0),wt())};document.getElementById("btn-edit-toggle").onclick=qa;ko=document.querySelector("main"),at=document.getElementById("editor-resizer"),Tr=parseFloat(H("slidetake:editorWidth"));Tr&&ze.style.setProperty("--editor-w",Tr+"px");at.addEventListener("pointerdown",e=>{e.preventDefault(),at.setPointerCapture(e.pointerId),ko.classList.add("resizing");let t=ko.getBoundingClientRect().right,a=n=>{let r=Math.round(Math.max(280,Math.min(window.innerWidth*.75,t-n.clientX)));ze.style.setProperty("--editor-w",r+"px")},o=()=>{ko.classList.remove("resizing"),at.removeEventListener("pointermove",a),K("slidetake:editorWidth",String(ze.getBoundingClientRect().width))};at.addEventListener("pointermove",a),at.addEventListener("pointerup",o,{once:!0})});at.addEventListener("dblclick",()=>{ze.style.removeProperty("--editor-w");try{localStorage.removeItem("slidetake:editorWidth")}catch{}});document.getElementById("btn-mode").onclick=Hr;document.getElementById("btn-present").onclick=()=>ge(!V);Rl="https://cdn.jsdelivr.net/npm/obs-websocket-js@5.0.5/dist/obs-ws.min.js",Lr=["ArrowRight","PageDown"," ","ArrowDown","Enter"],Mr=["ArrowLeft","PageUp","ArrowUp","r","R"],Or=["b","B","."],be=document.getElementById("review"),It=document.getElementById("rec-countdown"),Io=document.getElementById("rec-paused"),Ma=document.getElementById("obs-host"),Oa=document.getElementById("obs-port"),Aa=document.getElementById("obs-pass"),Ko=document.getElementById("obs-remember"),Ft=document.getElementById("obs-status"),ne=null,Me=!1,Ue=null,Jo=null,p={active:!1,withObs:!1,counting:!1,paused:!1,finishing:!1,t0:0,pauseAt:0,pausedMs:0,events:[],outputPath:null,browser:null},Ba=e=>new Promise(t=>setTimeout(t,e)),qt=()=>Promise.race([new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),Ba(100)]);zl="G-3S9FY4MQLS",$o=document.getElementById("analytics-dialog"),Dl=()=>H("slidetake:analytics")!=="off";$o.querySelectorAll("[data-analytics]").forEach(e=>e.onclick=()=>Fl(e.dataset.analytics==="on"));li=document.getElementById("btn-analytics");li.hidden=!/^(www\.)?slidetake\.com$/.test(location.hostname);li.onclick=()=>{si(),Xt($o)};document.querySelectorAll(".modal").forEach(e=>{e.addEventListener("click",t=>{(t.target===e||t.target.closest("[data-close]"))&&e.classList.remove("open")})});jl=e=>/^(localhost|127(\.\d+){3}|\[?::1\]?)$/i.test(e);Ul="This page is served over https, and browsers block it from reaching OBS on another computer (OBS only offers plain ws://). Run OBS on this computer and use localhost, or open Slidetake from a local copy: download dist/index.html from github.com/slidetake/slidetake and serve it with python3 -m http.server.";document.getElementById("obs-connect").onclick=di;Ko.addEventListener("change",ci);ql="https://cdn.jsdelivr.net/npm/mediabunny@1.64.0/+esm",Nt=document.getElementById("rec-cam"),pt=document.getElementById("rec-mic"),Wt=document.getElementById("rec-quality"),Po=document.getElementById("rec-meter"),ot=document.getElementById("rec-browser-check"),pi=H("slidetake:rec-mode")||"",xa="",ce=null;Ro=0;pt.onchange=()=>{K("slidetake:mic",pt.value),Ia(),Ge()};Nt.onchange=()=>{Gl(Nt.value),Nt.value!=="none"&&ae&&(un(),Je()),Ge()};Wl=()=>(D.pip||"none").toLowerCase()!=="none"||!!D.camera||[...h.values()].some(e=>e.camera),ui=()=>"slidetake:rec-cam:"+Ke();Wt.onchange=()=>K("slidetake:quality",Wt.value);Qo=()=>be.classList.contains("obs");document.getElementById("btn-record").onclick=()=>Ra();fi=e=>({width:e.w,height:e.h,aspectRatio:16/9,frameRate:Lt,resizeMode:"crop-and-scale"});jt=!1;Pe="";oc=e=>or(e,wi),nc=(e,t)=>nr(e,t,{input:e.outputPath||Pe||"recording.mov",outputName:Ke()+"-final.mp4",sectionOf:wi,loudness:We()}),ki=document.querySelectorAll(".rv-loud"),We=()=>H("slidetake:loudness")!=="off",xi=()=>ki.forEach(e=>{e.setAttribute("aria-pressed",String(We())),e.classList.toggle("on",We())}),zo=document.getElementById("rv-limiter"),Yt=()=>H("slidetake:limiter")==="on",Si=()=>{zo.setAttribute("aria-pressed",String(Yt())),zo.classList.toggle("on",Yt())};Si();zo.onclick=()=>{K("slidetake:limiter",Yt()?"off":"on"),Si()};Ei=()=>H("slidetake:mic-sound")==="voice"?"voice":"raw",Ci=e=>({...e?{deviceId:{ideal:e}}:{},echoCancellation:!1,autoGainControl:!1,noiseSuppression:Ei()==="voice"}),Ti=document.querySelectorAll("[data-sound]"),Li=()=>Ti.forEach(e=>{let t=e.dataset.sound===Ei();e.classList.toggle("active",t),e.setAttribute("aria-checked",String(t))});Li();Ti.forEach(e=>e.onclick=()=>{K("slidetake:mic-sound",e.dataset.sound),Li(),ce&&Ia()});xi();ki.forEach(e=>e.onclick=()=>{K("slidetake:loudness",We()?"off":"on"),xi(),N&&Ya()});N=null,Q=null,S=document.getElementById("rv-video"),At=document.getElementById("rv-now");Sa=-1,Mi=()=>{let e=va(b,Te).length;return e?e+"/"+b.length+" slide"+(e===1?"":"s")+" up for a take":""};Ai="";document.getElementById("rv-chapters").onclick=e=>Ii(e.currentTarget,Ai);document.getElementById("rv-ffmpeg-copy").onclick=e=>{!N||!N.events.length||(Ii(e.currentTarget,nc(N,document.getElementById("rv-mode").value)),A("Copied the ffmpeg command: run it in a terminal, in the folder with "+(et(N.outputPath)||"the recording")+"."))};xo=new Map,So=0;za=document.getElementById("rv-fps");za.onchange=()=>{N&&(N.fps=parseFloat(za.value),an(N),Ya())};Da=null;S.addEventListener("timeupdate",()=>{if(!Q)return;let e=Q.ranges[Q.i];if(S.currentTime*1e3<e.end)return;if(Q.i++,Q.i>=Q.ranges.length){S.pause(),Q=null,A("");return}let t=Q.ranges[Q.i];S.currentTime=t.start/1e3,A("\u25B6 "+t.title)});Ri=document.getElementById("rv-play-final"),nt=null;Ri.onclick=()=>{if(!N)return;if(!N.inBrowser){Fa(Tt(N).map(a=>({start:a.start,end:a.end,title:a.title})));return}if(F&&!F.single){S.paused?S.play().catch(()=>{}):S.pause();return}let e=Mt(N),t=Math.max(0,nt?e.findIndex(a=>a.id===nt):0);nt=null,Va(e.slice(t))};S.addEventListener("play",on);S.addEventListener("pause",()=>{F&&F.single&&S.currentTime<F.parts[0].keep-.05&&(nt=F.parts[0].id,A("Preview starts from "+F.parts[0].title.replace(/ · take \d+$/,"")+".")),on()});F=null;S.addEventListener("timeupdate",()=>{F&&S.currentTime>=F.parts[F.i].keep&&Di()});S.addEventListener("ended",()=>{F&&Di()});nn=document.getElementById("rv-render-btn");nn.onclick=()=>Ni(!1);Fi=0,Ne=e=>{clearTimeout(Fi),nn.textContent=e||"\u2193 Download"},Eo=e=>e.where?"\u201C"+e.where+"\u201D as "+e.name:"your downloads as "+e.name;lc=e=>{let t=a=>String(a).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+"-"+t(e.getMinutes())+"-"+t(e.getSeconds())};document.getElementById("rv-folder-change").onclick=async()=>{try{let e=await ji(!0);e&&A("Videos now go to "+e.name+".")}catch{}};B=null,Ir="",Pr=null,Te=new Set,_i=()=>"slidetake:board:"+Ke();ea=()=>K(_i(),JSON.stringify(B)),cc=e=>{let t=h.get(e);return t?ur(t.title+`
`+t.html):""},rn=()=>hr(b,e=>({title:h.get(e).title,fp:cc(e)}));ve=document.getElementById("rv-setup"),sn=document.getElementById("rv-setup-btn");ve.addEventListener("toggle",()=>{sn.setAttribute("aria-expanded",String(ve.open)),ve.open?ln():Ga()});sn.onclick=()=>{ve.open=!ve.open};be.addEventListener("click",e=>{(e.target===be||e.target.closest("[data-close]"))&&Ga()});Do=(()=>{let e=(navigator.userAgentData&&navigator.userAgentData.brands||[]).map(a=>a.brand).filter(a=>!/chromium|not.?a.?brand/i.test(a));if(e.length)return e[0].replace(/^(Google|Microsoft) /,"");let t=navigator.userAgent;return/Firefox\//.test(t)?"Firefox":/Edg\//.test(t)?"Edge":/OPR\//.test(t)?"Opera":/Chrome\//.test(t)?"Chrome":/Safari\//.test(t)?"Safari":"this browser"})();document.querySelectorAll(".browser-name").forEach(e=>{e.textContent=Do});document.getElementById("rv-rec").onclick=()=>{if(!Qo()){Ar("browser",va(b,Te));return}if(Me){Ar("obs");return}ve.open=!0,A("Connect to OBS first: Setup \u2192 OBS \u2192 Connect.",{warn:!0})};document.getElementById("rv-use-obs").onclick=()=>mi("obs");document.getElementById("rv-use-browser").onclick=()=>mi("browser");document.querySelectorAll(".rv-purge .rv-menu button").forEach(e=>e.addEventListener("click",()=>{e.closest("details").open=!1}));document.getElementById("rv-clean-unused").onclick=async()=>{let{rows:e}=Ui(),t=new Set(e.map(o=>o.pick).filter(Boolean)),a=B.takes.filter(o=>!t.has(o.uid));if(!a.length){A("Every take is in use.");return}confirm("Purge "+a.length+" take"+(a.length===1?"":"s")+" the video doesn\u2019t use (earlier attempts and outdated takes)?")&&(await uc(a),A("Purged "+a.length+" unused take"+(a.length===1?"":"s")+"."))};document.getElementById("rv-clean").onclick=async()=>{if(!B.takes.length||!confirm("Purge all "+B.takes.length+" takes of this deck from this browser? Download the video first if you need it."))return;let e=new Set(B.takes.map(t=>t.clip.split("/")[0]));B.takes=[],B.picks={},ea();for(let t of e)await en(t);S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),F=null,Qt(),A("All takes purged."),mt()};Pt=null,Fo=0,No=!1;S.addEventListener("error",async()=>{if(S.getAttribute("src")){if(Pt&&Fo<5){Fo++,A("Reloading "+Pe+" (OBS was still finishing it)\u2026"),await new Promise(e=>setTimeout(e,1500));try{ta(await Ja(Pt),Pt,!0);return}catch{}}A(Pt?"Chrome cannot play "+Pe+". In OBS set Recording Format to Hybrid MP4 (or MP4) with H.264 video; the ffmpeg command still works with this file.":"Could not play "+(Pe||"this file")+". If OBS was still finishing it when you opened it, open it again; if it still fails, set OBS to Hybrid MP4 (or MP4) with H.264 video.",{warn:!0})}});Rt=document.getElementById("rv-file-input");Rt.addEventListener("change",()=>{Rt.files[0]&&ta(Rt.files[0]),Rt.value=""});document.getElementById("rv-open").onclick=async()=>{if(!window.showOpenFilePicker)return Rt.click();try{let[e]=await window.showOpenFilePicker({id:"obs-recordings",types:[{description:"Recordings",accept:{"video/*":[".mov",".mp4",".m4v",".mkv",".webm"]}}]});A("Opening "+e.name+"\u2026"),ta(await Ja(e),e)}catch(e){(!e||e.name!=="AbortError")&&A("Could not open that file.",{warn:!0})}};Wi=document.getElementById("rv-folder");Wi.hidden=!window.showDirectoryPicker;Wi.onclick=async()=>{let e=N&&et(N.outputPath);try{let t=await window.showDirectoryPicker({id:"obs-recordings",mode:"read"});if(qi("obs-folder",t),!e){A("Folder remembered. This session has no file name from OBS; open the file instead.");return}let a=await t.getFileHandle(e);ta(await Ja(a),a)}catch(t){if(t&&t.name==="AbortError")return;A((e?e+" is not in that folder":"Could not read that folder")+". Use \u201COpen the recording file\u2026\u201D instead.",{warn:!0})}};Nl()&&new URLSearchParams(location.search).get("obs")&&di();Se=document.getElementById("btn-camera"),zt=document.getElementById("pip-msg"),Ea=null,Gi=P.querySelector("span");fc='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10.5 22 7v10l-6-3.5z"/></svg>';Se.onclick=()=>aa(oe);hn();Rr=null;window.addEventListener("pointermove",Vi);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(p.active?ut("Stopped: the browser left fullscreen"):V&&ge(!1))});Re=document.getElementById("help");document.getElementById("btn-keys").onclick=()=>Re.classList.add("open");document.getElementById("help-close").onclick=()=>Re.classList.remove("open");Re.addEventListener("click",e=>{e.target===Re&&Re.classList.remove("open")});window.addEventListener("keydown",e=>{if(e.key==="F5"){e.preventDefault(),p.active||Ra();return}if(p.active){Ql(e);return}if(document.querySelector(".modal.open")){e.key==="Escape"&&Wa();return}let t=document.activeElement&&document.activeElement.tagName;if(t==="TEXTAREA"||t==="INPUT"||e.metaKey||e.ctrlKey||e.altKey)return;if(Re.classList.contains("open")){/^(Escape|k|K|\?)$/.test(e.key)&&Re.classList.remove("open");return}let a=e.key;a==="ArrowRight"||a===" "||a==="PageDown"?(e.preventDefault(),Ie(1)):a==="ArrowLeft"||a==="PageUp"?(e.preventDefault(),Ie(-1)):a==="ArrowDown"?(e.preventDefault(),Il()):a==="ArrowUp"?(e.preventDefault(),Bl()):a==="Home"?b.length&&_(b[0]):a==="End"?b.length&&_(b[b.length-1]):a==="o"||a==="O"?Al():a==="e"||a==="E"?qa():a==="f"||a==="F"||a==="p"||a==="P"?ge(!V):a==="r"||a==="R"?Ra():/^[1-4]$/.test(a)?Ha(Ho[+a-1]):a==="c"||a==="C"?aa(oe):a==="v"||a==="V"?qs():a==="l"||a==="L"?Hr():a==="+"||a==="="?Cr(1):a==="-"||a==="_"?Cr(-1):a==="?"||a==="k"||a==="K"?Re.classList.add("open"):a==="Escape"&&!oi()&&V&&ge(!1)});window.addEventListener("hashchange",()=>{let{data:e,slide:t}=sa(location.hash);if(e&&!(E&&E.kind==="share"&&e===E.data)){location.reload();return}t&&t!==m&&h.has(t)&&_(t)});zr="";new ResizeObserver(()=>{let e=j.clientWidth+"x"+j.clientHeight;e!==zr&&(zr=e,lt(),we(!0))}).observe(j);it=document.createElement("div");it.id="toast";it.setAttribute("role","status");document.body.appendChild(it);Dr=null;gc=document.getElementById("open-dialog"),_o=document.getElementById("open-url"),Uo=document.getElementById("open-error");document.getElementById("btn-load").onclick=()=>{Uo.hidden=!0,Xt(gc),_o.focus(),_o.select()};document.getElementById("open-form").onsubmit=e=>{e.preventDefault();let t=Wn(_o.value);if(!t){Uo.textContent="That doesn't look like a link.",Uo.hidden=!1;return}location.href=jo(t)};document.getElementById("btn-share").onclick=async()=>{let{link:e,inside:t}=await bc(m&&m!==b[0]?m:""),a=t?"Link copied, with the whole deck inside it ("+(e.length/1024).toFixed(1)+" KB)"+(e.length>8e3?". Some chat apps cut long links short: a GitHub file or gist makes a shorter one.":"."):"Link copied.";try{await navigator.clipboard.writeText(e),Vt(a,5e3)}catch{prompt("Copy this link:",e)}E.kind==="copy"&&(I.exported=I.text,oa(),wt())};Fr=H("slidetake:layout");Y=Ho.includes(Fr)?Fr:"path";document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===Y));Na=new URLSearchParams(location.search);Ho.includes(Na.get("layout"))&&(Y=Na.get("layout"),document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===Y)));if(U){let e=(Array.isArray(U.trail)?U.trail:U.back?[U.back]:[]).filter(n=>n&&n.label),t=document.querySelector("header .brand");e.length&&(t.innerHTML='<nav class="trail" aria-label="Site">'+e.map((n,r)=>(r?'<span class="sep" aria-hidden="true">|</span>':"")+(n.url?'<a href="'+O(n.url)+'">'+O(n.label)+"</a>":"<span>"+O(n.label)+"</span>")).join("")+"</nav>");let a=document.createElement("a");a.id="credit",a.href="https://slidetake.com",a.target="_blank",a.rel="noopener",a.title="Made with Slidetake",a.setAttribute("aria-label","Made with Slidetake"),a.innerHTML=_r+'<span class="word">Slide<span>take</span></span>';let o=document.querySelector("header .hdr-actions");o.insertBefore(a,o.firstChild),ft||(o.insertAdjacentHTML("beforeend",'<button class="btn" id="hdr-keys" title="Keyboard shortcuts (K)">\u2328 Keys</button><button class="btn" id="hdr-full" title="Fullscreen (F)">\u26F6 Fullscreen</button>'),document.getElementById("hdr-keys").onclick=()=>document.getElementById("help").classList.add("open"),document.getElementById("hdr-full").onclick=()=>ge(!V))}Z=Jn(location.pathname,location.search,location.hash),Nr=Z.page==="pick"?"":Z.slide,E=null,I=$n(H("slidetake:copy"))||vc();window.addEventListener("popstate",()=>location.reload());de&&window.EventSource&&(new EventSource(de.events).onmessage=async e=>{if(!mn())return;let t=(JSON.parse(e.data).file||"").replace(/\\/g,"/");if(t===de.file){let a=await(await fetch(de.deck,{cache:"no-store"})).text();if(a===re.value)return;re.value=E.text=a,dt(!0);return}ie.querySelectorAll("img").forEach(a=>{let o=new URL(a.src);decodeURIComponent(o.pathname).endsWith("/"+t)&&(o.searchParams.set("t",String(Date.now())),a.src=o.href)})});(Na.get("edit")==="1"||Z.page==="edit"&&I&&Na.get("edit")!=="0")&&qa();Sc().then(e=>(re.value=e,wt(),Wr(re.value),Jr(),document.fonts?document.fonts.ready:null)).then(()=>{h.forEach(_a),Kt(),_(h.has(Nr)?Nr:b[0],!0)})});var gn=`  /* Every colour comes from these tokens. Slidetake's own is seafoam green: bright on zinc in dark mode,
     deep on white in light mode. A host page passes its own (window.SLIDETAKE.colors) and a deck can carry
     its own (accent: in its top block); see applyColors in app.js. */
  :root{
    --bg:#09090b;
    --grid-dot:#1d1d21;
    --panel:#111113;
    --panel-line:#27272a;
    --node-bg:#18181b;
    --node-border:#323238;
    --accent:#29b685;                  /* 6.9:1 on the card: an accent, kept below body text so it doesn't glare */
    --accent-teal:#3bc493;              /* headings below h2 */
    --text:#e4e4e7;
    --text-muted:#a1a1aa;
    --danger:#e0645c;
    --code-bg:#0f0f12;
    --overlay:rgba(17,17,19,.9);       /* breadcrumbs, nav bar, minimap */
    --on-accent:#022c22;               /* text on an accent-filled button */
    --card-shadow:0 6px 24px rgba(0,0,0,.35);
    --brand-shadow:0 1px 6px rgba(0,0,0,.6);
    --mono: 'IBM Plex Mono', ui-monospace, monospace;
    --display: 'Space Grotesk', sans-serif;
    --body: 'IBM Plex Sans', sans-serif;
  }
  /* Tokens derived from others are declared on body, not :root: a custom property resolves var() where
     it is declared, so on :root these would freeze the default palette's colours. */
  body{
    --accent-line:#047857;             /* borders and connector lines on the active path */
    --accent-ring:var(--accent);        /* the current slide's border, glow and the progress bar */
    --edge:var(--node-border);          /* connector lines off the active path */
    --header-bg:none;                   /* a host's band of colour behind the header (an image layer) */
    --header-ink:var(--text);           /* text on that band */
  }
  /* Light mode (L, mode: light, ?mode=light): #047857 carries text (5.5:1 on white); the brighter seafoam
     only rings and lines, which never need to be read. */
  body[data-mode="light"]{
    --bg:#fafaf9; --grid-dot:#e7e5e4; --panel:#ffffff; --panel-line:#e4e4e7;
    --node-bg:#ffffff; --node-border:#e4e4e7; --edge:#d4d4d8;
    --accent:#047857; --accent-teal:#065f46; --accent-line:#34d399; --accent-ring:#10b981;
    --text:#27272a; --text-muted:#71717a; --danger:#c2410c;
    --code-bg:#f4f4f5; --overlay:rgba(255,255,255,.92); --on-accent:#ffffff;
    --card-shadow:0 4px 18px rgba(24,24,27,.08); --brand-shadow:0 1px 4px rgba(255,255,255,.9);
  }
  body[data-mode="light"] .node .body pre code{color:var(--text);}
  body[data-mode="light"] #help, body[data-mode="light"] .modal{background:rgba(24,24,27,.45);}
  *{box-sizing:border-box;}
  html,body{height:100%;margin:0;}
  body{
    background:var(--bg);
    color:var(--text);
    font-family:var(--body);
    overflow:hidden;
    display:flex;
    flex-direction:column;
  }
  ::selection{background:var(--accent);color:var(--on-accent);}
  :focus-visible{outline:2px solid var(--accent);outline-offset:2px;}
  button{font-family:var(--mono);}

  /* ---------- header ---------- */
  header{
    min-height:56px;flex:none;
    display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;
    padding:8px 16px;
    background:var(--header-bg), var(--panel);
    border-bottom:1px solid var(--panel-line);
    z-index:20;
  }
  /* a host's coloured header band: its own ink for the text, buttons and borders on it */
  body.st-header-color header{color:var(--header-ink);border-bottom-color:transparent;
    --text:var(--header-ink);--text-muted:color-mix(in srgb, var(--header-ink) 72%, transparent);
    --node-border:color-mix(in srgb, var(--header-ink) 28%, transparent);}
  .brand{display:flex;align-items:baseline;gap:10px;}
  /* the name and the links beside it share one baseline: the mark's baseline is its word's, the logo centred beside it */
  .brand .mark{font-family:var(--display);font-weight:700;font-size:17px;letter-spacing:.02em;color:inherit;text-decoration:none;display:inline-flex;align-items:center;gap:7px;}
  .brand .mark .word{align-self:baseline;}
  .brand .mark .logo{width:20px;height:20px;fill:var(--accent);flex:none;align-self:center;}
  .brand .mark .word > span{color:var(--accent);}
  /* Slidetake's two-tone name in its own decks' titles, as in the header */
  .node .body .st-take{color:var(--accent);}
  /* the Record button's red, where a deck names the button; deeper on white so it reads */
  .node .body .st-rec{color:#f87171;}
  body[data-mode="light"] .node .body .st-rec{color:#dc2626;}
  /* a heart in the deck's own colour, where an emoji would keep its fixed green */
  .node .body .st-heart{display:inline-block;width:.9em;height:.9em;vertical-align:-.08em;background:var(--accent);
    -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54z'/%3E%3C/svg%3E") center/contain no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54z'/%3E%3C/svg%3E") center/contain no-repeat;}
  /* Features, Showcase, Docs and GitHub (what it is, see it, how to use it, the source) sit with the name:
     they're about Slidetake, not about the deck on screen */
  .brand .site-links{display:flex;align-items:center;gap:16px;align-self:center;margin-left:8px;}
  .brand .site-link{font-family:var(--mono);font-size:13px;color:var(--text-muted);text-decoration:none;display:inline-flex;align-items:center;}
  .brand .site-link:hover, .brand .site-link:focus-visible{color:var(--accent);}
  .brand .site-link svg{width:15px;height:15px;display:block;margin-right:5px;}
  .hdr-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
  /* Buttons come in four kinds, and only these:
     1. a button: a grey outline that turns accent on hover; regular (32px) or .small (24px); .icon makes it square
     2. an accent button (.primary, and .rec in red): the one main action of a dialog or bar. Coloured text, the
        same grey outline as any button, filling with its colour on hover
     3. selected (.toggle.on, .seg-btn.active, .rv-chip.on, a chosen card): the accent outline on a light accent tint
     4. bare (.close, the deck's floating bar): no outline at all */
  .btn{
    background:transparent;color:var(--text);
    border:1px solid var(--node-border);border-radius:6px;box-sizing:border-box;
    height:32px;padding:0 12px;font-size:12px;letter-spacing:.02em;white-space:nowrap;cursor:pointer;
    display:inline-flex;align-items:center;justify-content:center;gap:6px;
    transition:border-color .15s, color .15s, background .15s;
  }
  .btn.small{height:24px;padding:0 9px;font-size:11px;}
  .btn.icon{width:32px;padding:0;}
  .btn.small.icon{width:24px;}
  .btn.icon svg{width:15px;height:15px;display:block;}
  .btn .ico{font-size:1.1em;line-height:1;}
  a.btn{text-decoration:none;}
  .btn:hover:not(:disabled){border-color:var(--accent);color:var(--accent);}
  .btn:disabled{opacity:.4;cursor:not-allowed;}
  .btn.primary{color:var(--accent);}
  .btn.primary:hover:not(:disabled){background:var(--accent);border-color:var(--accent);color:var(--on-accent);}
  .btn.rec{color:#f87171;}
  .btn.rec:hover:not(:disabled){background:#b91c1c;border-color:#b91c1c;color:#fff;}
  .btn.toggle{color:var(--text-muted);}
  .btn.active, .btn.toggle.on, .seg-btn.active{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  .seg{display:inline-flex;height:32px;box-sizing:border-box;border:1px solid var(--node-border);border-radius:6px;overflow:hidden;}
  .seg-btn{
    background:transparent;border:none;color:var(--text-muted);font-family:var(--mono);height:100%;
    font-size:12px;padding:0 12px;cursor:pointer;display:flex;align-items:center;transition:background .15s,color .15s;
  }
  .seg-btn:hover{color:var(--accent);}

  /* ---------- main layout ---------- */
  main{flex:1;display:flex;min-height:0;}
  /* the editor sits on the right; its width is dragged with #editor-resizer and remembered */
  #editor-pane{
    width:var(--editor-w, 38%);min-width:280px;max-width:75vw;
    display:flex;flex-direction:column;
    background:var(--panel);border-left:1px solid var(--panel-line);
    transition:width .25s ease, min-width .25s ease, opacity .2s ease;
    overflow:hidden;
  }
  #editor-pane.collapsed{width:0;min-width:0;opacity:0;border-left:none;}
  main.resizing #editor-pane{transition:none;}
  main.resizing{cursor:col-resize;user-select:none;}
  #editor-resizer{flex:none;width:6px;margin-right:-3px;margin-left:-3px;z-index:5;cursor:col-resize;position:relative;}
  #editor-resizer:hover, main.resizing #editor-resizer{background:var(--accent-line, var(--accent));opacity:.6;}
  #editor-resizer:has(+ #editor-pane.collapsed){display:none;}
  .pane-bar{flex:none;display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px 8px 14px;border-bottom:1px solid var(--panel-line);}
  .pane-actions{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;}
  #doc-state{text-transform:none;letter-spacing:.02em;font-size:11px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  #doc-state .ro{color:var(--text-muted);}
  #doc-state .mine{color:var(--text);}
  #doc-state .edited{color:var(--accent);}
  #continue{color:var(--accent);border-color:var(--accent-line);}
  #continue[hidden]{display:none;}
  #btn-analytics[hidden]{display:none;}
  .modal ul.templates{list-style:none;padding:0;display:grid;gap:8px;margin:12px 0;}
  .modal ul.templates a{display:flex;flex-direction:column;gap:2px;padding:10px 12px;border:1px solid var(--panel-line);border-radius:8px;text-decoration:none;color:var(--text);}
  .modal ul.templates a:hover{border-color:var(--accent);}
  .modal ul.templates span{font-size:12px;color:var(--text-muted);}
  /* the analytics choice: two cards, the chosen one in the accent */
  .modal .choices{display:grid;gap:8px;margin:12px 0;}
  /* a choice card (analytics on or off; recording in the browser or with OBS): the chosen one looks selected */
  .modal .choice{padding:10px 12px;border:1px solid var(--panel-line);border-radius:8px;background:transparent;color:var(--text);font:inherit;cursor:pointer;}
  .modal .choice:hover{border-color:var(--accent);}
  .modal .choice[aria-checked="true"]{border-color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  .modal .choice{display:flex;flex-direction:column;gap:4px;text-align:left;}
  .modal .choice strong{font-family:var(--display);font-size:14px;}
  .modal .choice span{font-size:12px;line-height:1.55;color:var(--text-muted);}
  .modal .note{font-size:12px;}
  #editor-pane.unsaved .pane-bar{box-shadow:inset 0 -2px 0 var(--accent);}
  #editor-pane.unsaved #btn-share, #editor-pane.unsaved #btn-save{color:var(--accent);}
  .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}
  .pane-label{
    font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;
    color:var(--text-muted);flex:none;
  }
  #editor{
    flex:1;resize:none;border:none;outline:none;padding-top:10px !important;
    background:var(--panel);color:var(--text);
    font-family:var(--mono);font-size:12.5px;line-height:1.65;
    padding:0 14px 14px;tab-size:2;
  }
  #status-line{
    flex:none;padding:6px 14px;font-family:var(--mono);font-size:11px;
    color:var(--text-muted);border-top:1px solid var(--panel-line);
    display:flex;justify-content:space-between;gap:10px;
  }
  #status-line .err{color:var(--danger);}
  #btn-reset{background:none;border:none;color:var(--text-muted);font-size:11px;cursor:pointer;padding:0;text-decoration:underline;}
  #btn-reset:hover{color:var(--accent);}

  body.presenting header, body.presenting #editor-pane, body.presenting #editor-resizer{display:none;}
  #breadcrumbs, #navbar, #minimap{transition:opacity .4s;}
  body.presenting.idle #breadcrumbs, body.presenting.idle #navbar, body.presenting.idle #minimap{opacity:0;pointer-events:none;}
  body.presenting.idle, body.presenting.idle *{cursor:none !important;}

  /* ---------- stage ---------- */
  #stage-wrap{flex:1;position:relative;overflow:hidden;}
  #stage{
    position:absolute;inset:0;
    background-color:var(--bg);
    background-image:radial-gradient(var(--grid-dot) 1.2px, transparent 1.2px);
    background-size:28px 28px;
    overflow:hidden;cursor:grab;touch-action:none;
  }
  #stage.dragging{cursor:grabbing;user-select:none;}
  #world{position:absolute;left:0;top:0;transform-origin:0 0;}
  #connectors{position:absolute;left:0;top:0;overflow:visible;pointer-events:none;}
  #connectors path{fill:none;stroke:var(--edge);stroke-width:1.5;transition:stroke .2s;}
  #connectors path.active{stroke:var(--accent-line);stroke-width:2;}

  div.node{ /* div: Graphviz also puts class="node" on its SVG shapes */
    position:absolute;left:0;top:0;width:440px;
    /* centre of the card sits at (--cx, --cy); --push is Focus's settle-in scale */
    transform:translate(calc(var(--cx,0) * 1px), calc(var(--cy,0) * 1px)) scale(var(--push,1)) translate(-50%,-50%);
    transform-origin:0 0; /* the last translate puts the card centre at 0,0, so the scale pivots on it */
    background:var(--node-bg);
    border:1px solid var(--node-border);border-radius:8px;
    padding:16px 18px 18px;cursor:pointer;
    box-shadow:var(--card-shadow);
    transition:border-color .18s, box-shadow .18s, opacity .3s;
  }
  /* Focus: every card sits at the same spot and only the current one shows; the next fades in with
     a slight push-in instead of the camera travelling */
  /* other cards vanish at once (no stacked fade on load or layout change); only the slide just left
     fades out, beneath the incoming one */
  #world.focus div.node{transition:none;}
  #world.focus div.node:not(.current){opacity:0;pointer-events:none;}
  #world.focus div.node.current{z-index:2;transition:opacity .55s ease, transform .8s cubic-bezier(.2,.7,.2,1), border-color .18s;}
  #world.focus div.node.leaving{z-index:1;transition:opacity .45s ease;}
  #world.focus div.node.entering{--push:.96;transition:none;}
  #world.focus #connectors{display:none;}
  /* progress: one continuous bar that moves with every press, reveals and camera steps included */
  #progress{position:absolute;left:0;right:0;bottom:0;height:5px;z-index:9;display:none;
    background:color-mix(in srgb, var(--text-muted) 22%, transparent);}
  #progress.show{display:block;}
  #progress i{position:absolute;inset:0 auto 0 0;width:0;background:var(--accent-ring);transition:width .5s ease;}
  /* talk timer on the same bar, in the same colour: the clock grows a half-strength layer behind the
     solid progress, so any half-strength stretch showing past the solid is how far behind the talk is */
  #progress b{position:absolute;inset:0 auto 0 0;width:0;background:color-mix(in srgb, var(--accent-ring) 50%, transparent);transition:width 1s linear;display:none;}
  #progress.timed b{display:block;}
  #progress.over b{animation:over 1.4s ease-in-out infinite;}
  @keyframes over{50%{opacity:.45;}}
  #world.morph div.node{transition:transform .65s cubic-bezier(.65,0,.35,1), border-color .18s, opacity .3s;}
  .node .body{overflow-wrap:anywhere;word-break:break-word;}
  /* only the current slide is ringed in the accent; hover and the route back to the root are faint tints */
  /* hover never touches the current slide, or its border would sit inside the ring as a second line */
  .node:not(.current):hover{border-color:color-mix(in srgb, var(--accent-line) 35%, var(--node-border));}
  body.presenting .node:not(.current):hover{border-color:var(--node-border);}
  /* cards take focus on click; the current-slide ring already marks them, so no second outline
     (Chrome re-shows :focus-visible when the window regains focus) */
  .node:focus-visible{outline:none;}
  .node:not(.current):focus-visible{border-color:var(--accent-line);}
  .node.current{border-color:var(--accent-ring);box-shadow:0 0 0 1px var(--accent-ring), 0 10px 34px color-mix(in srgb, var(--accent-ring) 22%, transparent);}
  .node.active-path:not(.current){border-color:color-mix(in srgb, var(--accent-line) 30%, var(--node-border));}
  .node .crumb{
    font-family:var(--mono);font-size:10px;color:var(--text-muted);overflow-wrap:anywhere;
    letter-spacing:.06em;margin-bottom:8px;text-transform:uppercase;
  }
  .node .body h1,.node .body h2,.node .body h3,.node .body h4,.node .body h5,.node .body h6{
    font-family:var(--display);color:var(--text);margin:0 0 8px;line-height:1.25;
  }
  .node .body h1{font-size:19px;}
  .node .body h2{font-size:16px;}
  .node .body h3{font-size:14px;color:var(--accent-teal);}
  .node .body h4,.node .body h5,.node .body h6{font-size:13px;color:var(--accent-teal);}
  .node .body p{margin:0 0 10px;font-size:13px;line-height:1.6;}
  .node .body > :last-child{margin-bottom:0;}
  .node .body ul,.node .body ol{margin:0 0 10px;padding-left:18px;font-size:13px;line-height:1.6;}
  .node .body li{margin-bottom:3px;}
  .node .body blockquote{margin:0 0 10px;padding-left:10px;border-left:2px solid var(--accent);color:var(--text-muted);font-size:13px;}
  .node .body img{max-width:100%;border-radius:4px;}
  .node .body table{border-collapse:collapse;font-size:12px;margin:0 0 10px;}
  .node .body th,.node .body td{border:1px solid var(--panel-line);padding:3px 7px;}
  .node .body code{
    font-family:var(--mono);background:var(--code-bg);border:1px solid var(--panel-line);
    padding:1px 5px;border-radius:4px;font-size:12px;color:var(--accent-teal);
  }
  .node .body pre{
    background:var(--code-bg);border:1px solid var(--panel-line);border-radius:6px;
    padding:10px 12px;overflow-x:auto;margin:0 0 10px;
  }
  .node .body pre code{border:none;background:none;padding:0;color:var(--text);}
  .node .body strong{color:var(--accent);}
  .node .body a{color:var(--accent-teal);}
  .node .body a.xlink::after{content:" \u2197";font-size:10px;}
  .node .err-badge{
    position:absolute;top:-8px;right:-8px;background:var(--danger);color:#1a0a08;
    font-family:var(--mono);font-size:10px;padding:2px 7px;border-radius:20px;font-weight:600;
  }

  /* ---------- recording ---------- */
  .modal{position:fixed;inset:0;background:rgba(4,7,13,.72);z-index:50;display:none;align-items:center;justify-content:center;padding:16px;}
  .modal.open{display:flex;}
  .modal .panel{
    position:relative;width:min(620px,100%);max-height:88vh;overflow-y:auto;
    background:var(--panel);border:1px solid var(--panel-line);border-radius:12px;padding:24px 26px;
  }
  .modal .panel.wide{width:min(760px,100%);}
  .modal h2{font-family:var(--display);font-size:18px;margin:0 0 6px;color:var(--accent);}
  .modal h3{font-family:var(--display);font-size:13px;margin:18px 0 8px;color:var(--text);display:flex;align-items:center;gap:10px;}
  .modal p, .modal li{font-size:13px;line-height:1.6;color:var(--text-muted);margin:0 0 6px;}
  .modal ul{padding-left:18px;margin:0;}
  /* \u2715 Close: a regular button at the top right, on the title's line (with \u2699 Setup beside it on the board) */
  .modal .panel > .close, .modal .panel-actions{position:absolute;top:20px;right:24px;}
  .modal .panel-actions{display:flex;gap:8px;}
  .modal h2{padding-right:96px;}
  .modal .fields{display:grid;grid-template-columns:2fr 1fr 2fr;gap:10px;}
  #open-form{display:flex;gap:8px;margin:12px 0 6px;}
  #help table.keys{border-collapse:collapse;margin:6px 0 12px;font-size:13px;}
  #help table.keys td{padding:5px 14px 5px 0;color:var(--text-muted);vertical-align:top;}
  #help table.keys td:first-child{white-space:nowrap;}
  #help a{color:var(--accent);}
  #open-url{flex:1;min-width:0;}
  .modal p.warn{color:var(--danger);}
  #toast{position:fixed;left:50%;top:64px;transform:translateX(-50%) translateY(-8px);opacity:0;pointer-events:none;z-index:60;
    background:var(--panel, #18181b);color:var(--text);border:1px solid var(--accent-line, var(--accent));border-radius:8px;
    padding:8px 14px;font-family:var(--mono);font-size:12px;transition:opacity .2s, transform .2s;max-width:min(560px,calc(100vw - 32px));}
  #toast.show{opacity:1;transform:translateX(-50%);}
  .modal label{display:flex;flex-direction:column;gap:4px;font-family:var(--mono);font-size:11px;color:var(--text-muted);}
  .modal label.check{flex-direction:row;align-items:center;gap:8px;margin-top:10px;}
  .modal input[type=text], .modal input[type=password], .modal textarea{
    background:var(--code-bg);border:1px solid var(--node-border);border-radius:6px;color:var(--text);
    font-family:var(--mono);font-size:12.5px;padding:8px 10px;outline:none;
  }
  .modal input:focus, .modal textarea:focus{border-color:var(--accent);}
  .modal textarea{width:100%;resize:vertical;line-height:1.6;}
  .modal .row{display:flex;align-items:center;gap:10px;margin-top:12px;flex-wrap:wrap;}
  .modal .row.end{justify-content:flex-end;margin-top:20px;}
  #obs-status{font-family:var(--mono);font-size:12px;color:var(--text-muted);white-space:nowrap;}
  #obs-detail{color:var(--danger);}
  #obs-status.ok, #rec-screen .ok{color:#10b981;}
  #rec-screen a{color:inherit;text-decoration:underline;}
  #obs-status.err{color:var(--danger);}
  .modal .warn{color:var(--accent);}
  @media (max-width:560px){ .modal .fields{grid-template-columns:1fr;} }
  #navbar #btn-record{color:#f87171;}
  #navbar #btn-record:hover{color:#fff;background:#b91c1c;}
  #navbar #btn-present{color:var(--accent);}
  /* camera: a grey camera when off; green, with a live dot, when on */
  #btn-camera{display:inline-flex;align-items:center;gap:6px;}
  #btn-camera svg{display:block;}
  #navbar #btn-camera.on{color:#22c55e;}
  /* while a take runs nothing but the slides and the camera is on screen */
  body.recording #breadcrumbs, body.recording #navbar, body.recording #minimap, body.recording #pip-msg{display:none !important;}
  body.recording, body.recording *{cursor:none !important;}
  /* a retake's jump back to the slide before: no transition may ease it into place */
  body.no-anim *, body.no-anim *::before, body.no-anim *::after{transition:none !important;animation:none !important;}
  /* recording in the browser: the deck in a 16:9 frame, the only part captured. Chrome captures an element
     only while it is its own stacking context, hence the isolation (without it the capture is silently empty). */
  body.rec-frame main{background:#000;}
  body.rec-frame #stage-wrap{flex:none;margin:auto;width:min(100%, calc(100vh * 16 / 9));aspect-ratio:16/9;isolation:isolate;}
  #review.in-browser #rv-novideo{display:none !important;}
  /* the takes screen records in this browser, or with OBS: each mode's own controls */
  #review.obs .for-browser, #review:not(.obs) .for-obs{display:none !important;}
  #rec-countdown{
    position:fixed;inset:0;z-index:70;display:none;align-items:center;justify-content:center;flex-direction:column;gap:14px;
    background:rgba(4,7,13,.9);font-family:var(--display);color:var(--accent);
  }
  #rec-countdown.show{display:flex;}
  #rec-countdown .num{font-size:180px;font-weight:700;line-height:1;}
  #rec-countdown .hint{font-family:var(--mono);font-size:13px;color:var(--text-muted);}
  #rec-paused{
    position:fixed;inset:0;z-index:70;display:none;align-items:center;justify-content:center;
    background:rgba(4,7,13,.94);font-family:var(--mono);font-size:15px;color:var(--text-muted);letter-spacing:.06em;
  }
  #rec-paused.show{display:flex;}
  .modal .panel.xwide{width:min(1480px,100%);max-height:94vh;}
  /* scrollbars: thin, in the accent */
  .modal .panel, .rv-list, .modal textarea{scrollbar-width:thin;scrollbar-color:color-mix(in srgb, var(--accent) 45%, transparent) transparent;}
  /* the player and the take list side by side, the list exactly as tall as the player (it scrolls inside that);
     play and download under both */
  .rv-grid{display:grid;grid-template-columns:minmax(0,7fr) minmax(280px,3fr);grid-template-areas:"video list" "bar dl";
    column-gap:18px;margin-top:12px;}
  .rv-grid > div:first-child{display:contents;}
  .rv-video{grid-area:video;}
  .rv-list{grid-area:list;contain:size;}
  .rv-bar{grid-area:bar;display:flex;align-items:center;gap:10px;margin-top:12px;min-width:0;}
  .rv-purge{position:relative;}
  .rv-purge summary{list-style:none;font-family:var(--mono);}
  .rv-purge summary::-webkit-details-marker{display:none;}
  .rv-purge .rv-menu{position:absolute;left:0;top:calc(100% + 6px);display:flex;flex-direction:column;gap:6px;padding:8px;z-index:3;
    background:var(--panel);border:1px solid var(--panel-line);border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.35);white-space:nowrap;}
  /* the take board: every slide, a box to select it for recording, its takes */
  .rv-row.with-sel{display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:10px;align-items:start;}
  .rv-row .rv-sel{margin:3px 0 0;accent-color:var(--accent);}
  .rv-row.selected{background:color-mix(in srgb, var(--accent) 7%, transparent);}
  .rv-row.playing{box-shadow:inset 3px 0 0 var(--accent);}
  .rv-chip.outdated{opacity:.6;text-decoration:line-through;}
  .rv-none{font-size:12px;color:var(--text-muted);font-style:italic;}
  /* Recording setup: opened from the \u2699 Setup button at the top right, shown under the title */
  .modal .rv-setup-btn[aria-expanded="true"]{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  #rv-setup{margin:12px 0 12px;border:1px solid var(--panel-line);border-radius:8px;padding:10px 14px;}
  #rv-setup > summary{display:none;}
  #rv-setup:not([open]){display:none;}
  #review h2.rv-brand{display:flex;align-items:center;gap:8px;color:var(--text);}
  #review h2.rv-brand .logo{width:22px;height:22px;fill:var(--accent);flex:none;}
  #review h2.rv-brand .word > span{color:var(--accent);}
  .rv-using{align-self:center;max-width:34vw;font-family:var(--mono);font-size:12px;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  #review h2{padding-right:calc(34vw + 200px);}
  @media (max-width:900px){ .rv-using{display:none;} #review h2{padding-right:190px;} }
  /* three sections side by side: Camera, Microphone, Video; Use OBS at the top right */
  .rv-setup-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--panel-line);}
  .rv-setup-head h4{margin:0;font-family:var(--display);font-size:13px;color:var(--text-muted);}
  .rv-setup-cols{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:18px;}
  .rv-setup-cols section{display:flex;flex-direction:column;gap:8px;min-width:0;}
  .rv-setup-cols h4{margin:0;font-family:var(--display);font-size:13px;color:var(--text);}
  .rv-setup-cols select{width:100%;}
  .rv-setup-cols #rv-fps{width:auto;}
  .rv-setup-cols meter{width:100%;height:8px;}
  .rv-setup-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}
  .rv-setup-gap{flex:1}
  .rv-obs-fields{display:grid;grid-template-columns:minmax(0,1.2fr) 60px minmax(0,1fr);gap:6px;}
  .modal .rv-obs-fields input{width:100%;min-width:0;font-size:11.5px;padding:4px 8px;}
  .rv-setup-foot{display:flex;flex-wrap:wrap;align-items:center;gap:8px 16px;margin-top:14px;padding-top:10px;border-top:1px solid var(--panel-line);}
  .modal .rv-setup-foot label{flex-direction:row;align-items:center;gap:8px;margin:0;}
  .rv-setup-foot select{width:auto;}
  .modal .rv-setup-row label.check{gap:6px;margin:0;}
  .rv-setup-label{font-size:12px;color:var(--text-muted);}
  .seg.small{height:24px;}
  .seg.small .seg-btn{font-size:11px;padding:0 10px;}
  .rv-setup-note{margin:0;font-size:12px;color:var(--text-muted);line-height:1.5;}
  #rv-setup > .rv-setup-note{margin-top:12px;}
  @media (max-width:900px){ .rv-setup-cols{grid-template-columns:1fr;} }
  .rv-final{font-family:var(--mono);font-size:12px;color:var(--text-muted);white-space:nowrap;}
  /* under the takes: the final cut's size, and Download */
  .rv-dl{grid-area:dl;display:flex;align-items:center;justify-content:flex-end;gap:10px;margin-top:12px;}
  #rv-chapters{margin-right:auto;min-width:112px;}
  /* Preview and Pause: one width, so the button doesn't change size as it switches */
  .btn.rv-preview{min-width:104px;}
  @media (max-width:900px){
    .rv-grid{grid-template-columns:1fr;grid-template-areas:"video" "bar" "list" "dl";}
    .rv-list{contain:none;max-height:50vh;margin-top:12px;}
  }
  .rv-video{position:relative;background:#000;border-radius:8px;overflow:hidden;aspect-ratio:16/9;}
  .rv-video video{width:100%;height:100%;display:block;}
  #rv-novideo{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;text-align:center;}
  #rv-novideo[hidden]{display:none;}
  /* the preview's message, right before Preview */
  #rv-now{flex:1;min-width:0;text-align:right;font-family:var(--mono);font-size:12px;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  #rv-now.warn{color:var(--danger);}
  #rv-now .btn{vertical-align:middle;margin-right:6px;}
  #rv-render-btn, #rv-ffmpeg-copy{min-width:120px;}
  .rv-list{overflow-y:auto;border:1px solid var(--panel-line);border-radius:8px;}
  .rv-row{padding:9px 12px;border-bottom:1px solid var(--panel-line);}
  .rv-row:last-child{border-bottom:none;}
  .rv-row .t{font-size:12.5px;color:var(--text);margin-bottom:6px;display:flex;justify-content:space-between;gap:8px;}
  .rv-row .t small{font-family:var(--mono);color:var(--text-muted);font-size:10.5px;white-space:nowrap;}
  .rv-row.sec .t{color:var(--accent-teal);}
  .rv-chips{display:flex;flex-wrap:wrap;gap:6px;}
  .rv-chip{background:transparent;border:1px solid var(--node-border);color:var(--text-muted);border-radius:20px;
    font-family:var(--mono);font-size:11px;padding:3px 10px;cursor:pointer;}
  .rv-chip:hover{border-color:var(--accent);color:var(--accent);}
  .rv-chip.on{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  .rv-chip.skip.on{border-color:var(--danger);color:var(--danger);background:rgba(224,100,92,.1);}
  .modal select{background:var(--code-bg);border:1px solid var(--node-border);border-radius:6px;color:var(--text);font-family:var(--mono);font-size:11.5px;padding:4px 8px;}

  /* ---------- reveal.js compatibility: fragments, stacks, diagrams, charts ---------- */
  .node .fragment{opacity:0;visibility:hidden;transition:opacity .45s ease, transform .45s ease, visibility 0s .45s;}
  .node .fragment.visible{opacity:1;visibility:inherit;transition:opacity .45s ease, transform .45s ease;}
  .node .fragment.fade-up{transform:translateY(24px);}
  .node .fragment.fade-down{transform:translateY(-24px);}
  .node .fragment.fade-left{transform:translateX(40px);}
  .node .fragment.fade-right{transform:translateX(-40px);}
  .node .fragment.zoom-in{transform:scale(.1);}
  .node .fragment.visible:is(.fade-up,.fade-down,.fade-left,.fade-right,.zoom-in){transform:none;}
  /* these start visible and change when their step comes */
  .node .fragment:is(.grow,.shrink,.fade-out,.semi-fade-out,.strike,.highlight-red,.highlight-green,.highlight-blue){opacity:1;visibility:inherit;}
  /* grow: sized to its content and growing rightwards, so the card can make room for its last step */
  .node .fragment.grow{width:fit-content;max-width:100%;transform-origin:left center;}
  .node .fragment.grow.visible{transform:scale(1.3);}
  .node .fragment.shrink.visible{transform:scale(.7);}
  .node .fragment.fade-out.visible{opacity:0;visibility:hidden;}
  .node .fragment.semi-fade-out.visible{opacity:.5;}
  .node .fragment.strike.visible{text-decoration:line-through;}
  .node .fragment.highlight-red.visible{color:var(--danger);}
  .node .fragment.highlight-green.visible{color:#10b981;}
  .node .fragment.highlight-blue.visible{color:#60a5fa;}
  /* shown only while it is the newest step */
  .node .fragment.visible:is(.fade-in-then-out,.current-visible):not(.current-fragment){opacity:0;visibility:hidden;}
  .node .fragment.fade-in-then-semi-out.visible:not(.current-fragment){opacity:.5;}
  .node .r-stack{display:grid;}
  .node .r-stack > *{grid-area:1/1;margin:auto;}
  .node .r-hstack{display:flex;flex-direction:row;align-items:center;justify-content:center;}
  .node .r-vstack{display:flex;flex-direction:column;align-items:center;justify-content:center;}
  .node .body img{max-width:100%;height:auto;object-fit:contain;}
  /* ---------- media from plain markdown (see applyMedia) ---------- */
  .node .body figure.media{margin:0;}
  .node .body figure.media img{display:block;width:100%;height:auto;max-height:70vh;object-fit:contain;border-radius:8px;}
  .node .body figure.media figcaption{margin-top:8px;font-size:.82em;color:var(--text-muted);line-height:1.45;}
  .node .body figure.yt .frame{position:relative;width:100%;aspect-ratio:16/9;border-radius:8px;overflow:hidden;background:#000;}
  .node .body figure.yt.portrait .frame{aspect-ratio:9/16;max-height:70vh;width:auto;margin:0 auto;}
  .node .body figure.yt iframe{position:absolute;inset:0;width:100%;height:100%;border:0;}
  /* the video is always on show; its step only plays it */
  .node .fragment.yt-play{opacity:1 !important;visibility:inherit !important;transform:none !important;}
  .node.card-split .body{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:4px 22px;align-items:center;}
  .node.card-split .body > :is(h1,h2,h3,h4,h5,h6){grid-column:1 / -1;}
  .node.card-split .body .split-text > :first-child{margin-top:0;}
  .node.card-split.media-last .body{grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);}
  .node .body .gallery{list-style:none;padding:0;margin:8px 0 0;display:grid;grid-template-columns:repeat(var(--cols,3),minmax(0,1fr));gap:14px;align-items:end;}
  .node .body .gallery li{margin:0;}
  .node .body .gallery figure.media img{max-height:calc(56vh / var(--rows,1));margin:0 auto;}
  .node .body .gallery figure.media figcaption{font-size:.72em;text-align:center;}
  /* a stepped gallery: the images stack in one place and each press brings the next */
  .node .body .gallery.carousel{grid-template-columns:minmax(0,1fr);}
  .node .body .gallery.carousel > li{grid-area:1/1;}
  .node .body .gallery.carousel figure.media img{max-height:58vh;}
  .node .body .gallery.carousel figure.media figcaption{font-size:.82em;}
  .node .body .gallery.carousel figcaption[data-count]::before{content:attr(data-count) " ";color:var(--accent);font-weight:600;white-space:pre;}
  .node .body .gallery.carousel:has(> li.visible) > li:not(.fragment){opacity:0;visibility:hidden;transition:opacity .45s ease, visibility 0s .45s;}
  .node .body .gallery.carousel > li:not(.fragment){transition:opacity .45s ease;}
  /* image cards: an image or carousel alone, laid out by the image's shape (see sizeCard) */
  div.node.card-bleed{padding:0;overflow:hidden;}
  .node.card-bleed .body .gallery{margin:0;}
  .node.card-bleed .body figure.media img,
  .node.card-bleed .body .gallery.carousel figure.media img{max-height:none;border-radius:0;background:var(--code-bg);}
  .node.card-bleed .body figure.media figcaption{margin:0;text-align:left;font-size:.9em;}
  /* landscape: the image spans the card; the heading sits above it, the caption below */
  .node.img-landscape .crumb{margin:12px 18px 4px;}
  .node.img-landscape .body > :is(h1,h2,h3,h4,h5,h6):first-child{margin:0 18px 10px;}
  .node.img-landscape .body figure.media img{width:100%;height:var(--img-h);object-fit:contain;}
  .node.img-landscape .body figure.media figcaption{padding:10px 18px 14px;}
  /* portrait or near-square: the image on the right at the card's height; the heading and caption share the left */
  div.node.img-portrait{height:540px;padding:20px calc(var(--img-w) + 26px) 22px 24px;}
  .node.img-portrait .body{display:flex;flex-direction:column;height:100%;}
  .node.img-portrait .crumb{margin-bottom:10px;}
  .node.img-portrait .body > :is(h1,h2,h3,h4,h5,h6):first-child{font-size:22px;}
  .node.img-portrait .body > .gallery, .node.img-portrait .body > figure.media{margin-top:auto;}
  .node.img-portrait .body figure.media img{position:absolute;top:0;right:0;width:var(--img-w);height:540px;object-fit:contain;}
  .node.img-portrait .body figure.media figcaption, .node.img-portrait .body .gallery.carousel figure.media figcaption{font-size:1.35em;line-height:1.45;color:var(--text);}
  /* 16:9, or a full-screen card: the image fills the card, the heading and caption over it */
  .node.img-overlay::before{content:"";position:absolute;inset:0 0 auto;height:96px;z-index:2;pointer-events:none;
    background:linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,0));border-radius:8px 8px 0 0;}
  .node.img-overlay .crumb{position:absolute;top:12px;left:18px;right:18px;z-index:3;margin:0;color:rgba(255,255,255,.72);}
  .node.img-overlay .body > :is(h1,h2,h3,h4,h5,h6):first-child{position:absolute;top:28px;left:18px;right:18px;z-index:3;margin:0;
    color:#fff;text-shadow:0 1px 6px rgba(0,0,0,.6);}
  .node.img-overlay .body figure.media{position:relative;}
  .node.img-overlay .body figure.media img{width:100%;height:540px;object-fit:contain;}
  .node.img-overlay .body figure.media figcaption{position:absolute;left:0;right:0;bottom:0;padding:36px 18px 14px;
    color:#f4f4f5;background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.78));}
  .node.img-overlay .body .gallery.carousel figure.media figcaption::before{color:color-mix(in srgb, var(--accent) 55%, #fff);}
  /* <!-- view: full -->: a 16:9 card, framed and placed like any other slide */
  div.node.card-full{height:540px;overflow:hidden;}
  /* measure cards at their resting size, without grow/zoom transforms */
  div.node.measuring .fragment{transform:none !important;transition:none !important;}
  /* a card re-measured mid-entrance (a theme switch replays it) must not count a gsap "from" state such
     as scale(3) as its width, or it shrinks the whole card to fit */
  div.node.measuring [data-gsap]{transform:none !important;}
  /* arriving at or leaving a slide snaps its fragments; only steps within the slide animate */
  div.node.snap .fragment{transition:none !important;}
  .node .body iframe{max-width:100%;border:0;border-radius:6px;background:#fff;}
  .node .diagram{background:#f8fafc;border:1px solid var(--panel-line);border-radius:8px;padding:12px;margin:0 0 10px;overflow:auto;}
  .node .diagram svg{display:block;width:100%;height:auto;max-height:640px;}
  .node .diagram.err{background:none;color:var(--danger);font-family:var(--mono);font-size:12px;padding:0;}
  /* D2 is drawn in the deck's own palette, so it needs no light backdrop */
  .node .diagram.d2{background:none;border:none;padding:0;}
  /* a \`\`\`svg drawing is inline: currentColor is the card's text colour, and the deck's variables switch with dark and light */
  .node .diagram.svg{background:none;border:none;padding:0;color:var(--text);}
  .node .diagram.svg svg{max-height:62vh;}
  .node .diagram.d2 svg{max-height:62vh;}
  .node .echarts-container{width:100%;height:360px;margin:0 0 10px;}

  /* ---------- overlays ---------- */
  #breadcrumbs{
    position:absolute;top:14px;left:14px;z-index:10;
    display:flex;align-items:center;gap:6px;flex-wrap:wrap;max-width:60%;
    font-family:var(--mono);font-size:11.5px;
  }
  #breadcrumbs .crumb-btn{
    background:var(--overlay);border:1px solid var(--panel-line);color:var(--text-muted);
    padding:4px 9px;border-radius:5px;cursor:pointer;backdrop-filter:blur(4px);
  }
  #breadcrumbs .crumb-btn:hover,#breadcrumbs .crumb-btn.here{color:var(--accent);border-color:var(--accent);}
  #breadcrumbs .sep{color:var(--text-muted);}

  #navbar{
    position:absolute;bottom:16px;left:50%;transform:translateX(-50%);z-index:10;
    display:flex;align-items:center;gap:4px;
    background:var(--overlay);border:1px solid var(--panel-line);border-radius:9px;
    padding:6px;backdrop-filter:blur(6px);
  }
  #navbar button{
    background:transparent;border:none;color:var(--text-muted);white-space:nowrap;
    font-size:12px;padding:7px 11px;border-radius:6px;cursor:pointer;
  }
  #navbar button:hover{color:var(--accent);background:var(--node-bg);}
  #navbar .divider{width:1px;height:18px;background:var(--panel-line);margin:0 2px;}
  /* the arrows are for touch screens; keyboards and clickers use the keys */
  #navbar .touch-only{display:none;}
  @media (pointer:coarse){ #navbar .touch-only{display:inline-block;} }

  #minimap{
    position:absolute;bottom:16px;right:14px;z-index:10;width:180px;height:130px;
    background:var(--overlay);border:1px solid var(--panel-line);border-radius:8px;
    backdrop-filter:blur(6px);overflow:hidden;
  }
  #minimap .mm-label{
    position:absolute;top:5px;left:8px;font-family:var(--mono);font-size:9px;
    color:var(--text-muted);letter-spacing:.1em;text-transform:uppercase;pointer-events:none;
  }
  #mm-svg circle{cursor:pointer;}
  #stage-wrap[data-pip="bottom-right"] #minimap{right:auto;left:14px;}

  /* channel mark: fixed in the corner, never moves with the camera */
  #brand{
    position:absolute;top:16px;right:18px;z-index:12;pointer-events:none;
    display:flex;align-items:center;gap:10px;opacity:.9;
    font-family:var(--display);font-weight:600;font-size:18px;letter-spacing:.02em;color:var(--text);
    text-shadow:var(--brand-shadow);
  }
  #brand[hidden]{display:none;}
  /* embedded in a site page: one read-only deck, so no editor, links or copies */
  html.embed #btn-edit-toggle, html.embed #continue, html.embed #editor-pane, html.embed #editor-resizer{display:none !important;}
  html.embed .brand .trail{display:flex;align-items:center;gap:10px;font-family:var(--display);font-weight:600;font-size:15px;min-width:0;}
  html.embed .brand .trail a{color:var(--text);text-decoration:none;white-space:nowrap;}
  /* the header wears the site's colours, so an accent-coloured link can vanish into it (gold on gold):
     the trail stays in the text colour, as the site's own header does, and underlines mark where you are */
  html.embed .brand .trail a:hover, html.embed .brand .trail a:last-child{text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:5px;}
  html.embed .brand .trail a:last-child{text-decoration-color:color-mix(in srgb, currentColor 45%, transparent);}
  html.embed .hdr-actions .seg-btn.active{color:var(--text);}
  html.embed .brand .trail .sep{color:var(--text-muted);font-weight:400;}
  #credit{display:inline-flex;align-items:center;gap:6px;padding:4px 6px;text-decoration:none;
    font-family:var(--display);font-weight:700;font-size:14px;color:var(--text);}
  #credit .logo{width:18px;height:18px;fill:var(--accent);}
  #credit .word > span{color:var(--accent);}
  #credit:hover{opacity:.85;}
  /* on a site's coloured header in light mode the accent is the band's own colour, so the credit takes the header's ink */
  html:not(.dark) body.st-header-color #credit .logo{fill:currentColor;}
  html:not(.dark) body.st-header-color #credit .word > span{color:inherit;opacity:.78;}
  html.embed .site-links, html.embed #btn-github, html.embed #btn-analytics{display:none !important;}
  /* a reader's page (embedded, not recording): no bottom bar, except the arrows on touch screens */
  html.embed.no-record #navbar{display:none;}
  @media (pointer:coarse){
    html.embed.no-record #navbar{display:flex;}
    html.embed.no-record #navbar > :not(.touch-only){display:none !important;}
  }
  html.no-record #btn-camera, html.no-record #btn-record, html.no-record #navbar .divider, html.no-record #pip, html.no-record #help tr.rec{display:none !important;}
  /* the logo written into a heading: # ![](/favicon.svg) Slidetake */
  .node .body :is(h1,h2) img[src$="favicon.svg"]{height:1em;width:auto;vertical-align:-.12em;margin-right:.25em;display:inline;}
  #brand .st-mark{display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:700;font-size:20px;color:var(--text);}
  #brand .st-mark .logo{width:24px;height:24px;fill:var(--accent);}
  #brand .st-mark .word > span{color:var(--accent);}
  #brand img{height:40px;width:auto;display:block;}
  /* optional accent chip, as on the decks' title slides (brand_style: chip); plain text is the default */
  #brand .chip{display:inline-block;padding:5px 22px;border-radius:30px;color:#fff;font-family:var(--body);
    font-size:15px;font-weight:600;letter-spacing:.01em;text-shadow:none;
    background:linear-gradient(90deg, var(--accent-line), color-mix(in srgb, var(--accent-line) 80%, #000));box-shadow:0 2px 10px rgba(0,0,0,.25);}

  /* PIP camera: slides are laid out to keep clear of this box */
  #pip{
    position:absolute;z-index:11;pointer-events:none;aspect-ratio:16/9;
    border:2px dashed color-mix(in srgb, var(--accent-teal) 55%, transparent);border-radius:10px;
    display:flex;align-items:center;justify-content:center;
    font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-teal);
    background:color-mix(in srgb, var(--accent-teal) 4%, transparent);
  }
  #pip[hidden]{display:none;}
  /* a message in the box (no camera found, waiting for permission, a layout picked with V) */
  #pip.msg span{padding:10px 14px;text-align:center;text-transform:none;letter-spacing:0;font-size:12px;line-height:1.45;color:var(--accent);
    background:color-mix(in srgb, var(--panel) 88%, transparent);border-radius:6px;max-width:92%;max-height:92%;overflow:hidden;}
  #pip.circle{aspect-ratio:1;border-radius:50%;}
  #pip.top-left{top:16px;left:16px;}
  #pip.top-right{top:16px;right:16px;}
  #pip.bottom-left{bottom:16px;left:16px;}
  #pip.bottom-right{bottom:16px;right:16px;}
  /* full: the camera takes the whole stage, under the brand and the controls */
  /* it also swallows clicks, so a click can't land on the hidden cards behind it */
  #pip.full{inset:0;width:100% !important;height:100%;aspect-ratio:auto;border-radius:0;z-index:9;pointer-events:auto;}
  /* while presenting the box is empty so the camera overlay sits on plain background */
  /* while presenting, the empty box stays as a faint guide for lining up a camera overlay */
  body.presenting #pip{border-color:color-mix(in srgb, var(--accent-teal) 30%, transparent);background:none;}
  body.presenting #pip span{opacity:.5;}
  /* live webcam inside the box */
  #pip.live{border:none;background:#000;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.55), 0 0 0 1px var(--panel-line);}
  #pip.live span{display:none;}
  #pip video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
  #pip.mirror video{transform:scaleX(-1);}
  #pip-msg{
    position:absolute;left:50%;top:70px;transform:translateX(-50%);z-index:30;
    background:var(--panel);border:1px solid var(--danger);color:var(--text);
    font-family:var(--mono);font-size:13px;line-height:1.5;padding:10px 16px;border-radius:6px;display:none;
    width:max-content;max-width:min(620px, 90%);text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.5);
  }
  #pip-msg.show{display:block;}

  /* ---------- help popover ---------- */
  #help{position:fixed;inset:0;background:rgba(4,7,13,.7);z-index:50;display:none;align-items:center;justify-content:center;}
  #help.open{display:flex;}
  #help .panel{
    position:relative;width:min(580px,92vw);max-height:84vh;overflow-y:auto;
    background:var(--panel);border:1px solid var(--panel-line);border-radius:12px;padding:26px 28px;
  }
  #help h2{font-family:var(--display);font-size:18px;margin:0 0 14px;color:var(--accent);}
  #help h3{font-family:var(--display);font-size:13px;margin:18px 0 6px;color:var(--text);}
  #help p, #help li{font-size:13px;line-height:1.65;color:var(--text-muted);margin:0 0 8px;}
  #help pre{
    background:var(--code-bg);border:1px solid var(--panel-line);border-radius:6px;
    padding:10px 12px;font-family:var(--mono);font-size:11.5px;color:var(--text);overflow-x:auto;
  }
  #help .close{position:absolute;top:22px;right:16px;}
  kbd{
    font-family:var(--mono);background:var(--node-bg);border:1px solid var(--node-border);
    border-radius:4px;padding:1px 6px;font-size:11px;color:var(--accent);
  }

  @media (max-width:760px){
    main{flex-direction:column;}
    #editor-pane{width:100% !important;max-width:none;min-width:0;height:40vh;border-left:none;border-top:1px solid var(--panel-line);}
    #editor-resizer{display:none;}
    #editor-pane.collapsed{height:0;}
    #stage-wrap{flex:1;}
    #minimap{display:none;}
    #navbar .lbl{display:none;}
  }
`;var bn=`
<noscript>
  <h1>Slidetake</h1>
  <p><strong>Write in markdown. Present on a spatial canvas. Record without timeline editing.</strong></p>
  <p>For developers and technical educators who explain things on video. Your headings become a map you move through; with OBS, every slide is a take, so a fumbled line is retaken on the spot, and Slidetake writes the frame-exact cut, YouTube chapters and description.</p>
  <p>Slidetake needs JavaScript. Read the <a href="/docs.md">docs</a>, the <a href="/llms.txt">summary</a>, or the source on <a href="https://github.com/slidetake/slidetake">GitHub</a>.</p>
</noscript>

<header>
  <div class="brand">
    <a class="mark" href="/" title="Slidetake home"><svg class="logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M 10 8 H 38 C 41.3 8 44 10.7 44 14 V 18 H 22 C 16.5 18 12 22.5 12 28 V 36 H 10 C 6.7 36 4 33.3 4 30 V 14 C 4 10.7 6.7 8 10 8 Z" opacity="0.4"/><path fill-rule="evenodd" d="M 22 22 H 54 C 57.3 22 60 24.7 60 28 V 50 C 60 53.3 57.3 56 54 56 H 22 C 18.7 56 16 53.3 16 50 V 28 C 16 24.7 18.7 22 22 22 Z M 26 34 C 28.2 34 30 32.2 30 30 C 30 27.8 28.2 26 26 26 C 23.8 26 22 27.8 22 30 C 22 32.2 23.8 34 26 34 Z M 38 40 C 36.9 40 36 40.9 36 42 V 48 C 36 49.1 36.9 50 38 50 H 50 C 51.1 50 52 49.1 52 48 V 42 C 52 40.9 51.1 40 50 40 H 38 Z"/></svg><span class="word">Slide<span>take</span></span></a>
    <nav class="site-links" aria-label="Slidetake">
      <a class="site-link" id="btn-features" href="/features" title="Every feature, and what it's for"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg><span>Features</span></a>
      <a class="site-link" id="btn-showcase" href="/showcase" title="Showcase: every feature in one deck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg><span>Showcase</span></a>
      <a class="site-link" id="btn-docs" href="/docs" title="Docs: step by step, itself a deck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg><span>Docs</span></a>
      <a class="site-link" id="btn-github" href="https://github.com/slidetake/slidetake" target="_blank" rel="noopener noreferrer" title="GitHub repository"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg><span>GitHub</span></a>
    </nav>
  </div>
  <div class="hdr-actions">
    <input type="file" id="file-input" accept=".md,.markdown,.txt,text/markdown" hidden>
    <div class="seg" id="layout-toggle">
      <button class="seg-btn" data-mode="focus" title="Focus: one slide at a time, no travel (1)">focus</button>
      <button class="seg-btn" data-mode="path" title="Path: slides in presenting order (2)">path</button>
      <button class="seg-btn" data-mode="radial" title="Radial: rings out from the first card (3)">radial</button>
      <button class="seg-btn" data-mode="tree" title="Tree: a top-down chart (4)">tree</button>
    </div>
    <button class="btn icon" id="btn-analytics" title="Privacy &amp; analytics" aria-label="Privacy &amp; analytics" hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></button>
    <button class="btn icon" id="btn-mode" title="Light / dark (L)" aria-label="Light / dark"></button>
    <button class="btn" id="btn-edit-toggle" title="Editor: write, open, share (E)">\u270E Editor</button>
  </div>
</header>

<main>
  <div id="stage-wrap">
    <div id="stage">
      <div id="world">
        <svg id="connectors"></svg>
      </div>
    </div>
    <div id="breadcrumbs"></div>
    <div id="navbar">
      <button id="btn-keys" title="Keyboard shortcuts (K)">\u2328<span class="lbl"> Keys</span></button>
      <button id="nav-prev" class="touch-only" title="Previous (\u2190)" aria-label="Previous">\u2190</button>
      <button id="nav-next" class="touch-only" title="Next (\u2192)" aria-label="Next">\u2192</button>
      <div class="divider"></div>
      <button id="btn-camera" title="Camera (C)" aria-pressed="false"></button>
      <button id="btn-record" title="Record a take with OBS (R)">\u25CF<span class="lbl"> Record</span></button>
      <button id="btn-present" title="Fullscreen (F)">\u26F6<span class="lbl"> Fullscreen</span></button>
    </div>
    <div id="progress" aria-hidden="true"></div>
    <div id="minimap"><div class="mm-label" id="mm-label">map</div><svg id="mm-svg" width="180" height="130"></svg></div>
    <div id="brand" hidden></div>
    <div id="pip" hidden><span>PIP camera</span></div>
    <div id="pip-msg" role="status"></div>
  </div>
  <div id="editor-resizer" role="separator" aria-orientation="vertical" aria-label="Resize the editor" title="Drag to resize"></div>
  <div id="editor-pane" class="collapsed">
    <div class="pane-bar">
      <span class="pane-label" id="doc-state" aria-live="polite"></span>
      <span class="pane-actions">
        <a class="btn small" id="continue" href="/edit" hidden></a>
        <a class="btn small" id="btn-new" href="/new" title="Start from a template">New</a>
        <button class="btn small" id="btn-load" title="Load a deck from a link: GitHub, a gist or any URL">\u21E3 Load</button>
        <button class="btn small" id="btn-open" title="Open a markdown file from this computer">Open</button>
        <button class="btn small" id="btn-save" title="Save the markdown to a file on this computer">Save</button>
        <button class="btn small" id="btn-share" title="Copy a link to this deck">Share</button>
      </span>
    </div>
    <textarea id="editor" spellcheck="false"></textarea>
    <div id="status-line"><span id="status-count"></span><span id="status-err" class="err"></span><button id="btn-reset" hidden title="Discard your edits and go back to the original">reset to original</button></div>
  </div>
</main>

<div id="help">
  <div class="panel">
    <button class="btn close" id="help-close">\u2715 Close</button>
    <h2>Keys</h2>
    <table class="keys">
      <tr><td><kbd>\u2192</kbd> <kbd>\u2190</kbd> <kbd>Space</kbd></td><td>next / previous step</td></tr>
      <tr><td><kbd>\u2193</kbd> <kbd>\u2191</kbd></td><td>first child / parent</td></tr>
      <tr><td><kbd>O</kbd></td><td>the whole map; <kbd>O</kbd> or <kbd>Esc</kbd> goes back</td></tr>
      <tr><td><kbd>1</kbd>\u2013<kbd>4</kbd></td><td>focus, path, radial, tree</td></tr>
      <tr><td><kbd>F</kbd></td><td>fullscreen; <kbd>F</kbd> or <kbd>Esc</kbd> leaves</td></tr>
      <tr><td><kbd>+</kbd> <kbd>\u2212</kbd></td><td>bigger / smaller slides</td></tr>
      <tr><td><kbd>E</kbd></td><td>editor: write, open, share</td></tr>
      <tr><td><kbd>L</kbd></td><td>light / dark</td></tr>
      <tr class="rec"><td><kbd>C</kbd> <kbd>V</kbd> <kbd>R</kbd></td><td>camera, camera layouts, record</td></tr>
      <tr><td><kbd>K</kbd> <kbd>?</kbd></td><td>this card; again or <kbd>Esc</kbd> closes it</td></tr>
    </table>
    <p>Drag to pan, scroll or pinch to zoom, click a card to fly to it.</p>
    <p><a href="https://slidetake.com/docs" target="_blank" rel="noopener">The docs \u2192</a> writing decks, sharing, recording, camera, review and cut.</p>
  </div>
</div>

<div id="analytics-dialog" class="modal" role="dialog" aria-labelledby="analytics-title">
  <div class="panel">
    <button class="btn close" data-close>\u2715 Close</button>
    <h2 id="analytics-title">Privacy &amp; analytics</h2>
    <p>Your decks, copies and recordings never leave this browser. This is only about counting visits to slidetake.com.</p>
    <div class="choices" role="radiogroup" aria-label="Privacy &amp; analytics">
      <button class="choice" role="radio" data-analytics="on">
        <strong>Allow analytics</strong>
        <span>Standard Google Analytics (<code>G-3S9FY4MQLS</code>), to see which pages get read and where readers come from. Sets the <code>_ga</code> cookies. The address it records leaves out the part after <code>#</code> and <code>?obs=</code>, so never a deck or an OBS password.</span>
      </button>
      <button class="choice" role="radio" data-analytics="off">
        <strong>Turn analytics off</strong>
        <span>Nothing more is sent from this browser, and the <code>_ga</code> cookies are removed. Cloudflare, which serves the site, still sees each request the way any web server does.</span>
      </button>
    </div>
    <p class="note" id="analytics-note"><code>slidetake:analytics</code> in this browser remembers your choice. Everything else is on the <a href="/privacy">privacy page</a>.</p>
  </div>
</div>

<div id="new-dialog" class="modal" role="dialog" aria-labelledby="new-title">
  <div class="panel">
    <button class="btn close" data-close>\u2715 Close</button>
    <h2 id="new-title">Start a new deck</h2>
    <p>Pick a template. It opens as it is; start typing and it becomes your own copy at <code>/edit</code>.</p>
    <ul class="templates">
      <li><a href="/new?template=blank"><strong>Blank</strong><span>A first card, a section and a detail.</span></a></li>
      <li><a href="/new?template=talk"><strong>Talk</strong><span>Why it matters, the idea, trade-offs, summary.</span></a></li>
      <li><a href="/new?template=recording"><strong>Recording</strong><span>Camera steps, an overview moment and a closing on camera.</span></a></li>
      <li><a href="/showcase"><strong>Showcase</strong><span>Every feature in one deck: diagrams, charts, images, YouTube, camera.</span></a></li>
    </ul>
    <p>Or <strong>\u21E3 Load</strong> a deck from a link, or <strong>Open</strong> a file from this computer.</p>
  </div>
</div>

<div id="open-dialog" class="modal" role="dialog" aria-labelledby="open-title">
  <div class="panel">
    <button class="btn close" data-close>\u2715 Close</button>
    <h2 id="open-title">Load a deck from a link</h2>
    <p>Paste a link to a markdown file: a GitHub file or folder, a gist, or any URL that allows other sites to read it.</p>
    <form id="open-form" class="row">
      <input type="text" id="open-url" placeholder="https://github.com/you/repo/blob/main/talk.md" spellcheck="false" autocomplete="off">
      <button class="btn primary" type="submit">Load</button>
    </form>
    <p id="open-error" class="warn" hidden></p>
    <h3>Try one</h3>
    <ul id="open-examples">
      <li><a href="/gh/slidetake/slidetake/examples/why-debt-is-not-bad.md">Why debt is a tool, not an enemy</a> (headings format)</li>
      <li><a href="/gh/sakthipriyan/sakthipriyan.github.io/content/building-wealth/slides/2025/invest-in-gold/index.md">Invest in gold</a> (a reveal.js deck)</li>
    </ul>
    <h3>Short links</h3>
    <p><code>slidetake.com/gh/owner/repo/path/deck.md</code> opens a file on GitHub (add <code>@branch</code> after the repo for another branch), and <code>slidetake.com/gist/&lt;id&gt;</code> a gist. Images next to the deck load as they are.</p>
    <p>A file on this computer? Use <strong>Open</strong>.</p>
  </div>
</div>

<div id="review" class="modal" role="dialog" aria-labelledby="rv-title">
  <div class="panel xwide">
    <div class="panel-actions">
      <span class="rv-using" id="rv-using"></span>
      <button class="btn rv-setup-btn" id="rv-setup-btn" aria-expanded="false" aria-controls="rv-setup">\u2699 Setup</button>
      <button class="btn close" data-close>\u2715 Close</button>
    </div>
    <h2 id="rv-title" class="rv-brand"><svg class="logo" viewBox="0 0 64 64" aria-hidden="true"><path d="M 10 8 H 38 C 41.3 8 44 10.7 44 14 V 18 H 22 C 16.5 18 12 22.5 12 28 V 36 H 10 C 6.7 36 4 33.3 4 30 V 14 C 4 10.7 6.7 8 10 8 Z" opacity="0.4"/><path fill-rule="evenodd" d="M 22 22 H 54 C 57.3 22 60 24.7 60 28 V 50 C 60 53.3 57.3 56 54 56 H 22 C 18.7 56 16 53.3 16 50 V 28 C 16 24.7 18.7 22 22 22 Z M 26 34 C 28.2 34 30 32.2 30 30 C 30 27.8 28.2 26 26 26 C 23.8 26 22 27.8 22 30 C 22 32.2 23.8 34 26 34 Z M 38 40 C 36.9 40 36 40.9 36 42 V 48 C 36 49.1 36.9 50 38 50 H 50 C 51.1 50 52 49.1 52 48 V 42 C 52 40.9 51.1 40 50 40 H 38 Z"/></svg><span class="word">Slide<span>take</span></span> Takes</h2>
    <details id="rv-setup">
      <summary>Recording setup</summary>
      <div class="rv-setup-head">
        <h4 class="for-browser">Record in <span class="browser-name">this browser</span></h4><h4 class="for-obs">Record with OBS</h4>
        <button class="btn small for-browser" id="rv-use-obs" title="Record with OBS instead of in this browser">Use OBS</button>
        <button class="btn small for-obs" id="rv-use-browser" title="Record in this browser instead of with OBS">Use <span class="browser-name">this browser</span></button>
      </div>
      <div class="rv-setup-cols">
        <section class="for-obs">
          <h4>OBS</h4>
          <div class="rv-obs-fields">
            <input type="text" id="obs-host" value="localhost" spellcheck="false" aria-label="Host" title="Host">
            <input type="text" id="obs-port" value="4455" inputmode="numeric" aria-label="Port" title="Port">
            <input type="password" id="obs-pass" autocomplete="off" placeholder="Password" aria-label="Password">
          </div>
          <div class="rv-setup-row">
            <button class="btn small" id="obs-connect">Connect</button>
            <label class="check rv-setup-label"><input type="checkbox" id="obs-remember"> Remember</label>
            <span class="rv-setup-gap"></span>
            <span id="obs-status">Not connected</span>
          </div>
          <p class="rv-setup-note" id="obs-detail" hidden></p>
          <p class="rv-setup-note">In OBS: Tools \u2192 WebSocket Server Settings \u2192 enable it (the port and password are there). Point OBS at this browser window plus your microphone; no scenes needed.</p>
        </section>
        <section>
          <h4>Camera</h4>
          <select id="rec-cam" aria-label="Camera"></select>
          <p class="rv-setup-note">Turns on by itself when recording starts. Choose No camera for slides only.</p>
        </section>
        <section class="for-browser">
          <h4>Microphone</h4>
          <select id="rec-mic" aria-label="Microphone"></select>
          <meter id="rec-meter" min="0" max="1" low="0.1" high="0.8" optimum="0.5" value="0" aria-label="Mic level"></meter>
          <div class="rv-setup-row">
            <span class="rv-setup-label">Sound</span>
            <div class="seg small" role="radiogroup" aria-label="Sound">
              <button class="seg-btn" data-sound="raw" role="radio" title="No processing: best for a good mic in a quiet room">Raw</button>
              <button class="seg-btn" data-sound="voice" role="radio" title="Chrome's noise suppression: takes out fans, hum and other steady noise">Voice</button>
            </div>
            <span class="rv-setup-gap"></span>
            <button class="btn small toggle rv-loud" id="rv-loud" aria-pressed="true" title="Raises the video towards YouTube's volume (-14 LUFS), stopping before the loudest peak would clip"><span class="ico" aria-hidden="true">\u{1F50A}</span> Volume boost</button>
            <button class="btn small toggle" id="rv-limiter" aria-pressed="false" title="Catches the few peaks (a click, a plosive) that would pass -1.5 dB, so Volume boost can reach -14 LUFS">Peak limiter</button>
          </div>
        </section>
        <section class="for-browser">
          <h4>Video</h4>
          <select id="rec-quality" aria-label="Quality"></select>
          <p class="rv-setup-note" id="rec-browser-check"></p>
          <div class="rv-setup-row">
            <button class="btn small" id="rv-folder-change" title="Where Download saves videos">Download folder\u2026</button>
            <details class="rv-purge">
              <summary class="btn small" title="Delete takes from this browser">\u{1F5D1} Purge takes</summary>
              <div class="rv-menu"><button class="btn small" id="rv-clean-unused">Unused takes</button><button class="btn small" id="rv-clean">All takes</button></div>
            </details>
          </div>
        </section>
        <section class="for-obs">
          <h4>Video</h4>
          <select id="rv-mode" aria-label="How ffmpeg cuts">
            <option value="accurate">Frame-accurate (x264)</option>
            <option value="mac">Frame-accurate, Mac hardware encoder (faster)</option>
            <option value="copy">No re-encode (only when nothing is cut out)</option>
          </select>
          <div class="rv-setup-row">
            <select id="rv-fps" aria-label="Frame rate" title="Recording frame rate: cut points snap to its frames">
              <option value="24">24 fps</option><option value="25">25 fps</option><option value="30">30 fps</option>
              <option value="50">50 fps</option><option value="60">60 fps</option>
              <option value="23.976">23.976 fps</option><option value="29.97">29.97 fps</option><option value="59.94">59.94 fps</option>
            </select>
            <span class="rv-setup-gap"></span>
            <button class="btn small toggle rv-loud" id="rv-loud-obs" aria-pressed="true" title="Adds loudnorm to the ffmpeg command: YouTube's volume (-14 LUFS), peaks held below -1 dB"><span class="ico" aria-hidden="true">\u{1F50A}</span> Volume boost</button>
          </div>
          <p class="rv-setup-note" id="rec-screen"></p>
        </section>
      </div>
      <div class="rv-setup-foot">
        <label class="rv-setup-label">Layout
          <select id="rec-layout">
            <option value="path">Path: short, one-direction moves</option>
            <option value="focus">Focus: no travel, slides fade in</option>
            <option value="current">Keep the current layout</option>
          </select>
        </label>
        <span class="rv-setup-note">During a take: \u2192 next \xB7 \u2190 take this slide again \xB7 B pause \xB7 Esc stop</span>
      </div>
      <p class="rv-setup-note for-browser">When Chrome asks, share <strong>this tab</strong>. Only the slides and your camera are recorded, in a 16:9 frame; nothing else on the screen is.</p>
    </details>
    <div class="rv-grid">
      <div>
        <div class="rv-video">
          <video id="rv-video" controls playsinline preload="metadata"></video>
          <div id="rv-novideo">
            <div class="row" style="justify-content:center;margin:0">
              <button class="btn primary" id="rv-open">Open the recording file\u2026</button>
              <button class="btn" id="rv-folder" hidden>Use my OBS recordings folder\u2026</button>
            </div>
            <p>Pick the file OBS saved<span id="rv-file"></span> (.mov, .mp4 or .mkv) to preview takes. Or choose your OBS recordings folder once, and later takes load by themselves.</p>
          </div>
        </div>
        <div class="rv-bar">
          <button class="btn rec" id="rv-rec" title="Records the whole deck, or only the ticked slides (shift-click ticks a range)">\u25CF Record</button>
          <span id="rv-now"></span>
          <button class="btn rv-preview" id="rv-play-final" title="Plays the picked takes back to back">\u25B6 Preview</button>
        </div>
      </div>
      <div class="rv-list" id="rv-list"></div>
      <div class="rv-dl">
        <button class="btn" id="rv-chapters" title="Copies the chapters, to paste into the YouTube description">\u29C9 Chapters</button>
        <span class="rv-final" id="rv-final"></span>
        <button class="btn for-browser" id="rv-render-btn" title="Saves the video: the picked takes joined into one file">\u2193 Download</button>
        <button class="btn for-obs" id="rv-ffmpeg-copy" title="Copies the ffmpeg command that cuts the picked takes from the OBS file">\u29C9 ffmpeg</button>
      </div>
    </div>
  </div>
</div>
<input type="file" id="rv-file-input" accept="video/*,video/quicktime,.mov,.mp4,.m4v,.mkv,.webm" hidden>

<div id="rec-countdown"><div class="num"></div><div class="hint">recording starts after the countdown \xB7 Esc to cancel</div></div>
<div id="rec-paused">Paused \xB7 press B to resume</div>

<!-- The sample deck. Plain markdown, nothing else. -->
`;var vn=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">`;var Xi=e=>new Promise((t,a)=>{let o=document.createElement("script");o.src=e,o.onload=t,o.onerror=()=>a(new Error("could not load "+e)),document.head.appendChild(o)});async function Qi(){document.head.insertAdjacentHTML("beforeend",vn);let e=document.createElement("style");e.textContent=gn,document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",bn),await Promise.all([window.gsap?null:Xi("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"),window.marked?null:Xi("https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js")]),await Promise.resolve().then(()=>($i(),Ec))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qi,{once:!0}):Qi();})();
