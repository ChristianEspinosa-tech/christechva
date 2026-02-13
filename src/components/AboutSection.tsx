import { MapPin, Rocket, Target, Lightbulb, Clock, Zap, UserCheck, BellRing, TrendingUp, Sparkles, Globe, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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

const story = [
  {
    icon: Sparkles,
    title: "Why Automation?",
    text: "I discovered automation when I saw how much time businesses waste on repetitive tasks. The idea that a well-designed workflow could save someone hours every day — that clicked with me instantly.",
  },
  {
    icon: Heart,
    title: "What Drives Me",
    text: "I genuinely enjoy untangling messy processes and turning them into smooth, reliable systems. There's nothing better than hearing a client say, \"I can't believe I used to do that manually.\"",
  },
  {
    icon: Globe,
    title: "My Mission",
    text: "I'm on a mission to make powerful automation accessible — starting with businesses in the Philippines and expanding globally. Every business deserves systems that work as hard as they do.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Me</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Passionate About <span className="gradient-text">Smart Automation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Christian Espinosa, an AI-Driven Workflow Developer based in the Philippines,
              serving clients globally. I help businesses save time and scale efficiently through
              practical, modern automation solutions. My dedication to continuous learning and
              delivering results means you get a partner who's committed and laser-focused
              on your success.
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

        {/* Personal Story */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {story.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.12}>
              <div className="glass-card-hover p-8 h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

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
