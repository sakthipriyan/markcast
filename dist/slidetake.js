/* Slidetake 0.3.4 · https://slidetake.com · Apache-2.0 */
"use strict";(()=>{var W=(e,t)=>()=>(e&&(t=e(e=0)),t);var Va,uo=W(()=>{Va=`---
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

Choose the best take of each slide. Slidetake joins them into the final video in seconds (or writes the **[ffmpeg](https://ffmpeg.org)** cut for OBS), with the YouTube **chapters** and the description.

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
`});var mo,ho=W(()=>{mo=`---
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
2. In Slidetake, press **\u25CF Record** and enter OBS's host, port and password. Tick *Remember* to skip this next time.
3. Use a 16:9 screen (YouTube is 16:9): the Record dialog checks yours. If it isn't, move the window to one that is, physical or virtual (say 1920\xD71080), and press **F** there.

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

Then the review opens: every slide with its takes (the last one picked), click one to preview it. After an OBS recording it also has the YouTube title, description with **chapters** and links, and tags. Sessions are kept in this browser, so a take can be reviewed again later from \u25CF Record.

- **Recorded in the browser:** the board is the review. **\u25B6 Preview** plays the picked takes back to back, following along in the take list; right after you play a single take it continues from the next slide (a message says so), otherwise from the start. **\u2193 Download** joins them into one MP4, in a few seconds, without re-encoding, and saves it like OBS does: a new file named by the date (\`deck 2026-10-30 20-04-49.mp4\`) in a folder you pick once, starting in your videos folder. Pressing it again without changing a take or the sound settings says where the video already is, rather than making it again. **\u29C9 Chapters**, next to it, copies the final cut's chapters (\`0:00 Intro\`, one per section) to paste into the YouTube description; YouTube needs at least three, each 10 seconds or more.
- **Recorded with OBS:** previews come from the OBS file, and a ready-to-run **[ffmpeg](https://ffmpeg.org)** command cuts the picked takes (frame-exact).
- **The microphone's sound**, in \u2699 Setup \u2192 Microphone:
  - **Sound: Raw** (the default) records the mic as it is, best for a good mic in a quiet room. **Voice** turns on Chrome's noise suppression, which takes out fans, hum and other steady noise. On a Mac, Control Center \u2192 Mic Mode \u2192 Voice Isolation does the same for every app, before Chrome hears it.
  - **\u{1F50A} Volume boost** (on by default): YouTube plays videos at about \u221214 LUFS and turns louder ones down, but not quieter ones up, so a voice recorded as it is sounds quiet next to other videos. The final cut is measured the way YouTube measures it and raised towards \u221214 LUFS, stopping where its loudest peak would reach \u22121.5 dB, so it never clips. The status line says when a peak held it back.
  - **Peak limiter** (off by default) lets the boost go all the way to \u221214 LUFS by catching the few peaks (a clicker press, a bump on the mic, a hard "p") that would pass \u22121.5 dB.
  - The video is copied as it is; only the sound is re-encoded. In the ffmpeg command, Volume boost adds \`loudnorm\` (not in the no-re-encode mode).

The description comes from the deck's top block:

| Key | Used for |
|---|---|
| \`title\` | the video title |
| \`summary\` | the description's first paragraph |
| \`related\` | a list of \`[Title](url)\` links |
| \`tags\` | tags (any other list ending in \`_tags\` is added too) |
| \`permalink\` or \`site\` | the link back to the deck |

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
`});var go,fo=W(()=>{go=`---
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
| **16:9 check** | the Record dialog warns before a video with bars |
| **Review** | every slide's takes, previewed from the OBS file |
| **Download in the browser** | the picked takes joined into one MP4 in seconds |
| **Frame-exact [ffmpeg](https://ffmpeg.org) cut** | with OBS: one command, no video editor |
| **Publish pack** | YouTube title, description, chapters, links and tags from the deck |
| **Saved sessions** | review a recording again later |

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
`});var vo,bo=W(()=>{vo=`---
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
`});var wo,yo=W(()=>{wo=`---
title: My deck
---

# My deck

Start typing: this becomes your own copy, and the template stays as it is.

## A section

Every heading is a card. \`##\` sections branch from the first card.

### A detail

\`###\` branches from the section above it.
`});var xo,ko=W(()=>{xo=`---
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
`});var Eo,So=W(()=>{Eo=`---
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
`});var To,Co=W(()=>{To=`---
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
`});function Ze(e){return e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"")||"card"}function Tt(e){return e.replace(/<[^>]*>/g,"").replace(/!?\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").trim()}function A(e){return String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Lo(e){if(typeof document<"u"){let t=document.createElement("textarea");return t.innerHTML=e,t.value}return e.replace(/&(#x[\da-f]+|#\d+|\w+);/gi,(t,a)=>a[0]==="#"?String.fromCodePoint(a[1].toLowerCase()==="x"?parseInt(a.slice(2),16):parseInt(a.slice(1),10)):ds[a.toLowerCase()]??t)}function Lt(e){let t={};for(let a of e.matchAll(/([\w-]+)="([^"]*)"/g))t[a[1]]=a[2];return t}function Mt(e,t){let a=[[]],n=null;return e.split(`
`).forEach(o=>{let r=o.match(/^\s{0,3}(`{3,}|~{3,})/);r&&(n?r[1][0]===n[0]&&r[1].length>=n.length&&(n=null):n=r[1]),!n&&!r&&t.test(o)?a.push([]):a[a.length-1].push(o)}),a.map(o=>o.join(`
`))}function Mo(e){let t=String(e??"").trim().toLowerCase();if(!t)return 0;let a=t.match(/^(\d+):(\d{1,2})$/);if(a)return(+a[1]*60+ +a[2])*1e3;if(a=t.match(/^(\d+(?:\.\d+)?)\s*(h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)?$/),!a)return 0;let n=(a[2]||"m")[0];return parseFloat(a[1])*(n==="h"?3600:n==="s"?1:60)*1e3}function oe(e){let t=Math.max(0,Math.round(e/1e3)),a=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60;return(a?a+":"+String(n).padStart(2,"0"):n)+":"+String(o).padStart(2,"0")}var ds,oa=W(()=>{"use strict";ds={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:"\xA0",mdash:"\u2014",ndash:"\u2013",hellip:"\u2026",rsquo:"\u2019",lsquo:"\u2018",rdquo:"\u201D",ldquo:"\u201C"}});function Io(e){let t=null;return e.split(`
`).filter(a=>{let n=a.match(/^\s{0,3}(`{3,}|~{3,})/);return n?(t?n[1][0]===t[0]&&n[1].length>=t.length&&(t=null):t=n[1],!1):!t}).join(`
`).replace(/`[^`\n]*`/g,"")}function Ka(e){return/<!--\s*view\s*:\s*(overview|map)\s*-->/i.test(Io(e))}function Ja(e){let t=Io(e).match(/<!--\s*camera\s*:\s*([\s\S]*?)\s*-->/i);return t?t[1].trim():null}function ps(e){let t={},a=e.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);if(!a)return{deck:t,body:e};let n=null;return a[1].split(`
`).forEach(o=>{let r=o.match(/^\s+-\s+(.*)$/);if(r&&n){t[n].push(r[1].trim().replace(/^["']|["']$/g,""));return}let i=o.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);if(!i){n=null;return}let s=i[1].toLowerCase(),l=i[2].trim().replace(/^["']|["']$/g,"");l===""?(t[s]=[],n=s):(t[s]=l,n=null)}),{deck:t,body:e.slice(a[0].length)}}function Ao(e){let t=o=>typeof o=="string"||typeof o=="number"||typeof o=="boolean",a=o=>String(o).replace(/\s*\n\s*/g," "),n=[];for(let[o,r]of Object.entries(e||{}))/^[A-Za-z_][\w-]*$/.test(o)&&(t(r)?n.push(o+": "+a(r)):Array.isArray(r)&&r.every(t)&&(n.push(o+":"),r.forEach(i=>n.push("  - "+a(i)))));return n.length?`---
`+n.join(`
`)+`
---
`:""}function us(e){let t=e.split(`
`),a={},n=e;if(t[0]!==void 0&&t[0].trim()==="---"){let o=-1;for(let r=1;r<t.length;r++)if(t[r].trim()==="---"){o=r;break}o!==-1&&(t.slice(1,o).forEach(r=>{let i=r.indexOf(":");i>-1&&(a[r.slice(0,i).trim()]=r.slice(i+1).trim().replace(/^["']|["']$/g,""))}),n=t.slice(o+1).join(`
`).replace(/^\n+/,""))}return{meta:a,body:n}}function hs(e){let t=e.replace(/<!--[\s\S]*?-->/g,""),a=t.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m),n=t.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i),o=null;if(a&&(!n||a.index<n.index)?o=a[1]:n&&(o=n[1].replace(/<[^>]+>/g," ")),!o){let r=t.split(`
`).map(i=>i.replace(/<[^>]+>/g,"").trim()).find(i=>i&&!/^[-|:\s]+$/.test(i));o=r?r.slice(0,60):null}return o?Lo(Tt(o)).replace(/\s+/g," ").trim():null}function Bo(e){let t=e.match(/<!--\s*\.slide:([\s\S]*?)-->/i);return t?Lt(t[1]):{}}function Oo(e,{render:t=a=>({html:a,err:null})}={}){let a=new Map,n=f=>{let E=f,h=2;for(;a.has(E);)E=f+"-"+h++;return E},o=f=>(a.set(f.id,{x:null,y:null,children:[],...f}),f.id);e=e.replace(/\r\n?/g,`
`);let r=/^\+\+\+[ \t]*$/m.test(e),i={};r||({deck:i,body:e}=ps(e));let s=/^slides?$/i.test(String(i.layout||""))||/^slides?$/i.test(String(i.type||"")),l=!r&&(Mt(e,/^--\s*$/).length>1||s&&Mt(e,/^---\s*$/).length>1),d=r?C():l?m():c();return a.forEach(f=>{(!f.parent||f.parent===f.id||!a.has(f.parent))&&(f.parent=null)}),a.forEach(f=>{let E=new Set([f.id]),h=f.parent;for(;h;){if(E.has(h)){f.parent=null;break}E.add(h),h=a.get(h).parent}}),a.forEach(f=>{f.parent&&a.get(f.parent).children.push(f.id)}),{deck:i,nodes:a,format:r?"+++":l?"reveal":"headings",errCount:d};function c(){let f=[],E=null,h=null,x={level:0,title:null,explicitId:null,lines:[]};e.split(`
`).forEach(w=>{let b=w.match(/^\s{0,3}(`{3,}|~{3,})/);b&&(h?b[1][0]===h[0]&&b[1].length>=h.length&&(h=null):h=b[1]);let k=!h&&!b?w.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/):null;if(k){let L=k[2],J=null,ee=L.match(/\s*\{#([\w\-:.]+)\}\s*$/);ee&&(J=ee[1],L=L.slice(0,ee.index)),E={level:k[1].length,title:Tt(L),explicitId:J,lines:[k[1]+" "+L]},f.push(E)}else(E||x).lines.push(w)});let B=x.lines.join(`
`);B.trim()&&(f.length&&!B.replace(/<!--[\s\S]*?-->/g,"").trim()?f[0].lines.splice(1,0,...x.lines):f.unshift(x));let y=[];return f.forEach(w=>{for(;y.length&&y[y.length-1].level>=w.level;)y.pop();let b=y.length?y[y.length-1].id:null,k=w.lines.join(`
`).trim(),L=w.title||Tt((k.split(`
`).find($=>$.trim())||"Intro").slice(0,48));w.id=n(w.explicitId||Ze(L));let{html:J,err:ee}=t(k);o({id:w.id,parent:b,title:L,html:J,err:ee,camera:Ja(k),mapFirst:Ka(k)}),y.push(w)}),0}function C(){let f=e.split(/\n\+\+\+[ \t]*\n/).map(x=>x.trim()).filter(x=>x.length),E=null,h=0;return f.forEach((x,B)=>{let{meta:y,body:w}=us(x),b=n(y.id||"slide-"+(B+1)),k="parent"in y?y.parent||null:E,L=w.match(/^#{1,6}\s+(.+)$/m),J=y.title||(L?Tt(L[1]):b),{html:ee,err:$}=t(w);$&&h++,o({id:b,parent:k,title:J,html:ee,err:$,camera:y.camera||Ja(w),mapFirst:Ka(w),x:y.x!==void 0?parseFloat(y.x):null,y:y.y!==void 0?parseFloat(y.y):null}),E=b}),h}function m(){let f=0,E=0,h=null;function x(y,w){let b=y.body.trim();E++;let k=hs(b)||"Slide "+E,L=w?a.get(w).title:null;L&&k.startsWith(L+" / ")&&(k=k.slice(L.length+3));let J=n(Ze(k)),{html:ee,err:$}=t(b);return $&&f++,o({id:J,parent:w,title:k,html:ee,err:$,camera:Ja(b),mapFirst:Ka(b),autoslide:parseInt(y.attrs["data-autoslide"],10)||0})}let B=[];return Mt(e,/^---\s*$/).forEach(y=>{if(/<section\b/i.test(y)){for(let k of y.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi))B.push([{body:k[2],attrs:Lt(k[1])}]);let b=y.replace(/<section\b[^>]*>[\s\S]*?<\/section>/gi,"");b.trim()&&B.push([{body:b,attrs:Bo(b)}]);return}let w=Mt(y,/^--\s*$/).filter(b=>b.trim()).map(b=>({body:b,attrs:Bo(b)}));w.length&&B.push(w)}),B.forEach(y=>{let w=null;y.forEach((b,k)=>{if(!h){h=w=x(b,null);return}k===0?w=x(b,h):x(b,w)})}),f}}var Ro=W(()=>{"use strict";oa()});function ra(e,t){return String(t||"").toLowerCase().split(/\s+/).forEach(a=>{a&&(a==="off"||a==="hide"?e.off=!0:a==="on"||a==="pip"||a==="show"?(e.off=!1,e.full=!1,e.used=!0):a==="full"||a==="fullscreen"?(e.full=!0,e.off=!1,e.used=!0):/^\d+(\.\d+)?%?$/.test(a)?(e.size=$a(parseFloat(a)),e.used=!0):Bt.includes(a)?(e.corner=a,e.used=!0):a==="flip"?(e.flip=!e.flip,e.used=!0):a==="circle"?e.circle=!0:a==="rect"?e.circle=!1:a==="mirror"?e.mirror=!0:(a==="unmirror"||a==="no-mirror")&&(e.mirror=!1))}),e}function Po(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function zo(e,t){let a=[];if(!e.length){for(let o=0;o<=t;o++)a.push({cam:0,frag:o});return a}let n=e.findIndex(o=>!ra({},o).full);n<0&&(n=e.length-1);for(let o=0;o<=n;o++)a.push({cam:o,frag:0});for(let o=1;o<=t;o++)a.push({cam:n,frag:o});for(let o=n+1;o<e.length;o++)a.push({cam:o,frag:t});return a}var Bt,$a,Do=W(()=>{"use strict";Bt=["top-left","top-right","bottom-left","bottom-right"],$a=e=>Math.max(8,Math.min(60,e))});function Fo(e){let t=String(e||"").trim();if(!t)return null;let a;try{a=new URL(/^[a-z]+:\/\//i.test(t)?t:"https://"+t)}catch{return null}let n=a.pathname.split("/").filter(Boolean);if(a.hostname==="github.com"||a.hostname==="www.github.com"){let[o,r,i,s,...l]=n;if(o&&r&&(i==="blob"||i==="raw"||i==="tree")&&s){let d=l.join("/");return(i==="tree"||!/\.(md|markdown|txt)$/i.test(d))&&(d=(d?d+"/":"")+"index.md"),{kind:"url",url:Xa+[o,r,s].join("/")+"/"+d}}if(o&&r&&!i)return{kind:"url",url:Xa+o+"/"+r+"/HEAD/README.md"}}if(a.hostname==="gist.github.com"){let o=n.length>=2?n[1]:n[0];if(o&&/^[\da-f]+$/i.test(o))return{kind:"gist",id:o}}if(a.hostname==="slidetake.com"||a.hostname==="www.slidetake.com"){let o=Qa(a.pathname);if(o)return o;let r=a.searchParams.get("src");if(r)return{kind:"url",url:r}}return{kind:"url",url:a.href}}function Qa(e){let t=String(e||"").split("/").filter(Boolean).map(a=>{try{return decodeURIComponent(a)}catch{return a}});if(t[0]==="gh"&&t.length>=4){let[,a,n,...o]=t,r=n.indexOf("@"),i=r<0?n:n.slice(0,r),s=r<0?"HEAD":n.slice(r+1);return!a||!i||!s?null:{kind:"url",url:Xa+[a,i,s,...o].map(encodeURIComponent).join("/")}}return t.length===1&&(t[0]==="docs"||t[0]==="help")?{kind:"builtin",id:"docs"}:t[0]==="showcase"&&t.length===1?{kind:"builtin",id:"showcase"}:t[0]==="examples"&&(t.length===1||t.length===2&&t[1]==="showcase")?{kind:"builtin",id:"showcase"}:t.length===1&&t[0]==="features"?{kind:"builtin",id:"features"}:t.length===1&&t[0]==="privacy"?{kind:"builtin",id:"privacy"}:t[0]==="gist"&&t[1]&&/^[\da-f]+$/i.test(t[1])?t[2]?{kind:"gist",id:t[1],file:t[2]}:{kind:"gist",id:t[1]}:null}function jo(e){if(e.kind==="builtin")return e.id==="home"?"/":e.id==="showcase"?"/showcase":e.id.startsWith("template:")?"/new?template="+e.id.slice(9):"/"+e.id;if(e.kind==="gist")return"/gist/"+e.id+(e.file?"/"+encodeURIComponent(e.file):"");let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);if(t){let[,a,n,o,r]=t;if(!/^refs$/.test(o))return"/gh/"+a+"/"+n+(o==="HEAD"?"":"@"+o)+"/"+r}return"/?src="+encodeURIComponent(e.url)}var Xa,Za=W(()=>{"use strict";Xa="https://raw.githubusercontent.com/"});function ms(e){let t="";for(let a=0;a<e.length;a+=32768)t+=String.fromCharCode(...e.subarray(a,a+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function fs(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,a=>a.charCodeAt(0))}async function No(e,t){let a=new Response(new Blob([e]).stream().pipeThrough(t));return new Uint8Array(await a.arrayBuffer())}async function _o(e){return ms(await No(new TextEncoder().encode(e),new CompressionStream("deflate-raw")))}async function Uo(e){return new TextDecoder().decode(await No(fs(e),new DecompressionStream("deflate-raw")))}function ia(e){let t=e.replace(/^#/,"");if(!t.startsWith(en)){let r=t;try{r=decodeURIComponent(t)}catch{}return{data:null,slide:r}}let a=t.slice(en.length),n=a.indexOf("~"),o=n<0?"":a.slice(n+1);try{o=decodeURIComponent(o)}catch{}return{data:n<0?a:a.slice(0,n),slide:o}}function tn(e,t){return"#"+en+e+(t?"~"+encodeURIComponent(t):"")}var en,an=W(()=>{"use strict";en="deflate:"});function qo(e,t,a){let n=e.replace(/\/+$/,"")||"/",o=new URLSearchParams(t),{data:r,slide:i}=ia(a);if(n==="/share")return r?{page:"share",data:r,slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:""};if(n==="/edit")return{page:"edit",slide:i};if(n==="/new"){let d=o.get("template");return d&&gs.includes(d)?{page:"source",source:{kind:"builtin",id:"template:"+d},slide:i}:{page:"pick"}}let s=Qa(n);if(s)return{page:"source",source:s,slide:i};let l=o.get("src");return n==="/"&&l?{page:"source",source:{kind:"url",url:l},slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:i}}function ke(e){switch(e.kind){case"builtin":return e.id==="home"?"Home":e.id==="docs"||e.id==="help"?"the docs":e.id==="showcase"?"the showcase":e.id==="features"?"the features":e.id==="privacy"?"the privacy page":"the "+e.id.replace(/^template:/,"")+" template";case"gist":return"a gist"+(e.file?" ("+e.file+")":"");case"shared":return"a shared deck";case"file":return e.name;case"url":{let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/[^/]+\/(.+)$/);if(t)return t[1]+"/"+t[2]+"/"+t[3];try{let a=new URL(e.url);return a.hostname+a.pathname}catch{return e.url}}}}function sa(e,t,{exported:a=!1}={}){return{text:e,origin:t,originText:e,exported:a?e:null}}function la(e){return e.text!==(e.exported??e.originText)}function ca(e){return e.text===e.originText}function Ho(e){try{let t=JSON.parse(e||"null");return!t||typeof t.text!="string"||!t.origin||typeof t.origin.kind!="string"?null:{text:t.text,origin:t.origin,originText:typeof t.originText=="string"?t.originText:t.text,exported:typeof t.exported=="string"?t.exported:null}}catch{return null}}var gs,Wo=W(()=>{"use strict";Za();an();gs=["blank","talk","recording"]});function nn(e){let t;try{t=new URL(e)}catch{return null}let a=t.hostname.replace(/^(www\.|m\.)/,""),n=null,o=!1;if(a==="youtu.be")n=t.pathname.slice(1).split("/")[0];else if(a==="youtube.com"||a==="youtube-nocookie.com"){let r=t.pathname.split("/").filter(Boolean);r[0]==="watch"?n=t.searchParams.get("v"):["shorts","live","embed"].includes(r[0])&&(n=r[1]||null,o=r[0]==="shorts")}return!n||!/^[\w-]{6,}$/.test(n)?null:{id:n,start:bs(t.searchParams.get("t")||t.searchParams.get("start")||""),portrait:o}}function bs(e){if(/^\d+$/.test(e))return+e;let t=e.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);return t&&e?+(t[1]||0)*3600+ +(t[2]||0)*60+ +(t[3]||0):0}function Go(e){return"https://www.youtube-nocookie.com/embed/"+encodeURIComponent(e.id)+"?enablejsapi=1&rel=0&playsinline=1"+(e.start?"&start="+e.start:"")}var Yo=W(()=>{"use strict"});function xe(e){let t=new Map,a=e.totalObs??e.total;return e.events.forEach((n,o)=>{t.has(n.id)||t.set(n.id,{id:n.id,title:n.title,takes:[]});let r=t.get(n.id),i=e.events[o+1];r.takes.push({no:r.takes.length+1,start:Vo(n),end:i?Vo(i)-(i.lead||0):a})}),t}function et(e){let t=[],a=pa(e);return xe(e).forEach(n=>{let o=e.picks[n.id]??n.takes.length;if(!o)return;let r=n.takes[o-1];if(!r)return;let i=Ko(r.start,a),s=Ko(r.end,a);s>i&&t.push({id:n.id,title:n.title,f0:i,f1:s,start:i*1e3/a,end:s*1e3/a})}),t}function vs(e){let t=[];return e.forEach(a=>{let n=t[t.length-1];n&&a.f0===n.f1?(n.f1=a.f1,n.end=a.end):t.push({f0:a.f0,f1:a.f1,start:a.start,end:a.end})}),t}function on(e,t){let a=0,n=[];return et(e).forEach(o=>{let{sec:r,title:i}=t(o.id,o.title),s=n[n.length-1];(!s||s.sec!==r&&s.title!==i)&&n.push({sec:r,title:i,t:a}),a+=o.end-o.start}),{list:n,length:a}}function $o(e,t){let{list:a,length:n}=on(e,t),o=a.filter((r,i)=>i===0||(a[i+1]?a[i+1].t:n)-r.t>=1e4);return o.length&&(o[0].t=0),{lines:o.map(r=>oe(r.t)+" "+r.title),dropped:a.length-o.length,length:n}}function Xo(e,t,{input:a,outputName:n,sectionOf:o,loudness:r}){let i=vs(et(e));if(!e.withObs)return"# This was a rehearsal: nothing was recorded.";if(!i.length)return"# Every slide is left out: nothing to render.";let s=ys(a)+n,{list:l,length:d}=on(e,o),c=b=>String(b).replace(/[=;#\\\n]/g,k=>"\\"+k),m=`cat > /tmp/slidetake-chapters.txt <<'EOF'
`+(`;FFMETADATA1
title=`+c(e.deckTitle)+`
`+l.map((b,k)=>`[CHAPTER]
TIMEBASE=1/1000
START=`+Math.round(b.t)+`
END=`+Math.round(l[k+1]?l[k+1].t:d)+`
title=`+c(b.title)).join(`
`))+`
EOF
`,f=" -map 0:v:0 -map 0:a:0 -map_metadata 1 -map_chapters 1";if(t==="copy"){let b=i.map(L=>"file "+da(a)+`
inpoint `+Jo(L.start)+`
outpoint `+Jo(L.end)).join(`
`);return(i.length>1?`# Careful: without re-encoding, cuts can only land on keyframes (OBS puts one about every 2 s),
# so `+(i.length===2?"the cut":"each of the "+(i.length-1)+" cuts")+` here may keep or lose up to ~2 s. Use a frame-accurate option for retakes.
`:"")+`cat > /tmp/slidetake-cuts.txt <<'EOF'
`+b+`
EOF
`+m+"ffmpeg -f concat -safe 0 -i /tmp/slidetake-cuts.txt -i /tmp/slidetake-chapters.txt"+f+" -c copy -movflags +faststart "+da(s)}let E=pa(e),h=b=>(b/E).toFixed(6),x=b=>((b-.5)/E).toFixed(6),B=i.map(b=>"gte(t,"+x(b.f0)+")*lt(t,"+x(b.f1)+")").join("+"),y=i.map(b=>"gte(t,"+h(b.f0)+")*lt(t,"+h(b.f1)+")").join("+"),w=t==="mac"?"-c:v h264_videotoolbox -b:v 12M":"-c:v libx264 -crf 18 -preset medium";return m+"ffmpeg -i "+da(a)+" -i /tmp/slidetake-chapters.txt"+f+` -vf "select='`+B+`',setpts=N/FRAME_RATE/TB" -af "asetnsamples=n=48:p=0,aselect='`+y+"',asetpts=N/SR/TB"+(r?",loudnorm=I=-14:TP=-1:LRA=11":"")+'"'+(r?" -ar 48000":"")+" "+w+" -c:a aac -b:a 192k -movflags +faststart "+da(s)}var Vo,pa,Ko,tt,ys,da,Jo,ua=W(()=>{"use strict";oa();Vo=e=>e.obsT??e.t,pa=e=>e.fps||60,Ko=(e,t)=>Math.round(e*t/1e3);tt=e=>String(e||"").split(/[\\/]/).pop()||"",ys=e=>{let t=Math.max(String(e).lastIndexOf("/"),String(e).lastIndexOf("\\"));return t>=0?String(e).slice(0,t+1):""},da=e=>"'"+String(e).replace(/'/g,"'\\''")+"'",Jo=e=>(e/1e3).toFixed(3)});function ws(e,t){let a=Math.min(e,t*16/9),n=a*9/16;return{w:a,h:n,x:(e-a)/2,y:(t-n)/2}}function Qo(e,t,a){let n=ws(e,t),o=[Math.floor(n.w*a),Math.floor(n.h*a)];return{quality:at.find(r=>o[0]>=r.w&&o[1]>=r.h)||null,device:o}}function At(e){let t=new Map;e.events.forEach((n,o)=>{t.has(n.id)||t.set(n.id,[]),t.get(n.id).push(o)});let a=[];return xe(e).forEach(n=>{let o=e.picks[n.id]??n.takes.length,r=o?n.takes[o-1]:null;if(!r)return;let i=e.events[t.get(n.id)[o-1]];i&&i.clip&&r.end>r.start&&a.push({id:n.id,title:n.title,clip:i.clip,keep:(r.end-r.start)/1e3})}),a}var at,ha,It,ks,Zo,rn,er,ma,tr=W(()=>{"use strict";ua();at=[{name:"1080p",w:1920,h:1080,bitrate:8e6},{name:"720p",w:1280,h:720,bitrate:5e6}],ha=192e3,It=30;ks=["video/mp4;codecs=avc1.640028,mp4a.40.2","video/mp4;codecs=avc1,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],Zo=e=>ks.find(t=>e(t))||"",rn=e=>e.startsWith("video/mp4")?"mp4":"webm",er=e=>Math.round((e.bitrate+ha)/8*60);ma=(e,t)=>t>e?t:e+.001});function xs(e){let t=1681.974450955533,a=.7071752369554196,n=Math.tan(Math.PI*t/e),o=Math.pow(10,3.999843853973347/20),r=Math.pow(o,.4996667741545416),i=1+n/a+n*n,s={b0:(o+r*n/a+n*n)/i,b1:2*(n*n-o)/i,b2:(o-r*n/a+n*n)/i,a1:2*(n*n-1)/i,a2:(1-n/a+n*n)/i};t=38.13547087602444,a=.5003270373238773,n=Math.tan(Math.PI*t/e),i=1+n/a+n*n;let l={b0:1,b1:-2,b2:1,a1:2*(n*n-1)/i,a2:(1-n/a+n*n)/i};return{shelf:s,highPass:l}}function ar(e,t){let{shelf:a,highPass:n}=xs(e),o=Math.round(e/10),r=[],i=Array.from({length:t},()=>new Float64Array(8)),s=c=>c>=3&&c<=4?1.41:1,l=0,d=0;return{add(c){let C=c[0].length;for(let m=0;m<t;m++){let f=c[m]||c[0],E=i[m],h=s(m),[x,B,y,w,b,k,L,J]=E,ee=l,$=Math.floor(ee/o),z=($+1)*o,q=0;for(let ce=0;ce<C;ce++){let te=f[ce];te>d?d=te:-te>d&&(d=-te);let X=a.b0*te+a.b1*x+a.b2*B-a.a1*y-a.a2*w;B=x,x=te,w=y,y=X;let Ct=n.b0*X+n.b1*b+n.b2*k-n.a1*L-n.a2*J;k=b,b=X,J=L,L=Ct,q+=Ct*Ct,++ee===z&&(r[$]=(r[$]||0)+h*q,q=0,$++,z+=o)}q&&(r[$]=(r[$]||0)+h*q),E.set([x,B,y,w,b,k,L,J])}l+=C},result(){let c=Math.floor(l/o),C=[];for(let h=3;h<c;h++)C.push(((r[h-3]||0)+(r[h-2]||0)+(r[h-1]||0)+(r[h]||0))/(4*o));let m=h=>h.reduce((x,B)=>x+B,0)/h.length,f=C.filter(h=>fa(h)>-70),E=f.length?f.filter(h=>fa(h)>fa(m(f))-10):[];return{integrated:E.length?fa(m(E)):-1/0,peak:d,peakDb:d>0?Ss(d):-1/0}}}}function ln(e,{limit:t=!1,target:a=-14,ceiling:n=-1.5}={}){if(!isFinite(e.integrated))return 0;let o=Math.min(a-e.integrated,sn);return o<=0||t||e.peakDb==null||!isFinite(e.peakDb)?o:Math.max(0,Math.min(o,n-e.peakDb))}function cn(e,t,a={}){let n=ga(a.ceilingDb??-1.5),o=Math.max(1,Math.round((a.lookahead??.005)*e)),r=1-Math.exp(-1/((a.release??.05)*e)),i=Array.from({length:t},()=>[]),s=[],l=[],d=new Float64Array(o),c=0,C=o,m=1,f=!1,E=0,h=0;d.fill(1);let x=B=>{for(;l.length&&l[l.length-1][1]>=B;)l.pop();for(l.push([c,B]);l[0][0]<=c-o;)l.shift();let y=l[0][1];if(m=y<m?y:m+(y-m)*r,m>.999&&(m=1),C+=m-d[c%o],d[c%o]=m,c>=o-1){let w=C/o,b=w>.999?1:w;s.push(b),b<.999&&!f&&E++,f=b<.999}c++};return{push(B){let y=B[0].length;for(let w=0;w<y;w++){let b=0;for(let k=0;k<t;k++){let L=(B[k]||B[0])[w];i[k].push(L),L>b?b=L:-L>b&&(b=-L)}x(b>n?n/b:1)}},ready:()=>s.length-h,take(B){let y=Array.from({length:t},()=>new Float32Array(B));for(let w=0;w<B;w++){let b=s[h+w];for(let k=0;k<t;k++)y[k][w]=i[k][h+w]*b}return h+=B,h>65536&&(s.splice(0,h),i.forEach(w=>w.splice(0,h)),h=0),y},end(){for(let B=0;B<o-1;B++){for(let y=0;y<t;y++)i[y].push(0);x(1)}},get events(){return E}}}var Ss,fa,sn,ga,nr=W(()=>{"use strict";Ss=e=>20*Math.log10(e),fa=e=>-.691+10*Math.log10(e);sn=20;ga=e=>Math.pow(10,e/20)});function or(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function rr(e,t){return e.map((a,n)=>{let o=e[n-1]||"";return{id:a,title:t(a).title,fp:t(a).fp,prev:o,prevFp:o?t(o).fp:""}})}function ir(e,t,a){let n=new Map(a.map(i=>[i.id,i])),o=new Map;e.events.forEach(i=>{o.has(i.id)||o.set(i.id,[]),o.get(i.id).push(i)});let r=[];return xe(e).forEach(i=>i.takes.forEach((s,l)=>{let d=o.get(i.id)[l];if(!d||!d.clip||s.end<=s.start)return;let c=n.get(i.id);c&&r.push({uid:d.clip,id:i.id,title:i.title,clip:d.clip,ms:s.end-s.start,run:t,date:e.date,fp:c.fp,prev:c.prev,prevFp:c.prevFp,at:s.start})})),r.sort((i,s)=>i.at-s.at).map(({at:i,...s})=>s)}function sr(e,t){return t.map(a=>{let n=e.takes.filter(i=>i.id===a.id).map((i,s)=>({...i,no:s+1,outdated:i.fp!==a.fp?"slide":(i.prev??null)!==a.prev||i.prevFp!==a.prevFp?"before":""})),o=e.picks[a.id],r=null;if(o&&n.some(i=>i.uid===o))r=o;else{let i=n.filter(s=>!s.outdated);r=i.length?i[i.length-1].uid:null}return{id:a.id,title:a.title,takes:n,pick:r}})}function lr(e){let t=[],a=0;return e.forEach(n=>{let o=n.pick?n.takes.find(r=>r.uid===n.pick):null;o&&(t.push({id:n.id,title:n.title,t:a,clip:o.clip}),a+=o.ms)}),{events:t,picks:{},total:a}}function dn(e,t){let a=new Set(t);return e.filter(n=>a.has(n))}function cr(e,t,a){let n=t?e.indexOf(t):-1,o=e.indexOf(a);return n<0||o<0?[a]:e.slice(Math.min(n,o),Math.max(n,o)+1)}var dr=W(()=>{"use strict";ua()});var yc={};function _(e){try{let t=localStorage.getItem(e);if(t!==null||!e.startsWith("slidetake:"))return t;let a=e.slice(10);return localStorage.getItem("slidetake:"+a)??localStorage.getItem("traverse:"+a)}catch{return null}}function Y(e,t){try{localStorage.setItem(e,t)}catch{}}function Rs(e){try{return{html:window.marked?window.marked.parse(e):"<pre>"+A(e)+"</pre>",err:null}}catch{return{html:"<p>(could not render)</p>",err:"render error"}}}function Sa(){let e=M.brand||"",t=M.logo||"",a=/^chip$/i.test(M.brand_style||""),n=/^slidetake$/i.test(e)?'<span class="st-mark">'+zr+'<span class="word">Slide<span>take</span></span></span>':(t?'<img alt="" src="'+A(t)+'">':"")+(e?"<span"+(a?' class="chip"':"")+">"+A(e)+"</span>":"");if(Le.dataset.html!==n){Le.dataset.html=n,Le.innerHTML=n;let o=Le.querySelector("img");o&&(o.onload=o.onerror=()=>we(!0))}Le.hidden=!n,jn(),document.title=M.title||"Slidetake",zs(),Dr()}function Ps(){let e=String(M.accent||"").trim();if(!e||!window.CSS||!CSS.supports("color",e))return null;if(!CSS.supports("color","oklch(from red l c h)"))return{accent:e,line:e};let t=a=>"oklch(from "+e+" "+a+" c h)";return{dark:{accent:t(.8),accentSoft:t(.87),line:t(.5)},light:{accent:t(.45),accentSoft:t(.4),line:t(.75),ring:t(.7)}}}function zs(){let e="",t=(n,o)=>{let r=Object.entries(o||{}).filter(([i,s])=>ur[i]&&s&&typeof s!="object").map(([i,s])=>ur[i]+":"+String(s).replace(/[;{}<>]/g,"")).join(";");r&&(e+=n+"{"+r+`}
`)};[U&&U.colors,Ps()].filter(Boolean).forEach(n=>{["dark","light"].forEach(o=>{let r={...n,...n[o]||{}},i=o==="dark";r.accent&&typeof r.accent=="string"&&(r.accentSoft=r.accentSoft||r.accent,r.line=r.line||"color-mix(in srgb, "+r.accent+(i?" 45%, #09090b)":" 55%, #fff)"),r.ring=r.ring||(i?r.accent:r.line),r.onAccent=r.onAccent||(i?"color-mix(in srgb, "+r.accent+" 15%, #000)":"#fff")),t(i?'body:not([data-mode="light"])':'body[data-mode="light"]',r)})});let a=document.getElementById("st-colors");a||(a=document.createElement("style"),a.id="st-colors",document.head.appendChild(a)),a.textContent!==e&&(a.textContent=e),document.body.classList.toggle("st-header-color",e.includes("--header-bg"))}function Rt(e){let t=document.createElement("span");t.style.color="var("+e+")",document.body.appendChild(t);let a=getComputedStyle(t).color;return t.remove(),ze=ze||Object.assign(document.createElement("canvas"),{width:1,height:1}).getContext("2d",{willReadFrequently:!0}),ze.clearRect(0,0,1,1),ze.fillStyle="#000",ze.fillStyle=a,ze.fillRect(0,0,1,1),"#"+[...ze.getImageData(0,0,1,1).data.slice(0,3)].map(n=>n.toString(16).padStart(2,"0")).join("")}function Ds(e,t,a){let n=i=>[1,3,5].map(s=>parseInt(i.slice(s,s+2),16)),o=n(e),r=n(t);return"#"+o.map((i,s)=>Math.round(i*a+r[s]*(1-a)).toString(16).padStart(2,"0")).join("")}function Fa(){if(U&&U.themeKey&&!hr){let t=_(U.themeKey);return t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return String(hr||_("slidetake:mode")||M.mode||"dark").toLowerCase()==="light"?"light":"dark"}function Dr(){let e=Fa()==="light";e?document.body.dataset.mode="light":delete document.body.dataset.mode;let t=document.getElementById("btn-mode");t&&(t.innerHTML=e?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',t.title=(e?"Dark theme":"Light theme")+" (L)",t.setAttribute("aria-label",t.title))}function Fr(){let e=Fa()==="light"?"dark":"light";U&&U.themeKey?(Y(U.themeKey,e),document.documentElement.classList.toggle("dark",e==="dark")):Y("slidetake:mode",e),Dr(),se.querySelector(".echarts-container, .diagram.d2")&&pt(!0)}function Fs(){let t=(M.camera||"").replace(/^\[|\]$/g,"").split(",").map(a=>a.trim().replace(/^["']|["']$/g,"")).filter(Boolean);return t.length?t:["on","full","off"]}function Cn(e){return!ne&&e?Po(e.camera):[]}function Ke(e){return zo(Cn(e),e&&e.frags?e.frags.length:0)}function jr(){let e=Ke(u.get(g));return e[Math.min(ye,e.length-1)]||{cam:0,frag:0}}function js(){if(!g)return null;let e=u.get(g),t=Cn(e);if(t.length)return t[Math.min(jr().cam,t.length-1)];if(e&&e.el&&e.el.classList.contains("card-full"))return"off";for(let a=v.indexOf(g)-1;a>=0;a--){let n=Cn(u.get(v[a]));if(n.length)return n[n.length-1]}return null}function Ns(){let e={corner:(M.pip||"none").toLowerCase(),size:$a(parseFloat(M.pip_size)||24),circle:(M.pip_shape||"").toLowerCase()==="circle",mirror:!/^(no|false|off)$/i.test(M.pip_mirror||""),full:!1,off:!1,flip:!1,used:!1};return ra(e,js()),ge&&!/\b(off|hide)\b/i.test(ge)&&(e.off=!1),ra(e,ge),!Bt.includes(e.corner)&&(ae||e.used)&&(e.corner="bottom-right"),e.flip&&Bt.includes(e.corner)&&(e.corner=e.corner.includes("left")?e.corner.replace("left","right"):e.corner.replace("right","left")),e}function jn(){let e=!R.hidden&&R.offsetWidth?R.getBoundingClientRect():null,t=Ye=Ns(),a=Bt.includes(t.corner);if(R.className=a?[t.corner,t.circle&&"circle",ae&&"live",t.mirror&&"mirror",t.full&&"full",R.classList.contains("msg")&&"msg"].filter(Boolean).join(" "):"",R.style.width=t.size+"%",R.hidden=!a||ne||t.off,En.dataset.pip=R.hidden||t.full?"none":t.corner,R.hidden||vt||!R.animate)return;let n="cubic-bezier(.65,0,.35,1)";if(!e){R.animate([{opacity:0},{opacity:1}],{duration:300,easing:"ease-out"});return}let o=R.getBoundingClientRect();Math.abs(e.left-o.left)+Math.abs(e.top-o.top)+Math.abs(e.width-o.width)+Math.abs(e.height-o.height)<2||R.animate([{transformOrigin:"0 0",transform:"translate("+(e.left-o.left)+"px,"+(e.top-o.top)+"px) scale("+e.width/o.width+","+e.height/o.height+")"},{transformOrigin:"0 0",transform:"none"}],{duration:600,easing:n})}function _s(){let e=Ye;if(!e||R.hidden||e.full)return null;let t=j.clientWidth,a=j.clientHeight,n=16,o=t*e.size/100,r=e.circle?o:o*9/16,i=e.corner.includes("left")?n:t-n-o,s=e.corner.includes("top")?n:a-n-r;return{x0:i,y0:s,x1:i+o,y1:s+r}}function Us(){if(!bt)return;if(ne){aa(!0);return}let e=Fs();Be=(Be+1)%e.length,ge=e[Be],jn(),K||it("Camera: "+ge),!ae&&!R.hidden?$e():we()}function Nr(e){let t=Oo(e,{render:Rs});M=t.deck,u=t.nodes,Sa();let a={"+++":"+++ format",reveal:"reveal.js format",headings:"headings"}[t.format];Es.textContent=u.size+(u.size===1?" card":" cards")+" \xB7 "+a,qt.textContent=t.errCount?t.errCount+" card(s) had errors":""}function _r(){Te=[...u.values()].filter(n=>!n.parent).map(n=>n.id);let e=0;function t(n,o){let r=u.get(n);if(r.depth=o,r.children.length===0)r._slot=e++;else{r.children.forEach(s=>t(s,o+1));let i=r.children.map(s=>u.get(s)._slot);r._slot=(Math.min(...i)+Math.max(...i))/2}}Te.forEach(n=>t(n,0)),v=[];function a(n){v.push(n),u.get(n).children.forEach(a)}return Te.forEach(a),Math.max(1,e)}function qs(){let e=[],t=[],a=[];return u.forEach(n=>{e[n.depth]=Math.max(e[n.depth]||0,n._h),t[n.depth]=Math.max(t[n.depth]||0,n._w),a[n.depth]=(a[n.depth]||0)+1}),{maxH:e,maxW:t,count:a,maxDepth:e.length-1}}function Ur(e){e.x!==null&&!isNaN(e.x)&&(e.cx=e.x+e._w/2),e.y!==null&&!isNaN(e.y)&&(e.cy=e.y+e._h/2)}function Hs(){let{maxH:e,maxDepth:t}=qs(),a=[0];for(let l=1;l<=t;l++)a[l]=a[l-1]+e[l-1]+Ms;let n=Ls-lt,o=[],r=(l,d)=>{let c=u.get(l);c.cx+=d,c.children.forEach(C=>r(C,d))},i=l=>{let d=u.get(l);o[d.depth]=Math.max(o[d.depth]??-1/0,d.cx+d._w/2),d.children.forEach(i)};function s(l){let d=u.get(l),c=o[d.depth]!==void 0?o[d.depth]+n:-1/0;d.children.length?(d.children.forEach(s),d.cx=(u.get(d.children[0]).cx+u.get(d.children[d.children.length-1]).cx)/2,d.cx-d._w/2<c&&r(l,c-(d.cx-d._w/2))):d.cx=(c===-1/0?0:c)+d._w/2,i(l)}Te.forEach(s),u.forEach(l=>{l.cy=a[l.depth]+l._h/2,Ur(l)})}function Ws(e){let t=Math.PI*2/e,a=32,n=[],o=(s,l)=>Math.abs(s.cx-l.cx)<(s._w+l._w)/2+a&&Math.abs(s.cy-l.cy)<(s._h+l._h)/2+a,r=Math.max(0,...[...u.values()].map(s=>s.depth)),i=0;for(let s=0;s<=r;s++){let l=[...u.values()].filter(c=>c.depth===s);if(!l.length)continue;let d=s===0?Te.length>1?Is*.5:0:i+Bs;for(let c=0;c<400&&(l.forEach(m=>{let f=(m._slot+.5)*t-Math.PI/2;m.cx=d*Math.cos(f),m.cy=d*Math.sin(f),Ur(m)}),!!l.some((m,f)=>l.some((E,h)=>h>f&&o(m,E))||n.some(E=>o(m,E))));c++)d=d*1.02+10;i=d,n.push(...l)}}function Gs(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),a=[];for(;t.nextNode();)a.push(t.currentNode);a.forEach(n=>{let o=n.data.match(/^\s*\.element:\s*([\s\S]*)$/);if(!o)return;let r=n.previousSibling;for(;r&&r.nodeType===3&&!r.data.trim();)r=r.previousSibling;let i=r&&r.nodeType===1?r:n.parentElement;i&&Object.entries(Lt(o[1])).forEach(([s,l])=>{s==="class"?i.classList.add(...l.split(/\s+/).filter(Boolean)):s==="style"?i.style.cssText+=";"+l:i.setAttribute(s,l)})})}function Ks(e){let t=new DOMParser().parseFromString(e,"image/svg+xml"),a=t.documentElement;if(!a||a.localName!=="svg"||t.getElementsByTagName("parsererror").length)return null;let n=a.namespaceURI,o=i=>{[...i.children].forEach(s=>{s.namespaceURI!==n||!Ys.has(s.localName)?s.remove():o(s)}),[...i.attributes].forEach(s=>{let l=s.name.toLowerCase(),d=s.value;(l.startsWith("on")||/javascript:|expression\(/i.test(d)||/url\(\s*['"]?(?!#)/i.test(d)||(l==="href"||l==="xlink:href")&&!d.trim().startsWith("#"))&&i.removeAttribute(s.name)})};o(a);let r="st-svg"+ ++Vs+"-";return[a,...a.querySelectorAll("*")].forEach(i=>[...i.attributes].forEach(s=>{let l=s.name==="id"?r+s.value:s.value.replace(/url\(\s*(['"]?)#/g,"url($1#"+r);(s.name==="href"||s.name==="xlink:href")&&l.startsWith("#")&&(l="#"+r+l.slice(1)),l!==s.value&&(s.value=l)})),document.importNode(a,!0)}function Me(e,t){let a=e.classList.contains("fragment");["fragment","fade-up","visible","current-fragment"].forEach(n=>{e.classList.contains(n)&&(t.classList.add(n),e.classList.remove(n))}),e.dataset.fragmentIndex!==void 0&&(t.dataset.fragmentIndex=e.dataset.fragmentIndex,delete e.dataset.fragmentIndex),e.replaceWith(t),a&&u.forEach(n=>n.frags&&n.frags.forEach(o=>{let r=o.indexOf(e);r>=0&&(o[r]=t)}))}function mn(e){let t=document.createElement("figure");t.className="media",Me(e,t),t.appendChild(e);let a=e.getAttribute("alt");return a&&t.insertAdjacentHTML("beforeend","<figcaption>"+A(a)+"</figcaption>"),t}function Js(e,t){let a=document.createElement("figure");return a.className="media yt fragment yt-play"+(e.portrait?" portrait":""),a.innerHTML='<div class="frame"><iframe src="'+Go(e)+'" title="'+A(t||"YouTube video")+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>'+(t?"<figcaption>"+A(t)+"</figcaption>":""),a}function mr(e,t){let a=t<=4?t:t<=6?3:4;e.style.setProperty("--cols",a),e.style.setProperty("--rows",Math.ceil(t/a))}function Xs(e,t){t.querySelectorAll("pre > code.language-svg").forEach(r=>{let i=Ks(r.textContent.trim()),s=document.createElement("div");s.className=i?"diagram svg":"diagram err",i?s.appendChild(i):s.textContent="SVG error: not a valid <svg> drawing",Me(r.parentElement,s)}),t.querySelectorAll(":scope > p").forEach(r=>{let i=r.children.length===1?r.children[0]:null;if(!i)return;let s=i.tagName==="A"&&r.textContent.trim()===i.textContent.trim()?i.getAttribute("href"):i.tagName==="IMG"?i.getAttribute("src"):null,l=s&&nn(s);l&&Me(r,Js(l,i.tagName==="IMG"?i.getAttribute("alt"):""))}),t.querySelectorAll(":scope > ul, :scope > ol").forEach(r=>{let i=[...r.children];!i.length||!i.every(s=>fn(s)||Zs(s))||(r.classList.add("gallery"),i.some(s=>!fn(s))&&r.classList.add("diagrams"),i.forEach(s=>{if(!fn(s))return;let l=s.querySelector("img");s.innerHTML="",s.appendChild(l),mn(l)}),i.length>1&&i.every(s=>s.classList.contains("fragment"))?(r.classList.add("carousel"),i[0].classList.remove("fragment","fade-up"),i.forEach((s,l)=>{s.classList.replace("fade-up","current-visible");let d=s.querySelector("figcaption");d&&(d.dataset.count=l+1+" / "+i.length)})):mr(r,i.length))}),t.querySelectorAll(":scope > p").forEach(r=>{if(!$s(r))return;let i=[...r.querySelectorAll("img")];if(i.length===1){Me(r,i[0]),mn(i[0]);return}let s=document.createElement("div");s.className="gallery grid",Me(r,s),i.forEach(l=>{s.appendChild(l),mn(l)}),mr(s,i.length)});let a=[...t.children].filter(r=>!/^H[1-6]$/.test(r.tagName)&&!(r.nodeType===1&&r.tagName==="HR")),n=a.filter(r=>r.matches("figure.media"));n.length===1&&a.length===1&&e.classList.add("card-media"),a.length===1&&(a[0].matches("figure.media:not(.yt)")||a[0].matches(".gallery.carousel:not(.diagrams)"))&&e.classList.add("card-bleed");let o=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT);for(;o.nextNode();)if(/^\s*view\s*:\s*full\s*$/i.test(o.currentNode.data))e.classList.add("card-full");else if(n.length===1){e.classList.add("card-split",a.indexOf(n[0])===0?"media-first":"media-last");let r=document.createElement("div");r.className="split-text",a.filter(i=>i!==n[0]).forEach(i=>r.appendChild(i)),n[0].after(r),a.indexOf(n[0])!==0&&r.after(n[0])}t.querySelector(".gallery")&&e.classList.add("card-gallery")}function qr(e,t){let a=e.querySelector("iframe");a&&a.contentWindow&&a.contentWindow.postMessage(JSON.stringify({event:"command",func:t,args:[]}),"*")}function Qs(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),a=[];for(;t.nextNode();)/^\s*steps\s*$/i.test(t.currentNode.data)&&a.push(t.currentNode);a.forEach(n=>{for(let o=n.nextSibling;o&&!(o.nodeType===8&&/^\s*steps\s*:\s*off\s*$/i.test(o.data));o=o.nextSibling)o.nodeType!==1||o.classList.contains("fragment")||(/^(UL|OL)$/.test(o.tagName)?o.querySelectorAll(":scope > li").forEach(r=>r.classList.add("fragment","fade-up")):o.classList.add("fragment","fade-up"))})}function el(e){let t=o=>o.classList.contains("fragment")&&(o.tagName==="P"&&o.children.length===1&&o.children[0].tagName==="IMG"&&!o.textContent.trim()&&!nn(o.children[0].getAttribute("src")||"")||o.tagName==="PRE"&&!!o.querySelector(Hr)),a=[],n=[];[...e.children].forEach(o=>{t(o)?n.push(o):(n.length>1&&a.push(n),n=[])}),n.length>1&&a.push(n),a.forEach(o=>{let r=document.createElement("ul");o[0].before(r),o.forEach(i=>{let s=document.createElement("li");s.className="fragment fade-up",i.classList.remove("fragment","fade-up"),s.appendChild(i),r.appendChild(s)})})}function tl(e){let t=[...e.querySelectorAll(".fragment")].map((o,r)=>({e:o,i:r,k:o.dataset.fragmentIndex}));if(t.every(o=>o.k===void 0))return t.map(o=>[o.e]);let a=0;t.forEach(o=>{o.k=o.k===void 0?a:parseFloat(o.k),a=Math.max(a,o.k)+1}),t.sort((o,r)=>o.k-r.k||o.i-r.i);let n=[];return t.forEach((o,r)=>{r&&t[r-1].k===o.k?n[n.length-1].push(o.e):n.push([o.e])}),n}function Nn(e,t,a){!e||!e.frags||(a&&e.el.classList.add("snap"),e.frags.forEach((n,o)=>n.forEach(r=>{let i=r.classList.contains("visible");r.classList.toggle("visible",o<t),r.classList.toggle("current-fragment",o===t-1),r.classList.contains("yt-play")&&i!==o<t&&!a&&qr(r,o<t?"playVideo":"pauseVideo")})),a&&(e.el.offsetWidth,e.el.classList.remove("snap")))}function al(){try{return M.base?new URL(M.base,be||location.href):be?new URL(be):null}catch{return null}}function nl(e){let t=al(),a=0;return e.querySelectorAll("img[src], source[src], video[src], iframe[src], a[href]").forEach(n=>{let o=n.hasAttribute("src")?"src":"href",r=n.getAttribute(o);if(!r||/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(r))return;if(!t){o==="src"&&!r.startsWith("/")&&a++;return}let i=t;try{M.site&&(i=new URL(M.site,t))}catch{}n.setAttribute(o,new URL(r,r.startsWith("/")?i:t).href)}),a}function ja(e){let t=e.el,a=t.querySelector(".body");t.classList.add("measuring"),a.style.zoom="";let n=lt;e.visual=!!a.querySelector("iframe, .echarts-container, pre > code.language-dot, pre > code.language-d2, pre > code.language-echarts, .diagram, figure.media"),e.visual&&(n=de);let o=t.classList.contains("card-full");if(t.classList.remove("img-portrait","img-landscape","img-overlay"),o&&(n=de),t.classList.contains("card-bleed")){let s=Math.max(0,...[...a.querySelectorAll("img")].map(d=>d.naturalWidth&&d.naturalHeight?d.naturalWidth/d.naturalHeight:0))||1.7777777777777777,l=de-ba*s>=260;if(o&&l)t.classList.add("img-portrait"),t.style.setProperty("--img-w",Math.round(ba*s)+"px"),n=de;else if(o||Math.abs(s-16/9)<.08)t.classList.add("img-overlay"),n=de;else if(s<1.3){let d=Math.min(Math.round(ba*s),de-300);t.classList.add("img-portrait"),t.style.setProperty("--img-w",d+"px"),n=Math.min(de,Math.max(hn,d*2))}else t.classList.add("img-landscape"),n=Math.round(Math.max(lt,Math.min(de,(ba-Ts)*s))),t.style.setProperty("--img-h",Math.round(n/s)+"px")}else(a.querySelector('[style*="flex"], [style*="grid"], .r-hstack')||a.querySelectorAll("img").length>=4)&&(n=hn);let r=a.querySelectorAll("table");if(r.length){t.style.width=de+"px";let s=t.offsetWidth-a.clientWidth;r.forEach(l=>{n=Math.max(n,Math.min(hn,Math.ceil(l.offsetWidth)+s+12))})}let i=a.querySelectorAll(".fragment.grow");if(i.length){t.style.width=n+"px";let s=t.offsetWidth-a.clientWidth;i.forEach(l=>{n=Math.max(n,Math.min(de,Math.ceil(l.offsetWidth*1.3)+s))})}t.style.width=n+"px",t.scrollWidth>n+2&&(t.style.width=(n=Math.min(de,t.scrollWidth+24))+"px"),a.scrollWidth>a.clientWidth+2&&(a.style.zoom=(a.clientWidth/a.scrollWidth).toFixed(3)),e._w=n,e._h=t.offsetHeight||Sn,t.classList.remove("measuring")}function ol(){clearTimeout(fr),fr=setTimeout(()=>{u.forEach(ja),Jt(),we(!0)},200)}function ll(){let e=Fa()==="light"?"light":"dark",t=Rt(e==="light"?"--accent-ring":"--accent"),a="slidetake-"+e+"-"+t.slice(1);return gr.has(a)||(cl(a,sl[e],t),gr.add(a)),a}function cl(e,t,a){let n={axisLine:{lineStyle:{color:t.line}},axisTick:{lineStyle:{color:t.line}},axisLabel:{color:t.muted},splitLine:{lineStyle:{color:t.split}},nameTextStyle:{color:t.muted}};echarts.registerTheme(e,{color:[a,...t.palette],backgroundColor:"transparent",textStyle:{color:t.text,fontFamily:"'IBM Plex Sans', sans-serif"},title:{textStyle:{color:t.text},subtextStyle:{color:t.muted}},legend:{textStyle:{color:t.text}},tooltip:{backgroundColor:t.tip,borderColor:t.line,textStyle:{color:t.text}},categoryAxis:n,valueAxis:n,logAxis:n,timeAxis:n,line:{symbolSize:6,lineStyle:{width:2.5}},pie:{label:{color:t.text,textBorderWidth:0},labelLine:{lineStyle:{color:t.muted}}},funnel:{label:{color:t.text,textBorderWidth:0}}})}function ul(){let e=Fa()==="light"?"light":"dark",t=Rt("--node-bg"),a=Rt(e==="dark"?"--accent":"--accent-line"),n=e==="dark"?[.58,.38,.25,.18,.12]:[.7,.45,.25,.15,.08],o={...pl[e],N7:t,B1:Rt("--accent")};return n.forEach((r,i)=>{o["B"+(i+2)]=Ds(a,t,r)}),o}function Tn(e){return gn[e]||(gn[e]=new Promise((t,a)=>{let n=document.createElement("script");n.src=e,n.onload=t,n.onerror=()=>{delete gn[e],a(new Error("could not load "+e))},document.head.appendChild(n)}))}async function ml(){let e=De,t=[...se.querySelectorAll(".node pre > code.language-dot")];se.querySelectorAll(".node pre > code.language-echarts").forEach(r=>{let i=document.createElement("div");i.className="echarts-container",i.dataset.chart=r.textContent,Me(r.parentElement,i)});let a=[...se.querySelectorAll(".node .echarts-container[data-chart]")],n=[...se.querySelectorAll(".node pre > code.language-d2")];if(!t.length&&!a.length&&!n.length)return;let o=[];if(t.length)try{if(await Tn(rl),bn=bn||await Viz.instance(),e!==De)return;t.forEach(r=>{let i=document.createElement("div");i.className="diagram";try{i.appendChild(bn.renderSVGElement(r.textContent))}catch(s){i.className="diagram err",i.textContent="Diagram error: "+s.message}Me(r.parentElement,i)})}catch{o.push("diagrams")}if(n.length)try{if(!va){let i=await import(dl);va=new i.D2}if(e!==De)return;let r=ul();for(let i of n){let s=document.createElement("div");s.className="diagram d2";try{let l=await va.compile(hl(i.textContent));s.innerHTML=await va.render(l.diagram,{...l.renderOptions||{},themeOverrides:r,darkThemeOverrides:r})}catch(l){s.className="diagram err",s.textContent="Diagram error: "+(l.message||l)}if(e!==De)return;Me(i.parentElement,s)}}catch{o.push("D2 diagrams")}if(a.length)try{if(await Tn(il),e!==De)return;let r=ll();a.forEach(i=>{let s;try{s=JSON.parse(i.dataset.chart)}catch{i.textContent="Chart data is not valid JSON.";return}echarts.init(i,r,{renderer:"svg"}).setOption(Object.assign({backgroundColor:"transparent",animation:!vt},s))})}catch{o.push("charts")}e===De&&(o.length&&(qt.textContent="Could not load the "+o.join(" and ")+" renderer (offline?)"),u.forEach(ja),Jt(),we(!0))}function fl(){let e=[];return v.forEach(t=>{let a=ft(t),n=e[e.length-1];n&&n.sec===a?n.ids.push(t):e.push({sec:a,ids:[t]})}),e}function gl(){let a=0,n=0,o=0;fl().forEach((r,i)=>{let s=Math.max(...r.ids.map(c=>u.get(c)._h));i&&(a+=o/2+120+s/2);let l=n,d=n;r.ids.forEach((c,C)=>{let m=u.get(c);C&&(l+=90+m._w/2),m.cx=l,m.cy=a,d=l,l+=m._w/2}),n=d,o=s})}function bl(){u.forEach(e=>{e.cx=0,e.cy=0})}function Wr(){De++,window.echarts&&se.querySelectorAll(".echarts-container").forEach(a=>{let n=echarts.getInstanceByDom(a);n&&n.dispose()}),se.querySelectorAll("div.node").forEach(a=>a.remove());let e=_r(),t=0;u.forEach(a=>{let n=document.createElement("div");n.className="node",n.tabIndex=0,n.dataset.id=a.id;let o=a.parent?Na(a.id).slice(0,-1).map(i=>u.get(i).title).join(" / "):"";n.innerHTML=(o?'<div class="crumb">'+A(o)+"</div>":"")+'<div class="body">'+a.html+"</div>"+(a.err?'<div class="err-badge">!</div>':"");let r=n.querySelector(".body");Gs(r),Qs(r),el(r),Xs(n,r),r.querySelectorAll("thead").forEach(i=>{i.textContent.trim()||i.remove()}),t+=nl(r),a.frags=tl(r),r.querySelectorAll("img").forEach(i=>{i.complete||i.addEventListener("load",ol,{once:!0})}),n.querySelectorAll("a[href]").forEach(i=>{let s=i.getAttribute("href");if(s.startsWith("#")){let l=decodeURIComponent(s.slice(1));u.has(l)&&(i.classList.add("xlink"),i.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),p.active||N(l)}))}else i.target="_blank",i.rel="noopener",i.addEventListener("click",l=>l.stopPropagation())}),n.addEventListener("click",()=>{p.active||N(a.id)}),n.addEventListener("keydown",i=>{i.key==="Enter"&&i.target===n&&N(a.id)}),se.appendChild(n),a.el=n,Nn(a,a.frags.length)}),t&&!qt.textContent&&(qt.textContent=t+" image(s) use relative paths: add base: to the deck, or open it with ?src="),u.forEach(ja),Jt(e),ml()}function Jt(e){e===void 0&&(e=_r()),V==="radial"?Ws(e):V==="path"?gl():V==="focus"?bl():Hs(),se.classList.toggle("focus",V==="focus"),u.forEach(t=>{let a=t.el.style;a.setProperty("--cx",t.cx),a.setProperty("--cy",t.cy)}),vl(),yt(),qn()}function vl(){let e="";if(V==="focus"){un.innerHTML="";return}if(V==="path"){for(let t=1;t<v.length;t++){let a=u.get(v[t-1]),n=u.get(v[t]);e+='<path data-from="'+a.id+'" data-to="'+n.id+'" d="M '+a.cx+" "+a.cy+" L "+n.cx+" "+n.cy+'"/>'}un.innerHTML=e;return}u.forEach(t=>{if(!t.parent)return;let a=u.get(t.parent);if(V==="radial")e+='<path data-from="'+a.id+'" data-to="'+t.id+'" d="M '+a.cx+" "+a.cy+" L "+t.cx+" "+t.cy+'"/>';else{let n=a.cy+a._h/2,o=t.cy-t._h/2,r=n+(o-n)/2;e+='<path data-from="'+a.id+'" data-to="'+t.id+'" d="M '+a.cx+" "+n+" L "+a.cx+" "+r+" L "+t.cx+" "+r+" L "+t.cx+" "+o+'"/>'}}),un.innerHTML=e}function Na(e){let t=[],a=e;for(;a;)t.unshift(a),a=u.get(a).parent;return t}function ct(){let e=j.clientWidth,t=j.clientHeight;se.style.transform="translate("+e/2+"px,"+t/2+"px) scale("+P.zoom+") translate("+-P.x+"px,"+-P.y+"px)",Zr()}function _n(){jt&&(jt.kill(),jt=null)}function Gr(e,t){if(_n(),t||vt||!window.gsap){Object.assign(P,e),ct();return}let a=j.clientWidth,n=Math.hypot(e.x-P.x,e.y-P.y),o=e.zoom,r=gsap.timeline({onUpdate:ct,onComplete:()=>{jt=null}}),{zoom:i,...s}=e,l=n*Math.min(P.zoom,o),d=Math.max(.55,Math.min(1.3,.55+l/a*.3));if(r.to(P,{...s,duration:d,ease:"power2.inOut"},0),l>a*1.2){let c=Math.max(.06,Math.min(P.zoom,o,a*.9/(n+lt)));r.to(P,{zoom:c,duration:d/2,ease:"sine.out"},0).to(P,{zoom:o,duration:d/2,ease:"sine.in"},d/2)}else r.to(P,{zoom:o,duration:d,ease:"power2.inOut"},0);jt=r}function yl(){let e=j.getBoundingClientRect(),t=14,a=[];if(!Le.hidden&&Le.offsetWidth){let o=Le.getBoundingClientRect();a.push({x0:o.left-e.left-t,y0:o.top-e.top-t,x1:o.right-e.left+t,y1:o.bottom-e.top+t})}let n=_s();return n&&a.push({x0:n.x0-t,y0:n.y0-t,x1:n.x1+t,y1:n.y1+t}),a}function wl(){let e=j.clientWidth,t=j.clientHeight,a=[{x0:16,y0:K?20:56,x1:e-16,y1:t-(K?20:74)}];return yl().forEach(n=>{let o=[];a.forEach(r=>{if(n.x1<=r.x0||n.x0>=r.x1||n.y1<=r.y0||n.y0>=r.y1){o.push(r);return}[{...r,x1:Math.min(r.x1,n.x0)},{...r,x0:Math.max(r.x0,n.x1)},{...r,y1:Math.min(r.y1,n.y0)},{...r,y0:Math.max(r.y0,n.y1)}].forEach(i=>{i.x1-i.x0>80&&i.y1-i.y0>80&&o.push(i)})}),o.length&&(a=o)}),a}function Ln(e,t,a){let n=j.clientWidth,o=j.clientHeight,r=null;return wl().forEach(i=>{let s=a*Math.min((i.x1-i.x0)/e,(i.y1-i.y0)/t);(!r||s>r.zoom)&&(r={zoom:s,sx:(i.x0+i.x1)/2-n/2,sy:(i.y0+i.y1)/2-o/2})}),r}function Yr(e,t,a,n){return{x:e-a.sx/n,y:t-a.sy/n}}function Ve(e,t){let a=u.get(e);if(!a)return;let n=Ln(a._w,a._h,Ht),o=ft(e),r=v.filter(l=>ft(l)===o&&!u.get(l).visual).map(l=>{let d=u.get(l);return Ln(d._w,d._h,Ht).zoom}).sort((l,d)=>l-d),i=r.length?r[Math.floor((r.length-1)/2)]:n.zoom,s=Math.max(.2,Math.min(5,n.zoom,i));Gr(Object.assign(Yr(a.cx,a.cy,n,s),{zoom:s}),t)}function $t(e){let t=[...u.values()];if(!t.length)return;let a=j.clientWidth,n=j.clientHeight,o=Math.min(...t.map(c=>c.cx-c._w/2)),r=Math.max(...t.map(c=>c.cx+c._w/2)),i=Math.min(...t.map(c=>c.cy-c._h/2)),s=Math.max(...t.map(c=>c.cy+c._h/2)),l=Ln(r-o,s-i,.94),d=Math.max(.05,Math.min(1,l.zoom));Gr(Object.assign(Yr((o+r)/2,(i+s)/2,l,d),{zoom:d}),e)}function we(e){g&&u.has(g)?Ve(g,e):$t(e)}function yt(){let e=g?Na(g):[];u.forEach(t=>{let a=t.el;a.classList.toggle("current",t.id===g),a.classList.toggle("active-path",e.includes(t.id))}),se.querySelectorAll("#connectors path").forEach(t=>{let a=V==="path"?!!g&&v.indexOf(t.dataset.to)<=v.indexOf(g):e.includes(t.dataset.from)&&e.includes(t.dataset.to);t.classList.toggle("active",a)}),El(e),Kr()}function Vr(){return Mo(new URLSearchParams(location.search).get("duration")??M.duration)}function kl(){return K&&Vr()>0&&(!p.active||/^always$/i.test(M.timer||""))}function Ea(){let e=kl()&&Ie.start>0;if(Ne.classList.toggle("timed",e),!e){Ne.classList.remove("over");return}let a=(p.active&&p.t0?He():performance.now()-Ie.start)/Vr();Ne.firstChild.style.width=Math.min(100,a*100)+"%",Ne.classList.toggle("over",a>=1)}function xl(){Ie.start=performance.now(),clearInterval(Ie.timer),Ie.timer=setInterval(Ea,1e3),Ea()}function Sl(){clearInterval(Ie.timer),Ie.timer=null,Ie.start=0,Ea()}function Kr(){let e=K&&v.length>1&&!/^(off|no|false)$/i.test(M.progress||"");if(Ne.classList.toggle("show",e),!e)return;Ea();let t=v.indexOf(g),a=0,n=0;v.forEach((o,r)=>{let i=Ke(u.get(o)).length;a+=i,r<t?n+=i:r===t&&(n+=Math.min(ye,i-1)+1)}),Ne.lastChild.style.width=(a?n/a*100:0)+"%"}function El(e){pr.innerHTML=e.map((t,a)=>(a>0?'<span class="sep">\u203A</span>':"")+'<button class="crumb-btn'+(t===g?" here":"")+'" data-id="'+A(t)+'">'+A(u.get(t).title)+"</button>").join(""),pr.querySelectorAll(".crumb-btn").forEach(t=>t.addEventListener("click",()=>{p.active||N(t.dataset.id)}))}function Xt(e){let t=u.get(g);t&&(Nn(t,jr().frag,e),jn(),(R.hidden||!Ye||!Ye.full)&&Ll(t),Un(t))}function Tl(e){return!v.length||e.id!==v[0]&&e.id!==v[v.length-1]||e.el.querySelector("[data-gsap], .title-scramble")?null:[...e.el.querySelector(".body").children].filter(t=>!t.classList.contains("fragment"))}function Ll(e){if(e._played||!window.gsap||vt)return;e._played=!0;let t=Tl(e);if(t&&t.length){e._auto=t;let[a,...n]=t;/^H[1-3]$/.test(a.tagName)&&!a.children.length?(a.classList.add("auto-scramble"),br(a)):n.unshift(a),gsap.from(n,{opacity:0,y:24,duration:.7,ease:"power2.out",delay:.5,stagger:.45})}e.el.querySelectorAll("[data-gsap]").forEach(a=>{let n;try{n=JSON.parse(a.dataset.gsap)}catch{return}let o={duration:n.duration??1,delay:n.delay??0,ease:n.ease||"power2.out"};n.to?gsap.fromTo(a,n.from||{},Object.assign({},n.to,o)):n.from&&gsap.from(a,Object.assign({},n.from,o))}),e.el.querySelectorAll(".title-scramble").forEach(br)}function Wt(e){!e||!e._played||(e._played=!1,window.gsap&&(e._auto&&(e._auto.forEach(t=>{gsap.killTweensOf(t),gsap.set(t,{clearProps:"opacity,transform"})}),e._auto=null),e.el.querySelectorAll("[data-gsap]").forEach(t=>{gsap.killTweensOf(t);let a={};try{a=JSON.parse(t.dataset.gsap)}catch{}let n=new Set(Object.keys(Object.assign({},a.from,a.to)).map(o=>Cl.includes(o)?"transform":o));n.size&&gsap.set(t,{clearProps:[...n].join(",")})}),e.el.querySelectorAll(".title-scramble, .auto-scramble").forEach(t=>{t._scramble&&t._scramble.kill(),t.dataset.text&&(t.textContent=t.dataset.text)})))}function br(e){let t=e.dataset.text||(e.dataset.text=e.textContent),a=Array.from(t),n="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?",o={p:0};e._scramble=gsap.to(o,{p:1,duration:1.4,ease:"none",onUpdate(){let r=Math.floor(o.p*a.length);e.textContent=a.map((i,s)=>s<r||/\s/.test(i)?i:n[Math.random()*n.length|0]).join("")},onComplete(){e.textContent=t}})}function Un(e){clearTimeout(dt),!(!K||!e||!e.autoslide||p.active&&(!p.t0||p.paused))&&(dt=setTimeout(()=>{g===e.id&&Ae(1)},e.autoslide))}function Jr(e){let t=e&&e!==v[0]?e:"";try{T&&T.kind==="share"?history.replaceState(null,"",location.pathname+location.search+tn(T.data,t)):history.replaceState(null,"",e?"#"+encodeURIComponent(e):location.pathname+location.search)}catch{}}function N(e,t,a){if(!u.has(e))return;if(e!==g){ge=null,Be=-1,ye=a?Ke(u.get(e)).length-1:0;let r=u.get(g);r&&V==="focus"&&!t&&(r.el.classList.add("leaving"),setTimeout(()=>r.el.classList.remove("leaving"),600)),Xr()}let n=e!==g;if(n&&($r=g),g=e,clearTimeout(fe),fe=null,n&&V==="focus"&&!t&&!vt){let r=u.get(e).el;r.classList.add("entering"),r.offsetWidth,r.classList.remove("entering")}Xt(n),n&&!Ce&&Yt("slide",e);let o=u.get(e);n&&o.mapFirst&&!a&&!t&&V!=="focus"?($t(),fe=setTimeout(()=>{fe=null,g===e&&Ve(e)},1900)):Ve(e,t),yt(),qn(),Jr(e)}function Xr(){let e=u.get(g);e&&(e.el.querySelectorAll("figure.yt").forEach(t=>qr(t,"pauseVideo")),Nn(e,e.frags.length,!0),Wt(e))}function Ml(){if(!g&&_e&&u.has(_e)){Qr();return}g&&(_e=g),V==="focus"&&_a("path"),Xr(),clearTimeout(dt),g=null,yt(),qn(),$t(),Jr(null)}function Qr(){if(fe)return clearTimeout(fe),fe=null,Ve(g),!0;if(!g&&_e&&u.has(_e)){let e=_e;return _e=null,N(e),!0}return!1}function Ae(e){if(!g){v.length&&N(v[e>0?0:v.length-1]);return}if(fe&&e>0){clearTimeout(fe),fe=null,Ve(g);return}let t=Ke(u.get(g)),a=Math.min(ye,t.length-1)+e;if(a>=0&&a<t.length){ye=a,ge=null,Be=-1,Xt(),!ae&&!R.hidden&&Ye.used?$e():we(),yt();return}let n=v.indexOf(g)+e;n>=0&&n<v.length&&N(v[n],!1,e<0)}function Bl(){let e=u.get(g);e&&e.parent&&N(e.parent)}function Il(){let e=u.get(g);e&&e.children.length?N(e.children[0]):!g&&v.length&&N(v[0])}function qn(){let e=[...u.values()];if(!e.length){xn.innerHTML="",Se=null;return}Cs.textContent="map";let t=h=>h.cx,a=h=>h.cy,n=Math.min(...e.map(t))-lt/2,o=Math.max(...e.map(t))+lt/2,r=Math.min(...e.map(a))-Sn/2,i=Math.max(...e.map(a))+Sn/2,s=16,l=180,d=130,c=Math.min((l-2*s)/Math.max(1,o-n),(d-2*s-6)/Math.max(1,i-r)),C=l/2-(n+o)/2*c,m=d/2+5-(r+i)/2*c,f=g?Na(g):[],E="";e.forEach(h=>{if(!h.parent)return;let x=u.get(h.parent);E+='<line x1="'+(t(x)*c+C)+'" y1="'+(a(x)*c+m)+'" x2="'+(t(h)*c+C)+'" y2="'+(a(h)*c+m)+'" stroke="var(--panel-line)" stroke-width="1"/>'}),e.forEach(h=>{let x=h.id===g?"var(--accent)":f.includes(h.id)?"var(--accent-teal)":"var(--node-border)";E+='<circle data-id="'+A(h.id)+'" cx="'+(t(h)*c+C)+'" cy="'+(a(h)*c+m)+'" r="'+(h.id===g?4:3)+'" fill="'+x+'"><title>'+A(h.title)+"</title></circle>"}),E+='<rect id="mm-viewport" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.7"/>',xn.innerHTML=E,Se={s:c,ox:C,oy:m},Zr()}function Zr(){let e=document.getElementById("mm-viewport");if(!e||!Se)return;let t=j.clientWidth/P.zoom,a=j.clientHeight/P.zoom;e.setAttribute("x",(P.x-t/2)*Se.s+Se.ox),e.setAttribute("y",(P.y-a/2)*Se.s+Se.oy),e.setAttribute("width",Math.max(2,t*Se.s)),e.setAttribute("height",Math.max(2,a*Se.s))}function pt(e){Nr(ie.value),g&&!u.has(g)&&(g=null),Wr(),g?N(g,e):v.length?N(v[0],e):(g=null,$t(!0))}function _a(e,t){V=e,Y("slidetake:layout",e),document.querySelectorAll("#layout-toggle .seg-btn").forEach(a=>a.classList.toggle("active",a.dataset.mode===e)),u.size&&(!t&&!vt&&(se.classList.add("morph"),setTimeout(()=>se.classList.remove("morph"),700)),Jt(),ct(),g?Ve(g,t):$t(t))}function ei(e){return Math.max(.04,Math.min(5,e))}function Al(e){Ht=Math.round(Math.max(As,Math.min(Os,e))*100)/100,Y("slidetake:slideSize",Ht),g&&Ve(g)}function vr(e){g?Al(Ht+e*.1):ti(e>0?1.2:1/1.2)}function ti(e,t,a){_n();let n=ei(P.zoom*e);if(t!==void 0){let o=j.getBoundingClientRect(),r=t-o.left-o.width/2,i=a-o.top-o.height/2;P.x+=r/P.zoom-r/n,P.y+=i/P.zoom-i/n}P.zoom=n,ct()}function Ua(){U||(Pe.classList.toggle("collapsed"),document.getElementById("btn-edit-toggle").classList.toggle("active",!Pe.classList.contains("collapsed")))}function ve(e){K=e,document.body.classList.toggle("presenting",e),Gi();let t=document.documentElement;e&&t.requestFullscreen&&!document.fullscreenElement&&t.requestFullscreen().catch(()=>{}),!e&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),e&&!g&&v.length&&N(v[0]);let a=M.camera||[...u.values()].some(n=>n.camera);e&&a&&!ae&&!ne&&$e(),e?Un(u.get(g)):clearTimeout(dt),e?xl():Sl(),Kr()}function He(){return(p.paused?p.pauseAt:performance.now())-p.t0-p.pausedMs}function wt(e){e.classList.add("open")}function zl(e){if(Y("slidetake:analytics",e?"on":"off"),!e){window["ga-disable-"+Rl]=!0;let t=["","; Domain="+location.hostname,"; Domain=."+location.hostname.replace(/^www\./,"")];document.cookie.split(";").map(a=>a.split("=")[0].trim()).filter(a=>a==="_ga"||a.startsWith("_ga_")).forEach(a=>t.forEach(n=>{document.cookie=a+"=; Max-Age=0; Path=/"+n}))}ni()}function ni(){Wn.querySelectorAll("[data-analytics]").forEach(e=>e.setAttribute("aria-checked",String(e.dataset.analytics==="on"===Pl())))}function kt(){document.querySelectorAll(".modal.open").forEach(e=>e.classList.remove("open"))}function Dl(){let e=new URLSearchParams(location.search).get("obs");if(e){let[t,a,...n]=e.split(":");return Ta.value=t||"localhost",La.value=a||"4455",Ma.value=n.join(":"),!0}try{let t=JSON.parse(_("slidetake:obs")||"null");t&&(Ta.value=t.host||"localhost",La.value=t.port||"4455",Ma.value=t.password||"",Hn.checked=!0)}catch{}return!1}function ri(){if(Hn.checked)Y("slidetake:obs",JSON.stringify({host:Ta.value.trim(),port:La.value.trim(),password:Ma.value}));else try{localStorage.removeItem("slidetake:obs")}catch{}}function Ot(e,t){Sr.textContent=e,Sr.className=t||""}function Fl(e){return location.protocol==="https:"&&!ii(e)}async function si(){let e=Ta.value.trim()||"localhost",t="ws://"+e+":"+(La.value.trim()||"4455");if(Fl(e)){Fe=!1,Nt.disabled=!0,Ot(jl,"err");return}Ot("Connecting to "+t+"\u2026");try{await Tn(Ol);let a=window.OBSWebSocket&&(window.OBSWebSocket.default||window.OBSWebSocket);if(re)try{await re.disconnect()}catch{}re=new a,re.on("ConnectionClosed",()=>{Fe=!1,Ot("Disconnected from OBS","err"),Nt.disabled=!0}),re.on("RecordStateChanged",o=>{o.outputState==="OBS_WEBSOCKET_OUTPUT_STARTED"&&Ue&&(Ue(),Ue=null),o.outputState==="OBS_WEBSOCKET_OUTPUT_STOPPED"&&p.active&&p.withObs&&!p.finishing&&mt("Stopped in OBS")});let n=await re.connect(t,Ma.value||void 0);Fe=!0;try{let o=await re.call("GetVideoSettings");o&&o.fpsNumerator&&o.fpsDenominator&&(ai=o.fpsNumerator/o.fpsDenominator)}catch{}Ot("Connected"+(n&&n.obsWebSocketVersion?" \xB7 OBS WebSocket "+n.obsWebSocketVersion:""),"ok"),ri()}catch(a){Fe=!1,Ot("Could not connect ("+(a&&a.message||a)+"). Is OBS running with its WebSocket server on, and is the password right?","err")}Nt.disabled=!Fe}function Nl(){let e=document.getElementById("rec-screen"),t=screen.width,a=screen.height;if(Math.abs(t/a-16/9)<.02){e.innerHTML='<span class="ok">This screen is 16:9 ('+t+"\xD7"+a+"), right for YouTube.</span>";return}let n=[["16:10",1.6],["3:2",1.5],["4:3",4/3],["21:9",21/9],["16:9",16/9]],[o,r]=n.reduce((s,l)=>Math.abs(l[1]-t/a)<Math.abs(s[1]-t/a)?l:s),i=Math.abs(r-t/a)<.005?o:"about "+o;e.innerHTML='<span class="warn">This screen is '+i+" ("+t+"\xD7"+a+"), not 16:9, so the video will have bars or be cropped. Move this window to a 16:9 screen, physical or virtual (say 1920\xD71080), then press F there.</span>"}function xt(){let e=navigator.mediaDevices;if(!window.isSecureContext||!e||!e.getDisplayMedia)return{why:"This page can\u2019t capture itself here. Open Slidetake in Chrome or Edge on a computer."};if(!window.RestrictionTarget&&!window.CropTarget)return{why:"Recording in the browser needs Chrome or Edge (or another Chromium browser) on a computer."};let t=window.MediaRecorder?Zo(o=>MediaRecorder.isTypeSupported(o)):"";if(!t||!navigator.storage||!navigator.storage.getDirectory)return{why:"This browser can\u2019t record video here. Use a recent Chrome or Edge."};let{quality:a,device:n}=Qo(screen.width,screen.height,devicePixelRatio||1);return a?{ok:!0,type:t,quality:a}:{why:"This screen gives a "+n[0]+"\xD7"+n[1]+" frame, less than 720p. Use OBS, or a larger screen."}}async function St(){In++,pe&&(cancelAnimationFrame(pe.raf),pe.stream.getTracks().forEach(e=>e.stop()),pe.ctx.close().catch(()=>{}),pe=null,Bn.value=0)}async function Ia(){await St();let e=In;try{let t=ut.value,a=await navigator.mediaDevices.getUserMedia({audio:Ei(t)});if(e!==In){a.getTracks().forEach(l=>l.stop());return}let n=new AudioContext,o=n.createAnalyser();o.fftSize=512,n.createMediaStreamSource(a).connect(o);let r=new Float32Array(o.fftSize),i=pe={stream:a,ctx:n,raf:0},s=()=>{if(pe!==i)return;o.getFloatTimeDomainData(r);let l=0;for(let d of r)l=Math.max(l,Math.abs(d));Bn.value=Math.max(l,Bn.value*.85),i.raf=requestAnimationFrame(s)};s()}catch(t){ot.innerHTML='<span class="warn">The microphone isn\u2019t available: '+A(t.message||t.name)+". Allow it in the site settings.</span>"}}async function Ul(){try{pe||await Ia();let e=await navigator.mediaDevices.enumerateDevices(),t=(o,r)=>{let i=e.filter(m=>m.kind===o),s=i.find(m=>m.deviceId==="default"),l=s?s.label.replace(/^Default - /,""):"",d=i.filter(m=>m.deviceId!=="default"&&m.deviceId!=="communications"),c=m=>!!s&&(m.label===l||!!s.groupId&&m.groupId===s.groupId&&!d.some(f=>f!==m&&f.label===l)),C=d.some(m=>m.deviceId===r)||r==="none"?r:(d.find(c)||d[0]||{}).deviceId;return d.map((m,f)=>'<option value="'+A(m.deviceId)+'"'+(m.deviceId===C?" selected":"")+">"+A((m.label||(o==="audioinput"?"Microphone ":"Camera ")+(f+1))+(c(m)?" (system default)":""))+"</option>").join("")},a=qa();_t.innerHTML='<option value="none"'+(a==="none"?" selected":"")+">No camera</option>"+t("videoinput",a);let n=_("slidetake:mic")||"";ut.innerHTML=t("audioinput",n),n&&ut.value===n&&pe&&pe.stream.getAudioTracks()[0].getSettings().deviceId!==n&&Ia()}catch{}}function qa(){let e=_(ci());return e||(ql()?_("slidetake:cam")||"default":"none")}function di(e){Y(ci(),e),e!=="none"&&e!=="default"&&Y("slidetake:cam",e)}function Hl(){p.camWas=!ne;let e=qa()!=="none";e!==!ne&&aa(e,!0)}function pi(){p.camWas!=null&&(p.camWas!==!ne&&aa(p.camWas,!0),p.camWas=null)}async function Wl(){let e=xt();if(!e.ok)return ot.innerHTML='<span class="warn">'+A(e.why)+"</span>",e;wa&&(ot.innerHTML='<span class="warn">'+A(wa)+"</span>",wa="");let t=at.indexOf(e.quality),a=_("slidetake:quality");ht.innerHTML=at.slice(t).map(o=>"<option"+(o.name===a?" selected":"")+">"+o.name+"</option>").join("");let n="";try{let{quota:o,usage:r}=await navigator.storage.estimate(),i=at.find(s=>s.name===ht.value)||e.quality;n=" Room for about "+Math.floor((o-r)/er(i))+" minutes of takes."}catch{}return ot.querySelector(".warn")||(ot.innerHTML='<span class="ok">Ready: this screen records up to '+e.quality.name+" in fullscreen."+A(n)+"</span>"),e}function Gn(e){li=e,Y("slidetake:rec-mode",e),document.querySelectorAll('input[name="rec-mode"]').forEach(t=>{t.checked=t.value===e}),document.getElementById("rec-obs").hidden=e!=="obs",e==="browser"?Ca.classList.contains("open")&&(kt(),Ga()):(St(),Nt.disabled=!Fe)}function Aa(){if(!bt)return;let e=v.reduce((t,a)=>t+Ke(u.get(a)).length,0);if(document.getElementById("rec-deck-info").innerHTML=A(M.title||(Te[0]?u.get(Te[0]).title:"This deck"))+" \xB7 "+v.length+" slides \xB7 "+e+' presses<br><label class="check"><input type="checkbox" id="rec-cam-on"'+(qa()!=="none"?" checked":"")+"> Include my camera (it turns on when the take starts)</label>",document.getElementById("rec-cam-on").onchange=t=>di(t.target.checked?_("slidetake:cam")||"default":"none"),(li||(xt().ok?"browser":"obs"))==="browser"){Ga();return}Zl(),Nl(),wt(Ca),Gn("obs")}async function Yn(e,t){return(await(await navigator.storage.getDirectory()).getDirectoryHandle("slidetake-takes",{create:!0})).getDirectoryHandle(e,{create:!!t})}async function Vn(e){try{await(await(await navigator.storage.getDirectory()).getDirectoryHandle("slidetake-takes")).removeEntry(e,{recursive:!0})}catch{}}async function hi(e){window.RestrictionTarget&&e.restrictTo?await e.restrictTo(await RestrictionTarget.fromElement(En)):await e.cropTo(await CropTarget.fromElement(En))}async function Gl(e){try{window.RestrictionTarget&&e.track.restrictTo?await e.track.restrictTo(null):await e.track.cropTo(null),await hi(e.track)}catch{}await e.track.applyConstraints(ui(e.quality)).catch(()=>{}),await Gt()}async function Yl(){let e=xt();if(!e.ok)throw new Error(e.why);let t=at.find(s=>s.name===ht.value)||e.quality;document.body.classList.add("rec-frame");let a=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:It},audio:!1,preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude",monitorTypeSurfaces:"exclude"}),n=a.getVideoTracks()[0],o=()=>a.getTracks().forEach(s=>s.stop());if(!n.restrictTo&&!n.cropTo)throw o(),new Error("Share \u201Cthis tab\u201D to record the slides.");try{await hi(n)}catch(s){throw o(),new Error("Chrome could not record just the slides ("+(s.message||s.name)+").")}await n.applyConstraints(ui(t)).catch(()=>{});let r;try{let s=_("slidetake:mic");r=await navigator.mediaDevices.getUserMedia({audio:Ei(s)})}catch(s){throw o(),new Error("The microphone isn\u2019t available ("+(s.message||s.name)+").")}let i=new Date().toISOString().replace(/[:.]/g,"-");p.browser={id:i,display:a,mic:r,track:n,quality:t,type:e.type,stream:new MediaStream([n,...r.getAudioTracks()]),dir:await Yn(i,!0),clips:[],cur:null,chain:Promise.resolve(),error:null},n.addEventListener("ended",()=>{p.active&&!p.finishing&&mt("Sharing stopped")})}function mi(){let e=p.browser;e&&(e.display.getTracks().forEach(t=>t.stop()),e.mic.getTracks().forEach(t=>t.stop()),document.body.classList.remove("rec-frame"))}function Vl(e){let t=p.browser,a="take-"+t.clips.length+"."+rn(t.type),n={name:a,rec:null,done:null};t.clips.push(n),e.clip=t.id+"/"+a,t.chain=t.chain.then(async()=>{let o=await(await t.dir.getFileHandle(a,{create:!0})).createWritable(),r=new MediaRecorder(t.stream,{mimeType:t.type,videoBitsPerSecond:t.quality.bitrate,audioBitsPerSecond:ha}),i=Promise.resolve();r.ondataavailable=l=>{l.data.size&&(i=i.then(()=>o.write(l.data)).catch(d=>{t.error=d}))},n.done=new Promise(l=>{r.onstop=async()=>{await i,await o.close().catch(()=>{}),l()}}),await new Promise(l=>{r.onstart=l,r.start(1e3)}),e.t=Math.round(He()),e.cutAt!=null&&(e.lead=Math.max(0,Math.round(e.t-e.cutAt)));let s=t.cur;t.cur=n,n.rec=r,s&&s.rec.state!=="inactive"&&s.rec.stop()}).catch(o=>{t.error=o})}async function fi(e,t){if(p.active||!v.length)return;let a=e==="obs";if(St(),e==="browser"){K||ve(!0);try{await Yl()}catch(d){document.body.classList.remove("rec-frame"),K&&ve(!1),wa=d.name==="NotAllowedError"?"Recording needs this tab shared: press \u25CF Record again and choose Share.":d.message,Ga({setup:!0});return}}kt();let n=t&&t.length?t.filter(d=>v.includes(d)):null,o=n?n[0]:v[0],r=v[v.indexOf(o)-1]||null;Object.assign(p,{active:!0,withObs:a,counting:!0,paused:!1,finishing:!1,t0:0,pausedMs:0,events:[],outputPath:null,only:n?new Set(n):null}),e!=="browser"&&(p.browser=null),document.body.classList.add("recording"),no();let i=document.getElementById("rec-layout").value;i!=="current"&&i!==V&&_a(i,!0),K||ve(!0),Hl(),r?(document.body.classList.add("no-anim"),u.get(r)._played=!0,Ce=!0,N(r,!0,!0),Ce=!1,R.getAnimations().forEach(d=>d.finish()),await Gt(),document.body.classList.remove("no-anim")):(g===o&&(ye=0,ge=null,Be=-1),N(o,!0)),!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen().catch(()=>{});let s=Pt.querySelector(".hint");for(let d=3;d>0;d--)if(s.textContent=(document.fullscreenElement?"":"Press F for fullscreen \xB7 ")+"recording starts after the countdown \xB7 Esc to cancel",Pt.querySelector(".num").textContent=d,Pt.classList.add("show"),await Ba(1e3),!p.active)return;if(Pt.classList.remove("show"),await Gt(),a){let d=new Promise(c=>{Ue=c,setTimeout(()=>{Ue&&(Ue(),Ue=null)},2500)});try{await re.call("StartRecord")}catch(c){Kn("OBS could not start recording: "+(c&&c.message||c));return}if(await d,!p.active)return}p.browser&&await Gl(p.browser),p.counting=!1,p.t0=performance.now();let l=u.get(o);if(r){Yt("slide",o),p.browser&&await p.browser.chain,Wt(l),Ce=!0,N(o),Ce=!1;return}Wt(l),Xt(!0),Yt("slide",g)}function Kn(e){if(p.active=!1,p.counting=!1,p.browser){let t=p.browser;t.chain.then(()=>{t.cur&&t.cur.rec.state!=="inactive"&&t.cur.rec.stop()}).then(()=>Vn(t.id)),mi(),p.browser=null}Pt.classList.remove("show"),document.body.classList.remove("recording"),K&&ve(!1),pi(),it(e)}function Yt(e,t,a){if(!p.active||!p.t0||p.finishing)return;let n=u.get(t),o={id:t,title:n?n.title:t,retake:e==="retake",t:Math.round(He()),obsT:null};a==null&&p.browser&&(a=o.t),a!=null&&(o.cutAt=a,o.lead=Math.max(0,Math.round(o.t-a))),p.events.push(o),p.browser&&Vl(o),p.withObs&&Fe&&(re.call("GetRecordStatus").then(r=>{r&&typeof r.outputDuration=="number"&&(o.obsT=r.outputDuration)}).catch(()=>{}),n&&re.call("CreateRecordChapter",{chapterName:(o.retake?"RETAKE \xB7 ":"")+n.title}).catch(()=>{}))}function Kl(e){let t=e.key;if((wr.includes(t)||kr.includes(t)||xr.includes(t)||t==="Escape")&&e.preventDefault(),t==="Escape"){p.counting?Kn("Take cancelled"):mt("Stopped early");return}if((t==="f"||t==="F")&&!document.fullscreenElement&&document.documentElement.requestFullscreen){e.preventDefault(),document.documentElement.requestFullscreen().catch(()=>{});return}if(!(p.counting||p.finishing||Ut)){if(xr.includes(t)){Ql();return}p.paused||(wr.includes(t)?Jl():kr.includes(t)&&$l())}}function Jl(){let e=Ke(u.get(g)),t=Math.min(ye,e.length-1)>=e.length-1,a=v.indexOf(g);if(!t){Ae(1);return}if(!p.only){a===v.length-1?mt():Ae(1);return}let n=v.slice(a+1).find(o=>p.only.has(o));n?v[a+1]===n?Ae(1):gi(v[v.indexOf(n)-1],n,"slide"):mt()}async function $l(){let e=u.get(g);if(!e||Ut)return;let t=g,a=$r;if(!a||a===t||!u.has(a)){Xl(e);return}gi(a,t,"retake")}async function gi(e,t,a){let n=u.get(t);if(!n||Ut)return;Ut=!0;let o=He();document.body.classList.add("no-anim");let r=u.get(e);Ce=!0,r._played=!0,N(e,!0,!0),R.getAnimations().forEach(i=>i.finish()),Ce=!1,await Gt(),document.body.classList.remove("no-anim"),Yt(a,t,o),p.browser&&await p.browser.chain,Wt(n),Ce=!0,N(t),Ce=!1,!ae&&!R.hidden&&Ye.used&&$e(),Ut=!1}function Xl(e){Yt("retake",g),ye=0,ge=null,Be=-1,Wt(e),Xt(!0),!ae&&!R.hidden&&Ye.used?$e():we(),yt()}async function Ql(){if(p.t0)if(p.paused){if(Mn.classList.remove("show"),await Gt(),p.withObs&&await re.call("ResumeRecord").catch(()=>{}),p.browser){let e=p.browser;e.chain=e.chain.then(()=>{e.cur&&e.cur.rec.state==="paused"&&e.cur.rec.resume()})}p.pausedMs+=performance.now()-p.pauseAt,p.paused=!1,Un(u.get(g))}else{if(p.paused=!0,p.pauseAt=performance.now(),clearTimeout(dt),p.withObs&&await re.call("PauseRecord").catch(()=>{}),p.browser){let e=p.browser;e.chain=e.chain.then(()=>{e.cur&&e.cur.rec.state==="recording"&&e.cur.rec.pause()})}Mn.classList.add("show")}}async function mt(e){if(!p.active||p.finishing)return;if(p.counting){Kn("Take cancelled");return}p.finishing=!0,clearTimeout(dt),p.paused&&(p.pausedMs+=performance.now()-p.pauseAt,p.paused=!1,Mn.classList.remove("show"));let t=Math.round(He()),a=null;if(p.withObs){await Ba(1200),t=Math.round(He());try{let r=await re.call("GetRecordStatus");r&&typeof r.outputDuration=="number"&&(a=r.outputDuration)}catch{}try{let r=await re.call("StopRecord");p.outputPath=r&&r.outputPath}catch(r){e=(e?e+". ":"")+"OBS did not confirm the stop ("+(r&&r.message||r)+")"}}let n=p.browser;n&&(await Ba(600),await n.chain,t=Math.round(He()),n.cur&&n.cur.rec&&n.cur.rec.state!=="inactive"&&n.cur.rec.stop(),await Promise.all(n.clips.map(r=>r.done)),mi(),p.browser=null,n.error&&(e=(e?e+". ":"")+"Some of the take could not be saved ("+(n.error.message||n.error.name)+")")),p.active=!1,p.finishing=!1,document.body.classList.remove("recording"),K&&ve(!1),pi();let o={key:Je(),deckTitle:M.title||u.get(v[0]).title,date:new Date().toISOString(),withObs:p.withObs,outputPath:p.outputPath,reason:e||"",total:t,totalObs:a,fps:n?It:ai,...n?{inBrowser:!0,takesId:n.id,quality:n.quality.name,type:n.type}:{},events:p.events.map(r=>({id:r.id,title:r.title,retake:r.retake,t:r.t,obsT:r.obsT,...r.lead?{lead:r.lead}:{},...r.clip?{clip:r.clip}:{}})),picks:{}};if(o.inBrowser){ic(o);return}Jn(o),Mi(o)}function Je(){return Ze(M.title||(v[0]?u.get(v[0]).title:"deck"))}function bi(){try{return JSON.parse(_("slidetake:sessions")||"[]")}catch{return[]}}function Jn(e){let t=bi().filter(a=>a.date!==e.date);t.unshift(e),t.slice(12).forEach(a=>{a.takesId&&Vn(a.takesId)}),Y("slidetake:sessions",JSON.stringify(t.slice(0,12)))}function Zl(){let e=document.getElementById("rec-sessions"),t=bi().filter(a=>a.key===Je()&&!a.inBrowser);e.innerHTML=t.length?"<h3>Earlier takes of this deck</h3>"+t.map((a,n)=>'<div class="row"><button class="btn small" data-session="'+n+'">Review</button><span>'+A(new Date(a.date).toLocaleString())+" \xB7 "+oe(a.totalObs??a.total)+(a.inBrowser?" \xB7 in this browser"+(a.cleaned?" (takes deleted)":""):a.withObs?"":" \xB7 rehearsal")+(a.outputPath?" \xB7 "+A(tt(a.outputPath)):"")+"</span></div>").join(""):"",e.querySelectorAll("[data-session]").forEach(a=>a.onclick=()=>{kt(),Mi(t[+a.dataset.session])})}function ft(e){let t=u.has(e)?Na(e):[e];return t[Math.min(1,t.length-1)]}function vi(e,t){let a=ft(e);return{sec:a,title:u.has(a)?u.get(a).title:t}}function Xn(){let e=Object.keys(M).filter(t=>t==="tags"||/_tags$/.test(t)).flatMap(t=>[].concat(M[t])).filter(t=>typeof t=="string");return[...new Set(e.map(t=>t.trim()).filter(Boolean))]}function ec(){return[].concat(M.related||[]).map(e=>{let t=String(e).match(/^\[([^\]]+)\]\(([^)]+)\)$/),a=String(e).split("|");return t?t[1]+": "+t[2]:a.length===2?a[0].trim()+": "+a[1].trim():String(e)})}function Li(){if(M.permalink||M.url)return M.permalink||M.url;let e=M.site||_("slidetake:site");if(!e||!be)return Er();try{let t=new URL(be).pathname.replace(/\/index\.md$/i,"/").replace(/\.md$/i,"/");return new URL(t,e).href}catch{return Er()}}function Er(){if(location.protocol==="file:"||ii(location.hostname)||/^\/(edit|new|share)\b/.test(location.pathname)||location.hash.includes("deflate:"))return"";let e=new URL(location.href);return e.hash="",["obs","edit","layout","mode"].forEach(t=>e.searchParams.delete(t)),e.href}function Qn(e){let t=$n(e),a=document.getElementById("rv-link").value.trim(),n=ec(),o=Xn(),r=[];M.summary&&r.push(M.summary),a&&r.push("\u{1F4D1} Slides: "+a),t.lines.length>=3&&r.push(`Chapters
`+t.lines.join(`
`)),n.length&&r.push(`Related
`+n.map(i=>"\u2022 "+i).join(`
`)),o.length&&r.push(o.slice(0,3).map(i=>"#"+i.replace(/[^\p{L}\p{N}]+/gu,"")).join(" ")),document.getElementById("rv-yt-desc").value=r.join(`

`),document.getElementById("rv-chapters-note").textContent=(t.dropped?t.dropped+" section"+(t.dropped>1?"s were":" was")+" under 10 seconds and folded into the chapter before, as YouTube requires. ":"")+(t.lines.length<3?"YouTube needs at least three chapters, so none are listed. ":"")+"Final length "+oe(t.length)+"."}function Mi(e){D=e,Z=null;let t=xe(e),a=e.events.filter(r=>r.retake).length,n=e.withObs||e.inBrowser;qe.classList.toggle("in-browser",!!e.inBrowser),qe.classList.remove("board"),document.getElementById("rv-title").textContent=(n?"Review the take \xB7 ":"Rehearsal \xB7 ")+e.deckTitle,document.getElementById("rv-render-status").textContent=e.cleaned?"These takes were deleted.":"",document.getElementById("rv-render-btn").disabled=document.getElementById("rv-clean").disabled=!!e.cleaned,document.getElementById("rv-info").textContent=[e.reason,new Date(e.date).toLocaleString(),(n?"recorded ":"ran ")+oe(e.totalObs??e.total),t.size+" slides",a?a+" retake"+(a>1?"s":""):"no retakes",e.inBrowser?e.quality+", in this browser":e.outputPath?"saved to "+e.outputPath:e.withObs?"":"nothing was recorded"].filter(Boolean).join(" \xB7 "),document.getElementById("rv-file").textContent=e.outputPath?" ("+tt(e.outputPath)+")":"",document.getElementById("rv-yt-title").value=e.deckTitle;let o=pa(e);Oa.value=[...Oa.options].reduce((r,i)=>Math.abs(i.value-o)<Math.abs(r.value-o)?i:r).value,document.getElementById("rv-yt-tags").value=Xn().join(", "),document.getElementById("rv-link").value=Li(),S.src&&(e.inBrowser||Oe!==tt(e.outputPath)&&e.outputPath)&&(S.removeAttribute("src"),S.load(),Oe=""),document.getElementById("rv-novideo").hidden=!!S.src,Qt(),wt(qe),e.inBrowser?G.textContent=e.cleaned?"":"Click a take to preview it.":cc(e)}function Qt(){if(D&&D.board){gt();return}let e=D,t=document.getElementById("rv-list"),a=null;t.innerHTML=[...xe(e).values()].map(n=>{let o=e.picks[n.id]??n.takes.length,r=ft(n.id),i=r!==a;a=r;let s=n.takes.map(l=>'<button class="rv-chip'+(o===l.no?" on":"")+'" data-id="'+A(n.id)+'" data-take="'+l.no+'">Take '+l.no+" \xB7 "+oe(l.end-l.start)+"</button>").join("");return'<div class="rv-row'+(i?" sec":"")+'"><div class="t">'+A(n.title)+"<small>"+oe(n.takes[0].start)+'</small></div><div class="rv-chips">'+s+"</div></div>"}).join(""),t.querySelectorAll(".rv-chip").forEach(n=>n.onclick=()=>{e.picks[n.dataset.id]=+n.dataset.take,Jn(e),Qt();let o=xe(e).get(n.dataset.id),r=o&&o.takes[+n.dataset.take-1];if(!r)return;let i=o.title+(o.takes.length>1?" \xB7 take "+r.no:"");if(e.inBrowser){let s=e.events.filter(l=>l.id===n.dataset.id)[r.no-1];s&&s.clip&&Wa([{clip:s.clip,keep:(r.end-r.start)/1e3,title:i}])}else Pa([{start:r.start,end:r.end,title:i}])}),document.getElementById("rv-ffmpeg").value=yi(e,document.getElementById("rv-mode").value),Qn(e),Bi(e)}async function Bi(e){let t=document.getElementById("rv-final"),a=++wn,n=et(e).reduce((r,i)=>r+i.end-i.start,0),o=r=>(r?"about "+(r>1e9?(r/1e9).toFixed(1)+" GB":Math.max(1,Math.round(r/1e6))+" MB")+" \xB7 ":"Final cut ")+oe(n);if(!e.inBrowser||e.cleaned){t.textContent=o(null);return}try{let r=0;for(let i of At(e))yn.has(i.clip)||yn.set(i.clip,(await Zt(i.clip)).size),r+=yn.get(i.clip);a===wn&&(t.textContent=o(r))}catch{a===wn&&(t.textContent=o(null))}}function Pa(e){if(!S.src){Ra=e,G.textContent=Rn?"Opening the recording\u2026 it plays when ready.":"Open the recording to preview.";return}Ra=null,Z={ranges:e,i:0},G.textContent="\u25B6 "+e[0].title;let t=()=>{S.currentTime=e[0].start/1e3,S.play().catch(a=>{a&&a.name!=="AbortError"&&(G.textContent="Could not play: "+a.message)})};S.readyState>=1?t():S.addEventListener("loadedmetadata",t,{once:!0})}function Ha(){rt=null}function Zn(){let e=F&&!F.single&&!S.paused;Ii.textContent=e?"\u275A\u275A Pause":"\u25B6 Preview",document.querySelectorAll("#rv-list .rv-row.playing").forEach(n=>n.classList.remove("playing"));let t=F&&F.parts[F.i],a=t&&t.id&&document.querySelector('#rv-list .rv-row[data-id="'+CSS.escape(t.id)+'"]');a&&(a.classList.add("playing"),a.scrollIntoView({block:"nearest"}))}function tc(e){let t=D?At(D):[],a=t.findIndex(o=>o.id===e.id),n=a>=0?t[a+1]:null;rt=n?n.id:null,G.textContent=n?"Preview continues from "+n.title+".":"That was the last slide: Preview plays from the start."}function Ai(e){return Array.from({length:e.numberOfChannels},(t,a)=>{let n=new Float32Array(e.numberOfFrames);return e.copyTo(n,{planeIndex:a,format:"f32-planar"}),n})}async function Zt(e){let[t,a]=e.split("/");return(await(await Yn(t)).getFileHandle(a)).getFile()}async function Wa(e,t=0,a=!1){if(!(!D||D.cleaned||!e.length)){Z=null,F={parts:e,i:t,single:a};try{let n=await Zt(e[t].clip);S.src&&URL.revokeObjectURL(S.src),S.src=URL.createObjectURL(n),G.textContent="\u25B6 "+e[t].title,await S.play()}catch(n){if(n&&n.name==="AbortError")return;F=null,G.textContent=n&&n.name==="NotFoundError"?"This take is no longer in the browser.":"Could not play this take: "+(n&&n.message||n)}}}function Oi(){let e=F;if(e.i+1<e.parts.length){Wa(e.parts,e.i+1,e.single);return}F=null,S.pause(),e.single?tc(e.parts[0]):G.textContent="",Zn()}async function ac(e){if(!e.where)return!0;try{let t=await ao("video-folder");return!t||t.name!==e.where||await t.queryPermission({mode:"readwrite"})!=="granted"||await t.getFileHandle(e.name),!0}catch{return!1}}async function Ri(e){let t=D;if(!t||!t.inBrowser||t.cleaned)return;let a=At(t);if(!a.length){le.textContent="No slide has a take yet: nothing to save.";return}let n=JSON.stringify([a.map(c=>[c.clip,Math.round(c.keep*1e3)]),We(),Vt(),t.type]),o=t.board&&I.lastDownload;if(!e&&o&&o.sig===n&&await ac(o)){le.innerHTML="Already saved in "+A(Cr(o))+'. A new video is made only when a take or the sound settings change. <button class="btn small" id="rv-save-again">Save another copy</button>',document.getElementById("rv-save-again").onclick=()=>Ri(!0);return}let r=rn(t.type||"")==="mp4",i=Je()+" "+oc(new Date)+"."+(r?"mp4":"webm"),s=null,l="";try{let c=await Pi(!1);c&&(s=await(await c.getFileHandle(i,{create:!0})).createWritable(),l=c.name)}catch(c){if(c&&c.name==="AbortError")return}let d=document.getElementById("rv-render-btn");d.disabled=!0,le.textContent="Preparing the download\u2026";try{let c=await import(_l),C=s?new c.StreamTarget(s):new c.BufferTarget,m=new c.Output({format:r?new c.Mp4OutputFormat({fastStart:s?!1:"in-memory"}):new c.WebMOutputFormat,target:C}),f=1,E="",h=We()&&Vt();if(We()){let z=await Tr(c,a,1,!1,"Measuring the volume");if(z&&isFinite(z.integrated)){let q=ln(z,{limit:h});if(h&&Math.abs(q)>=.05){let X=await Tr(c,a,ga(q),!0,"Checking the volume");X&&isFinite(X.integrated)&&(q=Math.min(q+(-14-X.integrated),sn))}f=ga(q);let ce=h?-14:z.integrated+q,te=!h&&ln(z,{limit:!0})-q>.5;E=" \xB7 loudness "+z.integrated.toFixed(1)+(Math.abs(q)<.05?" LUFS, left as is":" \u2192 "+ce.toFixed(1)+" LUFS")+(te?"; a loud peak held it back, turn on Peak limiter to reach "+-14:"")}}let x=f!==1||h;await nc(c,a);let B=null,y=null,w=0,b=-1,k=-1,L=null,J=[],ee=async()=>{for(;J.length&&L.ready()>=J[0].n;){let z=J.shift(),q=L.take(z.n),ce=new Float32Array(z.n*z.ch);q.forEach((te,X)=>ce.set(te,X*z.n)),await y.add(new c.AudioSample({data:ce,format:"f32-planar",numberOfChannels:z.ch,sampleRate:z.rate,timestamp:z.t}))}};for(let[z,q]of a.entries()){le.textContent="Joining take "+(z+1)+" of "+a.length+"\u2026";let ce=new c.Input({source:new c.BlobSource(await Zt(q.clip)),formats:c.ALL_FORMATS}),te=await ce.getPrimaryVideoTrack(),X=await ce.getPrimaryAudioTrack();if(!te)throw new Error(q.title+" has no video");B||(B=new c.EncodedVideoPacketSource(await te.getCodec()),m.addVideoTrack(B,{frameRate:It}),X&&(y=x?new c.AudioSampleSource({codec:r?"aac":"opus",bitrate:ha}):new c.EncodedAudioPacketSource(await X.getCodec()),m.addAudioTrack(y)),await m.start());let Ct={decoderConfig:await te.getDecoderConfig()},Xe=0,so=!0;for await(let H of new c.EncodedPacketSink(te).packets())H.timestamp>=q.keep||(b=ma(b,w+H.timestamp),await B.add(H.clone({timestamp:b}),so&&z===0?Ct:void 0),so=!1,Xe=Math.max(Xe,H.timestamp+H.duration));if(X&&y&&x)for await(let H of new c.AudioSampleSink(X).samples(0,Xe)){if(H.timestamp+H.duration>Xe+1e-4){H.close();continue}k=ma(k,w+H.timestamp);let he=Ai(H);if(he.forEach(me=>{for(let Qe=0;Qe<me.length;Qe++)me[Qe]*=f}),h)L=L||cn(H.sampleRate,he.length),L.push(he),J.push({t:k,n:H.numberOfFrames,rate:H.sampleRate,ch:he.length}),H.close(),await ee();else{let me=H.numberOfFrames,Qe=new Float32Array(me*he.length);he.forEach((Xi,Qi)=>Qe.set(Xi,Qi*me)),await y.add(new c.AudioSample({data:Qe,format:"f32-planar",numberOfChannels:he.length,sampleRate:H.sampleRate,timestamp:k})),H.close()}}else if(X&&y){let H={decoderConfig:await X.getDecoderConfig()},he=!0;for await(let me of new c.EncodedPacketSink(X).packets())me.timestamp+me.duration>Xe+1e-4||(k=ma(k,w+me.timestamp),await y.add(me.clone({timestamp:k}),he&&z===0?H:void 0),he=!1)}w+=Xe}if(L&&(L.end(),await ee(),L.events&&(E+=", "+L.events+" peak"+(L.events===1?"":"s")+" limited")),le.textContent="Finishing\u2026",await m.finalize(),!s){let z=document.createElement("a");z.href=URL.createObjectURL(new Blob([C.buffer],{type:r?"video/mp4":"video/webm"})),z.download=i,z.click(),setTimeout(()=>URL.revokeObjectURL(z.href),1e4)}let $={sig:n,name:i,where:l};t.board&&(I.lastDownload=$,ea()),le.textContent="Saved in "+Cr($)+" ("+oe(w*1e3)+E+")."}catch(c){le.textContent="Could not save the video: "+(c&&c.message||c),s&&s.abort().catch(()=>{})}finally{d.disabled=!!t.cleaned}}async function Tr(e,t,a,n,o){let r=null,i=null;for(let[s,l]of t.entries()){le.textContent=o+" "+(s+1)+" of "+t.length+"\u2026";let d=await new e.Input({source:new e.BlobSource(await Zt(l.clip)),formats:e.ALL_FORMATS}).getPrimaryAudioTrack();if(d)for await(let c of new e.AudioSampleSink(d).samples(0,l.keep)){let C=Ai(c);r=r||ar(c.sampleRate,C.length),a!==1&&n?(C.forEach(m=>{for(let f=0;f<m.length;f++)m[f]*=a}),i=i||cn(c.sampleRate,C.length),i.push(C),i.ready()&&r.add(i.take(i.ready()))):r.add(C),c.close()}}return i&&(i.end(),i.ready()&&r.add(i.take(i.ready()))),r?r.result():null}async function nc(e,t){let a=[];for(let i of t){let s=await new e.Input({source:new e.BlobSource(await Zt(i.clip)),formats:e.ALL_FORMATS}).getPrimaryVideoTrack(),l=s&&await s.getDecoderConfig();a.push(l?l.codec+" "+l.codedWidth+"\xD7"+l.codedHeight+" "+(l.description?[...new Uint8Array(l.description)].join("."):""):"none")}let n=new Map;a.forEach(i=>n.set(i,(n.get(i)||0)+1));let o=[...n.entries()].sort((i,s)=>s[1]-i[1])[0][0],r=t.filter((i,s)=>a[s]!==o);if(r.length)throw new Error(r.map(i=>i.title).join(", ")+(r.length===1?" was":" were")+" recorded at a different size ("+a[t.indexOf(r[0])].split(" ")[1]+", not "+o.split(" ")[1]+"). Tick "+(r.length===1?"it":"them")+" and record again")}async function Pi(e){if(!window.showDirectoryPicker)return null;let t=e?null:await ao("video-folder");if(t){let a=await t.queryPermission({mode:"readwrite"});if(a==="prompt"&&(a=await t.requestPermission({mode:"readwrite"})),a==="granted")return t}return t=await window.showDirectoryPicker({id:"slidetake-videos",mode:"readwrite",startIn:"videos"}),Ui("video-folder",t),t}function eo(){let e=zi();if(I&&Lr===e)return I;Lr=e;try{I=JSON.parse(_(e)||"null")}catch{I=null}return(!I||!Array.isArray(I.takes))&&(I={takes:[],picks:{},type:"",quality:""}),I}function ic(e){eo();let t=ir(e,e.takesId,Di());t.forEach(a=>{delete I.picks[a.id]}),I.takes.push(...t),Object.assign(I,{type:e.type,quality:e.quality}),ea(),je.clear(),Ga({note:(e.reason?e.reason+". ":"")+t.length+" new take"+(t.length===1?"":"s")+" on the board."})}function Fi(){let e=sr(eo(),Di()),t=Object.assign(lr(e),{board:!0,inBrowser:!0,withObs:!1,type:I.type||"video/mp4",quality:I.quality||"",deckTitle:M.title||(v[0]?u.get(v[0]).title:"Deck"),date:new Date().toISOString()});return{rows:e,sess:t}}function ji(){ot.innerHTML="",Wl().then(e=>{e.ok?Ul().then(za):za()})}function za(){let e=ut.selectedOptions[0],t=xt(),a=_t.selectedOptions[0],n=t.ok?[ht.value,a?a.textContent:qa()==="none"?"No camera":"Camera",e&&e.textContent].filter(Boolean).join(" \xB7 "):"not ready";document.getElementById("rv-setup-sum").textContent=n,to.title="Recording setup: "+n}function Ga(e={}){if(!bt)return;kt(),eo(),qe.classList.add("in-browser","board"),document.getElementById("rv-title").textContent="Takes \xB7 "+(M.title||(v[0]?u.get(v[0]).title:"Deck")),document.getElementById("rv-yt-title").value=M.title||(v[0]?u.get(v[0]).title:""),document.getElementById("rv-yt-tags").value=Xn().join(", "),document.getElementById("rv-link").value=Li(),S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),Z=null,F=null,Ha(),le.textContent="",gt(),wt(qe);let t=xt().ok;Ge.open=!!e.setup||!t||!I.takes.length,Ge.open?ji():za(),G.textContent=e.note||(I.takes.length?"Click a take to preview it.":"Nothing recorded yet. Press \u25CF Record to record the deck.")}function gt(){let{rows:e,sess:t}=Fi();D=t;let a=document.getElementById("rv-list"),n=null;a.innerHTML=e.map(c=>{let C=ft(c.id),m=C!==n;n=C;let f=A(c.id),E={slide:"Recorded before this slide changed",before:"Starts with the entry from the slide before, which has changed or is gone: record this slide again"},h=c.takes.length?c.takes.map(x=>'<button class="rv-chip'+(c.pick===x.uid?" on":"")+(x.outdated?' outdated" title="'+E[x.outdated]:"")+'" data-id="'+f+'" data-uid="'+A(x.uid)+'">Take '+x.no+" \xB7 "+oe(x.ms)+"</button>").join("")+(c.pick?"":'<span class="rv-none">'+(c.takes.some(x=>x.outdated==="before")&&!c.takes.some(x=>x.outdated==="slide")?"The slide before changed: record again":"Changed since: record again")+"</span>"):'<span class="rv-none">No take yet</span>';return'<div class="rv-row with-sel'+(m?" sec":"")+(je.has(c.id)?" selected":"")+'" data-id="'+f+'"><input type="checkbox" class="rv-sel" data-id="'+f+'"'+(je.has(c.id)?" checked":"")+' aria-label="Select '+A(c.title)+' to record"><div><div class="t">'+A(c.title)+'</div><div class="rv-chips">'+h+"</div></div></div>"}).join(""),a.querySelectorAll(".rv-chip").forEach(c=>c.onclick=()=>{I.picks[c.dataset.id]=c.dataset.uid,ea(),gt();let C=e.find(f=>f.id===c.dataset.id),m=C&&C.takes.find(f=>f.uid===c.dataset.uid);m&&Wa([{id:C.id,clip:m.clip,keep:m.ms/1e3,title:C.title+" \xB7 take "+m.no}],0,!0)}),a.querySelectorAll(".rv-sel").forEach(c=>c.addEventListener("click",C=>{(C.shiftKey?cr(v,Mr,c.dataset.id):[c.dataset.id]).forEach(f=>{c.checked?je.add(f):je.delete(f)}),Ha(),Mr=c.dataset.id,gt()}));let o=dn(v,je),r=xt().ok;document.getElementById("rv-rec").disabled=!r,document.getElementById("rv-sel-note").textContent=o.length?o.length+"/"+v.length+" slide"+(o.length===1?"":"s")+" up for a take":"",document.getElementById("rv-render-btn").disabled=document.getElementById("rv-play-final").disabled=!t.events.length;let i=e.filter(c=>c.pick).length,s=e.filter(c=>c.takes.length&&!c.pick).length;document.getElementById("rv-info").textContent=I.takes.length?[I.takes.length+" take"+(I.takes.length===1?"":"s"),i+" of "+e.length+" slides ready",s?s+" to record again":"",I.quality?I.quality+", in this browser":""].filter(Boolean).join(" \xB7 "):v.length+" slides, nothing recorded yet",Qn(t);let l=$n(t),d=document.getElementById("rv-chapters");Ni=l.lines.join(`
`),d.disabled=l.lines.length<3,d.title=l.lines.length<3?"YouTube needs at least three chapters of 10 seconds or more":"Copies the "+l.lines.length+" chapters, to paste into the YouTube description",Bi(t)}async function sc(e){for(let a of e)try{let[n,o]=a.clip.split("/");await(await Yn(n)).removeEntry(o)}catch{}let t=new Set(e.map(a=>a.uid));I.takes=I.takes.filter(a=>!t.has(a.uid)),Object.keys(I.picks).forEach(a=>{t.has(I.picks[a])&&delete I.picks[a]}),ea(),S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),F=null,Ha(),gt()}function _i(e){return new Promise((t,a)=>{let n=indexedDB.open(e||"slidetake",1);n.onupgradeneeded=()=>n.result.createObjectStore("kv"),n.onsuccess=()=>t(n.result),n.onerror=()=>a(n.error)})}async function ao(e){let t=async a=>{let n=await _i(a);return await new Promise(o=>{let r=n.transaction("kv").objectStore("kv").get(e);r.onsuccess=()=>o(r.result),r.onerror=()=>o(null)})};try{return await t()??await t("markcast")??await t("traverse")??null}catch{return null}}async function Ui(e,t){try{(await _i()).transaction("kv","readwrite").objectStore("kv").put(t,e)}catch{}}async function Ya(e){Rn=!0;try{return await lc(e)}finally{Rn=!1}}async function lc(e){let t=await e.getFile();for(let a=0;a<10;a++){await new Promise(o=>setTimeout(o,1e3));let n=await e.getFile();if(n.size===t.size&&n.lastModified===t.lastModified)return n;t=n}return t}function ta(e,t,a){S.src&&URL.revokeObjectURL(S.src),zt=t||null,a||(On=0),S.src=URL.createObjectURL(e),Oe=e.name,document.getElementById("rv-novideo").hidden=!0,G.textContent="Loaded "+e.name+". Click a take to preview it.",Ra?Pa(Ra):a&&Z&&Pa(Z.ranges.slice(Z.i)),D&&(document.getElementById("rv-ffmpeg").value=yi(D,document.getElementById("rv-mode").value))}async function cc(e){let t=tt(e.outputPath);if(!(!t||!window.showDirectoryPicker)&&!(Oe===t&&S.src))try{let a=await ao("obs-folder");if(!a||await a.queryPermission({mode:"read"})!=="granted")return;let n=await a.getFileHandle(t);G.textContent="Opening "+t+"\u2026",ta(await Ya(n),n)}catch{}}function it(e,t){if(!p.active){if(clearTimeout(ka),!R.hidden&&!R.classList.contains("live")){Ft.classList.remove("show"),Hi.textContent=e,R.classList.add("msg"),t||(ka=setTimeout(Wi,9e3));return}Ft.textContent=e,Ft.classList.add("show"),t||(ka=setTimeout(()=>Ft.classList.remove("show"),9e3))}}function Wi(){Hi.textContent="PIP camera",R.classList.remove("msg")}function no(){clearTimeout(ka),Ft.classList.remove("show"),Wi()}function kn(){let e=!1;try{e=window.top!==window.self}catch{e=!0}return e?" This page is running inside a preview frame that may not allow cameras. Open Slidetake directly in Chrome (from localhost or as a file).":window.isSecureContext?" Allow camera access for this page in the browser\u2019s site settings (the icon at the left of the address bar), then try again.":" Browsers only allow cameras on secure pages. Open it from http://localhost or as a local file in Chrome."}function oo(){ae&&ae.getTracks().forEach(t=>t.stop()),ae=null;let e=R.querySelector("video");e&&e.remove()}async function $e(){if(!(ae||ne)){{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){it("Camera not available on this page."+kn(),!0);return}if(Ee.disabled)return;Ee.disabled=!0,it("Waiting for camera permission \u2014 check the browser prompt near the address bar.",!0);try{let t=_("slidetake:cam");ae=await navigator.mediaDevices.getUserMedia({video:{...t?{deviceId:{ideal:t}}:{},width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30}},audio:!1}),no()}catch(t){let a=t&&t.name;it(a==="NotAllowedError"||a==="SecurityError"?"Camera access was blocked."+kn():a==="NotFoundError"||a==="OverconstrainedError"?"No camera was found. Check that a webcam is connected.":a==="NotReadableError"?"The camera is busy \u2014 close other apps using it (Zoom, OBS, FaceTime) and try again.":"Could not start the camera"+(a?" ("+a+")":"")+"."+kn(),!0);return}finally{Ee.disabled=!1,ro()}ae.getVideoTracks().forEach(t=>t.addEventListener("ended",()=>{oo(),Sa(),we()}));let e=document.createElement("video");e.autoplay=!0,e.muted=!0,e.playsInline=!0,e.srcObject=ae,R.appendChild(e)}Sa(),we()}}function ro(){Ee.querySelector("svg")||(Ee.innerHTML=dc+'<span class="lbl"> Camera</span>'),Ee.classList.toggle("on",!ne),Ee.setAttribute("aria-pressed",String(!ne)),Ee.title=ne?"Camera is off for every slide (C)":"Camera is on and follows the deck (C)"}function aa(e,t){e&&!bt||(ne=!e,ne&&(oo(),no()),ge=null,Be=-1,ye=Math.min(ye,Math.max(0,Ke(u.get(g)).length-1)),ro(),Sa(),Xt(),yt(),we(),!K&&!t&&it(e?"Camera on \u2014 slides follow their camera settings.":"Camera off \u2014 camera settings are ignored and slides use the whole screen."),e&&$e())}function Gi(){document.body.classList.remove("idle"),clearTimeout(Br),K&&(Br=setTimeout(()=>document.body.classList.add("idle"),2e3))}function Kt(e,t){st.textContent=e,st.classList.add("show"),clearTimeout(Ar),Ar=setTimeout(()=>st.classList.remove("show"),t||2500)}function Pn(e,{keepObs:t=!0,keepEdit:a=!0,slide:n=""}={}){let o=new URL(jo(e),location.origin);return new URLSearchParams(location.search).forEach((r,i)=>{i==="src"||i==="obs"&&!t||i==="edit"&&!a||o.searchParams.set(i,r)}),n&&(o.hash=n),o.href.replace(o.pathname,o.pathname.replace(/%40/g,"@"))}async function uc(e){let t={keepObs:!1,keepEdit:!1,slide:e};if(T.kind==="source")return{link:Pn(T.source,t),inside:!1};if(T.kind==="copy"&&ca(O)&&["url","gist","builtin"].includes(O.origin.kind))return{link:Pn(O.origin,t),inside:!1};let n=T.kind==="share"?T.data:await _o(ie.value),o=new URLSearchParams(location.search);return["src","obs","edit"].forEach(r=>o.delete(r)),{link:location.origin+"/share"+(o.toString()?"?"+o:"")+tn(n,e),inside:!0}}function hc(){let e=_("slidetake:draft");if(!e||e===Va)return null;let t=sa(e,{kind:"file",name:"your earlier draft"},{exported:!0});Y("slidetake:copy",JSON.stringify(t));try{localStorage.removeItem("slidetake:draft")}catch{}return t}function na(){Y("slidetake:copy",JSON.stringify(O))}function Et(){if(U)return;let e;if(io())e='<span class="mine">'+A(ue.file)+'</span> <span class="ro">\xB7 on this computer, saved as you type</span>';else if(T.kind==="copy")e='<span class="mine">Your copy of '+A(ke(O.origin))+"</span>"+(la(O)?' <span class="edited">\xB7 edited</span>':"");else{let a=T.kind==="share"?"a shared deck":ke(T.source);e='<span class="mine">'+A(a.charAt(0).toUpperCase()+a.slice(1))+'</span> <span class="ro">\xB7 read-only, typing makes your copy</span>'}document.getElementById("doc-state").innerHTML=e,Pe.classList.toggle("unsaved",T.kind==="copy"&&la(O)),document.getElementById("btn-reset").hidden=!(T.kind==="copy"&&!ca(O));let t=document.getElementById("continue");t.hidden=T.kind==="copy"||!O,O&&(t.textContent="Your copy \u2192",t.title="Continue your copy of "+ke(O.origin))}function Yi(e){return!O||!la(O)?!0:confirm("Your copy of "+ke(O.origin)+" has edits you haven't saved or shared. Replace it with "+e+"?")}function Vi(){let e=new URLSearchParams(location.search);return e.delete("src"),e.delete("template"),"/edit"+(e.toString()?"?"+e:"")}function mc(){let e=T.kind==="share"?{kind:"shared"}:T.source;return Yi("a copy of "+ke(e))?(O=sa(T.text,e),T={kind:"copy"},history.pushState(null,"",Vi()+(g&&g!==v[0]?"#"+encodeURIComponent(g):"")),Kt("Editing your own copy of "+ke(e)+". The original is unchanged.",4e3),!0):(ie.value=T.text,!1)}function fc(){T={kind:"copy"},history.pushState(null,"",Vi()),Pe.classList.contains("collapsed")&&Ua(),ie.value=O.text,pt(!0),Et()}function io(){return!!(ue&&T&&T.kind==="source"&&T.source.kind==="url"&&new URL(T.source.url,location.href).pathname===ue.deck)}function gc(e){fetch(ue.save,{method:"PUT",body:e}).catch(()=>Kt("Could not save "+ue.file+": is npx slidetake still running?",6e3))}async function bc(e){if(e.kind==="builtin")return xa[e.id==="help"?"docs":e.id]??xa.home;if(e.kind==="gist"){let a=await fetch("https://api.github.com/gists/"+encodeURIComponent(e.id));if(!a.ok)throw new Error(a.status===404?"no such gist":a.status+" "+a.statusText);let n=Object.values((await a.json()).files||{}),o=n.find(r=>r.filename===e.file)||n.find(r=>/\.(md|markdown)$/i.test(r.filename))||n[0];if(!o)throw new Error("the gist has no files");return be=o.raw_url,o.truncated?await(await fetch(o.raw_url)).text():o.content}let t=await fetch(e.url);if(!t.ok)throw new Error(t.status===404?"not found":t.status+" "+t.statusText);return be=new URL(e.url,location.href).href,await t.text()}function Pr(){return T={kind:"source",source:{kind:"builtin",id:"home"},text:xa.home},T.text}async function vc(){if(ue&&Q.page==="source"&&Q.source.kind==="builtin"&&Q.source.id==="home"&&location.pathname==="/"&&(Q.source={kind:"url",url:ue.deck}),U)return be=U.base||location.href,T={kind:"source",source:{kind:"url",url:be},text:Ao(U.settings||{})+String(U.markdown||"")},T.text;if(Q.page==="edit"){if(O)return T={kind:"copy"},O.text;history.replaceState(null,"","/new"+location.search),Q.page="pick"}if(Q.page==="pick")return wt(document.getElementById("new-dialog")),T={kind:"source",source:{kind:"builtin",id:"template:blank"},text:xa["template:blank"]},T.text;if(Q.page==="share")try{let e=await Uo(Q.data);return T={kind:"share",data:Q.data,text:e},e}catch{return Kt("This link's deck is damaged or cut short, so it could not be opened.",6e3),Pr()}try{let e=await bc(Q.source);return T={kind:"source",source:Q.source,text:e},e}catch(e){return qt.textContent="Could not load the deck ("+e.message+")",Kt("Could not load "+ke(Q.source)+": "+e.message,6e3),Pr()}}var U,ue,zr,bt,vt,xa,ie,j,se,un,pr,Es,qt,xn,Cs,Pe,ba,Ts,lt,hn,de,Sn,Ls,Ms,Bs,Is,As,Os,Ht,u,v,Te,g,Fn,V,K,M,ne,ae,Le,R,En,P,jt,ur,ze,hr,ye,ge,Be,Ye,Ys,Vs,$s,Hr,fn,Zs,be,fr,rl,il,sl,gr,dl,va,pl,hl,gn,De,bn,Ne,Ie,Cl,dt,fe,$r,Ce,_e,Se,ya,vn,nt,yr,Ol,wr,kr,xr,Ca,qe,Pt,Mn,Ta,La,Ma,Hn,Sr,Nt,re,Fe,Ue,ai,p,Ba,Gt,Rl,Wn,Pl,oi,ii,jl,_l,_t,ut,ht,Bn,ot,li,wa,pe,In,ql,ci,ui,Ut,Oe,$n,yi,wi,We,ki,An,Vt,xi,Si,Ei,Ci,Ti,D,Z,S,G,yn,wn,Oa,Ra,Ii,rt,F,le,Cr,oc,I,Lr,Mr,je,zi,ea,rc,Di,Ge,to,Ni,zt,On,Rn,Dt,qi,Ee,Ft,ka,Hi,dc,Br,Re,Ir,st,Ar,pc,zn,Dn,Or,Da,Q,Rr,T,O,Ki=W(()=>{"use strict";uo();ho();fo();bo();yo();ko();So();Co();oa();Ro();Do();Za();an();Wo();Yo();tr();nr();dr();ua();U=window.SLIDETAKE||null,ue=window.SLIDETAKE_LOCAL||null,zr=document.querySelector("header .mark .logo").outerHTML;document.documentElement.classList.toggle("embed",!!U);bt=!U||U.recording===!0||new URLSearchParams(location.search).has("obs");document.documentElement.classList.toggle("no-record",!bt);vt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,xa={home:Va,docs:mo,features:go,privacy:vo,showcase:To,"template:blank":wo,"template:talk":xo,"template:recording":Eo},ie=document.getElementById("editor"),j=document.getElementById("stage"),se=document.getElementById("world"),un=document.getElementById("connectors"),pr=document.getElementById("breadcrumbs"),Es=document.getElementById("status-count"),qt=document.getElementById("status-err"),xn=document.getElementById("mm-svg"),Cs=document.getElementById("mm-label"),Pe=document.getElementById("editor-pane"),ba=540,Ts=96,lt=440,hn=720,de=960,Sn=180,Ls=540,Ms=100,Bs=110,Is=420,As=.35,Os=1,Ht=parseFloat(_("slidetake:slideSize"))||.92,u=new Map,v=[],Te=[],g=null,Fn=["focus","path","radial","tree"],V="path",K=!1,M={},ne=!0,ae=null,Le=document.getElementById("brand"),R=document.getElementById("pip"),En=document.getElementById("stage-wrap"),P={x:0,y:0,zoom:.6},jt=null;ur={accent:"--accent",accentSoft:"--accent-teal",line:"--accent-line",ring:"--accent-ring",header:"--header-bg",headerText:"--header-ink",onAccent:"--on-accent"};ze=null;hr=new URLSearchParams(location.search).get("mode");ye=0;ge=null,Be=-1,Ye=null;Ys=new Set("svg g defs symbol use path rect circle ellipse line polyline polygon text tspan textPath title desc marker linearGradient radialGradient stop clipPath mask pattern filter feGaussianBlur feOffset feBlend feFlood feComposite feMerge feMergeNode feColorMatrix feDropShadow".split(" ")),Vs=0;$s=e=>e.querySelector("img")&&!e.textContent.trim()&&[...e.children].every(t=>/^(IMG|BR)$/.test(t.tagName));Hr=["dot","d2","echarts","svg"].map(e=>":scope > code.language-"+e).join(", "),fn=e=>!!e.querySelector("img")&&!e.textContent.trim(),Zs=e=>e.children.length===1&&(e.children[0].tagName==="PRE"&&!!e.children[0].querySelector(Hr)||e.children[0].matches("div.diagram"));be=null;fr=null;rl="https://cdn.jsdelivr.net/npm/@viz-js/viz@3.4.0/lib/viz-standalone.js",il="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js",sl={dark:{palette:["#60a5fa","#f472b6","#a78bfa","#fb923c","#facc15","#a1a1aa"],text:"#e4e4e7",muted:"#a1a1aa",line:"#3f3f46",split:"#27272a",tip:"#18181b"},light:{palette:["#2563eb","#db2777","#7c3aed","#ea580c","#ca8a04","#71717a"],text:"#27272a",muted:"#71717a",line:"#d4d4d8",split:"#e4e4e7",tip:"#ffffff"}};gr=new Set;dl="https://esm.sh/@terrastruct/d2@0.1.33",va=null,pl={dark:{N1:"#e4e4e7",N2:"#a1a1aa",N3:"#a1a1aa",N4:"#323238",N5:"#27272a",N6:"#18181b",N7:"#09090b"},light:{N1:"#27272a",N2:"#71717a",N3:"#71717a",N4:"#e4e4e7",N5:"#e4e4e7",N6:"#f4f4f5",N7:"#ffffff"}};hl=e=>/d2-config\s*:/.test(e)?e:`vars: {
  d2-config: {
    layout-engine: elk
  }
}
`+e,gn={};De=0,bn=null;Ne=document.getElementById("progress");Ne.innerHTML="<b></b><i></i>";Ie={start:0,timer:null};Cl=["x","y","xPercent","yPercent","scale","scaleX","scaleY","rotation","rotate","skewX","skewY"];dt=null;fe=null,$r=null,Ce=!1;_e=null;Se=null;xn.addEventListener("click",e=>{let t=e.target.closest("circle");t&&!p.active&&N(t.dataset.id)});ya=null;ie.addEventListener("input",()=>{if(io()){T.text=ie.value,clearTimeout(ya),ya=setTimeout(()=>{gc(ie.value),pt(!0)},300);return}T.kind!=="copy"&&!mc()||(O.text=ie.value,Et(),clearTimeout(ya),ya=setTimeout(()=>{na(),pt(!0)},300))});document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>{e.addEventListener("click",()=>{e.dataset.mode!==V&&_a(e.dataset.mode)})});(function(){let e=new Map,t=0,a=!1,n=null,o=()=>{let[i,s]=[...e.values()];return Math.hypot(i.x-s.x,i.y-s.y)||1};j.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||p.active||i.target.closest("a, pre, code, input, textarea")||(e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t=0,a=!1,e.size===2&&(n={d:o(),zoom:P.zoom}))}),window.addEventListener("pointermove",i=>{let s=e.get(i.pointerId);if(!s)return;let l=i.clientX-s.x,d=i.clientY-s.y;e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t+=Math.abs(l)+Math.abs(d),!a&&t>5&&(a=!0,_n(),j.classList.add("dragging")),a&&(e.size===2&&n?P.zoom=ei(n.zoom*o()/n.d):(P.x-=l/P.zoom,P.y-=d/P.zoom),ct())});let r=i=>{e.delete(i.pointerId),e.size<2&&(n=null),e.size||j.classList.remove("dragging")};window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),j.addEventListener("click",i=>{a&&(i.stopPropagation(),i.preventDefault(),a=!1)},!0)})();j.addEventListener("wheel",e=>{e.preventDefault(),!p.active&&ti(Math.exp(-e.deltaY*(e.ctrlKey?.01:.0015)),e.clientX,e.clientY)},{passive:!1});document.getElementById("nav-prev").onclick=()=>Ae(-1);document.getElementById("nav-next").onclick=()=>Ae(1);document.getElementById("btn-open").onclick=()=>document.getElementById("file-input").click();document.getElementById("file-input").addEventListener("change",e=>{let t=e.target.files[0];if(!t)return;let a=new FileReader;a.onload=()=>{Yi("a copy of "+t.name)&&(O=sa(String(a.result),{kind:"file",name:t.name},{exported:!0}),na(),be=null,g=null,fc())},a.readAsText(t),e.target.value=""});document.getElementById("btn-save").onclick=()=>{let e=new Blob([ie.value],{type:"text/markdown"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=(Te[0]?Ze(u.get(Te[0]).title):"deck")+".md",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3),T.kind==="copy"&&(O.exported=O.text,na(),Et())};document.getElementById("btn-reset").onclick=()=>{T.kind!=="copy"||ca(O)||confirm("Discard your edits and go back to "+ke(O.origin)+" as it was?")&&(O.text=O.originText,na(),ie.value=O.text,g=null,pt(!0),Et())};document.getElementById("btn-edit-toggle").onclick=Ua;vn=document.querySelector("main"),nt=document.getElementById("editor-resizer"),yr=parseFloat(_("slidetake:editorWidth"));yr&&Pe.style.setProperty("--editor-w",yr+"px");nt.addEventListener("pointerdown",e=>{e.preventDefault(),nt.setPointerCapture(e.pointerId),vn.classList.add("resizing");let t=vn.getBoundingClientRect().right,a=o=>{let r=Math.round(Math.max(280,Math.min(window.innerWidth*.75,t-o.clientX)));Pe.style.setProperty("--editor-w",r+"px")},n=()=>{vn.classList.remove("resizing"),nt.removeEventListener("pointermove",a),Y("slidetake:editorWidth",String(Pe.getBoundingClientRect().width))};nt.addEventListener("pointermove",a),nt.addEventListener("pointerup",n,{once:!0})});nt.addEventListener("dblclick",()=>{Pe.style.removeProperty("--editor-w");try{localStorage.removeItem("slidetake:editorWidth")}catch{}});document.getElementById("btn-mode").onclick=Fr;document.getElementById("btn-present").onclick=()=>ve(!K);Ol="https://cdn.jsdelivr.net/npm/obs-websocket-js@5.0.5/dist/obs-ws.min.js",wr=["ArrowRight","PageDown"," ","ArrowDown","Enter"],kr=["ArrowLeft","PageUp","ArrowUp","r","R"],xr=["b","B","."],Ca=document.getElementById("rec-dialog"),qe=document.getElementById("review"),Pt=document.getElementById("rec-countdown"),Mn=document.getElementById("rec-paused"),Ta=document.getElementById("obs-host"),La=document.getElementById("obs-port"),Ma=document.getElementById("obs-pass"),Hn=document.getElementById("obs-remember"),Sr=document.getElementById("obs-status"),Nt=document.getElementById("rec-start"),re=null,Fe=!1,Ue=null,ai=null,p={active:!1,withObs:!1,counting:!1,paused:!1,finishing:!1,t0:0,pauseAt:0,pausedMs:0,events:[],outputPath:null,browser:null},Ba=e=>new Promise(t=>setTimeout(t,e)),Gt=()=>Promise.race([new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),Ba(100)]);Rl="G-3S9FY4MQLS",Wn=document.getElementById("analytics-dialog"),Pl=()=>_("slidetake:analytics")!=="off";Wn.querySelectorAll("[data-analytics]").forEach(e=>e.onclick=()=>zl(e.dataset.analytics==="on"));oi=document.getElementById("btn-analytics");oi.hidden=!/^(www\.)?slidetake\.com$/.test(location.hostname);oi.onclick=()=>{ni(),wt(Wn)};document.querySelectorAll(".modal").forEach(e=>{e.addEventListener("click",t=>{(t.target===e||t.target.closest("[data-close]"))&&e.classList.remove("open")})});document.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",()=>{let t=document.getElementById(e.dataset.copy);t.select(),(navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).catch(()=>document.execCommand("copy")),e.textContent="Copied",setTimeout(()=>{e.textContent="Copy"},1500)}));ii=e=>/^(localhost|127(\.\d+){3}|\[?::1\]?)$/i.test(e);jl="This page is served over https, and browsers block it from reaching OBS on another computer (OBS only offers plain ws://). Run OBS on this computer and use localhost, or open Slidetake from a local copy: download dist/index.html from github.com/slidetake/slidetake and serve it with python3 -m http.server.";document.getElementById("obs-connect").onclick=si;Hn.addEventListener("change",ri);_l="https://cdn.jsdelivr.net/npm/mediabunny@1.64.0/+esm",_t=document.getElementById("rec-cam"),ut=document.getElementById("rec-mic"),ht=document.getElementById("rec-quality"),Bn=document.getElementById("rec-meter"),ot=document.getElementById("rec-browser-check"),li=_("slidetake:rec-mode")||"",wa="",pe=null;In=0;ut.onchange=()=>{Y("slidetake:mic",ut.value),Ia()};_t.onchange=()=>{di(_t.value),_t.value!=="none"&&ae&&(oo(),$e()),za()};ql=()=>(M.pip||"none").toLowerCase()!=="none"||!!M.camera||[...u.values()].some(e=>e.camera),ci=()=>"slidetake:rec-cam:"+Je();ht.onchange=()=>Y("slidetake:quality",ht.value);document.querySelectorAll('input[name="rec-mode"]').forEach(e=>e.onchange=()=>Gn(e.value));Ca.addEventListener("click",e=>{(e.target===Ca||e.target.closest("[data-close]"))&&St()});document.getElementById("btn-record").onclick=Aa;Nt.onclick=()=>fi("obs");ui=e=>({width:e.w,height:e.h,aspectRatio:16/9,frameRate:It,resizeMode:"crop-and-scale"});Ut=!1;Oe="";$n=e=>$o(e,vi),yi=(e,t)=>Xo(e,t,{input:e.outputPath||Oe||"recording.mov",outputName:Je()+"-final.mp4",sectionOf:vi,loudness:We()}),wi=document.querySelectorAll(".rv-loud"),We=()=>_("slidetake:loudness")!=="off",ki=()=>wi.forEach(e=>{e.setAttribute("aria-pressed",String(We())),e.classList.toggle("on",We())}),An=document.getElementById("rv-limiter"),Vt=()=>_("slidetake:limiter")==="on",xi=()=>{An.setAttribute("aria-pressed",String(Vt())),An.classList.toggle("on",Vt())};xi();An.onclick=()=>{Y("slidetake:limiter",Vt()?"off":"on"),xi()};Si=()=>_("slidetake:mic-sound")==="voice"?"voice":"raw",Ei=e=>({...e?{deviceId:{ideal:e}}:{},echoCancellation:!1,autoGainControl:!1,noiseSuppression:Si()==="voice"}),Ci=document.querySelectorAll("[data-sound]"),Ti=()=>Ci.forEach(e=>{let t=e.dataset.sound===Si();e.classList.toggle("active",t),e.setAttribute("aria-checked",String(t))});Ti();Ci.forEach(e=>e.onclick=()=>{Y("slidetake:mic-sound",e.dataset.sound),Ti(),pe&&Ia()});ki();wi.forEach(e=>e.onclick=()=>{Y("slidetake:loudness",We()?"off":"on"),ki(),D&&Qt()});D=null,Z=null,S=document.getElementById("rv-video"),G=document.getElementById("rv-now");yn=new Map,wn=0;document.getElementById("rv-mode").onchange=()=>Qt();Oa=document.getElementById("rv-fps");Oa.onchange=()=>{D&&(D.fps=parseFloat(Oa.value),Jn(D),Qt())};document.getElementById("rv-link").addEventListener("input",e=>{try{Y("slidetake:site",new URL(e.target.value.trim()).origin)}catch{}D&&Qn(D)});Ra=null;S.addEventListener("timeupdate",()=>{if(!Z)return;let e=Z.ranges[Z.i];if(S.currentTime*1e3<e.end)return;if(Z.i++,Z.i>=Z.ranges.length){S.pause(),Z=null,G.textContent="";return}let t=Z.ranges[Z.i];S.currentTime=t.start/1e3,G.textContent="\u25B6 "+t.title});Ii=document.getElementById("rv-play-final"),rt=null;Ii.onclick=()=>{if(!D)return;if(!D.inBrowser){Pa(et(D).map(a=>({start:a.start,end:a.end,title:a.title})));return}if(F&&!F.single){S.paused?S.play().catch(()=>{}):S.pause();return}let e=At(D),t=Math.max(0,rt?e.findIndex(a=>a.id===rt):0);rt=null,Wa(e.slice(t))};S.addEventListener("play",Zn);S.addEventListener("pause",()=>{F&&F.single&&S.currentTime<F.parts[0].keep-.05&&(rt=F.parts[0].id,G.textContent="Preview starts from "+F.parts[0].title.replace(/ · take \d+$/,"")+"."),Zn()});F=null;S.addEventListener("timeupdate",()=>{F&&S.currentTime>=F.parts[F.i].keep&&Oi()});S.addEventListener("ended",()=>{F&&Oi()});le=document.getElementById("rv-render-status");document.getElementById("rv-render-btn").onclick=()=>Ri(!1);Cr=e=>e.where?"\u201C"+e.where+"\u201D as "+e.name:"your downloads as "+e.name;oc=e=>{let t=a=>String(a).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+"-"+t(e.getMinutes())+"-"+t(e.getSeconds())};document.getElementById("rv-folder-change").onclick=async()=>{try{let e=await Pi(!0);e&&(le.textContent="Videos now go to "+e.name+".")}catch{}};I=null,Lr="",Mr=null,je=new Set,zi=()=>"slidetake:board:"+Je();ea=()=>Y(zi(),JSON.stringify(I)),rc=e=>{let t=u.get(e);return t?or(t.title+`
`+t.html):""},Di=()=>rr(v,e=>({title:u.get(e).title,fp:rc(e)}));Ge=document.getElementById("rv-setup"),to=document.getElementById("rv-setup-btn");Ge.addEventListener("toggle",()=>{to.setAttribute("aria-expanded",String(Ge.open)),Ge.open?ji():St()});to.onclick=()=>{Ge.open=!Ge.open};qe.addEventListener("click",e=>{(e.target===qe||e.target.closest("[data-close]"))&&St()});Ni="";document.getElementById("rv-chapters").onclick=e=>{let t=e.currentTarget;(navigator.clipboard?navigator.clipboard.writeText(Ni):Promise.reject()).catch(()=>{}),t.textContent="\u2713 Copied",setTimeout(()=>{t.textContent="\u29C9 Chapters"},1500)};document.getElementById("rv-rec").onclick=()=>fi("browser",dn(v,je));document.getElementById("rv-use-obs").onclick=()=>{kt(),Gn("obs"),Aa()};document.querySelectorAll(".rv-purge .rv-menu button").forEach(e=>e.addEventListener("click",()=>{e.closest("details").open=!1}));document.getElementById("rv-clean-unused").onclick=async()=>{let{rows:e}=Fi(),t=new Set(e.map(n=>n.pick).filter(Boolean)),a=I.takes.filter(n=>!t.has(n.uid));if(!a.length){le.textContent="Every take is in use.";return}confirm("Purge "+a.length+" take"+(a.length===1?"":"s")+" the video doesn\u2019t use (earlier attempts and outdated takes)?")&&(await sc(a),le.textContent="Purged "+a.length+" unused take"+(a.length===1?"":"s")+".")};document.getElementById("rv-clean").onclick=async()=>{if(!I.takes.length||!confirm("Purge all "+I.takes.length+" takes of this deck from this browser? Download the video first if you need it."))return;let e=new Set(I.takes.map(t=>t.clip.split("/")[0]));I.takes=[],I.picks={},ea();for(let t of e)await Vn(t);S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),F=null,Ha(),le.textContent="All takes purged.",gt()};zt=null,On=0,Rn=!1;S.addEventListener("error",async()=>{if(S.getAttribute("src")){if(zt&&On<5){On++,G.textContent="Reloading "+Oe+" (OBS was still finishing it)\u2026",await new Promise(e=>setTimeout(e,1500));try{ta(await Ya(zt),zt,!0);return}catch{}}G.textContent=zt?"Chrome cannot play "+Oe+". In OBS set Recording Format to Hybrid MP4 (or MP4) with H.264 video; the ffmpeg command still works with this file.":"Could not play "+(Oe||"this file")+". If OBS was still finishing it when you opened it, open it again; if it still fails, set OBS to Hybrid MP4 (or MP4) with H.264 video."}});Dt=document.getElementById("rv-file-input");Dt.addEventListener("change",()=>{Dt.files[0]&&ta(Dt.files[0]),Dt.value=""});document.getElementById("rv-open").onclick=async()=>{if(!window.showOpenFilePicker)return Dt.click();try{let[e]=await window.showOpenFilePicker({id:"obs-recordings",types:[{description:"Recordings",accept:{"video/*":[".mov",".mp4",".m4v",".mkv",".webm"]}}]});G.textContent="Opening "+e.name+"\u2026",ta(await Ya(e),e)}catch(e){(!e||e.name!=="AbortError")&&(G.textContent="Could not open that file.")}};qi=document.getElementById("rv-folder");qi.hidden=!window.showDirectoryPicker;qi.onclick=async()=>{let e=D&&tt(D.outputPath);try{let t=await window.showDirectoryPicker({id:"obs-recordings",mode:"read"});if(Ui("obs-folder",t),!e){G.textContent="Folder remembered. This session has no file name from OBS; open the file instead.";return}let a=await t.getFileHandle(e);ta(await Ya(a),a)}catch(t){if(t&&t.name==="AbortError")return;G.textContent=(e?e+" is not in that folder":"Could not read that folder")+". Use \u201COpen the recording file\u2026\u201D instead."}};document.getElementById("rv-download").onclick=()=>{if(!D)return;let e=D,t=$n(e),a="# "+document.getElementById("rv-yt-title").value+`

Recorded `+new Date(e.date).toLocaleString()+(e.outputPath?" \xB7 "+e.outputPath:"")+" \xB7 final length "+oe(t.length)+`

## Render

\`\`\`sh
`+document.getElementById("rv-ffmpeg").value+`
\`\`\`

## YouTube title

`+document.getElementById("rv-yt-title").value+`

## YouTube description

`+document.getElementById("rv-yt-desc").value+`

## Tags

`+document.getElementById("rv-yt-tags").value+`

## Picked takes

`+et(e).map(o=>"- "+oe(o.start)+"\u2013"+oe(o.end)+"  "+o.title).join(`
`)+`
`,n=document.createElement("a");n.href=URL.createObjectURL(new Blob([a],{type:"text/markdown"})),n.download=Je()+"-publish.md",n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3)};Dl()&&new URLSearchParams(location.search).get("obs")&&si();Ee=document.getElementById("btn-camera"),Ft=document.getElementById("pip-msg"),ka=null,Hi=R.querySelector("span");dc='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10.5 22 7v10l-6-3.5z"/></svg>';Ee.onclick=()=>aa(ne);ro();Br=null;window.addEventListener("pointermove",Gi);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(p.active?mt("Stopped: the browser left fullscreen"):K&&ve(!1))});Re=document.getElementById("help");document.getElementById("btn-keys").onclick=()=>Re.classList.add("open");document.getElementById("help-close").onclick=()=>Re.classList.remove("open");Re.addEventListener("click",e=>{e.target===Re&&Re.classList.remove("open")});window.addEventListener("keydown",e=>{if(e.key==="F5"){e.preventDefault(),p.active||Aa();return}if(p.active){Kl(e);return}if(document.querySelector(".modal.open")){e.key==="Escape"&&kt();return}let t=document.activeElement&&document.activeElement.tagName;if(t==="TEXTAREA"||t==="INPUT"||e.metaKey||e.ctrlKey||e.altKey)return;if(Re.classList.contains("open")){/^(Escape|k|K|\?)$/.test(e.key)&&Re.classList.remove("open");return}let a=e.key;a==="ArrowRight"||a===" "||a==="PageDown"?(e.preventDefault(),Ae(1)):a==="ArrowLeft"||a==="PageUp"?(e.preventDefault(),Ae(-1)):a==="ArrowDown"?(e.preventDefault(),Il()):a==="ArrowUp"?(e.preventDefault(),Bl()):a==="Home"?v.length&&N(v[0]):a==="End"?v.length&&N(v[v.length-1]):a==="o"||a==="O"?Ml():a==="e"||a==="E"?Ua():a==="f"||a==="F"||a==="p"||a==="P"?ve(!K):a==="r"||a==="R"?Aa():/^[1-4]$/.test(a)?_a(Fn[+a-1]):a==="c"||a==="C"?aa(ne):a==="v"||a==="V"?Us():a==="l"||a==="L"?Fr():a==="+"||a==="="?vr(1):a==="-"||a==="_"?vr(-1):a==="?"||a==="k"||a==="K"?Re.classList.add("open"):a==="Escape"&&!Qr()&&K&&ve(!1)});window.addEventListener("hashchange",()=>{let{data:e,slide:t}=ia(location.hash);if(e&&!(T&&T.kind==="share"&&e===T.data)){location.reload();return}t&&t!==g&&u.has(t)&&N(t)});Ir="";new ResizeObserver(()=>{let e=j.clientWidth+"x"+j.clientHeight;e!==Ir&&(Ir=e,ct(),we(!0))}).observe(j);st=document.createElement("div");st.id="toast";st.setAttribute("role","status");document.body.appendChild(st);Ar=null;pc=document.getElementById("open-dialog"),zn=document.getElementById("open-url"),Dn=document.getElementById("open-error");document.getElementById("btn-load").onclick=()=>{Dn.hidden=!0,wt(pc),zn.focus(),zn.select()};document.getElementById("open-form").onsubmit=e=>{e.preventDefault();let t=Fo(zn.value);if(!t){Dn.textContent="That doesn't look like a link.",Dn.hidden=!1;return}location.href=Pn(t)};document.getElementById("btn-share").onclick=async()=>{let{link:e,inside:t}=await uc(g&&g!==v[0]?g:""),a=t?"Link copied, with the whole deck inside it ("+(e.length/1024).toFixed(1)+" KB)"+(e.length>8e3?". Some chat apps cut long links short: a GitHub file or gist makes a shorter one.":"."):"Link copied.";try{await navigator.clipboard.writeText(e),Kt(a,5e3)}catch{prompt("Copy this link:",e)}T.kind==="copy"&&(O.exported=O.text,na(),Et())};Or=_("slidetake:layout");V=Fn.includes(Or)?Or:"path";document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===V));Da=new URLSearchParams(location.search);Fn.includes(Da.get("layout"))&&(V=Da.get("layout"),document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===V)));if(U){let e=(Array.isArray(U.trail)?U.trail:U.back?[U.back]:[]).filter(o=>o&&o.label),t=document.querySelector("header .brand");e.length&&(t.innerHTML='<nav class="trail" aria-label="Site">'+e.map((o,r)=>(r?'<span class="sep" aria-hidden="true">|</span>':"")+(o.url?'<a href="'+A(o.url)+'">'+A(o.label)+"</a>":"<span>"+A(o.label)+"</span>")).join("")+"</nav>");let a=document.createElement("a");a.id="credit",a.href="https://slidetake.com",a.target="_blank",a.rel="noopener",a.title="Made with Slidetake",a.setAttribute("aria-label","Made with Slidetake"),a.innerHTML=zr+'<span class="word">Slide<span>take</span></span>';let n=document.querySelector("header .hdr-actions");n.insertBefore(a,n.firstChild),bt||(n.insertAdjacentHTML("beforeend",'<button class="btn" id="hdr-keys" title="Keyboard shortcuts (K)">\u2328 Keys</button><button class="btn" id="hdr-full" title="Fullscreen (F)">\u26F6 Fullscreen</button>'),document.getElementById("hdr-keys").onclick=()=>document.getElementById("help").classList.add("open"),document.getElementById("hdr-full").onclick=()=>ve(!K))}Q=qo(location.pathname,location.search,location.hash),Rr=Q.page==="pick"?"":Q.slide,T=null,O=Ho(_("slidetake:copy"))||hc();window.addEventListener("popstate",()=>location.reload());ue&&window.EventSource&&(new EventSource(ue.events).onmessage=async e=>{if(!io())return;let t=(JSON.parse(e.data).file||"").replace(/\\/g,"/");if(t===ue.file){let a=await(await fetch(ue.deck,{cache:"no-store"})).text();if(a===ie.value)return;ie.value=T.text=a,pt(!0);return}se.querySelectorAll("img").forEach(a=>{let n=new URL(a.src);decodeURIComponent(n.pathname).endsWith("/"+t)&&(n.searchParams.set("t",String(Date.now())),a.src=n.href)})});(Da.get("edit")==="1"||Q.page==="edit"&&O&&Da.get("edit")!=="0")&&Ua();vc().then(e=>(ie.value=e,Et(),Nr(ie.value),Wr(),document.fonts?document.fonts.ready:null)).then(()=>{u.forEach(ja),Jt(),N(u.has(Rr)?Rr:v[0],!0)})});var lo=`  /* Every colour comes from these tokens. Slidetake's own is seafoam green: bright on zinc in dark mode,
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
  .modal .choice, .rec-mode{padding:10px 12px;border:1px solid var(--panel-line);border-radius:8px;background:transparent;color:var(--text);font:inherit;cursor:pointer;}
  .modal .choice:hover, .rec-mode:hover{border-color:var(--accent);}
  .modal .choice[aria-checked="true"], .rec-mode:has(input:checked){border-color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
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
  #review h2{padding-right:190px;}
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
  #obs-status{font-family:var(--mono);font-size:12px;color:var(--text-muted);}
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
  .rec-modes{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0 14px;}
  .rec-mode{display:flex;gap:10px;align-items:flex-start;}
  .rec-mode input{margin-top:3px;}
  .rec-mode small{display:block;color:var(--text-muted);font-size:12px;margin-top:2px;}
  #review.in-browser #rv-novideo, #review.in-browser #rv-ffmpeg-box, #review:not(.in-browser) #rv-render{display:none !important;}
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
  .rv-bar{grid-area:bar;display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-top:12px;}
  .rv-sel-note{font-size:12px;color:var(--text-muted);}
  .rv-purge{position:relative;}
  .rv-purge summary{list-style:none;font-family:var(--mono);}
  .rv-purge summary::-webkit-details-marker{display:none;}
  .rv-purge .rv-menu{position:absolute;left:0;top:calc(100% + 6px);display:flex;flex-direction:column;gap:6px;padding:8px;z-index:3;
    background:var(--panel);border:1px solid var(--panel-line);border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.35);white-space:nowrap;}
  #rv-render-status:empty{display:none;}
  /* the take board: every slide, a box to select it for recording, its takes */
  #review:not(.board) .rv-board-only{display:none !important;}
  .rv-row.with-sel{display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:10px;align-items:start;}
  .rv-row .rv-sel{margin:3px 0 0;accent-color:var(--accent);}
  .rv-row.selected{background:color-mix(in srgb, var(--accent) 7%, transparent);}
  .rv-row.playing{box-shadow:inset 3px 0 0 var(--accent);}
  .rv-chip.outdated{opacity:.6;text-decoration:line-through;}
  .rv-none{font-size:12px;color:var(--text-muted);font-style:italic;}
  /* Recording setup: opened from the \u2699 Setup button at the top right, shown under the title */
  .modal .rv-setup-btn[aria-expanded="true"]{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  #rv-setup{margin:4px 0 12px;border:1px solid var(--panel-line);border-radius:8px;padding:10px 14px;}
  #rv-setup > summary{display:none;}
  #rv-setup:not([open]){display:none;}
  .rv-setup-sum{margin:0 0 8px;color:var(--text-muted);font-size:12px;}
  /* three sections side by side: Camera, Microphone, Video; Use OBS at the top right */
  .rv-setup-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--panel-line);}
  .rv-setup-head h4{margin:0;font-family:var(--display);font-size:13px;color:var(--text-muted);}
  .rv-setup-cols{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:18px;}
  .rv-setup-cols section{display:flex;flex-direction:column;gap:8px;min-width:0;}
  .rv-setup-cols h4{margin:0;font-family:var(--display);font-size:13px;color:var(--text);}
  .rv-setup-cols select{width:100%;}
  .rv-setup-cols meter{width:100%;height:8px;}
  .rv-setup-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;}
  .rv-setup-gap{flex:1}
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
  #review.board .rv-yt{display:none !important;}
  /* Preview and Pause: one width, so the button doesn't change size as it switches */
  .btn.rv-preview{min-width:104px;}
  #review:not(.in-browser) #rv-render-btn{display:none;}
  @media (max-width:900px){
    .rv-grid{grid-template-columns:1fr;grid-template-areas:"video" "bar" "list" "dl";}
    .rv-list{contain:none;max-height:50vh;margin-top:12px;}
  }
  .rv-video{position:relative;background:#000;border-radius:8px;overflow:hidden;aspect-ratio:16/9;}
  .rv-video video{width:100%;height:100%;display:block;}
  #rv-novideo{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;text-align:center;}
  #rv-novideo[hidden]{display:none;}
  /* the preview's message, right before Preview */
  #rv-now{margin-left:auto;text-align:right;font-family:var(--mono);font-size:12px;color:var(--text-muted);}
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
  .rv-out{margin-top:6px;}
  .rv-out .two{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  @media (max-width:900px){ .rv-out .two{grid-template-columns:1fr;} }
  .modal select{background:var(--code-bg);border:1px solid var(--node-border);border-radius:6px;color:var(--text);font-family:var(--mono);font-size:11.5px;padding:4px 8px;}
  #rec-sessions{margin-top:14px;}

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
`;var co=`
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

<div id="rec-dialog" class="modal" role="dialog" aria-labelledby="rec-title">
  <div class="panel wide">
    <button class="btn close" data-close>\u2715 Close</button>
    <h2 id="rec-title">Record a take</h2>
    <p id="rec-deck-info"></p>
    <div class="rec-modes" role="radiogroup" aria-label="Record with">
      <label class="rec-mode"><input type="radio" name="rec-mode" value="browser"><span><strong>In this browser</strong><small>Nothing to install. Takes stay in this browser until you purge them.</small></span></label>
      <label class="rec-mode"><input type="radio" name="rec-mode" value="obs"><span><strong>OBS</strong><small>For any screen, or when this browser can't record at 720p or more.</small></span></label>
    </div>
    <div id="rec-obs">
    <p id="rec-screen"></p>
    <div class="fields">
      <label>Host<input type="text" id="obs-host" value="localhost" spellcheck="false"></label>
      <label>Port<input type="text" id="obs-port" value="4455" inputmode="numeric"></label>
      <label>Password<input type="password" id="obs-pass" autocomplete="off"></label>
    </div>
    <label class="check"><input type="checkbox" id="obs-remember"> Remember these on this computer</label>
    <div class="row"><button class="btn" id="obs-connect">Connect</button><span id="obs-status">Not connected</span></div>
    <p>In OBS: Tools \u2192 WebSocket Server Settings \u2192 enable it; the port and password are shown there. Point OBS at this browser window plus your microphone. No scenes are needed: the deck switches the camera itself.</p>
    </div>
    <h3>During the take</h3>
    <ul>
      <li><kbd>\u2192</kbd> / clicker next: the next step. One more press after the last step ends the take.</li>
      <li><kbd>\u2190</kbd> / clicker back: <strong>take this slide again</strong>. Every attempt is kept; you pick the best one afterwards.</li>
      <li><kbd>B</kbd> / clicker blank: pause and resume the recording.</li>
      <li><kbd>Esc</kbd>: stop the take early.</li>
    </ul>
    <label style="margin-top:14px">Layout for this take
      <select id="rec-layout">
        <option value="path">Path: short, one-direction moves (recommended)</option>
        <option value="focus">Focus: no travel, slides fade in</option>
        <option value="current">Keep the current layout</option>
      </select>
    </label>
    <div id="rec-sessions"></div>
    <div class="row end">
      <button class="btn primary" id="rec-start" disabled>\u25CF Start recording</button>
    </div>
  </div>
</div>

<div id="review" class="modal" role="dialog" aria-labelledby="rv-title">
  <div class="panel xwide">
    <div class="panel-actions">
      <button class="btn rv-setup-btn rv-board-only" id="rv-setup-btn" aria-expanded="false" aria-controls="rv-setup">\u2699 Setup</button>
      <button class="btn close" data-close>\u2715 Close</button>
    </div>
    <h2 id="rv-title">Review the take</h2>
    <p id="rv-info"></p>
    <details id="rv-setup" class="rv-board-only">
      <summary>Recording setup</summary>
      <div class="rv-setup-head"><h4>Record in this browser</h4><button class="btn small" id="rv-use-obs" title="Record with OBS instead of in this browser">Use OBS</button></div>
      <div class="rv-setup-cols">
        <section>
          <h4>Camera</h4>
          <select id="rec-cam" aria-label="Camera"></select>
          <p class="rv-setup-note">Turns on by itself when recording starts. Choose No camera for slides only.</p>
        </section>
        <section>
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
        <section>
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
      </div>
      <p class="rv-setup-note">When Chrome asks, share <strong>this tab</strong>. Only the slides and your camera are recorded, in a 16:9 frame; nothing else on the screen is.</p>
      <p class="rv-setup-sum" id="rv-setup-sum" hidden></p>
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
          <button class="btn rec rv-board-only" id="rv-rec" title="Records the whole deck, or only the ticked slides (shift-click ticks a range)">\u25CF Record</button>
          <span class="rv-sel-note rv-board-only" id="rv-sel-note"></span>
          <span id="rv-now"></span>
          <button class="btn rv-preview" id="rv-play-final" title="Plays the picked takes back to back">\u25B6 Preview</button>
        </div>
      </div>
      <div class="rv-list" id="rv-list"></div>
      <div class="rv-dl">
        <button class="btn rv-board-only" id="rv-chapters" title="Copies the chapters, to paste into the YouTube description">\u29C9 Chapters</button>
        <span class="rv-final" id="rv-final"></span>
        <button class="btn" id="rv-render-btn" title="Saves the video: the picked takes joined into one file">\u2193 Download</button>
      </div>
    </div>
    <div class="rv-out">
      <div id="rv-render">
        <p id="rv-render-status"></p>
      </div>
      <div id="rv-ffmpeg-box">
      <h3>ffmpeg
        <select id="rv-mode">
          <option value="accurate">Frame-accurate (x264)</option>
          <option value="mac">Frame-accurate, Mac hardware encoder (faster)</option>
          <option value="copy">No re-encode (only when nothing is cut out)</option>
        </select>
        <select id="rv-fps" title="Recording frame rate: cut points snap to its frames">
          <option value="24">24 fps</option><option value="25">25 fps</option><option value="30">30 fps</option>
          <option value="50">50 fps</option><option value="60">60 fps</option>
          <option value="23.976">23.976 fps</option><option value="29.97">29.97 fps</option><option value="59.94">59.94 fps</option>
        </select>
        <button class="btn small toggle rv-loud" id="rv-loud-obs" aria-pressed="true" title="Adds loudnorm: YouTube's volume (-14 LUFS)">\u{1F50A} Volume boost</button>
        <button class="btn small" data-copy="rv-ffmpeg">Copy</button>
      </h3>
      <textarea id="rv-ffmpeg" rows="4" readonly spellcheck="false"></textarea>
      </div>
      <div class="rv-yt">
      <h3>YouTube</h3>
      <div class="two">
        <label>Title<input type="text" id="rv-yt-title"></label>
        <label>Slides link (goes in the description)<input type="text" id="rv-link" placeholder="https://\u2026/slides/\u2026/" spellcheck="false"></label>
      </div>
      <h3>Description <button class="btn small" data-copy="rv-yt-desc">Copy</button></h3>
      <textarea id="rv-yt-desc" rows="10" spellcheck="false"></textarea>
      <p id="rv-chapters-note"></p>
      <h3>Tags <button class="btn small" data-copy="rv-yt-tags">Copy</button></h3>
      <input type="text" id="rv-yt-tags" spellcheck="false" style="width:100%">
      </div>
    </div>
    <div class="row end rv-yt">
      <button class="btn" id="rv-download">\u2193 Download script + publish pack</button>
      <button class="btn primary" data-close>Done</button>
    </div>
  </div>
</div>
<input type="file" id="rv-file-input" accept="video/*,video/quicktime,.mov,.mp4,.m4v,.mkv,.webm" hidden>

<div id="rec-countdown"><div class="num"></div><div class="hint">recording starts after the countdown \xB7 Esc to cancel</div></div>
<div id="rec-paused">Paused \xB7 press B to resume</div>

<!-- The sample deck. Plain markdown, nothing else. -->
`;var po=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">`;var Ji=e=>new Promise((t,a)=>{let n=document.createElement("script");n.src=e,n.onload=t,n.onerror=()=>a(new Error("could not load "+e)),document.head.appendChild(n)});async function $i(){document.head.insertAdjacentHTML("beforeend",po);let e=document.createElement("style");e.textContent=lo,document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",co),await Promise.all([window.gsap?null:Ji("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"),window.marked?null:Ji("https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js")]),await Promise.resolve().then(()=>(Ki(),yc))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$i,{once:!0}):$i();})();
