# Changelog

All notable changes to Slidetake are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the package
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Two things ship from this repository: the app at slidetake.com and the npm
package `slidetake` (`dist/slidetake.js` for other sites, `dist/index.html`).
An entry here is anything a deck author, a reader or a site embedding the
package can notice. Tests, CI and tooling do not belong here.

## [Unreleased]

## [0.1.1] - 2026-10-26

### Added

- Plain markdown, richer cards: `<!-- steps -->` before a list reveals one item
  per press, and ` ```d2 ` and ` ```svg ` blocks join ` ```dot ` and
  ` ```echarts `. Charts and D2 diagrams use the deck's palette and redraw when
  the theme flips between dark and light.
- Image cards laid out by the image's shape: a phone or near-square screenshot
  sits beside the heading and caption, a wider image spans the card between
  them, and a 16:9 image fills the card with the text over it.
- A list of images is a gallery, and under `<!-- steps -->` a carousel that
  shows one image per press, captioned **1 / N**. Several images in one
  paragraph form a grid of up to four a row.
- A YouTube link alone on a line embeds the video (youtube-nocookie.com); the
  next press plays it and leaving the slide pauses it.
- `<!-- view: full -->` makes a card fill the whole screen.
- The first and last cards animate in on their own.
- `examples/`: a showcase deck of every feature, served at `/examples`, and the
  starter templates.
- Embeds open as a viewer: the host site's trail, layouts and light/dark in the
  header, no bottom bar. `?obs` brings back the camera and recording controls.

### Changed

- `type: slides` alone no longer forces the reveal.js parser; a deck without
  `---` or `--` separators is read by its headings.
- Published from GitHub Actions with npm provenance, linking the package to the
  commit and build that made it.

## [0.1.0] - 2026-10-25

First release on npm: `dist/slidetake.js` turns a markdown deck on any page into
a Slidetake deck (`window.SLIDETAKE = {markdown, …}`), and `dist/index.html` is
the whole app in one file.
