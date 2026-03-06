# Icon Bullet Lists — Implementation Reference (Swapna Thirumala)

Quick reference for the icon-as-bullet list feature. Implemented in this repo; reuse or adapt in others.

## File Locations (this repo)

| Purpose        | Path |
|----------------|------|
| JS logic       | `scripts/icon-bullet-lists.js` |
| CSS            | `styles/icon-bullet-lists.css` |
| Wired in       | `scripts/scripts.js` (import + call in `decorateMain`; CSS loaded in `loadLazy`) |
| Check icon     | `icons/check.svg` |
| Search icon    | `icons/search.svg` |
| Draft test     | `drafts/icon-bullets.plain.html` |

## Authoring

- In list item text, start with `:icon-<name>:` (e.g. `:icon-search:`, `:icon-check:`).
- `<name>` must match a file `icons/<name>.svg`.

## Key Code Points

- **Regex:** `/^:icon-([a-z0-9-]+):\s*/i` — captures icon name at start of LI text.
- **List class:** `icon-bullets` on `ul`/`ol`.
- **Item class:** `has-icon-bullet` on `li`.
- **Icon element:** `span.icon.icon-<name>` with `<img src=".../icons/<name>.svg">`; create via a helper that uses `window.hlx.codeBasePath` for the base path.
- **Integration:** Call the decorator from `decorateMain()` after `decorateSections()` and `decorateBlocks()`; load CSS in `loadLazy()`.

## Testing

- Run: `aem up --html-folder drafts`
- Open: `http://localhost:3000/drafts/icon-bullets`
