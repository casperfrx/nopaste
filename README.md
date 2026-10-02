[![Intro](https://github.com/bokub/nopaste/raw/images/intro.png)][intro-img]

# What is NoPaste?

NoPaste is an open-source website similar to Pastebin where you can store any piece of code, and generate links for easy sharing

However, what makes NoPaste special is that it works with **no database**, and **no back-end code**. Instead, the data is compressed and **stored entirely in the link** that you share, nowhere else!

### Because of this design:

-   🗑️ Your data **cannot be deleted** from NoPaste
-   🔞 Your data **cannot be censored**
-   👁️ The server hosting NoPaste (or any clone of it) **cannot read or access** your data
-   ⏳ Your data will be accessible **forever** (as long as you have the link)
-   🔀 You can access your data on **every NoPaste clone**, including your own.
-   🔍 Google **will not index** your data, even if your link is public

> **Note:** This project is a copy of [Topaz's paste service][topaz-example], with a reworked design and a few additional features (syntax highlighting, line numbers, offline usage, embedding...)

## How it works

When you click on "Generate Link", NoPaste compresses the whole text using the
[LZMA algorithm](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Markov_chain_algorithm), encodes it in
[Base64](https://en.wikipedia.org/wiki/Base64)

When you open a link, NoPaste reads, decodes, and decompresses whatever is after the `#`, and displays the result in the editor.

This process is done entirely **in your browser**, and the web server hosting NoPaste [never has access to the fragment](https://en.wikipedia.org/wiki/Fragment_identifier)

For example, [this is the CSS code used by NoPaste][example]

## Other features

### Embedded NoPaste snippets

You can include NoPaste code snippets into your own website by clicking the _Embed_ button and using the generated HTML code.

### Offline usage

When you visit NoPaste for the first time, its code is saved in your browser cache. After that, every NoPaste link you open
will load really quick, even if your internet connection is slow.

What if you have no internet connexion at all? No problem, NoPaste will still work perfectly!

### Editor features

-   Syntax highlighting (use the language selector)
-   Enable / disable line wrapping (use the button next to the language selector)
-   Delete line (`Ctrl+D`)
-   Multiple cursors (`Ctrl+Click`)
-   Usual keyboard shortuts (`Ctrl+A`, `Ctrl+Z`, `Ctrl+Y`...)

## Maximum sizes for links

NoPaste is great for sharing code snippets on various platforms.

These are the maximum link lengths on some apps and browsers.

| App     | Max length |
| ------- | ---------- |
| Reddit  | 10,000     |
| Twitter | 4,088      |
| Slack   | 4,000      |
| QR Code | 2,610      |
| Bitly   | 2,048      |
| TinyURL | 32,000     |

| Browser         | Max length                | Notes                                   |
| --------------- | ------------------------- | --------------------------------------- |
| Google Chrome   | (win) 32,779 (mac) 10,000 | Will not display, but larger links work |
| Firefox         | >64,000                   |                                         |
| Microsoft IE 11 | 4,043                     | Will not show more than 2,083           |
| Microsoft Edge  | 2,083                     | Anything over 2083 will fail            |
| Android         | 8,192                     |                                         |
| Safari          | Lots                      |                                         |

## Generate NoPaste links

NoPaste links can be created easily from your system's command line:

```bash
# Linux
echo -n 'Hello World' | lzma | base64 -w0 | xargs -0 printf "http://127.0.0.1/#%s\n"

# Mac
echo -n 'Hello World' | lzma | base64 | xargs -0 printf "http://127.0.0.1/#%s\n"

# Windows / WSL / Linux
echo -n 'Hello World' | xz --format=lzma | base64 -w0 | printf "http://127.0.0.1/#%s\n" "$(cat -)"
```

## Dependencies

NoPaste loads **nothing from external hosts**: every third-party library, the language modes and the fonts are vendored in this repository, so the site is just a set of static files.

| File(s)                           | Contents                                                                                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deps.js`                         | [lzma](https://github.com/LZMA-JS/LZMA-JS), [Slim Select](https://slimselectjs.com), [clipboard.js](https://clipboardjs.com), [Micromodal](https://micromodal.vercel.app) |
| `deps.css`                        | [Bootstrap](https://getbootstrap.com) grid, Slim Select, [microtip](https://github.com/ghosh/microtip)                                                                    |
| `editor/editor.js`                | [CodeMirror 6](https://codemirror.net) editor bundle (exposes `window.NoPasteEditor`)                                                                                     |
| `editor/chunks/`                  | CodeMirror languages, only downloaded when selected                                                                                                                       |
| `vendor/lzma/`                    | LZMA web worker                                                                                                                                                           |
| `vendor/fonts/`                   | [JetBrains Mono](https://www.jetbrains.com/lp/mono/), [Roboto](https://fonts.google.com/specimen/Roboto)                                                                  |
| `vendor/THIRD-PARTY-LICENSES.txt` | Licenses of everything above                                                                                                                                              |

These files are **generated**, don't edit them by hand. The versions are pinned in [`tools/package.json`](tools/package.json) and the editor setup lives in [`tools/src/`](tools/src). To update or rebuild (Node.js 18+):

```bash
cd tools
npm install --save-exact --save-dev <package>@latest   # optional: bump a dependency
npm ci && npm run build                                  # or simply `make deps` from the repository root
```

The build also rewrites the version and precache list of the service worker (`sw.js`), so re-run it after editing `index.html`, `script.js` or `style.css` as well, otherwise visitors keep the cached version. Nothing has to be built at deploy time.

## Deploy your own version of NoPaste

NoPaste is just a bunch of static files, making it really easy to deploy on any kind of file server.
