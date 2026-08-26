export type ConsentStatus = "granted" | "denied" | "unset";

const CONSENT_KEY = "ce_cookie_consent";

type ConsentSubscriber = (status: ConsentStatus) => void;

const subscribers = new Set<ConsentSubscriber>();

export function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return "unset";
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : "unset";
  } catch {
    return "unset";
  }
}

export function hasAnalyticsConsent(): boolean {
  return getConsent() === "granted";
}

export function setConsent(status: Exclude<ConsentStatus, "unset">) {
  try {
    localStorage.setItem(CONSENT_KEY, status);
  } catch {
    /* storage unavailable — consent stays for this page view only */
  }

  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("consent", "update", {
      analytics_storage: status === "granted" ? "granted" : "denied",
      ad_storage: "denied",
    });
  }

  subscribers.forEach((cb) => cb(status));
}

export function subscribeToConsent(cb: ConsentSubscriber) {
  subscribers.add(cb);
  return () => {
    subscribers.delete(cb);
  };
}
