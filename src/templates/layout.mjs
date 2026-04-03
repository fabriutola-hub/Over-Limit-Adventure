function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function resolvePath(basePath, href) {
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return href;
  }

  return basePath === "." ? `./${href}` : `${basePath}/${href}`;
}

function renderLink(item, basePath, extraAttributes = "") {
  const { label, href, target = "_self" } = item;
  const targetAttributes = target === "_blank" ? ' target="_blank" rel="noreferrer"' : "";

  return `<a href="${escapeHtml(resolvePath(basePath, href))}"${targetAttributes}${extraAttributes}>${escapeHtml(label)}</a>`;
}

function renderNavigation(page, siteConfig) {
  return siteConfig.routes
    .map((route) => {
      const isActive = route.id === page.id;
      return `                <li>
                  ${renderLink(route, page.basePath, isActive ? ' aria-current="page"' : "")}
                </li>`;
    })
    .join("\n");
}

function renderFooterLinks(items, basePath) {
  return items
    .map((item) => `              <li>${renderLink(item, basePath)}</li>`)
    .join("\n");
}

function renderSiteHeader(page, siteConfig) {
  const headerCta = renderLink(
    { ...siteConfig.headerCta, label: siteConfig.headerCta.label },
    page.basePath,
    ' class="button button-nav"'
  );

  return `  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <div class="nav-shell">
          <a class="brand brand-logo" href="${escapeHtml(resolvePath(page.basePath, "index.html"))}" aria-label="Ir al inicio de ${escapeHtml(
            siteConfig.brandName
          )}">
            <img src="${escapeHtml(resolvePath(page.basePath, siteConfig.logoPath))}" alt="" aria-hidden="true">
          </a>

          <nav class="site-nav" data-nav>
            <ul>
${renderNavigation(page, siteConfig)}
            </ul>

            <div class="header-actions header-actions-mobile">
              ${headerCta}
            </div>
          </nav>

          <div class="header-actions header-actions-desktop">
            ${headerCta}
          </div>

          <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Abrir men\u00fa" data-menu-toggle>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>`;
}

function renderSiteFooter(page, siteConfig) {
  const { contact } = siteConfig;

  return `  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand brand-footer" href="${escapeHtml(resolvePath(page.basePath, "index.html"))}" aria-label="Ir al inicio de ${escapeHtml(
          siteConfig.brandName
        )}">
          <img src="${escapeHtml(resolvePath(page.basePath, siteConfig.logoPath))}" alt="" aria-hidden="true">
        </a>
        <p>
          ${escapeHtml(siteConfig.footerDescription)}
        </p>
      </div>

      <div>
        <h3>Contacto</h3>
        <ul class="footer-list">
          <li><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></li>
          <li><a href="tel:${escapeHtml(contact.phoneHref)}">${escapeHtml(contact.phoneDisplay)}</a></li>
          <li>${escapeHtml(contact.city)}</li>
        </ul>
      </div>

      <div>
        <h3>Explorar</h3>
        <ul class="footer-list">
${renderFooterLinks(siteConfig.footerExplore, page.basePath)}
        </ul>
      </div>

      <div>
        <h3>Redes</h3>
        <ul class="footer-list">
${renderFooterLinks(siteConfig.socials, page.basePath)}
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>&copy; <span data-current-year></span> Todos los derechos reservados.</p>
    </div>
  </footer>`;
}

export function renderDocument(page, mainContent, siteConfig) {
  const extraMeta = (page.extraMeta ?? [])
    .map(({ name, content }) => `  <meta name="${escapeHtml(name)}" content="${escapeHtml(content)}">`)
    .join("\n");
  const bodyAttributes = [
    `class="${escapeHtml(page.bodyClass)}"`,
    `data-whatsapp-number="${escapeHtml(siteConfig.contact.whatsappNumber)}"`
  ].join(" ");

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta
    name="description"
    content="${escapeHtml(page.description)}"
  >
${extraMeta ? `${extraMeta}\n` : ""}  <title>${escapeHtml(page.title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="${escapeHtml(siteConfig.fontStylesheet)}"
    rel="stylesheet"
  >
  <link rel="stylesheet" href="${escapeHtml(resolvePath(page.basePath, "assets/styles/main.css"))}">
  <script type="module" src="${escapeHtml(resolvePath(page.basePath, "assets/scripts/main.js"))}"></script>
</head>
<body ${bodyAttributes}>
${renderSiteHeader(page, siteConfig)}

${mainContent}

${renderSiteFooter(page, siteConfig)}
</body>
</html>
`;
}

export function renderButtons(buttons, basePath, extraClass = "") {
  const className = extraClass ? `button-group ${extraClass}` : "button-group";

  return `<div class="${className}">
${buttons
  .map(
    ({ label, href, variant = "primary", target = "_self" }) =>
      `  <a class="button button-${variant}" href="${escapeHtml(resolvePath(basePath, href))}"${
        target === "_blank" ? ' target="_blank" rel="noreferrer"' : ""
      }>${escapeHtml(label)}</a>`
  )
  .join("\n")}
</div>`;
}

export function renderMetaRow(items, className) {
  return `<div class="${className}">
${items.map((item) => `  <span>${escapeHtml(item)}</span>`).join("\n")}
</div>`;
}

export function renderCardTags(items, className) {
  return `<div class="${className}">
${items.map((item) => `  <span>${escapeHtml(item)}</span>`).join("\n")}
</div>`;
}

export function renderList(items, className) {
  return `<ul class="${className}">
${items.map((item) => `  <li>${escapeHtml(item)}</li>`).join("\n")}
</ul>`;
}

export { escapeHtml };
