// Generates static per-post share pages in public/blog/<slug>.html.
// These are plain HTML documents the Facebook/Messenger/Twitter crawlers can read
// (the SPA's client-side <Helmet> tags are invisible to them), and they redirect
// real visitors to the app route /blog/<slug>.
// Runs automatically before every build (see "prebuild" in package.json).
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const BLOG_DIR = fileURLToPath(new URL("../src/content/blog/", import.meta.url));
const OUT_DIR = fileURLToPath(new URL("../public/blog/", import.meta.url));
const SITE_URL = "https://christianespinosa-tech.github.io/christechva";

const match = (html, re) => {
  const m = html.match(re);
  return m ? m[1].trim() : null;
};
const stripTags = (s) => s.replace(/<[^>]*>/g, "").trim();
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const metaContent = (raw, key, attr = "property") =>
  match(raw, new RegExp(`<meta[^>]*${attr}=["']${key}["'][^>]*content=["']([^"']*)["'][^>]*>`, "i")) ||
  match(raw, new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*${attr}=["']${key}["'][^>]*>`, "i"));

rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(BLOG_DIR).filter((f) => f.toLowerCase().endsWith(".html"));

for (const file of files) {
  const raw = readFileSync(join(BLOG_DIR, file), "utf8");
  const slug = file.replace(/\.html$/i, "");

  const h1 = match(raw, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const titleTag = match(raw, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = stripTags(
    metaContent(raw, "og:title") || h1 || titleTag || slug.replace(/[-_]/g, " "),
  );
  const description =
    metaContent(raw, "og:description") ||
    metaContent(raw, "description", "name") ||
    stripTags(match(raw, /<p[^>]*>([\s\S]*?)<\/p>/i) || "").slice(0, 160);
  // Only reference an image that actually ships in public/ — a 404 image makes
  // Messenger show no preview image at all.
  const declaredImage = metaContent(raw, "og:image");
  const localPath = declaredImage?.startsWith(SITE_URL)
    ? fileURLToPath(new URL(".." + declaredImage.slice(SITE_URL.length), new URL("../public/", import.meta.url)))
    : null;
  const image =
    declaredImage && (!localPath || existsSync(localPath))
      ? declaredImage
      : `${SITE_URL}/og-image.png`;
  const date = metaContent(raw, "date", "name");
  const shareUrl = `${SITE_URL}/blog/${slug}.html`;
  const appUrl = `${SITE_URL}/blog/${slug}`;

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${esc(appUrl)}" />

    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="ChrisTechVA" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${esc(shareUrl)}" />
    <meta property="og:image" content="${esc(image)}" />
    <meta property="og:image:secure_url" content="${esc(image)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(title)}" />
${date ? `    <meta property="article:published_time" content="${esc(date)}" />\n` : ""}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${esc(image)}" />

    <script>
      // Crawlers read the tags above; humans go to the app route.
      window.location.replace(${JSON.stringify(appUrl)});
    </script>
  </head>
  <body>
    <h1>${esc(title)}</h1>
    <p>${esc(description)}</p>
    <p><a href="${esc(appUrl)}">Read the full post</a></p>
  </body>
</html>
`;

  writeFileSync(join(OUT_DIR, `${slug}.html`), html);
}

console.log(`Share pages written to public/blog/ (${files.length} posts)`);
