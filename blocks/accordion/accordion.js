/*
 * Accordion Block
 * Styling from lab2 (zeroto100/meejain) - Design Mind inspired
 * https://lab2--zeroto100--meejain.aem.live/lab2
 */

export default function decorate(block) {
  const section = block.closest('section');
  if (section) {
    section.classList.add('accordion-container');
  }

  const items = [...block.children];
  items.forEach((row) => {
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    const labelText = document.createElement('span');
    labelText.className = 'accordion-item-label-text';
    labelText.append(...label.childNodes);
    summary.append(labelText);

    const body = row.children[1];
    body.className = 'accordion-item-body';

    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);
    row.replaceWith(details);
  });

  const accordionItems = block.querySelectorAll('.accordion-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px',
  });

  accordionItems.forEach((item) => observer.observe(item));
}
