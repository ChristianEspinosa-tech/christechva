import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { trackEvent } from "@/lib/analytics";

const BookingSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewedRef = useRef(false);
  const engagedRef = useRef(false);

  // Fire once when the booking widget scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !viewedRef.current) {
            viewedRef.current = true;
            trackEvent("booking_widget_view", { location: "booking_section", label: "cal.com" });
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Cross-origin iframes steal focus on click — use that as an engagement signal
  useEffect(() => {
    const onBlur = () => {
      if (engagedRef.current) return;
      if (document.activeElement?.tagName === "IFRAME" && document.activeElement.id === "cal-embed") {
        engagedRef.current = true;
        trackEvent("booking_widget_engage", { location: "booking_section", label: "cal.com" });
      }
    };
    window.addEventListener("blur", onBlur);
    return () => window.removeEventListener("blur", onBlur);
  }, []);

  return (
    <section id="booking" ref={sectionRef} className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Book a Call</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Schedule a <span className="text-primary">Free Strategy Call</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick a time that works for you. Let's discuss how automation can transform your business.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-card p-4 md:p-8 max-w-4xl mx-auto overflow-hidden rounded-xl">
            <iframe
              id="cal-embed"
              src="https://cal.com/christian-espinosa/strategy-call"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a strategy call with Christian Espinosa"
              className="rounded-lg"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BookingSection;
