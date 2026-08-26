import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { trackEvent } from "@/lib/analytics";


const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-3 font-display font-bold text-lg">
          <img src={profileImg} alt="Christian Espinosa" className="w-9 h-9 rounded-full object-cover border-2 border-primary/30" />
          <div className="flex items-center gap-1.5">
            <span className="text-foreground">Christian</span>
            <span className="text-primary">Espinosa</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => trackEvent("nav_click", { location: "navbar_desktop", label: l.label, destination: l.href })}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => trackEvent("lets_talk_click", { location: "navbar_desktop", label: "Let's Talk", destination: "#contact" })}
            className="btn-primary text-sm py-2 px-6 rounded-lg inline-block"
          >
            Let's Talk
          </a>
        </div>

        <button
          className="md:hidden text-foreground -mr-2 inline-flex min-h-11 min-w-11 items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/30"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => {
                  setOpen(false);
                  trackEvent("lets_talk_click", { location: "navbar_mobile" });
                }}
                className="btn-primary text-center text-sm py-2 rounded-lg"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
