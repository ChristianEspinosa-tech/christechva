import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, BrightPath Coaching",
    quote: "Christian completely transformed how we handle leads. What used to take us hours now happens automatically—and our conversion rate jumped 40% in the first month.",
    rating: 5,
  },
  {
    name: "James Rivera",
    role: "CEO, QuickShip Logistics",
    quote: "The AI chatbot he built handles 60% of our support tickets without human intervention. Our team finally has time to focus on what actually matters.",
    rating: 5,
  },
  {
    name: "Emily Nguyen",
    role: "Marketing Director, Bloom & Co",
    quote: "We went from manually tracking invoices in spreadsheets to a fully automated system. It paid for itself in the first two weeks.",
    rating: 5,
  },
  {
    name: "David Kowalski",
    role: "Operations Manager, ScaleUp SaaS",
    quote: "Christian doesn't just automate—he thinks about the whole workflow. The appointment system he built cut our no-shows by 75% and saved us 15+ hours a week.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              What Clients <span className="gradient-text">Are Saying</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it—hear from the businesses I've helped automate and scale.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="glass-card-hover p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground/90 text-sm leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </blockquote>
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
