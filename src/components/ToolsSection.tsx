import { Zap, Repeat, Link, Building, Code } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const tools = [
  {
    icon: Repeat,
    name: "n8n",
    desc: "Open-source workflow automation for complex, multi-step integrations and AI agents.",
  },
  {
    icon: Zap,
    name: "Make (Integromat)",
    desc: "Visual automation platform for connecting apps and designing powerful data workflows.",
  },
  {
    icon: Link,
    name: "Zapier",
    desc: "No-code automation connecting 5,000+ apps for seamless task automation.",
  },
  {
    icon: Building,
    name: "GoHighLevel",
    desc: "All-in-one CRM and marketing automation for lead capture, nurturing, and closing.",
  },
  {
    icon: Code,
    name: "Lovable.dev",
    desc: "AI-powered app builder for creating web applications and internal tools rapidly.",
  },
];

const ToolsSection = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Tech Stack</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Tools I <span className="gradient-text">Specialize In</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Certified and proficient in industry-leading automation platforms trusted by thousands of businesses worldwide.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {tools.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <div className="glass-card-hover p-6 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <t.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{t.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{t.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
