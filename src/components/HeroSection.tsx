import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      {/* Glow orbs */}
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
            AI-Driven Workflow Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
        >
          Save 10–20+ Hours Per Week.{" "}
          <span className="gradient-text">Grow Without Hiring.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          I help businesses increase lead response speed by 80%, eliminate repetitive tasks, and build scalable AI-powered workflows — so you can focus on growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#services" className="btn-outline-glow inline-flex items-center justify-center gap-2">
            <Play className="w-4 h-4" /> View My Services
          </a>
        </motion.div>

        {/* Tool logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60 text-sm"
        >
          <span className="text-muted-foreground/40 text-xs uppercase tracking-widest">Tools I work with:</span>
          {["n8n", "Make", "Zapier", "GoHighLevel", "Lovable"].map((tool) => (
            <span key={tool} className="font-display font-semibold text-muted-foreground/50 hover:text-primary transition-colors cursor-default">
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
