import { motion } from "framer-motion";

const clients = [
  "Acme Corp",
  "TechFlow",
  "Streamline",
  "NovaPay",
  "DataSync",
  "CloudPeak",
];

const TrustBar = () => {
  return (
    <section className="py-10 border-b border-border/20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
            >
              <span className="font-display text-lg md:text-xl font-semibold tracking-tight select-none">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
