import { renderAboutPage } from "./render-about.mjs";
import { renderContactPage } from "./render-contact.mjs";
import { renderGalleryPage } from "./render-gallery.mjs";
import { renderHomePage } from "./render-home.mjs";
import { renderToursPage } from "./render-tours.mjs";

const pageRenderers = {
  about: renderAboutPage,
  contact: renderContactPage,
  gallery: renderGalleryPage,
  home: renderHomePage,
  tours: renderToursPage
};

export function renderPage(pageId, basePath) {
  const renderer = pageRenderers[pageId];

  if (!renderer) {
    throw new Error(`No renderer defined for page "${pageId}".`);
  }

  return renderer(basePath);
}
