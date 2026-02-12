import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "I'm not tech-savvy. Will I be able to use the automations you build?",
    a: "Absolutely. Every system I build comes with clear documentation, a walkthrough video, and hands-on training. You won't need to touch any code — everything runs on autopilot once it's set up.",
  },
  {
    q: "How long does it take to set up an automation?",
    a: "Most single-workflow automations are live within 3–5 business days. Larger projects with multiple integrations typically take 1–2 weeks depending on complexity.",
  },
  {
    q: "What tools do you use to build automations?",
    a: "I specialize in n8n, Make (Integromat), Zapier, and GoHighLevel — choosing the best tool based on your specific needs, budget, and existing tech stack.",
  },
  {
    q: "Do you offer ongoing support after the project is done?",
    a: "Yes. Every package includes post-launch support (7–30 days depending on your plan). I also offer monthly optimization retainers for businesses that want continuous improvements.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing is custom based on scope and complexity. Every engagement starts with a free strategy call where I assess your needs and provide a transparent quote — no surprises.",
  },
  {
    q: "Can you integrate with the tools I already use?",
    a: "In most cases, yes. I work with CRMs, email platforms, payment processors, calendars, spreadsheets, and hundreds of other apps through API integrations.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to help you decide if automation is right for your business.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-sm md:text-base hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
