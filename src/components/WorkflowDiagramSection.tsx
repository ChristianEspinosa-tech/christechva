import { ArrowRight, Mail, Users, Bot, Database, Bell, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const workflows = [
  {
    title: "Lead Capture → CRM → Follow-Up",
    desc: "Automatically capture leads, route to CRM, and trigger personalized follow-ups.",
    steps: [
      { icon: Users, label: "Lead Captured" },
      { icon: Database, label: "Saved to CRM" },
      { icon: Mail, label: "Email Sent" },
      { icon: Bell, label: "Team Notified" },
    ],
  },
  {
    title: "Customer Inquiry → AI Chatbot → Escalation",
    desc: "AI handles FAQs instantly, escalates complex queries to your team.",
    steps: [
      { icon: Users, label: "Inquiry Received" },
      { icon: Bot, label: "AI Responds" },
      { icon: CheckCircle, label: "Resolved or Escalated" },
      { icon: Bell, label: "Team Alerted" },
    ],
  },
  {
    title: "Appointment → Confirmation → Reminder",
    desc: "Clients book, get confirmed instantly, and receive automated reminders.",
    steps: [
      { icon: Users, label: "Client Books" },
      { icon: CheckCircle, label: "Auto-Confirmed" },
      { icon: Mail, label: "Reminder Sent" },
      { icon: Bell, label: "Day-of Alert" },
    ],
  },
];

const WorkflowDiagramSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">How It Works</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Automation <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visual examples of the smart workflows I build — from lead capture to customer support.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8 max-w-5xl mx-auto">
          {workflows.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 0.12}>
              <div className="glass-card-hover p-8">
                <h3 className="font-display font-semibold text-lg mb-2">{w.title}</h3>
                <p className="text-muted-foreground text-sm mb-8">{w.desc}</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
                  {w.steps.map((step, j) => (
                    <div key={step.label} className="flex items-center gap-3 sm:gap-0">
                      <div className="flex flex-col items-center gap-2 min-w-[100px]">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground font-medium text-center">{step.label}</span>
                      </div>
                      {j < w.steps.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-primary/40 shrink-0 hidden sm:block mx-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowDiagramSection;
