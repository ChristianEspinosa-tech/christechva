import { motion } from "framer-motion";
import { Clock, TrendingUp } from "lucide-react";

const results = [
  {
    icon: Clock,
    headline: "4 hours/day → 15 minutes",
    detail: "Cut a real estate client's lead follow-up time using a GoHighLevel + n8n workflow.",
  },
  {
    icon: TrendingUp,
    headline: "60% of support tickets deflected",
    detail: "AI chat agent (OpenAI + n8n + Intercom) handling tier-1 questions for a SaaS startup.",
  },
];

const StatsBar = () => {
  return (
    <section className="py-16 border-y border-border/20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {results.map((r, i) => (
            <motion.div
              key={r.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                  {r.headline}
                </p>
                <p className="text-muted-foreground text-sm mt-2">{r.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
