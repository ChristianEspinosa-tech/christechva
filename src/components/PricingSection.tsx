import { Check, ArrowRight, Star, Zap, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { trackEvent } from "@/lib/analytics";


const packages = [
  {
    name: "Starter",
    tagline: "One workflow, fully done",
    icon: Zap,
    turnaround: "7 days",
    price: "Starting at $500–$1,500",
    features: [
      "1 production-ready automation (n8n, Make, or Zapier)",
      "CRM or email tool integration",
      "Loom walkthrough + written SOP",
      "14 days post-launch support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    tagline: "Most popular",
    icon: Star,
    turnaround: "2–3 weeks",
    price: "Starting at $1,500–$4,000",
    features: [
      "3 connected automations (lead capture → nurture → booking)",
      "GoHighLevel or HubSpot pipeline setup",
      "AI chatbot or email agent integration",
      "Loom + SOP + n8n JSON export",
      "30 days priority support",
    ],
    cta: "Let's Talk",
    highlighted: true,
  },
  {
    name: "Scale",
    tagline: "Full automation system",
    icon: Star,
    turnaround: "4–6 weeks",
    price: "Starting at $4,000+",
    features: [
      "End-to-end workflow build across 5+ tools",
      "Custom AI agents (OpenAI / Claude)",
      "Multi-platform API & data sync",
      "Monitoring dashboard + error alerts",
      "60 days dedicated support + monthly optimization call",
    ],
    cta: "Book a Call",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Packages</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Clear Scope, <span className="gradient-text">Fixed Turnaround</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every package has defined deliverables and a turnaround window. No open-ended retainers, no surprises.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.1}>
              <div
                className={`glass-card-hover p-8 h-full flex flex-col relative ${
                  pkg.highlighted ? "border-primary/40 ring-1 ring-primary/20" : ""
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-4">
                  <h3 className="font-display text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm">{pkg.tagline}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit mb-5">
                  <Clock className="w-3.5 h-3.5" /> Turnaround: {pkg.turnaround}
                </div>
                <p className="text-muted-foreground text-xs mb-6 italic">
                  Custom pricing based on scope
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  onClick={() =>
                    trackEvent(pkg.cta === "Let's Talk" ? "lets_talk_click" : "schedule_call_click", {
                      location: `pricing_${pkg.name.toLowerCase()}`,
                      label: pkg.cta,
                    })
                  }
                  className={`inline-flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-lg transition-all duration-300 ${
                    pkg.highlighted ? "btn-primary" : "btn-outline-glow"
                  }`}
                >
                  {pkg.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
