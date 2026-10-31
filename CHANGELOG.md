# Changelog

All notable changes to Slidetake are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the package
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Two things ship from this repository: the app at slidetake.com and the npm
package `slidetake` (`dist/slidetake.js` for other sites, `dist/index.html`,
and the `npx slidetake` command).
An entry here is anything a deck author, a reader or a site embedding the
package can notice. Tests, CI and tooling do not belong here.

## [Unreleased]

### Added

- Record in the browser, with nothing to install. ● Record offers **In this
  browser** next to OBS: in Chrome, Edge and other Chromium browsers on a
  computer, the deck records itself (only its 16:9 frame: slides and camera)
  with your microphone, each take its own file in the browser's private
  storage. ● Record opens the deck's **take board**: every slide with every take
  from every recording, the newest picked. **● Record** records the deck, or
  exactly the ticked slides (shift-click for a range; slides between them are
  jumped over and keep their takes), and says so. A take starts
  with the entry from the slide before it, so editing a slide, deleting it, or
  editing the one before marks its takes outdated: every final cut stays
  seamless. There is no Leave out; delete the slide from the deck instead.
  **⚙ Setup** (top right of the board) holds the browser and screen check,
  camera, microphone, level, 1080p or 720p, the sound settings and **🗑 Purge
  takes**. To rehearse, present with F: nothing is recorded.
  Under the player, **▶ Preview** plays the final cut and **↓ Download** joins
  the picked takes into one MP4 without re-encoding, saving it like OBS (a new
  date-stamped file in a folder picked once) and saying where; pressed again
  with nothing changed, it doesn't make it again. **🗑 Purge takes** removes
  unused takes or all of them. OBS stays for any other browser or screen, with
  its own review.
- Recording turns the camera on by itself: the camera chosen for the deck in
  the setup (or **No camera**), on before the countdown and back to how it was
  afterwards, so a forgotten **C** no longer costs a take. It defaults to your
  camera when the deck has a camera box or camera moves; the OBS dialog has the
  same choice as a checkbox. If fullscreen doesn't stick (a share prompt can
  take it away), the countdown asks for **F**.
- The microphone list shows each microphone once, the system default marked
  "(system default)", rather than listing it twice.
- The microphone's sound, in Setup: **Sound: Raw** (no processing, the
  default) or **Voice** (Chrome's noise suppression). **🔊 Volume boost** (on
  by default) measures the final cut the way YouTube does (ITU-R BS.1770
  integrated loudness) and raises it towards -14 LUFS, stopping where its
  loudest peak would reach -1.5 dB and saying so. **Peak limiter** (off by
  default) catches those few peaks (a click, a plosive) with a look-ahead
  limiter so the boost reaches -14, measured again so it lands there. Only the
  sound is re-encoded; the ffmpeg command gets `loudnorm`.

### Changed

- A retake (←) replays the slide's entry: the deck goes back to where the slide
  before ended and flies in again, camera moves included, so every take starts
  with the entry and picking a retake no longer cuts straight to the slide
  already in place. The take that was redone ends where ← was pressed. The
  jump back shows that slide exactly as it ended (no entrance replayed, nothing
  easing into place), so a retake joins without a flicker.
- The review: a larger player with the takes beside it at the same height,
  every take labelled (Take 1 included); ▶ Preview, ↓ Download and ● Record
  under the player, with the final length and expected size; thin scrollbars
  in the accent. The slides link fills in from the page the deck is on when the
  deck names no permalink or site; the Record dialog is wider.

## [0.3.4] - 2026-10-28

### Fixed

- On a site page in light mode, the "Made with Slidetake" credit's logo and
  "take" use the header's ink instead of the accent, which was the band's own
  colour (navy on navy, gold on gold) and made them invisible.

## [0.3.3] - 2026-10-28

### Changed

- ` ```svg ` drawings are drawn inline instead of as images, so they can use
  the deck's colours: `currentColor` is the text colour, and `var(--text)`,
  `var(--text-muted)` and `var(--accent)` switch with dark and light. Only
  drawing elements are kept: scripts, `<style>`, links, `<foreignObject>`,
  images, animation, event handlers and external `url()` references are
  removed, and each drawing's ids are made its own. `![](drawing.svg)` is
  unchanged, an image as drawn.

## [0.3.2] - 2026-10-28

### Added

- Carousels for diagrams and charts as well as images: a list of Graphviz, D2,
  SVG or ECharts blocks is a gallery, and a carousel under `<!-- steps -->`.
  After `<!-- steps -->`, two or more images, diagrams or charts in a row are
  a carousel on their own, one per press, without writing them as a list.

### Changed

- `<!-- steps -->` reveals everything after it on the card, not just the next
  list: a list item by item, and a paragraph, quote, table or diagram as one
  press each, so a closing line no longer shows before the points it sums up.
  `<!-- steps: off -->` ends the steps early; what follows it shows from the
  start.

### Fixed

- On a site page, the header trail and the active layout button stay in the
  header's text colour instead of the accent, which could vanish into a header
  in the same colour (gold on gold). The current page is underlined instead.

## [0.3.1] - 2026-10-28

### Fixed

- The header's layout switch and Editor are exactly as tall as its icon buttons
  (32px) whatever the font, so they line up on every machine.
- No false "image(s) use relative paths" warning for images addressed from the
  site's root, such as the logo in Slidetake's own decks.
- The keys card's link to the docs works on embedded decks too: it points at
  slidetake.com/docs rather than the host site's /docs.

## [0.3.0] - 2026-10-27

### Added

- `npx slidetake deck.md`: Slidetake on your own computer. It serves the deck
  and its folder on localhost, so images next to the markdown load as they
  are; saving the file reloads the deck where you are, and typing in the
  browser's editor saves back to the file, so an AI agent can write the deck
  while you watch. A folder opens its `index.md`, `deck.md`, `slides.md` or
  `README.md`; `--port` and `--open` as expected. Needs Node 20 or later.
- `/features`, every feature on one line; `/showcase`, one deck that shows
  them all working, with blue, coral and violet versions of itself in share
  links; `/privacy`, what slidetake.com collects and which services a deck can
  reach. `/examples` still opens the showcase.
- A **Privacy & analytics** button on slidetake.com: Google Analytics stays on
  by default and can be turned off, which stops it and removes its cookies.
- The header's left side links Features, Showcase, Docs and GitHub.
- Camera messages (no camera found, waiting for permission) show inside the
  camera box.

### Changed

- Slidetake's own colour is seafoam, calmer than the earlier neon green, and
  dimmer in dark mode; the logo, favicon, icon and link preview match.
- The guide moves to `/docs` and reads step by step: get started, write,
  present, record, share. `/help` still opens it.
- The home deck covers OBS recording, camera moves, the special comments,
  colours and logo, and the three places Slidetake runs.
- Layouts are offered in alphabetical order, with keys 1–4 following it, and
  **path** is the default until you pick one; a deck no longer chooses.
- The header: name, then the links, then layouts, analytics, light/dark and
  Editor, all one height; the tagline is gone from it.
- A full-screen card is a 16:9 frame placed like any other slide, keeping the
  same margins in the window and when presenting.

### Fixed

- Editing a deck updates it as you type again. Since 0.2.3, re-reading the deck
  stopped at the camera check for full-screen cards, so no edit showed until
  the page was reloaded.
- D2 diagrams no longer sit on a black box in dark mode.
- Pie and donut labels no longer bleed in dark mode.
- A camera message keeps its look after going fullscreen and back.
- HTML in a heading no longer reaches a card's title or address.

## [0.2.4] - 2026-10-27

### Changed

- slidetake.com's header, left to right: the name and tagline (now *plain
  markdown → spatial deck → video, no timeline editing*), then layouts,
  **Docs**, **Editor**, GitHub and light/dark. **Docs** opens the guide and
  replaces the **?** button; **?** and **K** still show the keys.
- **Your copy →** moves from the header into the editor's toolbar.

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
