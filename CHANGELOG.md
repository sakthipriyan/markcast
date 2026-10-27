# Changelog

All notable changes to Slidetake are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the package
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Two things ship from this repository: the app at slidetake.com and the npm
package `slidetake` (`dist/slidetake.js` for other sites, `dist/index.html`).
An entry here is anything a deck author, a reader or a site embedding the
package can notice. Tests, CI and tooling do not belong here.

## [Unreleased]

## [0.2.3] - 2026-10-27

### Added

- A GitHub button beside light/dark on slidetake.com, linking to the
  repository. Embedded decks don't show it.

### Changed

- A full-screen card whose image leaves room beside it (a screenshot or photo
  narrower than 16:9) puts the image on the right and the heading and caption
  in that room, as a portrait card does, rather than over the image. Images
  close to 16:9 still fill the card with the text over them.
- A full-screen card is a 16:9 frame placed like every other slide, with the
  same margins in the window and when presenting, instead of filling the screen
  edge to edge (which left it touching the top and bottom, under the
  breadcrumbs).
- A full-screen card turns the camera off while it's on screen, unless the
  card has its own `<!-- camera: … -->`; **V** still brings the camera back,
  and the slides after it keep their camera as before.

### Fixed

- D2 diagrams sit on their card: the colour D2 paints behind a diagram is now
  the card's own, not the page's near-black.
- A camera layout picked with **V** shows the camera even on a slide whose
  `<!-- camera: … -->` turns it off; before, a size such as `24%` stayed hidden.

## [0.2.2] - 2026-10-27

### Changed

- A full-screen card (`<!-- view: full -->`) fits its image whole, with bars
  where its shape differs from the screen's, instead of cropping it to fill.
  A screenshot keeps every edge.

## [0.2.1] - 2026-10-27

### Fixed

- **K** (or **?**) again closes the keys card, as **O** returns from the map and
  **F** leaves fullscreen; before, only **Esc** closed it.

## [0.2.0] - 2026-10-27

### Added

- Themeable colours. Every colour comes from a few tokens, and two things can
  set them: `window.SLIDETAKE.colors` for a site embedding a deck (`accent`,
  `accentSoft`, `line`, `ring`, `header`, `headerText`, for both modes or under
  `light` / `dark`), and `accent:` in a deck's top block, one colour that
  Slidetake sets bright for dark mode and deep for light mode.
- A host's `header` colour is a band behind the deck's header, with
  `headerText` for the trail and buttons on it, so a deck can wear its site's
  header.
- Charts and D2 diagrams take the deck's colours: the accent leads the chart
  palette and tints D2's shapes, whatever it is.

### Changed

- Slidetake's own colour is terminal green (`#4ade80` on dark, `#15803d` on
  light), replacing gold: the logo, favicon, link preview and every default.
  Decks and sites that set their own colours are unaffected.

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
