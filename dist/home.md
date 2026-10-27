---
title: Slidetake — write in markdown, record without timeline editing
brand: slidetake
pip: bottom-right
---

<!-- camera: on, full, on -->

# ![](/favicon.svg) Slide<span class="st-take">take</span>

**Write in markdown. Present on a spatial canvas. Record without timeline editing.**

For developers and technical educators who explain things on video. You're inside a Slidetake deck right now. Press → to walk it, **O** for the map.

## ✂️ Record without timeline editing

**Retake by slide.** The slide is the timeline marker, so a fumbled line costs one press, not an editing session.

### OBS records, the deck drives it

**[OBS Studio](https://obsproject.com)** records at full quality. Press **<span class="st-rec">● Record</span>** and Slidetake starts it, moves through your slides and stops it at the end. No scenes to switch, no recording to watch.

### Every slide is a take

Stumbled on a slide? Press ← and say it again. Every attempt is kept, and recording carries on.

### Pick, don't scrub

Choose the best take of each slide. Slidetake writes the frame-exact **[ffmpeg](https://ffmpeg.org)** cut, the YouTube **chapters** and the description.

### One session, one finished video

Write, present and record in one sitting. What comes out is ready to upload.

## 🗺️ A map, not a stack

<!-- view: overview -->

Your headings are the hierarchy: zoom out for the whole system, zoom in for one part. This slide just showed you the map.

### Headings become cards

`#` is the first card, `##` branches from it, `###` goes a level deeper. No layout to draw.

### A path your viewer can follow

→ always walks the same order, and **path** lays it out as a staircase, so the audience never loses its place.

## 🎥 The camera is part of the deck

<!-- camera: on, full, on -->

A comment in a slide moves you: corner, full screen, or off. Turn on **Camera** and watch this slide do it.

### Camera moves, step by step

<!-- camera: 40%, full, on -->

With **Camera** on, press →: this slide puts you large in the corner, then full screen, then back to the corner. One comment, one press per move:

```md
### Camera moves, step by step
<!-- camera: 40%, full, on -->
```

Combine `on`, `off`, `full`, a size like `40%`, a corner, `flip` or `circle`.

## ✍️ Plain markdown in

Markdown you already know: headings, lists, tables, code, steps, diagrams (Graphviz, D2, SVG), charts, images and YouTube links. [See them all in the showcase →](/showcase)

### A few comments do the rest

Markdown has no word for "reveal one at a time" or "move the camera", so a handful of HTML comments say it. They stay invisible anywhere else markdown is read:

```md
<!-- steps -->             ← one item per press
<!-- camera: full, on -->  ← move the camera
<!-- view: overview -->    ← the map first
<!-- view: full -->        ← a big-image card
```

## 🎨 Your colours

One line, `accent: "#3b82f6"`, gives a deck its own colour, shaded for dark and light. On your website, decks wear your site's palette.

`brand:` and `logo:` put your name and logo in the corner of every slide, so every frame of the video carries them.

## 🌐 Run it anywhere

Three places, one deck format: a markdown file.

### slidetake.com: write, view, share

Write a deck in the **✎ Editor**, or view one straight from a link: a GitHub file, a gist or any markdown URL. **Share** a link with the deck inside it. Nothing to install.

### Your computer: all that, plus AI

The same app on your own files, offline:

```sh
npx slidetake deck.md
```

Images next to the markdown load as they are. Save in any editor and the deck reloads where you are; type in the browser and it saves to the file. So an AI agent can write `deck.md` while you watch it take shape.

### Your website: users view, you record

`slidetake.js` puts decks inside your own pages, in your site's colours. Users get a clean viewer; add `?obs` to the address and the same page records your video.

## <span class="st-heart" aria-hidden="true"></span> Open source

Open source, Apache 2.0: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake). Nothing to sign up for, and your decks stay yours: [Privacy](/privacy).

Next, every feature and what it saves you: **[Features →](/features)**
