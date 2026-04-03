import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const galleryFolder = path.resolve(__dirname, "../../assets/images/images para galeria");
const validExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const collageVariants = ["hero", "tall", "blue", "yellow", "white", "wide", "", "", "blue", "yellow", "white", ""];

function titleFromFilename(filename) {
  return filename
    .replace(path.extname(filename), "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function loadGalleryImages() {
  return readdirSync(galleryFolder, { withFileTypes: true })
    .filter((entry) => entry.isFile() && validExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true }));
}

const galleryImages = loadGalleryImages();
const fallbackImages = [
  "Illimani.jpg",
  "condoriri.jpg",
  "sajama.jpg",
  "lago_titicaca.jpg",
  "grupo.jpeg",
  "huayna.webp",
  "copacabana.jpg",
  "charquini.jpg",
  "takesi.jpeg"
].map((filename) => ({
  image: `assets/images/${filename}`,
  imageAlt: titleFromFilename(filename)
}));

const collageImages =
  galleryImages.length > 0
    ? galleryImages.map((filename) => ({
        image: `assets/images/images para galeria/${filename}`,
        imageAlt: titleFromFilename(filename)
      }))
    : fallbackImages;

const panelImages = collageImages.slice(0, 2);

export const galleryContent = {
  hero: {
    eyebrow: "Galer\u00eda",
    stamps: ["Collage fotogr\u00e1fico", "Archivo real", "Bolivia"],
    title: "Im\u00e1genes de nuestras aventuras.",
    description: "Una selecci\u00f3n visual directa desde nuestras salidas en terreno.",
    actions: [{ label: "Ver mosaico", href: "pages/galeria.html#mosaico-galeria", variant: "primary" }]
  },
  panels: panelImages.map((panel, index) => ({
    label: index === 0 ? "Destacado" : "Archivo real",
    image: panel.image,
    imageAlt: panel.imageAlt
  })),
  cards: collageImages.map((card, index) => {
    const variant = collageVariants[index % collageVariants.length];
    return {
      variant: variant || undefined,
      image: card.image,
      imageAlt: card.imageAlt
    };
  }),
  cta: {
    eyebrow: "Siguiente paso",
    title: "Si te gustaron las fotograf\u00edas, te va a gustar m\u00e1s vivirlas.",
    actions: [
      { label: "Solicitar propuesta", href: "pages/contacto.html", variant: "primary" },
      { label: "Explorar aventuras", href: "pages/tours.html", variant: "secondary" }
    ]
  }
};
