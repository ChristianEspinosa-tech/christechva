import { MessageCircle, Wrench, PackageCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Discovery Call (Day 1)",
    desc: "30-min call to map your current workflow, identify the highest-ROI automation, and lock scope + timeline in writing.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Build & Test (Days 2–10)",
    desc: "I build in n8n / Make / GHL, share progress in a private Loom thread every 2–3 days, and run end-to-end tests with your real data before going live.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Handover Package",
    desc: "You receive: the live workflow, a Loom walkthrough, a written SOP, the n8n JSON export, and 14 days of post-launch support for tweaks and bug fixes.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">How I Work</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              From Call to <span className="gradient-text">Live Workflow in ~2 Weeks</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Most builds ship in 7–14 days. You always know what's being built, when, and what you'll get at the end.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.15}>
              <div className="glass-card-hover p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 relative">
                  <s.icon className="w-6 h-6 text-primary" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
