---
title: Slidetake Showcase
brand: slidetake
duration: 10m
---

# Slide<span class="st-take">take</span> Showcase

Everything a deck can hold, written in plain markdown. Open **✎ Editor** to see the source of any card, or press **O** for the map.

## ✍️ Text

Paragraphs, **bold**, *italic*, `code`, [links](https://slidetake.com) and lists, as markdown writes them.

- One point
- Another point
  - A detail under it

### Steps

Put `<!-- steps -->` before a list and it reveals one item per press:

<!-- steps -->
- First, the problem
- Then, the idea
- Finally, the result

### Quotes and tables

> A quote stands out from the text around it.

| Plan | Price | Users |
|---|---:|---:|
| Free | ₹0 | 1 |
| Team | ₹499 | 10 |

### Code

```python
def take(slide):
    return slide.best_attempt()
```

## 🧭 Diagrams

Write the diagram in a fenced block named after its language.

### Graphviz

```dot
digraph {
  rankdir=LR
  node [shape=box style=rounded]
  Markdown -> Deck -> Takes -> Video
}
```

### D2

```d2
direction: right
write: Write {shape: rectangle}
present: Present
record: Record
write -> present -> record: one session
```

### SVG

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120">
  <rect x="10" y="20" width="90" height="80" rx="10" fill="#22c55e"/>
  <rect x="115" y="20" width="90" height="80" rx="10" fill="#22c55e" opacity=".7"/>
  <rect x="220" y="20" width="90" height="80" rx="10" fill="#22c55e" opacity=".4"/>
</svg>
```

## 📊 Charts

ECharts, as a fenced `echarts` block of JSON options.

### A bar chart

```echarts
{
  "xAxis": {"type": "category", "data": ["Jan", "Feb", "Mar", "Apr", "May"]},
  "yAxis": {"type": "value"},
  "series": [{"type": "bar", "data": [12, 19, 15, 24, 30]}]
}
```

### A donut

```echarts
{
  "series": [{"type": "pie", "radius": ["45%", "70%"],
    "data": [{"name": "Equity", "value": 85}, {"name": "Debt", "value": 5}, {"name": "Gold", "value": 10}]}]
}
```

## 🖼️ Images

The layout comes from what's on the slide; the alt text is the caption.

### One image

![An image alone fills the card edge to edge](https://slidetake.com/og.jpg)

### Image and text

![Written first, so it sits on the left](https://slidetake.com/og.jpg)

An image beside text makes a split card. Write the text first and the image moves to the right.

### A gallery

A list of images is a gallery. With `<!-- steps -->` it becomes a carousel: one image at a time, the next on each press.

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

## ▶️ YouTube

A YouTube link alone on a line becomes the video. The next press plays it; leaving the slide pauses it.

https://www.youtube.com/watch?v=jNQXAC9IVRw

## 🎥 Camera and map

<!-- camera: on, full, on -->
<!-- view: overview -->

Two comments do what markdown can't: `<!-- camera: on, full, on -->` moves the presenter's camera, and `<!-- view: overview -->` shows the whole map first.

## 🧭 Layouts

Press **1** to **4**, or use the switch in the header: **focus** (one slide at a time), **path** (a staircase in presenting order, the default), **radial** and **tree** (the whole map). **O** zooms out to the map and back.

## 🎨 Colours

**L** switches dark and light. A deck gives itself a colour with one line, `accent: "#3b82f6"`, shaded for both modes; a website passes its own palette and header.

## ⏺️ Record a video

**● Record** drives [OBS](https://obsproject.com): each slide is a take, **←** says it again, and the review writes the frame-exact ffmpeg cut, YouTube chapters and description. **C** turns on the camera; this deck's camera card above shows it moving.

## 🔗 Open from anywhere

This deck is a file on GitHub, and opens from there too: **[slidetake.com/gh/slidetake/slidetake/examples/showcase.md](/gh/slidetake/slidetake/examples/showcase.md)**. Gists, any markdown URL, and a link with the deck inside it open the same way, and `npx slidetake deck.md` opens one from your computer.

## 🚀 Start your own

Press **New** for a template (blank, talk or recording), or type in this deck to make it your copy.

The templates and this deck live in [examples/](https://github.com/slidetake/slidetake/tree/main/examples) on GitHub.
