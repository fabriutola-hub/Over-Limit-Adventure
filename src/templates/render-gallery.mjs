import { galleryContent } from "../data/gallery.mjs";
import { escapeHtml, renderButtons, resolvePath } from "./layout.mjs";

export function renderGalleryPage(basePath) {
  return `  <main class="gallery-main">
    <section class="page-hero gallery-hero">
      <div class="container gallery-hero-grid">
        <div class="gallery-copy reveal">
          <span class="eyebrow">${escapeHtml(galleryContent.hero.eyebrow)}</span>
          <div class="gallery-stamp-row">
            ${galleryContent.hero.stamps.map((stamp) => `<span class="gallery-stamp">${escapeHtml(stamp)}</span>`).join("\n            ")}
          </div>
          <h1>${escapeHtml(galleryContent.hero.title)}</h1>
          <p class="lead">
            ${escapeHtml(galleryContent.hero.description)}
          </p>
${renderButtons(galleryContent.hero.actions, basePath, "gallery-hero-actions")}
        </div>

        <div class="gallery-hero-stack">
          ${galleryContent.panels
            .map(
              (panel) => `<article class="gallery-panel gallery-panel-photo reveal">
            <figure class="gallery-photo-frame">
              <img src="${escapeHtml(resolvePath(basePath, panel.image))}" alt="${escapeHtml(panel.imageAlt)}">
            </figure>
          </article>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section gallery-board-section" id="mosaico-galeria">
      <div class="container gallery-board-shell">
        <div class="gallery-board">
          ${galleryContent.cards
            .map((card) => {
              const variantClass = card.variant ? ` gallery-card-${card.variant}` : "";
              return `<article class="gallery-card${variantClass} reveal">
            <figure class="gallery-card-visual">
              <img src="${escapeHtml(resolvePath(basePath, card.image))}" alt="${escapeHtml(card.imageAlt)}">
            </figure>
          </article>`;
            })
            .join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section gallery-cta-section">
      <div class="container">
        <div class="gallery-cta-panel reveal">
          <div class="gallery-cta-copy">
            <span class="eyebrow">${escapeHtml(galleryContent.cta.eyebrow)}</span>
            <h2>${escapeHtml(galleryContent.cta.title)}</h2>
          </div>

${renderButtons(galleryContent.cta.actions, basePath, "gallery-cta-actions")}
        </div>
      </div>
    </section>
  </main>`;
}
