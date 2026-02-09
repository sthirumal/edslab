#!/usr/bin/env node
/**
 * Replace cards-skills block with accordion block in DA index page content.
 * Reads from stdin (JSON with content[0].text), outputs updated HTML for create_source.
 */
const chunks = [];
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => chunks.push(chunk));
process.stdin.on('end', () => {
  const raw = chunks.join('');
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    process.stderr.write('Invalid JSON\n');
    process.exit(1);
  }
  const text = data.content?.[0]?.text;
  if (!text) {
    process.stderr.write('Missing content[0].text\n');
    process.exit(1);
  }
  // Parse the inner string (remove JSON escaping)
  const inner = JSON.parse(text);
  const oldBlock =
    '<div><h2>Expertise</h2><div class="cards-skills"><div><div><p><strong>Frontend</strong><br> React, Vue.js, HTML5, CSS3, Tailwind, SAS</p></div></div><div><div><p><strong>Backend</strong><br> Node.js, Express, MongoDB, PostgreSQL</p></div></div><div><div><p><strong>Tools &amp; Platforms</strong><br> Figma, Git &amp; GitHub, Docker, AWS</p></div></div></div></div>';
  const newBlock =
    '<div><h2>Expertise</h2><div class="accordion"><div><div>Frontend</div><div>React, Vue.js, HTML5, CSS3, Tailwind, SAS</div></div><div><div>Backend</div><div>Node.js, Express, MongoDB, PostgreSQL</div></div><div><div>Tools &amp; Platforms</div><div>Figma, Git &amp; GitHub, Docker, AWS</div></div></div></div>';
  const updated = inner.replace(oldBlock, newBlock);
  process.stdout.write(updated);
});
