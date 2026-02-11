import { Workflow, Users, Bot, Plug, Settings, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation Setup",
    desc: "Design and implement end-to-end automated workflows that eliminate manual tasks and boost productivity.",
    benefit: "Save 10+ hours per week",
  },
  {
    icon: Users,
    title: "Lead Generation Automation",
    desc: "Auto-capture leads from multiple platforms, nurture them with follow-ups, and funnel them into your CRM.",
    benefit: "Never miss a lead again",
  },
  {
    icon: Settings,
    title: "CRM & GoHighLevel Automation",
    desc: "Streamline your CRM with automated pipelines, follow-ups, and client management workflows.",
    benefit: "Close deals faster",
  },
  {
    icon: Bot,
    title: "AI Chatbot & Agent Integration",
    desc: "Build intelligent chatbots and AI agents that handle customer inquiries 24/7 with human-like precision.",
    benefit: "24/7 customer support",
  },
  {
    icon: Plug,
    title: "API Integrations",
    desc: "Connect your tools and platforms seamlessly so data flows automatically between systems.",
    benefit: "Eliminate data silos",
  },
  {
    icon: TrendingUp,
    title: "Business Process Optimization",
    desc: "Analyze, redesign, and automate your business processes for maximum efficiency and growth.",
    benefit: "Increase revenue",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Services</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              What I Can <span className="gradient-text">Build For You</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From simple workflow automations to complex AI-powered systems — I deliver practical solutions that save you time, reduce errors, and increase revenue.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="glass-card-hover p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm flex-1 mb-4">{s.desc}</p>
                <span className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {s.benefit}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
