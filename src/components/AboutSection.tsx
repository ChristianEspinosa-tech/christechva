import { MapPin, Rocket, Target, Lightbulb, Clock, Zap, UserCheck, BellRing, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import avatarImg from "@/assets/avatar-placeholder.png";

const traits = [
  { icon: Rocket, label: "Growth-Focused", desc: "Constantly learning and improving my skills" },
  { icon: Target, label: "Detail-Oriented", desc: "Every workflow is built with precision" },
  { icon: Lightbulb, label: "Solution-Focused", desc: "Practical automation that delivers results" },
];

const outcomes = [
  { icon: Clock, text: "Reduce manual tasks by 80%" },
  { icon: Zap, text: "Faster lead response times" },
  { icon: UserCheck, text: "Better client follow-ups" },
  { icon: BellRing, text: "No missed inquiries" },
  { icon: TrendingUp, text: "Scalable systems that grow with you" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="mb-6">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full mx-auto overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_hsl(187_80%_55%/0.15)]">
                <img src={avatarImg} alt="Christian Espinosa" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Me</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Passionate About <span className="gradient-text">Smart Automation</span>
            </h2>
            <p className="text-foreground/85 text-lg leading-relaxed">
              I'm Christian Espinosa, an AI-Driven Workflow Developer based in the Philippines, serving clients globally. I build practical automation systems that untangle messy processes and give teams back hours every week — starting local, thinking global.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 mb-8 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Philippines · Serving Global Clients</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {outcomes.map((o) => (
                <span key={o.text} className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                  <o.icon className="w-4 h-4" />
                  {o.text}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {traits.map((t, i) => (
            <AnimatedSection key={t.label} delay={i * 0.1}>
              <div className="glass-card-hover p-8 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <t.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{t.label}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
