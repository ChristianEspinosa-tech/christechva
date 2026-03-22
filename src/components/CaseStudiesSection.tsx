import { TrendingUp, Clock, Users, DollarSign, ExternalLink, ChevronDown, ChevronUp, Linkedin, MessageSquare, Receipt } from "lucide-react";
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
    featured: true,
  },
  {
    title: "AI Customer Support & Chat Agent",
    client: "SaaS Startup",
    industry: "SaaS / Technology",
    category: "AI Support & Chat Agents",
    problem: "Support team overwhelmed with tier-1 tickets, slow response times hurting retention.",
    solution: "OpenAI + n8n + Intercom → AI chatbot handling FAQs, qualifying leads, and routing complex issues to agents.",
    results: [
      { icon: Clock, label: "Avg. Resolution", value: "< 30s" },
      { icon: Users, label: "Tickets Deflected", value: "60%" },
      { icon: DollarSign, label: "Cost Saved", value: "$4K/mo" },
    ],
    tools: ["OpenAI", "n8n", "Intercom", "Zapier"],
    gradient: "from-emerald-500/20 to-emerald-500/5",
    featured: true,
  },
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
    tools: ["n8n", "GoHighLevel", "Facebook API", "Make"],
    gradient: "from-primary/20 to-primary/5",
    featured: true,
  },
  {
    title: "LinkedIn AI Outreach Agent",
    client: "B2B Agency",
    industry: "Marketing & Sales",
    category: "Lead Generation & CRM Sync",
    problem: "Manual LinkedIn prospecting taking 20+ hours/week with low connection-to-meeting conversion.",
    solution: "n8n + OpenAI + LinkedIn API → automated profile scraping, personalized message drafting, and CRM logging.",
    results: [
      { icon: TrendingUp, label: "Reply Rate", value: "+45%" },
      { icon: Clock, label: "Hrs Saved/Week", value: "20+" },
      { icon: Users, label: "Meetings Booked", value: "3x" },
    ],
    tools: ["n8n", "OpenAI", "LinkedIn", "HubSpot"],
    gradient: "from-violet-500/20 to-violet-500/5",
    featured: false,
  },
  {
    title: "WhatsApp E-Commerce Notifications",
    client: "DTC Fashion Brand",
    industry: "E-commerce",
    category: "E-commerce & Order Flows",
    problem: "Customers missing order updates via email, leading to high support volume about order status.",
    solution: "n8n + WhatsApp Business API + Shopify → real-time order confirmations, shipping updates, and delivery alerts.",
    results: [
      { icon: Users, label: "Support Tickets", value: "-55%" },
      { icon: TrendingUp, label: "Open Rate", value: "98%" },
      { icon: DollarSign, label: "Repeat Orders", value: "+30%" },
    ],
    tools: ["n8n", "WhatsApp API", "Shopify", "Twilio"],
    gradient: "from-green-500/20 to-green-500/5",
    featured: false,
  },
  {
    title: "Invoice-to-Accounting Automation",
    client: "Freelance Agency",
    industry: "Finance & Operations",
    category: "Custom Integrations",
    problem: "Manual invoice entry into accounting software causing delays and errors in financial reporting.",
    solution: "n8n + Stripe + QuickBooks → auto-generate invoices on payment, sync to accounting, and send receipts.",
    results: [
      { icon: Clock, label: "Processing Time", value: "-90%" },
      { icon: DollarSign, label: "Errors Eliminated", value: "99%" },
      { icon: TrendingUp, label: "Faster Reporting", value: "5x" },
    ],
    tools: ["n8n", "Stripe", "QuickBooks", "Gmail"],
    gradient: "from-amber-500/20 to-amber-500/5",
    featured: false,
  },
];

const CaseStudiesSection = () => {
  const [active, setActive] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const filtered = active === "All"
    ? caseStudies
    : caseStudies.filter((s) => s.category === active);

  const topProjects = filtered.filter((s) => s.featured || active !== "All").slice(0, 3);
  const moreProjects = filtered.filter((s) => !topProjects.includes(s));

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
                onClick={() => { setActive(cat); setShowMore(false); }}
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

        {/* Top Projects */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {topProjects.map((study, i) => (
            <ProjectCard key={study.title} study={study} delay={i * 0.12} />
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
              {showMore ? "Show Less" : `More Projects (${moreProjects.length})`}
            </button>

            {showMore && (
              <div className="grid lg:grid-cols-3 gap-8 mt-8">
                {moreProjects.map((study, i) => (
                  <ProjectCard key={study.title} study={study} delay={i * 0.12} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  study: typeof caseStudies[0];
  delay: number;
}

const ProjectCard = ({ study, delay }: ProjectCardProps) => (
  <AnimatedSection delay={delay}>
    <div className="glass-card-hover h-full flex flex-col overflow-hidden rounded-xl">
      <div className={`bg-gradient-to-br ${study.gradient} p-6`}>
        <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/20 mb-3">
          {study.industry}
        </span>
        <h3 className="font-display text-xl font-bold leading-tight">{study.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{study.client}</p>
      </div>

      <div className="grid grid-cols-3 gap-2 p-4 border-b border-border/30">
        {study.results.map((r) => (
          <div key={r.label} className="text-center py-2">
            <r.icon className="w-4 h-4 text-primary mx-auto mb-1" />
            <p className="font-display text-lg font-bold leading-none">{r.value}</p>
            <p className="text-[10px] text-muted-foreground leading-tight mt-1">{r.label}</p>
          </div>
        ))}
      </div>

      <div className="p-6 flex-1 flex flex-col gap-4">
        <div>
          <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1">Problem</p>
          <p className="text-muted-foreground text-sm">{study.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1">Solution</p>
          <p className="text-muted-foreground text-sm">{study.solution}</p>
        </div>

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

        <button className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-primary border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors duration-200">
          <ExternalLink className="w-4 h-4" />
          View Workflow Demo
        </button>
      </div>
    </div>
  </AnimatedSection>
);

export default CaseStudiesSection;
