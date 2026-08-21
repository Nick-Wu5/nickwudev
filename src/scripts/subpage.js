/** @typedef {import("../types/types.js").SubpageData} SubpageData */
/** @typedef {import("../types/types.js").ParagraphBlock} ParagraphBlock */
/** @typedef {import("../types/types.js").MediaBlock} MediaBlock */

/**
 * Escapes HTML-sensitive characters so authored content (title, dates,
 * tags, alt text) can be safely interpolated into a template string.
 *
 * @param {string} value
 * @returns {string}
 */
export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/**
 * Renders the full header block for a work/project subpage: org logo,
 * vertical divider, title + date range, and the tag pill row underneath —
 * everything shown above the body content.
 *
 * @param {SubpageData} data
 * @returns {string}
 */
export function renderHeader(data) {
  const { org, title, dateRange, tags } = data;

  const tagsHtml =
    tags && tags.length
      ? `<div class="subpage-tags">
        ${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>`
      : "";

  return `
    <div class="subpage-header">
      <div class="subpage-header-top">
        <img class="subpage-header-logo" src="${escapeHtml(org.logoSrc)}" alt="${escapeHtml(org.logoAlt)}" />
        <div class="subpage-header-divider"></div>
        <div class="subpage-header-info">
          <h1>${escapeHtml(title)}</h1>
          <h2>${escapeHtml(dateRange)}</h2>
        </div>
      </div>
      ${tagsHtml}
    </div>
  `.trim();
}

/**
 * Renders a standalone tag row using .tags-row and .tag classes,
 * escaping each tag label before interpolation.
 *
 * @param {string[]} tags
 * @returns {string}
 */
export function renderTags(tags) {
  const tagsHTML = tags
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");

  return `<div class="tags-row">${tagsHTML}</div>`;
}

/**
 * Renders a single content block and fails loudly for unsupported
 * block types so content-authoring typos are caught early.
 *
 * @param {ParagraphBlock | MediaBlock} block
 * @returns {string}
 */
export function renderBlock(block) {
  switch (block.type) {
    case "paragraph":
      return `<p>${escapeHtml(block.text)}</p>`;
    case "media": {
      const caption =
        typeof block.caption === "string" ? block.caption.trim() : "";
      const figcaption =
        caption.length > 0
          ? `<figcaption>${escapeHtml(caption)}</figcaption>`
          : "";

      return `<figure><img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt)}" loading="lazy" decoding="async" />${figcaption}</figure>`;
    }
    default: {
      const unknownType = /** @type {{ type?: string }} */ (block).type;
      throw new Error(`Unrecognized block type: ${String(unknownType)}`);
    }
  }
}

/**
 * Renders the .body-content wrapper containing all paragraph/media
 * blocks in the same order they are authored.
 *
 * @param {Array<ParagraphBlock | MediaBlock>} blocks
 * @returns {string}
 */
export function renderBody(blocks) {
  return `<div class="body-content">${blocks.map((block) => renderBlock(block)).join("")}</div>`;
}

/**
 * Renders the site-wide footer block shared by homepage and subpages,
 * including LinkedIn and Resume outbound links.
 *
 * @returns {string}
 */
export function renderFooter() {
  return `<div class="footer-section">

		<div class="footer-link">
			<a target="_blank" href="https://www.linkedin.com/in/nick-wu5/">LinkedIn</a>
			<i class="ph-bold ph-arrow-up-right"></i>
		</div>

		<div class="footer-link">
			<a href="/NicholasWuResume.pdf" target="_blank" rel="noopener">Resume</a>
			<i class="ph-bold ph-arrow-up-right"></i>
		</div>
	</div>`;
}

/**
 * Renders the subpage content-section by composing the rendered header
 * and body blocks. Outer container/header/footer wrappers are composed
 * by the caller.
 *
 * @param {SubpageData} data
 * @returns {string}
 */
export function renderSubpageHTML(data) {
  return `<div class="content-section">${renderHeader(data)}${renderBody(data.body)}</div>`;
}
