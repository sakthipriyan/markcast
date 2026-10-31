/* Slidetake 0.3.4 · https://slidetake.com · Apache-2.0 */
"use strict";(()=>{var q=(e,t)=>()=>(e&&(t=e(e=0)),t);var Gn,ro=q(()=>{Gn=`---
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
`});var so,io=q(()=>{so=`---
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

Then the review opens: every slide with its takes (the last one picked), click one to preview it, and the YouTube title, description with **chapters** and links, and tags. Sessions are kept in this browser, so a take can be reviewed again later from \u25CF Record.

- **Recorded in the browser:** the board is the review. **\u25B6 Preview** plays the picked takes back to back, following along in the take list; right after you play a single take it continues from the next slide (a message says so), otherwise from the start. **\u2193 Download** joins them into one MP4, in a few seconds, without re-encoding, and saves it like OBS does: a new file named by the date (\`deck 2026-10-30 20-04-49.mp4\`) in a folder you pick once, starting in your videos folder. Pressing it again without changing a take or Auto volume says where the video already is, rather than making it again.
- **Recorded with OBS:** previews come from the OBS file, and a ready-to-run **[ffmpeg](https://ffmpeg.org)** command cuts the picked takes (frame-exact).
- **\u{1F50A} Auto volume** (selected by default): YouTube plays videos at about \u221214 LUFS and turns louder ones down, but not quieter ones up, so a voice recorded as it is sounds quiet next to other videos. The final cut is measured the way YouTube measures it and given one gain to reach \u221214 LUFS; a limiter catches the few peaks (a clicker press, a bump on the mic) that would pass \u22121.5 dB, so one loud moment doesn't hold the whole video back. The video is still copied as it is; only the sound is re-encoded. In the ffmpeg command it adds \`loudnorm\` (not in the no-re-encode mode).

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
`});var co,lo=q(()=>{co=`---
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
`});var uo,po=q(()=>{uo=`---
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
`});var mo,ho=q(()=>{mo=`---
title: My deck
---

# My deck

Start typing: this becomes your own copy, and the template stays as it is.

## A section

Every heading is a card. \`##\` sections branch from the first card.

### A detail

\`###\` branches from the section above it.
`});var go,fo=q(()=>{go=`---
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
`});var vo,bo=q(()=>{vo=`---
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
`});var wo,yo=q(()=>{wo=`---
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
`});function Xe(e){return e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"")||"card"}function Ct(e){return e.replace(/<[^>]*>/g,"").replace(/!?\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").trim()}function O(e){return String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function ko(e){if(typeof document<"u"){let t=document.createElement("textarea");return t.innerHTML=e,t.value}return e.replace(/&(#x[\da-f]+|#\d+|\w+);/gi,(t,n)=>n[0]==="#"?String.fromCodePoint(n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10)):Zi[n.toLowerCase()]??t)}function Tt(e){let t={};for(let n of e.matchAll(/([\w-]+)="([^"]*)"/g))t[n[1]]=n[2];return t}function Lt(e,t){let n=[[]],a=null;return e.split(`
`).forEach(o=>{let r=o.match(/^\s{0,3}(`{3,}|~{3,})/);r&&(a?r[1][0]===a[0]&&r[1].length>=a.length&&(a=null):a=r[1]),!a&&!r&&t.test(o)?n.push([]):n[n.length-1].push(o)}),n.map(o=>o.join(`
`))}function xo(e){let t=String(e??"").trim().toLowerCase();if(!t)return 0;let n=t.match(/^(\d+):(\d{1,2})$/);if(n)return(+n[1]*60+ +n[2])*1e3;if(n=t.match(/^(\d+(?:\.\d+)?)\s*(h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)?$/),!n)return 0;let a=(n[2]||"m")[0];return parseFloat(n[1])*(a==="h"?3600:a==="s"?1:60)*1e3}function ae(e){let t=Math.max(0,Math.round(e/1e3)),n=Math.floor(t/3600),a=Math.floor(t%3600/60),o=t%60;return(n?n+":"+String(a).padStart(2,"0"):a)+":"+String(o).padStart(2,"0")}var Zi,tn=q(()=>{"use strict";Zi={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:"\xA0",mdash:"\u2014",ndash:"\u2013",hellip:"\u2026",rsquo:"\u2019",lsquo:"\u2018",rdquo:"\u201D",ldquo:"\u201C"}});function Eo(e){let t=null;return e.split(`
`).filter(n=>{let a=n.match(/^\s{0,3}(`{3,}|~{3,})/);return a?(t?a[1][0]===t[0]&&a[1].length>=t.length&&(t=null):t=a[1],!1):!t}).join(`
`).replace(/`[^`\n]*`/g,"")}function Yn(e){return/<!--\s*view\s*:\s*(overview|map)\s*-->/i.test(Eo(e))}function Vn(e){let t=Eo(e).match(/<!--\s*camera\s*:\s*([\s\S]*?)\s*-->/i);return t?t[1].trim():null}function es(e){let t={},n=e.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);if(!n)return{deck:t,body:e};let a=null;return n[1].split(`
`).forEach(o=>{let r=o.match(/^\s+-\s+(.*)$/);if(r&&a){t[a].push(r[1].trim().replace(/^["']|["']$/g,""));return}let i=o.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);if(!i){a=null;return}let s=i[1].toLowerCase(),l=i[2].trim().replace(/^["']|["']$/g,"");l===""?(t[s]=[],a=s):(t[s]=l,a=null)}),{deck:t,body:e.slice(n[0].length)}}function Co(e){let t=o=>typeof o=="string"||typeof o=="number"||typeof o=="boolean",n=o=>String(o).replace(/\s*\n\s*/g," "),a=[];for(let[o,r]of Object.entries(e||{}))/^[A-Za-z_][\w-]*$/.test(o)&&(t(r)?a.push(o+": "+n(r)):Array.isArray(r)&&r.every(t)&&(a.push(o+":"),r.forEach(i=>a.push("  - "+n(i)))));return a.length?`---
`+a.join(`
`)+`
---
`:""}function ts(e){let t=e.split(`
`),n={},a=e;if(t[0]!==void 0&&t[0].trim()==="---"){let o=-1;for(let r=1;r<t.length;r++)if(t[r].trim()==="---"){o=r;break}o!==-1&&(t.slice(1,o).forEach(r=>{let i=r.indexOf(":");i>-1&&(n[r.slice(0,i).trim()]=r.slice(i+1).trim().replace(/^["']|["']$/g,""))}),a=t.slice(o+1).join(`
`).replace(/^\n+/,""))}return{meta:n,body:a}}function ns(e){let t=e.replace(/<!--[\s\S]*?-->/g,""),n=t.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m),a=t.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i),o=null;if(n&&(!a||n.index<a.index)?o=n[1]:a&&(o=a[1].replace(/<[^>]+>/g," ")),!o){let r=t.split(`
`).map(i=>i.replace(/<[^>]+>/g,"").trim()).find(i=>i&&!/^[-|:\s]+$/.test(i));o=r?r.slice(0,60):null}return o?ko(Ct(o)).replace(/\s+/g," ").trim():null}function So(e){let t=e.match(/<!--\s*\.slide:([\s\S]*?)-->/i);return t?Tt(t[1]):{}}function To(e,{render:t=n=>({html:n,err:null})}={}){let n=new Map,a=b=>{let w=b,h=2;for(;n.has(w);)w=b+"-"+h++;return w},o=b=>(n.set(b.id,{x:null,y:null,children:[],...b}),b.id);e=e.replace(/\r\n?/g,`
`);let r=/^\+\+\+[ \t]*$/m.test(e),i={};r||({deck:i,body:e}=es(e));let s=/^slides?$/i.test(String(i.layout||""))||/^slides?$/i.test(String(i.type||"")),l=!r&&(Lt(e,/^--\s*$/).length>1||s&&Lt(e,/^---\s*$/).length>1),c=r?C():l?x():d();return n.forEach(b=>{(!b.parent||b.parent===b.id||!n.has(b.parent))&&(b.parent=null)}),n.forEach(b=>{let w=new Set([b.id]),h=b.parent;for(;h;){if(w.has(h)){b.parent=null;break}w.add(h),h=n.get(h).parent}}),n.forEach(b=>{b.parent&&n.get(b.parent).children.push(b.id)}),{deck:i,nodes:n,format:r?"+++":l?"reveal":"headings",errCount:c};function d(){let b=[],w=null,h=null,M={level:0,title:null,explicitId:null,lines:[]};e.split(`
`).forEach(k=>{let m=k.match(/^\s{0,3}(`{3,}|~{3,})/);m&&(h?m[1][0]===h[0]&&m[1].length>=h.length&&(h=null):h=m[1]);let y=!h&&!m?k.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/):null;if(y){let I=y[2],X=null,Q=I.match(/\s*\{#([\w\-:.]+)\}\s*$/);Q&&(X=Q[1],I=I.slice(0,Q.index)),w={level:y[1].length,title:Ct(I),explicitId:X,lines:[y[1]+" "+I]},b.push(w)}else(w||M).lines.push(k)});let T=M.lines.join(`
`);T.trim()&&(b.length&&!T.replace(/<!--[\s\S]*?-->/g,"").trim()?b[0].lines.splice(1,0,...M.lines):b.unshift(M));let v=[];return b.forEach(k=>{for(;v.length&&v[v.length-1].level>=k.level;)v.pop();let m=v.length?v[v.length-1].id:null,y=k.lines.join(`
`).trim(),I=k.title||Ct((y.split(`
`).find(B=>B.trim())||"Intro").slice(0,48));k.id=a(k.explicitId||Xe(I));let{html:X,err:Q}=t(y);o({id:k.id,parent:m,title:I,html:X,err:Q,camera:Vn(y),mapFirst:Yn(y)}),v.push(k)}),0}function C(){let b=e.split(/\n\+\+\+[ \t]*\n/).map(M=>M.trim()).filter(M=>M.length),w=null,h=0;return b.forEach((M,T)=>{let{meta:v,body:k}=ts(M),m=a(v.id||"slide-"+(T+1)),y="parent"in v?v.parent||null:w,I=k.match(/^#{1,6}\s+(.+)$/m),X=v.title||(I?Ct(I[1]):m),{html:Q,err:B}=t(k);B&&h++,o({id:m,parent:y,title:X,html:Q,err:B,camera:v.camera||Vn(k),mapFirst:Yn(k),x:v.x!==void 0?parseFloat(v.x):null,y:v.y!==void 0?parseFloat(v.y):null}),w=m}),h}function x(){let b=0,w=0,h=null;function M(v,k){let m=v.body.trim();w++;let y=ns(m)||"Slide "+w,I=k?n.get(k).title:null;I&&y.startsWith(I+" / ")&&(y=y.slice(I.length+3));let X=a(Xe(y)),{html:Q,err:B}=t(m);return B&&b++,o({id:X,parent:k,title:y,html:Q,err:B,camera:Vn(m),mapFirst:Yn(m),autoslide:parseInt(v.attrs["data-autoslide"],10)||0})}let T=[];return Lt(e,/^---\s*$/).forEach(v=>{if(/<section\b/i.test(v)){for(let y of v.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi))T.push([{body:y[2],attrs:Tt(y[1])}]);let m=v.replace(/<section\b[^>]*>[\s\S]*?<\/section>/gi,"");m.trim()&&T.push([{body:m,attrs:So(m)}]);return}let k=Lt(v,/^--\s*$/).filter(m=>m.trim()).map(m=>({body:m,attrs:So(m)}));k.length&&T.push(k)}),T.forEach(v=>{let k=null;v.forEach((m,y)=>{if(!h){h=k=M(m,null);return}y===0?k=M(m,h):M(m,k)})}),b}}var Lo=q(()=>{"use strict";tn()});function nn(e,t){return String(t||"").toLowerCase().split(/\s+/).forEach(n=>{n&&(n==="off"||n==="hide"?e.off=!0:n==="on"||n==="pip"||n==="show"?(e.off=!1,e.full=!1,e.used=!0):n==="full"||n==="fullscreen"?(e.full=!0,e.off=!1,e.used=!0):/^\d+(\.\d+)?%?$/.test(n)?(e.size=Kn(parseFloat(n)),e.used=!0):Mt.includes(n)?(e.corner=n,e.used=!0):n==="flip"?(e.flip=!e.flip,e.used=!0):n==="circle"?e.circle=!0:n==="rect"?e.circle=!1:n==="mirror"?e.mirror=!0:(n==="unmirror"||n==="no-mirror")&&(e.mirror=!1))}),e}function Mo(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Bo(e,t){let n=[];if(!e.length){for(let o=0;o<=t;o++)n.push({cam:0,frag:o});return n}let a=e.findIndex(o=>!nn({},o).full);a<0&&(a=e.length-1);for(let o=0;o<=a;o++)n.push({cam:o,frag:0});for(let o=1;o<=t;o++)n.push({cam:a,frag:o});for(let o=a+1;o<e.length;o++)n.push({cam:o,frag:t});return n}var Mt,Kn,Ao=q(()=>{"use strict";Mt=["top-left","top-right","bottom-left","bottom-right"],Kn=e=>Math.max(8,Math.min(60,e))});function Io(e){let t=String(e||"").trim();if(!t)return null;let n;try{n=new URL(/^[a-z]+:\/\//i.test(t)?t:"https://"+t)}catch{return null}let a=n.pathname.split("/").filter(Boolean);if(n.hostname==="github.com"||n.hostname==="www.github.com"){let[o,r,i,s,...l]=a;if(o&&r&&(i==="blob"||i==="raw"||i==="tree")&&s){let c=l.join("/");return(i==="tree"||!/\.(md|markdown|txt)$/i.test(c))&&(c=(c?c+"/":"")+"index.md"),{kind:"url",url:Jn+[o,r,s].join("/")+"/"+c}}if(o&&r&&!i)return{kind:"url",url:Jn+o+"/"+r+"/HEAD/README.md"}}if(n.hostname==="gist.github.com"){let o=a.length>=2?a[1]:a[0];if(o&&/^[\da-f]+$/i.test(o))return{kind:"gist",id:o}}if(n.hostname==="slidetake.com"||n.hostname==="www.slidetake.com"){let o=$n(n.pathname);if(o)return o;let r=n.searchParams.get("src");if(r)return{kind:"url",url:r}}return{kind:"url",url:n.href}}function $n(e){let t=String(e||"").split("/").filter(Boolean).map(n=>{try{return decodeURIComponent(n)}catch{return n}});if(t[0]==="gh"&&t.length>=4){let[,n,a,...o]=t,r=a.indexOf("@"),i=r<0?a:a.slice(0,r),s=r<0?"HEAD":a.slice(r+1);return!n||!i||!s?null:{kind:"url",url:Jn+[n,i,s,...o].map(encodeURIComponent).join("/")}}return t.length===1&&(t[0]==="docs"||t[0]==="help")?{kind:"builtin",id:"docs"}:t[0]==="showcase"&&t.length===1?{kind:"builtin",id:"showcase"}:t[0]==="examples"&&(t.length===1||t.length===2&&t[1]==="showcase")?{kind:"builtin",id:"showcase"}:t.length===1&&t[0]==="features"?{kind:"builtin",id:"features"}:t.length===1&&t[0]==="privacy"?{kind:"builtin",id:"privacy"}:t[0]==="gist"&&t[1]&&/^[\da-f]+$/i.test(t[1])?t[2]?{kind:"gist",id:t[1],file:t[2]}:{kind:"gist",id:t[1]}:null}function Oo(e){if(e.kind==="builtin")return e.id==="home"?"/":e.id==="showcase"?"/showcase":e.id.startsWith("template:")?"/new?template="+e.id.slice(9):"/"+e.id;if(e.kind==="gist")return"/gist/"+e.id+(e.file?"/"+encodeURIComponent(e.file):"");let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);if(t){let[,n,a,o,r]=t;if(!/^refs$/.test(o))return"/gh/"+n+"/"+a+(o==="HEAD"?"":"@"+o)+"/"+r}return"/?src="+encodeURIComponent(e.url)}var Jn,Xn=q(()=>{"use strict";Jn="https://raw.githubusercontent.com/"});function as(e){let t="";for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function os(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,n=>n.charCodeAt(0))}async function Ro(e,t){let n=new Response(new Blob([e]).stream().pipeThrough(t));return new Uint8Array(await n.arrayBuffer())}async function Po(e){return as(await Ro(new TextEncoder().encode(e),new CompressionStream("deflate-raw")))}async function zo(e){return new TextDecoder().decode(await Ro(os(e),new DecompressionStream("deflate-raw")))}function an(e){let t=e.replace(/^#/,"");if(!t.startsWith(Qn)){let r=t;try{r=decodeURIComponent(t)}catch{}return{data:null,slide:r}}let n=t.slice(Qn.length),a=n.indexOf("~"),o=a<0?"":n.slice(a+1);try{o=decodeURIComponent(o)}catch{}return{data:a<0?n:n.slice(0,a),slide:o}}function Zn(e,t){return"#"+Qn+e+(t?"~"+encodeURIComponent(t):"")}var Qn,ea=q(()=>{"use strict";Qn="deflate:"});function Do(e,t,n){let a=e.replace(/\/+$/,"")||"/",o=new URLSearchParams(t),{data:r,slide:i}=an(n);if(a==="/share")return r?{page:"share",data:r,slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:""};if(a==="/edit")return{page:"edit",slide:i};if(a==="/new"){let c=o.get("template");return c&&rs.includes(c)?{page:"source",source:{kind:"builtin",id:"template:"+c},slide:i}:{page:"pick"}}let s=$n(a);if(s)return{page:"source",source:s,slide:i};let l=o.get("src");return a==="/"&&l?{page:"source",source:{kind:"url",url:l},slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:i}}function ye(e){switch(e.kind){case"builtin":return e.id==="home"?"Home":e.id==="docs"||e.id==="help"?"the docs":e.id==="showcase"?"the showcase":e.id==="features"?"the features":e.id==="privacy"?"the privacy page":"the "+e.id.replace(/^template:/,"")+" template";case"gist":return"a gist"+(e.file?" ("+e.file+")":"");case"shared":return"a shared deck";case"file":return e.name;case"url":{let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/[^/]+\/(.+)$/);if(t)return t[1]+"/"+t[2]+"/"+t[3];try{let n=new URL(e.url);return n.hostname+n.pathname}catch{return e.url}}}}function on(e,t,{exported:n=!1}={}){return{text:e,origin:t,originText:e,exported:n?e:null}}function rn(e){return e.text!==(e.exported??e.originText)}function sn(e){return e.text===e.originText}function Fo(e){try{let t=JSON.parse(e||"null");return!t||typeof t.text!="string"||!t.origin||typeof t.origin.kind!="string"?null:{text:t.text,origin:t.origin,originText:typeof t.originText=="string"?t.originText:t.text,exported:typeof t.exported=="string"?t.exported:null}}catch{return null}}var rs,jo=q(()=>{"use strict";Xn();ea();rs=["blank","talk","recording"]});function ta(e){let t;try{t=new URL(e)}catch{return null}let n=t.hostname.replace(/^(www\.|m\.)/,""),a=null,o=!1;if(n==="youtu.be")a=t.pathname.slice(1).split("/")[0];else if(n==="youtube.com"||n==="youtube-nocookie.com"){let r=t.pathname.split("/").filter(Boolean);r[0]==="watch"?a=t.searchParams.get("v"):["shorts","live","embed"].includes(r[0])&&(a=r[1]||null,o=r[0]==="shorts")}return!a||!/^[\w-]{6,}$/.test(a)?null:{id:a,start:is(t.searchParams.get("t")||t.searchParams.get("start")||""),portrait:o}}function is(e){if(/^\d+$/.test(e))return+e;let t=e.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);return t&&e?+(t[1]||0)*3600+ +(t[2]||0)*60+ +(t[3]||0):0}function No(e){return"https://www.youtube-nocookie.com/embed/"+encodeURIComponent(e.id)+"?enablejsapi=1&rel=0&playsinline=1"+(e.start?"&start="+e.start:"")}var _o=q(()=>{"use strict"});function we(e){let t=new Map,n=e.totalObs??e.total;return e.events.forEach((a,o)=>{t.has(a.id)||t.set(a.id,{id:a.id,title:a.title,takes:[]});let r=t.get(a.id),i=e.events[o+1];r.takes.push({no:r.takes.length+1,start:Uo(a),end:i?Uo(i)-(i.lead||0):n})}),t}function Qe(e){let t=[],n=cn(e);return we(e).forEach(a=>{let o=e.picks[a.id]??a.takes.length;if(!o)return;let r=a.takes[o-1];if(!r)return;let i=qo(r.start,n),s=qo(r.end,n);s>i&&t.push({id:a.id,title:a.title,f0:i,f1:s,start:i*1e3/n,end:s*1e3/n})}),t}function ss(e){let t=[];return e.forEach(n=>{let a=t[t.length-1];a&&n.f0===a.f1?(a.f1=n.f1,a.end=n.end):t.push({f0:n.f0,f1:n.f1,start:n.start,end:n.end})}),t}function na(e,t){let n=0,a=[];return Qe(e).forEach(o=>{let{sec:r,title:i}=t(o.id,o.title),s=a[a.length-1];(!s||s.sec!==r&&s.title!==i)&&a.push({sec:r,title:i,t:n}),n+=o.end-o.start}),{list:a,length:n}}function Wo(e,t){let{list:n,length:a}=na(e,t),o=n.filter((r,i)=>i===0||(n[i+1]?n[i+1].t:a)-r.t>=1e4);return o.length&&(o[0].t=0),{lines:o.map(r=>ae(r.t)+" "+r.title),dropped:n.length-o.length,length:a}}function Go(e,t,{input:n,outputName:a,sectionOf:o,loudness:r}){let i=ss(Qe(e));if(!e.withObs)return"# This was a rehearsal: nothing was recorded.";if(!i.length)return"# Every slide is left out: nothing to render.";let s=ls(n)+a,{list:l,length:c}=na(e,o),d=m=>String(m).replace(/[=;#\\\n]/g,y=>"\\"+y),x=`cat > /tmp/slidetake-chapters.txt <<'EOF'
`+(`;FFMETADATA1
title=`+d(e.deckTitle)+`
`+l.map((m,y)=>`[CHAPTER]
TIMEBASE=1/1000
START=`+Math.round(m.t)+`
END=`+Math.round(l[y+1]?l[y+1].t:c)+`
title=`+d(m.title)).join(`
`))+`
EOF
`,b=" -map 0:v:0 -map 0:a:0 -map_metadata 1 -map_chapters 1";if(t==="copy"){let m=i.map(I=>"file "+ln(n)+`
inpoint `+Ho(I.start)+`
outpoint `+Ho(I.end)).join(`
`);return(i.length>1?`# Careful: without re-encoding, cuts can only land on keyframes (OBS puts one about every 2 s),
# so `+(i.length===2?"the cut":"each of the "+(i.length-1)+" cuts")+` here may keep or lose up to ~2 s. Use a frame-accurate option for retakes.
`:"")+`cat > /tmp/slidetake-cuts.txt <<'EOF'
`+m+`
EOF
`+x+"ffmpeg -f concat -safe 0 -i /tmp/slidetake-cuts.txt -i /tmp/slidetake-chapters.txt"+b+" -c copy -movflags +faststart "+ln(s)}let w=cn(e),h=m=>(m/w).toFixed(6),M=m=>((m-.5)/w).toFixed(6),T=i.map(m=>"gte(t,"+M(m.f0)+")*lt(t,"+M(m.f1)+")").join("+"),v=i.map(m=>"gte(t,"+h(m.f0)+")*lt(t,"+h(m.f1)+")").join("+"),k=t==="mac"?"-c:v h264_videotoolbox -b:v 12M":"-c:v libx264 -crf 18 -preset medium";return x+"ffmpeg -i "+ln(n)+" -i /tmp/slidetake-chapters.txt"+b+` -vf "select='`+T+`',setpts=N/FRAME_RATE/TB" -af "asetnsamples=n=48:p=0,aselect='`+v+"',asetpts=N/SR/TB"+(r?",loudnorm=I=-14:TP=-1:LRA=11":"")+'"'+(r?" -ar 48000":"")+" "+k+" -c:a aac -b:a 192k -movflags +faststart "+ln(s)}var Uo,cn,qo,Ze,ls,ln,Ho,dn=q(()=>{"use strict";tn();Uo=e=>e.obsT??e.t,cn=e=>e.fps||60,qo=(e,t)=>Math.round(e*t/1e3);Ze=e=>String(e||"").split(/[\\/]/).pop()||"",ls=e=>{let t=Math.max(String(e).lastIndexOf("/"),String(e).lastIndexOf("\\"));return t>=0?String(e).slice(0,t+1):""},ln=e=>"'"+String(e).replace(/'/g,"'\\''")+"'",Ho=e=>(e/1e3).toFixed(3)});function cs(e,t){let n=Math.min(e,t*16/9),a=n*9/16;return{w:n,h:a,x:(e-n)/2,y:(t-a)/2}}function Yo(e,t,n){let a=cs(e,t),o=[Math.floor(a.w*n),Math.floor(a.h*n)];return{quality:et.find(r=>o[0]>=r.w&&o[1]>=r.h)||null,device:o}}function At(e){let t=new Map;e.events.forEach((a,o)=>{t.has(a.id)||t.set(a.id,[]),t.get(a.id).push(o)});let n=[];return we(e).forEach(a=>{let o=e.picks[a.id]??a.takes.length,r=o?a.takes[o-1]:null;if(!r)return;let i=e.events[t.get(a.id)[o-1]];i&&i.clip&&r.end>r.start&&n.push({id:a.id,title:a.title,clip:i.clip,keep:(r.end-r.start)/1e3})}),n}var et,pn,Bt,ds,Vo,aa,Ko,un,Jo=q(()=>{"use strict";dn();et=[{name:"1080p",w:1920,h:1080,bitrate:8e6},{name:"720p",w:1280,h:720,bitrate:5e6}],pn=192e3,Bt=30;ds=["video/mp4;codecs=avc1.640028,mp4a.40.2","video/mp4;codecs=avc1,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],Vo=e=>ds.find(t=>e(t))||"",aa=e=>e.startsWith("video/mp4")?"mp4":"webm",Ko=e=>Math.round((e.bitrate+pn)/8*60);un=(e,t)=>t>e?t:e+.001});function ps(e){let t=1681.974450955533,n=.7071752369554196,a=Math.tan(Math.PI*t/e),o=Math.pow(10,3.999843853973347/20),r=Math.pow(o,.4996667741545416),i=1+a/n+a*a,s={b0:(o+r*a/n+a*a)/i,b1:2*(a*a-o)/i,b2:(o-r*a/n+a*a)/i,a1:2*(a*a-1)/i,a2:(1-a/n+a*a)/i};t=38.13547087602444,n=.5003270373238773,a=Math.tan(Math.PI*t/e),i=1+a/n+a*a;let l={b0:1,b1:-2,b2:1,a1:2*(a*a-1)/i,a2:(1-a/n+a*a)/i};return{shelf:s,highPass:l}}function $o(e,t){let{shelf:n,highPass:a}=ps(e),o=Math.round(e/10),r=[],i=Array.from({length:t},()=>new Float64Array(8)),s=d=>d>=3&&d<=4?1.41:1,l=0,c=0;return{add(d){let C=d[0].length;for(let x=0;x<t;x++){let b=d[x]||d[0],w=i[x],h=s(x),[M,T,v,k,m,y,I,X]=w,Q=l,B=Math.floor(Q/o),Z=(B+1)*o,ee=0;for(let de=0;de<C;de++){let K=b[de];K>c?c=K:-K>c&&(c=-K);let Et=n.b0*K+n.b1*M+n.b2*T-n.a1*v-n.a2*k;T=M,M=K,k=v,v=Et;let pe=a.b0*Et+a.b1*m+a.b2*y-a.a1*I-a.a2*X;y=m,m=Et,X=I,I=pe,ee+=pe*pe,++Q===Z&&(r[B]=(r[B]||0)+h*ee,ee=0,B++,Z+=o)}ee&&(r[B]=(r[B]||0)+h*ee),w.set([M,T,v,k,m,y,I,X])}l+=C},result(){let d=Math.floor(l/o),C=[];for(let h=3;h<d;h++)C.push(((r[h-3]||0)+(r[h-2]||0)+(r[h-1]||0)+(r[h]||0))/(4*o));let x=h=>h.reduce((M,T)=>M+T,0)/h.length,b=C.filter(h=>hn(h)>-70),w=b.length?b.filter(h=>hn(h)>hn(x(b))-10):[];return{integrated:w.length?hn(x(w)):-1/0,peak:c,peakDb:c>0?us(c):-1/0}}}}function Xo(e,t=-14){return isFinite(e.integrated)?Math.min(t-e.integrated,oa):0}function ra(e,t,n={}){let a=mn(n.ceilingDb??-1.5),o=Math.max(1,Math.round((n.lookahead??.005)*e)),r=1-Math.exp(-1/((n.release??.05)*e)),i=Array.from({length:t},()=>[]),s=[],l=[],c=new Float64Array(o),d=0,C=o,x=1,b=!1,w=0,h=0;c.fill(1);let M=T=>{for(;l.length&&l[l.length-1][1]>=T;)l.pop();for(l.push([d,T]);l[0][0]<=d-o;)l.shift();let v=l[0][1];if(x=v<x?v:x+(v-x)*r,x>.999&&(x=1),C+=x-c[d%o],c[d%o]=x,d>=o-1){let k=C/o,m=k>.999?1:k;s.push(m),m<.999&&!b&&w++,b=m<.999}d++};return{push(T){let v=T[0].length;for(let k=0;k<v;k++){let m=0;for(let y=0;y<t;y++){let I=(T[y]||T[0])[k];i[y].push(I),I>m?m=I:-I>m&&(m=-I)}M(m>a?a/m:1)}},ready:()=>s.length-h,take(T){let v=Array.from({length:t},()=>new Float32Array(T));for(let k=0;k<T;k++){let m=s[h+k];for(let y=0;y<t;y++)v[y][k]=i[y][h+k]*m}return h+=T,h>65536&&(s.splice(0,h),i.forEach(k=>k.splice(0,h)),h=0),v},end(){for(let T=0;T<o-1;T++){for(let v=0;v<t;v++)i[v].push(0);M(1)}},get events(){return w}}}var us,hn,oa,mn,Qo=q(()=>{"use strict";us=e=>20*Math.log10(e),hn=e=>-.691+10*Math.log10(e);oa=20;mn=e=>Math.pow(10,e/20)});function Zo(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function er(e,t){return e.map((n,a)=>{let o=e[a-1]||"";return{id:n,title:t(n).title,fp:t(n).fp,prev:o,prevFp:o?t(o).fp:""}})}function tr(e,t,n){let a=new Map(n.map(i=>[i.id,i])),o=new Map;e.events.forEach(i=>{o.has(i.id)||o.set(i.id,[]),o.get(i.id).push(i)});let r=[];return we(e).forEach(i=>i.takes.forEach((s,l)=>{let c=o.get(i.id)[l];if(!c||!c.clip||s.end<=s.start)return;let d=a.get(i.id);d&&r.push({uid:c.clip,id:i.id,title:i.title,clip:c.clip,ms:s.end-s.start,run:t,date:e.date,fp:d.fp,prev:d.prev,prevFp:d.prevFp,at:s.start})})),r.sort((i,s)=>i.at-s.at).map(({at:i,...s})=>s)}function nr(e,t){return t.map(n=>{let a=e.takes.filter(i=>i.id===n.id).map((i,s)=>({...i,no:s+1,outdated:i.fp!==n.fp?"slide":(i.prev??null)!==n.prev||i.prevFp!==n.prevFp?"before":""})),o=e.picks[n.id],r=null;if(o&&a.some(i=>i.uid===o))r=o;else{let i=a.filter(s=>!s.outdated);r=i.length?i[i.length-1].uid:null}return{id:n.id,title:n.title,takes:a,pick:r}})}function ar(e){let t=[],n=0;return e.forEach(a=>{let o=a.pick?a.takes.find(r=>r.uid===a.pick):null;o&&(t.push({id:a.id,title:a.title,t:n,clip:o.clip}),n+=o.ms)}),{events:t,picks:{},total:n}}function ia(e,t){let n=new Set(t);return e.filter(a=>n.has(a))}function or(e,t,n){let a=t?e.indexOf(t):-1,o=e.indexOf(n);return a<0||o<0?[n]:e.slice(Math.min(a,o),Math.max(a,o)+1)}var rr=q(()=>{"use strict";dn()});var lc={};function U(e){try{let t=localStorage.getItem(e);if(t!==null||!e.startsWith("slidetake:"))return t;let n=e.slice(10);return localStorage.getItem("slidetake:"+n)??localStorage.getItem("traverse:"+n)}catch{return null}}function Y(e,t){try{localStorage.setItem(e,t)}catch{}}function xs(e){try{return{html:window.marked?window.marked.parse(e):"<pre>"+O(e)+"</pre>",err:null}}catch{return{html:"<p>(could not render)</p>",err:"render error"}}}function kn(){let e=L.brand||"",t=L.logo||"",n=/^chip$/i.test(L.brand_style||""),a=/^slidetake$/i.test(e)?'<span class="st-mark">'+Ir+'<span class="word">Slide<span>take</span></span></span>':(t?'<img alt="" src="'+O(t)+'">':"")+(e?"<span"+(n?' class="chip"':"")+">"+O(e)+"</span>":"");if(Te.dataset.html!==a){Te.dataset.html=a,Te.innerHTML=a;let o=Te.querySelector("img");o&&(o.onload=o.onerror=()=>ve(!0))}Te.hidden=!a,Ra(),document.title=L.title||"Slidetake",Es(),Or()}function Ss(){let e=String(L.accent||"").trim();if(!e||!window.CSS||!CSS.supports("color",e))return null;if(!CSS.supports("color","oklch(from red l c h)"))return{accent:e,line:e};let t=n=>"oklch(from "+e+" "+n+" c h)";return{dark:{accent:t(.8),accentSoft:t(.87),line:t(.5)},light:{accent:t(.45),accentSoft:t(.4),line:t(.75),ring:t(.7)}}}function Es(){let e="",t=(a,o)=>{let r=Object.entries(o||{}).filter(([i,s])=>lr[i]&&s&&typeof s!="object").map(([i,s])=>lr[i]+":"+String(s).replace(/[;{}<>]/g,"")).join(";");r&&(e+=a+"{"+r+`}
`)};[_&&_.colors,Ss()].filter(Boolean).forEach(a=>{["dark","light"].forEach(o=>{let r={...a,...a[o]||{}},i=o==="dark";r.accent&&typeof r.accent=="string"&&(r.accentSoft=r.accentSoft||r.accent,r.line=r.line||"color-mix(in srgb, "+r.accent+(i?" 45%, #09090b)":" 55%, #fff)"),r.ring=r.ring||(i?r.accent:r.line),r.onAccent=r.onAccent||(i?"color-mix(in srgb, "+r.accent+" 15%, #000)":"#fff")),t(i?'body:not([data-mode="light"])':'body[data-mode="light"]',r)})});let n=document.getElementById("st-colors");n||(n=document.createElement("style"),n.id="st-colors",document.head.appendChild(n)),n.textContent!==e&&(n.textContent=e),document.body.classList.toggle("st-header-color",e.includes("--header-bg"))}function Ot(e){let t=document.createElement("span");t.style.color="var("+e+")",document.body.appendChild(t);let n=getComputedStyle(t).color;return t.remove(),Fe=Fe||Object.assign(document.createElement("canvas"),{width:1,height:1}).getContext("2d",{willReadFrequently:!0}),Fe.clearRect(0,0,1,1),Fe.fillStyle="#000",Fe.fillStyle=n,Fe.fillRect(0,0,1,1),"#"+[...Fe.getImageData(0,0,1,1).data.slice(0,3)].map(a=>a.toString(16).padStart(2,"0")).join("")}function Cs(e,t,n){let a=i=>[1,3,5].map(s=>parseInt(i.slice(s,s+2),16)),o=a(e),r=a(t);return"#"+o.map((i,s)=>Math.round(i*n+r[s]*(1-n)).toString(16).padStart(2,"0")).join("")}function Pn(){if(_&&_.themeKey&&!cr){let t=U(_.themeKey);return t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return String(cr||U("slidetake:mode")||L.mode||"dark").toLowerCase()==="light"?"light":"dark"}function Or(){let e=Pn()==="light";e?document.body.dataset.mode="light":delete document.body.dataset.mode;let t=document.getElementById("btn-mode");t&&(t.innerHTML=e?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',t.title=(e?"Dark theme":"Light theme")+" (L)",t.setAttribute("aria-label",t.title))}function Rr(){let e=Pn()==="light"?"dark":"light";_&&_.themeKey?(Y(_.themeKey,e),document.documentElement.classList.toggle("dark",e==="dark")):Y("slidetake:mode",e),Or(),ie.querySelector(".echarts-container, .diagram.d2")&&ct(!0)}function Ts(){let t=(L.camera||"").replace(/^\[|\]$/g,"").split(",").map(n=>n.trim().replace(/^["']|["']$/g,"")).filter(Boolean);return t.length?t:["on","full","off"]}function wa(e){return!ne&&e?Mo(e.camera):[]}function Ke(e){return Bo(wa(e),e&&e.frags?e.frags.length:0)}function Pr(){let e=Ke(u.get(f));return e[Math.min(be,e.length-1)]||{cam:0,frag:0}}function Ls(){if(!f)return null;let e=u.get(f),t=wa(e);if(t.length)return t[Math.min(Pr().cam,t.length-1)];if(e&&e.el&&e.el.classList.contains("card-full"))return"off";for(let n=g.indexOf(f)-1;n>=0;n--){let a=wa(u.get(g[n]));if(a.length)return a[a.length-1]}return null}function Ms(){let e={corner:(L.pip||"none").toLowerCase(),size:Kn(parseFloat(L.pip_size)||24),circle:(L.pip_shape||"").toLowerCase()==="circle",mirror:!/^(no|false|off)$/i.test(L.pip_mirror||""),full:!1,off:!1,flip:!1,used:!1};return nn(e,Ls()),me&&!/\b(off|hide)\b/i.test(me)&&(e.off=!1),nn(e,me),!Mt.includes(e.corner)&&(te||e.used)&&(e.corner="bottom-right"),e.flip&&Mt.includes(e.corner)&&(e.corner=e.corner.includes("left")?e.corner.replace("left","right"):e.corner.replace("right","left")),e}function Ra(){let e=!P.hidden&&P.offsetWidth?P.getBoundingClientRect():null,t=Ye=Ms(),n=Mt.includes(t.corner);if(P.className=n?[t.corner,t.circle&&"circle",te&&"live",t.mirror&&"mirror",t.full&&"full",P.classList.contains("msg")&&"msg"].filter(Boolean).join(" "):"",P.style.width=t.size+"%",P.hidden=!n||ne||t.off,ya.dataset.pip=P.hidden||t.full?"none":t.corner,P.hidden||bt||!P.animate)return;let a="cubic-bezier(.65,0,.35,1)";if(!e){P.animate([{opacity:0},{opacity:1}],{duration:300,easing:"ease-out"});return}let o=P.getBoundingClientRect();Math.abs(e.left-o.left)+Math.abs(e.top-o.top)+Math.abs(e.width-o.width)+Math.abs(e.height-o.height)<2||P.animate([{transformOrigin:"0 0",transform:"translate("+(e.left-o.left)+"px,"+(e.top-o.top)+"px) scale("+e.width/o.width+","+e.height/o.height+")"},{transformOrigin:"0 0",transform:"none"}],{duration:600,easing:a})}function Bs(){let e=Ye;if(!e||P.hidden||e.full)return null;let t=j.clientWidth,n=j.clientHeight,a=16,o=t*e.size/100,r=e.circle?o:o*9/16,i=e.corner.includes("left")?a:t-a-o,s=e.corner.includes("top")?a:n-a-r;return{x0:i,y0:s,x1:i+o,y1:s+r}}function As(){if(!gt)return;if(ne){Zt(!0);return}let e=Ts();Be=(Be+1)%e.length,me=e[Be],Ra(),G||ot("Camera: "+me),!te&&!P.hidden?$e():ve()}function zr(e){let t=To(e,{render:xs});L=t.deck,u=t.nodes,kn();let n={"+++":"+++ format",reveal:"reveal.js format",headings:"headings"}[t.format];hs.textContent=u.size+(u.size===1?" card":" cards")+" \xB7 "+n,_t.textContent=t.errCount?t.errCount+" card(s) had errors":""}function Dr(){Ee=[...u.values()].filter(a=>!a.parent).map(a=>a.id);let e=0;function t(a,o){let r=u.get(a);if(r.depth=o,r.children.length===0)r._slot=e++;else{r.children.forEach(s=>t(s,o+1));let i=r.children.map(s=>u.get(s)._slot);r._slot=(Math.min(...i)+Math.max(...i))/2}}Ee.forEach(a=>t(a,0)),g=[];function n(a){g.push(a),u.get(a).children.forEach(n)}return Ee.forEach(n),Math.max(1,e)}function Is(){let e=[],t=[],n=[];return u.forEach(a=>{e[a.depth]=Math.max(e[a.depth]||0,a._h),t[a.depth]=Math.max(t[a.depth]||0,a._w),n[a.depth]=(n[a.depth]||0)+1}),{maxH:e,maxW:t,count:n,maxDepth:e.length-1}}function Fr(e){e.x!==null&&!isNaN(e.x)&&(e.cx=e.x+e._w/2),e.y!==null&&!isNaN(e.y)&&(e.cy=e.y+e._h/2)}function Os(){let{maxH:e,maxDepth:t}=Is(),n=[0];for(let l=1;l<=t;l++)n[l]=n[l-1]+e[l-1]+bs;let a=gs-it,o=[],r=(l,c)=>{let d=u.get(l);d.cx+=c,d.children.forEach(C=>r(C,c))},i=l=>{let c=u.get(l);o[c.depth]=Math.max(o[c.depth]??-1/0,c.cx+c._w/2),c.children.forEach(i)};function s(l){let c=u.get(l),d=o[c.depth]!==void 0?o[c.depth]+a:-1/0;c.children.length?(c.children.forEach(s),c.cx=(u.get(c.children[0]).cx+u.get(c.children[c.children.length-1]).cx)/2,c.cx-c._w/2<d&&r(l,d-(c.cx-c._w/2))):c.cx=(d===-1/0?0:d)+c._w/2,i(l)}Ee.forEach(s),u.forEach(l=>{l.cy=n[l.depth]+l._h/2,Fr(l)})}function Rs(e){let t=Math.PI*2/e,n=32,a=[],o=(s,l)=>Math.abs(s.cx-l.cx)<(s._w+l._w)/2+n&&Math.abs(s.cy-l.cy)<(s._h+l._h)/2+n,r=Math.max(0,...[...u.values()].map(s=>s.depth)),i=0;for(let s=0;s<=r;s++){let l=[...u.values()].filter(d=>d.depth===s);if(!l.length)continue;let c=s===0?Ee.length>1?ys*.5:0:i+vs;for(let d=0;d<400&&(l.forEach(x=>{let b=(x._slot+.5)*t-Math.PI/2;x.cx=c*Math.cos(b),x.cy=c*Math.sin(b),Fr(x)}),!!l.some((x,b)=>l.some((w,h)=>h>b&&o(x,w))||a.some(w=>o(x,w))));d++)c=c*1.02+10;i=c,a.push(...l)}}function Ps(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),n=[];for(;t.nextNode();)n.push(t.currentNode);n.forEach(a=>{let o=a.data.match(/^\s*\.element:\s*([\s\S]*)$/);if(!o)return;let r=a.previousSibling;for(;r&&r.nodeType===3&&!r.data.trim();)r=r.previousSibling;let i=r&&r.nodeType===1?r:a.parentElement;i&&Object.entries(Tt(o[1])).forEach(([s,l])=>{s==="class"?i.classList.add(...l.split(/\s+/).filter(Boolean)):s==="style"?i.style.cssText+=";"+l:i.setAttribute(s,l)})})}function Fs(e){let t=new DOMParser().parseFromString(e,"image/svg+xml"),n=t.documentElement;if(!n||n.localName!=="svg"||t.getElementsByTagName("parsererror").length)return null;let a=n.namespaceURI,o=i=>{[...i.children].forEach(s=>{s.namespaceURI!==a||!zs.has(s.localName)?s.remove():o(s)}),[...i.attributes].forEach(s=>{let l=s.name.toLowerCase(),c=s.value;(l.startsWith("on")||/javascript:|expression\(/i.test(c)||/url\(\s*['"]?(?!#)/i.test(c)||(l==="href"||l==="xlink:href")&&!c.trim().startsWith("#"))&&i.removeAttribute(s.name)})};o(n);let r="st-svg"+ ++Ds+"-";return[n,...n.querySelectorAll("*")].forEach(i=>[...i.attributes].forEach(s=>{let l=s.name==="id"?r+s.value:s.value.replace(/url\(\s*(['"]?)#/g,"url($1#"+r);(s.name==="href"||s.name==="xlink:href")&&l.startsWith("#")&&(l="#"+r+l.slice(1)),l!==s.value&&(s.value=l)})),document.importNode(n,!0)}function Le(e,t){let n=e.classList.contains("fragment");["fragment","fade-up","visible","current-fragment"].forEach(a=>{e.classList.contains(a)&&(t.classList.add(a),e.classList.remove(a))}),e.dataset.fragmentIndex!==void 0&&(t.dataset.fragmentIndex=e.dataset.fragmentIndex,delete e.dataset.fragmentIndex),e.replaceWith(t),n&&u.forEach(a=>a.frags&&a.frags.forEach(o=>{let r=o.indexOf(e);r>=0&&(o[r]=t)}))}function ca(e){let t=document.createElement("figure");t.className="media",Le(e,t),t.appendChild(e);let n=e.getAttribute("alt");return n&&t.insertAdjacentHTML("beforeend","<figcaption>"+O(n)+"</figcaption>"),t}function js(e,t){let n=document.createElement("figure");return n.className="media yt fragment yt-play"+(e.portrait?" portrait":""),n.innerHTML='<div class="frame"><iframe src="'+No(e)+'" title="'+O(t||"YouTube video")+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>'+(t?"<figcaption>"+O(t)+"</figcaption>":""),n}function dr(e,t){let n=t<=4?t:t<=6?3:4;e.style.setProperty("--cols",n),e.style.setProperty("--rows",Math.ceil(t/n))}function _s(e,t){t.querySelectorAll("pre > code.language-svg").forEach(r=>{let i=Fs(r.textContent.trim()),s=document.createElement("div");s.className=i?"diagram svg":"diagram err",i?s.appendChild(i):s.textContent="SVG error: not a valid <svg> drawing",Le(r.parentElement,s)}),t.querySelectorAll(":scope > p").forEach(r=>{let i=r.children.length===1?r.children[0]:null;if(!i)return;let s=i.tagName==="A"&&r.textContent.trim()===i.textContent.trim()?i.getAttribute("href"):i.tagName==="IMG"?i.getAttribute("src"):null,l=s&&ta(s);l&&Le(r,js(l,i.tagName==="IMG"?i.getAttribute("alt"):""))}),t.querySelectorAll(":scope > ul, :scope > ol").forEach(r=>{let i=[...r.children];!i.length||!i.every(s=>da(s)||qs(s))||(r.classList.add("gallery"),i.some(s=>!da(s))&&r.classList.add("diagrams"),i.forEach(s=>{if(!da(s))return;let l=s.querySelector("img");s.innerHTML="",s.appendChild(l),ca(l)}),i.length>1&&i.every(s=>s.classList.contains("fragment"))?(r.classList.add("carousel"),i[0].classList.remove("fragment","fade-up"),i.forEach((s,l)=>{s.classList.replace("fade-up","current-visible");let c=s.querySelector("figcaption");c&&(c.dataset.count=l+1+" / "+i.length)})):dr(r,i.length))}),t.querySelectorAll(":scope > p").forEach(r=>{if(!Ns(r))return;let i=[...r.querySelectorAll("img")];if(i.length===1){Le(r,i[0]),ca(i[0]);return}let s=document.createElement("div");s.className="gallery grid",Le(r,s),i.forEach(l=>{s.appendChild(l),ca(l)}),dr(s,i.length)});let n=[...t.children].filter(r=>!/^H[1-6]$/.test(r.tagName)&&!(r.nodeType===1&&r.tagName==="HR")),a=n.filter(r=>r.matches("figure.media"));a.length===1&&n.length===1&&e.classList.add("card-media"),n.length===1&&(n[0].matches("figure.media:not(.yt)")||n[0].matches(".gallery.carousel:not(.diagrams)"))&&e.classList.add("card-bleed");let o=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT);for(;o.nextNode();)if(/^\s*view\s*:\s*full\s*$/i.test(o.currentNode.data))e.classList.add("card-full");else if(a.length===1){e.classList.add("card-split",n.indexOf(a[0])===0?"media-first":"media-last");let r=document.createElement("div");r.className="split-text",n.filter(i=>i!==a[0]).forEach(i=>r.appendChild(i)),a[0].after(r),n.indexOf(a[0])!==0&&r.after(a[0])}t.querySelector(".gallery")&&e.classList.add("card-gallery")}function jr(e,t){let n=e.querySelector("iframe");n&&n.contentWindow&&n.contentWindow.postMessage(JSON.stringify({event:"command",func:t,args:[]}),"*")}function Us(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),n=[];for(;t.nextNode();)/^\s*steps\s*$/i.test(t.currentNode.data)&&n.push(t.currentNode);n.forEach(a=>{for(let o=a.nextSibling;o&&!(o.nodeType===8&&/^\s*steps\s*:\s*off\s*$/i.test(o.data));o=o.nextSibling)o.nodeType!==1||o.classList.contains("fragment")||(/^(UL|OL)$/.test(o.tagName)?o.querySelectorAll(":scope > li").forEach(r=>r.classList.add("fragment","fade-up")):o.classList.add("fragment","fade-up"))})}function Hs(e){let t=o=>o.classList.contains("fragment")&&(o.tagName==="P"&&o.children.length===1&&o.children[0].tagName==="IMG"&&!o.textContent.trim()&&!ta(o.children[0].getAttribute("src")||"")||o.tagName==="PRE"&&!!o.querySelector(Nr)),n=[],a=[];[...e.children].forEach(o=>{t(o)?a.push(o):(a.length>1&&n.push(a),a=[])}),a.length>1&&n.push(a),n.forEach(o=>{let r=document.createElement("ul");o[0].before(r),o.forEach(i=>{let s=document.createElement("li");s.className="fragment fade-up",i.classList.remove("fragment","fade-up"),s.appendChild(i),r.appendChild(s)})})}function Ws(e){let t=[...e.querySelectorAll(".fragment")].map((o,r)=>({e:o,i:r,k:o.dataset.fragmentIndex}));if(t.every(o=>o.k===void 0))return t.map(o=>[o.e]);let n=0;t.forEach(o=>{o.k=o.k===void 0?n:parseFloat(o.k),n=Math.max(n,o.k)+1}),t.sort((o,r)=>o.k-r.k||o.i-r.i);let a=[];return t.forEach((o,r)=>{r&&t[r-1].k===o.k?a[a.length-1].push(o.e):a.push([o.e])}),a}function Pa(e,t,n){!e||!e.frags||(n&&e.el.classList.add("snap"),e.frags.forEach((a,o)=>a.forEach(r=>{let i=r.classList.contains("visible");r.classList.toggle("visible",o<t),r.classList.toggle("current-fragment",o===t-1),r.classList.contains("yt-play")&&i!==o<t&&!n&&jr(r,o<t?"playVideo":"pauseVideo")})),n&&(e.el.offsetWidth,e.el.classList.remove("snap")))}function Gs(){try{return L.base?new URL(L.base,fe||location.href):fe?new URL(fe):null}catch{return null}}function Ys(e){let t=Gs(),n=0;return e.querySelectorAll("img[src], source[src], video[src], iframe[src], a[href]").forEach(a=>{let o=a.hasAttribute("src")?"src":"href",r=a.getAttribute(o);if(!r||/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(r))return;if(!t){o==="src"&&!r.startsWith("/")&&n++;return}let i=t;try{L.site&&(i=new URL(L.site,t))}catch{}a.setAttribute(o,new URL(r,r.startsWith("/")?i:t).href)}),n}function zn(e){let t=e.el,n=t.querySelector(".body");t.classList.add("measuring"),n.style.zoom="";let a=it;e.visual=!!n.querySelector("iframe, .echarts-container, pre > code.language-dot, pre > code.language-d2, pre > code.language-echarts, .diagram, figure.media"),e.visual&&(a=le);let o=t.classList.contains("card-full");if(t.classList.remove("img-portrait","img-landscape","img-overlay"),o&&(a=le),t.classList.contains("card-bleed")){let s=Math.max(0,...[...n.querySelectorAll("img")].map(c=>c.naturalWidth&&c.naturalHeight?c.naturalWidth/c.naturalHeight:0))||1.7777777777777777,l=le-fn*s>=260;if(o&&l)t.classList.add("img-portrait"),t.style.setProperty("--img-w",Math.round(fn*s)+"px"),a=le;else if(o||Math.abs(s-16/9)<.08)t.classList.add("img-overlay"),a=le;else if(s<1.3){let c=Math.min(Math.round(fn*s),le-300);t.classList.add("img-portrait"),t.style.setProperty("--img-w",c+"px"),a=Math.min(le,Math.max(la,c*2))}else t.classList.add("img-landscape"),a=Math.round(Math.max(it,Math.min(le,(fn-fs)*s))),t.style.setProperty("--img-h",Math.round(a/s)+"px")}else(n.querySelector('[style*="flex"], [style*="grid"], .r-hstack')||n.querySelectorAll("img").length>=4)&&(a=la);let r=n.querySelectorAll("table");if(r.length){t.style.width=le+"px";let s=t.offsetWidth-n.clientWidth;r.forEach(l=>{a=Math.max(a,Math.min(la,Math.ceil(l.offsetWidth)+s+12))})}let i=n.querySelectorAll(".fragment.grow");if(i.length){t.style.width=a+"px";let s=t.offsetWidth-n.clientWidth;i.forEach(l=>{a=Math.max(a,Math.min(le,Math.ceil(l.offsetWidth*1.3)+s))})}t.style.width=a+"px",t.scrollWidth>a+2&&(t.style.width=(a=Math.min(le,t.scrollWidth+24))+"px"),n.scrollWidth>n.clientWidth+2&&(n.style.zoom=(n.clientWidth/n.scrollWidth).toFixed(3)),e._w=a,e._h=t.offsetHeight||va,t.classList.remove("measuring")}function Vs(){clearTimeout(pr),pr=setTimeout(()=>{u.forEach(zn),Yt(),ve(!0)},200)}function Xs(){let e=Pn()==="light"?"light":"dark",t=Ot(e==="light"?"--accent-ring":"--accent"),n="slidetake-"+e+"-"+t.slice(1);return ur.has(n)||(Qs(n,$s[e],t),ur.add(n)),n}function Qs(e,t,n){let a={axisLine:{lineStyle:{color:t.line}},axisTick:{lineStyle:{color:t.line}},axisLabel:{color:t.muted},splitLine:{lineStyle:{color:t.split}},nameTextStyle:{color:t.muted}};echarts.registerTheme(e,{color:[n,...t.palette],backgroundColor:"transparent",textStyle:{color:t.text,fontFamily:"'IBM Plex Sans', sans-serif"},title:{textStyle:{color:t.text},subtextStyle:{color:t.muted}},legend:{textStyle:{color:t.text}},tooltip:{backgroundColor:t.tip,borderColor:t.line,textStyle:{color:t.text}},categoryAxis:a,valueAxis:a,logAxis:a,timeAxis:a,line:{symbolSize:6,lineStyle:{width:2.5}},pie:{label:{color:t.text,textBorderWidth:0},labelLine:{lineStyle:{color:t.muted}}},funnel:{label:{color:t.text,textBorderWidth:0}}})}function tl(){let e=Pn()==="light"?"light":"dark",t=Ot("--node-bg"),n=Ot(e==="dark"?"--accent":"--accent-line"),a=e==="dark"?[.58,.38,.25,.18,.12]:[.7,.45,.25,.15,.08],o={...el[e],N7:t,B1:Ot("--accent")};return a.forEach((r,i)=>{o["B"+(i+2)]=Cs(n,t,r)}),o}function ka(e){return pa[e]||(pa[e]=new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=t,a.onerror=()=>{delete pa[e],n(new Error("could not load "+e))},document.head.appendChild(a)}))}async function al(){let e=je,t=[...ie.querySelectorAll(".node pre > code.language-dot")];ie.querySelectorAll(".node pre > code.language-echarts").forEach(r=>{let i=document.createElement("div");i.className="echarts-container",i.dataset.chart=r.textContent,Le(r.parentElement,i)});let n=[...ie.querySelectorAll(".node .echarts-container[data-chart]")],a=[...ie.querySelectorAll(".node pre > code.language-d2")];if(!t.length&&!n.length&&!a.length)return;let o=[];if(t.length)try{if(await ka(Ks),ua=ua||await Viz.instance(),e!==je)return;t.forEach(r=>{let i=document.createElement("div");i.className="diagram";try{i.appendChild(ua.renderSVGElement(r.textContent))}catch(s){i.className="diagram err",i.textContent="Diagram error: "+s.message}Le(r.parentElement,i)})}catch{o.push("diagrams")}if(a.length)try{if(!gn){let i=await import(Zs);gn=new i.D2}if(e!==je)return;let r=tl();for(let i of a){let s=document.createElement("div");s.className="diagram d2";try{let l=await gn.compile(nl(i.textContent));s.innerHTML=await gn.render(l.diagram,{...l.renderOptions||{},themeOverrides:r,darkThemeOverrides:r})}catch(l){s.className="diagram err",s.textContent="Diagram error: "+(l.message||l)}if(e!==je)return;Le(i.parentElement,s)}}catch{o.push("D2 diagrams")}if(n.length)try{if(await ka(Js),e!==je)return;let r=Xs();n.forEach(i=>{let s;try{s=JSON.parse(i.dataset.chart)}catch{i.textContent="Chart data is not valid JSON.";return}echarts.init(i,r,{renderer:"svg"}).setOption(Object.assign({backgroundColor:"transparent",animation:!bt},s))})}catch{o.push("charts")}e===je&&(o.length&&(_t.textContent="Could not load the "+o.join(" and ")+" renderer (offline?)"),u.forEach(zn),Yt(),ve(!0))}function ol(){let e=[];return g.forEach(t=>{let n=ht(t),a=e[e.length-1];a&&a.sec===n?a.ids.push(t):e.push({sec:n,ids:[t]})}),e}function rl(){let n=0,a=0,o=0;ol().forEach((r,i)=>{let s=Math.max(...r.ids.map(d=>u.get(d)._h));i&&(n+=o/2+120+s/2);let l=a,c=a;r.ids.forEach((d,C)=>{let x=u.get(d);C&&(l+=90+x._w/2),x.cx=l,x.cy=n,c=l,l+=x._w/2}),a=c,o=s})}function il(){u.forEach(e=>{e.cx=0,e.cy=0})}function _r(){je++,window.echarts&&ie.querySelectorAll(".echarts-container").forEach(n=>{let a=echarts.getInstanceByDom(n);a&&a.dispose()}),ie.querySelectorAll("div.node").forEach(n=>n.remove());let e=Dr(),t=0;u.forEach(n=>{let a=document.createElement("div");a.className="node",a.tabIndex=0,a.dataset.id=n.id;let o=n.parent?Dn(n.id).slice(0,-1).map(i=>u.get(i).title).join(" / "):"";a.innerHTML=(o?'<div class="crumb">'+O(o)+"</div>":"")+'<div class="body">'+n.html+"</div>"+(n.err?'<div class="err-badge">!</div>':"");let r=a.querySelector(".body");Ps(r),Us(r),Hs(r),_s(a,r),r.querySelectorAll("thead").forEach(i=>{i.textContent.trim()||i.remove()}),t+=Ys(r),n.frags=Ws(r),r.querySelectorAll("img").forEach(i=>{i.complete||i.addEventListener("load",Vs,{once:!0})}),a.querySelectorAll("a[href]").forEach(i=>{let s=i.getAttribute("href");if(s.startsWith("#")){let l=decodeURIComponent(s.slice(1));u.has(l)&&(i.classList.add("xlink"),i.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),p.active||N(l)}))}else i.target="_blank",i.rel="noopener",i.addEventListener("click",l=>l.stopPropagation())}),a.addEventListener("click",()=>{p.active||N(n.id)}),a.addEventListener("keydown",i=>{i.key==="Enter"&&i.target===a&&N(n.id)}),ie.appendChild(a),n.el=a,Pa(n,n.frags.length)}),t&&!_t.textContent&&(_t.textContent=t+" image(s) use relative paths: add base: to the deck, or open it with ?src="),u.forEach(zn),Yt(e),al()}function Yt(e){e===void 0&&(e=Dr()),W==="radial"?Rs(e):W==="path"?rl():W==="focus"?il():Os(),ie.classList.toggle("focus",W==="focus"),u.forEach(t=>{let n=t.el.style;n.setProperty("--cx",t.cx),n.setProperty("--cy",t.cy)}),sl(),vt(),Fa()}function sl(){let e="";if(W==="focus"){sa.innerHTML="";return}if(W==="path"){for(let t=1;t<g.length;t++){let n=u.get(g[t-1]),a=u.get(g[t]);e+='<path data-from="'+n.id+'" data-to="'+a.id+'" d="M '+n.cx+" "+n.cy+" L "+a.cx+" "+a.cy+'"/>'}sa.innerHTML=e;return}u.forEach(t=>{if(!t.parent)return;let n=u.get(t.parent);if(W==="radial")e+='<path data-from="'+n.id+'" data-to="'+t.id+'" d="M '+n.cx+" "+n.cy+" L "+t.cx+" "+t.cy+'"/>';else{let a=n.cy+n._h/2,o=t.cy-t._h/2,r=a+(o-a)/2;e+='<path data-from="'+n.id+'" data-to="'+t.id+'" d="M '+n.cx+" "+a+" L "+n.cx+" "+r+" L "+t.cx+" "+r+" L "+t.cx+" "+o+'"/>'}}),sa.innerHTML=e}function Dn(e){let t=[],n=e;for(;n;)t.unshift(n),n=u.get(n).parent;return t}function st(){let e=j.clientWidth,t=j.clientHeight;ie.style.transform="translate("+e/2+"px,"+t/2+"px) scale("+z.zoom+") translate("+-z.x+"px,"+-z.y+"px)",Jr()}function za(){Ft&&(Ft.kill(),Ft=null)}function Ur(e,t){if(za(),t||bt||!window.gsap){Object.assign(z,e),st();return}let n=j.clientWidth,a=Math.hypot(e.x-z.x,e.y-z.y),o=e.zoom,r=gsap.timeline({onUpdate:st,onComplete:()=>{Ft=null}}),{zoom:i,...s}=e,l=a*Math.min(z.zoom,o),c=Math.max(.55,Math.min(1.3,.55+l/n*.3));if(r.to(z,{...s,duration:c,ease:"power2.inOut"},0),l>n*1.2){let d=Math.max(.06,Math.min(z.zoom,o,n*.9/(a+it)));r.to(z,{zoom:d,duration:c/2,ease:"sine.out"},0).to(z,{zoom:o,duration:c/2,ease:"sine.in"},c/2)}else r.to(z,{zoom:o,duration:c,ease:"power2.inOut"},0);Ft=r}function ll(){let e=j.getBoundingClientRect(),t=14,n=[];if(!Te.hidden&&Te.offsetWidth){let o=Te.getBoundingClientRect();n.push({x0:o.left-e.left-t,y0:o.top-e.top-t,x1:o.right-e.left+t,y1:o.bottom-e.top+t})}let a=Bs();return a&&n.push({x0:a.x0-t,y0:a.y0-t,x1:a.x1+t,y1:a.y1+t}),n}function cl(){let e=j.clientWidth,t=j.clientHeight,n=[{x0:16,y0:G?20:56,x1:e-16,y1:t-(G?20:74)}];return ll().forEach(a=>{let o=[];n.forEach(r=>{if(a.x1<=r.x0||a.x0>=r.x1||a.y1<=r.y0||a.y0>=r.y1){o.push(r);return}[{...r,x1:Math.min(r.x1,a.x0)},{...r,x0:Math.max(r.x0,a.x1)},{...r,y1:Math.min(r.y1,a.y0)},{...r,y0:Math.max(r.y0,a.y1)}].forEach(i=>{i.x1-i.x0>80&&i.y1-i.y0>80&&o.push(i)})}),o.length&&(n=o)}),n}function xa(e,t,n){let a=j.clientWidth,o=j.clientHeight,r=null;return cl().forEach(i=>{let s=n*Math.min((i.x1-i.x0)/e,(i.y1-i.y0)/t);(!r||s>r.zoom)&&(r={zoom:s,sx:(i.x0+i.x1)/2-a/2,sy:(i.y0+i.y1)/2-o/2})}),r}function qr(e,t,n,a){return{x:e-n.sx/a,y:t-n.sy/a}}function Ve(e,t){let n=u.get(e);if(!n)return;let a=xa(n._w,n._h,Ut),o=ht(e),r=g.filter(l=>ht(l)===o&&!u.get(l).visual).map(l=>{let c=u.get(l);return xa(c._w,c._h,Ut).zoom}).sort((l,c)=>l-c),i=r.length?r[Math.floor((r.length-1)/2)]:a.zoom,s=Math.max(.2,Math.min(5,a.zoom,i));Ur(Object.assign(qr(n.cx,n.cy,a,s),{zoom:s}),t)}function Vt(e){let t=[...u.values()];if(!t.length)return;let n=j.clientWidth,a=j.clientHeight,o=Math.min(...t.map(d=>d.cx-d._w/2)),r=Math.max(...t.map(d=>d.cx+d._w/2)),i=Math.min(...t.map(d=>d.cy-d._h/2)),s=Math.max(...t.map(d=>d.cy+d._h/2)),l=xa(r-o,s-i,.94),c=Math.max(.05,Math.min(1,l.zoom));Ur(Object.assign(qr((o+r)/2,(i+s)/2,l,c),{zoom:c}),e)}function ve(e){f&&u.has(f)?Ve(f,e):Vt(e)}function vt(){let e=f?Dn(f):[];u.forEach(t=>{let n=t.el;n.classList.toggle("current",t.id===f),n.classList.toggle("active-path",e.includes(t.id))}),ie.querySelectorAll("#connectors path").forEach(t=>{let n=W==="path"?!!f&&g.indexOf(t.dataset.to)<=g.indexOf(f):e.includes(t.dataset.from)&&e.includes(t.dataset.to);t.classList.toggle("active",n)}),hl(e),Wr()}function Hr(){return xo(new URLSearchParams(location.search).get("duration")??L.duration)}function dl(){return G&&Hr()>0&&(!p.active||/^always$/i.test(L.timer||""))}function xn(){let e=dl()&&Ae.start>0;if(Ue.classList.toggle("timed",e),!e){Ue.classList.remove("over");return}let n=(p.active&&p.t0?Ge():performance.now()-Ae.start)/Hr();Ue.firstChild.style.width=Math.min(100,n*100)+"%",Ue.classList.toggle("over",n>=1)}function pl(){Ae.start=performance.now(),clearInterval(Ae.timer),Ae.timer=setInterval(xn,1e3),xn()}function ul(){clearInterval(Ae.timer),Ae.timer=null,Ae.start=0,xn()}function Wr(){let e=G&&g.length>1&&!/^(off|no|false)$/i.test(L.progress||"");if(Ue.classList.toggle("show",e),!e)return;xn();let t=g.indexOf(f),n=0,a=0;g.forEach((o,r)=>{let i=Ke(u.get(o)).length;n+=i,r<t?a+=i:r===t&&(a+=Math.min(be,i-1)+1)}),Ue.lastChild.style.width=(n?a/n*100:0)+"%"}function hl(e){sr.innerHTML=e.map((t,n)=>(n>0?'<span class="sep">\u203A</span>':"")+'<button class="crumb-btn'+(t===f?" here":"")+'" data-id="'+O(t)+'">'+O(u.get(t).title)+"</button>").join(""),sr.querySelectorAll(".crumb-btn").forEach(t=>t.addEventListener("click",()=>{p.active||N(t.dataset.id)}))}function Kt(e){let t=u.get(f);t&&(Pa(t,Pr().frag,e),Ra(),(P.hidden||!Ye||!Ye.full)&&gl(t),Da(t))}function fl(e){return!g.length||e.id!==g[0]&&e.id!==g[g.length-1]||e.el.querySelector("[data-gsap], .title-scramble")?null:[...e.el.querySelector(".body").children].filter(t=>!t.classList.contains("fragment"))}function gl(e){if(e._played||!window.gsap||bt)return;e._played=!0;let t=fl(e);if(t&&t.length){e._auto=t;let[n,...a]=t;/^H[1-3]$/.test(n.tagName)&&!n.children.length?(n.classList.add("auto-scramble"),hr(n)):a.unshift(n),gsap.from(a,{opacity:0,y:24,duration:.7,ease:"power2.out",delay:.5,stagger:.45})}e.el.querySelectorAll("[data-gsap]").forEach(n=>{let a;try{a=JSON.parse(n.dataset.gsap)}catch{return}let o={duration:a.duration??1,delay:a.delay??0,ease:a.ease||"power2.out"};a.to?gsap.fromTo(n,a.from||{},Object.assign({},a.to,o)):a.from&&gsap.from(n,Object.assign({},a.from,o))}),e.el.querySelectorAll(".title-scramble").forEach(hr)}function qt(e){!e||!e._played||(e._played=!1,window.gsap&&(e._auto&&(e._auto.forEach(t=>{gsap.killTweensOf(t),gsap.set(t,{clearProps:"opacity,transform"})}),e._auto=null),e.el.querySelectorAll("[data-gsap]").forEach(t=>{gsap.killTweensOf(t);let n={};try{n=JSON.parse(t.dataset.gsap)}catch{}let a=new Set(Object.keys(Object.assign({},n.from,n.to)).map(o=>ml.includes(o)?"transform":o));a.size&&gsap.set(t,{clearProps:[...a].join(",")})}),e.el.querySelectorAll(".title-scramble, .auto-scramble").forEach(t=>{t._scramble&&t._scramble.kill(),t.dataset.text&&(t.textContent=t.dataset.text)})))}function hr(e){let t=e.dataset.text||(e.dataset.text=e.textContent),n=Array.from(t),a="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?",o={p:0};e._scramble=gsap.to(o,{p:1,duration:1.4,ease:"none",onUpdate(){let r=Math.floor(o.p*n.length);e.textContent=n.map((i,s)=>s<r||/\s/.test(i)?i:a[Math.random()*a.length|0]).join("")},onComplete(){e.textContent=t}})}function Da(e){clearTimeout(lt),!(!G||!e||!e.autoslide||p.active&&(!p.t0||p.paused))&&(lt=setTimeout(()=>{f===e.id&&Ie(1)},e.autoslide))}function Gr(e){let t=e&&e!==g[0]?e:"";try{E&&E.kind==="share"?history.replaceState(null,"",location.pathname+location.search+Zn(E.data,t)):history.replaceState(null,"",e?"#"+encodeURIComponent(e):location.pathname+location.search)}catch{}}function N(e,t,n){if(!u.has(e))return;if(e!==f){me=null,Be=-1,be=n?Ke(u.get(e)).length-1:0;let r=u.get(f);r&&W==="focus"&&!t&&(r.el.classList.add("leaving"),setTimeout(()=>r.el.classList.remove("leaving"),600)),Vr()}let a=e!==f;if(a&&(Yr=f),f=e,clearTimeout(he),he=null,a&&W==="focus"&&!t&&!bt){let r=u.get(e).el;r.classList.add("entering"),r.offsetWidth,r.classList.remove("entering")}Kt(a),a&&!Se&&Wt("slide",e);let o=u.get(e);a&&o.mapFirst&&!n&&!t&&W!=="focus"?(Vt(),he=setTimeout(()=>{he=null,f===e&&Ve(e)},1900)):Ve(e,t),vt(),Fa(),Gr(e)}function Vr(){let e=u.get(f);e&&(e.el.querySelectorAll("figure.yt").forEach(t=>jr(t,"pauseVideo")),Pa(e,e.frags.length,!0),qt(e))}function bl(){if(!f&&qe&&u.has(qe)){Kr();return}f&&(qe=f),W==="focus"&&Fn("path"),Vr(),clearTimeout(lt),f=null,vt(),Fa(),Vt(),Gr(null)}function Kr(){if(he)return clearTimeout(he),he=null,Ve(f),!0;if(!f&&qe&&u.has(qe)){let e=qe;return qe=null,N(e),!0}return!1}function Ie(e){if(!f){g.length&&N(g[e>0?0:g.length-1]);return}if(he&&e>0){clearTimeout(he),he=null,Ve(f);return}let t=Ke(u.get(f)),n=Math.min(be,t.length-1)+e;if(n>=0&&n<t.length){be=n,me=null,Be=-1,Kt(),!te&&!P.hidden&&Ye.used?$e():ve(),vt();return}let a=g.indexOf(f)+e;a>=0&&a<g.length&&N(g[a],!1,e<0)}function vl(){let e=u.get(f);e&&e.parent&&N(e.parent)}function yl(){let e=u.get(f);e&&e.children.length?N(e.children[0]):!f&&g.length&&N(g[0])}function Fa(){let e=[...u.values()];if(!e.length){ba.innerHTML="",ke=null;return}ms.textContent="map";let t=h=>h.cx,n=h=>h.cy,a=Math.min(...e.map(t))-it/2,o=Math.max(...e.map(t))+it/2,r=Math.min(...e.map(n))-va/2,i=Math.max(...e.map(n))+va/2,s=16,l=180,c=130,d=Math.min((l-2*s)/Math.max(1,o-a),(c-2*s-6)/Math.max(1,i-r)),C=l/2-(a+o)/2*d,x=c/2+5-(r+i)/2*d,b=f?Dn(f):[],w="";e.forEach(h=>{if(!h.parent)return;let M=u.get(h.parent);w+='<line x1="'+(t(M)*d+C)+'" y1="'+(n(M)*d+x)+'" x2="'+(t(h)*d+C)+'" y2="'+(n(h)*d+x)+'" stroke="var(--panel-line)" stroke-width="1"/>'}),e.forEach(h=>{let M=h.id===f?"var(--accent)":b.includes(h.id)?"var(--accent-teal)":"var(--node-border)";w+='<circle data-id="'+O(h.id)+'" cx="'+(t(h)*d+C)+'" cy="'+(n(h)*d+x)+'" r="'+(h.id===f?4:3)+'" fill="'+M+'"><title>'+O(h.title)+"</title></circle>"}),w+='<rect id="mm-viewport" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.7"/>',ba.innerHTML=w,ke={s:d,ox:C,oy:x},Jr()}function Jr(){let e=document.getElementById("mm-viewport");if(!e||!ke)return;let t=j.clientWidth/z.zoom,n=j.clientHeight/z.zoom;e.setAttribute("x",(z.x-t/2)*ke.s+ke.ox),e.setAttribute("y",(z.y-n/2)*ke.s+ke.oy),e.setAttribute("width",Math.max(2,t*ke.s)),e.setAttribute("height",Math.max(2,n*ke.s))}function ct(e){zr(re.value),f&&!u.has(f)&&(f=null),_r(),f?N(f,e):g.length?N(g[0],e):(f=null,Vt(!0))}function Fn(e,t){W=e,Y("slidetake:layout",e),document.querySelectorAll("#layout-toggle .seg-btn").forEach(n=>n.classList.toggle("active",n.dataset.mode===e)),u.size&&(!t&&!bt&&(ie.classList.add("morph"),setTimeout(()=>ie.classList.remove("morph"),700)),Yt(),st(),f?Ve(f,t):Vt(t))}function $r(e){return Math.max(.04,Math.min(5,e))}function wl(e){Ut=Math.round(Math.max(ws,Math.min(ks,e))*100)/100,Y("slidetake:slideSize",Ut),f&&Ve(f)}function mr(e){f?wl(Ut+e*.1):Xr(e>0?1.2:1/1.2)}function Xr(e,t,n){za();let a=$r(z.zoom*e);if(t!==void 0){let o=j.getBoundingClientRect(),r=t-o.left-o.width/2,i=n-o.top-o.height/2;z.x+=r/z.zoom-r/a,z.y+=i/z.zoom-i/a}z.zoom=a,st()}function jn(){_||(Pe.classList.toggle("collapsed"),document.getElementById("btn-edit-toggle").classList.toggle("active",!Pe.classList.contains("collapsed")))}function ge(e){G=e,document.body.classList.toggle("presenting",e),Di();let t=document.documentElement;e&&t.requestFullscreen&&!document.fullscreenElement&&t.requestFullscreen().catch(()=>{}),!e&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),e&&!f&&g.length&&N(g[0]);let n=L.camera||[...u.values()].some(a=>a.camera);e&&n&&!te&&!ne&&$e(),e?Da(u.get(f)):clearTimeout(lt),e?pl():ul(),Wr()}function Ge(){return(p.paused?p.pauseAt:performance.now())-p.t0-p.pausedMs}function yt(e){e.classList.add("open")}function El(e){if(Y("slidetake:analytics",e?"on":"off"),!e){window["ga-disable-"+xl]=!0;let t=["","; Domain="+location.hostname,"; Domain=."+location.hostname.replace(/^www\./,"")];document.cookie.split(";").map(n=>n.split("=")[0].trim()).filter(n=>n==="_ga"||n.startsWith("_ga_")).forEach(n=>t.forEach(a=>{document.cookie=n+"=; Max-Age=0; Path=/"+a}))}Zr()}function Zr(){Na.querySelectorAll("[data-analytics]").forEach(e=>e.setAttribute("aria-checked",String(e.dataset.analytics==="on"===Sl())))}function wt(){document.querySelectorAll(".modal.open").forEach(e=>e.classList.remove("open"))}function Cl(){let e=new URLSearchParams(location.search).get("obs");if(e){let[t,n,...a]=e.split(":");return En.value=t||"localhost",Cn.value=n||"4455",Tn.value=a.join(":"),!0}try{let t=JSON.parse(U("slidetake:obs")||"null");t&&(En.value=t.host||"localhost",Cn.value=t.port||"4455",Tn.value=t.password||"",ja.checked=!0)}catch{}return!1}function ti(){if(ja.checked)Y("slidetake:obs",JSON.stringify({host:En.value.trim(),port:Cn.value.trim(),password:Tn.value}));else try{localStorage.removeItem("slidetake:obs")}catch{}}function It(e,t){yr.textContent=e,yr.className=t||""}function Tl(e){return location.protocol==="https:"&&!ni(e)}async function ai(){let e=En.value.trim()||"localhost",t="ws://"+e+":"+(Cn.value.trim()||"4455");if(Tl(e)){Ne=!1,jt.disabled=!0,It(Ll,"err");return}It("Connecting to "+t+"\u2026");try{await ka(kl);let n=window.OBSWebSocket&&(window.OBSWebSocket.default||window.OBSWebSocket);if(oe)try{await oe.disconnect()}catch{}oe=new n,oe.on("ConnectionClosed",()=>{Ne=!1,It("Disconnected from OBS","err"),jt.disabled=!0}),oe.on("RecordStateChanged",o=>{o.outputState==="OBS_WEBSOCKET_OUTPUT_STARTED"&&He&&(He(),He=null),o.outputState==="OBS_WEBSOCKET_OUTPUT_STOPPED"&&p.active&&p.withObs&&!p.finishing&&ut("Stopped in OBS")});let a=await oe.connect(t,Tn.value||void 0);Ne=!0;try{let o=await oe.call("GetVideoSettings");o&&o.fpsNumerator&&o.fpsDenominator&&(Qr=o.fpsNumerator/o.fpsDenominator)}catch{}It("Connected"+(a&&a.obsWebSocketVersion?" \xB7 OBS WebSocket "+a.obsWebSocketVersion:""),"ok"),ti()}catch(n){Ne=!1,It("Could not connect ("+(n&&n.message||n)+"). Is OBS running with its WebSocket server on, and is the password right?","err")}jt.disabled=!Ne}function Ml(){let e=document.getElementById("rec-screen"),t=screen.width,n=screen.height;if(Math.abs(t/n-16/9)<.02){e.innerHTML='<span class="ok">This screen is 16:9 ('+t+"\xD7"+n+"), right for YouTube.</span>";return}let a=[["16:10",1.6],["3:2",1.5],["4:3",4/3],["21:9",21/9],["16:9",16/9]],[o,r]=a.reduce((s,l)=>Math.abs(l[1]-t/n)<Math.abs(s[1]-t/n)?l:s),i=Math.abs(r-t/n)<.005?o:"about "+o;e.innerHTML='<span class="warn">This screen is '+i+" ("+t+"\xD7"+n+"), not 16:9, so the video will have bars or be cropped. Move this window to a 16:9 screen, physical or virtual (say 1920\xD71080), then press F there.</span>"}function kt(){let e=navigator.mediaDevices;if(!window.isSecureContext||!e||!e.getDisplayMedia)return{why:"This page can\u2019t capture itself here. Open Slidetake in Chrome or Edge on a computer."};if(!window.RestrictionTarget&&!window.CropTarget)return{why:"Recording in the browser needs Chrome or Edge (or another Chromium browser) on a computer."};let t=window.MediaRecorder?Vo(o=>MediaRecorder.isTypeSupported(o)):"";if(!t||!navigator.storage||!navigator.storage.getDirectory)return{why:"This browser can\u2019t record video here. Use a recent Chrome or Edge."};let{quality:n,device:a}=Yo(screen.width,screen.height,devicePixelRatio||1);return n?{ok:!0,type:t,quality:n}:{why:"This screen gives a "+a[0]+"\xD7"+a[1]+" frame, less than 720p. Use OBS, or a larger screen."}}async function xt(){Ca++,ue&&(cancelAnimationFrame(ue.raf),ue.stream.getTracks().forEach(e=>e.stop()),ue.ctx.close().catch(()=>{}),ue=null,Ea.value=0)}async function Ta(){await xt();let e=Ca;try{let t=dt.value,n=await navigator.mediaDevices.getUserMedia({audio:t?{deviceId:{exact:t}}:!0});if(e!==Ca){n.getTracks().forEach(l=>l.stop());return}let a=new AudioContext,o=a.createAnalyser();o.fftSize=512,a.createMediaStreamSource(n).connect(o);let r=new Float32Array(o.fftSize),i=ue={stream:n,ctx:a,raf:0},s=()=>{if(ue!==i)return;o.getFloatTimeDomainData(r);let l=0;for(let c of r)l=Math.max(l,Math.abs(c));Ea.value=Math.max(l,Ea.value*.85),i.raf=requestAnimationFrame(s)};s()}catch(t){nt.innerHTML='<span class="warn">The microphone isn\u2019t available: '+O(t.message||t.name)+". Allow it in the site settings.</span>"}}async function Al(){try{ue||await Ta();let e=await navigator.mediaDevices.enumerateDevices(),t=(o,r)=>e.filter(i=>i.kind===o).map((i,s)=>'<option value="'+O(i.deviceId)+'"'+(i.deviceId===r?" selected":"")+">"+O(i.label||(o==="audioinput"?"Microphone ":"Camera ")+(s+1))+"</option>").join(""),n=Nn();Me.innerHTML='<option value="none"'+(n==="none"?" selected":"")+">No camera</option>"+t("videoinput",n),n!=="none"&&Me.value==="none"&&Me.options.length>1&&(Me.selectedIndex=1);let a=U("slidetake:mic")||"";dt.innerHTML=t("audioinput",a),a&&dt.value===a&&ue&&ue.stream.getAudioTracks()[0].getSettings().deviceId!==a&&Ta()}catch{}}function Nn(){let e=U(ri());return e||(Il()?U("slidetake:cam")||"default":"none")}function ii(e){Y(ri(),e),e!=="none"&&e!=="default"&&Y("slidetake:cam",e)}function Ol(){p.camWas=!ne;let e=Nn()!=="none";e!==!ne&&Zt(e,!0)}function si(){p.camWas!=null&&(p.camWas!==!ne&&Zt(p.camWas,!0),p.camWas=null)}async function Rl(){let e=kt();if(!e.ok)return nt.innerHTML='<span class="warn">'+O(e.why)+"</span>",e;vn&&(nt.innerHTML='<span class="warn">'+O(vn)+"</span>",vn="");let t=et.indexOf(e.quality),n=U("slidetake:quality");pt.innerHTML=et.slice(t).map(o=>"<option"+(o.name===n?" selected":"")+">"+o.name+"</option>").join("");let a="";try{let{quota:o,usage:r}=await navigator.storage.estimate(),i=et.find(s=>s.name===pt.value)||e.quality;a=" Room for about "+Math.floor((o-r)/Ko(i))+" minutes of takes."}catch{}return nt.querySelector(".warn")||(nt.innerHTML='<span class="ok">Ready: this screen records up to '+e.quality.name+" in fullscreen."+O(a)+"</span>"),e}function _a(e){oi=e,Y("slidetake:rec-mode",e),document.querySelectorAll('input[name="rec-mode"]').forEach(t=>{t.checked=t.value===e}),document.getElementById("rec-obs").hidden=e!=="obs",e==="browser"?Sn.classList.contains("open")&&(wt(),qn()):(xt(),jt.disabled=!Ne)}function Mn(){if(!gt)return;let e=g.reduce((t,n)=>t+Ke(u.get(n)).length,0);if(document.getElementById("rec-deck-info").innerHTML=O(L.title||(Ee[0]?u.get(Ee[0]).title:"This deck"))+" \xB7 "+g.length+" slides \xB7 "+e+' presses<br><label class="check"><input type="checkbox" id="rec-cam-on"'+(Nn()!=="none"?" checked":"")+"> Include my camera (it turns on when the take starts)</label>",document.getElementById("rec-cam-on").onchange=t=>ii(t.target.checked?U("slidetake:cam")||"default":"none"),(oi||(kt().ok?"browser":"obs"))==="browser"){qn();return}ql(),Ml(),yt(Sn),_a("obs")}async function Ua(e,t){return(await(await navigator.storage.getDirectory()).getDirectoryHandle("slidetake-takes",{create:!0})).getDirectoryHandle(e,{create:!!t})}async function qa(e){try{await(await(await navigator.storage.getDirectory()).getDirectoryHandle("slidetake-takes")).removeEntry(e,{recursive:!0})}catch{}}async function ci(e){window.RestrictionTarget&&e.restrictTo?await e.restrictTo(await RestrictionTarget.fromElement(ya)):await e.cropTo(await CropTarget.fromElement(ya))}async function Pl(e){try{window.RestrictionTarget&&e.track.restrictTo?await e.track.restrictTo(null):await e.track.cropTo(null),await ci(e.track)}catch{}await e.track.applyConstraints(li(e.quality)).catch(()=>{}),await Ht()}async function zl(){let e=kt();if(!e.ok)throw new Error(e.why);let t=et.find(s=>s.name===pt.value)||e.quality;document.body.classList.add("rec-frame");let n=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:Bt},audio:!1,preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude",monitorTypeSurfaces:"exclude"}),a=n.getVideoTracks()[0],o=()=>n.getTracks().forEach(s=>s.stop());if(!a.restrictTo&&!a.cropTo)throw o(),new Error("Share \u201Cthis tab\u201D to record the slides.");try{await ci(a)}catch(s){throw o(),new Error("Chrome could not record just the slides ("+(s.message||s.name)+").")}await a.applyConstraints(li(t)).catch(()=>{});let r;try{let s=U("slidetake:mic");r=await navigator.mediaDevices.getUserMedia({audio:{...s?{deviceId:{ideal:s}}:{},echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1}})}catch(s){throw o(),new Error("The microphone isn\u2019t available ("+(s.message||s.name)+").")}let i=new Date().toISOString().replace(/[:.]/g,"-");p.browser={id:i,display:n,mic:r,track:a,quality:t,type:e.type,stream:new MediaStream([a,...r.getAudioTracks()]),dir:await Ua(i,!0),clips:[],cur:null,chain:Promise.resolve(),error:null},a.addEventListener("ended",()=>{p.active&&!p.finishing&&ut("Sharing stopped")})}function di(){let e=p.browser;e&&(e.display.getTracks().forEach(t=>t.stop()),e.mic.getTracks().forEach(t=>t.stop()),document.body.classList.remove("rec-frame"))}function Dl(e){let t=p.browser,n="take-"+t.clips.length+"."+aa(t.type),a={name:n,rec:null,done:null};t.clips.push(a),e.clip=t.id+"/"+n,t.chain=t.chain.then(async()=>{let o=await(await t.dir.getFileHandle(n,{create:!0})).createWritable(),r=new MediaRecorder(t.stream,{mimeType:t.type,videoBitsPerSecond:t.quality.bitrate,audioBitsPerSecond:pn}),i=Promise.resolve();r.ondataavailable=l=>{l.data.size&&(i=i.then(()=>o.write(l.data)).catch(c=>{t.error=c}))},a.done=new Promise(l=>{r.onstop=async()=>{await i,await o.close().catch(()=>{}),l()}}),await new Promise(l=>{r.onstart=l,r.start(1e3)}),e.t=Math.round(Ge()),e.cutAt!=null&&(e.lead=Math.max(0,Math.round(e.t-e.cutAt)));let s=t.cur;t.cur=a,a.rec=r,s&&s.rec.state!=="inactive"&&s.rec.stop()}).catch(o=>{t.error=o})}async function pi(e,t){if(p.active||!g.length)return;let n=e==="obs";if(xt(),e==="browser"){G||ge(!0);try{await zl()}catch(c){document.body.classList.remove("rec-frame"),G&&ge(!1),vn=c.name==="NotAllowedError"?"Recording needs this tab shared: press \u25CF Record again and choose Share.":c.message,qn({setup:!0});return}}wt();let a=t&&t.length?t.filter(c=>g.includes(c)):null,o=a?a[0]:g[0],r=g[g.indexOf(o)-1]||null;Object.assign(p,{active:!0,withObs:n,counting:!0,paused:!1,finishing:!1,t0:0,pausedMs:0,events:[],outputPath:null,only:a?new Set(a):null}),e!=="browser"&&(p.browser=null),document.body.classList.add("recording"),Xa();let i=document.getElementById("rec-layout").value;i!=="current"&&i!==W&&Fn(i,!0),G||ge(!0),Ol(),r?(document.body.classList.add("no-anim"),u.get(r)._played=!0,Se=!0,N(r,!0,!0),Se=!1,P.getAnimations().forEach(c=>c.finish()),await Ht(),document.body.classList.remove("no-anim")):(f===o&&(be=0,me=null,Be=-1),N(o,!0)),!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen().catch(()=>{});let s=Rt.querySelector(".hint");for(let c=3;c>0;c--)if(s.textContent=(document.fullscreenElement?"":"Press F for fullscreen \xB7 ")+"recording starts after the countdown \xB7 Esc to cancel",Rt.querySelector(".num").textContent=c,Rt.classList.add("show"),await Ln(1e3),!p.active)return;if(Rt.classList.remove("show"),await Ht(),n){let c=new Promise(d=>{He=d,setTimeout(()=>{He&&(He(),He=null)},2500)});try{await oe.call("StartRecord")}catch(d){Ha("OBS could not start recording: "+(d&&d.message||d));return}if(await c,!p.active)return}p.browser&&await Pl(p.browser),p.counting=!1,p.t0=performance.now();let l=u.get(o);if(r){Wt("slide",o),p.browser&&await p.browser.chain,qt(l),Se=!0,N(o),Se=!1;return}qt(l),Kt(!0),Wt("slide",f)}function Ha(e){if(p.active=!1,p.counting=!1,p.browser){let t=p.browser;t.chain.then(()=>{t.cur&&t.cur.rec.state!=="inactive"&&t.cur.rec.stop()}).then(()=>qa(t.id)),di(),p.browser=null}Rt.classList.remove("show"),document.body.classList.remove("recording"),G&&ge(!1),si(),ot(e)}function Wt(e,t,n){if(!p.active||!p.t0||p.finishing)return;let a=u.get(t),o={id:t,title:a?a.title:t,retake:e==="retake",t:Math.round(Ge()),obsT:null};n==null&&p.browser&&(n=o.t),n!=null&&(o.cutAt=n,o.lead=Math.max(0,Math.round(o.t-n))),p.events.push(o),p.browser&&Dl(o),p.withObs&&Ne&&(oe.call("GetRecordStatus").then(r=>{r&&typeof r.outputDuration=="number"&&(o.obsT=r.outputDuration)}).catch(()=>{}),a&&oe.call("CreateRecordChapter",{chapterName:(o.retake?"RETAKE \xB7 ":"")+a.title}).catch(()=>{}))}function Fl(e){let t=e.key;if((gr.includes(t)||br.includes(t)||vr.includes(t)||t==="Escape")&&e.preventDefault(),t==="Escape"){p.counting?Ha("Take cancelled"):ut("Stopped early");return}if((t==="f"||t==="F")&&!document.fullscreenElement&&document.documentElement.requestFullscreen){e.preventDefault(),document.documentElement.requestFullscreen().catch(()=>{});return}if(!(p.counting||p.finishing||Nt)){if(vr.includes(t)){Ul();return}p.paused||(gr.includes(t)?jl():br.includes(t)&&Nl())}}function jl(){let e=Ke(u.get(f)),t=Math.min(be,e.length-1)>=e.length-1,n=g.indexOf(f);if(!t){Ie(1);return}if(!p.only){n===g.length-1?ut():Ie(1);return}let a=g.slice(n+1).find(o=>p.only.has(o));a?g[n+1]===a?Ie(1):ui(g[g.indexOf(a)-1],a,"slide"):ut()}async function Nl(){let e=u.get(f);if(!e||Nt)return;let t=f,n=Yr;if(!n||n===t||!u.has(n)){_l(e);return}ui(n,t,"retake")}async function ui(e,t,n){let a=u.get(t);if(!a||Nt)return;Nt=!0;let o=Ge();document.body.classList.add("no-anim");let r=u.get(e);Se=!0,r._played=!0,N(e,!0,!0),P.getAnimations().forEach(i=>i.finish()),Se=!1,await Ht(),document.body.classList.remove("no-anim"),Wt(n,t,o),p.browser&&await p.browser.chain,qt(a),Se=!0,N(t),Se=!1,!te&&!P.hidden&&Ye.used&&$e(),Nt=!1}function _l(e){Wt("retake",f),be=0,me=null,Be=-1,qt(e),Kt(!0),!te&&!P.hidden&&Ye.used?$e():ve(),vt()}async function Ul(){if(p.t0)if(p.paused){if(Sa.classList.remove("show"),await Ht(),p.withObs&&await oe.call("ResumeRecord").catch(()=>{}),p.browser){let e=p.browser;e.chain=e.chain.then(()=>{e.cur&&e.cur.rec.state==="paused"&&e.cur.rec.resume()})}p.pausedMs+=performance.now()-p.pauseAt,p.paused=!1,Da(u.get(f))}else{if(p.paused=!0,p.pauseAt=performance.now(),clearTimeout(lt),p.withObs&&await oe.call("PauseRecord").catch(()=>{}),p.browser){let e=p.browser;e.chain=e.chain.then(()=>{e.cur&&e.cur.rec.state==="recording"&&e.cur.rec.pause()})}Sa.classList.add("show")}}async function ut(e){if(!p.active||p.finishing)return;if(p.counting){Ha("Take cancelled");return}p.finishing=!0,clearTimeout(lt),p.paused&&(p.pausedMs+=performance.now()-p.pauseAt,p.paused=!1,Sa.classList.remove("show"));let t=Math.round(Ge()),n=null;if(p.withObs){await Ln(1200),t=Math.round(Ge());try{let r=await oe.call("GetRecordStatus");r&&typeof r.outputDuration=="number"&&(n=r.outputDuration)}catch{}try{let r=await oe.call("StopRecord");p.outputPath=r&&r.outputPath}catch(r){e=(e?e+". ":"")+"OBS did not confirm the stop ("+(r&&r.message||r)+")"}}let a=p.browser;a&&(await Ln(600),await a.chain,t=Math.round(Ge()),a.cur&&a.cur.rec&&a.cur.rec.state!=="inactive"&&a.cur.rec.stop(),await Promise.all(a.clips.map(r=>r.done)),di(),p.browser=null,a.error&&(e=(e?e+". ":"")+"Some of the take could not be saved ("+(a.error.message||a.error.name)+")")),p.active=!1,p.finishing=!1,document.body.classList.remove("recording"),G&&ge(!1),si();let o={key:Je(),deckTitle:L.title||u.get(g[0]).title,date:new Date().toISOString(),withObs:p.withObs,outputPath:p.outputPath,reason:e||"",total:t,totalObs:n,fps:a?Bt:Qr,...a?{inBrowser:!0,takesId:a.id,quality:a.quality.name,type:a.type}:{},events:p.events.map(r=>({id:r.id,title:r.title,retake:r.retake,t:r.t,obsT:r.obsT,...r.lead?{lead:r.lead}:{},...r.clip?{clip:r.clip}:{}})),picks:{}};if(o.inBrowser){Jl(o);return}Wa(o),wi(o)}function Je(){return Xe(L.title||(g[0]?u.get(g[0]).title:"deck"))}function hi(){try{return JSON.parse(U("slidetake:sessions")||"[]")}catch{return[]}}function Wa(e){let t=hi().filter(n=>n.date!==e.date);t.unshift(e),t.slice(12).forEach(n=>{n.takesId&&qa(n.takesId)}),Y("slidetake:sessions",JSON.stringify(t.slice(0,12)))}function ql(){let e=document.getElementById("rec-sessions"),t=hi().filter(n=>n.key===Je()&&!n.inBrowser);e.innerHTML=t.length?"<h3>Earlier takes of this deck</h3>"+t.map((n,a)=>'<div class="row"><button class="btn small" data-session="'+a+'">Review</button><span>'+O(new Date(n.date).toLocaleString())+" \xB7 "+ae(n.totalObs??n.total)+(n.inBrowser?" \xB7 in this browser"+(n.cleaned?" (takes deleted)":""):n.withObs?"":" \xB7 rehearsal")+(n.outputPath?" \xB7 "+O(Ze(n.outputPath)):"")+"</span></div>").join(""):"",e.querySelectorAll("[data-session]").forEach(n=>n.onclick=()=>{wt(),wi(t[+n.dataset.session])})}function ht(e){let t=u.has(e)?Dn(e):[e];return t[Math.min(1,t.length-1)]}function mi(e,t){let n=ht(e);return{sec:n,title:u.has(n)?u.get(n).title:t}}function Ga(){let e=Object.keys(L).filter(t=>t==="tags"||/_tags$/.test(t)).flatMap(t=>[].concat(L[t])).filter(t=>typeof t=="string");return[...new Set(e.map(t=>t.trim()).filter(Boolean))]}function Hl(){return[].concat(L.related||[]).map(e=>{let t=String(e).match(/^\[([^\]]+)\]\(([^)]+)\)$/),n=String(e).split("|");return t?t[1]+": "+t[2]:n.length===2?n[0].trim()+": "+n[1].trim():String(e)})}function yi(){if(L.permalink||L.url)return L.permalink||L.url;let e=L.site||U("slidetake:site");if(!e||!fe)return wr();try{let t=new URL(fe).pathname.replace(/\/index\.md$/i,"/").replace(/\.md$/i,"/");return new URL(t,e).href}catch{return wr()}}function wr(){if(location.protocol==="file:"||ni(location.hostname)||/^\/(edit|new|share)\b/.test(location.pathname)||location.hash.includes("deflate:"))return"";let e=new URL(location.href);return e.hash="",["obs","edit","layout","mode"].forEach(t=>e.searchParams.delete(t)),e.href}function Ya(e){let t=fi(e),n=document.getElementById("rv-link").value.trim(),a=Hl(),o=Ga(),r=[];L.summary&&r.push(L.summary),n&&r.push("\u{1F4D1} Slides: "+n),t.lines.length>=3&&r.push(`Chapters
`+t.lines.join(`
`)),a.length&&r.push(`Related
`+a.map(i=>"\u2022 "+i).join(`
`)),o.length&&r.push(o.slice(0,3).map(i=>"#"+i.replace(/[^\p{L}\p{N}]+/gu,"")).join(" ")),document.getElementById("rv-yt-desc").value=r.join(`

`),document.getElementById("rv-chapters-note").textContent=(t.dropped?t.dropped+" section"+(t.dropped>1?"s were":" was")+" under 10 seconds and folded into the chapter before, as YouTube requires. ":"")+(t.lines.length<3?"YouTube needs at least three chapters, so none are listed. ":"")+"Final length "+ae(t.length)+"."}function wi(e){D=e,$=null;let t=we(e),n=e.events.filter(r=>r.retake).length,a=e.withObs||e.inBrowser;We.classList.toggle("in-browser",!!e.inBrowser),We.classList.remove("board"),document.getElementById("rv-title").textContent=(a?"Review the take \xB7 ":"Rehearsal \xB7 ")+e.deckTitle,document.getElementById("rv-render-status").textContent=e.cleaned?"These takes were deleted.":"",document.getElementById("rv-render-btn").disabled=document.getElementById("rv-clean").disabled=!!e.cleaned,document.getElementById("rv-info").textContent=[e.reason,new Date(e.date).toLocaleString(),(a?"recorded ":"ran ")+ae(e.totalObs??e.total),t.size+" slides",n?n+" retake"+(n>1?"s":""):"no retakes",e.inBrowser?e.quality+", in this browser":e.outputPath?"saved to "+e.outputPath:e.withObs?"":"nothing was recorded"].filter(Boolean).join(" \xB7 "),document.getElementById("rv-file").textContent=e.outputPath?" ("+Ze(e.outputPath)+")":"",document.getElementById("rv-yt-title").value=e.deckTitle;let o=cn(e);Bn.value=[...Bn.options].reduce((r,i)=>Math.abs(i.value-o)<Math.abs(r.value-o)?i:r).value,document.getElementById("rv-yt-tags").value=Ga().join(", "),document.getElementById("rv-link").value=yi(),S.src&&(e.inBrowser||Oe!==Ze(e.outputPath)&&e.outputPath)&&(S.removeAttribute("src"),S.load(),Oe=""),document.getElementById("rv-novideo").hidden=!!S.src,Jt(),yt(We),e.inBrowser?H.textContent=e.cleaned?"":"Click a take to preview it.":Ql(e)}function Jt(){if(D&&D.board){ft();return}let e=D,t=document.getElementById("rv-list"),n=null;t.innerHTML=[...we(e).values()].map(a=>{let o=e.picks[a.id]??a.takes.length,r=ht(a.id),i=r!==n;n=r;let s=a.takes.map(l=>'<button class="rv-chip'+(o===l.no?" on":"")+'" data-id="'+O(a.id)+'" data-take="'+l.no+'">Take '+l.no+" \xB7 "+ae(l.end-l.start)+"</button>").join("");return'<div class="rv-row'+(i?" sec":"")+'"><div class="t">'+O(a.title)+"<small>"+ae(a.takes[0].start)+'</small></div><div class="rv-chips">'+s+"</div></div>"}).join(""),t.querySelectorAll(".rv-chip").forEach(a=>a.onclick=()=>{e.picks[a.dataset.id]=+a.dataset.take,Wa(e),Jt();let o=we(e).get(a.dataset.id),r=o&&o.takes[+a.dataset.take-1];if(!r)return;let i=o.title+(o.takes.length>1?" \xB7 take "+r.no:"");if(e.inBrowser){let s=e.events.filter(l=>l.id===a.dataset.id)[r.no-1];s&&s.clip&&Un([{clip:s.clip,keep:(r.end-r.start)/1e3,title:i}])}else In([{start:r.start,end:r.end,title:i}])}),document.getElementById("rv-ffmpeg").value=gi(e,document.getElementById("rv-mode").value),Ya(e),ki(e)}async function ki(e){let t=document.getElementById("rv-final"),n=++fa,a=Qe(e).reduce((r,i)=>r+i.end-i.start,0),o=r=>"Final cut "+ae(a)+(r?" \xB7 about "+(r>1e9?(r/1e9).toFixed(1)+" GB":Math.max(1,Math.round(r/1e6))+" MB"):"");if(!e.inBrowser||e.cleaned){t.textContent=o(null);return}try{let r=0;for(let i of At(e))ma.has(i.clip)||ma.set(i.clip,(await $t(i.clip)).size),r+=ma.get(i.clip);n===fa&&(t.textContent=o(r))}catch{n===fa&&(t.textContent=o(null))}}function In(e){if(!S.src){An=e,H.textContent=Ma?"Opening the recording\u2026 it plays when ready.":"Open the recording to preview.";return}An=null,$={ranges:e,i:0},H.textContent="\u25B6 "+e[0].title;let t=()=>{S.currentTime=e[0].start/1e3,S.play().catch(n=>{n&&n.name!=="AbortError"&&(H.textContent="Could not play: "+n.message)})};S.readyState>=1?t():S.addEventListener("loadedmetadata",t,{once:!0})}function _n(){at=null}function Va(){let e=F&&!F.single&&!S.paused;xi.textContent=e?"\u275A\u275A Pause":"\u25B6 Preview",document.querySelectorAll("#rv-list .rv-row.playing").forEach(a=>a.classList.remove("playing"));let t=F&&F.parts[F.i],n=t&&t.id&&document.querySelector('#rv-list .rv-row[data-id="'+CSS.escape(t.id)+'"]');n&&(n.classList.add("playing"),n.scrollIntoView({block:"nearest"}))}function Wl(e){let t=D?At(D):[],n=t.findIndex(o=>o.id===e.id),a=n>=0?t[n+1]:null;at=a?a.id:null,H.textContent=a?"Preview continues from "+a.title+".":"That was the last slide: Preview plays from the start."}function Si(e){return Array.from({length:e.numberOfChannels},(t,n)=>{let a=new Float32Array(e.numberOfFrames);return e.copyTo(a,{planeIndex:n,format:"f32-planar"}),a})}async function $t(e){let[t,n]=e.split("/");return(await(await Ua(t)).getFileHandle(n)).getFile()}async function Un(e,t=0,n=!1){if(!(!D||D.cleaned||!e.length)){$=null,F={parts:e,i:t,single:n};try{let a=await $t(e[t].clip);S.src&&URL.revokeObjectURL(S.src),S.src=URL.createObjectURL(a),H.textContent="\u25B6 "+e[t].title,await S.play()}catch(a){if(a&&a.name==="AbortError")return;F=null,H.textContent=a&&a.name==="NotFoundError"?"This take is no longer in the browser.":"Could not play this take: "+(a&&a.message||a)}}}function Ei(){let e=F;if(e.i+1<e.parts.length){Un(e.parts,e.i+1,e.single);return}F=null,S.pause(),e.single?Wl(e.parts[0]):H.textContent="",Va()}async function Gl(e){if(!e.where)return!0;try{let t=await $a("video-folder");return!t||t.name!==e.where||await t.queryPermission({mode:"readwrite"})!=="granted"||await t.getFileHandle(e.name),!0}catch{return!1}}async function Ci(e){let t=D;if(!t||!t.inBrowser||t.cleaned)return;let n=At(t);if(!n.length){se.textContent="No slide has a take yet: nothing to save.";return}let a=JSON.stringify([n.map(d=>[d.clip,Math.round(d.keep*1e3)]),mt(),t.type]),o=t.board&&A.lastDownload;if(!e&&o&&o.sig===a&&await Gl(o)){se.innerHTML="Already saved in "+O(kr(o))+'. A new video is made only when a take or Auto volume changes. <button class="btn small" id="rv-save-again">Save another copy</button>',document.getElementById("rv-save-again").onclick=()=>Ci(!0);return}let r=aa(t.type||"")==="mp4",i=Je()+" "+Vl(new Date)+"."+(r?"mp4":"webm"),s=null,l="";try{let d=await Ti(!1);d&&(s=await(await d.getFileHandle(i,{create:!0})).createWritable(),l=d.name)}catch(d){if(d&&d.name==="AbortError")return}let c=document.getElementById("rv-render-btn");c.disabled=!0,se.textContent="Preparing the download\u2026";try{let d=await import(Bl),C=s?new d.StreamTarget(s):new d.BufferTarget,x=new d.Output({format:r?new d.Mp4OutputFormat({fastStart:s?!1:"in-memory"}):new d.WebMOutputFormat,target:C}),b=1,w="";if(mt()){let B=await xr(d,n,1,"Measuring the volume");if(B&&isFinite(B.integrated)){let Z=Xo(B);if(Math.abs(Z)>=.05){let ee=await xr(d,n,mn(Z),"Checking the volume");ee&&isFinite(ee.integrated)&&(Z=Math.min(Z+(-14-ee.integrated),oa))}b=mn(Z),w=Math.abs(Z)<.05?" \xB7 loudness "+B.integrated.toFixed(1)+" LUFS, left as is":" \xB7 loudness "+B.integrated.toFixed(1)+" \u2192 "+(-14).toFixed(1)+" LUFS"}}let h=b!==1;await Yl(d,n);let M=null,T=null,v=0,k=-1,m=-1,y=null,I=[],X=async()=>{for(;I.length&&y.ready()>=I[0].n;){let B=I.shift(),Z=y.take(B.n),ee=new Float32Array(B.n*B.ch);Z.forEach((de,K)=>ee.set(de,K*B.n)),await T.add(new d.AudioSample({data:ee,format:"f32-planar",numberOfChannels:B.ch,sampleRate:B.rate,timestamp:B.t}))}};for(let[B,Z]of n.entries()){se.textContent="Joining take "+(B+1)+" of "+n.length+"\u2026";let ee=new d.Input({source:new d.BlobSource(await $t(Z.clip)),formats:d.ALL_FORMATS}),de=await ee.getPrimaryVideoTrack(),K=await ee.getPrimaryAudioTrack();if(!de)throw new Error(Z.title+" has no video");M||(M=new d.EncodedVideoPacketSource(await de.getCodec()),x.addVideoTrack(M,{frameRate:Bt}),K&&(T=h?new d.AudioSampleSource({codec:r?"aac":"opus",bitrate:pn}):new d.EncodedAudioPacketSource(await K.getCodec()),x.addAudioTrack(T)),await x.start());let Et={decoderConfig:await de.getDecoderConfig()},pe=0,to=!0;for await(let V of new d.EncodedPacketSink(de).packets())V.timestamp>=Z.keep||(k=un(k,v+V.timestamp),await M.add(V.clone({timestamp:k}),to&&B===0?Et:void 0),to=!1,pe=Math.max(pe,V.timestamp+V.duration));if(K&&T&&h)for await(let V of new d.AudioSampleSink(K).samples(0,pe)){if(V.timestamp+V.duration>pe+1e-4){V.close();continue}m=un(m,v+V.timestamp);let ze=Si(V);ze.forEach(De=>{for(let Wn=0;Wn<De.length;Wn++)De[Wn]*=b}),y=y||ra(V.sampleRate,ze.length),y.push(ze),I.push({t:m,n:V.numberOfFrames,rate:V.sampleRate,ch:ze.length}),V.close(),await X()}else if(K&&T){let V={decoderConfig:await K.getDecoderConfig()},ze=!0;for await(let De of new d.EncodedPacketSink(K).packets())De.timestamp+De.duration>pe+1e-4||(m=un(m,v+De.timestamp),await T.add(De.clone({timestamp:m}),ze&&B===0?V:void 0),ze=!1)}v+=pe}if(y&&(y.end(),await X(),y.events&&(w+=", "+y.events+" peak"+(y.events===1?"":"s")+" limited")),se.textContent="Finishing\u2026",await x.finalize(),!s){let B=document.createElement("a");B.href=URL.createObjectURL(new Blob([C.buffer],{type:r?"video/mp4":"video/webm"})),B.download=i,B.click(),setTimeout(()=>URL.revokeObjectURL(B.href),1e4)}let Q={sig:a,name:i,where:l};t.board&&(A.lastDownload=Q,Xt()),se.textContent="Saved in "+kr(Q)+" ("+ae(v*1e3)+w+")."}catch(d){se.textContent="Could not save the video: "+(d&&d.message||d),s&&s.abort().catch(()=>{})}finally{c.disabled=!!t.cleaned}}async function xr(e,t,n,a){let o=null,r=null;for(let[i,s]of t.entries()){se.textContent=a+" "+(i+1)+" of "+t.length+"\u2026";let l=await new e.Input({source:new e.BlobSource(await $t(s.clip)),formats:e.ALL_FORMATS}).getPrimaryAudioTrack();if(l)for await(let c of new e.AudioSampleSink(l).samples(0,s.keep)){let d=Si(c);o=o||$o(c.sampleRate,d.length),n!==1?(d.forEach(C=>{for(let x=0;x<C.length;x++)C[x]*=n}),r=r||ra(c.sampleRate,d.length),r.push(d),r.ready()&&o.add(r.take(r.ready()))):o.add(d),c.close()}}return r&&(r.end(),r.ready()&&o.add(r.take(r.ready()))),o?o.result():null}async function Yl(e,t){let n=[];for(let i of t){let s=await new e.Input({source:new e.BlobSource(await $t(i.clip)),formats:e.ALL_FORMATS}).getPrimaryVideoTrack(),l=s&&await s.getDecoderConfig();n.push(l?l.codec+" "+l.codedWidth+"\xD7"+l.codedHeight+" "+(l.description?[...new Uint8Array(l.description)].join("."):""):"none")}let a=new Map;n.forEach(i=>a.set(i,(a.get(i)||0)+1));let o=[...a.entries()].sort((i,s)=>s[1]-i[1])[0][0],r=t.filter((i,s)=>n[s]!==o);if(r.length)throw new Error(r.map(i=>i.title).join(", ")+(r.length===1?" was":" were")+" recorded at a different size ("+n[t.indexOf(r[0])].split(" ")[1]+", not "+o.split(" ")[1]+"). Tick "+(r.length===1?"it":"them")+" and record again")}async function Ti(e){if(!window.showDirectoryPicker)return null;let t=e?null:await $a("video-folder");if(t){let n=await t.queryPermission({mode:"readwrite"});if(n==="prompt"&&(n=await t.requestPermission({mode:"readwrite"})),n==="granted")return t}return t=await window.showDirectoryPicker({id:"slidetake-videos",mode:"readwrite",startIn:"videos"}),Oi("video-folder",t),t}function Ka(){let e=Li();if(A&&Sr===e)return A;Sr=e;try{A=JSON.parse(U(e)||"null")}catch{A=null}return(!A||!Array.isArray(A.takes))&&(A={takes:[],picks:{},type:"",quality:""}),A}function Jl(e){Ka();let t=tr(e,e.takesId,Mi());t.forEach(n=>{delete A.picks[n.id]}),A.takes.push(...t),Object.assign(A,{type:e.type,quality:e.quality}),Xt(),_e.clear(),qn({note:(e.reason?e.reason+". ":"")+t.length+" new take"+(t.length===1?"":"s")+" on the board."})}function Bi(){let e=nr(Ka(),Mi()),t=Object.assign(ar(e),{board:!0,inBrowser:!0,withObs:!1,type:A.type||"video/mp4",quality:A.quality||"",deckTitle:L.title||(g[0]?u.get(g[0]).title:"Deck"),date:new Date().toISOString()});return{rows:e,sess:t}}function Ai(){nt.innerHTML="",Rl().then(e=>{e.ok?Al().then(On):On()})}function On(){let e=dt.selectedOptions[0],t=kt(),n=Me.selectedOptions[0],a=t.ok?[pt.value,n?n.textContent:Nn()==="none"?"No camera":"Camera",e&&e.textContent].filter(Boolean).join(" \xB7 "):"not ready";document.getElementById("rv-setup-sum").textContent=a,Ja.title="Recording setup: "+a}function qn(e={}){if(!gt)return;wt(),Ka(),We.classList.add("in-browser","board"),document.getElementById("rv-title").textContent="Takes \xB7 "+(L.title||(g[0]?u.get(g[0]).title:"Deck")),document.getElementById("rv-yt-title").value=L.title||(g[0]?u.get(g[0]).title:""),document.getElementById("rv-yt-tags").value=Ga().join(", "),document.getElementById("rv-link").value=yi(),S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),$=null,F=null,_n(),se.textContent="",ft(),yt(We);let t=kt().ok;Ce.open=!!e.setup||!t||!A.takes.length,Ce.open?Ai():On(),H.textContent=e.note||(A.takes.length?"Click a take to preview it.":"Nothing recorded yet. Press \u25CF Record to record the deck.")}function ft(){let{rows:e,sess:t}=Bi();D=t;let n=document.getElementById("rv-list"),a=null;n.innerHTML=e.map(l=>{let c=ht(l.id),d=c!==a;a=c;let C=O(l.id),x={slide:"Recorded before this slide changed",before:"Starts with the entry from the slide before, which has changed or is gone: record this slide again"},b=l.takes.length?l.takes.map(w=>'<button class="rv-chip'+(l.pick===w.uid?" on":"")+(w.outdated?' outdated" title="'+x[w.outdated]:"")+'" data-id="'+C+'" data-uid="'+O(w.uid)+'">Take '+w.no+" \xB7 "+ae(w.ms)+"</button>").join("")+(l.pick?"":'<span class="rv-none">'+(l.takes.some(w=>w.outdated==="before")&&!l.takes.some(w=>w.outdated==="slide")?"The slide before changed: record again":"Changed since: record again")+"</span>"):'<span class="rv-none">No take yet</span>';return'<div class="rv-row with-sel'+(d?" sec":"")+(_e.has(l.id)?" selected":"")+'" data-id="'+C+'"><input type="checkbox" class="rv-sel" data-id="'+C+'"'+(_e.has(l.id)?" checked":"")+' aria-label="Select '+O(l.title)+' to record"><div><div class="t">'+O(l.title)+'</div><div class="rv-chips">'+b+"</div></div></div>"}).join(""),n.querySelectorAll(".rv-chip").forEach(l=>l.onclick=()=>{A.picks[l.dataset.id]=l.dataset.uid,Xt(),ft();let c=e.find(C=>C.id===l.dataset.id),d=c&&c.takes.find(C=>C.uid===l.dataset.uid);d&&Un([{id:c.id,clip:d.clip,keep:d.ms/1e3,title:c.title+" \xB7 take "+d.no}],0,!0)}),n.querySelectorAll(".rv-sel").forEach(l=>l.addEventListener("click",c=>{(c.shiftKey?or(g,Er,l.dataset.id):[l.dataset.id]).forEach(C=>{l.checked?_e.add(C):_e.delete(C)}),_n(),Er=l.dataset.id,ft()}));let o=ia(g,_e),r=kt().ok;document.getElementById("rv-rec").disabled=!r,document.getElementById("rv-sel-note").textContent=o.length?o.length+"/"+g.length+" slide"+(o.length===1?"":"s")+" up for a take":"",document.getElementById("rv-render-btn").disabled=document.getElementById("rv-play-final").disabled=!t.events.length;let i=e.filter(l=>l.pick).length,s=e.filter(l=>l.takes.length&&!l.pick).length;document.getElementById("rv-info").textContent=A.takes.length?[A.takes.length+" take"+(A.takes.length===1?"":"s"),i+" of "+e.length+" slides ready",s?s+" to record again":"",A.quality?A.quality+", in this browser":""].filter(Boolean).join(" \xB7 "):g.length+" slides, nothing recorded yet",Ya(t),ki(t)}async function $l(e){for(let n of e)try{let[a,o]=n.clip.split("/");await(await Ua(a)).removeEntry(o)}catch{}let t=new Set(e.map(n=>n.uid));A.takes=A.takes.filter(n=>!t.has(n.uid)),Object.keys(A.picks).forEach(n=>{t.has(A.picks[n])&&delete A.picks[n]}),Xt(),S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),F=null,_n(),ft()}function Ii(e){return new Promise((t,n)=>{let a=indexedDB.open(e||"slidetake",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>n(a.error)})}async function $a(e){let t=async n=>{let a=await Ii(n);return await new Promise(o=>{let r=a.transaction("kv").objectStore("kv").get(e);r.onsuccess=()=>o(r.result),r.onerror=()=>o(null)})};try{return await t()??await t("markcast")??await t("traverse")??null}catch{return null}}async function Oi(e,t){try{(await Ii()).transaction("kv","readwrite").objectStore("kv").put(t,e)}catch{}}async function Hn(e){Ma=!0;try{return await Xl(e)}finally{Ma=!1}}async function Xl(e){let t=await e.getFile();for(let n=0;n<10;n++){await new Promise(o=>setTimeout(o,1e3));let a=await e.getFile();if(a.size===t.size&&a.lastModified===t.lastModified)return a;t=a}return t}function Qt(e,t,n){S.src&&URL.revokeObjectURL(S.src),Pt=t||null,n||(La=0),S.src=URL.createObjectURL(e),Oe=e.name,document.getElementById("rv-novideo").hidden=!0,H.textContent="Loaded "+e.name+". Click a take to preview it.",An?In(An):n&&$&&In($.ranges.slice($.i)),D&&(document.getElementById("rv-ffmpeg").value=gi(D,document.getElementById("rv-mode").value))}async function Ql(e){let t=Ze(e.outputPath);if(!(!t||!window.showDirectoryPicker)&&!(Oe===t&&S.src))try{let n=await $a("obs-folder");if(!n||await n.queryPermission({mode:"read"})!=="granted")return;let a=await n.getFileHandle(t);H.textContent="Opening "+t+"\u2026",Qt(await Hn(a),a)}catch{}}function ot(e,t){if(!p.active){if(clearTimeout(yn),!P.hidden&&!P.classList.contains("live")){Dt.classList.remove("show"),Pi.textContent=e,P.classList.add("msg"),t||(yn=setTimeout(zi,9e3));return}Dt.textContent=e,Dt.classList.add("show"),t||(yn=setTimeout(()=>Dt.classList.remove("show"),9e3))}}function zi(){Pi.textContent="PIP camera",P.classList.remove("msg")}function Xa(){clearTimeout(yn),Dt.classList.remove("show"),zi()}function ga(){let e=!1;try{e=window.top!==window.self}catch{e=!0}return e?" This page is running inside a preview frame that may not allow cameras. Open Slidetake directly in Chrome (from localhost or as a file).":window.isSecureContext?" Allow camera access for this page in the browser\u2019s site settings (the icon at the left of the address bar), then try again.":" Browsers only allow cameras on secure pages. Open it from http://localhost or as a local file in Chrome."}function Qa(){te&&te.getTracks().forEach(t=>t.stop()),te=null;let e=P.querySelector("video");e&&e.remove()}async function $e(){if(!(te||ne)){{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){ot("Camera not available on this page."+ga(),!0);return}if(xe.disabled)return;xe.disabled=!0,ot("Waiting for camera permission \u2014 check the browser prompt near the address bar.",!0);try{let t=U("slidetake:cam");te=await navigator.mediaDevices.getUserMedia({video:{...t?{deviceId:{ideal:t}}:{},width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30}},audio:!1}),Xa()}catch(t){let n=t&&t.name;ot(n==="NotAllowedError"||n==="SecurityError"?"Camera access was blocked."+ga():n==="NotFoundError"||n==="OverconstrainedError"?"No camera was found. Check that a webcam is connected.":n==="NotReadableError"?"The camera is busy \u2014 close other apps using it (Zoom, OBS, FaceTime) and try again.":"Could not start the camera"+(n?" ("+n+")":"")+"."+ga(),!0);return}finally{xe.disabled=!1,Za()}te.getVideoTracks().forEach(t=>t.addEventListener("ended",()=>{Qa(),kn(),ve()}));let e=document.createElement("video");e.autoplay=!0,e.muted=!0,e.playsInline=!0,e.srcObject=te,P.appendChild(e)}kn(),ve()}}function Za(){xe.querySelector("svg")||(xe.innerHTML=Zl+'<span class="lbl"> Camera</span>'),xe.classList.toggle("on",!ne),xe.setAttribute("aria-pressed",String(!ne)),xe.title=ne?"Camera is off for every slide (C)":"Camera is on and follows the deck (C)"}function Zt(e,t){e&&!gt||(ne=!e,ne&&(Qa(),Xa()),me=null,Be=-1,be=Math.min(be,Math.max(0,Ke(u.get(f)).length-1)),Za(),kn(),Kt(),vt(),ve(),!G&&!t&&ot(e?"Camera on \u2014 slides follow their camera settings.":"Camera off \u2014 camera settings are ignored and slides use the whole screen."),e&&$e())}function Di(){document.body.classList.remove("idle"),clearTimeout(Cr),G&&(Cr=setTimeout(()=>document.body.classList.add("idle"),2e3))}function Gt(e,t){rt.textContent=e,rt.classList.add("show"),clearTimeout(Lr),Lr=setTimeout(()=>rt.classList.remove("show"),t||2500)}function Ba(e,{keepObs:t=!0,keepEdit:n=!0,slide:a=""}={}){let o=new URL(Oo(e),location.origin);return new URLSearchParams(location.search).forEach((r,i)=>{i==="src"||i==="obs"&&!t||i==="edit"&&!n||o.searchParams.set(i,r)}),a&&(o.hash=a),o.href.replace(o.pathname,o.pathname.replace(/%40/g,"@"))}async function tc(e){let t={keepObs:!1,keepEdit:!1,slide:e};if(E.kind==="source")return{link:Ba(E.source,t),inside:!1};if(E.kind==="copy"&&sn(R)&&["url","gist","builtin"].includes(R.origin.kind))return{link:Ba(R.origin,t),inside:!1};let a=E.kind==="share"?E.data:await Po(re.value),o=new URLSearchParams(location.search);return["src","obs","edit"].forEach(r=>o.delete(r)),{link:location.origin+"/share"+(o.toString()?"?"+o:"")+Zn(a,e),inside:!0}}function nc(){let e=U("slidetake:draft");if(!e||e===Gn)return null;let t=on(e,{kind:"file",name:"your earlier draft"},{exported:!0});Y("slidetake:copy",JSON.stringify(t));try{localStorage.removeItem("slidetake:draft")}catch{}return t}function en(){Y("slidetake:copy",JSON.stringify(R))}function St(){if(_)return;let e;if(eo())e='<span class="mine">'+O(ce.file)+'</span> <span class="ro">\xB7 on this computer, saved as you type</span>';else if(E.kind==="copy")e='<span class="mine">Your copy of '+O(ye(R.origin))+"</span>"+(rn(R)?' <span class="edited">\xB7 edited</span>':"");else{let n=E.kind==="share"?"a shared deck":ye(E.source);e='<span class="mine">'+O(n.charAt(0).toUpperCase()+n.slice(1))+'</span> <span class="ro">\xB7 read-only, typing makes your copy</span>'}document.getElementById("doc-state").innerHTML=e,Pe.classList.toggle("unsaved",E.kind==="copy"&&rn(R)),document.getElementById("btn-reset").hidden=!(E.kind==="copy"&&!sn(R));let t=document.getElementById("continue");t.hidden=E.kind==="copy"||!R,R&&(t.textContent="Your copy \u2192",t.title="Continue your copy of "+ye(R.origin))}function Fi(e){return!R||!rn(R)?!0:confirm("Your copy of "+ye(R.origin)+" has edits you haven't saved or shared. Replace it with "+e+"?")}function ji(){let e=new URLSearchParams(location.search);return e.delete("src"),e.delete("template"),"/edit"+(e.toString()?"?"+e:"")}function ac(){let e=E.kind==="share"?{kind:"shared"}:E.source;return Fi("a copy of "+ye(e))?(R=on(E.text,e),E={kind:"copy"},history.pushState(null,"",ji()+(f&&f!==g[0]?"#"+encodeURIComponent(f):"")),Gt("Editing your own copy of "+ye(e)+". The original is unchanged.",4e3),!0):(re.value=E.text,!1)}function oc(){E={kind:"copy"},history.pushState(null,"",ji()),Pe.classList.contains("collapsed")&&jn(),re.value=R.text,ct(!0),St()}function eo(){return!!(ce&&E&&E.kind==="source"&&E.source.kind==="url"&&new URL(E.source.url,location.href).pathname===ce.deck)}function rc(e){fetch(ce.save,{method:"PUT",body:e}).catch(()=>Gt("Could not save "+ce.file+": is npx slidetake still running?",6e3))}async function ic(e){if(e.kind==="builtin")return wn[e.id==="help"?"docs":e.id]??wn.home;if(e.kind==="gist"){let n=await fetch("https://api.github.com/gists/"+encodeURIComponent(e.id));if(!n.ok)throw new Error(n.status===404?"no such gist":n.status+" "+n.statusText);let a=Object.values((await n.json()).files||{}),o=a.find(r=>r.filename===e.file)||a.find(r=>/\.(md|markdown)$/i.test(r.filename))||a[0];if(!o)throw new Error("the gist has no files");return fe=o.raw_url,o.truncated?await(await fetch(o.raw_url)).text():o.content}let t=await fetch(e.url);if(!t.ok)throw new Error(t.status===404?"not found":t.status+" "+t.statusText);return fe=new URL(e.url,location.href).href,await t.text()}function Ar(){return E={kind:"source",source:{kind:"builtin",id:"home"},text:wn.home},E.text}async function sc(){if(ce&&J.page==="source"&&J.source.kind==="builtin"&&J.source.id==="home"&&location.pathname==="/"&&(J.source={kind:"url",url:ce.deck}),_)return fe=_.base||location.href,E={kind:"source",source:{kind:"url",url:fe},text:Co(_.settings||{})+String(_.markdown||"")},E.text;if(J.page==="edit"){if(R)return E={kind:"copy"},R.text;history.replaceState(null,"","/new"+location.search),J.page="pick"}if(J.page==="pick")return yt(document.getElementById("new-dialog")),E={kind:"source",source:{kind:"builtin",id:"template:blank"},text:wn["template:blank"]},E.text;if(J.page==="share")try{let e=await zo(J.data);return E={kind:"share",data:J.data,text:e},e}catch{return Gt("This link's deck is damaged or cut short, so it could not be opened.",6e3),Ar()}try{let e=await ic(J.source);return E={kind:"source",source:J.source,text:e},e}catch(e){return _t.textContent="Could not load the deck ("+e.message+")",Gt("Could not load "+ye(J.source)+": "+e.message,6e3),Ar()}}var _,ce,Ir,gt,bt,wn,re,j,ie,sa,sr,hs,_t,ba,ms,Pe,fn,fs,it,la,le,va,gs,bs,vs,ys,ws,ks,Ut,u,g,Ee,f,Oa,W,G,L,ne,te,Te,P,ya,z,Ft,lr,Fe,cr,be,me,Be,Ye,zs,Ds,Ns,Nr,da,qs,fe,pr,Ks,Js,$s,ur,Zs,gn,el,nl,pa,je,ua,Ue,Ae,ml,lt,he,Yr,Se,qe,ke,bn,ha,tt,fr,kl,gr,br,vr,Sn,We,Rt,Sa,En,Cn,Tn,ja,yr,jt,oe,Ne,He,Qr,p,Ln,Ht,xl,Na,Sl,ei,ni,Ll,Bl,Me,dt,pt,Ea,nt,oi,vn,ue,Ca,Il,ri,li,Nt,Oe,fi,gi,bi,mt,vi,D,$,S,H,ma,fa,Bn,An,xi,at,F,se,kr,Vl,A,Sr,Er,_e,Li,Xt,Kl,Mi,Ce,Ja,Pt,La,Ma,zt,Ri,xe,Dt,yn,Pi,Zl,Cr,Re,Tr,rt,Lr,ec,Aa,Ia,Mr,Rn,J,Br,E,R,Ni=q(()=>{"use strict";ro();io();lo();po();ho();fo();bo();yo();tn();Lo();Ao();Xn();ea();jo();_o();Jo();Qo();rr();dn();_=window.SLIDETAKE||null,ce=window.SLIDETAKE_LOCAL||null,Ir=document.querySelector("header .mark .logo").outerHTML;document.documentElement.classList.toggle("embed",!!_);gt=!_||_.recording===!0||new URLSearchParams(location.search).has("obs");document.documentElement.classList.toggle("no-record",!gt);bt=window.matchMedia("(prefers-reduced-motion: reduce)").matches,wn={home:Gn,docs:so,features:co,privacy:uo,showcase:wo,"template:blank":mo,"template:talk":go,"template:recording":vo},re=document.getElementById("editor"),j=document.getElementById("stage"),ie=document.getElementById("world"),sa=document.getElementById("connectors"),sr=document.getElementById("breadcrumbs"),hs=document.getElementById("status-count"),_t=document.getElementById("status-err"),ba=document.getElementById("mm-svg"),ms=document.getElementById("mm-label"),Pe=document.getElementById("editor-pane"),fn=540,fs=96,it=440,la=720,le=960,va=180,gs=540,bs=100,vs=110,ys=420,ws=.35,ks=1,Ut=parseFloat(U("slidetake:slideSize"))||.92,u=new Map,g=[],Ee=[],f=null,Oa=["focus","path","radial","tree"],W="path",G=!1,L={},ne=!0,te=null,Te=document.getElementById("brand"),P=document.getElementById("pip"),ya=document.getElementById("stage-wrap"),z={x:0,y:0,zoom:.6},Ft=null;lr={accent:"--accent",accentSoft:"--accent-teal",line:"--accent-line",ring:"--accent-ring",header:"--header-bg",headerText:"--header-ink",onAccent:"--on-accent"};Fe=null;cr=new URLSearchParams(location.search).get("mode");be=0;me=null,Be=-1,Ye=null;zs=new Set("svg g defs symbol use path rect circle ellipse line polyline polygon text tspan textPath title desc marker linearGradient radialGradient stop clipPath mask pattern filter feGaussianBlur feOffset feBlend feFlood feComposite feMerge feMergeNode feColorMatrix feDropShadow".split(" ")),Ds=0;Ns=e=>e.querySelector("img")&&!e.textContent.trim()&&[...e.children].every(t=>/^(IMG|BR)$/.test(t.tagName));Nr=["dot","d2","echarts","svg"].map(e=>":scope > code.language-"+e).join(", "),da=e=>!!e.querySelector("img")&&!e.textContent.trim(),qs=e=>e.children.length===1&&(e.children[0].tagName==="PRE"&&!!e.children[0].querySelector(Nr)||e.children[0].matches("div.diagram"));fe=null;pr=null;Ks="https://cdn.jsdelivr.net/npm/@viz-js/viz@3.4.0/lib/viz-standalone.js",Js="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js",$s={dark:{palette:["#60a5fa","#f472b6","#a78bfa","#fb923c","#facc15","#a1a1aa"],text:"#e4e4e7",muted:"#a1a1aa",line:"#3f3f46",split:"#27272a",tip:"#18181b"},light:{palette:["#2563eb","#db2777","#7c3aed","#ea580c","#ca8a04","#71717a"],text:"#27272a",muted:"#71717a",line:"#d4d4d8",split:"#e4e4e7",tip:"#ffffff"}};ur=new Set;Zs="https://esm.sh/@terrastruct/d2@0.1.33",gn=null,el={dark:{N1:"#e4e4e7",N2:"#a1a1aa",N3:"#a1a1aa",N4:"#323238",N5:"#27272a",N6:"#18181b",N7:"#09090b"},light:{N1:"#27272a",N2:"#71717a",N3:"#71717a",N4:"#e4e4e7",N5:"#e4e4e7",N6:"#f4f4f5",N7:"#ffffff"}};nl=e=>/d2-config\s*:/.test(e)?e:`vars: {
  d2-config: {
    layout-engine: elk
  }
}
`+e,pa={};je=0,ua=null;Ue=document.getElementById("progress");Ue.innerHTML="<b></b><i></i>";Ae={start:0,timer:null};ml=["x","y","xPercent","yPercent","scale","scaleX","scaleY","rotation","rotate","skewX","skewY"];lt=null;he=null,Yr=null,Se=!1;qe=null;ke=null;ba.addEventListener("click",e=>{let t=e.target.closest("circle");t&&!p.active&&N(t.dataset.id)});bn=null;re.addEventListener("input",()=>{if(eo()){E.text=re.value,clearTimeout(bn),bn=setTimeout(()=>{rc(re.value),ct(!0)},300);return}E.kind!=="copy"&&!ac()||(R.text=re.value,St(),clearTimeout(bn),bn=setTimeout(()=>{en(),ct(!0)},300))});document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>{e.addEventListener("click",()=>{e.dataset.mode!==W&&Fn(e.dataset.mode)})});(function(){let e=new Map,t=0,n=!1,a=null,o=()=>{let[i,s]=[...e.values()];return Math.hypot(i.x-s.x,i.y-s.y)||1};j.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||p.active||i.target.closest("a, pre, code, input, textarea")||(e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t=0,n=!1,e.size===2&&(a={d:o(),zoom:z.zoom}))}),window.addEventListener("pointermove",i=>{let s=e.get(i.pointerId);if(!s)return;let l=i.clientX-s.x,c=i.clientY-s.y;e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t+=Math.abs(l)+Math.abs(c),!n&&t>5&&(n=!0,za(),j.classList.add("dragging")),n&&(e.size===2&&a?z.zoom=$r(a.zoom*o()/a.d):(z.x-=l/z.zoom,z.y-=c/z.zoom),st())});let r=i=>{e.delete(i.pointerId),e.size<2&&(a=null),e.size||j.classList.remove("dragging")};window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),j.addEventListener("click",i=>{n&&(i.stopPropagation(),i.preventDefault(),n=!1)},!0)})();j.addEventListener("wheel",e=>{e.preventDefault(),!p.active&&Xr(Math.exp(-e.deltaY*(e.ctrlKey?.01:.0015)),e.clientX,e.clientY)},{passive:!1});document.getElementById("nav-prev").onclick=()=>Ie(-1);document.getElementById("nav-next").onclick=()=>Ie(1);document.getElementById("btn-open").onclick=()=>document.getElementById("file-input").click();document.getElementById("file-input").addEventListener("change",e=>{let t=e.target.files[0];if(!t)return;let n=new FileReader;n.onload=()=>{Fi("a copy of "+t.name)&&(R=on(String(n.result),{kind:"file",name:t.name},{exported:!0}),en(),fe=null,f=null,oc())},n.readAsText(t),e.target.value=""});document.getElementById("btn-save").onclick=()=>{let e=new Blob([re.value],{type:"text/markdown"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=(Ee[0]?Xe(u.get(Ee[0]).title):"deck")+".md",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3),E.kind==="copy"&&(R.exported=R.text,en(),St())};document.getElementById("btn-reset").onclick=()=>{E.kind!=="copy"||sn(R)||confirm("Discard your edits and go back to "+ye(R.origin)+" as it was?")&&(R.text=R.originText,en(),re.value=R.text,f=null,ct(!0),St())};document.getElementById("btn-edit-toggle").onclick=jn;ha=document.querySelector("main"),tt=document.getElementById("editor-resizer"),fr=parseFloat(U("slidetake:editorWidth"));fr&&Pe.style.setProperty("--editor-w",fr+"px");tt.addEventListener("pointerdown",e=>{e.preventDefault(),tt.setPointerCapture(e.pointerId),ha.classList.add("resizing");let t=ha.getBoundingClientRect().right,n=o=>{let r=Math.round(Math.max(280,Math.min(window.innerWidth*.75,t-o.clientX)));Pe.style.setProperty("--editor-w",r+"px")},a=()=>{ha.classList.remove("resizing"),tt.removeEventListener("pointermove",n),Y("slidetake:editorWidth",String(Pe.getBoundingClientRect().width))};tt.addEventListener("pointermove",n),tt.addEventListener("pointerup",a,{once:!0})});tt.addEventListener("dblclick",()=>{Pe.style.removeProperty("--editor-w");try{localStorage.removeItem("slidetake:editorWidth")}catch{}});document.getElementById("btn-mode").onclick=Rr;document.getElementById("btn-present").onclick=()=>ge(!G);kl="https://cdn.jsdelivr.net/npm/obs-websocket-js@5.0.5/dist/obs-ws.min.js",gr=["ArrowRight","PageDown"," ","ArrowDown","Enter"],br=["ArrowLeft","PageUp","ArrowUp","r","R"],vr=["b","B","."],Sn=document.getElementById("rec-dialog"),We=document.getElementById("review"),Rt=document.getElementById("rec-countdown"),Sa=document.getElementById("rec-paused"),En=document.getElementById("obs-host"),Cn=document.getElementById("obs-port"),Tn=document.getElementById("obs-pass"),ja=document.getElementById("obs-remember"),yr=document.getElementById("obs-status"),jt=document.getElementById("rec-start"),oe=null,Ne=!1,He=null,Qr=null,p={active:!1,withObs:!1,counting:!1,paused:!1,finishing:!1,t0:0,pauseAt:0,pausedMs:0,events:[],outputPath:null,browser:null},Ln=e=>new Promise(t=>setTimeout(t,e)),Ht=()=>Promise.race([new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),Ln(100)]);xl="G-3S9FY4MQLS",Na=document.getElementById("analytics-dialog"),Sl=()=>U("slidetake:analytics")!=="off";Na.querySelectorAll("[data-analytics]").forEach(e=>e.onclick=()=>El(e.dataset.analytics==="on"));ei=document.getElementById("btn-analytics");ei.hidden=!/^(www\.)?slidetake\.com$/.test(location.hostname);ei.onclick=()=>{Zr(),yt(Na)};document.querySelectorAll(".modal").forEach(e=>{e.addEventListener("click",t=>{(t.target===e||t.target.closest("[data-close]"))&&e.classList.remove("open")})});document.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",()=>{let t=document.getElementById(e.dataset.copy);t.select(),(navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).catch(()=>document.execCommand("copy")),e.textContent="Copied",setTimeout(()=>{e.textContent="Copy"},1500)}));ni=e=>/^(localhost|127(\.\d+){3}|\[?::1\]?)$/i.test(e);Ll="This page is served over https, and browsers block it from reaching OBS on another computer (OBS only offers plain ws://). Run OBS on this computer and use localhost, or open Slidetake from a local copy: download dist/index.html from github.com/slidetake/slidetake and serve it with python3 -m http.server.";document.getElementById("obs-connect").onclick=ai;ja.addEventListener("change",ti);Bl="https://cdn.jsdelivr.net/npm/mediabunny@1.64.0/+esm",Me=document.getElementById("rec-cam"),dt=document.getElementById("rec-mic"),pt=document.getElementById("rec-quality"),Ea=document.getElementById("rec-meter"),nt=document.getElementById("rec-browser-check"),oi=U("slidetake:rec-mode")||"",vn="",ue=null;Ca=0;dt.onchange=()=>{Y("slidetake:mic",dt.value),Ta()};Me.onchange=()=>{ii(Me.value),Me.value!=="none"&&te&&(Qa(),$e()),On()};Il=()=>(L.pip||"none").toLowerCase()!=="none"||!!L.camera||[...u.values()].some(e=>e.camera),ri=()=>"slidetake:rec-cam:"+Je();pt.onchange=()=>Y("slidetake:quality",pt.value);document.querySelectorAll('input[name="rec-mode"]').forEach(e=>e.onchange=()=>_a(e.value));Sn.addEventListener("click",e=>{(e.target===Sn||e.target.closest("[data-close]"))&&xt()});document.getElementById("btn-record").onclick=Mn;jt.onclick=()=>pi("obs");li=e=>({width:e.w,height:e.h,aspectRatio:16/9,frameRate:Bt,resizeMode:"crop-and-scale"});Nt=!1;Oe="";fi=e=>Wo(e,mi),gi=(e,t)=>Go(e,t,{input:e.outputPath||Oe||"recording.mov",outputName:Je()+"-final.mp4",sectionOf:mi,loudness:mt()}),bi=document.querySelectorAll(".rv-loud"),mt=()=>U("slidetake:loudness")!=="off",vi=()=>bi.forEach(e=>{e.setAttribute("aria-pressed",String(mt())),e.classList.toggle("on",mt())});vi();bi.forEach(e=>e.onclick=()=>{Y("slidetake:loudness",mt()?"off":"on"),vi(),D&&Jt()});D=null,$=null,S=document.getElementById("rv-video"),H=document.getElementById("rv-now");ma=new Map,fa=0;document.getElementById("rv-mode").onchange=()=>Jt();Bn=document.getElementById("rv-fps");Bn.onchange=()=>{D&&(D.fps=parseFloat(Bn.value),Wa(D),Jt())};document.getElementById("rv-link").addEventListener("input",e=>{try{Y("slidetake:site",new URL(e.target.value.trim()).origin)}catch{}D&&Ya(D)});An=null;S.addEventListener("timeupdate",()=>{if(!$)return;let e=$.ranges[$.i];if(S.currentTime*1e3<e.end)return;if($.i++,$.i>=$.ranges.length){S.pause(),$=null,H.textContent="";return}let t=$.ranges[$.i];S.currentTime=t.start/1e3,H.textContent="\u25B6 "+t.title});xi=document.getElementById("rv-play-final"),at=null;xi.onclick=()=>{if(!D)return;if(!D.inBrowser){In(Qe(D).map(n=>({start:n.start,end:n.end,title:n.title})));return}if(F&&!F.single){S.paused?S.play().catch(()=>{}):S.pause();return}let e=At(D),t=Math.max(0,at?e.findIndex(n=>n.id===at):0);at=null,Un(e.slice(t))};S.addEventListener("play",Va);S.addEventListener("pause",()=>{F&&F.single&&S.currentTime<F.parts[0].keep-.05&&(at=F.parts[0].id,H.textContent="Preview starts from "+F.parts[0].title.replace(/ · take \d+$/,"")+"."),Va()});F=null;S.addEventListener("timeupdate",()=>{F&&S.currentTime>=F.parts[F.i].keep&&Ei()});S.addEventListener("ended",()=>{F&&Ei()});se=document.getElementById("rv-render-status");document.getElementById("rv-render-btn").onclick=()=>Ci(!1);kr=e=>e.where?"\u201C"+e.where+"\u201D as "+e.name:"your downloads as "+e.name;Vl=e=>{let t=n=>String(n).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+"-"+t(e.getMinutes())+"-"+t(e.getSeconds())};document.getElementById("rv-folder-change").onclick=async()=>{try{let e=await Ti(!0);e&&(se.textContent="Videos now go to "+e.name+".")}catch{}};A=null,Sr="",Er=null,_e=new Set,Li=()=>"slidetake:board:"+Je();Xt=()=>Y(Li(),JSON.stringify(A)),Kl=e=>{let t=u.get(e);return t?Zo(t.title+`
`+t.html):""},Mi=()=>er(g,e=>({title:u.get(e).title,fp:Kl(e)}));Ce=document.getElementById("rv-setup");Ce.insertBefore(document.getElementById("rec-browser"),Ce.querySelector(".rv-setup-more"));Ja=document.getElementById("rv-setup-btn");Ce.addEventListener("toggle",()=>{Ja.setAttribute("aria-expanded",String(Ce.open)),Ce.open?Ai():xt()});Ja.onclick=()=>{Ce.open=!Ce.open};We.addEventListener("click",e=>{(e.target===We||e.target.closest("[data-close]"))&&xt()});document.getElementById("rv-rec").onclick=()=>pi("browser",ia(g,_e));document.getElementById("rv-use-obs").onclick=()=>{wt(),_a("obs"),Mn()};document.querySelectorAll(".rv-purge .rv-menu button").forEach(e=>e.addEventListener("click",()=>{e.closest("details").open=!1}));document.getElementById("rv-clean-unused").onclick=async()=>{let{rows:e}=Bi(),t=new Set(e.map(a=>a.pick).filter(Boolean)),n=A.takes.filter(a=>!t.has(a.uid));if(!n.length){se.textContent="Every take is in use.";return}confirm("Purge "+n.length+" take"+(n.length===1?"":"s")+" the video doesn\u2019t use (earlier attempts and outdated takes)?")&&(await $l(n),se.textContent="Purged "+n.length+" unused take"+(n.length===1?"":"s")+".")};document.getElementById("rv-clean").onclick=async()=>{if(!A.takes.length||!confirm("Purge all "+A.takes.length+" takes of this deck from this browser? Download the video first if you need it."))return;let e=new Set(A.takes.map(t=>t.clip.split("/")[0]));A.takes=[],A.picks={},Xt();for(let t of e)await qa(t);S.src&&(URL.revokeObjectURL(S.src),S.removeAttribute("src"),S.load()),F=null,_n(),se.textContent="All takes purged.",ft()};Pt=null,La=0,Ma=!1;S.addEventListener("error",async()=>{if(S.getAttribute("src")){if(Pt&&La<5){La++,H.textContent="Reloading "+Oe+" (OBS was still finishing it)\u2026",await new Promise(e=>setTimeout(e,1500));try{Qt(await Hn(Pt),Pt,!0);return}catch{}}H.textContent=Pt?"Chrome cannot play "+Oe+". In OBS set Recording Format to Hybrid MP4 (or MP4) with H.264 video; the ffmpeg command still works with this file.":"Could not play "+(Oe||"this file")+". If OBS was still finishing it when you opened it, open it again; if it still fails, set OBS to Hybrid MP4 (or MP4) with H.264 video."}});zt=document.getElementById("rv-file-input");zt.addEventListener("change",()=>{zt.files[0]&&Qt(zt.files[0]),zt.value=""});document.getElementById("rv-open").onclick=async()=>{if(!window.showOpenFilePicker)return zt.click();try{let[e]=await window.showOpenFilePicker({id:"obs-recordings",types:[{description:"Recordings",accept:{"video/*":[".mov",".mp4",".m4v",".mkv",".webm"]}}]});H.textContent="Opening "+e.name+"\u2026",Qt(await Hn(e),e)}catch(e){(!e||e.name!=="AbortError")&&(H.textContent="Could not open that file.")}};Ri=document.getElementById("rv-folder");Ri.hidden=!window.showDirectoryPicker;Ri.onclick=async()=>{let e=D&&Ze(D.outputPath);try{let t=await window.showDirectoryPicker({id:"obs-recordings",mode:"read"});if(Oi("obs-folder",t),!e){H.textContent="Folder remembered. This session has no file name from OBS; open the file instead.";return}let n=await t.getFileHandle(e);Qt(await Hn(n),n)}catch(t){if(t&&t.name==="AbortError")return;H.textContent=(e?e+" is not in that folder":"Could not read that folder")+". Use \u201COpen the recording file\u2026\u201D instead."}};document.getElementById("rv-download").onclick=()=>{if(!D)return;let e=D,t=fi(e),n="# "+document.getElementById("rv-yt-title").value+`

Recorded `+new Date(e.date).toLocaleString()+(e.outputPath?" \xB7 "+e.outputPath:"")+" \xB7 final length "+ae(t.length)+`

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

`+Qe(e).map(o=>"- "+ae(o.start)+"\u2013"+ae(o.end)+"  "+o.title).join(`
`)+`
`,a=document.createElement("a");a.href=URL.createObjectURL(new Blob([n],{type:"text/markdown"})),a.download=Je()+"-publish.md",a.click(),setTimeout(()=>URL.revokeObjectURL(a.href),1e3)};Cl()&&new URLSearchParams(location.search).get("obs")&&ai();xe=document.getElementById("btn-camera"),Dt=document.getElementById("pip-msg"),yn=null,Pi=P.querySelector("span");Zl='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10.5 22 7v10l-6-3.5z"/></svg>';xe.onclick=()=>Zt(ne);Za();Cr=null;window.addEventListener("pointermove",Di);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(p.active?ut("Stopped: the browser left fullscreen"):G&&ge(!1))});Re=document.getElementById("help");document.getElementById("btn-keys").onclick=()=>Re.classList.add("open");document.getElementById("help-close").onclick=()=>Re.classList.remove("open");Re.addEventListener("click",e=>{e.target===Re&&Re.classList.remove("open")});window.addEventListener("keydown",e=>{if(e.key==="F5"){e.preventDefault(),p.active||Mn();return}if(p.active){Fl(e);return}if(document.querySelector(".modal.open")){e.key==="Escape"&&wt();return}let t=document.activeElement&&document.activeElement.tagName;if(t==="TEXTAREA"||t==="INPUT"||e.metaKey||e.ctrlKey||e.altKey)return;if(Re.classList.contains("open")){/^(Escape|k|K|\?)$/.test(e.key)&&Re.classList.remove("open");return}let n=e.key;n==="ArrowRight"||n===" "||n==="PageDown"?(e.preventDefault(),Ie(1)):n==="ArrowLeft"||n==="PageUp"?(e.preventDefault(),Ie(-1)):n==="ArrowDown"?(e.preventDefault(),yl()):n==="ArrowUp"?(e.preventDefault(),vl()):n==="Home"?g.length&&N(g[0]):n==="End"?g.length&&N(g[g.length-1]):n==="o"||n==="O"?bl():n==="e"||n==="E"?jn():n==="f"||n==="F"||n==="p"||n==="P"?ge(!G):n==="r"||n==="R"?Mn():/^[1-4]$/.test(n)?Fn(Oa[+n-1]):n==="c"||n==="C"?Zt(ne):n==="v"||n==="V"?As():n==="l"||n==="L"?Rr():n==="+"||n==="="?mr(1):n==="-"||n==="_"?mr(-1):n==="?"||n==="k"||n==="K"?Re.classList.add("open"):n==="Escape"&&!Kr()&&G&&ge(!1)});window.addEventListener("hashchange",()=>{let{data:e,slide:t}=an(location.hash);if(e&&!(E&&E.kind==="share"&&e===E.data)){location.reload();return}t&&t!==f&&u.has(t)&&N(t)});Tr="";new ResizeObserver(()=>{let e=j.clientWidth+"x"+j.clientHeight;e!==Tr&&(Tr=e,st(),ve(!0))}).observe(j);rt=document.createElement("div");rt.id="toast";rt.setAttribute("role","status");document.body.appendChild(rt);Lr=null;ec=document.getElementById("open-dialog"),Aa=document.getElementById("open-url"),Ia=document.getElementById("open-error");document.getElementById("btn-load").onclick=()=>{Ia.hidden=!0,yt(ec),Aa.focus(),Aa.select()};document.getElementById("open-form").onsubmit=e=>{e.preventDefault();let t=Io(Aa.value);if(!t){Ia.textContent="That doesn't look like a link.",Ia.hidden=!1;return}location.href=Ba(t)};document.getElementById("btn-share").onclick=async()=>{let{link:e,inside:t}=await tc(f&&f!==g[0]?f:""),n=t?"Link copied, with the whole deck inside it ("+(e.length/1024).toFixed(1)+" KB)"+(e.length>8e3?". Some chat apps cut long links short: a GitHub file or gist makes a shorter one.":"."):"Link copied.";try{await navigator.clipboard.writeText(e),Gt(n,5e3)}catch{prompt("Copy this link:",e)}E.kind==="copy"&&(R.exported=R.text,en(),St())};Mr=U("slidetake:layout");W=Oa.includes(Mr)?Mr:"path";document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===W));Rn=new URLSearchParams(location.search);Oa.includes(Rn.get("layout"))&&(W=Rn.get("layout"),document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===W)));if(_){let e=(Array.isArray(_.trail)?_.trail:_.back?[_.back]:[]).filter(o=>o&&o.label),t=document.querySelector("header .brand");e.length&&(t.innerHTML='<nav class="trail" aria-label="Site">'+e.map((o,r)=>(r?'<span class="sep" aria-hidden="true">|</span>':"")+(o.url?'<a href="'+O(o.url)+'">'+O(o.label)+"</a>":"<span>"+O(o.label)+"</span>")).join("")+"</nav>");let n=document.createElement("a");n.id="credit",n.href="https://slidetake.com",n.target="_blank",n.rel="noopener",n.title="Made with Slidetake",n.setAttribute("aria-label","Made with Slidetake"),n.innerHTML=Ir+'<span class="word">Slide<span>take</span></span>';let a=document.querySelector("header .hdr-actions");a.insertBefore(n,a.firstChild),gt||(a.insertAdjacentHTML("beforeend",'<button class="btn" id="hdr-keys" title="Keyboard shortcuts (K)">\u2328 Keys</button><button class="btn" id="hdr-full" title="Fullscreen (F)">\u26F6 Fullscreen</button>'),document.getElementById("hdr-keys").onclick=()=>document.getElementById("help").classList.add("open"),document.getElementById("hdr-full").onclick=()=>ge(!G))}J=Do(location.pathname,location.search,location.hash),Br=J.page==="pick"?"":J.slide,E=null,R=Fo(U("slidetake:copy"))||nc();window.addEventListener("popstate",()=>location.reload());ce&&window.EventSource&&(new EventSource(ce.events).onmessage=async e=>{if(!eo())return;let t=(JSON.parse(e.data).file||"").replace(/\\/g,"/");if(t===ce.file){let n=await(await fetch(ce.deck,{cache:"no-store"})).text();if(n===re.value)return;re.value=E.text=n,ct(!0);return}ie.querySelectorAll("img").forEach(n=>{let a=new URL(n.src);decodeURIComponent(a.pathname).endsWith("/"+t)&&(a.searchParams.set("t",String(Date.now())),n.src=a.href)})});(Rn.get("edit")==="1"||J.page==="edit"&&R&&Rn.get("edit")!=="0")&&jn();sc().then(e=>(re.value=e,St(),zr(re.value),_r(),document.fonts?document.fonts.ready:null)).then(()=>{u.forEach(zn),Yt(),N(u.has(Br)?Br:g[0],!0)})});var no=`  /* Every colour comes from these tokens. Slidetake's own is seafoam green: bright on zinc in dark mode,
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
  .modal .close{position:absolute;top:14px;right:16px;background:none;border:none;color:var(--text-muted);font-size:18px;cursor:pointer;}
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
  .rec-level meter{flex:1;height:10px;}
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
  .modal .rv-setup-btn{position:absolute;top:10px;right:46px;}
  .modal .rv-setup-btn[aria-expanded="true"]{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  #rv-setup{margin:4px 0 12px;border:1px solid var(--panel-line);border-radius:8px;padding:10px 14px;}
  #rv-setup > summary{display:none;}
  #rv-setup:not([open]){display:none;}
  .rv-setup-sum{margin:0 0 8px;color:var(--text-muted);font-size:12px;}
  .rv-final{font-family:var(--mono);font-size:12px;color:var(--text-muted);}
  /* under the takes: the final cut's size, and Download */
  .rv-dl{grid-area:dl;display:flex;align-items:center;justify-content:flex-end;gap:10px;margin-top:12px;}
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
  #help .close{position:absolute;top:16px;right:18px;background:none;border:none;color:var(--text-muted);font-size:18px;cursor:pointer;}
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
`;var ao=`
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
    <button class="close" id="help-close" aria-label="Close">\u2715</button>
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
    <button class="close" data-close aria-label="Close">\u2715</button>
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
    <button class="close" data-close aria-label="Close">\u2715</button>
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
    <button class="close" data-close aria-label="Close">\u2715</button>
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
    <button class="close" data-close aria-label="Close">\u2715</button>
    <h2 id="rec-title">Record a take</h2>
    <p id="rec-deck-info"></p>
    <div class="rec-modes" role="radiogroup" aria-label="Record with">
      <label class="rec-mode"><input type="radio" name="rec-mode" value="browser"><span><strong>In this browser</strong><small>Nothing to install. Takes stay in this browser until you purge them.</small></span></label>
      <label class="rec-mode"><input type="radio" name="rec-mode" value="obs"><span><strong>OBS</strong><small>For any screen, or when this browser can't record at 720p or more.</small></span></label>
    </div>
    <div id="rec-browser">
      <p id="rec-browser-check"></p>
      <div class="fields">
        <label>Camera<select id="rec-cam"></select></label>
        <label>Microphone<select id="rec-mic"></select></label>
        <label>Quality<select id="rec-quality"></select></label>
      </div>
      <div class="row rec-level"><span>Mic level</span><meter id="rec-meter" min="0" max="1" low="0.1" high="0.8" optimum="0.5" value="0"></meter></div>
      <p>When Chrome asks, share <strong>this tab</strong>. Only the slides and your camera are recorded, in a 16:9 frame; nothing else on the screen is.</p>
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
    <button class="close" data-close aria-label="Close">\u2715</button>
    <button class="btn rv-setup-btn rv-board-only" id="rv-setup-btn" aria-expanded="false" aria-controls="rv-setup">\u2699 Setup</button>
    <h2 id="rv-title">Review the take</h2>
    <p id="rv-info"></p>
    <details id="rv-setup" class="rv-board-only">
      <summary>Recording setup</summary>
      <p class="rv-setup-sum" id="rv-setup-sum"></p>
      <div class="row rv-setup-more">
        <button class="btn small toggle rv-loud" id="rv-loud" aria-pressed="true" title="Brings the video to YouTube's volume (-14 LUFS) with one gain, never past -1.5 dB peaks"><span class="ico" aria-hidden="true">\u{1F50A}</span> Auto volume</button>
        <button class="btn small" id="rv-folder-change" title="Where Download saves videos">Change the download folder\u2026</button>
        <details class="rv-purge">
          <summary class="btn small" title="Delete takes from this browser">\u{1F5D1} Purge takes</summary>
          <div class="rv-menu"><button class="btn small" id="rv-clean-unused">Unused takes</button><button class="btn small" id="rv-clean">All takes</button></div>
        </details>
        <button class="btn small" id="rv-use-obs">Record with OBS instead\u2026</button>
      </div>
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
        <button class="btn small toggle rv-loud" id="rv-loud-obs" aria-pressed="true" title="Adds loudnorm: YouTube's volume (-14 LUFS)">\u{1F50A} Auto volume</button>
        <button class="btn small" data-copy="rv-ffmpeg">Copy</button>
      </h3>
      <textarea id="rv-ffmpeg" rows="4" readonly spellcheck="false"></textarea>
      </div>
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
    <div class="row end">
      <button class="btn" id="rv-download">\u2193 Download script + publish pack</button>
      <button class="btn primary" data-close>Done</button>
    </div>
  </div>
</div>
<input type="file" id="rv-file-input" accept="video/*,video/quicktime,.mov,.mp4,.m4v,.mkv,.webm" hidden>

<div id="rec-countdown"><div class="num"></div><div class="hint">recording starts after the countdown \xB7 Esc to cancel</div></div>
<div id="rec-paused">Paused \xB7 press B to resume</div>

<!-- The sample deck. Plain markdown, nothing else. -->
`;var oo=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">`;var _i=e=>new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=t,a.onerror=()=>n(new Error("could not load "+e)),document.head.appendChild(a)});async function Ui(){document.head.insertAdjacentHTML("beforeend",oo);let e=document.createElement("style");e.textContent=no,document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",ao),await Promise.all([window.gsap?null:_i("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"),window.marked?null:_i("https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js")]),await Promise.resolve().then(()=>(Ni(),lc))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ui,{once:!0}):Ui();})();
