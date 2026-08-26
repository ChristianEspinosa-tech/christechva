export type AnalyticsEvent =
  | "schedule_call_click"
  | "lets_talk_click"
  | "social_click"
  | "external_link_click"
  | "booking_widget_view"
  | "booking_widget_engage";

export interface EventParams {
  location: string;
  label?: string;
  value?: number;
}

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  landing_page?: string;
}

export interface AnalyticsEventData extends EventParams {
  event: AnalyticsEvent;
  timestamp: number;
  utm?: UtmParams;
}

type EventSubscriber = (data: AnalyticsEventData) => void;

const subscribers = new Set<EventSubscriber>();

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const STORAGE_KEY = "ce_attribution";

let cachedUtm: UtmParams | null = null;

/**
 * Reads UTM params from the current URL (first visit wins) and persists them
 * for the session so conversions later in the funnel keep their attribution.
 */
export function captureUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  const search = new URLSearchParams(window.location.search);
  const fromUrl: UtmParams = {};
  UTM_KEYS.forEach((key) => {
    const value = search.get(key);
    if (value) fromUrl[key] = value;
  });

  let stored: UtmParams = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    stored = {};
  }

  const hasNew = Object.keys(fromUrl).length > 0;
  const attribution: UtmParams = hasNew
    ? {
        ...fromUrl,
        referrer: document.referrer || undefined,
        landing_page: window.location.pathname,
      }
    : stored;

  if (hasNew) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    } catch {
      /* storage unavailable — attribution stays in-memory only */
    }
  }

  cachedUtm = attribution;
  return attribution;
}

export function getUtmParams(): UtmParams {
  if (cachedUtm) return cachedUtm;
  return captureUtmParams();
}

export function subscribeToAnalyticsEvents(cb: EventSubscriber) {
  subscribers.add(cb);
  return () => {
    subscribers.delete(cb);
  };
}

export function trackEvent(event: AnalyticsEvent, params: EventParams) {
  const utm = getUtmParams();
  const payload = {
    event_name: event,
    ...params,
    ...utm,
  };

  if (typeof window !== "undefined" && "gtag" in window && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", event, {
      event_category: "engagement",
      event_label: params.label ?? params.location,
      value: params.value,
      ...utm,
    });
  }

  // Generic fallback for any other analytics provider that reads a global queue
  if (typeof window !== "undefined" && "analytics" in window && typeof (window as any).analytics === "function") {
    (window as any).analytics.track(event, payload);
  }

  // Notify dev-only subscribers for on-screen debugging
  if (import.meta.env.DEV && subscribers.size > 0) {
    const data: AnalyticsEventData = {
      event,
      ...params,
      utm,
      timestamp: Date.now(),
    };
    subscribers.forEach((cb) => cb(data));
  }

  // Safe console log for debugging until a provider is wired in
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log("[Analytics]", event, payload);
  }
}
