import { DollarSign, HeadphonesIcon, MessageCircle, Target, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: DollarSign, title: "Affordable & High-Value", desc: "Premium automation services without the premium price tag." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "I'm with you every step — from planning to post-launch optimization." },
  { icon: MessageCircle, title: "Clear Communication", desc: "No jargon, no confusion. Just clear updates and transparent timelines." },
  { icon: Target, title: "Results-Focused", desc: "Every automation I build is designed to deliver measurable outcomes." },
  { icon: Heart, title: "Genuine Passion", desc: "I love what I do — and it shows in the quality of my work." },
];

const WhyMeSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why Choose Me</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Why Work <span className="gradient-text">With Me</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.08}>
              <div className="glass-card-hover p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-xs">{r.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
