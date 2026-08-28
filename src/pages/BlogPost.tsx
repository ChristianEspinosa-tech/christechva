import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { getPost, formatDate } from "@/lib/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);

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
      </Helmet>

      <article className="container mx-auto max-w-3xl px-4 py-24">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>

        {post.date && (
          <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
        )}

        <div
          className="prose prose-invert mt-4 max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
