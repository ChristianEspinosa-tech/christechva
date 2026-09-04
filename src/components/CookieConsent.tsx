import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { getConsent, setConsent } from "@/lib/consent";

// Replace with your real backend endpoint. The POST fires only on "Accept all".
const CONSENT_API_URL = "https://script.google.com/macros/s/AKfycbysUGBFNXo_3DPtK3BI5YqsezTsVNKZL3DgOlsK2PkYdTltExkW8geV9-ulsUfioJZN7w/exec";

async function recordConsent(consent: boolean) {
  const payload = {
    consent,
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
  };

  // Google Apps Script web apps reject cross-origin POSTs unless sent as
  // text/plain with mode: "no-cors". Keepalive ensures it survives navigation.
  try {
    await fetch(CONSENT_API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    /* endpoint not configured or network error — consent still saved locally */
  }
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === "unset");
  }, []);

  if (!visible) return null;

  const choose = (granted: boolean) => {
    setConsent(granted);
    setVisible(false);
    if (granted) {
      // Fire-and-forget; never blocks the UI.
      void recordConsent(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-5xl bg-card border-t border-x border-border/40 rounded-t-2xl shadow-2xl px-5 py-5 md:px-8 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex items-start gap-3 flex-1">
            <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-2">
              <h2 className="font-display font-bold text-base text-foreground leading-tight">
                We value your privacy
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Essential cookies keep this site working. With your permission we also use
                analytics cookies to see which pages people actually use, and Google Ads
                conversion cookies to see which ads lead to orders (no ad personalisation). You
                can change your mind at any time from Cookie settings in the footer — details in
                our{" "}
                <a href="#" className="underline text-foreground hover:text-primary transition-colors">
                  Privacy & cookies
                </a>{" "}
                page.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 shrink-0">
            <button
              onClick={() => choose(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-colors min-h-[44px]"
            >
              Decline
            </button>
            <button
              onClick={() => choose(true)}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-white text-zinc-900 hover:bg-zinc-100 transition-colors shadow-lg min-h-[44px]"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
