import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { trackEvent } from "@/lib/analytics";

interface VideoCard {
  embedUrl: string;
  watchUrl: string;
  title: string;
  description: string;
  tools: string[];
  steps: string[];
  toolStackLabel?: string;
}

const cards: VideoCard[] = [
  {
    embedUrl: "https://www.youtube.com/embed/prY8G6P5t84",
    watchUrl: "https://www.youtube.com/watch?v=prY8G6P5t84",
    title: "Automate Customer Support Emails using AI (n8n, Hugging Face, Google Sheets)",
    description:
      "Learn how to build a simple but powerful AI-driven customer support automation workflow. This system reduces manual work by processing incoming support emails while keeping a human-in-the-loop for situations that require judgment.",
    tools: ["n8n (Workflow logic)", "Gmail (Email intake & auto-responses)", "Hugging Face (AI classification & summarization)", "Google Sheets (Ticket tracking & logging)"],
    steps: [
      "Ingests emails via Gmail.",
      "Normalizes data and passes it to Qwen3-8B for analysis.",
      "Validates the AI output to ensure accuracy.",
      "Applies deterministic business rules for team assignment and SLAs.",
      "Logs the ticket in Google Sheets.",
      "Routes to a human for complex issues or sends an automated acknowledgment.",
    ],
  },
  {
    embedUrl: "https://www.youtube.com/embed/P4U_M7drwaU",
    watchUrl: "https://www.youtube.com/watch?v=P4U_M7drwaU",
    title: "Stop taking meeting notes. Build this AI Agent instead (n8n Tutorial)",
    description:
      "Stop manually processing meeting notes. Here is how I built an end-to-end AI Meeting Automation workflow using n8n, Asana, and Google. The goal of AI isn't to replace people—it's to remove repetitive administrative work so your team can focus on execution. Instead of leaving meeting notes scattered across chat messages and personal lists, this workflow turns each meeting into structured, trackable operational data.",
    tools: ["n8n Cloud (Orchestration)", "AI Extraction", "Asana (Task Management)", "Google Sheets (Logging)"],
    steps: [],
    toolStackLabel: "Workflow Stack",
  },
  {
    embedUrl: "https://www.youtube.com/embed/R2V1-eYTkGo",
    watchUrl: "https://www.youtube.com/watch?v=R2V1-eYTkGo",
    title: "Automate Candidate Screening with AI (n8n, Hugging Face, Qwen)",
    description:
      "Stop manually reviewing every application. This AI-powered candidate screening workflow automatically evaluates applicants for an AI Virtual Assistant role while keeping a human-in-the-loop for the final hiring decision.",
    tools: ["n8n (Orchestration)", "Hugging Face / Qwen (AI Reasoning)", "Tally (Form Intake)", "Google Sheets (Database)", "Gmail (Notifications)"],
    steps: [],
    toolStackLabel: "Tech Stack Used",
  },
];

const tools = ["n8n", "Make", "Zapier", "GoHighLevel", "OpenAI", "Lovable"];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const UseCasesSection = () => {
  const [activeModal, setActiveModal] = useState<VideoCard | null>(null);

  return (
    <section id="solutions" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={cardVariants}
              className="glass-card-hover p-0 h-full flex flex-col overflow-hidden"
            >
              {/* Embedded video */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={card.embedUrl}
                  title={card.title}
                  className="w-full h-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-base md:text-lg mb-3 leading-snug">{card.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{card.description}</p>

                {/* Tools */}
                <div className="mb-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">
                    {card.toolStackLabel ?? "Tools Used"}
                  </h4>
                  <ul className="space-y-1.5">
                    {card.tools.map((tool) => (
                      <li key={tool} className="flex items-start gap-2 text-sm text-foreground/90">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How it works steps */}
                {card.steps.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">How it works</h4>
                    <ol className="space-y-1.5">
                      {card.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/90">
                          <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-[11px] font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <button
                  onClick={() => {
                    setActiveModal(card);
                    trackEvent("watch_demo_click", {
                      location: "use_case",
                      label: card.title,
                      destination: card.watchUrl,
                    });
                  }}
                  className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 transition-colors duration-200"
                >
                  Watch on YouTube
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeModal.title}
        >
          <div
            className="glass-card w-full max-w-3xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-black">
              <iframe
                src={`${activeModal.embedUrl}?autoplay=1`}
                title={activeModal.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UseCasesSection;
