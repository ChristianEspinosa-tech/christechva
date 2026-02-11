import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-bold text-sm">
          <Zap className="w-4 h-4 text-primary" />
          <span>Christian Espinosa</span>
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Christian Espinosa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
