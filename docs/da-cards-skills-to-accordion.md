# Replace cards-skills with Accordion on DA index page

## Why this doc

The DA page at **https://da.live/edit#/sthirumal/edslab/index** could not be read or updated by the MCP (401 Unauthorized). Use the steps below to do the change in the DA editor and preview locally.

## 1. In DA: Replace the block

1. Open **https://da.live/edit#/sthirumal/edslab/index** in your browser and sign in.
2. Find the section that contains the **cards-skills** block (skills/capabilities section).
3. Replace the **cards-skills** block with an **accordion** block, keeping the same content:

### Accordion content model

- **One row per item.** Each row has **two columns**:
  - **Column 1 (label):** The item title (e.g. skill name) — becomes the accordion header.
  - **Column 2 (body):** The rest of the content (description, optional image) — becomes the expandable body.

### Mapping from cards-skills to accordion

| cards-skills (per card) | Accordion (per row) |
|-------------------------|----------------------|
| Card image (optional)   | Put in Column 2 (body) |
| Card title              | Column 1 (label)     |
| Card description        | Column 2 (body)       |

**Example:** If a card was “Frontend” with description “React, Vue.js, HTML5…”, the accordion row is:

- **Column 1:** `Frontend`
- **Column 2:** `React, Vue.js, HTML5, CSS3, Tailwind, SAS` (and the image if you had one)

### In the DA table

1. Change the block name from **cards-skills** to **accordion** (so the first cell of the block table says “accordion”).
2. For each former card, keep one row with two cells:
   - Cell 1: title only (label).
   - Cell 2: description (and image if you want it inside the expanded body).

Save/publish the page in DA when done.

## 2. Preview locally

A draft page is in **drafts/index.plain.html** with the index structure and an accordion in place of cards-skills so you can preview the block.

Run:

```bash
npx -y @adobe/aem-cli up --no-open --forward-browser-logs --html-folder drafts
```

Then open: **http://localhost:3000/drafts/index**

You’ll see the accordion block with sample “Expertise” content. After you edit the real page in DA, the live DA URL will show your actual content.

## 3. If DA MCP 401 persists

If you need the MCP to read/update DA for `sthirumal/edslab`, check:

- DA/MCP authentication and that the correct org/repo are allowed.
- Cursor MCP settings and any project-specific DA config.
