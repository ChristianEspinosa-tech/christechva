import { TrendingUp, Clock, Users, DollarSign, ExternalLink } from "lucide-react";
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
    title: "AI-Powered E-Commerce Lead Pipeline",
    client: "Online Retail Brand",
    industry: "E-commerce",
    category: "E-commerce & Order Flows",
    problem: "Manual lead tracking from Facebook Ads with slow follow-ups causing lost sales.",
    solution: "n8n + GoHighLevel + Facebook API → automated lead capture, CRM tagging, and instant email nurture sequences.",
    results: [
      { icon: TrendingUp, label: "Lead Conversion", value: "+68%" },
      { icon: Clock, label: "Response Time", value: "< 2 min" },
      { icon: DollarSign, label: "Revenue Increase", value: "+42%" },
    ],
    tools: ["Make", "GoHighLevel", "Facebook API", "n8n"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "AI-Powered Appointment Booking System",
    client: "Coaching & Consulting Firm",
    industry: "Coaching & Consulting",
    category: "Appointment & Booking Automation",
    problem: "High no-show rates and hours spent on manual scheduling, confirmations, and follow-ups.",
    solution: "n8n + Calendly + Google Sheets → full booking flow with auto-confirmations, reminders & post-session follow-ups.",
    results: [
      { icon: Users, label: "No-Shows", value: "-75%" },
      { icon: TrendingUp, label: "Bookings", value: "+90%" },
      { icon: Clock, label: "Hrs Saved/Week", value: "15+" },
    ],
    tools: ["n8n", "Calendly", "Google Sheets", "Gmail"],
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "AI Customer Support & Chat Agent",
    client: "SaaS Startup",
    industry: "SaaS / Technology",
    category: "AI Support & Chat Agents",
    problem: "Support team overwhelmed with tier-1 tickets, slow response times hurting retention.",
    solution: "OpenAI + Zapier + Intercom → AI chatbot handling FAQs, qualifying leads, and routing complex issues to agents.",
    results: [
      { icon: Clock, label: "Avg. Resolution", value: "< 30s" },
      { icon: Users, label: "Tickets Deflected", value: "60%" },
      { icon: DollarSign, label: "Cost Saved", value: "$4K/mo" },
    ],
    tools: ["OpenAI", "Zapier", "Intercom", "n8n"],
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
              <div className="glass-card-hover h-full flex flex-col overflow-hidden rounded-xl">
                {/* Header */}
                <div className={`bg-gradient-to-br ${study.gradient} p-6`}>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/20 mb-3">
                    {study.industry}
                  </span>
                  <h3 className="font-display text-xl font-bold leading-tight">{study.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{study.client}</p>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-2 p-4 border-b border-border/30">
                  {study.results.map((r) => (
                    <div key={r.label} className="text-center py-2">
                      <r.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="font-display text-lg font-bold leading-none">{r.value}</p>
                      <p className="text-[10px] text-muted-foreground leading-tight mt-1">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div>
                    <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-muted-foreground text-sm">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>

                  {/* Tools */}
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

                  {/* CTA */}
                  <button className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                    View Workflow Demo
                  </button>
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
