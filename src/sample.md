---
brand: Slidetake
pip: none
---

# Slidetake

A markdown file becomes a **spatial deck**. Every heading is a card, and deeper headings branch off the one above them.

Press → to walk the deck, or switch between **tree**, **radial**, **path** and **focus** at the top.

## Writing a deck

There is no special syntax. Write ordinary markdown:

- `#` is the root
- `##` sections branch from it
- `###` and deeper branch from those

### Code is safe

Headings inside fenced code are left alone:

```md
# not a card
```

### Ids and links

End a heading with `{#some-id}` to name its card, then link to it like any anchor — [fly to Path and Focus](#video).

Without one, the id is the heading slug, so [this goes to Moving around](#moving-around).

## Moving around

- Click a card to jump to it
- ← → walk in document order
- ↑ ↓ go to the parent or first child
- Drag to pan, scroll to zoom
- O shows the whole map

### Deep links

The address bar tracks the current card, so a copied URL opens right here.

## Path and Focus {#video}

Made for recording. **Path** is a staircase in presenting order: each section is a row, and the next section starts just below where it ended, so every move is a short step right or down.

**Focus** doesn't travel at all: the next slide fades in where the last one was.

### Steady text

Text keeps one size across a section and only changes when the section does.

### Progress

While presenting, a bar along the bottom fills with every press. Add `duration: 10m` to the deck and a lighter layer behind it tracks the clock.

## Editing

Edits redraw live and keep your place. The draft is saved in this browser; **Download** keeps a file.

Old decks with `+++` separators and frontmatter still open.

### Channel mark and camera

An optional block at the top of the file sets a corner **brand** (text and/or logo) and a **PIP** box for your webcam. Slides always stay clear of both.

A comment like `<!-- camera: full -->` in any slide switches the camera from there on: `full`, `off`, a size like `30%`, or `flip` to swap sides. `<!-- camera: full, on -->` starts on camera and reveals the slide on the next →. See **?** for the keys.
