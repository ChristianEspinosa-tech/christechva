import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
// 👇 ADD THESE TWO LINES HERE 👇
import { useState } from "react"; 
import { Check, Copy } from "lucide-react"; 
// 👆 ADD THESE TWO LINES HERE 👆
import { getPost, formatDate } from "@/lib/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);
  // This state tracks whether the user just copied the link
  const [copied, setCopied] = useState(false); 

  // This function creates the perfect .html link and copies it
  const handleCopyShareLink = () => {
    if (!post) return;
    const shareUrl = `https://christianespinosa-tech.github.io/christechva/blog/${post.slug}.html`;
    
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Post not found</h1>
          <p className="mt-3 text-muted-foreground">This article doesn't exist or was removed.</p>
          <Link to="/blog" className="mt-6 inline-block text-primary underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${post.title} | ChrisTechVA Blog`}</title>
        {post.description && <meta name="description" content={post.description} />}
        <meta property="og:title" content={post.title} />
        {post.description && <meta property="og:description" content={post.description} />}
        <meta property="og:type" content="article" />
        {/* Share this URL on Messenger/Facebook: it is a static page with real OG tags. */}
        <meta
          property="og:url"
          content={`https://christianespinosa-tech.github.io/christechva/blog/${post.slug}.html`}
        />
      </Helmet>

      <article className="container mx-auto max-w-3xl px-4 py-24">
        {/* START of the button section */}
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>

          {/* THE COPY SHARE LINK BUTTON */}
          <button
            onClick={handleCopyShareLink}
            className="inline-flex items-center gap-2 rounded-md border border-border/40 bg-card/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy Share Link"}
          </button>
        </div>
        {/* END of the button section */}

        {post.date && (
          <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
        )}

        {post.isFullDocument ? (
          <iframe
            title={post.title}
            srcDoc={post.html}
            className="mt-4 h-[85vh] w-full rounded-lg border border-border bg-white"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <div
            className="prose prose-invert mt-4 max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        )}
      </article>
    </div>
  );
};

export default BlogPost;
