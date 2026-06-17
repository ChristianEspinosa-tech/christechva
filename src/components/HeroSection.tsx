import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { trackEvent } from "@/lib/analytics";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-primary mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            AI Automation Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
        >
          I build <span className="gradient-text">AI automation systems</span> that replace repetitive workflows
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3"
        >
          Built with n8n, Make, GoHighLevel, and Zapier.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm md:text-base text-muted-foreground/70 max-w-2xl mx-auto mb-10"
        >
          Save 10–20+ hours per week and grow without hiring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="#booking"
            onClick={() => trackEvent("schedule_call_click", { location: "hero" })}
            className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
          >
            <Calendar className="w-5 h-5" /> Schedule a Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
