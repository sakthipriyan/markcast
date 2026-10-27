---
title: Slidetake — write in markdown, record without timeline editing
brand: slidetake
pip: bottom-right
---

<!-- camera: on, full, on -->

# ![](/favicon.svg) Slide<span class="st-take">take</span>

**Write in markdown. Present on a spatial canvas. Record without timeline editing.**

For developers and technical educators who explain things on video. You're inside a Slidetake deck right now: press → to walk it, **O** for the map.

## ✂️ Record without timeline editing

**Retake by slide.** The slide is the timeline marker, so a fumbled line costs one press, not an editing session.

### OBS records, the deck drives it

**[OBS Studio](https://obsproject.com)** records at full quality. Press **● Record** and Slidetake starts it, moves through your slides and stops it at the end. No scenes to switch, no recording to watch.

### Every slide is a take

Stumbled on a slide? Press ← and say it again. Every attempt is kept, and recording carries on.

### Pick, don't scrub

Choose the best take of each slide. Slidetake writes the frame-exact **ffmpeg** cut, the YouTube **chapters** and the description.

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

### One session, one finished video

Write, present and record in one sitting. What comes out is ready to upload.

## ✍️ Plain markdown in

Markdown you already know: headings, lists, tables, code, steps, diagrams (Graphviz, D2, SVG), charts, images and YouTube links. [See every example →](/examples)

### Your colours

`accent:` in a deck gives it its own colour, shaded for dark and light.

## 💻 Iterate locally

Keep the deck and its images in a folder, and run:

```sh
npx slidetake deck.md
```

Images next to the markdown load as they are. Save in any editor and the deck reloads where you are; type in the browser and it saves to the file. Offline, nothing uploaded.

### Write it with AI

Ask Claude, or any AI, for a Slidetake deck: an agent writes `deck.md` and `npx slidetake` shows it as it changes; a chat's markdown pastes straight into the editor here.

## 🌐 Run it anywhere

- **slidetake.com:** open a GitHub file, gist or URL, or type; **Share** a link with the deck inside it.
- **Your computer:** `npx slidetake`.
- **Your website:** `slidetake.js` puts decks inside your pages, in your site's colours.

## 💚 Open source

Open source, Apache 2.0: [github.com/slidetake/slidetake](https://github.com/slidetake/slidetake).

Every feature: **[/features](/features)** · Step by step: **[/docs](/docs)**
