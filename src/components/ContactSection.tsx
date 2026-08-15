import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { trackEvent } from "@/lib/analytics";


const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-14">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-8">
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Quick Message</span>
            <h2 className="font-display text-xl md:text-2xl font-bold mt-2 mb-2 text-foreground/90">
              Prefer to Message First?
            </h2>
            <p className="text-muted-foreground text-sm">
              Have a quick question before booking a call? Send me a message.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-secondary/50 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-secondary/50 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Message</label>
                  <textarea
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary/50 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2 py-2 text-sm">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-5 pt-5 border-t border-border/40 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:christian.t.espinosa@gmail.com"
                    onClick={() =>
                      trackEvent("external_link_click", {
                        location: "contact",
                        label: "Email",
                      })
                    }
                    className="hover:text-primary transition-colors"
                  >
                    christian.t.espinosa@gmail.com
                  </a>
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Philippines
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
