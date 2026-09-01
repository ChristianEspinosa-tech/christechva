// File-based HTML CMS.
// Drop any .html file into src/content/blog/ and it shows up automatically.
// Title comes from <h1> (fallback <title>, fallback filename).
// Date comes from <meta name="date" content="YYYY-MM-DD">.

const files = import.meta.glob("/src/content/blog/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export interface BlogPost {
  slug: string;
  title: string;
  date: string | null;
  description: string;
  html: string;
}

const match = (html: string, re: RegExp) => {
  const m = html.match(re);
  return m ? m[1].trim() : null;
};

const stripTags = (s: string) => s.replace(/<[^>]*>/g, "").trim();

function parsePost(path: string, raw: string): BlogPost {
  const slug = path.split("/").pop()!.replace(/\.html$/i, "");
  const h1 = match(raw, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const titleTag = match(raw, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = stripTags(h1 || titleTag || slug.replace(/[-_]/g, " "));
  const date =
    match(raw, /<meta[^>]*name=["']date["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
    match(raw, /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']date["'][^>]*>/i);
  const description =
    match(raw, /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
    stripTags(match(raw, /<p[^>]*>([\s\S]*?)<\/p>/i) || "").slice(0, 160);

  // Use only the <body> content when a full document was uploaded.
  const body = match(raw, /<body[^>]*>([\s\S]*?)<\/body>/i) ?? raw;
  // Keep <style> and <script> so standalone styled posts render accurately.
  const html = body.trim();

  return { slug, title, date, description, html };
}

export const blogPosts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => {
    const ad = a.date ? Date.parse(a.date) : 0;
    const bd = b.date ? Date.parse(b.date) : 0;
    return bd - ad;
  });

export const getPost = (slug?: string) =>
  blogPosts.find((p) => p.slug === slug);

export const formatDate = (date: string | null) =>
  date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
