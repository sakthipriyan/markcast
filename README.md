# Slidetake

Markdown in, a spatial deck and a finished video out.

Slidetake turns a markdown file into a deck you move through like a map, and, when you are recording, drives the camera and OBS from the deck itself: every slide is a take, a slide spoken badly is retaken on the spot, and at the end you get a frame-exact ffmpeg cut, chapters and a YouTube publish pack.

The built app is a single HTML file, [`dist/index.html`](dist/index.html): open it, copy it or host it anywhere.

## Run it

```sh
python3 -m http.server 8765
```

Then open:

- `http://localhost:8765/dist/` for the sample deck and the editor
- `http://localhost:8765/dist/?src=https://…/deck.md` for a deck on the web, including GitHub raw URLs (relative images load from next to it)
- `?edit=0` hides the editor, `?layout=tree|radial|path|focus` picks the layout, `?mode=light` the light theme

## Viewing and recording

Without anything else in the address, Slidetake is a viewer: the deck and a **Fullscreen** button (F). Camera settings in the deck are ignored, so the same deck works for readers on a website.

Add where OBS is to turn on recording mode, the same format the reveal.js slides use:

```
?obs=localhost:4455
?obs=192.168.1.10:4455:password
?obs            (the remembered connection)
```

Recording mode adds the camera (C), recording (R) and the talk timer, and follows `pip`, `camera` and per-slide `<!-- camera: … -->` settings.

## Decks

Plain markdown (each heading is a card), the older `+++` format, and reveal.js decks (`---` and `--` separators) all open as they are. Press `?` in the app for the full reference: layouts, fragments, camera directives, recording, review and the ffmpeg cut.

## Develop

```sh
npm install
npm run dev        # rebuilds dist/index.html on every change in src/
npm run check      # type check, tests, build
```

| Path | What |
|---|---|
| `src/index.html`, `src/styles.css` | The page shell and styles |
| `src/app.js` | The app: layouts, camera, presenting, recording, review |
| `src/core/` | Pure modules with types and tests: parsing, camera steps, takes → cut → chapters → ffmpeg |
| `test/` | `node --test` tests for `src/core/` |
| `examples/` | Decks used as fixtures |

`dist/index.html` is committed so the app works straight from the repo; rebuild it with `npm run build` before committing.

## Status

Early. See [PLAN.md](PLAN.md): an embed view for websites (and a hugo-continuum layout, `engine: slidetake`), a hosted Studio at slidetake.com, and an npm package with `npx slidetake`.

## License

Apache License 2.0. See [LICENSE](LICENSE).
