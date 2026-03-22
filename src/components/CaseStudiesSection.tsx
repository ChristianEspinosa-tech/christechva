import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const categories = [
  "All",
  "Lead Generation & CRM Sync",
  "Appointment & Booking Automation",
  "AI Support & Chat Agents",
  "E-commerce & Order Flows",
  "Content & Social Automation",
  "Custom Integrations",
];

const caseStudies = [
  {
    title: "E-Commerce Lead Pipeline",
    client: "Online Retail Brand",
    category: "E-commerce & Order Flows",
    description: "Built an end-to-end lead capture and nurture system connecting Facebook Ads, CRM, and email sequences.",
    results: [
      { icon: TrendingUp, label: "Lead Conversion", value: "+68%" },
      { icon: Clock, label: "Response Time", value: "< 2 min" },
      { icon: DollarSign, label: "Revenue Increase", value: "+42%" },
    ],
    tools: ["Make", "GoHighLevel", "Facebook API"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Appointment Booking System",
    client: "Coaching & Consulting Firm",
    category: "Appointment & Booking Automation",
    description: "Automated the entire booking flow—from initial inquiry to confirmation, reminders, and post-session follow-ups.",
    results: [
      { icon: Users, label: "No-Show Rate", value: "-75%" },
      { icon: Clock, label: "Hours Saved/Week", value: "15+" },
      { icon: TrendingUp, label: "Bookings Increase", value: "+90%" },
    ],
    tools: ["n8n", "Calendly", "Google Sheets"],
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "AI Customer Support Bot",
    client: "SaaS Startup",
    category: "AI Support & Chat Agents",
    description: "Deployed a custom AI chatbot handling tier-1 support, qualifying leads, and routing complex issues to agents.",
    results: [
      { icon: Clock, label: "Avg. Resolution", value: "< 30s" },
      { icon: Users, label: "Tickets Deflected", value: "60%" },
      { icon: DollarSign, label: "Support Cost Saved", value: "$4K/mo" },
    ],
    tools: ["OpenAI", "Zapier", "Intercom"],
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
];

const CaseStudiesSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? caseStudies
    : caseStudies.filter((s) => s.category === active);

  return (
    <section id="portfolio" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Selected AI & n8n Automations – <span className="gradient-text">Real Business Impact</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've built 10–15+ production workflows saving clients 10–75+ hours/week. Here are my strongest examples across industries.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border ${
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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filtered.map((study, i) => (
            <AnimatedSection key={study.title} delay={i * 0.12}>
              <div className="glass-card-hover h-full flex flex-col overflow-hidden">
                <div className={`bg-gradient-to-br ${study.gradient} p-6 pb-4`}>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{study.client}</span>
                  <h3 className="font-display text-xl font-bold mt-1">{study.title}</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-6">{study.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {study.results.map((r) => (
                      <div key={r.label} className="text-center">
                        <r.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                        <p className="font-display text-lg font-bold">{r.value}</p>
                        <p className="text-[10px] text-muted-foreground leading-tight">{r.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {study.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
