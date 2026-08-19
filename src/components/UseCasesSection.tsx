import { Facebook, Mail, Calendar, Receipt, MessageSquare, Workflow, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { trackEvent } from "@/lib/analytics";

const cases = [
  { icon: Facebook, title: "Lead Capture from Facebook to CRM", desc: "Capture Facebook ad leads in real time and route them into GoHighLevel or HubSpot with tagging and instant follow-up.", repoUrl: "https://github.com/ChristianEspinosa-tech/Lead-Capture-from-Facebook-to-CRM" },
  { icon: Mail, title: "Automated Email Follow-Ups", desc: "Multi-step nurture sequences that re-engage cold leads and keep prospects warm without manual sends.", repoUrl: "https://github.com/ChristianEspinosa-tech/Automated-Email-Follow-Ups" },
  { icon: Calendar, title: "Appointment Booking Automation", desc: "Self-serve scheduling via Calendly + n8n with confirmations, reminders, and post-call follow-ups.", repoUrl: "https://github.com/ChristianEspinosa-tech/Appointment-Booking-Automation" },
  { icon: Receipt, title: "Invoice & Payment Tracking", desc: "Stripe → QuickBooks sync that auto-generates invoices, sends receipts, and chases overdue payments.", repoUrl: "https://github.com/ChristianEspinosa-tech/Invoice-Payment-Tracking" },
  { icon: MessageSquare, title: "AI Chatbot for Customer Support", desc: "OpenAI agents that handle FAQs, qualify leads, and escalate complex queries to your team.", repoUrl: "https://github.com/ChristianEspinosa-tech/AI-Chatbot-for-Customer-Support" },
  { icon: Workflow, title: "Custom API Integrations", desc: "Connect any tool to any tool — Shopify, Airtable, Notion, Slack — using n8n, Make, or Zapier.", repoUrl: "https://github.com/ChristianEspinosa-tech/Custom-API-Integrations" },
];

const tools = ["n8n", "Make", "Zapier", "GoHighLevel", "OpenAI", "Lovable"];

const UseCasesSection = () => {
  return (
    <section id="solutions" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What I Build</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Automations I Can <span className="gradient-text">Build For You</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Real-world workflows designed to remove repetitive work and unlock growth — powered by the tools I specialize in.
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div className="glass-card-hover p-8 h-full flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
                <a
                  href={c.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("external_link_click", { location: "use_case", label: c.title })}
                  className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
