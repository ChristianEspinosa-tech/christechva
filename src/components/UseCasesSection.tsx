import { useEffect, useMemo, useState } from "react";
import { Facebook, Mail, Calendar, Receipt, MessageSquare, Workflow, Play, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { trackEvent } from "@/lib/analytics";

const categories = ["All", "Lead Gen", "Customer Support", "Booking", "E-commerce", "Integration"] as const;
type Category = (typeof categories)[number];

interface UseCase {
  icon: typeof Facebook;
  title: string;
  desc: string;
  category: Exclude<Category, "All">;
  youtubeUrl: string; // leave "" for placeholders until the video is ready
}

const cases: UseCase[] = [
  {
    icon: Facebook,
    title: "n8n Lead Capture Automation 2026: HubSpot + Gmail + Telegram in One Workflow (Free Template)",
    desc: "Capture leads in real time and route them into HubSpot with instant Gmail and Telegram notifications for fast follow-up.",
    category: "Lead Gen",
    youtubeUrl: "https://www.youtube.com/watch?v=1MxHtqAmxSA",
  },
  {
    icon: Mail,
    title: "Automated Email Follow-Ups",
    desc: "Multi-step nurture sequences that re-engage cold leads and keep prospects warm without manual sends.",
    category: "Lead Gen",
    youtubeUrl: "",
  },
  {
    icon: Calendar,
    title: "Appointment Booking Automation",
    desc: "Self-serve scheduling with confirmations, reminders, and post-call follow-ups handled automatically.",
    category: "Booking",
    youtubeUrl: "",
  },
  {
    icon: Receipt,
    title: "Invoice & Payment Tracking",
    desc: "Payment-to-accounting sync that auto-generates invoices, sends receipts, and chases overdue payments.",
    category: "E-commerce",
    youtubeUrl: "",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot for Customer Support",
    desc: "AI agents that handle FAQs, qualify leads, and escalate complex queries to your team.",
    category: "Customer Support",
    youtubeUrl: "",
  },
  {
    icon: Workflow,
    title: "Custom API Integrations",
    desc: "Connect any tool to any tool — Shopify, Airtable, Notion, Slack — using n8n, Make, or Zapier.",
    category: "Integration",
    youtubeUrl: "",
  },
];

const tools = ["n8n", "Make", "Zapier", "GoHighLevel", "OpenAI", "Lovable"];

const getEmbedUrl = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0` : null;
};

const getVideoId = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return match ? match[1] : null;
};

const getThumbUrl = (url: string): string | null => {
  const id = getVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
};

const handleThumbError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.currentTarget;
  const sd = target.src.replace("maxresdefault", "hqdefault");
  if (sd !== target.src) {
    target.src = sd;
  } else {
    target.style.display = "none";
  }
};

const UseCasesSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<UseCase | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? cases : cases.filter((c) => c.category === active)),
    [active]
  );

  const embedUrl = selected ? getEmbedUrl(selected.youtubeUrl) : null;

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="solutions" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What I Build</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Watch Real Automations <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Live video demos of workflows built to remove repetitive work and unlock growth — powered by the tools I specialize in.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
              {tools.map((t) => (
                <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary border border-border/50 text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 min-h-11 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-secondary/50 text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((c, i) => {
            const thumb = getThumbUrl(c.youtubeUrl);
            const open = () => {
              if (!c.youtubeUrl) return;
              setSelected(c);
              trackEvent("watch_demo_click", { location: "use_case", label: c.title, destination: c.youtubeUrl });
            };
            return (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div className="glass-card-hover p-0 h-full flex flex-col overflow-hidden">
                {/* Cover / thumbnail */}
                <button
                  type="button"
                  onClick={open}
                  disabled={!c.youtubeUrl}
                  aria-label={c.youtubeUrl ? `Play demo: ${c.title}` : "Demo coming soon"}
                  className="relative w-full aspect-video overflow-hidden bg-secondary/50 group cursor-pointer disabled:cursor-not-allowed"
                >
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={c.title}
                      loading="lazy"
                      onError={handleThumbError}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary via-secondary/70 to-primary/10">
                      <div className="text-center">
                        <Play className="w-10 h-10 mx-auto text-muted-foreground/40 mb-2" />
                        <span className="text-xs text-muted-foreground/60 font-semibold uppercase tracking-wider">Demo Coming Soon</span>
                      </div>
                    </div>
                  )}
                  {c.youtubeUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/40">
                        <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                      </div>
                    </div>
                  )}
                </button>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                      {c.category}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground text-sm">{c.desc}</p>
                  <button
                    onClick={open}
                    disabled={!c.youtubeUrl}
                    className={`mt-auto pt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      c.youtubeUrl
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
                        : "bg-secondary/50 text-muted-foreground border border-border cursor-not-allowed"
                    }`}
                  >
                    <Play className="w-4 h-4" />
                    {c.youtubeUrl ? "Watch Demo" : "Demo Coming Soon"}
                  </button>
                </div>
              </div>
            </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="glass-card w-full max-w-3xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-border/50">
              <h3 className="font-display font-semibold text-sm md:text-base truncate pr-4">{selected.title}</h3>
              <button
                onClick={() => setSelected(null)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={selected.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  Demo video coming soon.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UseCasesSection;
