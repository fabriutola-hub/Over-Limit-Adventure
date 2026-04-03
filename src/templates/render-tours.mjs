import { siteConfig } from "../data/site.mjs";
import { tourFilters, tourPageContent, tourSections } from "../data/tours.mjs";
import { escapeHtml, renderButtons, renderCardTags, resolvePath } from "./layout.mjs";

function renderTourCard(basePath, card) {
  const variantClass = card.variant ? ` adventure-board-card-${card.variant}` : "";
  const heightMarkup = card.height
    ? `<span class="adventure-board-height">${escapeHtml(card.height)}</span>`
    : '<span class="adventure-board-height"></span>';

  return `<article class="adventure-board-card${variantClass} reveal">
            <div class="adventure-board-visual">
              <img src="${escapeHtml(resolvePath(basePath, card.image))}" alt="${escapeHtml(card.imageAlt)}">
            </div>
            <div class="adventure-board-body">
              <div class="adventure-board-topline">
                <span class="pill">${escapeHtml(card.category)}</span>
                ${heightMarkup}
              </div>
              <h3>${escapeHtml(card.title)}</h3>
              <p>${escapeHtml(card.description)}</p>
              ${renderCardTags(card.tags, "adventure-board-tags")}
            </div>
          </article>`;
}

function renderPosterMetrics() {
  return tourPageContent.poster.metrics
    .map(
      (metric) => `            <div>
              <strong>${escapeHtml(metric.value)}</strong>
              <span>${escapeHtml(metric.label)}</span>
            </div>`
    )
    .join("\n");
}

function renderRhythmCards() {
  return tourPageContent.rhythmCards
    .map(
      (card) => `        <article class="adventures-rhythm-card${card.variant === "blue" ? " adventures-rhythm-card-blue" : ""} reveal">
          <strong>${escapeHtml(card.title)}</strong>
          <p>${escapeHtml(card.text)}</p>
        </article>`
    )
    .join("\n");
}

function renderHeroStamps() {
  const stampClasses = ["", " adventures-stamp-blue", " adventures-stamp-white", ""];

  return tourPageContent.hero.stamps
    .map(
      (stamp, index) =>
        `            <span class="adventures-stamp${stampClasses[index] ?? ""}">${escapeHtml(stamp)}</span>`
    )
    .join("\n");
}

function renderTourFilters() {
  return tourFilters
    .map(
      (filter) => `          <button
            class="adventures-filter-button"
            type="button"
            data-tour-filter="${escapeHtml(filter.key)}"
            aria-pressed="${filter.key === "all" ? "true" : "false"}"
          >
            ${escapeHtml(filter.label)}
          </button>`
    )
    .join("\n");
}

export function renderToursPage(basePath) {
  return `  <main class="adventures-main">
    <section class="page-hero adventures-editorial-hero">
      <div class="container adventures-editorial-shell">
        <div class="adventures-intro-stack reveal">
          <span class="eyebrow">${escapeHtml(tourPageContent.hero.eyebrow)}</span>
          <div class="adventures-stamp-row">
${renderHeroStamps()}
          </div>
          <h1>${escapeHtml(tourPageContent.hero.title)}</h1>
          <p class="adventures-intro-lead">
            ${escapeHtml(tourPageContent.hero.description)}
          </p>
${renderButtons(tourPageContent.hero.actions, basePath, "adventures-editorial-actions")}
        </div>

        <article class="adventures-poster-card reveal">
          <div class="adventures-poster-head">
            <span>${escapeHtml(siteConfig.brandName)}</span>
            <span>Bolivia / guiado local</span>
          </div>
          <div class="adventures-poster-visual">
            <img src="${escapeHtml(resolvePath(basePath, tourPageContent.poster.image))}" alt="${escapeHtml(
    tourPageContent.poster.imageAlt
  )}">
          </div>
          <div class="adventures-poster-foot">
${renderPosterMetrics()}
          </div>
        </article>

        <aside class="adventures-side-notes reveal">
          <article class="adventures-note adventures-note-blue">
            <span class="adventures-note-kicker">${escapeHtml(tourPageContent.sideNote.label)}</span>
            <p>${escapeHtml(tourPageContent.sideNote.text)}</p>
          </article>
        </aside>
      </div>
    </section>

    <section class="section adventures-rhythm-section">
      <div class="container adventures-rhythm-strip">
${renderRhythmCards()}
      </div>
    </section>

    <section class="section adventures-filter-section" id="catalogo-aventuras">
      <div class="container adventures-filter-shell reveal">
        <div class="adventures-filter-copy">
          <span class="eyebrow">Filtro de catalogo</span>
          <h2>Explora el tablero por tipo de aventura.</h2>
          <p>Elige una categoria para quedarte solo con trekking, climbing, amazon o classic tours.</p>
        </div>
        <div class="adventures-filter-controls" data-tour-filters>
${renderTourFilters()}
        </div>
      </div>
    </section>

    ${tourSections
      .map(
        (section) => `    <section class="section adventures-catalog-section" data-tour-category="${escapeHtml(section.id)}">
      <div class="container adventures-catalog-shell">
        <aside class="adventures-catalog-rail reveal">
          <span class="eyebrow">${escapeHtml(section.eyebrow)}</span>
          <h2>${escapeHtml(section.title)}</h2>
          <p>
            ${escapeHtml(section.summary)}
          </p>
          <div class="adventures-rail-metrics">
            ${section.metrics
              .map(
                (metric) => `<div>
              <strong>${escapeHtml(metric.label)}</strong>
              <span>${escapeHtml(metric.value)}</span>
            </div>`
              )
              .join("\n            ")}
          </div>
        </aside>

        <div class="adventures-route-board">
          ${section.cards.map((card) => renderTourCard(basePath, card)).join("\n          ")}
        </div>
      </div>
    </section>`
      )
      .join("\n\n")}

    <section class="section adventures-cta-section">
      <div class="container">
        <div class="adventures-cta-banner reveal">
          <div class="adventures-cta-title">
            <span class="adventures-stamp adventures-stamp-blue">${escapeHtml(tourPageContent.cta.label)}</span>
            <h2>${escapeHtml(tourPageContent.cta.title)}</h2>
          </div>
          <p>
            ${escapeHtml(tourPageContent.cta.description)}
          </p>
          <a class="button button-${escapeHtml(tourPageContent.cta.action.variant)}" href="${escapeHtml(
            resolvePath(basePath, tourPageContent.cta.action.href)
          )}">${escapeHtml(tourPageContent.cta.action.label)}</a>
        </div>
      </div>
    </section>
  </main>`;
}
