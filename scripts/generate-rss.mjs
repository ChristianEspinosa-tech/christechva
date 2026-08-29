// Generates public/rss.xml from the HTML files in src/content/blog/.
// Runs automatically before every build (see "prebuild" in package.json).
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BLOG_DIR = new URL("../src/content/blog/", import.meta.url).pathname;
const OUT = new URL("../public/rss.xml", import.meta.url).pathname;
const SITE_URL = "https://christianespinosa-tech.github.io/christechva";

const match = (html, re) => {
  const m = html.match(re);
  return m ? m[1].trim() : null;
};
const stripTags = (s) => s.replace(/<[^>]*>/g, "").trim();
const esc = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const posts = readdirSync(BLOG_DIR)
  .filter((f) => f.toLowerCase().endsWith(".html"))
  .map((file) => {
    const raw = readFileSync(join(BLOG_DIR, file), "utf8");
    const slug = file.replace(/\.html$/i, "");
    const h1 = match(raw, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const titleTag = match(raw, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = stripTags(h1 || titleTag || slug.replace(/[-_]/g, " "));
    const date =
      match(raw, /<meta[^>]*name=["']date["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
      match(raw, /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']date["'][^>]*>/i);
    const description =
      match(raw, /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
      stripTags(match(raw, /<p[^>]*>([\s\S]*?)<\/p>/i) || "").slice(0, 160);
    return { slug, title, date, description };
  })
  .sort((a, b) => Date.parse(b.date || 0) - Date.parse(a.date || 0));

const items = posts
  .map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>${
        p.date ? `\n      <pubDate>${new Date(p.date).toUTCString()}</pubDate>` : ""
      }
      <description>${esc(p.description)}</description>
    </item>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Automation Insights | Christian Espinosa</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Practical notes on AI automation workflows with n8n, Make, GoHighLevel and Zapier.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;

writeFileSync(OUT, xml);
console.log(`RSS feed written to public/rss.xml (${posts.length} posts)`);
