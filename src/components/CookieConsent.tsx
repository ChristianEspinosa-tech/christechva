import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { getConsent, setConsent } from "@/lib/consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === "unset");
  }, []);

  if (!visible) return null;

  const choose = (status: "granted" | "denied") => {
    setConsent(status);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl"
    >
      <div className="glass-card p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">
            I use privacy-friendly analytics cookies to understand how visitors use this site.
            Nothing is recorded until you agree.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => choose("denied")}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors min-h-[44px]"
          >
            Decline
          </button>
          <button
            onClick={() => choose("granted")}
            className="btn-primary text-sm px-5 py-2 min-h-[44px]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
