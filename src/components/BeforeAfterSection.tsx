import { XCircle, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const beforeItems = [
  "Manual data entry across platforms",
  "Slow response time to new leads",
  "Lost leads falling through the cracks",
  "Missed follow-ups with prospects",
  "Hours wasted on repetitive tasks",
];

const afterItems = [
  "Automated CRM entry in seconds",
  "Instant follow-up emails & messages",
  "Smart lead tagging & routing system",
  "Automatic reminders & sequences",
  "Focus on growth, not busywork",
];

const BeforeAfterSection = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">The Difference</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Before vs After <span className="gradient-text">Automation</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the transformation automation brings to your daily operations.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 h-full border-destructive/20">
              <h3 className="font-display text-xl font-bold mb-6 text-destructive flex items-center gap-2">
                <XCircle className="w-6 h-6" /> Before Automation
              </h3>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 h-full border-primary/20">
              <h3 className="font-display text-xl font-bold mb-6 text-primary flex items-center gap-2">
                <CheckCircle className="w-6 h-6" /> After Automation
              </h3>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
