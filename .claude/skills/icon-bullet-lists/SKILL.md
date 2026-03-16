---
name: Icon Bullet Lists
description: Implements or reuses list items that use custom icons instead of default bullets (e.g. :icon-search:, :icon-check:). Use when the user wants UL/OL bullets replaced by icons, with text wrapping aligned like regular bullets. Authoring uses :icon-name: at the start of each LI.
---

# Icon Bullet Lists (Swapna Thirumala)

This skill documents and guides implementation of **icon-as-bullet** lists in AEM Edge Delivery Services: list items whose marker is a custom icon (checkbox, arrow, search, etc.) instead of the default bullet, with wrapped text aligning to the first line (same as regular bullets).

## When to Use This Skill

- The user wants to replace traditional `ul` / `ol` bullets with icons (e.g. checkmark, arrow, search).
- The user mentions "icon bullets", ":icon-name: in list items", or "list style with icons".
- You are adding this feature to a project that does not yet have it, or documenting it for reuse.

## Problem and Acceptance Criteria

**Problem:** Authors want list items to show an icon (e.g. checkbox, arrow) instead of the default bullet.

**Acceptance criteria:**
- If an `li` starts with an icon (e.g. via `:icon-search:` text or an existing `span.icon`), replace the list-style bullet with that icon.
- Wrapped text must not appear under the icon; it must align with the first line (same behavior as regular bullets).

**Authoring example:**
```text
:icon-search: Here is LI number one
:icon-search: Second item is here
:icon-check: Task one
```

## Content Model (Authoring)

- **Pattern:** At the start of each list item, authors type `:icon-<name>:` where `<name>` matches an icon file `icons/<name>.svg`.
- **Supported in:** Default content (sections with `ul` / `ol`), in any list under `main`.
- **Alternative:** If the CMS or pipeline already outputs `<span class="icon icon-<name>">` as the first child of an `li`, the same styling applies; no text parsing needed.

## Implementation Overview

1. **JavaScript** (`.claude/skills/icon-bullet-lists/scripts/icon-bullet-lists.js`): Export `decorateIconBulletLists(main)`. After sections and blocks are decorated, run it; for each `ul`/`ol` in `main`, for each `li` whose text starts with `:icon-<name>:`, create `span.icon` with img, strip the prefix, add classes `icon-bullets` / `has-icon-bullet`.

2. **CSS** (`.claude/skills/icon-bullet-lists/scripts/icon-bullet-lists.css`): Rules for `main ul.icon-bullets`, `main .has-icon-bullet`, and `.icon` size so wrapped text aligns. Load in `loadLazy()`.

3. **Icons:** Each referenced icon must exist as `icons/<name>.svg` (e.g. `icons/search.svg`, `icons/check.svg`).

## In This Repository

The canonical implementation lives in this skill’s `scripts/` folder; the site uses copies in `scripts/` and `styles/` at runtime (see below).

- **JS (canonical):** `.claude/skills/icon-bullet-lists/scripts/icon-bullet-lists.js` — exports `decorateIconBulletLists()`; runtime copy in `scripts/icon-bullet-lists.js` is imported and called from `scripts/scripts.js` in `decorateMain()`.
- **CSS (canonical):** `.claude/skills/icon-bullet-lists/scripts/icon-bullet-lists.css` — rules for `main ul.icon-bullets`, `main .has-icon-bullet`; runtime copy in `styles/icon-bullet-lists.css` is loaded in `loadLazy()`.
- **Icons:** `icons/check.svg`, `icons/search.svg`.
- **Test content:** `drafts/icon-bullets.plain.html` — default content with `ul`/`li` using `:icon-search:` and `:icon-check:`. Preview at `/drafts/icon-bullets` with `aem up --html-folder drafts`.

When working in this repo, edit the JS/CSS in `.claude/skills/icon-bullet-lists/scripts/`, then copy the updated files to `scripts/icon-bullet-lists.js` and `styles/icon-bullet-lists.css` so the site uses the latest version. When adding to another repo, copy `icon-bullet-lists.js` and `icon-bullet-lists.css` from this skill’s `scripts/` folder and wire them in; see `resources/implementation-reference.md`.

## Related Skills

- **content-driven-development:** Use for new projects or when defining authoring and test content.
- **building-blocks:** Use if you prefer to implement this as a dedicated block instead of default-content decoration.

## References

- Implementation details and code pointers: see `resources/implementation-reference.md` in this skill directory.
