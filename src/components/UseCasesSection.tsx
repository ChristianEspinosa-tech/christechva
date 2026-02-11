import { Facebook, Mail, Calendar, Receipt, MessageSquare } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cases = [
  { icon: Facebook, title: "Lead Capture from Facebook to CRM", desc: "Automatically capture leads from Facebook ads and route them into your CRM with tags and follow-up sequences." },
  { icon: Mail, title: "Automated Email Follow-Ups", desc: "Smart email sequences that nurture leads, re-engage cold prospects, and keep your pipeline warm." },
  { icon: Calendar, title: "Appointment Booking Automation", desc: "Self-service scheduling with confirmations, reminders, and calendar sync across platforms." },
  { icon: Receipt, title: "Invoice & Payment Tracking", desc: "Auto-generate invoices, send payment reminders, and track transactions seamlessly." },
  { icon: MessageSquare, title: "AI Chatbot for Customer Support", desc: "Deploy intelligent chatbots that handle FAQs, qualify leads, and route complex queries to your team." },
];

const UseCasesSection = () => {
  return (
    <section id="solutions" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Solutions</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Example Solutions <span className="gradient-text">I Can Build</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world automation scenarios designed to save you time and drive results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div className="glass-card-hover p-8 h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
