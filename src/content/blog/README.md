# Blog posts (HTML only)

Drop a `.html` file in this folder and it appears on `/blog` automatically.

Required/optional tags:

```html
<title>Fallback title</title>
<meta name="date" content="2026-08-20" />
<meta name="description" content="Short summary for the list page." />
<h1>Post title (preferred)</h1>
<p>Body content...</p>
```

- Title: from `<h1>`, else `<title>`, else the filename.
- Date: from `<meta name="date">` — used for sorting (newest first).
- The URL slug is the filename, e.g. `my-post.html` → `/blog/my-post`.
