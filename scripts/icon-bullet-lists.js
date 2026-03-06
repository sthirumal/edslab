/**
 * Icon-as-bullet list support (Swapna Thirumala)
 * Replaces list-style bullet with an icon when an LI starts with :icon-name: or span.icon.
 * Ensures wrapped text aligns with the first line (same as regular bullets).
 */

/**
 * Regex for :icon-name: at the start of list item content.
 * Captures icon name (e.g. search, arrow, check).
 */
const ICON_BULLET_PATTERN = /^:icon-([a-z0-9-]+):\s*/i;

/**
 * Creates an icon element for use as a list bullet (img in span.icon).
 * Mirrors aem.js decorateIcon behavior; used for LIs that start with :icon-name:
 * @param {string} iconName - Icon name (e.g. 'search') for /icons/{iconName}.svg
 * @returns {HTMLSpanElement} span.icon with img
 */
function createIconBulletElement(iconName) {
  const span = document.createElement('span');
  span.className = `icon icon-${iconName}`;
  span.setAttribute('aria-hidden', 'true');
  const img = document.createElement('img');
  img.src = `${window.hlx.codeBasePath}/icons/${iconName}.svg`;
  img.alt = '';
  img.loading = 'lazy';
  img.width = 16;
  img.height = 16;
  img.dataset.iconName = iconName;
  span.append(img);
  return span;
}

/**
 * Replaces list-style bullet with an icon when an LI starts with :icon-name: or span.icon.
 * Ensures wrapped text aligns with the first line (same as regular bullets).
 * @param {Element} main The main element
 */
export function decorateIconBulletLists(main) {
  const lists = main.querySelectorAll('ul, ol');
  lists.forEach((list) => {
    let listHasIconBullet = false;
    list.querySelectorAll(':scope > li').forEach((li) => {
      const first = li.firstChild;
      let iconSpan = null;
      let iconName = null;

      if (first?.nodeType === Node.ELEMENT_NODE && first.classList?.contains('icon')) {
        const iconClass = Array.from(first.classList).find((c) => c.startsWith('icon-'));
        if (iconClass) {
          iconSpan = first;
          iconName = iconClass.substring(5);
        }
      } else if (first?.nodeType === Node.TEXT_NODE) {
        const text = first.textContent || '';
        const match = text.match(ICON_BULLET_PATTERN);
        if (match) {
          iconName = match[1];
          iconSpan = createIconBulletElement(iconName);
          const rest = text.slice(match[0].length);
          if (rest) {
            first.textContent = rest;
            li.insertBefore(iconSpan, first);
          } else {
            first.remove();
            li.prepend(iconSpan);
          }
        }
      }

      if (iconName) {
        if (iconSpan && !iconSpan.classList.contains('icon')) {
          iconSpan.classList.add('icon', `icon-${iconName}`);
        }
        li.classList.add('has-icon-bullet');
        listHasIconBullet = true;
      }
    });
    if (listHasIconBullet) {
      list.classList.add('icon-bullets');
    }
  });
}
