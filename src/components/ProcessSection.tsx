import { Search, PenTool, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Analyze Your Workflow",
    desc: "I study your current processes, identify bottlenecks, and find automation opportunities.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design Smart Systems",
    desc: "I architect custom automation workflows tailored to your specific needs and tools.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Implement & Optimize",
    desc: "I build, test, and deploy your automations — then continuously optimize for best results.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">How It Works</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              A Simple <span className="gradient-text">3-Step Process</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.15}>
              <div className="relative text-center">
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px border-t border-dashed border-primary/20" />
                )}
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative">
                  <s.icon className="w-10 h-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
