/* Slidetake 0.3.4 · https://slidetake.com · Apache-2.0 */
"use strict";(()=>{var W=(e,t)=>()=>(e&&(t=e(e=0)),t);var Un,Ja=W(()=>{Un=`---
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
`});var Xa,$a=W(()=>{Xa=`---
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

1. The first time, **\u2699 Recording setup** checks the browser and screen and lists your cameras and microphones with a level meter. The camera you pick there (or **No camera**) is remembered for the deck, and **\u25CF Record turns it on by itself**, before the countdown so you can check your framing, then back off afterwards. It defaults to your camera when the deck has a camera box or camera moves. **C** is for presenting live.
2. **\u25CF Record**, and when Chrome asks, share **this tab**. The deck goes fullscreen in a 16:9 frame; only the frame (slides and camera) is recorded, never the rest of the screen.
3. To redo part of it later, tick slides (shift-click ticks a range): **\u25CF Record** then records only those, from the first ticked slide to the last, entry included, and stops by itself. The new takes join their slides; the rest stay as they are.
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

- **Recorded in the browser:** the board is the review. **\u25B6 Preview** plays the picked takes back to back. **\u2193 Download** joins them into one MP4, in a few seconds, without re-encoding, and saves it like OBS does: a new file named by the date (\`deck 2026-10-30 20-04-49.mp4\`) in a folder you pick once, starting in your videos folder. Pressing it again without changing a take or Auto volume says where the video already is, rather than making it again.
- **Recorded with OBS:** previews come from the OBS file, and a ready-to-run **[ffmpeg](https://ffmpeg.org)** command cuts the picked takes (frame-exact).
- **\u{1F50A} Auto volume** (selected by default): YouTube plays videos at about \u221214 LUFS and turns louder ones down, but not quieter ones up, so a voice recorded as it is sounds quiet next to other videos. The final cut is measured the way YouTube measures it and given one gain to reach \u221214 LUFS, stopping short where peaks would pass \u22121.5 dB. The video is still copied as it is; only the sound is re-encoded. In the ffmpeg command it adds \`loudnorm\` (not in the no-re-encode mode).

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
`});var Za,Qa=W(()=>{Za=`---
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
`});var to,eo=W(()=>{to=`---
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
`});var ao,no=W(()=>{ao=`---
title: My deck
---

# My deck

Start typing: this becomes your own copy, and the template stays as it is.

## A section

Every heading is a card. \`##\` sections branch from the first card.

### A detail

\`###\` branches from the section above it.
`});var ro,oo=W(()=>{ro=`---
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
`});var so,io=W(()=>{so=`---
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
`});var co,lo=W(()=>{co=`---
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
`});function $e(e){return e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"")||"card"}function kt(e){return e.replace(/<[^>]*>/g,"").replace(/!?\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[*_`~]/g,"").trim()}function T(e){return String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function po(e){if(typeof document<"u"){let t=document.createElement("textarea");return t.innerHTML=e,t.value}return e.replace(/&(#x[\da-f]+|#\d+|\w+);/gi,(t,n)=>n[0]==="#"?String.fromCodePoint(n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10)):ji[n.toLowerCase()]??t)}function xt(e){let t={};for(let n of e.matchAll(/([\w-]+)="([^"]*)"/g))t[n[1]]=n[2];return t}function St(e,t){let n=[[]],a=null;return e.split(`
`).forEach(o=>{let r=o.match(/^\s{0,3}(`{3,}|~{3,})/);r&&(a?r[1][0]===a[0]&&r[1].length>=a.length&&(a=null):a=r[1]),!a&&!r&&t.test(o)?n.push([]):n[n.length-1].push(o)}),n.map(o=>o.join(`
`))}function uo(e){let t=String(e??"").trim().toLowerCase();if(!t)return 0;let n=t.match(/^(\d+):(\d{1,2})$/);if(n)return(+n[1]*60+ +n[2])*1e3;if(n=t.match(/^(\d+(?:\.\d+)?)\s*(h|hrs?|hours?|m|mins?|minutes?|s|secs?|seconds?)?$/),!n)return 0;let a=(n[2]||"m")[0];return parseFloat(n[1])*(a==="h"?3600:a==="s"?1:60)*1e3}function Q(e){let t=Math.max(0,Math.round(e/1e3)),n=Math.floor(t/3600),a=Math.floor(t%3600/60),o=t%60;return(n?n+":"+String(a).padStart(2,"0"):a)+":"+String(o).padStart(2,"0")}var ji,$t=W(()=>{"use strict";ji={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:"\xA0",mdash:"\u2014",ndash:"\u2013",hellip:"\u2026",rsquo:"\u2019",lsquo:"\u2018",rdquo:"\u201D",ldquo:"\u201C"}});function mo(e){let t=null;return e.split(`
`).filter(n=>{let a=n.match(/^\s{0,3}(`{3,}|~{3,})/);return a?(t?a[1][0]===t[0]&&a[1].length>=t.length&&(t=null):t=a[1],!1):!t}).join(`
`).replace(/`[^`\n]*`/g,"")}function Hn(e){return/<!--\s*view\s*:\s*(overview|map)\s*-->/i.test(mo(e))}function qn(e){let t=mo(e).match(/<!--\s*camera\s*:\s*([\s\S]*?)\s*-->/i);return t?t[1].trim():null}function Ni(e){let t={},n=e.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);if(!n)return{deck:t,body:e};let a=null;return n[1].split(`
`).forEach(o=>{let r=o.match(/^\s+-\s+(.*)$/);if(r&&a){t[a].push(r[1].trim().replace(/^["']|["']$/g,""));return}let i=o.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);if(!i){a=null;return}let s=i[1].toLowerCase(),l=i[2].trim().replace(/^["']|["']$/g,"");l===""?(t[s]=[],a=s):(t[s]=l,a=null)}),{deck:t,body:e.slice(n[0].length)}}function fo(e){let t=o=>typeof o=="string"||typeof o=="number"||typeof o=="boolean",n=o=>String(o).replace(/\s*\n\s*/g," "),a=[];for(let[o,r]of Object.entries(e||{}))/^[A-Za-z_][\w-]*$/.test(o)&&(t(r)?a.push(o+": "+n(r)):Array.isArray(r)&&r.every(t)&&(a.push(o+":"),r.forEach(i=>a.push("  - "+n(i)))));return a.length?`---
`+a.join(`
`)+`
---
`:""}function _i(e){let t=e.split(`
`),n={},a=e;if(t[0]!==void 0&&t[0].trim()==="---"){let o=-1;for(let r=1;r<t.length;r++)if(t[r].trim()==="---"){o=r;break}o!==-1&&(t.slice(1,o).forEach(r=>{let i=r.indexOf(":");i>-1&&(n[r.slice(0,i).trim()]=r.slice(i+1).trim().replace(/^["']|["']$/g,""))}),a=t.slice(o+1).join(`
`).replace(/^\n+/,""))}return{meta:n,body:a}}function Ui(e){let t=e.replace(/<!--[\s\S]*?-->/g,""),n=t.match(/^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m),a=t.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i),o=null;if(n&&(!a||n.index<a.index)?o=n[1]:a&&(o=a[1].replace(/<[^>]+>/g," ")),!o){let r=t.split(`
`).map(i=>i.replace(/<[^>]+>/g,"").trim()).find(i=>i&&!/^[-|:\s]+$/.test(i));o=r?r.slice(0,60):null}return o?po(kt(o)).replace(/\s+/g," ").trim():null}function ho(e){let t=e.match(/<!--\s*\.slide:([\s\S]*?)-->/i);return t?xt(t[1]):{}}function go(e,{render:t=n=>({html:n,err:null})}={}){let n=new Map,a=b=>{let k=b,h=2;for(;n.has(k);)k=b+"-"+h++;return k},o=b=>(n.set(b.id,{x:null,y:null,children:[],...b}),b.id);e=e.replace(/\r\n?/g,`
`);let r=/^\+\+\+[ \t]*$/m.test(e),i={};r||({deck:i,body:e}=Ni(e));let s=/^slides?$/i.test(String(i.layout||""))||/^slides?$/i.test(String(i.type||"")),l=!r&&(St(e,/^--\s*$/).length>1||s&&St(e,/^---\s*$/).length>1),c=r?I():l?v():d();return n.forEach(b=>{(!b.parent||b.parent===b.id||!n.has(b.parent))&&(b.parent=null)}),n.forEach(b=>{let k=new Set([b.id]),h=b.parent;for(;h;){if(k.has(h)){b.parent=null;break}k.add(h),h=n.get(h).parent}}),n.forEach(b=>{b.parent&&n.get(b.parent).children.push(b.id)}),{deck:i,nodes:n,format:r?"+++":l?"reveal":"headings",errCount:c};function d(){let b=[],k=null,h=null,B={level:0,title:null,explicitId:null,lines:[]};e.split(`
`).forEach(C=>{let g=C.match(/^\s{0,3}(`{3,}|~{3,})/);g&&(h?g[1][0]===h[0]&&g[1].length>=h.length&&(h=null):h=g[1]);let L=!h&&!g?C.match(/^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$/):null;if(L){let S=L[2],D=null,N=S.match(/\s*\{#([\w\-:.]+)\}\s*$/);N&&(D=N[1],S=S.slice(0,N.index)),k={level:L[1].length,title:kt(S),explicitId:D,lines:[L[1]+" "+S]},b.push(k)}else(k||B).lines.push(C)});let z=B.lines.join(`
`);z.trim()&&(b.length&&!z.replace(/<!--[\s\S]*?-->/g,"").trim()?b[0].lines.splice(1,0,...B.lines):b.unshift(B));let w=[];return b.forEach(C=>{for(;w.length&&w[w.length-1].level>=C.level;)w.pop();let g=w.length?w[w.length-1].id:null,L=C.lines.join(`
`).trim(),S=C.title||kt((L.split(`
`).find(H=>H.trim())||"Intro").slice(0,48));C.id=a(C.explicitId||$e(S));let{html:D,err:N}=t(L);o({id:C.id,parent:g,title:S,html:D,err:N,camera:qn(L),mapFirst:Hn(L)}),w.push(C)}),0}function I(){let b=e.split(/\n\+\+\+[ \t]*\n/).map(B=>B.trim()).filter(B=>B.length),k=null,h=0;return b.forEach((B,z)=>{let{meta:w,body:C}=_i(B),g=a(w.id||"slide-"+(z+1)),L="parent"in w?w.parent||null:k,S=C.match(/^#{1,6}\s+(.+)$/m),D=w.title||(S?kt(S[1]):g),{html:N,err:H}=t(C);H&&h++,o({id:g,parent:L,title:D,html:N,err:H,camera:w.camera||qn(C),mapFirst:Hn(C),x:w.x!==void 0?parseFloat(w.x):null,y:w.y!==void 0?parseFloat(w.y):null}),k=g}),h}function v(){let b=0,k=0,h=null;function B(w,C){let g=w.body.trim();k++;let L=Ui(g)||"Slide "+k,S=C?n.get(C).title:null;S&&L.startsWith(S+" / ")&&(L=L.slice(S.length+3));let D=a($e(L)),{html:N,err:H}=t(g);return H&&b++,o({id:D,parent:C,title:L,html:N,err:H,camera:qn(g),mapFirst:Hn(g),autoslide:parseInt(w.attrs["data-autoslide"],10)||0})}let z=[];return St(e,/^---\s*$/).forEach(w=>{if(/<section\b/i.test(w)){for(let L of w.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi))z.push([{body:L[2],attrs:xt(L[1])}]);let g=w.replace(/<section\b[^>]*>[\s\S]*?<\/section>/gi,"");g.trim()&&z.push([{body:g,attrs:ho(g)}]);return}let C=St(w,/^--\s*$/).filter(g=>g.trim()).map(g=>({body:g,attrs:ho(g)}));C.length&&z.push(C)}),z.forEach(w=>{let C=null;w.forEach((g,L)=>{if(!h){h=C=B(g,null);return}L===0?C=B(g,h):B(g,C)})}),b}}var bo=W(()=>{"use strict";$t()});function Xt(e,t){return String(t||"").toLowerCase().split(/\s+/).forEach(n=>{n&&(n==="off"||n==="hide"?e.off=!0:n==="on"||n==="pip"||n==="show"?(e.off=!1,e.full=!1,e.used=!0):n==="full"||n==="fullscreen"?(e.full=!0,e.off=!1,e.used=!0):/^\d+(\.\d+)?%?$/.test(n)?(e.size=Wn(parseFloat(n)),e.used=!0):Et.includes(n)?(e.corner=n,e.used=!0):n==="flip"?(e.flip=!e.flip,e.used=!0):n==="circle"?e.circle=!0:n==="rect"?e.circle=!1:n==="mirror"?e.mirror=!0:(n==="unmirror"||n==="no-mirror")&&(e.mirror=!1))}),e}function vo(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function yo(e,t){let n=[];if(!e.length){for(let o=0;o<=t;o++)n.push({cam:0,frag:o});return n}let a=e.findIndex(o=>!Xt({},o).full);a<0&&(a=e.length-1);for(let o=0;o<=a;o++)n.push({cam:o,frag:0});for(let o=1;o<=t;o++)n.push({cam:a,frag:o});for(let o=a+1;o<e.length;o++)n.push({cam:o,frag:t});return n}var Et,Wn,wo=W(()=>{"use strict";Et=["top-left","top-right","bottom-left","bottom-right"],Wn=e=>Math.max(8,Math.min(60,e))});function ko(e){let t=String(e||"").trim();if(!t)return null;let n;try{n=new URL(/^[a-z]+:\/\//i.test(t)?t:"https://"+t)}catch{return null}let a=n.pathname.split("/").filter(Boolean);if(n.hostname==="github.com"||n.hostname==="www.github.com"){let[o,r,i,s,...l]=a;if(o&&r&&(i==="blob"||i==="raw"||i==="tree")&&s){let c=l.join("/");return(i==="tree"||!/\.(md|markdown|txt)$/i.test(c))&&(c=(c?c+"/":"")+"index.md"),{kind:"url",url:Gn+[o,r,s].join("/")+"/"+c}}if(o&&r&&!i)return{kind:"url",url:Gn+o+"/"+r+"/HEAD/README.md"}}if(n.hostname==="gist.github.com"){let o=a.length>=2?a[1]:a[0];if(o&&/^[\da-f]+$/i.test(o))return{kind:"gist",id:o}}if(n.hostname==="slidetake.com"||n.hostname==="www.slidetake.com"){let o=Yn(n.pathname);if(o)return o;let r=n.searchParams.get("src");if(r)return{kind:"url",url:r}}return{kind:"url",url:n.href}}function Yn(e){let t=String(e||"").split("/").filter(Boolean).map(n=>{try{return decodeURIComponent(n)}catch{return n}});if(t[0]==="gh"&&t.length>=4){let[,n,a,...o]=t,r=a.indexOf("@"),i=r<0?a:a.slice(0,r),s=r<0?"HEAD":a.slice(r+1);return!n||!i||!s?null:{kind:"url",url:Gn+[n,i,s,...o].map(encodeURIComponent).join("/")}}return t.length===1&&(t[0]==="docs"||t[0]==="help")?{kind:"builtin",id:"docs"}:t[0]==="showcase"&&t.length===1?{kind:"builtin",id:"showcase"}:t[0]==="examples"&&(t.length===1||t.length===2&&t[1]==="showcase")?{kind:"builtin",id:"showcase"}:t.length===1&&t[0]==="features"?{kind:"builtin",id:"features"}:t.length===1&&t[0]==="privacy"?{kind:"builtin",id:"privacy"}:t[0]==="gist"&&t[1]&&/^[\da-f]+$/i.test(t[1])?t[2]?{kind:"gist",id:t[1],file:t[2]}:{kind:"gist",id:t[1]}:null}function xo(e){if(e.kind==="builtin")return e.id==="home"?"/":e.id==="showcase"?"/showcase":e.id.startsWith("template:")?"/new?template="+e.id.slice(9):"/"+e.id;if(e.kind==="gist")return"/gist/"+e.id+(e.file?"/"+encodeURIComponent(e.file):"");let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);if(t){let[,n,a,o,r]=t;if(!/^refs$/.test(o))return"/gh/"+n+"/"+a+(o==="HEAD"?"":"@"+o)+"/"+r}return"/?src="+encodeURIComponent(e.url)}var Gn,Kn=W(()=>{"use strict";Gn="https://raw.githubusercontent.com/"});function Hi(e){let t="";for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function qi(e){let t=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((e.length+3)%4));return Uint8Array.from(t,n=>n.charCodeAt(0))}async function So(e,t){let n=new Response(new Blob([e]).stream().pipeThrough(t));return new Uint8Array(await n.arrayBuffer())}async function Eo(e){return Hi(await So(new TextEncoder().encode(e),new CompressionStream("deflate-raw")))}async function Co(e){return new TextDecoder().decode(await So(qi(e),new DecompressionStream("deflate-raw")))}function Qt(e){let t=e.replace(/^#/,"");if(!t.startsWith(Vn)){let r=t;try{r=decodeURIComponent(t)}catch{}return{data:null,slide:r}}let n=t.slice(Vn.length),a=n.indexOf("~"),o=a<0?"":n.slice(a+1);try{o=decodeURIComponent(o)}catch{}return{data:a<0?n:n.slice(0,a),slide:o}}function Jn(e,t){return"#"+Vn+e+(t?"~"+encodeURIComponent(t):"")}var Vn,$n=W(()=>{"use strict";Vn="deflate:"});function To(e,t,n){let a=e.replace(/\/+$/,"")||"/",o=new URLSearchParams(t),{data:r,slide:i}=Qt(n);if(a==="/share")return r?{page:"share",data:r,slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:""};if(a==="/edit")return{page:"edit",slide:i};if(a==="/new"){let c=o.get("template");return c&&Wi.includes(c)?{page:"source",source:{kind:"builtin",id:"template:"+c},slide:i}:{page:"pick"}}let s=Yn(a);if(s)return{page:"source",source:s,slide:i};let l=o.get("src");return a==="/"&&l?{page:"source",source:{kind:"url",url:l},slide:i}:{page:"source",source:{kind:"builtin",id:"home"},slide:i}}function ye(e){switch(e.kind){case"builtin":return e.id==="home"?"Home":e.id==="docs"||e.id==="help"?"the docs":e.id==="showcase"?"the showcase":e.id==="features"?"the features":e.id==="privacy"?"the privacy page":"the "+e.id.replace(/^template:/,"")+" template";case"gist":return"a gist"+(e.file?" ("+e.file+")":"");case"shared":return"a shared deck";case"file":return e.name;case"url":{let t=e.url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/[^/]+\/(.+)$/);if(t)return t[1]+"/"+t[2]+"/"+t[3];try{let n=new URL(e.url);return n.hostname+n.pathname}catch{return e.url}}}}function Zt(e,t,{exported:n=!1}={}){return{text:e,origin:t,originText:e,exported:n?e:null}}function en(e){return e.text!==(e.exported??e.originText)}function tn(e){return e.text===e.originText}function Lo(e){try{let t=JSON.parse(e||"null");return!t||typeof t.text!="string"||!t.origin||typeof t.origin.kind!="string"?null:{text:t.text,origin:t.origin,originText:typeof t.originText=="string"?t.originText:t.text,exported:typeof t.exported=="string"?t.exported:null}}catch{return null}}var Wi,Mo=W(()=>{"use strict";Kn();$n();Wi=["blank","talk","recording"]});function Xn(e){let t;try{t=new URL(e)}catch{return null}let n=t.hostname.replace(/^(www\.|m\.)/,""),a=null,o=!1;if(n==="youtu.be")a=t.pathname.slice(1).split("/")[0];else if(n==="youtube.com"||n==="youtube-nocookie.com"){let r=t.pathname.split("/").filter(Boolean);r[0]==="watch"?a=t.searchParams.get("v"):["shorts","live","embed"].includes(r[0])&&(a=r[1]||null,o=r[0]==="shorts")}return!a||!/^[\w-]{6,}$/.test(a)?null:{id:a,start:Gi(t.searchParams.get("t")||t.searchParams.get("start")||""),portrait:o}}function Gi(e){if(/^\d+$/.test(e))return+e;let t=e.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);return t&&e?+(t[1]||0)*3600+ +(t[2]||0)*60+ +(t[3]||0):0}function Bo(e){return"https://www.youtube-nocookie.com/embed/"+encodeURIComponent(e.id)+"?enablejsapi=1&rel=0&playsinline=1"+(e.start?"&start="+e.start:"")}var Ao=W(()=>{"use strict"});function we(e){let t=new Map,n=e.totalObs??e.total;return e.events.forEach((a,o)=>{t.has(a.id)||t.set(a.id,{id:a.id,title:a.title,takes:[]});let r=t.get(a.id),i=e.events[o+1];r.takes.push({no:r.takes.length+1,start:Io(a),end:i?Io(i)-(i.lead||0):n})}),t}function Xe(e){let t=[],n=an(e);return we(e).forEach(a=>{let o=e.picks[a.id]??a.takes.length;if(!o)return;let r=a.takes[o-1];if(!r)return;let i=Oo(r.start,n),s=Oo(r.end,n);s>i&&t.push({id:a.id,title:a.title,f0:i,f1:s,start:i*1e3/n,end:s*1e3/n})}),t}function Yi(e){let t=[];return e.forEach(n=>{let a=t[t.length-1];a&&n.f0===a.f1?(a.f1=n.f1,a.end=n.end):t.push({f0:n.f0,f1:n.f1,start:n.start,end:n.end})}),t}function Qn(e,t){let n=0,a=[];return Xe(e).forEach(o=>{let{sec:r,title:i}=t(o.id,o.title),s=a[a.length-1];(!s||s.sec!==r&&s.title!==i)&&a.push({sec:r,title:i,t:n}),n+=o.end-o.start}),{list:a,length:n}}function Po(e,t){let{list:n,length:a}=Qn(e,t),o=n.filter((r,i)=>i===0||(n[i+1]?n[i+1].t:a)-r.t>=1e4);return o.length&&(o[0].t=0),{lines:o.map(r=>Q(r.t)+" "+r.title),dropped:n.length-o.length,length:a}}function zo(e,t,{input:n,outputName:a,sectionOf:o,loudness:r}){let i=Yi(Xe(e));if(!e.withObs)return"# This was a rehearsal: nothing was recorded.";if(!i.length)return"# Every slide is left out: nothing to render.";let s=Ki(n)+a,{list:l,length:c}=Qn(e,o),d=g=>String(g).replace(/[=;#\\\n]/g,L=>"\\"+L),v=`cat > /tmp/slidetake-chapters.txt <<'EOF'
`+(`;FFMETADATA1
title=`+d(e.deckTitle)+`
`+l.map((g,L)=>`[CHAPTER]
TIMEBASE=1/1000
START=`+Math.round(g.t)+`
END=`+Math.round(l[L+1]?l[L+1].t:c)+`
title=`+d(g.title)).join(`
`))+`
EOF
`,b=" -map 0:v:0 -map 0:a:0 -map_metadata 1 -map_chapters 1";if(t==="copy"){let g=i.map(S=>"file "+nn(n)+`
inpoint `+Ro(S.start)+`
outpoint `+Ro(S.end)).join(`
`);return(i.length>1?`# Careful: without re-encoding, cuts can only land on keyframes (OBS puts one about every 2 s),
# so `+(i.length===2?"the cut":"each of the "+(i.length-1)+" cuts")+` here may keep or lose up to ~2 s. Use a frame-accurate option for retakes.
`:"")+`cat > /tmp/slidetake-cuts.txt <<'EOF'
`+g+`
EOF
`+v+"ffmpeg -f concat -safe 0 -i /tmp/slidetake-cuts.txt -i /tmp/slidetake-chapters.txt"+b+" -c copy -movflags +faststart "+nn(s)}let k=an(e),h=g=>(g/k).toFixed(6),B=g=>((g-.5)/k).toFixed(6),z=i.map(g=>"gte(t,"+B(g.f0)+")*lt(t,"+B(g.f1)+")").join("+"),w=i.map(g=>"gte(t,"+h(g.f0)+")*lt(t,"+h(g.f1)+")").join("+"),C=t==="mac"?"-c:v h264_videotoolbox -b:v 12M":"-c:v libx264 -crf 18 -preset medium";return v+"ffmpeg -i "+nn(n)+" -i /tmp/slidetake-chapters.txt"+b+` -vf "select='`+z+`',setpts=N/FRAME_RATE/TB" -af "asetnsamples=n=48:p=0,aselect='`+w+"',asetpts=N/SR/TB"+(r?",loudnorm=I=-14:TP=-1:LRA=11":"")+'"'+(r?" -ar 48000":"")+" "+C+" -c:a aac -b:a 192k -movflags +faststart "+nn(s)}var Io,an,Oo,Qe,Ki,nn,Ro,on=W(()=>{"use strict";$t();Io=e=>e.obsT??e.t,an=e=>e.fps||60,Oo=(e,t)=>Math.round(e*t/1e3);Qe=e=>String(e||"").split(/[\\/]/).pop()||"",Ki=e=>{let t=Math.max(String(e).lastIndexOf("/"),String(e).lastIndexOf("\\"));return t>=0?String(e).slice(0,t+1):""},nn=e=>"'"+String(e).replace(/'/g,"'\\''")+"'",Ro=e=>(e/1e3).toFixed(3)});function Vi(e,t){let n=Math.min(e,t*16/9),a=n*9/16;return{w:n,h:a,x:(e-n)/2,y:(t-a)/2}}function Do(e,t,n){let a=Vi(e,t),o=[Math.floor(a.w*n),Math.floor(a.h*n)];return{quality:Ze.find(r=>o[0]>=r.w&&o[1]>=r.h)||null,device:o}}function sn(e){let t=new Map;e.events.forEach((a,o)=>{t.has(a.id)||t.set(a.id,[]),t.get(a.id).push(o)});let n=[];return we(e).forEach(a=>{let o=e.picks[a.id]??a.takes.length,r=o?a.takes[o-1]:null;if(!r)return;let i=e.events[t.get(a.id)[o-1]];i&&i.clip&&r.end>r.start&&n.push({id:a.id,title:a.title,clip:i.clip,keep:(r.end-r.start)/1e3})}),n}var Ze,rn,Ct,Ji,Fo,Zn,jo,ln,No=W(()=>{"use strict";on();Ze=[{name:"1080p",w:1920,h:1080,bitrate:8e6},{name:"720p",w:1280,h:720,bitrate:5e6}],rn=192e3,Ct=30;Ji=["video/mp4;codecs=avc1.640028,mp4a.40.2","video/mp4;codecs=avc1,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],Fo=e=>Ji.find(t=>e(t))||"",Zn=e=>e.startsWith("video/mp4")?"mp4":"webm",jo=e=>Math.round((e.bitrate+rn)/8*60);ln=(e,t)=>t>e?t:e+.001});function $i(e){let t=1681.974450955533,n=.7071752369554196,a=Math.tan(Math.PI*t/e),o=Math.pow(10,3.999843853973347/20),r=Math.pow(o,.4996667741545416),i=1+a/n+a*a,s={b0:(o+r*a/n+a*a)/i,b1:2*(a*a-o)/i,b2:(o-r*a/n+a*a)/i,a1:2*(a*a-1)/i,a2:(1-a/n+a*a)/i};t=38.13547087602444,n=.5003270373238773,a=Math.tan(Math.PI*t/e),i=1+a/n+a*a;let l={b0:1,b1:-2,b2:1,a1:2*(a*a-1)/i,a2:(1-a/n+a*a)/i};return{shelf:s,highPass:l}}function _o(e,t){let{shelf:n,highPass:a}=$i(e),o=Math.round(e/10),r=[],i=Array.from({length:t},()=>new Float64Array(8)),s=d=>d>=3&&d<=4?1.41:1,l=0,c=0;return{add(d){let I=d[0].length;for(let v=0;v<t;v++){let b=d[v]||d[0],k=i[v],h=s(v),[B,z,w,C,g,L,S,D]=k,N=l,H=Math.floor(N/o),oe=(H+1)*o,ie=0;for(let ce=0;ce<I;ce++){let ve=b[ce];ve>c?c=ve:-ve>c&&(c=-ve);let q=n.b0*ve+n.b1*B+n.b2*z-n.a1*w-n.a2*C;z=B,B=ve,C=w,w=q;let de=a.b0*q+a.b1*g+a.b2*L-a.a1*S-a.a2*D;L=g,g=q,D=S,S=de,ie+=de*de,++N===oe&&(r[H]=(r[H]||0)+h*ie,ie=0,H++,oe+=o)}ie&&(r[H]=(r[H]||0)+h*ie),k.set([B,z,w,C,g,L,S,D])}l+=I},result(){let d=Math.floor(l/o),I=[];for(let h=3;h<d;h++)I.push(((r[h-3]||0)+(r[h-2]||0)+(r[h-1]||0)+(r[h]||0))/(4*o));let v=h=>h.reduce((B,z)=>B+z,0)/h.length,b=I.filter(h=>cn(h)>-70),k=b.length?b.filter(h=>cn(h)>cn(v(b))-10):[];return{integrated:k.length?cn(v(k)):-1/0,peak:c,peakDb:c>0?Xi(c):-1/0}}}}function Uo(e,t=-14,n=-1.5){if(!isFinite(e.integrated))return 0;let a=t-e.integrated;return a<=0||!isFinite(e.peakDb)?a:Math.max(0,Math.min(a,n-e.peakDb))}var Xi,cn,Ho,qo=W(()=>{"use strict";Xi=e=>20*Math.log10(e),cn=e=>-.691+10*Math.log10(e);Ho=e=>Math.pow(10,e/20)});function Wo(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0).toString(36)}function Go(e,t){return e.map((n,a)=>{let o=e[a-1]||"";return{id:n,title:t(n).title,fp:t(n).fp,prev:o,prevFp:o?t(o).fp:""}})}function Yo(e,t,n){let a=new Map(n.map(i=>[i.id,i])),o=new Map;e.events.forEach(i=>{o.has(i.id)||o.set(i.id,[]),o.get(i.id).push(i)});let r=[];return we(e).forEach(i=>i.takes.forEach((s,l)=>{let c=o.get(i.id)[l];if(!c||!c.clip||s.end<=s.start)return;let d=a.get(i.id);d&&r.push({uid:c.clip,id:i.id,title:i.title,clip:c.clip,ms:s.end-s.start,run:t,date:e.date,fp:d.fp,prev:d.prev,prevFp:d.prevFp,at:s.start})})),r.sort((i,s)=>i.at-s.at).map(({at:i,...s})=>s)}function Ko(e,t){return t.map(n=>{let a=e.takes.filter(i=>i.id===n.id).map((i,s)=>({...i,no:s+1,outdated:i.fp!==n.fp?"slide":(i.prev??null)!==n.prev||i.prevFp!==n.prevFp?"before":""})),o=e.picks[n.id],r=null;if(o&&a.some(i=>i.uid===o))r=o;else{let i=a.filter(s=>!s.outdated);r=i.length?i[i.length-1].uid:null}return{id:n.id,title:n.title,takes:a,pick:r}})}function Vo(e){let t=[],n=0;return e.forEach(a=>{let o=a.pick?a.takes.find(r=>r.uid===a.pick):null;o&&(t.push({id:a.id,title:a.title,t:n,clip:o.clip}),n+=o.ms)}),{events:t,picks:{},total:n}}function ea(e,t){let n=new Set(t),a=e.map((o,r)=>n.has(o)?r:-1).filter(o=>o>=0);return a.length?{from:e[a[0]],to:e[a[a.length-1]]}:null}function Jo(e,t,n){let a=t?e.indexOf(t):-1,o=e.indexOf(n);return a<0||o<0?[n]:e.slice(Math.min(a,o),Math.max(a,o)+1)}var $o=W(()=>{"use strict";on()});var Wl={};function U(e){try{let t=localStorage.getItem(e);if(t!==null||!e.startsWith("slidetake:"))return t;let n=e.slice(10);return localStorage.getItem("slidetake:"+n)??localStorage.getItem("traverse:"+n)}catch{return null}}function J(e,t){try{localStorage.setItem(e,t)}catch{}}function ss(e){try{return{html:window.marked?window.marked.parse(e):"<pre>"+T(e)+"</pre>",err:null}}catch{return{html:"<p>(could not render)</p>",err:"render error"}}}function bn(){let e=E.brand||"",t=E.logo||"",n=/^chip$/i.test(E.brand_style||""),a=/^slidetake$/i.test(e)?'<span class="st-mark">'+kr+'<span class="word">Slide<span>take</span></span></span>':(t?'<img alt="" src="'+T(t)+'">':"")+(e?"<span"+(n?' class="chip"':"")+">"+T(e)+"</span>":"");if(Le.dataset.html!==a){Le.dataset.html=a,Le.innerHTML=a;let o=Le.querySelector("img");o&&(o.onload=o.onerror=()=>be(!0))}Le.hidden=!a,Ca(),document.title=E.title||"Slidetake",cs(),xr()}function ls(){let e=String(E.accent||"").trim();if(!e||!window.CSS||!CSS.supports("color",e))return null;if(!CSS.supports("color","oklch(from red l c h)"))return{accent:e,line:e};let t=n=>"oklch(from "+e+" "+n+" c h)";return{dark:{accent:t(.8),accentSoft:t(.87),line:t(.5)},light:{accent:t(.45),accentSoft:t(.4),line:t(.75),ring:t(.7)}}}function cs(){let e="",t=(a,o)=>{let r=Object.entries(o||{}).filter(([i,s])=>Qo[i]&&s&&typeof s!="object").map(([i,s])=>Qo[i]+":"+String(s).replace(/[;{}<>]/g,"")).join(";");r&&(e+=a+"{"+r+`}
`)};[_&&_.colors,ls()].filter(Boolean).forEach(a=>{["dark","light"].forEach(o=>{let r={...a,...a[o]||{}},i=o==="dark";r.accent&&typeof r.accent=="string"&&(r.accentSoft=r.accentSoft||r.accent,r.line=r.line||"color-mix(in srgb, "+r.accent+(i?" 45%, #09090b)":" 55%, #fff)"),r.ring=r.ring||(i?r.accent:r.line),r.onAccent=r.onAccent||(i?"color-mix(in srgb, "+r.accent+" 15%, #000)":"#fff")),t(i?'body:not([data-mode="light"])':'body[data-mode="light"]',r)})});let n=document.getElementById("st-colors");n||(n=document.createElement("style"),n.id="st-colors",document.head.appendChild(n)),n.textContent!==e&&(n.textContent=e),document.body.classList.toggle("st-header-color",e.includes("--header-bg"))}function Lt(e){let t=document.createElement("span");t.style.color="var("+e+")",document.body.appendChild(t);let n=getComputedStyle(t).color;return t.remove(),ze=ze||Object.assign(document.createElement("canvas"),{width:1,height:1}).getContext("2d",{willReadFrequently:!0}),ze.clearRect(0,0,1,1),ze.fillStyle="#000",ze.fillStyle=n,ze.fillRect(0,0,1,1),"#"+[...ze.getImageData(0,0,1,1).data.slice(0,3)].map(a=>a.toString(16).padStart(2,"0")).join("")}function ds(e,t,n){let a=i=>[1,3,5].map(s=>parseInt(i.slice(s,s+2),16)),o=a(e),r=a(t);return"#"+o.map((i,s)=>Math.round(i*n+r[s]*(1-n)).toString(16).padStart(2,"0")).join("")}function On(){if(_&&_.themeKey&&!Zo){let t=U(_.themeKey);return t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return String(Zo||U("slidetake:mode")||E.mode||"dark").toLowerCase()==="light"?"light":"dark"}function xr(){let e=On()==="light";e?document.body.dataset.mode="light":delete document.body.dataset.mode;let t=document.getElementById("btn-mode");t&&(t.innerHTML=e?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',t.title=(e?"Dark theme":"Light theme")+" (L)",t.setAttribute("aria-label",t.title))}function Sr(){let e=On()==="light"?"dark":"light";_&&_.themeKey?(J(_.themeKey,e),document.documentElement.classList.toggle("dark",e==="dark")):J("slidetake:mode",e),xr(),ae.querySelector(".echarts-container, .diagram.d2")&&lt(!0)}function ps(){let t=(E.camera||"").replace(/^\[|\]$/g,"").split(",").map(n=>n.trim().replace(/^["']|["']$/g,"")).filter(Boolean);return t.length?t:["on","full","off"]}function ua(e){return!ee&&e?vo(e.camera):[]}function Ye(e){return yo(ua(e),e&&e.frags?e.frags.length:0)}function Er(){let e=Ye(u.get(m));return e[Math.min(ge,e.length-1)]||{cam:0,frag:0}}function us(){if(!m)return null;let e=u.get(m),t=ua(e);if(t.length)return t[Math.min(Er().cam,t.length-1)];if(e&&e.el&&e.el.classList.contains("card-full"))return"off";for(let n=f.indexOf(m)-1;n>=0;n--){let a=ua(u.get(f[n]));if(a.length)return a[a.length-1]}return null}function hs(){let e={corner:(E.pip||"none").toLowerCase(),size:Wn(parseFloat(E.pip_size)||24),circle:(E.pip_shape||"").toLowerCase()==="circle",mirror:!/^(no|false|off)$/i.test(E.pip_mirror||""),full:!1,off:!1,flip:!1,used:!1};return Xt(e,us()),he&&!/\b(off|hide)\b/i.test(he)&&(e.off=!1),Xt(e,he),!Et.includes(e.corner)&&(Z||e.used)&&(e.corner="bottom-right"),e.flip&&Et.includes(e.corner)&&(e.corner=e.corner.includes("left")?e.corner.replace("left","right"):e.corner.replace("right","left")),e}function Ca(){let e=!O.hidden&&O.offsetWidth?O.getBoundingClientRect():null,t=We=hs(),n=Et.includes(t.corner);if(O.className=n?[t.corner,t.circle&&"circle",Z&&"live",t.mirror&&"mirror",t.full&&"full",O.classList.contains("msg")&&"msg"].filter(Boolean).join(" "):"",O.style.width=t.size+"%",O.hidden=!n||ee||t.off,pa.dataset.pip=O.hidden||t.full?"none":t.corner,O.hidden||ft||!O.animate)return;let a="cubic-bezier(.65,0,.35,1)";if(!e){O.animate([{opacity:0},{opacity:1}],{duration:300,easing:"ease-out"});return}let o=O.getBoundingClientRect();Math.abs(e.left-o.left)+Math.abs(e.top-o.top)+Math.abs(e.width-o.width)+Math.abs(e.height-o.height)<2||O.animate([{transformOrigin:"0 0",transform:"translate("+(e.left-o.left)+"px,"+(e.top-o.top)+"px) scale("+e.width/o.width+","+e.height/o.height+")"},{transformOrigin:"0 0",transform:"none"}],{duration:600,easing:a})}function ms(){let e=We;if(!e||O.hidden||e.full)return null;let t=F.clientWidth,n=F.clientHeight,a=16,o=t*e.size/100,r=e.circle?o:o*9/16,i=e.corner.includes("left")?a:t-a-o,s=e.corner.includes("top")?a:n-a-r;return{x0:i,y0:s,x1:i+o,y1:s+r}}function fs(){if(!mt)return;if(ee){Kt(!0);return}let e=ps();Ae=(Ae+1)%e.length,he=e[Ae],Ca(),Y||nt("Camera: "+he),!Z&&!O.hidden?Je():be()}function Cr(e){let t=go(e,{render:ss});E=t.deck,u=t.nodes,bn();let n={"+++":"+++ format",reveal:"reveal.js format",headings:"headings"}[t.format];Qi.textContent=u.size+(u.size===1?" card":" cards")+" \xB7 "+n,Pt.textContent=t.errCount?t.errCount+" card(s) had errors":""}function Tr(){Ee=[...u.values()].filter(a=>!a.parent).map(a=>a.id);let e=0;function t(a,o){let r=u.get(a);if(r.depth=o,r.children.length===0)r._slot=e++;else{r.children.forEach(s=>t(s,o+1));let i=r.children.map(s=>u.get(s)._slot);r._slot=(Math.min(...i)+Math.max(...i))/2}}Ee.forEach(a=>t(a,0)),f=[];function n(a){f.push(a),u.get(a).children.forEach(n)}return Ee.forEach(n),Math.max(1,e)}function gs(){let e=[],t=[],n=[];return u.forEach(a=>{e[a.depth]=Math.max(e[a.depth]||0,a._h),t[a.depth]=Math.max(t[a.depth]||0,a._w),n[a.depth]=(n[a.depth]||0)+1}),{maxH:e,maxW:t,count:n,maxDepth:e.length-1}}function Lr(e){e.x!==null&&!isNaN(e.x)&&(e.cx=e.x+e._w/2),e.y!==null&&!isNaN(e.y)&&(e.cy=e.y+e._h/2)}function bs(){let{maxH:e,maxDepth:t}=gs(),n=[0];for(let l=1;l<=t;l++)n[l]=n[l-1]+e[l-1]+ns;let a=ts-ot,o=[],r=(l,c)=>{let d=u.get(l);d.cx+=c,d.children.forEach(I=>r(I,c))},i=l=>{let c=u.get(l);o[c.depth]=Math.max(o[c.depth]??-1/0,c.cx+c._w/2),c.children.forEach(i)};function s(l){let c=u.get(l),d=o[c.depth]!==void 0?o[c.depth]+a:-1/0;c.children.length?(c.children.forEach(s),c.cx=(u.get(c.children[0]).cx+u.get(c.children[c.children.length-1]).cx)/2,c.cx-c._w/2<d&&r(l,d-(c.cx-c._w/2))):c.cx=(d===-1/0?0:d)+c._w/2,i(l)}Ee.forEach(s),u.forEach(l=>{l.cy=n[l.depth]+l._h/2,Lr(l)})}function vs(e){let t=Math.PI*2/e,n=32,a=[],o=(s,l)=>Math.abs(s.cx-l.cx)<(s._w+l._w)/2+n&&Math.abs(s.cy-l.cy)<(s._h+l._h)/2+n,r=Math.max(0,...[...u.values()].map(s=>s.depth)),i=0;for(let s=0;s<=r;s++){let l=[...u.values()].filter(d=>d.depth===s);if(!l.length)continue;let c=s===0?Ee.length>1?os*.5:0:i+as;for(let d=0;d<400&&(l.forEach(v=>{let b=(v._slot+.5)*t-Math.PI/2;v.cx=c*Math.cos(b),v.cy=c*Math.sin(b),Lr(v)}),!!l.some((v,b)=>l.some((k,h)=>h>b&&o(v,k))||a.some(k=>o(v,k))));d++)c=c*1.02+10;i=c,a.push(...l)}}function ys(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),n=[];for(;t.nextNode();)n.push(t.currentNode);n.forEach(a=>{let o=a.data.match(/^\s*\.element:\s*([\s\S]*)$/);if(!o)return;let r=a.previousSibling;for(;r&&r.nodeType===3&&!r.data.trim();)r=r.previousSibling;let i=r&&r.nodeType===1?r:a.parentElement;i&&Object.entries(xt(o[1])).forEach(([s,l])=>{s==="class"?i.classList.add(...l.split(/\s+/).filter(Boolean)):s==="style"?i.style.cssText+=";"+l:i.setAttribute(s,l)})})}function xs(e){let t=new DOMParser().parseFromString(e,"image/svg+xml"),n=t.documentElement;if(!n||n.localName!=="svg"||t.getElementsByTagName("parsererror").length)return null;let a=n.namespaceURI,o=i=>{[...i.children].forEach(s=>{s.namespaceURI!==a||!ws.has(s.localName)?s.remove():o(s)}),[...i.attributes].forEach(s=>{let l=s.name.toLowerCase(),c=s.value;(l.startsWith("on")||/javascript:|expression\(/i.test(c)||/url\(\s*['"]?(?!#)/i.test(c)||(l==="href"||l==="xlink:href")&&!c.trim().startsWith("#"))&&i.removeAttribute(s.name)})};o(n);let r="st-svg"+ ++ks+"-";return[n,...n.querySelectorAll("*")].forEach(i=>[...i.attributes].forEach(s=>{let l=s.name==="id"?r+s.value:s.value.replace(/url\(\s*(['"]?)#/g,"url($1#"+r);(s.name==="href"||s.name==="xlink:href")&&l.startsWith("#")&&(l="#"+r+l.slice(1)),l!==s.value&&(s.value=l)})),document.importNode(n,!0)}function Me(e,t){let n=e.classList.contains("fragment");["fragment","fade-up","visible","current-fragment"].forEach(a=>{e.classList.contains(a)&&(t.classList.add(a),e.classList.remove(a))}),e.dataset.fragmentIndex!==void 0&&(t.dataset.fragmentIndex=e.dataset.fragmentIndex,delete e.dataset.fragmentIndex),e.replaceWith(t),n&&u.forEach(a=>a.frags&&a.frags.forEach(o=>{let r=o.indexOf(e);r>=0&&(o[r]=t)}))}function aa(e){let t=document.createElement("figure");t.className="media",Me(e,t),t.appendChild(e);let n=e.getAttribute("alt");return n&&t.insertAdjacentHTML("beforeend","<figcaption>"+T(n)+"</figcaption>"),t}function Ss(e,t){let n=document.createElement("figure");return n.className="media yt fragment yt-play"+(e.portrait?" portrait":""),n.innerHTML='<div class="frame"><iframe src="'+Bo(e)+'" title="'+T(t||"YouTube video")+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>'+(t?"<figcaption>"+T(t)+"</figcaption>":""),n}function er(e,t){let n=t<=4?t:t<=6?3:4;e.style.setProperty("--cols",n),e.style.setProperty("--rows",Math.ceil(t/n))}function Cs(e,t){t.querySelectorAll("pre > code.language-svg").forEach(r=>{let i=xs(r.textContent.trim()),s=document.createElement("div");s.className=i?"diagram svg":"diagram err",i?s.appendChild(i):s.textContent="SVG error: not a valid <svg> drawing",Me(r.parentElement,s)}),t.querySelectorAll(":scope > p").forEach(r=>{let i=r.children.length===1?r.children[0]:null;if(!i)return;let s=i.tagName==="A"&&r.textContent.trim()===i.textContent.trim()?i.getAttribute("href"):i.tagName==="IMG"?i.getAttribute("src"):null,l=s&&Xn(s);l&&Me(r,Ss(l,i.tagName==="IMG"?i.getAttribute("alt"):""))}),t.querySelectorAll(":scope > ul, :scope > ol").forEach(r=>{let i=[...r.children];!i.length||!i.every(s=>oa(s)||Ls(s))||(r.classList.add("gallery"),i.some(s=>!oa(s))&&r.classList.add("diagrams"),i.forEach(s=>{if(!oa(s))return;let l=s.querySelector("img");s.innerHTML="",s.appendChild(l),aa(l)}),i.length>1&&i.every(s=>s.classList.contains("fragment"))?(r.classList.add("carousel"),i[0].classList.remove("fragment","fade-up"),i.forEach((s,l)=>{s.classList.replace("fade-up","current-visible");let c=s.querySelector("figcaption");c&&(c.dataset.count=l+1+" / "+i.length)})):er(r,i.length))}),t.querySelectorAll(":scope > p").forEach(r=>{if(!Es(r))return;let i=[...r.querySelectorAll("img")];if(i.length===1){Me(r,i[0]),aa(i[0]);return}let s=document.createElement("div");s.className="gallery grid",Me(r,s),i.forEach(l=>{s.appendChild(l),aa(l)}),er(s,i.length)});let n=[...t.children].filter(r=>!/^H[1-6]$/.test(r.tagName)&&!(r.nodeType===1&&r.tagName==="HR")),a=n.filter(r=>r.matches("figure.media"));a.length===1&&n.length===1&&e.classList.add("card-media"),n.length===1&&(n[0].matches("figure.media:not(.yt)")||n[0].matches(".gallery.carousel:not(.diagrams)"))&&e.classList.add("card-bleed");let o=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT);for(;o.nextNode();)if(/^\s*view\s*:\s*full\s*$/i.test(o.currentNode.data))e.classList.add("card-full");else if(a.length===1){e.classList.add("card-split",n.indexOf(a[0])===0?"media-first":"media-last");let r=document.createElement("div");r.className="split-text",n.filter(i=>i!==a[0]).forEach(i=>r.appendChild(i)),a[0].after(r),n.indexOf(a[0])!==0&&r.after(a[0])}t.querySelector(".gallery")&&e.classList.add("card-gallery")}function Mr(e,t){let n=e.querySelector("iframe");n&&n.contentWindow&&n.contentWindow.postMessage(JSON.stringify({event:"command",func:t,args:[]}),"*")}function Ts(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT),n=[];for(;t.nextNode();)/^\s*steps\s*$/i.test(t.currentNode.data)&&n.push(t.currentNode);n.forEach(a=>{for(let o=a.nextSibling;o&&!(o.nodeType===8&&/^\s*steps\s*:\s*off\s*$/i.test(o.data));o=o.nextSibling)o.nodeType!==1||o.classList.contains("fragment")||(/^(UL|OL)$/.test(o.tagName)?o.querySelectorAll(":scope > li").forEach(r=>r.classList.add("fragment","fade-up")):o.classList.add("fragment","fade-up"))})}function Ms(e){let t=o=>o.classList.contains("fragment")&&(o.tagName==="P"&&o.children.length===1&&o.children[0].tagName==="IMG"&&!o.textContent.trim()&&!Xn(o.children[0].getAttribute("src")||"")||o.tagName==="PRE"&&!!o.querySelector(Br)),n=[],a=[];[...e.children].forEach(o=>{t(o)?a.push(o):(a.length>1&&n.push(a),a=[])}),a.length>1&&n.push(a),n.forEach(o=>{let r=document.createElement("ul");o[0].before(r),o.forEach(i=>{let s=document.createElement("li");s.className="fragment fade-up",i.classList.remove("fragment","fade-up"),s.appendChild(i),r.appendChild(s)})})}function Bs(e){let t=[...e.querySelectorAll(".fragment")].map((o,r)=>({e:o,i:r,k:o.dataset.fragmentIndex}));if(t.every(o=>o.k===void 0))return t.map(o=>[o.e]);let n=0;t.forEach(o=>{o.k=o.k===void 0?n:parseFloat(o.k),n=Math.max(n,o.k)+1}),t.sort((o,r)=>o.k-r.k||o.i-r.i);let a=[];return t.forEach((o,r)=>{r&&t[r-1].k===o.k?a[a.length-1].push(o.e):a.push([o.e])}),a}function Ta(e,t,n){!e||!e.frags||(n&&e.el.classList.add("snap"),e.frags.forEach((a,o)=>a.forEach(r=>{let i=r.classList.contains("visible");r.classList.toggle("visible",o<t),r.classList.toggle("current-fragment",o===t-1),r.classList.contains("yt-play")&&i!==o<t&&!n&&Mr(r,o<t?"playVideo":"pauseVideo")})),n&&(e.el.offsetWidth,e.el.classList.remove("snap")))}function As(){try{return E.base?new URL(E.base,me||location.href):me?new URL(me):null}catch{return null}}function Is(e){let t=As(),n=0;return e.querySelectorAll("img[src], source[src], video[src], iframe[src], a[href]").forEach(a=>{let o=a.hasAttribute("src")?"src":"href",r=a.getAttribute(o);if(!r||/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(r))return;if(!t){o==="src"&&!r.startsWith("/")&&n++;return}let i=t;try{E.site&&(i=new URL(E.site,t))}catch{}a.setAttribute(o,new URL(r,r.startsWith("/")?i:t).href)}),n}function Rn(e){let t=e.el,n=t.querySelector(".body");t.classList.add("measuring"),n.style.zoom="";let a=ot;e.visual=!!n.querySelector("iframe, .echarts-container, pre > code.language-dot, pre > code.language-d2, pre > code.language-echarts, .diagram, figure.media"),e.visual&&(a=se);let o=t.classList.contains("card-full");if(t.classList.remove("img-portrait","img-landscape","img-overlay"),o&&(a=se),t.classList.contains("card-bleed")){let s=Math.max(0,...[...n.querySelectorAll("img")].map(c=>c.naturalWidth&&c.naturalHeight?c.naturalWidth/c.naturalHeight:0))||1.7777777777777777,l=se-dn*s>=260;if(o&&l)t.classList.add("img-portrait"),t.style.setProperty("--img-w",Math.round(dn*s)+"px"),a=se;else if(o||Math.abs(s-16/9)<.08)t.classList.add("img-overlay"),a=se;else if(s<1.3){let c=Math.min(Math.round(dn*s),se-300);t.classList.add("img-portrait"),t.style.setProperty("--img-w",c+"px"),a=Math.min(se,Math.max(na,c*2))}else t.classList.add("img-landscape"),a=Math.round(Math.max(ot,Math.min(se,(dn-es)*s))),t.style.setProperty("--img-h",Math.round(a/s)+"px")}else(n.querySelector('[style*="flex"], [style*="grid"], .r-hstack')||n.querySelectorAll("img").length>=4)&&(a=na);let r=n.querySelectorAll("table");if(r.length){t.style.width=se+"px";let s=t.offsetWidth-n.clientWidth;r.forEach(l=>{a=Math.max(a,Math.min(na,Math.ceil(l.offsetWidth)+s+12))})}let i=n.querySelectorAll(".fragment.grow");if(i.length){t.style.width=a+"px";let s=t.offsetWidth-n.clientWidth;i.forEach(l=>{a=Math.max(a,Math.min(se,Math.ceil(l.offsetWidth*1.3)+s))})}t.style.width=a+"px",t.scrollWidth>a+2&&(t.style.width=(a=Math.min(se,t.scrollWidth+24))+"px"),n.scrollWidth>n.clientWidth+2&&(n.style.zoom=(n.clientWidth/n.scrollWidth).toFixed(3)),e._w=a,e._h=t.offsetHeight||da,t.classList.remove("measuring")}function Os(){clearTimeout(tr),tr=setTimeout(()=>{u.forEach(Rn),Nt(),be(!0)},200)}function Ds(){let e=On()==="light"?"light":"dark",t=Lt(e==="light"?"--accent-ring":"--accent"),n="slidetake-"+e+"-"+t.slice(1);return nr.has(n)||(Fs(n,zs[e],t),nr.add(n)),n}function Fs(e,t,n){let a={axisLine:{lineStyle:{color:t.line}},axisTick:{lineStyle:{color:t.line}},axisLabel:{color:t.muted},splitLine:{lineStyle:{color:t.split}},nameTextStyle:{color:t.muted}};echarts.registerTheme(e,{color:[n,...t.palette],backgroundColor:"transparent",textStyle:{color:t.text,fontFamily:"'IBM Plex Sans', sans-serif"},title:{textStyle:{color:t.text},subtextStyle:{color:t.muted}},legend:{textStyle:{color:t.text}},tooltip:{backgroundColor:t.tip,borderColor:t.line,textStyle:{color:t.text}},categoryAxis:a,valueAxis:a,logAxis:a,timeAxis:a,line:{symbolSize:6,lineStyle:{width:2.5}},pie:{label:{color:t.text,textBorderWidth:0},labelLine:{lineStyle:{color:t.muted}}},funnel:{label:{color:t.text,textBorderWidth:0}}})}function _s(){let e=On()==="light"?"light":"dark",t=Lt("--node-bg"),n=Lt(e==="dark"?"--accent":"--accent-line"),a=e==="dark"?[.58,.38,.25,.18,.12]:[.7,.45,.25,.15,.08],o={...Ns[e],N7:t,B1:Lt("--accent")};return a.forEach((r,i)=>{o["B"+(i+2)]=ds(n,t,r)}),o}function ha(e){return ra[e]||(ra[e]=new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=t,a.onerror=()=>{delete ra[e],n(new Error("could not load "+e))},document.head.appendChild(a)}))}async function Hs(){let e=De,t=[...ae.querySelectorAll(".node pre > code.language-dot")];ae.querySelectorAll(".node pre > code.language-echarts").forEach(r=>{let i=document.createElement("div");i.className="echarts-container",i.dataset.chart=r.textContent,Me(r.parentElement,i)});let n=[...ae.querySelectorAll(".node .echarts-container[data-chart]")],a=[...ae.querySelectorAll(".node pre > code.language-d2")];if(!t.length&&!n.length&&!a.length)return;let o=[];if(t.length)try{if(await ha(Rs),ia=ia||await Viz.instance(),e!==De)return;t.forEach(r=>{let i=document.createElement("div");i.className="diagram";try{i.appendChild(ia.renderSVGElement(r.textContent))}catch(s){i.className="diagram err",i.textContent="Diagram error: "+s.message}Me(r.parentElement,i)})}catch{o.push("diagrams")}if(a.length)try{if(!pn){let i=await import(js);pn=new i.D2}if(e!==De)return;let r=_s();for(let i of a){let s=document.createElement("div");s.className="diagram d2";try{let l=await pn.compile(Us(i.textContent));s.innerHTML=await pn.render(l.diagram,{...l.renderOptions||{},themeOverrides:r,darkThemeOverrides:r})}catch(l){s.className="diagram err",s.textContent="Diagram error: "+(l.message||l)}if(e!==De)return;Me(i.parentElement,s)}}catch{o.push("D2 diagrams")}if(n.length)try{if(await ha(Ps),e!==De)return;let r=Ds();n.forEach(i=>{let s;try{s=JSON.parse(i.dataset.chart)}catch{i.textContent="Chart data is not valid JSON.";return}echarts.init(i,r,{renderer:"svg"}).setOption(Object.assign({backgroundColor:"transparent",animation:!ft},s))})}catch{o.push("charts")}e===De&&(o.length&&(Pt.textContent="Could not load the "+o.join(" and ")+" renderer (offline?)"),u.forEach(Rn),Nt(),be(!0))}function qs(){let e=[];return f.forEach(t=>{let n=pt(t),a=e[e.length-1];a&&a.sec===n?a.ids.push(t):e.push({sec:n,ids:[t]})}),e}function Ws(){let n=0,a=0,o=0;qs().forEach((r,i)=>{let s=Math.max(...r.ids.map(d=>u.get(d)._h));i&&(n+=o/2+120+s/2);let l=a,c=a;r.ids.forEach((d,I)=>{let v=u.get(d);I&&(l+=90+v._w/2),v.cx=l,v.cy=n,c=l,l+=v._w/2}),a=c,o=s})}function Gs(){u.forEach(e=>{e.cx=0,e.cy=0})}function Ar(){De++,window.echarts&&ae.querySelectorAll(".echarts-container").forEach(n=>{let a=echarts.getInstanceByDom(n);a&&a.dispose()}),ae.querySelectorAll("div.node").forEach(n=>n.remove());let e=Tr(),t=0;u.forEach(n=>{let a=document.createElement("div");a.className="node",a.tabIndex=0,a.dataset.id=n.id;let o=n.parent?Pn(n.id).slice(0,-1).map(i=>u.get(i).title).join(" / "):"";a.innerHTML=(o?'<div class="crumb">'+T(o)+"</div>":"")+'<div class="body">'+n.html+"</div>"+(n.err?'<div class="err-badge">!</div>':"");let r=a.querySelector(".body");ys(r),Ts(r),Ms(r),Cs(a,r),r.querySelectorAll("thead").forEach(i=>{i.textContent.trim()||i.remove()}),t+=Is(r),n.frags=Bs(r),r.querySelectorAll("img").forEach(i=>{i.complete||i.addEventListener("load",Os,{once:!0})}),a.querySelectorAll("a[href]").forEach(i=>{let s=i.getAttribute("href");if(s.startsWith("#")){let l=decodeURIComponent(s.slice(1));u.has(l)&&(i.classList.add("xlink"),i.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),p.active||j(l)}))}else i.target="_blank",i.rel="noopener",i.addEventListener("click",l=>l.stopPropagation())}),a.addEventListener("click",()=>{p.active||j(n.id)}),a.addEventListener("keydown",i=>{i.key==="Enter"&&i.target===a&&j(n.id)}),ae.appendChild(a),n.el=a,Ta(n,n.frags.length)}),t&&!Pt.textContent&&(Pt.textContent=t+" image(s) use relative paths: add base: to the deck, or open it with ?src="),u.forEach(Rn),Nt(e),Hs()}function Nt(e){e===void 0&&(e=Tr()),G==="radial"?vs(e):G==="path"?Ws():G==="focus"?Gs():bs(),ae.classList.toggle("focus",G==="focus"),u.forEach(t=>{let n=t.el.style;n.setProperty("--cx",t.cx),n.setProperty("--cy",t.cy)}),Ys(),gt(),Ba()}function Ys(){let e="";if(G==="focus"){ta.innerHTML="";return}if(G==="path"){for(let t=1;t<f.length;t++){let n=u.get(f[t-1]),a=u.get(f[t]);e+='<path data-from="'+n.id+'" data-to="'+a.id+'" d="M '+n.cx+" "+n.cy+" L "+a.cx+" "+a.cy+'"/>'}ta.innerHTML=e;return}u.forEach(t=>{if(!t.parent)return;let n=u.get(t.parent);if(G==="radial")e+='<path data-from="'+n.id+'" data-to="'+t.id+'" d="M '+n.cx+" "+n.cy+" L "+t.cx+" "+t.cy+'"/>';else{let a=n.cy+n._h/2,o=t.cy-t._h/2,r=a+(o-a)/2;e+='<path data-from="'+n.id+'" data-to="'+t.id+'" d="M '+n.cx+" "+a+" L "+n.cx+" "+r+" L "+t.cx+" "+r+" L "+t.cx+" "+o+'"/>'}}),ta.innerHTML=e}function Pn(e){let t=[],n=e;for(;n;)t.unshift(n),n=u.get(n).parent;return t}function rt(){let e=F.clientWidth,t=F.clientHeight;ae.style.transform="translate("+e/2+"px,"+t/2+"px) scale("+R.zoom+") translate("+-R.x+"px,"+-R.y+"px)",Nr()}function La(){Ot&&(Ot.kill(),Ot=null)}function Ir(e,t){if(La(),t||ft||!window.gsap){Object.assign(R,e),rt();return}let n=F.clientWidth,a=Math.hypot(e.x-R.x,e.y-R.y),o=e.zoom,r=gsap.timeline({onUpdate:rt,onComplete:()=>{Ot=null}}),{zoom:i,...s}=e,l=a*Math.min(R.zoom,o),c=Math.max(.55,Math.min(1.3,.55+l/n*.3));if(r.to(R,{...s,duration:c,ease:"power2.inOut"},0),l>n*1.2){let d=Math.max(.06,Math.min(R.zoom,o,n*.9/(a+ot)));r.to(R,{zoom:d,duration:c/2,ease:"sine.out"},0).to(R,{zoom:o,duration:c/2,ease:"sine.in"},c/2)}else r.to(R,{zoom:o,duration:c,ease:"power2.inOut"},0);Ot=r}function Ks(){let e=F.getBoundingClientRect(),t=14,n=[];if(!Le.hidden&&Le.offsetWidth){let o=Le.getBoundingClientRect();n.push({x0:o.left-e.left-t,y0:o.top-e.top-t,x1:o.right-e.left+t,y1:o.bottom-e.top+t})}let a=ms();return a&&n.push({x0:a.x0-t,y0:a.y0-t,x1:a.x1+t,y1:a.y1+t}),n}function Vs(){let e=F.clientWidth,t=F.clientHeight,n=[{x0:16,y0:Y?20:56,x1:e-16,y1:t-(Y?20:74)}];return Ks().forEach(a=>{let o=[];n.forEach(r=>{if(a.x1<=r.x0||a.x0>=r.x1||a.y1<=r.y0||a.y0>=r.y1){o.push(r);return}[{...r,x1:Math.min(r.x1,a.x0)},{...r,x0:Math.max(r.x0,a.x1)},{...r,y1:Math.min(r.y1,a.y0)},{...r,y0:Math.max(r.y0,a.y1)}].forEach(i=>{i.x1-i.x0>80&&i.y1-i.y0>80&&o.push(i)})}),o.length&&(n=o)}),n}function ma(e,t,n){let a=F.clientWidth,o=F.clientHeight,r=null;return Vs().forEach(i=>{let s=n*Math.min((i.x1-i.x0)/e,(i.y1-i.y0)/t);(!r||s>r.zoom)&&(r={zoom:s,sx:(i.x0+i.x1)/2-a/2,sy:(i.y0+i.y1)/2-o/2})}),r}function Or(e,t,n,a){return{x:e-n.sx/a,y:t-n.sy/a}}function Ge(e,t){let n=u.get(e);if(!n)return;let a=ma(n._w,n._h,zt),o=pt(e),r=f.filter(l=>pt(l)===o&&!u.get(l).visual).map(l=>{let c=u.get(l);return ma(c._w,c._h,zt).zoom}).sort((l,c)=>l-c),i=r.length?r[Math.floor((r.length-1)/2)]:a.zoom,s=Math.max(.2,Math.min(5,a.zoom,i));Ir(Object.assign(Or(n.cx,n.cy,a,s),{zoom:s}),t)}function _t(e){let t=[...u.values()];if(!t.length)return;let n=F.clientWidth,a=F.clientHeight,o=Math.min(...t.map(d=>d.cx-d._w/2)),r=Math.max(...t.map(d=>d.cx+d._w/2)),i=Math.min(...t.map(d=>d.cy-d._h/2)),s=Math.max(...t.map(d=>d.cy+d._h/2)),l=ma(r-o,s-i,.94),c=Math.max(.05,Math.min(1,l.zoom));Ir(Object.assign(Or((o+r)/2,(i+s)/2,l,c),{zoom:c}),e)}function be(e){m&&u.has(m)?Ge(m,e):_t(e)}function gt(){let e=m?Pn(m):[];u.forEach(t=>{let n=t.el;n.classList.toggle("current",t.id===m),n.classList.toggle("active-path",e.includes(t.id))}),ae.querySelectorAll("#connectors path").forEach(t=>{let n=G==="path"?!!m&&f.indexOf(t.dataset.to)<=f.indexOf(m):e.includes(t.dataset.from)&&e.includes(t.dataset.to);t.classList.toggle("active",n)}),Qs(e),Pr()}function Rr(){return uo(new URLSearchParams(location.search).get("duration")??E.duration)}function Js(){return Y&&Rr()>0&&(!p.active||/^always$/i.test(E.timer||""))}function vn(){let e=Js()&&Ie.start>0;if(je.classList.toggle("timed",e),!e){je.classList.remove("over");return}let n=(p.active&&p.t0?He():performance.now()-Ie.start)/Rr();je.firstChild.style.width=Math.min(100,n*100)+"%",je.classList.toggle("over",n>=1)}function $s(){Ie.start=performance.now(),clearInterval(Ie.timer),Ie.timer=setInterval(vn,1e3),vn()}function Xs(){clearInterval(Ie.timer),Ie.timer=null,Ie.start=0,vn()}function Pr(){let e=Y&&f.length>1&&!/^(off|no|false)$/i.test(E.progress||"");if(je.classList.toggle("show",e),!e)return;vn();let t=f.indexOf(m),n=0,a=0;f.forEach((o,r)=>{let i=Ye(u.get(o)).length;n+=i,r<t?a+=i:r===t&&(a+=Math.min(ge,i-1)+1)}),je.lastChild.style.width=(n?a/n*100:0)+"%"}function Qs(e){Xo.innerHTML=e.map((t,n)=>(n>0?'<span class="sep">\u203A</span>':"")+'<button class="crumb-btn'+(t===m?" here":"")+'" data-id="'+T(t)+'">'+T(u.get(t).title)+"</button>").join(""),Xo.querySelectorAll(".crumb-btn").forEach(t=>t.addEventListener("click",()=>{p.active||j(t.dataset.id)}))}function Ut(e){let t=u.get(m);t&&(Ta(t,Er().frag,e),Ca(),(O.hidden||!We||!We.full)&&tl(t),Ma(t))}function el(e){return!f.length||e.id!==f[0]&&e.id!==f[f.length-1]||e.el.querySelector("[data-gsap], .title-scramble")?null:[...e.el.querySelector(".body").children].filter(t=>!t.classList.contains("fragment"))}function tl(e){if(e._played||!window.gsap||ft)return;e._played=!0;let t=el(e);if(t&&t.length){e._auto=t;let[n,...a]=t;/^H[1-3]$/.test(n.tagName)&&!n.children.length?(n.classList.add("auto-scramble"),ar(n)):a.unshift(n),gsap.from(a,{opacity:0,y:24,duration:.7,ease:"power2.out",delay:.5,stagger:.45})}e.el.querySelectorAll("[data-gsap]").forEach(n=>{let a;try{a=JSON.parse(n.dataset.gsap)}catch{return}let o={duration:a.duration??1,delay:a.delay??0,ease:a.ease||"power2.out"};a.to?gsap.fromTo(n,a.from||{},Object.assign({},a.to,o)):a.from&&gsap.from(n,Object.assign({},a.from,o))}),e.el.querySelectorAll(".title-scramble").forEach(ar)}function Dt(e){!e||!e._played||(e._played=!1,window.gsap&&(e._auto&&(e._auto.forEach(t=>{gsap.killTweensOf(t),gsap.set(t,{clearProps:"opacity,transform"})}),e._auto=null),e.el.querySelectorAll("[data-gsap]").forEach(t=>{gsap.killTweensOf(t);let n={};try{n=JSON.parse(t.dataset.gsap)}catch{}let a=new Set(Object.keys(Object.assign({},n.from,n.to)).map(o=>Zs.includes(o)?"transform":o));a.size&&gsap.set(t,{clearProps:[...a].join(",")})}),e.el.querySelectorAll(".title-scramble, .auto-scramble").forEach(t=>{t._scramble&&t._scramble.kill(),t.dataset.text&&(t.textContent=t.dataset.text)})))}function ar(e){let t=e.dataset.text||(e.dataset.text=e.textContent),n=Array.from(t),a="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=?",o={p:0};e._scramble=gsap.to(o,{p:1,duration:1.4,ease:"none",onUpdate(){let r=Math.floor(o.p*n.length);e.textContent=n.map((i,s)=>s<r||/\s/.test(i)?i:a[Math.random()*a.length|0]).join("")},onComplete(){e.textContent=t}})}function Ma(e){clearTimeout(it),!(!Y||!e||!e.autoslide||p.active&&(!p.t0||p.paused))&&(it=setTimeout(()=>{m===e.id&&st(1)},e.autoslide))}function zr(e){let t=e&&e!==f[0]?e:"";try{y&&y.kind==="share"?history.replaceState(null,"",location.pathname+location.search+Jn(y.data,t)):history.replaceState(null,"",e?"#"+encodeURIComponent(e):location.pathname+location.search)}catch{}}function j(e,t,n){if(!u.has(e))return;if(e!==m){he=null,Ae=-1,ge=n?Ye(u.get(e)).length-1:0;let r=u.get(m);r&&G==="focus"&&!t&&(r.el.classList.add("leaving"),setTimeout(()=>r.el.classList.remove("leaving"),600)),Fr()}let a=e!==m;if(a&&(Dr=m),m=e,clearTimeout(ue),ue=null,a&&G==="focus"&&!t&&!ft){let r=u.get(e).el;r.classList.add("entering"),r.offsetWidth,r.classList.remove("entering")}Ut(a),a&&!Se&&Ft("slide",e);let o=u.get(e);a&&o.mapFirst&&!n&&!t&&G!=="focus"?(_t(),ue=setTimeout(()=>{ue=null,m===e&&Ge(e)},1900)):Ge(e,t),gt(),Ba(),zr(e)}function Fr(){let e=u.get(m);e&&(e.el.querySelectorAll("figure.yt").forEach(t=>Mr(t,"pauseVideo")),Ta(e,e.frags.length,!0),Dt(e))}function nl(){if(!m&&Ne&&u.has(Ne)){jr();return}m&&(Ne=m),G==="focus"&&zn("path"),Fr(),clearTimeout(it),m=null,gt(),Ba(),_t(),zr(null)}function jr(){if(ue)return clearTimeout(ue),ue=null,Ge(m),!0;if(!m&&Ne&&u.has(Ne)){let e=Ne;return Ne=null,j(e),!0}return!1}function st(e){if(!m){f.length&&j(f[e>0?0:f.length-1]);return}if(ue&&e>0){clearTimeout(ue),ue=null,Ge(m);return}let t=Ye(u.get(m)),n=Math.min(ge,t.length-1)+e;if(n>=0&&n<t.length){ge=n,he=null,Ae=-1,Ut(),!Z&&!O.hidden&&We.used?Je():be(),gt();return}let a=f.indexOf(m)+e;a>=0&&a<f.length&&j(f[a],!1,e<0)}function al(){let e=u.get(m);e&&e.parent&&j(e.parent)}function ol(){let e=u.get(m);e&&e.children.length?j(e.children[0]):!m&&f.length&&j(f[0])}function Ba(){let e=[...u.values()];if(!e.length){ca.innerHTML="",ke=null;return}Zi.textContent="map";let t=h=>h.cx,n=h=>h.cy,a=Math.min(...e.map(t))-ot/2,o=Math.max(...e.map(t))+ot/2,r=Math.min(...e.map(n))-da/2,i=Math.max(...e.map(n))+da/2,s=16,l=180,c=130,d=Math.min((l-2*s)/Math.max(1,o-a),(c-2*s-6)/Math.max(1,i-r)),I=l/2-(a+o)/2*d,v=c/2+5-(r+i)/2*d,b=m?Pn(m):[],k="";e.forEach(h=>{if(!h.parent)return;let B=u.get(h.parent);k+='<line x1="'+(t(B)*d+I)+'" y1="'+(n(B)*d+v)+'" x2="'+(t(h)*d+I)+'" y2="'+(n(h)*d+v)+'" stroke="var(--panel-line)" stroke-width="1"/>'}),e.forEach(h=>{let B=h.id===m?"var(--accent)":b.includes(h.id)?"var(--accent-teal)":"var(--node-border)";k+='<circle data-id="'+T(h.id)+'" cx="'+(t(h)*d+I)+'" cy="'+(n(h)*d+v)+'" r="'+(h.id===m?4:3)+'" fill="'+B+'"><title>'+T(h.title)+"</title></circle>"}),k+='<rect id="mm-viewport" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.7"/>',ca.innerHTML=k,ke={s:d,ox:I,oy:v},Nr()}function Nr(){let e=document.getElementById("mm-viewport");if(!e||!ke)return;let t=F.clientWidth/R.zoom,n=F.clientHeight/R.zoom;e.setAttribute("x",(R.x-t/2)*ke.s+ke.ox),e.setAttribute("y",(R.y-n/2)*ke.s+ke.oy),e.setAttribute("width",Math.max(2,t*ke.s)),e.setAttribute("height",Math.max(2,n*ke.s))}function lt(e){Cr(ne.value),m&&!u.has(m)&&(m=null),Ar(),m?j(m,e):f.length?j(f[0],e):(m=null,_t(!0))}function zn(e,t){G=e,J("slidetake:layout",e),document.querySelectorAll("#layout-toggle .seg-btn").forEach(n=>n.classList.toggle("active",n.dataset.mode===e)),u.size&&(!t&&!ft&&(ae.classList.add("morph"),setTimeout(()=>ae.classList.remove("morph"),700)),Nt(),rt(),m?Ge(m,t):_t(t))}function _r(e){return Math.max(.04,Math.min(5,e))}function rl(e){zt=Math.round(Math.max(rs,Math.min(is,e))*100)/100,J("slidetake:slideSize",zt),m&&Ge(m)}function or(e){m?rl(zt+e*.1):Ur(e>0?1.2:1/1.2)}function Ur(e,t,n){La();let a=_r(R.zoom*e);if(t!==void 0){let o=F.getBoundingClientRect(),r=t-o.left-o.width/2,i=n-o.top-o.height/2;R.x+=r/R.zoom-r/a,R.y+=i/R.zoom-i/a}R.zoom=a,rt()}function Dn(){_||(Pe.classList.toggle("collapsed"),document.getElementById("btn-edit-toggle").classList.toggle("active",!Pe.classList.contains("collapsed")))}function fe(e){Y=e,document.body.classList.toggle("presenting",e),yi();let t=document.documentElement;e&&t.requestFullscreen&&!document.fullscreenElement&&t.requestFullscreen().catch(()=>{}),!e&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen().catch(()=>{}),e&&!m&&f.length&&j(f[0]);let n=E.camera||[...u.values()].some(a=>a.camera);e&&n&&!Z&&!ee&&Je(),e?Ma(u.get(m)):clearTimeout(it),e?$s():Xs(),Pr()}function He(){return(p.paused?p.pauseAt:performance.now())-p.t0-p.pausedMs}function bt(e){e.classList.add("open")}function cl(e){if(J("slidetake:analytics",e?"on":"off"),!e){window["ga-disable-"+sl]=!0;let t=["","; Domain="+location.hostname,"; Domain=."+location.hostname.replace(/^www\./,"")];document.cookie.split(";").map(n=>n.split("=")[0].trim()).filter(n=>n==="_ga"||n.startsWith("_ga_")).forEach(n=>t.forEach(a=>{document.cookie=n+"=; Max-Age=0; Path=/"+a}))}qr()}function qr(){Ia.querySelectorAll("[data-analytics]").forEach(e=>e.setAttribute("aria-checked",String(e.dataset.analytics==="on"===ll())))}function vt(){document.querySelectorAll(".modal.open").forEach(e=>e.classList.remove("open"))}function dl(){let e=new URLSearchParams(location.search).get("obs");if(e){let[t,n,...a]=e.split(":");return wn.value=t||"localhost",kn.value=n||"4455",xn.value=a.join(":"),!0}try{let t=JSON.parse(U("slidetake:obs")||"null");t&&(wn.value=t.host||"localhost",kn.value=t.port||"4455",xn.value=t.password||"",Aa.checked=!0)}catch{}return!1}function Gr(){if(Aa.checked)J("slidetake:obs",JSON.stringify({host:wn.value.trim(),port:kn.value.trim(),password:xn.value}));else try{localStorage.removeItem("slidetake:obs")}catch{}}function Tt(e,t){cr.textContent=e,cr.className=t||""}function pl(e){return location.protocol==="https:"&&!Yr(e)}async function Kr(){let e=wn.value.trim()||"localhost",t="ws://"+e+":"+(kn.value.trim()||"4455");if(pl(e)){Fe=!1,Rt.disabled=!0,Tt(ul,"err");return}Tt("Connecting to "+t+"\u2026");try{await ha(il);let n=window.OBSWebSocket&&(window.OBSWebSocket.default||window.OBSWebSocket);if(te)try{await te.disconnect()}catch{}te=new n,te.on("ConnectionClosed",()=>{Fe=!1,Tt("Disconnected from OBS","err"),Rt.disabled=!0}),te.on("RecordStateChanged",o=>{o.outputState==="OBS_WEBSOCKET_OUTPUT_STARTED"&&_e&&(_e(),_e=null),o.outputState==="OBS_WEBSOCKET_OUTPUT_STOPPED"&&p.active&&p.withObs&&!p.finishing&&Ht("Stopped in OBS")});let a=await te.connect(t,xn.value||void 0);Fe=!0;try{let o=await te.call("GetVideoSettings");o&&o.fpsNumerator&&o.fpsDenominator&&(Hr=o.fpsNumerator/o.fpsDenominator)}catch{}Tt("Connected"+(a&&a.obsWebSocketVersion?" \xB7 OBS WebSocket "+a.obsWebSocketVersion:""),"ok"),Gr()}catch(n){Fe=!1,Tt("Could not connect ("+(n&&n.message||n)+"). Is OBS running with its WebSocket server on, and is the password right?","err")}Rt.disabled=!Fe}function hl(){let e=document.getElementById("rec-screen"),t=screen.width,n=screen.height;if(Math.abs(t/n-16/9)<.02){e.innerHTML='<span class="ok">This screen is 16:9 ('+t+"\xD7"+n+"), right for YouTube.</span>";return}let a=[["16:10",1.6],["3:2",1.5],["4:3",4/3],["21:9",21/9],["16:9",16/9]],[o,r]=a.reduce((s,l)=>Math.abs(l[1]-t/n)<Math.abs(s[1]-t/n)?l:s),i=Math.abs(r-t/n)<.005?o:"about "+o;e.innerHTML='<span class="warn">This screen is '+i+" ("+t+"\xD7"+n+"), not 16:9, so the video will have bars or be cropped. Move this window to a 16:9 screen, physical or virtual (say 1920\xD71080), then press F there.</span>"}function yt(){let e=navigator.mediaDevices;if(!window.isSecureContext||!e||!e.getDisplayMedia)return{why:"This page can\u2019t capture itself here. Open Slidetake in Chrome or Edge on a computer."};if(!window.RestrictionTarget&&!window.CropTarget)return{why:"Recording in the browser needs Chrome or Edge (or another Chromium browser) on a computer."};let t=window.MediaRecorder?Fo(o=>MediaRecorder.isTypeSupported(o)):"";if(!t||!navigator.storage||!navigator.storage.getDirectory)return{why:"This browser can\u2019t record video here. Use a recent Chrome or Edge."};let{quality:n,device:a}=Do(screen.width,screen.height,devicePixelRatio||1);return n?{ok:!0,type:t,quality:n}:{why:"This screen gives a "+a[0]+"\xD7"+a[1]+" frame, less than 720p. Use OBS, or a larger screen."}}async function Ke(){ba++,pe&&(cancelAnimationFrame(pe.raf),pe.stream.getTracks().forEach(e=>e.stop()),pe.ctx.close().catch(()=>{}),pe=null,ga.value=0)}async function va(){await Ke();let e=ba;try{let t=ct.value,n=await navigator.mediaDevices.getUserMedia({audio:t?{deviceId:{exact:t}}:!0});if(e!==ba){n.getTracks().forEach(l=>l.stop());return}let a=new AudioContext,o=a.createAnalyser();o.fftSize=512,a.createMediaStreamSource(n).connect(o);let r=new Float32Array(o.fftSize),i=pe={stream:n,ctx:a,raf:0},s=()=>{if(pe!==i)return;o.getFloatTimeDomainData(r);let l=0;for(let c of r)l=Math.max(l,Math.abs(c));ga.value=Math.max(l,ga.value*.85),i.raf=requestAnimationFrame(s)};s()}catch(t){tt.innerHTML='<span class="warn">The microphone isn\u2019t available: '+T(t.message||t.name)+". Allow it in the site settings.</span>"}}async function fl(){try{pe||await va();let e=await navigator.mediaDevices.enumerateDevices(),t=(o,r)=>e.filter(i=>i.kind===o).map((i,s)=>'<option value="'+T(i.deviceId)+'"'+(i.deviceId===r?" selected":"")+">"+T(i.label||(o==="audioinput"?"Microphone ":"Camera ")+(s+1))+"</option>").join(""),n=Fn();Be.innerHTML='<option value="none"'+(n==="none"?" selected":"")+">No camera</option>"+t("videoinput",n),n!=="none"&&Be.value==="none"&&Be.options.length>1&&(Be.selectedIndex=1);let a=U("slidetake:mic")||"";ct.innerHTML=t("audioinput",a),a&&ct.value===a&&pe&&pe.stream.getAudioTracks()[0].getSettings().deviceId!==a&&va()}catch{}}function Fn(){let e=U(Jr());return e||(gl()?U("slidetake:cam")||"default":"none")}function $r(e){J(Jr(),e),e!=="none"&&e!=="default"&&J("slidetake:cam",e)}function bl(){p.camWas=!ee;let e=Fn()!=="none";e!==!ee&&Kt(e,!0)}function Xr(){p.camWas!=null&&(p.camWas!==!ee&&Kt(p.camWas,!0),p.camWas=null)}async function vl(){let e=yt();if(!e.ok)return tt.innerHTML='<span class="warn">'+T(e.why)+"</span>",e;hn&&(tt.innerHTML='<span class="warn">'+T(hn)+"</span>",hn="");let t=Ze.indexOf(e.quality),n=U("slidetake:quality");dt.innerHTML=Ze.slice(t).map(o=>"<option"+(o.name===n?" selected":"")+">"+o.name+"</option>").join("");let a="";try{let{quota:o,usage:r}=await navigator.storage.estimate(),i=Ze.find(s=>s.name===dt.value)||e.quality;a=" Room for about "+Math.floor((o-r)/jo(i))+" minutes of takes."}catch{}return tt.querySelector(".warn")||(tt.innerHTML='<span class="ok">Ready: this screen records up to '+e.quality.name+" in fullscreen."+T(a)+"</span>"),e}function Oa(e){Vr=e,J("slidetake:rec-mode",e),document.querySelectorAll('input[name="rec-mode"]').forEach(t=>{t.checked=t.value===e}),document.getElementById("rec-obs").hidden=e!=="obs",e==="browser"?yn.classList.contains("open")&&(vt(),Nn()):(Ke(),Rt.disabled=!Fe)}function Cn(){if(!mt)return;let e=f.reduce((t,n)=>t+Ye(u.get(n)).length,0);if(document.getElementById("rec-deck-info").innerHTML=T(E.title||(Ee[0]?u.get(Ee[0]).title:"This deck"))+" \xB7 "+f.length+" slides \xB7 "+e+' presses<br><label class="check"><input type="checkbox" id="rec-cam-on"'+(Fn()!=="none"?" checked":"")+"> Include my camera (it turns on when the take starts)</label>",document.getElementById("rec-cam-on").onchange=t=>$r(t.target.checked?U("slidetake:cam")||"default":"none"),(Vr||(yt().ok?"browser":"obs"))==="browser"){Nn();return}Tl(),hl(),bt(yn),Oa("obs")}async function Ra(e,t){return(await(await navigator.storage.getDirectory()).getDirectoryHandle("slidetake-takes",{create:!0})).getDirectoryHandle(e,{create:!!t})}async function Pa(e){try{await(await(await navigator.storage.getDirectory()).getDirectoryHandle("slidetake-takes")).removeEntry(e,{recursive:!0})}catch{}}async function yl(){let e=yt();if(!e.ok)throw new Error(e.why);let t=Ze.find(s=>s.name===dt.value)||e.quality;document.body.classList.add("rec-frame");let n=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:Ct},audio:!1,preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude",monitorTypeSurfaces:"exclude"}),a=n.getVideoTracks()[0],o=()=>n.getTracks().forEach(s=>s.stop());if(!a.restrictTo&&!a.cropTo)throw o(),new Error("Share \u201Cthis tab\u201D to record the slides.");try{window.RestrictionTarget&&a.restrictTo?await a.restrictTo(await RestrictionTarget.fromElement(pa)):await a.cropTo(await CropTarget.fromElement(pa))}catch(s){throw o(),new Error("Chrome could not record just the slides ("+(s.message||s.name)+").")}await a.applyConstraints({width:t.w,height:t.h,frameRate:Ct,resizeMode:"crop-and-scale"}).catch(()=>{});let r;try{let s=U("slidetake:mic");r=await navigator.mediaDevices.getUserMedia({audio:{...s?{deviceId:{ideal:s}}:{},echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1}})}catch(s){throw o(),new Error("The microphone isn\u2019t available ("+(s.message||s.name)+").")}let i=new Date().toISOString().replace(/[:.]/g,"-");p.browser={id:i,display:n,mic:r,track:a,quality:t,type:e.type,stream:new MediaStream([a,...r.getAudioTracks()]),dir:await Ra(i,!0),clips:[],cur:null,chain:Promise.resolve(),error:null},a.addEventListener("ended",()=>{p.active&&!p.finishing&&Ht("Sharing stopped")})}function Qr(){let e=p.browser;e&&(e.display.getTracks().forEach(t=>t.stop()),e.mic.getTracks().forEach(t=>t.stop()),document.body.classList.remove("rec-frame"))}function wl(e){let t=p.browser,n="take-"+t.clips.length+"."+Zn(t.type),a={name:n,rec:null,done:null};t.clips.push(a),e.clip=t.id+"/"+n,t.chain=t.chain.then(async()=>{let o=await(await t.dir.getFileHandle(n,{create:!0})).createWritable(),r=new MediaRecorder(t.stream,{mimeType:t.type,videoBitsPerSecond:t.quality.bitrate,audioBitsPerSecond:rn}),i=Promise.resolve();r.ondataavailable=l=>{l.data.size&&(i=i.then(()=>o.write(l.data)).catch(c=>{t.error=c}))},a.done=new Promise(l=>{r.onstop=async()=>{await i,await o.close().catch(()=>{}),l()}}),await new Promise(l=>{r.onstart=l,r.start(1e3)}),e.t=Math.round(He()),e.cutAt!=null&&(e.lead=Math.max(0,Math.round(e.t-e.cutAt)));let s=t.cur;t.cur=a,a.rec=r,s&&s.rec.state!=="inactive"&&s.rec.stop()}).catch(o=>{t.error=o})}async function jn(e,t){if(p.active||!f.length)return;let n=e==="obs";if(Ke(),e==="browser"){Y||fe(!0);try{await yl()}catch(l){document.body.classList.remove("rec-frame"),Y&&fe(!1),hn=l.name==="NotAllowedError"?"Recording needs this tab shared: press \u25CF Record again and choose Share.":l.message,Nn({setup:!0});return}}vt();let a=t&&f.includes(t.from)?t.from:f[0],o=f[f.indexOf(a)-1]||null;Object.assign(p,{active:!0,withObs:n,counting:!0,paused:!1,finishing:!1,t0:0,pausedMs:0,events:[],outputPath:null,until:t?t.to:null}),e!=="browser"&&(p.browser=null),document.body.classList.add("recording"),Ua();let r=document.getElementById("rec-layout").value;r!=="current"&&r!==G&&zn(r,!0),Y||fe(!0),bl(),o?(document.body.classList.add("no-anim"),u.get(o)._played=!0,Se=!0,j(o,!0,!0),Se=!1,O.getAnimations().forEach(l=>l.finish()),await En(),document.body.classList.remove("no-anim")):(m===a&&(ge=0,he=null,Ae=-1),j(a,!0)),!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen().catch(()=>{});let i=Mt.querySelector(".hint");for(let l=3;l>0;l--)if(i.textContent=(document.fullscreenElement?"":"Press F for fullscreen \xB7 ")+"recording starts after the countdown \xB7 Esc to cancel",Mt.querySelector(".num").textContent=l,Mt.classList.add("show"),await Sn(1e3),!p.active)return;if(Mt.classList.remove("show"),await En(),n){let l=new Promise(c=>{_e=c,setTimeout(()=>{_e&&(_e(),_e=null)},2500)});try{await te.call("StartRecord")}catch(c){za("OBS could not start recording: "+(c&&c.message||c));return}if(await l,!p.active)return}p.counting=!1,p.t0=performance.now();let s=u.get(a);if(o){Ft("slide",a),p.browser&&await p.browser.chain,Dt(s),Se=!0,j(a),Se=!1;return}Dt(s),Ut(!0),Ft("slide",m)}function za(e){if(p.active=!1,p.counting=!1,p.browser){let t=p.browser;t.chain.then(()=>{t.cur&&t.cur.rec.state!=="inactive"&&t.cur.rec.stop()}).then(()=>Pa(t.id)),Qr(),p.browser=null}Mt.classList.remove("show"),document.body.classList.remove("recording"),Y&&fe(!1),Xr(),nt(e)}function Ft(e,t,n){if(!p.active||!p.t0||p.finishing)return;let a=u.get(t),o={id:t,title:a?a.title:t,retake:e==="retake",t:Math.round(He()),obsT:null};n==null&&p.browser&&(n=o.t),n!=null&&(o.cutAt=n,o.lead=Math.max(0,Math.round(o.t-n))),p.events.push(o),p.browser&&wl(o),p.withObs&&Fe&&(te.call("GetRecordStatus").then(r=>{r&&typeof r.outputDuration=="number"&&(o.obsT=r.outputDuration)}).catch(()=>{}),a&&te.call("CreateRecordChapter",{chapterName:(o.retake?"RETAKE \xB7 ":"")+a.title}).catch(()=>{}))}function kl(e){let t=e.key;if((ir.includes(t)||sr.includes(t)||lr.includes(t)||t==="Escape")&&e.preventDefault(),t==="Escape"){p.counting?za("Take cancelled"):Ht("Stopped early");return}if((t==="f"||t==="F")&&!document.fullscreenElement&&document.documentElement.requestFullscreen){e.preventDefault(),document.documentElement.requestFullscreen().catch(()=>{});return}if(!(p.counting||p.finishing||mn)){if(lr.includes(t)){Cl();return}p.paused||(ir.includes(t)?xl():sr.includes(t)&&Sl())}}function xl(){let e=Ye(u.get(m));Math.min(ge,e.length-1)>=e.length-1&&(f.indexOf(m)===f.length-1||m===p.until)?Ht():st(1)}async function Sl(){let e=u.get(m);if(!e||mn)return;let t=m,n=Dr;if(!n||n===t||!u.has(n)){El(e);return}mn=!0;let a=He();document.body.classList.add("no-anim");let o=u.get(n);Se=!0,o._played=!0,j(n,!0,!0),O.getAnimations().forEach(r=>r.finish()),Se=!1,await En(),document.body.classList.remove("no-anim"),Ft("retake",t,a),p.browser&&await p.browser.chain,Dt(e),Se=!0,j(t),Se=!1,!Z&&!O.hidden&&We.used&&Je(),mn=!1}function El(e){Ft("retake",m),ge=0,he=null,Ae=-1,Dt(e),Ut(!0),!Z&&!O.hidden&&We.used?Je():be(),gt()}async function Cl(){if(p.t0)if(p.paused){if(fa.classList.remove("show"),await En(),p.withObs&&await te.call("ResumeRecord").catch(()=>{}),p.browser){let e=p.browser;e.chain=e.chain.then(()=>{e.cur&&e.cur.rec.state==="paused"&&e.cur.rec.resume()})}p.pausedMs+=performance.now()-p.pauseAt,p.paused=!1,Ma(u.get(m))}else{if(p.paused=!0,p.pauseAt=performance.now(),clearTimeout(it),p.withObs&&await te.call("PauseRecord").catch(()=>{}),p.browser){let e=p.browser;e.chain=e.chain.then(()=>{e.cur&&e.cur.rec.state==="recording"&&e.cur.rec.pause()})}fa.classList.add("show")}}async function Ht(e){if(!p.active||p.finishing)return;if(p.counting){za("Take cancelled");return}p.finishing=!0,clearTimeout(it),p.paused&&(p.pausedMs+=performance.now()-p.pauseAt,p.paused=!1,fa.classList.remove("show"));let t=Math.round(He()),n=null;if(p.withObs){await Sn(1200),t=Math.round(He());try{let r=await te.call("GetRecordStatus");r&&typeof r.outputDuration=="number"&&(n=r.outputDuration)}catch{}try{let r=await te.call("StopRecord");p.outputPath=r&&r.outputPath}catch(r){e=(e?e+". ":"")+"OBS did not confirm the stop ("+(r&&r.message||r)+")"}}let a=p.browser;a&&(await Sn(600),await a.chain,t=Math.round(He()),a.cur&&a.cur.rec&&a.cur.rec.state!=="inactive"&&a.cur.rec.stop(),await Promise.all(a.clips.map(r=>r.done)),Qr(),p.browser=null,a.error&&(e=(e?e+". ":"")+"Some of the take could not be saved ("+(a.error.message||a.error.name)+")")),p.active=!1,p.finishing=!1,document.body.classList.remove("recording"),Y&&fe(!1),Xr();let o={key:Ve(),deckTitle:E.title||u.get(f[0]).title,date:new Date().toISOString(),withObs:p.withObs,outputPath:p.outputPath,reason:e||"",total:t,totalObs:n,fps:a?Ct:Hr,...a?{inBrowser:!0,takesId:a.id,quality:a.quality.name,type:a.type}:{},events:p.events.map(r=>({id:r.id,title:r.title,retake:r.retake,t:r.t,obsT:r.obsT,...r.lead?{lead:r.lead}:{},...r.clip?{clip:r.clip}:{}})),picks:{}};if(o.inBrowser){Il(o);return}Da(o),ii(o)}function Ve(){return $e(E.title||(f[0]?u.get(f[0]).title:"deck"))}function Zr(){try{return JSON.parse(U("slidetake:sessions")||"[]")}catch{return[]}}function Da(e){let t=Zr().filter(n=>n.date!==e.date);t.unshift(e),t.slice(12).forEach(n=>{n.takesId&&Pa(n.takesId)}),J("slidetake:sessions",JSON.stringify(t.slice(0,12)))}function Tl(){let e=document.getElementById("rec-sessions"),t=Zr().filter(n=>n.key===Ve()&&!n.inBrowser);e.innerHTML=t.length?"<h3>Earlier takes of this deck</h3>"+t.map((n,a)=>'<div class="row"><button class="btn small" data-session="'+a+'">Review</button><span>'+T(new Date(n.date).toLocaleString())+" \xB7 "+Q(n.totalObs??n.total)+(n.inBrowser?" \xB7 in this browser"+(n.cleaned?" (takes deleted)":""):n.withObs?"":" \xB7 rehearsal")+(n.outputPath?" \xB7 "+T(Qe(n.outputPath)):"")+"</span></div>").join(""):"",e.querySelectorAll("[data-session]").forEach(n=>n.onclick=()=>{vt(),ii(t[+n.dataset.session])})}function pt(e){let t=u.has(e)?Pn(e):[e];return t[Math.min(1,t.length-1)]}function ei(e,t){let n=pt(e);return{sec:n,title:u.has(n)?u.get(n).title:t}}function Fa(){let e=Object.keys(E).filter(t=>t==="tags"||/_tags$/.test(t)).flatMap(t=>[].concat(E[t])).filter(t=>typeof t=="string");return[...new Set(e.map(t=>t.trim()).filter(Boolean))]}function Ll(){return[].concat(E.related||[]).map(e=>{let t=String(e).match(/^\[([^\]]+)\]\(([^)]+)\)$/),n=String(e).split("|");return t?t[1]+": "+t[2]:n.length===2?n[0].trim()+": "+n[1].trim():String(e)})}function ri(){if(E.permalink||E.url)return E.permalink||E.url;let e=E.site||U("slidetake:site");if(!e||!me)return dr();try{let t=new URL(me).pathname.replace(/\/index\.md$/i,"/").replace(/\.md$/i,"/");return new URL(t,e).href}catch{return dr()}}function dr(){if(location.protocol==="file:"||Yr(location.hostname)||/^\/(edit|new|share)\b/.test(location.pathname)||location.hash.includes("deflate:"))return"";let e=new URL(location.href);return e.hash="",["obs","edit","layout","mode"].forEach(t=>e.searchParams.delete(t)),e.href}function ja(e){let t=ti(e),n=document.getElementById("rv-link").value.trim(),a=Ll(),o=Fa(),r=[];E.summary&&r.push(E.summary),n&&r.push("\u{1F4D1} Slides: "+n),t.lines.length>=3&&r.push(`Chapters
`+t.lines.join(`
`)),a.length&&r.push(`Related
`+a.map(i=>"\u2022 "+i).join(`
`)),o.length&&r.push(o.slice(0,3).map(i=>"#"+i.replace(/[^\p{L}\p{N}]+/gu,"")).join(" ")),document.getElementById("rv-yt-desc").value=r.join(`

`),document.getElementById("rv-chapters-note").textContent=(t.dropped?t.dropped+" section"+(t.dropped>1?"s were":" was")+" under 10 seconds and folded into the chapter before, as YouTube requires. ":"")+(t.lines.length<3?"YouTube needs at least three chapters, so none are listed. ":"")+"Final length "+Q(t.length)+"."}function ii(e){P=e,X=null;let t=we(e),n=e.events.filter(r=>r.retake).length,a=e.withObs||e.inBrowser;Ue.classList.toggle("in-browser",!!e.inBrowser),Ue.classList.remove("board"),document.getElementById("rv-title").textContent=(a?"Review the take \xB7 ":"Rehearsal \xB7 ")+e.deckTitle,document.getElementById("rv-render-status").textContent=e.cleaned?"These takes were deleted.":"",document.getElementById("rv-render-btn").disabled=document.getElementById("rv-clean").disabled=!!e.cleaned,document.getElementById("rv-info").textContent=[e.reason,new Date(e.date).toLocaleString(),(a?"recorded ":"ran ")+Q(e.totalObs??e.total),t.size+" slides",n?n+" retake"+(n>1?"s":""):"no retakes",e.inBrowser?e.quality+", in this browser":e.outputPath?"saved to "+e.outputPath:e.withObs?"":"nothing was recorded"].filter(Boolean).join(" \xB7 "),document.getElementById("rv-file").textContent=e.outputPath?" ("+Qe(e.outputPath)+")":"",document.getElementById("rv-yt-title").value=e.deckTitle;let o=an(e);Tn.value=[...Tn.options].reduce((r,i)=>Math.abs(i.value-o)<Math.abs(r.value-o)?i:r).value,document.getElementById("rv-yt-tags").value=Fa().join(", "),document.getElementById("rv-link").value=ri(),x.src&&(e.inBrowser||Oe!==Qe(e.outputPath)&&e.outputPath)&&(x.removeAttribute("src"),x.load(),Oe=""),document.getElementById("rv-novideo").hidden=!!x.src,qt(),bt(Ue),e.inBrowser?V.textContent=e.cleaned?"":"Click a take to preview it.":Pl(e)}function qt(){if(P&&P.board){qe();return}let e=P,t=document.getElementById("rv-list"),n=null;t.innerHTML=[...we(e).values()].map(a=>{let o=e.picks[a.id]??a.takes.length,r=pt(a.id),i=r!==n;n=r;let s=a.takes.map(l=>'<button class="rv-chip'+(o===l.no?" on":"")+'" data-id="'+T(a.id)+'" data-take="'+l.no+'">Take '+l.no+" \xB7 "+Q(l.end-l.start)+"</button>").join("");return'<div class="rv-row'+(i?" sec":"")+'"><div class="t">'+T(a.title)+"<small>"+Q(a.takes[0].start)+'</small></div><div class="rv-chips">'+s+"</div></div>"}).join(""),t.querySelectorAll(".rv-chip").forEach(a=>a.onclick=()=>{e.picks[a.dataset.id]=+a.dataset.take,Da(e),qt();let o=we(e).get(a.dataset.id),r=o&&o.takes[+a.dataset.take-1];if(!r)return;let i=o.title+(o.takes.length>1?" \xB7 take "+r.no:"");if(e.inBrowser){let s=e.events.filter(l=>l.id===a.dataset.id)[r.no-1];s&&s.clip&&Wt([{clip:s.clip,keep:(r.end-r.start)/1e3,title:i}])}else Mn([{start:r.start,end:r.end,title:i}])}),document.getElementById("rv-ffmpeg").value=ni(e,document.getElementById("rv-mode").value),ja(e),si(e)}async function si(e){let t=document.getElementById("rv-final"),n=Xe(e).reduce((a,o)=>a+o.end-o.start,0);if(t.textContent="Final cut "+Q(n),!(!e.inBrowser||e.cleaned))try{let a=0;for(let o of sn(e))a+=(await Bn(o.clip)).size;P===e&&(t.textContent="Final cut "+Q(n)+" \xB7 about "+(a>1e9?(a/1e9).toFixed(1)+" GB":Math.max(1,Math.round(a/1e6))+" MB"))}catch{}}function Mn(e){if(!x.src){Ln=e,V.textContent=wa?"Opening the recording\u2026 it plays when ready.":"Open the recording to preview.";return}Ln=null,X={ranges:e,i:0},V.textContent="\u25B6 "+e[0].title;let t=()=>{x.currentTime=e[0].start/1e3,x.play().catch(n=>{n&&n.name!=="AbortError"&&(V.textContent="Could not play: "+n.message)})};x.readyState>=1?t():x.addEventListener("loadedmetadata",t,{once:!0})}function pr(e){return Array.from({length:e.numberOfChannels},(t,n)=>{let a=new Float32Array(e.numberOfFrames);return e.copyTo(a,{planeIndex:n,format:"f32-planar"}),a})}async function Bn(e){let[t,n]=e.split("/");return(await(await Ra(t)).getFileHandle(n)).getFile()}async function Wt(e,t=0){if(!(!P||P.cleaned||!e.length)){X=null,K={parts:e,i:t};try{let n=await Bn(e[t].clip);x.src&&URL.revokeObjectURL(x.src),x.src=URL.createObjectURL(n),V.textContent="\u25B6 "+e[t].title,await x.play()}catch(n){if(n&&n.name==="AbortError")return;K=null,V.textContent=n&&n.name==="NotFoundError"?"This take is no longer in the browser.":"Could not play this take: "+(n&&n.message||n)}}}async function Ml(e){if(!e.where)return!0;try{let t=await _a("video-folder");return!t||t.name!==e.where||await t.queryPermission({mode:"readwrite"})!=="granted"||await t.getFileHandle(e.name),!0}catch{return!1}}async function li(e){let t=P;if(!t||!t.inBrowser||t.cleaned)return;let n=sn(t);if(!n.length){re.textContent="No slide has a take yet: nothing to save.";return}let a=JSON.stringify([n.map(d=>[d.clip,Math.round(d.keep*1e3)]),ut(),t.type]),o=t.board&&M.lastDownload;if(!e&&o&&o.sig===a&&await Ml(o)){re.innerHTML="Already saved in "+T(ur(o))+'. A new video is made only when a take or Auto volume changes. <button class="btn small" id="rv-save-again">Save another copy</button>',document.getElementById("rv-save-again").onclick=()=>li(!0);return}let r=Zn(t.type||"")==="mp4",i=Ve()+" "+Bl(new Date)+"."+(r?"mp4":"webm"),s=null,l="";try{let d=await ci(!1);d&&(s=await(await d.getFileHandle(i,{create:!0})).createWritable(),l=d.name)}catch(d){if(d&&d.name==="AbortError")return}let c=document.getElementById("rv-render-btn");c.disabled=!0,re.textContent="Preparing the download\u2026";try{let d=await import(ml),I=s?new d.StreamTarget(s):new d.BufferTarget,v=new d.Output({format:r?new d.Mp4OutputFormat({fastStart:s?!1:"in-memory"}):new d.WebMOutputFormat,target:I}),b=1,k="";if(ut()){let S=null;for(let[D,N]of n.entries()){re.textContent="Measuring the volume "+(D+1)+" of "+n.length+"\u2026";let oe=await new d.Input({source:new d.BlobSource(await Bn(N.clip)),formats:d.ALL_FORMATS}).getPrimaryAudioTrack();if(oe)for await(let ie of new d.AudioSampleSink(oe).samples(0,N.keep))S=S||_o(ie.sampleRate,ie.numberOfChannels),S.add(pr(ie)),ie.close()}if(S){let D=S.result(),N=Uo(D);b=Ho(N),k=isFinite(D.integrated)?Math.abs(N)<.05?" \xB7 loudness "+D.integrated.toFixed(1)+" LUFS, left as is":" \xB7 loudness "+D.integrated.toFixed(1)+" \u2192 "+(D.integrated+N).toFixed(1)+" LUFS":""}}let h=b!==1,B=null,z=null,w=0,C=-1,g=-1;for(let[S,D]of n.entries()){re.textContent="Joining take "+(S+1)+" of "+n.length+"\u2026";let N=new d.Input({source:new d.BlobSource(await Bn(D.clip)),formats:d.ALL_FORMATS}),H=await N.getPrimaryVideoTrack(),oe=await N.getPrimaryAudioTrack();if(!H)throw new Error(D.title+" has no video");B||(B=new d.EncodedVideoPacketSource(await H.getCodec()),v.addVideoTrack(B,{frameRate:Ct}),oe&&(z=h?new d.AudioSampleSource({codec:r?"aac":"opus",bitrate:rn}):new d.EncodedAudioPacketSource(await oe.getCodec()),v.addAudioTrack(z)),await v.start());let ie={decoderConfig:await H.getDecoderConfig()},ce=0,ve=!0;for await(let q of new d.EncodedPacketSink(H).packets())q.timestamp>=D.keep||(C=ln(C,w+q.timestamp),await B.add(q.clone({timestamp:C}),ve&&S===0?ie:void 0),ve=!1,ce=Math.max(ce,q.timestamp+q.duration));if(oe&&z&&h)for await(let q of new d.AudioSampleSink(oe).samples(0,ce)){if(q.timestamp+q.duration>ce+1e-4){q.close();continue}g=ln(g,w+q.timestamp);let de=pr(q),Ce=q.numberOfFrames,Ga=new Float32Array(Ce*de.length);de.forEach((Ci,Ti)=>{for(let Jt=0;Jt<Ce;Jt++)Ga[Ti*Ce+Jt]=Ci[Jt]*b}),await z.add(new d.AudioSample({data:Ga,format:"f32-planar",numberOfChannels:de.length,sampleRate:q.sampleRate,timestamp:g})),q.close()}else if(oe&&z){let q={decoderConfig:await oe.getDecoderConfig()},de=!0;for await(let Ce of new d.EncodedPacketSink(oe).packets())Ce.timestamp+Ce.duration>ce+1e-4||(g=ln(g,w+Ce.timestamp),await z.add(Ce.clone({timestamp:g}),de&&S===0?q:void 0),de=!1)}w+=ce}if(re.textContent="Finishing\u2026",await v.finalize(),!s){let S=document.createElement("a");S.href=URL.createObjectURL(new Blob([I.buffer],{type:r?"video/mp4":"video/webm"})),S.download=i,S.click(),setTimeout(()=>URL.revokeObjectURL(S.href),1e4)}let L={sig:a,name:i,where:l};t.board&&(M.lastDownload=L,Gt()),re.textContent="Saved in "+ur(L)+" ("+Q(w*1e3)+k+")."}catch(d){re.textContent="Could not save the video: "+(d&&d.message||d),s&&s.abort().catch(()=>{})}finally{c.disabled=!!t.cleaned}}async function ci(e){if(!window.showDirectoryPicker)return null;let t=e?null:await _a("video-folder");if(t){let n=await t.queryPermission({mode:"readwrite"});if(n==="prompt"&&(n=await t.requestPermission({mode:"readwrite"})),n==="granted")return t}return t=await window.showDirectoryPicker({id:"slidetake-videos",mode:"readwrite",startIn:"videos"}),fi("video-folder",t),t}function Na(){let e=di();if(M&&hr===e)return M;hr=e;try{M=JSON.parse(U(e)||"null")}catch{M=null}return(!M||!Array.isArray(M.takes))&&(M={takes:[],picks:{},type:"",quality:""}),M}function Il(e){Na();let t=Yo(e,e.takesId,pi());t.forEach(n=>{delete M.picks[n.id]}),M.takes.push(...t),Object.assign(M,{type:e.type,quality:e.quality}),Gt(),Te.clear(),Nn({note:(e.reason?e.reason+". ":"")+t.length+" new take"+(t.length===1?"":"s")+" on the board."})}function ui(){let e=Ko(Na(),pi()),t=Object.assign(Vo(e),{board:!0,inBrowser:!0,withObs:!1,type:M.type||"video/mp4",quality:M.quality||"",deckTitle:E.title||(f[0]?u.get(f[0]).title:"Deck"),date:new Date().toISOString()});return{rows:e,sess:t}}function hi(){tt.innerHTML="",vl().then(e=>{e.ok?fl().then(An):An()})}function An(){let e=ct.selectedOptions[0],t=yt(),n=Be.selectedOptions[0];document.getElementById("rv-setup-sum").textContent=t.ok?[dt.value,n?n.textContent:Fn()==="none"?"No camera":"Camera",e&&e.textContent].filter(Boolean).join(" \xB7 "):"not ready"}function Nn(e={}){if(!mt)return;vt(),Na(),Ue.classList.add("in-browser","board"),document.getElementById("rv-title").textContent="Takes \xB7 "+(E.title||(f[0]?u.get(f[0]).title:"Deck")),document.getElementById("rv-yt-title").value=E.title||(f[0]?u.get(f[0]).title:""),document.getElementById("rv-yt-tags").value=Fa().join(", "),document.getElementById("rv-link").value=ri(),x.src&&(URL.revokeObjectURL(x.src),x.removeAttribute("src"),x.load()),X=null,K=null,re.textContent="",qe(),bt(Ue);let t=yt().ok;ht.open=!!e.setup||!t||!M.takes.length,ht.open?hi():An(),V.textContent=e.note||(M.takes.length?"Click a take to preview it.":"Nothing recorded yet. Press \u25CF Record to record the deck.")}function qe(){let{rows:e,sess:t}=ui();P=t;let n=document.getElementById("rv-list"),a=null;n.innerHTML=e.map(c=>{let d=pt(c.id),I=d!==a;a=d;let v=T(c.id),b={slide:"Recorded before this slide changed",before:"Starts with the entry from the slide before, which has changed or is gone: record this slide again"},k=c.takes.length?c.takes.map(h=>'<button class="rv-chip'+(c.pick===h.uid?" on":"")+(h.outdated?' outdated" title="'+b[h.outdated]:"")+'" data-id="'+v+'" data-uid="'+T(h.uid)+'">Take '+h.no+" \xB7 "+Q(h.ms)+"</button>").join("")+(c.pick?"":'<span class="rv-none">'+(c.takes.some(h=>h.outdated==="before")&&!c.takes.some(h=>h.outdated==="slide")?"The slide before changed: record again":"Changed since: record again")+"</span>"):'<span class="rv-none">No take yet</span>';return'<div class="rv-row with-sel'+(I?" sec":"")+(Te.has(c.id)?" selected":"")+'"><input type="checkbox" class="rv-sel" data-id="'+v+'"'+(Te.has(c.id)?" checked":"")+' aria-label="Select '+T(c.title)+' to record"><div><div class="t">'+T(c.title)+'</div><div class="rv-chips">'+k+"</div></div></div>"}).join(""),n.querySelectorAll(".rv-chip").forEach(c=>c.onclick=()=>{M.picks[c.dataset.id]=c.dataset.uid,Gt(),qe();let d=e.find(v=>v.id===c.dataset.id),I=d&&d.takes.find(v=>v.uid===c.dataset.uid);I&&Wt([{clip:I.clip,keep:I.ms/1e3,title:d.title+" \xB7 take "+I.no}])}),n.querySelectorAll(".rv-sel").forEach(c=>c.addEventListener("click",d=>{(d.shiftKey?Jo(f,mr,c.dataset.id):[c.dataset.id]).forEach(v=>{c.checked?Te.add(v):Te.delete(v)}),mr=c.dataset.id,qe()}));let o=ea(f,Te),r=yt().ok;document.getElementById("rv-rec").disabled=!r;let i=document.getElementById("rv-sel-note");if(o){let c=f.indexOf(o.to)-f.indexOf(o.from)+1;i.innerHTML="Only the "+c+"/"+f.length+" selected slide"+(c===1?"":"s")+" will be recorded"+(c>1?" ("+T(u.get(o.from).title)+" \u2192 "+T(u.get(o.to).title)+")":"")+' \xB7 <button id="rv-sel-clear">Clear</button>',document.getElementById("rv-sel-clear").onclick=()=>{Te.clear(),qe()}}else i.textContent="";document.getElementById("rv-render-btn").disabled=document.getElementById("rv-play-final").disabled=!t.events.length;let s=e.filter(c=>c.pick).length,l=e.filter(c=>c.takes.length&&!c.pick).length;document.getElementById("rv-info").textContent=M.takes.length?[M.takes.length+" take"+(M.takes.length===1?"":"s"),s+" of "+e.length+" slides ready",l?l+" to record again":"",M.quality?M.quality+", in this browser":""].filter(Boolean).join(" \xB7 "):f.length+" slides, nothing recorded yet",ja(t),si(t)}async function Ol(e){for(let n of e)try{let[a,o]=n.clip.split("/");await(await Ra(a)).removeEntry(o)}catch{}let t=new Set(e.map(n=>n.uid));M.takes=M.takes.filter(n=>!t.has(n.uid)),Object.keys(M.picks).forEach(n=>{t.has(M.picks[n])&&delete M.picks[n]}),Gt(),x.src&&(URL.revokeObjectURL(x.src),x.removeAttribute("src"),x.load()),K=null,qe()}function mi(e){return new Promise((t,n)=>{let a=indexedDB.open(e||"slidetake",1);a.onupgradeneeded=()=>a.result.createObjectStore("kv"),a.onsuccess=()=>t(a.result),a.onerror=()=>n(a.error)})}async function _a(e){let t=async n=>{let a=await mi(n);return await new Promise(o=>{let r=a.transaction("kv").objectStore("kv").get(e);r.onsuccess=()=>o(r.result),r.onerror=()=>o(null)})};try{return await t()??await t("markcast")??await t("traverse")??null}catch{return null}}async function fi(e,t){try{(await mi()).transaction("kv","readwrite").objectStore("kv").put(t,e)}catch{}}async function _n(e){wa=!0;try{return await Rl(e)}finally{wa=!1}}async function Rl(e){let t=await e.getFile();for(let n=0;n<10;n++){await new Promise(o=>setTimeout(o,1e3));let a=await e.getFile();if(a.size===t.size&&a.lastModified===t.lastModified)return a;t=a}return t}function Yt(e,t,n){x.src&&URL.revokeObjectURL(x.src),Bt=t||null,n||(ya=0),x.src=URL.createObjectURL(e),Oe=e.name,document.getElementById("rv-novideo").hidden=!0,V.textContent="Loaded "+e.name+". Click a take to preview it.",Ln?Mn(Ln):n&&X&&Mn(X.ranges.slice(X.i)),P&&(document.getElementById("rv-ffmpeg").value=ni(P,document.getElementById("rv-mode").value))}async function Pl(e){let t=Qe(e.outputPath);if(!(!t||!window.showDirectoryPicker)&&!(Oe===t&&x.src))try{let n=await _a("obs-folder");if(!n||await n.queryPermission({mode:"read"})!=="granted")return;let a=await n.getFileHandle(t);V.textContent="Opening "+t+"\u2026",Yt(await _n(a),a)}catch{}}function nt(e,t){if(!p.active){if(clearTimeout(fn),!O.hidden&&!O.classList.contains("live")){It.classList.remove("show"),bi.textContent=e,O.classList.add("msg"),t||(fn=setTimeout(vi,9e3));return}It.textContent=e,It.classList.add("show"),t||(fn=setTimeout(()=>It.classList.remove("show"),9e3))}}function vi(){bi.textContent="PIP camera",O.classList.remove("msg")}function Ua(){clearTimeout(fn),It.classList.remove("show"),vi()}function la(){let e=!1;try{e=window.top!==window.self}catch{e=!0}return e?" This page is running inside a preview frame that may not allow cameras. Open Slidetake directly in Chrome (from localhost or as a file).":window.isSecureContext?" Allow camera access for this page in the browser\u2019s site settings (the icon at the left of the address bar), then try again.":" Browsers only allow cameras on secure pages. Open it from http://localhost or as a local file in Chrome."}function Ha(){Z&&Z.getTracks().forEach(t=>t.stop()),Z=null;let e=O.querySelector("video");e&&e.remove()}async function Je(){if(!(Z||ee)){{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){nt("Camera not available on this page."+la(),!0);return}if(xe.disabled)return;xe.disabled=!0,nt("Waiting for camera permission \u2014 check the browser prompt near the address bar.",!0);try{let t=U("slidetake:cam");Z=await navigator.mediaDevices.getUserMedia({video:{...t?{deviceId:{ideal:t}}:{},width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30}},audio:!1}),Ua()}catch(t){let n=t&&t.name;nt(n==="NotAllowedError"||n==="SecurityError"?"Camera access was blocked."+la():n==="NotFoundError"||n==="OverconstrainedError"?"No camera was found. Check that a webcam is connected.":n==="NotReadableError"?"The camera is busy \u2014 close other apps using it (Zoom, OBS, FaceTime) and try again.":"Could not start the camera"+(n?" ("+n+")":"")+"."+la(),!0);return}finally{xe.disabled=!1,qa()}Z.getVideoTracks().forEach(t=>t.addEventListener("ended",()=>{Ha(),bn(),be()}));let e=document.createElement("video");e.autoplay=!0,e.muted=!0,e.playsInline=!0,e.srcObject=Z,O.appendChild(e)}bn(),be()}}function qa(){xe.querySelector("svg")||(xe.innerHTML=zl+'<span class="lbl"> Camera</span>'),xe.classList.toggle("on",!ee),xe.setAttribute("aria-pressed",String(!ee)),xe.title=ee?"Camera is off for every slide (C)":"Camera is on and follows the deck (C)"}function Kt(e,t){e&&!mt||(ee=!e,ee&&(Ha(),Ua()),he=null,Ae=-1,ge=Math.min(ge,Math.max(0,Ye(u.get(m)).length-1)),qa(),bn(),Ut(),gt(),be(),!Y&&!t&&nt(e?"Camera on \u2014 slides follow their camera settings.":"Camera off \u2014 camera settings are ignored and slides use the whole screen."),e&&Je())}function yi(){document.body.classList.remove("idle"),clearTimeout(fr),Y&&(fr=setTimeout(()=>document.body.classList.add("idle"),2e3))}function jt(e,t){at.textContent=e,at.classList.add("show"),clearTimeout(br),br=setTimeout(()=>at.classList.remove("show"),t||2500)}function ka(e,{keepObs:t=!0,keepEdit:n=!0,slide:a=""}={}){let o=new URL(xo(e),location.origin);return new URLSearchParams(location.search).forEach((r,i)=>{i==="src"||i==="obs"&&!t||i==="edit"&&!n||o.searchParams.set(i,r)}),a&&(o.hash=a),o.href.replace(o.pathname,o.pathname.replace(/%40/g,"@"))}async function Fl(e){let t={keepObs:!1,keepEdit:!1,slide:e};if(y.kind==="source")return{link:ka(y.source,t),inside:!1};if(y.kind==="copy"&&tn(A)&&["url","gist","builtin"].includes(A.origin.kind))return{link:ka(A.origin,t),inside:!1};let a=y.kind==="share"?y.data:await Eo(ne.value),o=new URLSearchParams(location.search);return["src","obs","edit"].forEach(r=>o.delete(r)),{link:location.origin+"/share"+(o.toString()?"?"+o:"")+Jn(a,e),inside:!0}}function jl(){let e=U("slidetake:draft");if(!e||e===Un)return null;let t=Zt(e,{kind:"file",name:"your earlier draft"},{exported:!0});J("slidetake:copy",JSON.stringify(t));try{localStorage.removeItem("slidetake:draft")}catch{}return t}function Vt(){J("slidetake:copy",JSON.stringify(A))}function wt(){if(_)return;let e;if(Wa())e='<span class="mine">'+T(le.file)+'</span> <span class="ro">\xB7 on this computer, saved as you type</span>';else if(y.kind==="copy")e='<span class="mine">Your copy of '+T(ye(A.origin))+"</span>"+(en(A)?' <span class="edited">\xB7 edited</span>':"");else{let n=y.kind==="share"?"a shared deck":ye(y.source);e='<span class="mine">'+T(n.charAt(0).toUpperCase()+n.slice(1))+'</span> <span class="ro">\xB7 read-only, typing makes your copy</span>'}document.getElementById("doc-state").innerHTML=e,Pe.classList.toggle("unsaved",y.kind==="copy"&&en(A)),document.getElementById("btn-reset").hidden=!(y.kind==="copy"&&!tn(A));let t=document.getElementById("continue");t.hidden=y.kind==="copy"||!A,A&&(t.textContent="Your copy \u2192",t.title="Continue your copy of "+ye(A.origin))}function wi(e){return!A||!en(A)?!0:confirm("Your copy of "+ye(A.origin)+" has edits you haven't saved or shared. Replace it with "+e+"?")}function ki(){let e=new URLSearchParams(location.search);return e.delete("src"),e.delete("template"),"/edit"+(e.toString()?"?"+e:"")}function Nl(){let e=y.kind==="share"?{kind:"shared"}:y.source;return wi("a copy of "+ye(e))?(A=Zt(y.text,e),y={kind:"copy"},history.pushState(null,"",ki()+(m&&m!==f[0]?"#"+encodeURIComponent(m):"")),jt("Editing your own copy of "+ye(e)+". The original is unchanged.",4e3),!0):(ne.value=y.text,!1)}function _l(){y={kind:"copy"},history.pushState(null,"",ki()),Pe.classList.contains("collapsed")&&Dn(),ne.value=A.text,lt(!0),wt()}function Wa(){return!!(le&&y&&y.kind==="source"&&y.source.kind==="url"&&new URL(y.source.url,location.href).pathname===le.deck)}function Ul(e){fetch(le.save,{method:"PUT",body:e}).catch(()=>jt("Could not save "+le.file+": is npx slidetake still running?",6e3))}async function Hl(e){if(e.kind==="builtin")return gn[e.id==="help"?"docs":e.id]??gn.home;if(e.kind==="gist"){let n=await fetch("https://api.github.com/gists/"+encodeURIComponent(e.id));if(!n.ok)throw new Error(n.status===404?"no such gist":n.status+" "+n.statusText);let a=Object.values((await n.json()).files||{}),o=a.find(r=>r.filename===e.file)||a.find(r=>/\.(md|markdown)$/i.test(r.filename))||a[0];if(!o)throw new Error("the gist has no files");return me=o.raw_url,o.truncated?await(await fetch(o.raw_url)).text():o.content}let t=await fetch(e.url);if(!t.ok)throw new Error(t.status===404?"not found":t.status+" "+t.statusText);return me=new URL(e.url,location.href).href,await t.text()}function wr(){return y={kind:"source",source:{kind:"builtin",id:"home"},text:gn.home},y.text}async function ql(){if(le&&$.page==="source"&&$.source.kind==="builtin"&&$.source.id==="home"&&location.pathname==="/"&&($.source={kind:"url",url:le.deck}),_)return me=_.base||location.href,y={kind:"source",source:{kind:"url",url:me},text:fo(_.settings||{})+String(_.markdown||"")},y.text;if($.page==="edit"){if(A)return y={kind:"copy"},A.text;history.replaceState(null,"","/new"+location.search),$.page="pick"}if($.page==="pick")return bt(document.getElementById("new-dialog")),y={kind:"source",source:{kind:"builtin",id:"template:blank"},text:gn["template:blank"]},y.text;if($.page==="share")try{let e=await Co($.data);return y={kind:"share",data:$.data,text:e},e}catch{return jt("This link's deck is damaged or cut short, so it could not be opened.",6e3),wr()}try{let e=await Hl($.source);return y={kind:"source",source:$.source,text:e},e}catch(e){return Pt.textContent="Could not load the deck ("+e.message+")",jt("Could not load "+ye($.source)+": "+e.message,6e3),wr()}}var _,le,kr,mt,ft,gn,ne,F,ae,ta,Xo,Qi,Pt,ca,Zi,Pe,dn,es,ot,na,se,da,ts,ns,as,os,rs,is,zt,u,f,Ee,m,Ea,G,Y,E,ee,Z,Le,O,pa,R,Ot,Qo,ze,Zo,ge,he,Ae,We,ws,ks,Es,Br,oa,Ls,me,tr,Rs,Ps,zs,nr,js,pn,Ns,Us,ra,De,ia,je,Ie,Zs,it,ue,Dr,Se,Ne,ke,un,sa,et,rr,il,ir,sr,lr,yn,Ue,Mt,fa,wn,kn,xn,Aa,cr,Rt,te,Fe,_e,Hr,p,Sn,En,sl,Ia,ll,Wr,Yr,ul,ml,Be,ct,dt,ga,tt,Vr,hn,pe,ba,gl,Jr,mn,Oe,ti,ni,ai,ut,oi,P,X,x,V,Tn,Ln,K,re,ur,Bl,M,hr,mr,Te,di,Gt,Al,pi,ht,Bt,ya,wa,At,gi,xe,It,fn,bi,zl,fr,Re,gr,at,br,Dl,xa,Sa,vr,In,$,yr,y,A,xi=W(()=>{"use strict";Ja();$a();Qa();eo();no();oo();io();lo();$t();bo();wo();Kn();$n();Mo();Ao();No();qo();$o();on();_=window.SLIDETAKE||null,le=window.SLIDETAKE_LOCAL||null,kr=document.querySelector("header .mark .logo").outerHTML;document.documentElement.classList.toggle("embed",!!_);mt=!_||_.recording===!0||new URLSearchParams(location.search).has("obs");document.documentElement.classList.toggle("no-record",!mt);ft=window.matchMedia("(prefers-reduced-motion: reduce)").matches,gn={home:Un,docs:Xa,features:Za,privacy:to,showcase:co,"template:blank":ao,"template:talk":ro,"template:recording":so},ne=document.getElementById("editor"),F=document.getElementById("stage"),ae=document.getElementById("world"),ta=document.getElementById("connectors"),Xo=document.getElementById("breadcrumbs"),Qi=document.getElementById("status-count"),Pt=document.getElementById("status-err"),ca=document.getElementById("mm-svg"),Zi=document.getElementById("mm-label"),Pe=document.getElementById("editor-pane"),dn=540,es=96,ot=440,na=720,se=960,da=180,ts=540,ns=100,as=110,os=420,rs=.35,is=1,zt=parseFloat(U("slidetake:slideSize"))||.92,u=new Map,f=[],Ee=[],m=null,Ea=["focus","path","radial","tree"],G="path",Y=!1,E={},ee=!0,Z=null,Le=document.getElementById("brand"),O=document.getElementById("pip"),pa=document.getElementById("stage-wrap"),R={x:0,y:0,zoom:.6},Ot=null;Qo={accent:"--accent",accentSoft:"--accent-teal",line:"--accent-line",ring:"--accent-ring",header:"--header-bg",headerText:"--header-ink",onAccent:"--on-accent"};ze=null;Zo=new URLSearchParams(location.search).get("mode");ge=0;he=null,Ae=-1,We=null;ws=new Set("svg g defs symbol use path rect circle ellipse line polyline polygon text tspan textPath title desc marker linearGradient radialGradient stop clipPath mask pattern filter feGaussianBlur feOffset feBlend feFlood feComposite feMerge feMergeNode feColorMatrix feDropShadow".split(" ")),ks=0;Es=e=>e.querySelector("img")&&!e.textContent.trim()&&[...e.children].every(t=>/^(IMG|BR)$/.test(t.tagName));Br=["dot","d2","echarts","svg"].map(e=>":scope > code.language-"+e).join(", "),oa=e=>!!e.querySelector("img")&&!e.textContent.trim(),Ls=e=>e.children.length===1&&(e.children[0].tagName==="PRE"&&!!e.children[0].querySelector(Br)||e.children[0].matches("div.diagram"));me=null;tr=null;Rs="https://cdn.jsdelivr.net/npm/@viz-js/viz@3.4.0/lib/viz-standalone.js",Ps="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js",zs={dark:{palette:["#60a5fa","#f472b6","#a78bfa","#fb923c","#facc15","#a1a1aa"],text:"#e4e4e7",muted:"#a1a1aa",line:"#3f3f46",split:"#27272a",tip:"#18181b"},light:{palette:["#2563eb","#db2777","#7c3aed","#ea580c","#ca8a04","#71717a"],text:"#27272a",muted:"#71717a",line:"#d4d4d8",split:"#e4e4e7",tip:"#ffffff"}};nr=new Set;js="https://esm.sh/@terrastruct/d2@0.1.33",pn=null,Ns={dark:{N1:"#e4e4e7",N2:"#a1a1aa",N3:"#a1a1aa",N4:"#323238",N5:"#27272a",N6:"#18181b",N7:"#09090b"},light:{N1:"#27272a",N2:"#71717a",N3:"#71717a",N4:"#e4e4e7",N5:"#e4e4e7",N6:"#f4f4f5",N7:"#ffffff"}};Us=e=>/d2-config\s*:/.test(e)?e:`vars: {
  d2-config: {
    layout-engine: elk
  }
}
`+e,ra={};De=0,ia=null;je=document.getElementById("progress");je.innerHTML="<b></b><i></i>";Ie={start:0,timer:null};Zs=["x","y","xPercent","yPercent","scale","scaleX","scaleY","rotation","rotate","skewX","skewY"];it=null;ue=null,Dr=null,Se=!1;Ne=null;ke=null;ca.addEventListener("click",e=>{let t=e.target.closest("circle");t&&!p.active&&j(t.dataset.id)});un=null;ne.addEventListener("input",()=>{if(Wa()){y.text=ne.value,clearTimeout(un),un=setTimeout(()=>{Ul(ne.value),lt(!0)},300);return}y.kind!=="copy"&&!Nl()||(A.text=ne.value,wt(),clearTimeout(un),un=setTimeout(()=>{Vt(),lt(!0)},300))});document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>{e.addEventListener("click",()=>{e.dataset.mode!==G&&zn(e.dataset.mode)})});(function(){let e=new Map,t=0,n=!1,a=null,o=()=>{let[i,s]=[...e.values()];return Math.hypot(i.x-s.x,i.y-s.y)||1};F.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||p.active||i.target.closest("a, pre, code, input, textarea")||(e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t=0,n=!1,e.size===2&&(a={d:o(),zoom:R.zoom}))}),window.addEventListener("pointermove",i=>{let s=e.get(i.pointerId);if(!s)return;let l=i.clientX-s.x,c=i.clientY-s.y;e.set(i.pointerId,{x:i.clientX,y:i.clientY}),t+=Math.abs(l)+Math.abs(c),!n&&t>5&&(n=!0,La(),F.classList.add("dragging")),n&&(e.size===2&&a?R.zoom=_r(a.zoom*o()/a.d):(R.x-=l/R.zoom,R.y-=c/R.zoom),rt())});let r=i=>{e.delete(i.pointerId),e.size<2&&(a=null),e.size||F.classList.remove("dragging")};window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),F.addEventListener("click",i=>{n&&(i.stopPropagation(),i.preventDefault(),n=!1)},!0)})();F.addEventListener("wheel",e=>{e.preventDefault(),!p.active&&Ur(Math.exp(-e.deltaY*(e.ctrlKey?.01:.0015)),e.clientX,e.clientY)},{passive:!1});document.getElementById("nav-prev").onclick=()=>st(-1);document.getElementById("nav-next").onclick=()=>st(1);document.getElementById("btn-open").onclick=()=>document.getElementById("file-input").click();document.getElementById("file-input").addEventListener("change",e=>{let t=e.target.files[0];if(!t)return;let n=new FileReader;n.onload=()=>{wi("a copy of "+t.name)&&(A=Zt(String(n.result),{kind:"file",name:t.name},{exported:!0}),Vt(),me=null,m=null,_l())},n.readAsText(t),e.target.value=""});document.getElementById("btn-save").onclick=()=>{let e=new Blob([ne.value],{type:"text/markdown"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=(Ee[0]?$e(u.get(Ee[0]).title):"deck")+".md",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1e3),y.kind==="copy"&&(A.exported=A.text,Vt(),wt())};document.getElementById("btn-reset").onclick=()=>{y.kind!=="copy"||tn(A)||confirm("Discard your edits and go back to "+ye(A.origin)+" as it was?")&&(A.text=A.originText,Vt(),ne.value=A.text,m=null,lt(!0),wt())};document.getElementById("btn-edit-toggle").onclick=Dn;sa=document.querySelector("main"),et=document.getElementById("editor-resizer"),rr=parseFloat(U("slidetake:editorWidth"));rr&&Pe.style.setProperty("--editor-w",rr+"px");et.addEventListener("pointerdown",e=>{e.preventDefault(),et.setPointerCapture(e.pointerId),sa.classList.add("resizing");let t=sa.getBoundingClientRect().right,n=o=>{let r=Math.round(Math.max(280,Math.min(window.innerWidth*.75,t-o.clientX)));Pe.style.setProperty("--editor-w",r+"px")},a=()=>{sa.classList.remove("resizing"),et.removeEventListener("pointermove",n),J("slidetake:editorWidth",String(Pe.getBoundingClientRect().width))};et.addEventListener("pointermove",n),et.addEventListener("pointerup",a,{once:!0})});et.addEventListener("dblclick",()=>{Pe.style.removeProperty("--editor-w");try{localStorage.removeItem("slidetake:editorWidth")}catch{}});document.getElementById("btn-mode").onclick=Sr;document.getElementById("btn-present").onclick=()=>fe(!Y);il="https://cdn.jsdelivr.net/npm/obs-websocket-js@5.0.5/dist/obs-ws.min.js",ir=["ArrowRight","PageDown"," ","ArrowDown","Enter"],sr=["ArrowLeft","PageUp","ArrowUp","r","R"],lr=["b","B","."],yn=document.getElementById("rec-dialog"),Ue=document.getElementById("review"),Mt=document.getElementById("rec-countdown"),fa=document.getElementById("rec-paused"),wn=document.getElementById("obs-host"),kn=document.getElementById("obs-port"),xn=document.getElementById("obs-pass"),Aa=document.getElementById("obs-remember"),cr=document.getElementById("obs-status"),Rt=document.getElementById("rec-start"),te=null,Fe=!1,_e=null,Hr=null,p={active:!1,withObs:!1,counting:!1,paused:!1,finishing:!1,t0:0,pauseAt:0,pausedMs:0,events:[],outputPath:null,browser:null},Sn=e=>new Promise(t=>setTimeout(t,e)),En=()=>Promise.race([new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),Sn(100)]);sl="G-3S9FY4MQLS",Ia=document.getElementById("analytics-dialog"),ll=()=>U("slidetake:analytics")!=="off";Ia.querySelectorAll("[data-analytics]").forEach(e=>e.onclick=()=>cl(e.dataset.analytics==="on"));Wr=document.getElementById("btn-analytics");Wr.hidden=!/^(www\.)?slidetake\.com$/.test(location.hostname);Wr.onclick=()=>{qr(),bt(Ia)};document.querySelectorAll(".modal").forEach(e=>{e.addEventListener("click",t=>{(t.target===e||t.target.closest("[data-close]"))&&e.classList.remove("open")})});document.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",()=>{let t=document.getElementById(e.dataset.copy);t.select(),(navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).catch(()=>document.execCommand("copy")),e.textContent="Copied",setTimeout(()=>{e.textContent="Copy"},1500)}));Yr=e=>/^(localhost|127(\.\d+){3}|\[?::1\]?)$/i.test(e);ul="This page is served over https, and browsers block it from reaching OBS on another computer (OBS only offers plain ws://). Run OBS on this computer and use localhost, or open Slidetake from a local copy: download dist/index.html from github.com/slidetake/slidetake and serve it with python3 -m http.server.";document.getElementById("obs-connect").onclick=Kr;Aa.addEventListener("change",Gr);ml="https://cdn.jsdelivr.net/npm/mediabunny@1.64.0/+esm",Be=document.getElementById("rec-cam"),ct=document.getElementById("rec-mic"),dt=document.getElementById("rec-quality"),ga=document.getElementById("rec-meter"),tt=document.getElementById("rec-browser-check"),Vr=U("slidetake:rec-mode")||"",hn="",pe=null;ba=0;ct.onchange=()=>{J("slidetake:mic",ct.value),va()};Be.onchange=()=>{$r(Be.value),Be.value!=="none"&&Z&&(Ha(),Je()),An()};gl=()=>(E.pip||"none").toLowerCase()!=="none"||!!E.camera||[...u.values()].some(e=>e.camera),Jr=()=>"slidetake:rec-cam:"+Ve();dt.onchange=()=>J("slidetake:quality",dt.value);document.querySelectorAll('input[name="rec-mode"]').forEach(e=>e.onchange=()=>Oa(e.value));yn.addEventListener("click",e=>{(e.target===yn||e.target.closest("[data-close]"))&&Ke()});document.getElementById("btn-record").onclick=Cn;Rt.onclick=()=>jn("obs");document.getElementById("rec-rehearse").onclick=()=>{Ke(),jn("rehearse")};mn=!1;Oe="";ti=e=>Po(e,ei),ni=(e,t)=>zo(e,t,{input:e.outputPath||Oe||"recording.mov",outputName:Ve()+"-final.mp4",sectionOf:ei,loudness:ut()}),ai=document.querySelectorAll(".rv-loud"),ut=()=>U("slidetake:loudness")!=="off",oi=()=>ai.forEach(e=>{e.setAttribute("aria-pressed",String(ut())),e.classList.toggle("on",ut())});oi();ai.forEach(e=>e.onclick=()=>{J("slidetake:loudness",ut()?"off":"on"),oi(),P&&qt()});P=null,X=null,x=document.getElementById("rv-video"),V=document.getElementById("rv-now");document.getElementById("rv-mode").onchange=()=>qt();Tn=document.getElementById("rv-fps");Tn.onchange=()=>{P&&(P.fps=parseFloat(Tn.value),Da(P),qt())};document.getElementById("rv-link").addEventListener("input",e=>{try{J("slidetake:site",new URL(e.target.value.trim()).origin)}catch{}P&&ja(P)});Ln=null;x.addEventListener("timeupdate",()=>{if(!X)return;let e=X.ranges[X.i];if(x.currentTime*1e3<e.end)return;if(X.i++,X.i>=X.ranges.length){x.pause(),X=null,V.textContent="";return}let t=X.ranges[X.i];x.currentTime=t.start/1e3,V.textContent="\u25B6 "+t.title});document.getElementById("rv-play-final").onclick=()=>{P&&(P.inBrowser?Wt(sn(P)):Mn(Xe(P).map(e=>({start:e.start,end:e.end,title:e.title}))))};K=null;x.addEventListener("timeupdate",()=>{!K||x.currentTime<K.parts[K.i].keep||(K.i+1<K.parts.length?Wt(K.parts,K.i+1):(x.pause(),K=null,V.textContent=""))});x.addEventListener("ended",()=>{K&&K.i+1<K.parts.length&&Wt(K.parts,K.i+1)});re=document.getElementById("rv-render-status");document.getElementById("rv-render-btn").onclick=()=>li(!1);ur=e=>e.where?"\u201C"+e.where+"\u201D as "+e.name:"your downloads as "+e.name;Bl=e=>{let t=n=>String(n).padStart(2,"0");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+"-"+t(e.getMinutes())+"-"+t(e.getSeconds())};document.getElementById("rv-folder-change").onclick=async()=>{try{let e=await ci(!0);e&&(re.textContent="Videos now go to "+e.name+".")}catch{}};M=null,hr="",mr=null,Te=new Set,di=()=>"slidetake:board:"+Ve();Gt=()=>J(di(),JSON.stringify(M)),Al=e=>{let t=u.get(e);return t?Wo(t.title+`
`+t.html):""},pi=()=>Go(f,e=>({title:u.get(e).title,fp:Al(e)}));ht=document.getElementById("rv-setup");ht.insertBefore(document.getElementById("rec-browser"),ht.querySelector(".rv-setup-more"));ht.addEventListener("toggle",()=>{ht.open?hi():Ke()});Ue.addEventListener("click",e=>{(e.target===Ue||e.target.closest("[data-close]"))&&Ke()});document.getElementById("rv-rec").onclick=()=>jn("browser",ea(f,Te));document.getElementById("rv-rehearse").onclick=()=>jn("rehearse");document.getElementById("rv-use-obs").onclick=()=>{vt(),Oa("obs"),Cn()};document.querySelectorAll(".rv-purge .rv-menu button").forEach(e=>e.addEventListener("click",()=>{e.closest("details").open=!1}));document.getElementById("rv-clean-unused").onclick=async()=>{let{rows:e}=ui(),t=new Set(e.map(a=>a.pick).filter(Boolean)),n=M.takes.filter(a=>!t.has(a.uid));if(!n.length){re.textContent="Every take is in use.";return}confirm("Purge "+n.length+" take"+(n.length===1?"":"s")+" the video doesn\u2019t use (earlier attempts and outdated takes)?")&&(await Ol(n),re.textContent="Purged "+n.length+" unused take"+(n.length===1?"":"s")+".")};document.getElementById("rv-clean").onclick=async()=>{if(!M.takes.length||!confirm("Purge all "+M.takes.length+" takes of this deck from this browser? Download the video first if you need it."))return;let e=new Set(M.takes.map(t=>t.clip.split("/")[0]));M.takes=[],M.picks={},Gt();for(let t of e)await Pa(t);x.src&&(URL.revokeObjectURL(x.src),x.removeAttribute("src"),x.load()),K=null,re.textContent="All takes purged.",qe()};Bt=null,ya=0,wa=!1;x.addEventListener("error",async()=>{if(x.getAttribute("src")){if(Bt&&ya<5){ya++,V.textContent="Reloading "+Oe+" (OBS was still finishing it)\u2026",await new Promise(e=>setTimeout(e,1500));try{Yt(await _n(Bt),Bt,!0);return}catch{}}V.textContent=Bt?"Chrome cannot play "+Oe+". In OBS set Recording Format to Hybrid MP4 (or MP4) with H.264 video; the ffmpeg command still works with this file.":"Could not play "+(Oe||"this file")+". If OBS was still finishing it when you opened it, open it again; if it still fails, set OBS to Hybrid MP4 (or MP4) with H.264 video."}});At=document.getElementById("rv-file-input");At.addEventListener("change",()=>{At.files[0]&&Yt(At.files[0]),At.value=""});document.getElementById("rv-open").onclick=async()=>{if(!window.showOpenFilePicker)return At.click();try{let[e]=await window.showOpenFilePicker({id:"obs-recordings",types:[{description:"Recordings",accept:{"video/*":[".mov",".mp4",".m4v",".mkv",".webm"]}}]});V.textContent="Opening "+e.name+"\u2026",Yt(await _n(e),e)}catch(e){(!e||e.name!=="AbortError")&&(V.textContent="Could not open that file.")}};gi=document.getElementById("rv-folder");gi.hidden=!window.showDirectoryPicker;gi.onclick=async()=>{let e=P&&Qe(P.outputPath);try{let t=await window.showDirectoryPicker({id:"obs-recordings",mode:"read"});if(fi("obs-folder",t),!e){V.textContent="Folder remembered. This session has no file name from OBS; open the file instead.";return}let n=await t.getFileHandle(e);Yt(await _n(n),n)}catch(t){if(t&&t.name==="AbortError")return;V.textContent=(e?e+" is not in that folder":"Could not read that folder")+". Use \u201COpen the recording file\u2026\u201D instead."}};document.getElementById("rv-download").onclick=()=>{if(!P)return;let e=P,t=ti(e),n="# "+document.getElementById("rv-yt-title").value+`

Recorded `+new Date(e.date).toLocaleString()+(e.outputPath?" \xB7 "+e.outputPath:"")+" \xB7 final length "+Q(t.length)+`

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

`+Xe(e).map(o=>"- "+Q(o.start)+"\u2013"+Q(o.end)+"  "+o.title).join(`
`)+`
`,a=document.createElement("a");a.href=URL.createObjectURL(new Blob([n],{type:"text/markdown"})),a.download=Ve()+"-publish.md",a.click(),setTimeout(()=>URL.revokeObjectURL(a.href),1e3)};dl()&&new URLSearchParams(location.search).get("obs")&&Kr();xe=document.getElementById("btn-camera"),It=document.getElementById("pip-msg"),fn=null,bi=O.querySelector("span");zl='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10.5 22 7v10l-6-3.5z"/></svg>';xe.onclick=()=>Kt(ee);qa();fr=null;window.addEventListener("pointermove",yi);document.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(p.active?Ht("Stopped: the browser left fullscreen"):Y&&fe(!1))});Re=document.getElementById("help");document.getElementById("btn-keys").onclick=()=>Re.classList.add("open");document.getElementById("help-close").onclick=()=>Re.classList.remove("open");Re.addEventListener("click",e=>{e.target===Re&&Re.classList.remove("open")});window.addEventListener("keydown",e=>{if(e.key==="F5"){e.preventDefault(),p.active||Cn();return}if(p.active){kl(e);return}if(document.querySelector(".modal.open")){e.key==="Escape"&&vt();return}let t=document.activeElement&&document.activeElement.tagName;if(t==="TEXTAREA"||t==="INPUT"||e.metaKey||e.ctrlKey||e.altKey)return;if(Re.classList.contains("open")){/^(Escape|k|K|\?)$/.test(e.key)&&Re.classList.remove("open");return}let n=e.key;n==="ArrowRight"||n===" "||n==="PageDown"?(e.preventDefault(),st(1)):n==="ArrowLeft"||n==="PageUp"?(e.preventDefault(),st(-1)):n==="ArrowDown"?(e.preventDefault(),ol()):n==="ArrowUp"?(e.preventDefault(),al()):n==="Home"?f.length&&j(f[0]):n==="End"?f.length&&j(f[f.length-1]):n==="o"||n==="O"?nl():n==="e"||n==="E"?Dn():n==="f"||n==="F"||n==="p"||n==="P"?fe(!Y):n==="r"||n==="R"?Cn():/^[1-4]$/.test(n)?zn(Ea[+n-1]):n==="c"||n==="C"?Kt(ee):n==="v"||n==="V"?fs():n==="l"||n==="L"?Sr():n==="+"||n==="="?or(1):n==="-"||n==="_"?or(-1):n==="?"||n==="k"||n==="K"?Re.classList.add("open"):n==="Escape"&&!jr()&&Y&&fe(!1)});window.addEventListener("hashchange",()=>{let{data:e,slide:t}=Qt(location.hash);if(e&&!(y&&y.kind==="share"&&e===y.data)){location.reload();return}t&&t!==m&&u.has(t)&&j(t)});gr="";new ResizeObserver(()=>{let e=F.clientWidth+"x"+F.clientHeight;e!==gr&&(gr=e,rt(),be(!0))}).observe(F);at=document.createElement("div");at.id="toast";at.setAttribute("role","status");document.body.appendChild(at);br=null;Dl=document.getElementById("open-dialog"),xa=document.getElementById("open-url"),Sa=document.getElementById("open-error");document.getElementById("btn-load").onclick=()=>{Sa.hidden=!0,bt(Dl),xa.focus(),xa.select()};document.getElementById("open-form").onsubmit=e=>{e.preventDefault();let t=ko(xa.value);if(!t){Sa.textContent="That doesn't look like a link.",Sa.hidden=!1;return}location.href=ka(t)};document.getElementById("btn-share").onclick=async()=>{let{link:e,inside:t}=await Fl(m&&m!==f[0]?m:""),n=t?"Link copied, with the whole deck inside it ("+(e.length/1024).toFixed(1)+" KB)"+(e.length>8e3?". Some chat apps cut long links short: a GitHub file or gist makes a shorter one.":"."):"Link copied.";try{await navigator.clipboard.writeText(e),jt(n,5e3)}catch{prompt("Copy this link:",e)}y.kind==="copy"&&(A.exported=A.text,Vt(),wt())};vr=U("slidetake:layout");G=Ea.includes(vr)?vr:"path";document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===G));In=new URLSearchParams(location.search);Ea.includes(In.get("layout"))&&(G=In.get("layout"),document.querySelectorAll("#layout-toggle .seg-btn").forEach(e=>e.classList.toggle("active",e.dataset.mode===G)));if(_){let e=(Array.isArray(_.trail)?_.trail:_.back?[_.back]:[]).filter(o=>o&&o.label),t=document.querySelector("header .brand");e.length&&(t.innerHTML='<nav class="trail" aria-label="Site">'+e.map((o,r)=>(r?'<span class="sep" aria-hidden="true">|</span>':"")+(o.url?'<a href="'+T(o.url)+'">'+T(o.label)+"</a>":"<span>"+T(o.label)+"</span>")).join("")+"</nav>");let n=document.createElement("a");n.id="credit",n.href="https://slidetake.com",n.target="_blank",n.rel="noopener",n.title="Made with Slidetake",n.setAttribute("aria-label","Made with Slidetake"),n.innerHTML=kr+'<span class="word">Slide<span>take</span></span>';let a=document.querySelector("header .hdr-actions");a.insertBefore(n,a.firstChild),mt||(a.insertAdjacentHTML("beforeend",'<button class="btn" id="hdr-keys" title="Keyboard shortcuts (K)">\u2328 Keys</button><button class="btn" id="hdr-full" title="Fullscreen (F)">\u26F6 Fullscreen</button>'),document.getElementById("hdr-keys").onclick=()=>document.getElementById("help").classList.add("open"),document.getElementById("hdr-full").onclick=()=>fe(!Y))}$=To(location.pathname,location.search,location.hash),yr=$.page==="pick"?"":$.slide,y=null,A=Lo(U("slidetake:copy"))||jl();window.addEventListener("popstate",()=>location.reload());le&&window.EventSource&&(new EventSource(le.events).onmessage=async e=>{if(!Wa())return;let t=(JSON.parse(e.data).file||"").replace(/\\/g,"/");if(t===le.file){let n=await(await fetch(le.deck,{cache:"no-store"})).text();if(n===ne.value)return;ne.value=y.text=n,lt(!0);return}ae.querySelectorAll("img").forEach(n=>{let a=new URL(n.src);decodeURIComponent(a.pathname).endsWith("/"+t)&&(a.searchParams.set("t",String(Date.now())),n.src=a.href)})});(In.get("edit")==="1"||$.page==="edit"&&A&&In.get("edit")!=="0")&&Dn();ql().then(e=>(ne.value=e,wt(),Cr(ne.value),Ar(),document.fonts?document.fonts.ready:null)).then(()=>{u.forEach(Rn),Nt(),j(u.has(yr)?yr:f[0],!0)})});var Ya=`  /* Every colour comes from these tokens. Slidetake's own is seafoam green: bright on zinc in dark mode,
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
  .btn{
    background:transparent;color:var(--text);
    border:1px solid var(--node-border);border-radius:6px;
    padding:7px 12px;font-size:12px;letter-spacing:.02em;cursor:pointer;
    display:flex;align-items:center;gap:6px;
    transition:border-color .15s, color .15s, background .15s;
  }
  a.btn{text-decoration:none;}
  .btn:hover{border-color:var(--accent);color:var(--accent);}
  .btn.primary{border-color:var(--accent);color:var(--accent);}
  .btn.primary:hover{background:var(--accent);color:var(--on-accent);}
  .btn.active{background:var(--node-border);}
  .seg{display:flex;border:1px solid var(--node-border);border-radius:6px;overflow:hidden;}
  .seg-btn{
    background:transparent;border:none;color:var(--text-muted);font-family:var(--mono);
    font-size:12px;padding:7px 12px;cursor:pointer;transition:background .15s,color .15s;
  }
  .seg-btn:hover{color:var(--accent);}
  .seg-btn.active{background:var(--node-border);color:var(--accent);}

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
  .modal .choice{display:flex;flex-direction:column;gap:4px;text-align:left;padding:10px 12px;border:1px solid var(--panel-line);border-radius:8px;
    background:transparent;color:var(--text);font:inherit;cursor:pointer;}
  .modal .choice:hover{border-color:var(--accent-line);}
  .modal .choice[aria-checked="true"]{border-color:var(--accent);background:color-mix(in srgb, var(--accent) 8%, transparent);}
  .modal .choice strong{font-family:var(--display);font-size:14px;}
  .modal .choice span{font-size:12px;line-height:1.55;color:var(--text-muted);}
  .modal .note{font-size:12px;}
  #editor-pane.unsaved .pane-bar{box-shadow:inset 0 -2px 0 var(--accent);}
  #editor-pane.unsaved #btn-share, #editor-pane.unsaved #btn-save{border-color:var(--accent);color:var(--accent);}
  .btn.small{padding:3px 9px;font-size:11px;}
  .btn.icon{padding:4px 9px;min-width:30px;display:inline-flex;align-items:center;justify-content:center;}
  .btn.icon svg{width:15px;height:15px;display:block;}
  /* in the header, icon buttons stand as tall as the layout switch and the text buttons beside them */
  .hdr-actions .btn.icon{height:32px;min-width:32px;padding:0 8px;}
  /* every header control is exactly 32px, whatever the font's line height, so they line up on any machine */
  .hdr-actions > .btn, .hdr-actions > .seg{height:32px;}
  .hdr-actions > .btn:not(.icon){padding-top:0;padding-bottom:0;}
  .hdr-actions .seg-btn{height:100%;display:flex;align-items:center;padding-top:0;padding-bottom:0;}
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
  .modal .btn[disabled]{opacity:.4;cursor:not-allowed;}
  .modal .btn.small{padding:3px 9px;font-size:11px;}
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
  .rec-mode{display:flex;gap:10px;align-items:flex-start;border:1px solid var(--panel-line);border-radius:10px;padding:10px 12px;cursor:pointer;}
  .rec-mode:has(input:checked){border-color:var(--accent);}
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
  .rv-grid{display:grid;grid-template-columns:minmax(0,7fr) minmax(280px,3fr);grid-template-areas:"video list" "bar list" "now now";
    column-gap:18px;margin-top:12px;}
  .rv-grid > div:first-child{display:contents;}
  .rv-video{grid-area:video;}
  .rv-list{grid-area:list;contain:size;}
  .rv-bar{grid-area:bar;display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-top:12px;}
  /* the bar under the player: buttons of one height, whatever is in them (an emoji is taller than text) */
  .rv-bar .btn{height:36px;display:inline-flex;align-items:center;gap:6px;}
  .rv-bar .btn .ico{font-size:13px;line-height:1;}
  /* the same as the deck's own \u25CF Record: red, filling red on hover */
  .btn.rec{color:#f87171;}
  .btn.rec:hover:not(:disabled){color:#fff;background:#b91c1c;border-color:#b91c1c;}
  .rv-sel-note{font-size:12px;color:var(--text-muted);text-align:right;}
  .rv-sel-note button{background:none;border:none;padding:0;color:var(--accent);cursor:pointer;font:inherit;text-decoration:underline;}
  .rv-purge{position:relative;}
  .rv-purge summary{list-style:none;font-family:var(--mono);}
  .rv-purge summary::-webkit-details-marker{display:none;}
  .rv-purge .rv-menu{position:absolute;left:0;top:calc(100% + 6px);display:flex;flex-direction:column;gap:6px;padding:8px;z-index:3;
    background:var(--panel);border:1px solid var(--panel-line);border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.35);white-space:nowrap;}
  .rv-help{font-size:12.5px;color:var(--text-muted);}
  #rv-render-status:empty{display:none;}
  .btn.rec:disabled{color:var(--text-muted);}
  /* the take board: every slide, a box to select it for recording, its takes */
  #review:not(.board) .rv-board-only{display:none !important;}
  .rv-row.with-sel{display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:10px;align-items:start;}
  .rv-row .rv-sel{margin:3px 0 0;accent-color:var(--accent);}
  .rv-row.selected{background:color-mix(in srgb, var(--accent) 7%, transparent);}
  .rv-chip.outdated{opacity:.6;text-decoration:line-through;}
  .rv-none{font-size:12px;color:var(--text-muted);font-style:italic;}
  #rv-setup{margin-top:14px;border:1px solid var(--panel-line);border-radius:8px;padding:10px 14px;}
  #rv-setup > summary{cursor:pointer;font-family:var(--display);font-size:13px;}
  #rv-setup-sum{color:var(--text-muted);font-size:12px;margin-left:8px;font-family:var(--body);}
  #rv-setup[open] > summary{margin-bottom:8px;}
  .btn.toggle{color:var(--text-muted);}
  .btn.toggle.on{border-color:var(--accent);color:var(--accent);background:color-mix(in srgb, var(--accent) 10%, transparent);}
  .rv-final{font-family:var(--mono);font-size:12px;color:var(--text-muted);}
  .rv-actions{margin-left:auto;display:flex;align-items:center;gap:10px;}
  #rv-now{grid-area:now;}
  #review:not(.in-browser) #rv-render-btn{display:none;}
  @media (max-width:900px){
    .rv-grid{grid-template-columns:1fr;grid-template-areas:"video" "bar" "now" "list";}
    .rv-list{contain:none;max-height:50vh;}
  }
  .rv-video{position:relative;background:#000;border-radius:8px;overflow:hidden;aspect-ratio:16/9;}
  .rv-video video{width:100%;height:100%;display:block;}
  #rv-novideo{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;text-align:center;}
  #rv-novideo[hidden]{display:none;}
  #rv-now{font-family:var(--mono);font-size:12px;color:var(--text-muted);margin-top:8px;min-height:1.4em;}
  .rv-list{overflow-y:auto;border:1px solid var(--panel-line);border-radius:8px;}
  .rv-row{padding:9px 12px;border-bottom:1px solid var(--panel-line);}
  .rv-row:last-child{border-bottom:none;}
  .rv-row .t{font-size:12.5px;color:var(--text);margin-bottom:6px;display:flex;justify-content:space-between;gap:8px;}
  .rv-row .t small{font-family:var(--mono);color:var(--text-muted);font-size:10.5px;white-space:nowrap;}
  .rv-row.sec .t{color:var(--accent-teal);}
  .rv-chips{display:flex;flex-wrap:wrap;gap:6px;}
  .rv-chip{background:transparent;border:1px solid var(--node-border);color:var(--text-muted);border-radius:20px;
    font-family:var(--mono);font-size:11px;padding:3px 10px;cursor:pointer;}
  .rv-chip:hover{border-color:var(--accent-teal);color:var(--text);}
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
`;var Ka=`
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
      <button class="btn" id="rec-rehearse">Rehearse (no recording)</button>
      <button class="btn primary" id="rec-start" disabled>\u25CF Start recording</button>
    </div>
  </div>
</div>

<div id="review" class="modal" role="dialog" aria-labelledby="rv-title">
  <div class="panel xwide">
    <button class="close" data-close aria-label="Close">\u2715</button>
    <h2 id="rv-title">Review the take</h2>
    <p id="rv-info"></p>
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
          <button class="btn primary" id="rv-render-btn" title="Saves the video: the picked takes joined into one file">\u2193 Download</button>
          <span class="rv-final" id="rv-final"></span>
          <div class="rv-actions">
            <span class="rv-sel-note rv-board-only" id="rv-sel-note"></span>
            <button class="btn rec rv-board-only" id="rv-rec" title="Records the whole deck, or only the ticked slides (shift-click ticks a range)">\u25CF Record</button>
            <button class="btn" id="rv-play-final" title="Plays the picked takes back to back">\u25B6 Preview</button>
          </div>
        </div>
        <div id="rv-now"></div>
      </div>
      <div class="rv-list" id="rv-list"></div>
    </div>
    <details id="rv-setup" class="rv-board-only">
      <summary>\u2699 Recording setup <span id="rv-setup-sum"></span></summary>
      <div class="row rv-setup-more">
        <button class="btn small toggle rv-loud" id="rv-loud" aria-pressed="true" title="Brings the video to YouTube's volume (-14 LUFS) with one gain, never past -1.5 dB peaks"><span class="ico" aria-hidden="true">\u{1F50A}</span> Auto volume</button>
        <button class="btn small" id="rv-folder-change" title="Where Download saves videos">Change the download folder\u2026</button>
        <details class="rv-purge">
          <summary class="btn small" title="Delete takes from this browser">\u{1F5D1} Purge takes</summary>
          <div class="rv-menu"><button class="btn small" id="rv-clean-unused">Unused takes</button><button class="btn small" id="rv-clean">All takes</button></div>
        </details>
        <button class="btn small" id="rv-rehearse">Rehearse (no recording)</button>
        <button class="btn small" id="rv-use-obs">Record with OBS instead\u2026</button>
      </div>
    </details>
    <div class="rv-out">
      <div id="rv-render">
        <p id="rv-render-status"></p>
        <p class="rv-help">Download joins the picked takes into one video without re-encoding, and saves it in your videos folder with the date in its name; it only makes a new one when a take or Auto volume changes. Takes stay in this browser until you purge them.</p>
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
`;var Va=`<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">`;var Si=e=>new Promise((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=t,a.onerror=()=>n(new Error("could not load "+e)),document.head.appendChild(a)});async function Ei(){document.head.insertAdjacentHTML("beforeend",Va);let e=document.createElement("style");e.textContent=Ya,document.head.appendChild(e),document.body.insertAdjacentHTML("afterbegin",Ka),await Promise.all([window.gsap?null:Si("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"),window.marked?null:Si("https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js")]),await Promise.resolve().then(()=>(xi(),Wl))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ei,{once:!0}):Ei();})();
