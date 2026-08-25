import { ExternalLink, ChevronDown, ChevronUp, Calendar, MessageSquare, TrendingUp } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { trackEvent } from "@/lib/analytics";

const categories = [
  "All",
  "Appointment & Booking",
  "AI Support & Chat",
  "Lead Generation & E-commerce",
];

type Category = (typeof categories)[number];

interface Workflow {
  title: string;
  category: Exclude<Category, "All">;
  source: "n8n Workflow Template";
  description: string;
  tools: string[];
  url: string;
  icon: typeof Calendar;
}

const workflows: Workflow[] = [
  {
    title: "Handle Calendly bookings, cancellations and reschedules with Gmail, Google Calendar, Sheets and Slack",
    category: "Appointment & Booking",
    source: "n8n Workflow Template",
    description:
      "Complete Calendly automation that handles confirmations, cancellations and reschedules in a single workflow. Logs all meetings to Google Sheets automatically and creates events in the organizer's Google Calendar.",
    tools: ["Calendly", "Gmail", "Google Calendar", "Google Sheets", "Slack"],
    url: "https://n8n.io/workflows/12079-handle-calendly-bookings-cancellations-and-reschedules-with-gmail-google-calendar-sheets-and-slack/",
    icon: Calendar,
  },
  {
    title: "Send consult confirmations and reminders with Calendly, Twilio, and SMTP email",
    category: "Appointment & Booking",
    source: "n8n Workflow Template",
    description:
      "Receives new consult bookings via webhook (Calendly v2 or a generic scheduling tool), generates timed confirmation and reminder messages, runs each SMS through a separate compliance workflow, and sends SMS via Twilio plus matching emails.",
    tools: ["Calendly", "Twilio", "SMTP", "Email"],
    url: "https://n8n.io/workflows/17336-send-consult-confirmations-and-reminders-with-calendly-twilio-and-smtp-email/",
    icon: Calendar,
  },
  {
    title: "Handle chat support and escalate unresolved tickets with Google Gemini and Gmail",
    category: "AI Support & Chat",
    source: "n8n Workflow Template",
    description:
      "Webhook-based customer support workflow that uses Google Gemini and a Google Docs knowledge base to answer chat messages, remembers conversation context, and escalates unresolved queries to a human via Gmail.",
    tools: ["Google Gemini", "Gmail", "Google Docs"],
    url: "https://n8n.io/workflows/16053-handle-chat-support-and-escalate-unresolved-tickets-with-google-gemini-and-gmail/",
    icon: MessageSquare,
  },
  {
    title: "Answer multi-channel support queries with OpenAI RAG and Supabase",
    category: "AI Support & Chat",
    source: "n8n Workflow Template",
    description:
      "Answers customer questions across Email, Live Chat, WhatsApp, Slack and Discord from your own documentation, retrieved through a Supabase vector store. RAG grounding keeps replies accurate and on-brand.",
    tools: ["OpenAI", "Supabase", "WhatsApp", "Slack", "Discord"],
    url: "https://n8n.io/workflows/11807-answer-multi-channel-support-queries-with-openai-rag-and-supabase/",
    icon: MessageSquare,
  },
  {
    title: "AI customer support agent - never sleep, never miss a customer again",
    category: "AI Support & Chat",
    source: "n8n Workflow Template",
    description:
      "A 24/7 AI support agent workflow that handles incoming customer messages automatically. Designed to deflect tier-1 questions and keep support running outside business hours. (Community nodes; self-hosted n8n.)",
    tools: ["AI Agent", "n8n"],
    url: "https://n8n.io/workflows/5310-ai-customer-support-agent-never-sleep-never-miss-a-customer-again/",
    icon: MessageSquare,
  },
  {
    title: "Score and route GoHighLevel leads with Claude Sonnet, Slack, and Google Sheets",
    category: "Lead Generation & E-commerce",
    source: "n8n Workflow Template",
    description:
      "Receives new GoHighLevel contacts via webhook, uses Anthropic Claude Sonnet to score and classify them as Hot/Warm/Cold, tags the contact in GoHighLevel, logs to Google Sheets, and alerts the team on Slack.",
    tools: ["GoHighLevel", "Claude Sonnet", "Google Sheets", "Slack"],
    url: "https://n8n.io/workflows/15939-score-and-route-gohighlevel-leads-with-claude-sonnet-slack-and-google-sheets/",
    icon: TrendingUp,
  },
  {
    title: "Facebook/Meta conversion API for eCommerce leads and orders",
    category: "Lead Generation & E-commerce",
    source: "n8n Workflow Template",
    description:
      "Helps eCommerce businesses send real-time order and lead events to the Meta (Facebook) Conversions API, ensuring accurate event tracking and ad attribution without relying on browser pixels.",
    tools: ["Facebook Graph API", "Meta Conversions API", "Webhook"],
    url: "https://n8n.io/workflows/5136-facebookmeta-conversion-api-for-ecommerce-leadsorders/",
    icon: TrendingUp,
  },
  {
    title: "Qualify and nurture Typeform leads in GoHighLevel with OpenAI, Calendly, Gmail and Slack",
    category: "Lead Generation & E-commerce",
    source: "n8n Workflow Template",
    description:
      "For service businesses, agencies, and consultants using GoHighLevel as their CRM. Automatically qualifies inbound Typeform leads with OpenAI, routes them, books calls via Calendly, and follows up through Gmail and Slack.",
    tools: ["Typeform", "GoHighLevel", "OpenAI", "Calendly", "Gmail", "Slack"],
    url: "https://n8n.io/workflows/15536-qualify-and-nurture-typeform-leads-in-gohighlevel-with-openai-calendly-gmail-and-slack/",
    icon: TrendingUp,
  },
];

const CaseStudiesSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [showMore, setShowMore] = useState(false);

  const filtered =
    active === "All"
      ? workflows
      : workflows.filter((w) => w.category === active);

  const topProjects = filtered.slice(0, 3);
  const moreProjects = filtered.slice(3);

  return (
    <section id="portfolio" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Workflow Gallery</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Real Automation Templates <span className="gradient-text">from the n8n Gallery</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Verifiable workflow templates published on n8n.io — the same patterns I build with for clients.
              Click any card to open the full template on n8n.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setShowMore(false); }}
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

        {/* Top Projects */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {topProjects.map((study, i) => (
            <WorkflowCard key={study.title} study={study} delay={i * 0.12} />
          ))}
        </div>

        {/* More Projects */}
        {moreProjects.length > 0 && (
          <div className="max-w-6xl mx-auto mt-10">
            <button
              onClick={() => setShowMore(!showMore)}
              className="mx-auto flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground border border-border/50 hover:border-border bg-secondary/30 hover:bg-secondary/50 transition-all duration-200"
            >
              {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showMore ? "Show Less" : `More Templates (${moreProjects.length})`}
            </button>

            {showMore && (
              <div className="grid lg:grid-cols-3 gap-8 mt-8">
                {moreProjects.map((study, i) => (
                  <WorkflowCard key={study.title} study={study} delay={i * 0.12} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

interface WorkflowCardProps {
  study: Workflow;
  delay: number;
}

const WorkflowCard = ({ study, delay }: WorkflowCardProps) => {
  const Icon = study.icon;
  return (
    <AnimatedSection delay={delay}>
      <div className="glass-card-hover h-full flex flex-col overflow-hidden rounded-xl">
        <div className="bg-gradient-to-br from-primary/15 to-primary/5 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
              {study.category}
            </span>
          </div>
          <h3 className="font-display text-lg font-bold leading-tight">{study.title}</h3>
          <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{study.source}</p>
        </div>

        <div className="p-6 flex-1 flex flex-col gap-4">
          <p className="text-muted-foreground text-sm">{study.description}</p>

          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50"
              >
                {tool}
              </span>
            ))}
          </div>

          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("external_link_click", {
                location: "workflow_gallery",
                label: study.title,
              })
            }
            className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            View Template on n8n
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CaseStudiesSection;
