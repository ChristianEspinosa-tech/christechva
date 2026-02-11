import { Check, ArrowRight, Star, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const packages = [
  {
    name: "Starter",
    tagline: "Perfect first step",
    icon: Zap,
    features: [
      "1 Workflow Automation",
      "CRM Integration",
      "Email Automation Setup",
      "7 Days Post-Launch Support",
      "Documentation & Training",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    tagline: "Most popular",
    icon: Star,
    features: [
      "3 Workflow Automations",
      "CRM + Lead Capture Setup",
      "AI Chatbot Integration",
      "Email & SMS Sequences",
      "14 Days Priority Support",
      "Performance Dashboard",
    ],
    cta: "Let's Talk",
    highlighted: true,
  },
  {
    name: "Scale",
    tagline: "Full automation suite",
    icon: Star,
    features: [
      "Unlimited Workflows",
      "Full CRM & Pipeline Build",
      "AI Agents & Chatbots",
      "API & Multi-Platform Sync",
      "30 Days Dedicated Support",
      "Monthly Optimization Review",
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
              Simple, Transparent <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a package that fits your needs. Every engagement starts with a free strategy call.
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
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm">{pkg.tagline}</p>
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
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-lg transition-all duration-300 ${
                    pkg.highlighted
                      ? "btn-primary"
                      : "btn-outline-glow"
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
