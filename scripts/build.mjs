import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pageDefinitions, siteConfig } from "../src/data/site.mjs";
import { renderDocument } from "../src/templates/layout.mjs";
import { renderPage } from "../src/templates/render-pages.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const styleFiles = [
  "src/styles/foundations.css",
  "src/styles/layout.css",
  "src/styles/adventures.css",
  "src/styles/home.css",
  "src/styles/contact.css",
  "src/styles/gallery.css",
  "src/styles/theme.css",
  "src/styles/about.css"
];

async function writeTextFile(relativePath, content) {
  const outputPath = path.join(projectRoot, relativePath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${content.trimEnd()}\n`, "utf8");
}

async function buildStyles() {
  const sourceParts = await Promise.all(
    styleFiles.map((filePath) => readFile(path.join(projectRoot, filePath), "utf8"))
  );

  await writeTextFile("assets/styles/main.css", sourceParts.map((part) => part.trim()).join("\n\n"));
}

async function buildPages() {
  for (const page of pageDefinitions) {
    const documentHtml = renderDocument(page, renderPage(page.id, page.basePath), siteConfig);
    await writeTextFile(page.outputPath, documentHtml);
  }
}

async function main() {
  // El sitio publico sale siempre de la misma fuente para evitar drift entre paginas.
  await buildStyles();
  await buildPages();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
