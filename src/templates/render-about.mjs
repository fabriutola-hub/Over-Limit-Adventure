import { aboutContent } from "../data/about.mjs";
import { siteConfig } from "../data/site.mjs";
import { escapeHtml, renderButtons, renderList, resolvePath } from "./layout.mjs";

function resolveDetailValue(item) {
  if (item.valueKey === "shortOfficeAddress") {
    return siteConfig.contact.shortOfficeAddress;
  }

  return item.value;
}

export function renderAboutPage(basePath) {
  return `  <main class="about-main">
    <section class="page-hero about-hero">
      <div class="container">
        <div class="about-premium-hero">
          <div class="about-premium-copy reveal">
            <span class="eyebrow">${escapeHtml(aboutContent.hero.eyebrow)}</span>
            <span class="about-premium-kicker">${escapeHtml(aboutContent.hero.label)}</span>
            <h1>${escapeHtml(aboutContent.hero.title)}</h1>
            <p class="lead">
              ${escapeHtml(aboutContent.hero.description)}
            </p>
${renderButtons(aboutContent.hero.actions, basePath, "about-premium-actions")}
          </div>

          <div class="about-premium-visual reveal">
            <figure class="about-premium-image">
              <img src="${escapeHtml(resolvePath(basePath, aboutContent.hero.image))}" alt="${escapeHtml(aboutContent.hero.imageAlt)}">
            </figure>

            <article class="about-premium-feature">
              <span class="about-premium-mini-label">${escapeHtml(aboutContent.hero.feature.label)}</span>
              <h2>${escapeHtml(aboutContent.hero.feature.title)}</h2>
              <p>${escapeHtml(aboutContent.hero.feature.text)}</p>
              ${renderList(aboutContent.hero.quickFacts, "about-premium-list")}
            </article>
          </div>
        </div>

        <div class="about-premium-stats">
          ${aboutContent.hero.stats
            .map(
              (item) => `<article class="about-premium-stat reveal">
            <strong>${escapeHtml(item.value)}</strong>
            <span>${escapeHtml(item.label)}</span>
          </article>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section about-premium-story-section">
      <div class="container about-premium-story-grid">
        <article class="about-premium-story-copy reveal">
          <span class="eyebrow">${escapeHtml(aboutContent.story.eyebrow)}</span>
          <h2>${escapeHtml(aboutContent.story.title)}</h2>
          <p class="about-premium-story-intro">${escapeHtml(aboutContent.story.intro)}</p>
          ${aboutContent.story.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n          ")}
        </article>

        <aside class="about-premium-story-panel reveal">
          <span class="about-premium-mini-label">Identidad de marca</span>
          <div class="about-premium-value-list">
            ${aboutContent.story.values
              .map(
                (item, index) => `<article class="about-premium-value-item">
              <strong>${String(index + 1).padStart(2, "0")}</strong>
              <p>${escapeHtml(item)}</p>
            </article>`
              )
              .join("\n            ")}
          </div>
          <div class="about-premium-details">
            ${aboutContent.story.details
              .map(
                (item) => `<article class="about-premium-detail">
              <span>${escapeHtml(item.label)}</span>
              <strong>${escapeHtml(resolveDetailValue(item))}</strong>
            </article>`
              )
              .join("\n            ")}
          </div>
        </aside>
      </div>
    </section>

    <section class="section about-premium-highlights-section">
      <div class="container">
        <div class="about-premium-section-intro reveal">
          <span class="eyebrow">${escapeHtml(aboutContent.highlights.eyebrow)}</span>
          <h2>${escapeHtml(aboutContent.highlights.title)}</h2>
          <p>${escapeHtml(aboutContent.highlights.description)}</p>
        </div>

        <div class="about-premium-highlight-grid">
          ${aboutContent.highlights.items
            .map(
              (item) => `<article class="about-premium-highlight about-premium-highlight-${escapeHtml(item.variant)} reveal">
            <span class="about-premium-mini-label">${escapeHtml(item.label)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section about-premium-destinations-section">
      <div class="container about-premium-destinations-grid">
        <div class="about-premium-section-intro reveal">
          <span class="eyebrow">${escapeHtml(aboutContent.destinations.eyebrow)}</span>
          <h2>${escapeHtml(aboutContent.destinations.title)}</h2>
          <p>${escapeHtml(aboutContent.destinations.description)}</p>
        </div>

        <figure class="about-premium-destination-visual reveal">
          <img src="${escapeHtml(resolvePath(basePath, aboutContent.destinations.image))}" alt="${escapeHtml(
    aboutContent.destinations.imageAlt
  )}">
        </figure>

        <div class="about-premium-destination-list">
          ${aboutContent.destinations.items
            .map(
              (item) => `<article class="about-premium-destination about-premium-destination-${escapeHtml(item.variant)} reveal">
            <span class="about-premium-destination-tag">${escapeHtml(item.tag)}</span>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section about-premium-credibility-section">
      <div class="container about-premium-credibility-grid">
        <div class="about-premium-credibility-copy reveal">
          <span class="eyebrow">${escapeHtml(aboutContent.credibility.eyebrow)}</span>
          <h2>${escapeHtml(aboutContent.credibility.title)}</h2>
          <p>${escapeHtml(aboutContent.credibility.description)}</p>
          ${renderList(aboutContent.credibility.notes, "about-premium-list")}
        </div>

        <figure class="about-premium-credibility-image reveal">
          <img src="${escapeHtml(resolvePath(basePath, aboutContent.credibility.image))}" alt="${escapeHtml(
    aboutContent.credibility.imageAlt
  )}">
        </figure>

        <div class="about-premium-pillar-grid">
          ${aboutContent.credibility.pillars
            .map(
              (item) => `<article class="about-premium-pillar about-premium-pillar-${escapeHtml(item.variant)} reveal">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section about-premium-cta-section">
      <div class="container">
        <article class="about-premium-cta reveal">
          <div class="about-premium-cta-copy">
            <span class="eyebrow">${escapeHtml(aboutContent.cta.eyebrow)}</span>
            <h2>${escapeHtml(aboutContent.cta.title)}</h2>
            <p>${escapeHtml(aboutContent.cta.description)}</p>
          </div>

          <div class="about-premium-cta-actions">
${renderButtons(aboutContent.cta.actions, basePath, "about-premium-cta-buttons")}
            <span class="about-premium-cta-note">${escapeHtml(aboutContent.cta.note)}</span>
          </div>
        </article>
      </div>
    </section>
  </main>`;
}
