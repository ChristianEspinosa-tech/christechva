import { ArrowRight, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="glass-card p-12 md:p-20 text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Automate Your Business?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Let's discuss how automation can transform your workflow, save you time, and help your business scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#booking" className="btn-primary inline-flex items-center justify-center gap-2">
                  Let's Talk <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#booking" className="btn-outline-glow inline-flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" /> Schedule Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
