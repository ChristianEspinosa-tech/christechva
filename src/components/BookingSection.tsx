import AnimatedSection from "./AnimatedSection";
import { Calendar } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="booking" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Book a Call</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Schedule a <span className="gradient-text">Free Strategy Call</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick a time that works for you. Let's discuss how automation can transform your business.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-card p-4 md:p-8 max-w-4xl mx-auto overflow-hidden rounded-xl">
            <iframe
              src="https://calendly.com/christian-espinosa-work?hide_gdpr_banner=1"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a call with Christian Espinosa"
              className="rounded-lg"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BookingSection;
