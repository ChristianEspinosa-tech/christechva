import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const BeforeAfterSection = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Real Result</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              What Automation <span className="gradient-text">Actually Looks Like</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-card p-10 md:p-14 max-w-3xl mx-auto text-center relative overflow-hidden">
            <Quote className="w-10 h-10 text-primary/40 mx-auto mb-6" />
            <p className="font-display text-2xl md:text-3xl font-semibold leading-snug mb-6">
              Reduced a real estate client's lead follow-up from{" "}
              <span className="gradient-text">4 hours/day to 15 minutes</span>{" "}
              using a GoHighLevel + n8n workflow.
            </p>
            <p className="text-muted-foreground text-sm">
              Same lead volume. Same close rate. Just no more manual copy-paste between Facebook Ads, the CRM, and the SMS follow-up sequence.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
