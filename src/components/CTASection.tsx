import { Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { trackEvent } from "@/lib/analytics";


const CTASection = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="glass-card p-12 md:p-20 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Automate Your Business?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                One 30-minute call. We map your highest-ROI workflow and you walk away with a clear plan — whether we work together or not.
              </p>
              <div className="flex justify-center">
                <a
                  href="#booking"
                  onClick={() => trackEvent("schedule_call_click", { location: "cta_section", label: "Schedule a Free Strategy Call", destination: "#booking" })}
                  className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
                >
                  <Calendar className="w-5 h-5" /> Schedule a Free Strategy Call
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
