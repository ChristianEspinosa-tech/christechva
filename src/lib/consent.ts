export type ConsentStatus = "granted" | "denied" | "unset";

const CONSENT_KEY = "ce_cookie_consent";

type ConsentSubscriber = (status: ConsentStatus) => void;

const subscribers = new Set<ConsentSubscriber>();

/**
 * Reads the persisted consent choice. Stored as JSON `{ consent: boolean }`.
 * Legacy string values ("granted"/"denied") are migrated on read.
 */
function readStoredConsent(): { consent: boolean } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    // New format: { consent: boolean }
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.consent === "boolean") return parsed;
    } catch {
      /* not JSON — fall through to legacy string check */
    }

    // Legacy format: "granted" | "denied"
    if (raw === "granted") return { consent: true };
    if (raw === "denied") return { consent: false };
    return null;
  } catch {
    return null;
  }
}

export function getConsent(): ConsentStatus {
  const stored = readStoredConsent();
  if (!stored) return "unset";
  return stored.consent ? "granted" : "denied";
}

export function hasAnalyticsConsent(): boolean {
  return getConsent() === "granted";
}

export function setConsent(granted: boolean) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ consent: granted }));
  } catch {
    /* storage unavailable — consent stays for this page view only */
  }

  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: granted ? "granted" : "denied",
    });
  }

  const status: ConsentStatus = granted ? "granted" : "denied";
  subscribers.forEach((cb) => cb(status));
}

export function subscribeToConsent(cb: ConsentSubscriber) {
  subscribers.add(cb);
  return () => {
    subscribers.delete(cb);
  };
}
