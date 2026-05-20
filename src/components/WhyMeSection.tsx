import { Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const WhyMeSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">My Niche</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              I specialize in <span className="gradient-text">service-based businesses</span>
              <br className="hidden md:block" /> that live or die by lead follow-up speed.
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-card p-10 md:p-14 max-w-3xl mx-auto">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              Real estate teams, coaches, agencies, and home-service companies — anyone whose revenue depends on{" "}
              <span className="text-primary font-semibold">contacting a lead in under 5 minutes</span>.
            </p>
            <p className="text-muted-foreground">
              That's where GoHighLevel + n8n shine, and it's the corner of the market I've built the deepest playbook for. If your business doesn't fit that mold, I'll tell you on the first call instead of taking the project.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyMeSection;
