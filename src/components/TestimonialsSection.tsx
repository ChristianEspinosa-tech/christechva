import { UserCheck, Zap, DollarSign } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const valueProps = [
  {
    icon: UserCheck,
    title: "Direct Access to the Builder",
    body: "No account managers, no handoffs, no lost-in-translation. You talk to the person actually building your automations — from the first call to the final handoff.",
  },
  {
    icon: Zap,
    title: "Full Attention, Fast Turnaround",
    body: "I'm not juggling dozens of clients at once. Your project gets focused, undivided work — which means faster builds, tighter feedback loops, and quicker iterations.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing While I Scale",
    body: "I'm growing my portfolio, which works in your favor. You get builder-level work at rates that undercut established agencies — without cutting corners on quality.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why Work With Me</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              A <span className="gradient-text">Builder's Attention</span>, Not a Vendor's Handoff
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              You're working with someone early in their journey — and that's a genuine advantage for you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {valueProps.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="glass-card-hover p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {v.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
