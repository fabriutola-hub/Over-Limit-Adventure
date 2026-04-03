import { homeContent } from "../data/home.mjs";
import { tourCount } from "../data/tours.mjs";
import { escapeHtml, renderButtons, renderMetaRow, resolvePath } from "./layout.mjs";

function renderHeroFacts(items) {
  return `<div class="home-hero-facts">
${items
  .map(
    (item) => `  <article class="home-hero-fact">
    <span class="home-fact-marker" aria-hidden="true"></span>
    <p>${escapeHtml(item)}</p>
  </article>`
  )
  .join("\n")}
</div>`;
}

function renderOperationDetails(items) {
  return `<div class="home-operation-details">
${items
  .map(
    (item) => `  <article class="home-operation-item">
    <strong>${escapeHtml(item.title)}</strong>
    <p>${escapeHtml(item.text)}</p>
  </article>`
  )
  .join("\n")}
</div>`;
}

function renderTrustCards(items) {
  return `<div class="home-trust-grid">
${items
  .map(
    (item) => `  <article class="home-trust-card">
    <strong>${escapeHtml(item.value)}</strong>
    <span>${escapeHtml(item.label)}</span>
  </article>`
  )
  .join("\n")}
</div>`;
}

function renderHeroStats(items) {
  return `<div class="home-hero-stats">
${items
  .map(
    (item) => `  <article class="home-hero-stat">
    <strong>${escapeHtml(item.value)}</strong>
    <span>${escapeHtml(item.label)}</span>
  </article>`
  )
  .join("\n")}
</div>`;
}

function renderStoryNotes(items) {
  return `<div class="home-story-notes">
${items
  .map(
    (item) => `  <article class="home-story-note reveal">
    <strong>${escapeHtml(item.title)}</strong>
    <p>${escapeHtml(item.text)}</p>
  </article>`
  )
  .join("\n")}
</div>`;
}

export function renderHomePage(basePath) {
  const heroActions = renderButtons(homeContent.hero.actions, basePath, "home-button-group");
  const trustItems = [
    { value: String(tourCount), label: homeContent.trustStrip.routeCountLabel },
    ...homeContent.trustStrip.items
  ];
  const heroStats = [
    { value: `${tourCount}+`, label: homeContent.trustStrip.routeCountLabel },
    { value: "Local", label: "base y operación real en La Paz" },
    { value: "Privado", label: "salidas a medida para personas y grupos" }
  ];
  const [ctaAction] = homeContent.cta.actions;

  return `  <main class="home-main">
    <section class="home-hero-section">
      <div class="container">
        <div class="home-hero-shell">
          <div class="home-hero-primary reveal">
            <div class="home-hero-kicker-row">
              <span class="home-kicker">${escapeHtml(homeContent.hero.label)}</span>
              <span class="home-chip">${escapeHtml(homeContent.hero.chip)}</span>
            </div>
            <h1>${escapeHtml(homeContent.hero.title)}</h1>
            <p class="home-hero-lead">${escapeHtml(homeContent.hero.description)}</p>
${heroActions}
            ${renderHeroFacts(homeContent.hero.quickFacts)}
          </div>

          <aside class="home-hero-secondary reveal">
            <article class="home-hero-visual-card">
              <div class="home-hero-visual">
                <img src="${escapeHtml(resolvePath(basePath, homeContent.hero.image))}" alt="${escapeHtml(homeContent.hero.imageAlt)}">
              </div>
              <div class="home-hero-visual-copy">
                <span class="home-mini-label">Expediciones con criterio</span>
                <p>${escapeHtml(homeContent.trustStrip.intro)}</p>
              </div>
              ${renderHeroStats(heroStats)}
            </article>

            <article class="home-operation-card">
              <div class="home-operation-heading">
                <span class="home-mini-label">${escapeHtml(homeContent.operationCard.label)}</span>
                <h2>${escapeHtml(homeContent.operationCard.title)}</h2>
              </div>
              <p>${escapeHtml(homeContent.operationCard.description)}</p>
              ${renderOperationDetails(homeContent.operationCard.details)}
            </article>
          </aside>
        </div>

        <div class="home-trust-shell reveal">
          <div class="home-trust-copy">
            <span class="home-section-label">Señales claras</span>
            <p class="home-trust-intro">${escapeHtml(homeContent.trustStrip.intro)}</p>
          </div>
          ${renderTrustCards(trustItems)}
        </div>
      </div>
    </section>

    <section class="section home-experience-section">
      <div class="container">
        <div class="home-section-head reveal">
          <span class="home-section-label">${escapeHtml(homeContent.experienceStory.label)}</span>
          <h2>${escapeHtml(homeContent.experienceStory.title)}</h2>
          <p>${escapeHtml(homeContent.experienceStory.description)}</p>
        </div>

        <div class="home-story-grid">
          <article class="home-story-highlight reveal">
            <span class="home-mini-label">${escapeHtml(homeContent.experienceStory.highlight.label)}</span>
            <h3>${escapeHtml(homeContent.experienceStory.highlight.title)}</h3>
            <p>${escapeHtml(homeContent.experienceStory.highlight.text)}</p>
          </article>

          ${renderStoryNotes(homeContent.experienceStory.notes)}
        </div>

        <div class="home-format-grid">
          ${homeContent.experiences
            .map(
              (item) => `<article class="home-format-card home-format-card-${escapeHtml(item.variant)} reveal">
            <div class="home-format-visual">
              <img src="${escapeHtml(resolvePath(basePath, item.image))}" alt="${escapeHtml(item.imageAlt)}">
            </div>
            <div class="home-format-body">
              <span class="home-mini-label">${escapeHtml(item.label)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
              ${renderMetaRow(item.meta, "home-meta-row")}
            </div>
          </article>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section home-showcase-section">
      <div class="container">
        <div class="home-section-head reveal">
          <span class="home-section-label">${escapeHtml(homeContent.featuredRouteBoard.label)}</span>
          <h2>${escapeHtml(homeContent.featuredRouteBoard.title)}</h2>
          <p>${escapeHtml(homeContent.featuredRouteBoard.description)}</p>
        </div>

        <div class="home-showcase-grid">
          <article class="home-featured-card reveal">
            <div class="home-featured-visual">
              <img src="${escapeHtml(resolvePath(basePath, homeContent.featuredRouteBoard.featured.image))}" alt="${escapeHtml(
                homeContent.featuredRouteBoard.featured.imageAlt
              )}">
            </div>
            <div class="home-featured-body">
              <span class="home-mini-label">${escapeHtml(homeContent.featuredRouteBoard.featured.label)}</span>
              <h3>${escapeHtml(homeContent.featuredRouteBoard.featured.title)}</h3>
              <p>${escapeHtml(homeContent.featuredRouteBoard.featured.description)}</p>
              ${renderMetaRow(homeContent.featuredRouteBoard.featured.meta, "home-meta-row")}
            </div>
          </article>

          <div class="home-route-board">
            <article class="home-route-intro reveal">
              <span class="home-mini-label">${escapeHtml(homeContent.featuredRouteBoard.routesIntro.label)}</span>
              <p>${escapeHtml(homeContent.featuredRouteBoard.routesIntro.text)}</p>
            </article>

            ${homeContent.featuredRouteBoard.routes
              .map(
                (route) => `<article class="home-route-card reveal">
              <div class="home-route-visual">
                <img src="${escapeHtml(resolvePath(basePath, route.image))}" alt="${escapeHtml(route.imageAlt)}">
              </div>
              <div class="home-route-body">
                <span class="home-mini-label">${escapeHtml(route.label)}</span>
                <h3>${escapeHtml(route.title)}</h3>
                <p>${escapeHtml(route.description)}</p>
              </div>
            </article>`
              )
              .join("\n            ")}
          </div>
        </div>
      </div>
    </section>

    <section class="section home-cta-section">
      <div class="container">
        <div class="home-cta-panel reveal">
          <div class="home-cta-copy">
            <span class="home-section-label">${escapeHtml(homeContent.cta.label)}</span>
            <h2>${escapeHtml(homeContent.cta.title)}</h2>
            <p>${escapeHtml(homeContent.cta.description)}</p>
          </div>

          <div class="home-cta-actions">
            <a class="button button-${escapeHtml(ctaAction.variant)}" href="${escapeHtml(resolvePath(basePath, ctaAction.href))}">${escapeHtml(
              ctaAction.label
            )}</a>
            <span class="home-cta-note">${escapeHtml(homeContent.cta.note)}</span>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}
