# Copilot Instructions

This is Nicolás Gonzalez's personal portfolio site: a small vanilla JS/HTML/SCSS
webpack app, published as static output via GitHub Pages.

## Commands

Install deps with `yarn install` (yarn.lock is present, no npm-lock).

- `yarn start` — webpack-dev-server on port 9000, opens browser, serves from `./docs`
- `yarn build` — webpack build (mode: `development`), source is `src/js/index.js`,
  output goes to `docs/app.bundle.js` (the `docs/` folder is the GitHub Pages
  publish target, so build output is committed, not gitignored)
- `yarn watch` — webpack `--watch` for incremental rebuilds
- `yarn check` — `prettier --check .`
- `yarn write` — `prettier --write .` (auto-runs on staged files via husky
  `pre-commit` hook using `pretty-quick --staged`)

There is no test suite and no separate lint script (ESLint config exists at
`.eslintrc.js` — `eslint:recommended` — but isn't wired into a package.json
script; run `npx eslint src` directly if needed).

Prettier is configured for tabs, width 2 (`.prettierrc.json`); `.editorconfig`
also enforces tab indentation. `build`, `coverage`, and `dist` are excluded
from prettier via `.prettierignore`.

## Architecture

- `src/index.html` is the HTML template (used by `html-webpack-plugin`); it
  only contains an empty `<div id="root">` — all DOM content is injected by JS.
- `src/js/index.js` is the sole entry point. It imports HTML fragments from
  `src/components/*.html` as strings (via `html-loader`) and concatenates them
  into `root.innerHTML`. There is no component framework or router — page
  structure is built by string concatenation and direct DOM APIs
  (`document.createElement`, `classList`, `innerHTML`).
- The site has a scripted intro sequence in `index.js`: a Matrix-style falling
  characters canvas animation runs for a fixed duration (via chained
  `setTimeout`s), then is removed and replaced with a typewriter effect that
  writes `greetText` letter-by-letter into `.main-block__text`, followed by an
  image reveal (`paintfirsImage`). This timing sequence is order-dependent —
  changes to one delay/timeout typically require adjusting the others.
- `src/js/Blink.js` exports a `Blink` class for a canvas-based blinking
  text/cursor effect; it is currently unused by `index.js` but kept as
  available utility code.
- `src/js/utils.js` uses CommonJS `exports.foo =` (not ES `export`), unlike
  every other JS file in `src/js`, which use ES module `import`/`export`.
- Styling lives entirely in `src/css/style.scss` using BEM-style nested
  selectors (e.g. `.main-block`, `&__text`, `&__image`) compiled via
  `sass-loader`/`css-loader`/`style-loader` (injected at runtime, not
  extracted to a separate CSS file). Responsive layout is a single
  `@media (min-width: 76.8rem)` breakpoint near the bottom of the file.
- Images are imported directly in JS (e.g. `import Picture1 from
  "../assets/foto1.jpg"`) and handled by webpack's `asset/resource` module type.
