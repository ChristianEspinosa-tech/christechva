import { motion } from "framer-motion";
import { Bot, Clock, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Bot, value: "50+", label: "Automations Built" },
  { icon: Clock, value: "200+", label: "Hours Saved Monthly" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
];

const StatsBar = () => {
  return (
    <section className="py-16 border-y border-border/20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
