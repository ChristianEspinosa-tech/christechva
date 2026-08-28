import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { blogPosts, formatDate } from "@/lib/blog";
import { trackEvent } from "@/lib/analytics";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog | AI Automation Insights by Christian Espinosa</title>
        <meta
          name="description"
          content="Practical notes on AI automation, n8n, Make, GoHighLevel and Zapier workflows that replace repetitive work."
        />
        <meta property="og:title" content="Blog | AI Automation Insights" />
        <meta
          property="og:description"
          content="Practical notes on AI automation workflows with n8n, Make, GoHighLevel and Zapier."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto max-w-3xl px-4 py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <header className="mt-8 mb-12">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">Blog</h1>
          <p className="mt-3 text-muted-foreground">
            Notes on building AI automation systems that actually get used.
          </p>
        </header>

        {blogPosts.length === 0 ? (
          <p className="text-muted-foreground">No posts published yet — check back soon.</p>
        ) : (
          <ul className="space-y-4">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  onClick={() =>
                    trackEvent("nav_click", {
                      location: "blog_index",
                      label: post.title,
                      destination: `/blog/${post.slug}`,
                    })
                  }
                  className="group block rounded-xl border border-border/40 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
                >
                  {post.date && (
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                  )}
                  <h2 className="mt-2 font-display text-xl font-semibold text-foreground group-hover:text-primary">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                    Read post <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Blog;
