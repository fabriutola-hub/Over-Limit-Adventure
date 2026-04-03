import { contactContent } from "../data/contact.mjs";
import { siteConfig } from "../data/site.mjs";
import { escapeHtml, renderButtons } from "./layout.mjs";

function resolveRailCard(card) {
  const sharedValue = card.valueKey ? siteConfig.contact[card.valueKey] : "";
  const sharedText = card.textKey ? siteConfig.contact[card.textKey] : card.text;

  return {
    ...card,
    title: sharedValue,
    text: sharedText
  };
}

export function renderContactPage(basePath) {
  const introActions = renderButtons(
    [
      { label: "Enviar mensaje", href: "pages/contacto.html#contact-form", variant: "primary" },
      {
        label: "WhatsApp directo",
        href: siteConfig.contact.whatsappUrl,
        variant: "secondary",
        target: "_blank"
      }
    ],
    basePath,
    "contact-intro-actions"
  );

  return `  <main class="contact-main">
    <section class="contact-command-section">
      <div class="container contact-command-grid">
        <article class="contact-intro-panel reveal">
          <span class="eyebrow">${escapeHtml(contactContent.intro.eyebrow)}</span>
          <h1>${escapeHtml(contactContent.intro.title)}</h1>
          <p class="lead">
            ${escapeHtml(contactContent.intro.description)}
          </p>
${introActions}
          <div class="contact-intro-note">
            <strong>${escapeHtml(contactContent.intro.noteTitle)}</strong>
            <p>${escapeHtml(contactContent.intro.noteText)}</p>
          </div>
        </article>

        <form id="contact-form" class="contact-form contact-command-form reveal" data-contact-form>
          <div class="contact-form-heading">
            <span class="contact-mini-label">${escapeHtml(contactContent.form.label)}</span>
            <h2>${escapeHtml(contactContent.form.title)}</h2>
            <p>${escapeHtml(contactContent.form.description)}</p>
          </div>

          <div class="form-row">
            <label>
              Nombre completo
              <input type="text" name="name" placeholder="Tu nombre" required>
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="tu@email.com" required>
            </label>
          </div>
          <div class="form-row">
            <label>
              Tipo de aventura
              <select name="adventure" required>
                <option value="">Selecciona una opcion</option>
                ${contactContent.form.adventureOptions
                  .map((option) => `<option>${escapeHtml(option)}</option>`)
                  .join("\n                ")}
              </select>
            </label>
            <label>
              Fecha aproximada
              <input type="text" name="date" placeholder="Ej. Agosto 2026">
            </label>
          </div>
          <div class="form-row">
            <label>
              Numero de viajeros
              <input type="text" name="travelers" placeholder="Ej. 2 personas">
            </label>
            <label>
              Nivel o experiencia
              <input type="text" name="level" placeholder="Ej. primera vez o trekking previo">
            </label>
          </div>
          <label>
            Mensaje
            <textarea name="message" rows="6" placeholder="Cuentanos que experiencia buscas, que nivel tienes, cuanto tiempo quieres viajar y cualquier detalle importante." required></textarea>
          </label>
          <div class="contact-form-footer">
            <button class="button button-primary" type="submit">Enviar consulta</button>
            <p class="form-status" data-form-status aria-live="polite"></p>
          </div>
        </form>

        <div class="contact-rail reveal">
          ${contactContent.railCards
            .map(resolveRailCard)
            .map(
              (card) => `<article class="contact-rail-card${card.variant === "blue" ? " contact-rail-card-blue" : ""}${
                card.variant === "yellow" ? " contact-rail-card-yellow" : ""
              }">
            <span class="contact-mini-label">${escapeHtml(card.label)}</span>
            <strong>${escapeHtml(card.title)}</strong>
            <p>${escapeHtml(card.text)}</p>
          </article>`
            )
            .join("\n          ")}

          <article class="contact-rail-card contact-map-card">
            <span class="contact-mini-label">Ubicacion</span>
            <strong>Agencia en Google Maps</strong>
            <p>Encuentranos en ${escapeHtml(siteConfig.contact.officeAddress)}, La Paz, Bolivia.</p>
            <div class="contact-map-shell">
              <iframe
                class="contact-map-frame"
                title="Mapa de la agencia Over Limit Adventure"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                data-google-map
                data-map-query="${escapeHtml(siteConfig.contact.mapsQuery)}"
              ></iframe>
            </div>
            <a
              class="button button-secondary contact-map-link"
              href="${escapeHtml(siteConfig.contact.mapsSearchUrl)}"
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="section contact-answers-section">
      <div class="container contact-answers-grid">
        <div class="contact-answers-intro reveal">
          <span class="eyebrow">${escapeHtml(contactContent.faqIntro.eyebrow)}</span>
          <h2>${escapeHtml(contactContent.faqIntro.title)}</h2>
        </div>

        ${contactContent.faqs
          .map((faq) => `<article class="contact-answer-card${faq.variant === "large" ? " contact-answer-card-large" : ""}${
            faq.variant === "blue" ? " contact-answer-card-blue" : ""
          }${faq.variant === "yellow" ? " contact-answer-card-yellow" : ""} reveal">
          <span class="contact-mini-label">${escapeHtml(faq.label)}</span>
          <h3>${escapeHtml(faq.title)}</h3>
          <p>${escapeHtml(faq.text)}</p>
        </article>`)
          .join("\n        ")}
      </div>
    </section>
  </main>`;
}
