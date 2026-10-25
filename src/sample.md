---
title: Slidetake — markdown to finished video
brand: slidetake.com
pip: none
---

# Slidetake

**Markdown to finished video.** A markdown file becomes a deck you move through like a map, and when you record, the deck directs the video itself: every slide is a take.

Press → to walk this deck, or switch between **tree**, **radial**, **path** and **focus** at the top.

## ✍️ Write it in markdown

There is no special syntax. Ordinary markdown is a deck:

- `#` is the first card
- `##` sections branch from it
- `###` and deeper branch from those

### Decks you already have

**reveal.js** decks (`---` between slides, `--` for vertical ones) open as they are, fragments and all. So do the older `+++` decks.

### Code is safe

Headings inside fenced code are left alone:

```md
# not a card
```

### Links between cards

End a heading with `{#some-id}` to name its card, then link to it like any anchor: [fly to Record it](#record).

## 🎬 Present it

- ← → walk in order, ↑ ↓ go to the parent or a child
- Click any card; drag to pan, scroll to zoom; **O** shows the whole map
- **F** goes fullscreen

### Made for video

**Path** lays the deck out as a staircase in presenting order, so every move is a short step right or down. **Focus** doesn't travel at all: the next slide fades in where the last one was.

Text keeps one size across a section, and a thin bar along the bottom shows your progress.

## ⏺️ Record it {#record}

Recording needs **[OBS Studio](https://obsproject.com)** (free), with its WebSocket server turned on. Add where OBS is to the address, `?obs=localhost:4455`, and Slidetake drives the recording:

- **C** turns on your camera, in a corner or full screen, slide by slide
- **R** starts a take; ← on a slide you fumbled starts that slide again, and every attempt is kept

### A 16:9 screen

YouTube is 16:9, and MacBook screens aren't. **[BetterDisplay](https://betterdisplay.pro)** adds a 16:9 virtual screen (say 1920×1080) to record the deck on, so nothing gets cropped or letterboxed.

### Camera per slide

A comment in a slide moves the camera: `<!-- camera: full, on -->` opens full screen on you, then shows the slide on the next press.

### Review and cut

When you finish, pick the best take of each slide. Slidetake writes a **frame-exact ffmpeg command**, YouTube **chapters**, a description and tags.

## 🔗 Open your own deck

Press **✎ Editor**, then **Open**, and paste a link to a markdown file:

- a GitHub file: `slidetake.com/gh/owner/repo/talk.md`
- a gist: `slidetake.com/gist/<id>`
- any URL that lets other sites read it

**Share** copies a link to the deck you're viewing. Write or change a deck in the editor and the link carries the whole deck inside it, nothing to upload. **↑ Load** opens a file from your computer.

## 💛 Free and open

Slidetake is open source under the Apache 2.0 license: [github.com/sakthipriyan/slidetake](https://github.com/sakthipriyan/slidetake).

The whole app is one HTML file. Download it, open it, host it anywhere.

Everything else is in the guide, itself a deck: [slidetake.com/help](/help).
