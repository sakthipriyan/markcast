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

## Open a deck from a link

On [slidetake.com](https://slidetake.com), press **✎ Editor**, then **⇣ Load**, and paste a GitHub file or folder link, a gist, or any URL that lets other sites read it. Or link straight to it:

```
https://slidetake.com/gh/owner/repo/path/deck.md          a file on GitHub (default branch)
https://slidetake.com/gh/owner/repo@branch/path/deck.md   another branch or tag
https://slidetake.com/gist/<id>                           a gist
https://slidetake.com/?src=https://…/deck.md              anything else
```

**Share** copies the short link to the deck and slide you're on (never the OBS address). A deck you wrote or changed in the editor goes inside the link itself, like edotor.net: `https://slidetake.com/#deflate:<compressed markdown>`. Nothing is uploaded. Opening such a link puts the deck in the editor and tidies the address; the editor marks later edits until you Share or Save.

For AI tools: the guide is plain markdown at [slidetake.com/help.md](https://slidetake.com/help.md), indexed by [llms.txt](https://slidetake.com/llms.txt).

## Recording

The bottom bar always has **Camera** (C), **● Record** (R) and **Fullscreen** (F). The camera is off until someone turns it on, and until then the deck's camera settings are ignored, so the same deck works for readers.

**● Record** asks where OBS is, or fill it in from the address (the same format the reveal.js slides use):

```
?obs=localhost:4455
?obs=192.168.1.10:4455:password
```

**Recording needs [OBS Studio](https://obsproject.com)** (free) with its WebSocket server on; OBS records and Slidetake drives it. The Record dialog checks the screen: if it isn't 16:9, [BetterDisplay](https://betterdisplay.pro) can add a 1920×1080 virtual screen to present and record on, so the video fits YouTube without bars.

From https://slidetake.com, OBS must run on the same computer (`localhost`): browsers block secure pages from plain `ws://` connections to other machines. To record with OBS on another machine, serve `dist/index.html` locally over http.

## Decks

Plain markdown (each heading is a card), the older `+++` format, and reveal.js decks (`---` and `--` separators) all open as they are. The full guide is itself a deck: [slidetake.com/help](https://slidetake.com/help) ([src/help.md](src/help.md)). In the app, `?` shows the keys.

## Develop

```sh
npm install
npm run dev        # http://127.0.0.1:8787, rebuilt on every change in src/, served like slidetake.com
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

Every push to `main` deploys to [slidetake.com](https://slidetake.com): `.github/workflows/deploy.yml` runs the checks and `wrangler deploy`, publishing `dist/` as an assets-only Cloudflare Worker (`wrangler.jsonc`). Pull requests run the checks and `wrangler deploy --dry-run`.

## Status

Early. See [PLAN.md](PLAN.md): an embed view for websites (and a hugo-continuum layout, `engine: slidetake`), a hosted Studio at slidetake.com, and an npm package with `npx slidetake`.

## License

Apache License 2.0. See [LICENSE](LICENSE).
