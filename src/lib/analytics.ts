export type AnalyticsEvent =
  | "schedule_call_click"
  | "lets_talk_click"
  | "social_click"
  | "external_link_click";

export interface EventParams {
  location: string;
  label?: string;
  value?: number;
}

export interface AnalyticsEventData extends EventParams {
  event: AnalyticsEvent;
  timestamp: number;
}

type EventSubscriber = (data: AnalyticsEventData) => void;

const subscribers = new Set<EventSubscriber>();

export function subscribeToAnalyticsEvents(cb: EventSubscriber) {
  subscribers.add(cb);
  return () => {
    subscribers.delete(cb);
  };
}

export function trackEvent(event: AnalyticsEvent, params: EventParams) {
  const payload = {
    event_name: event,
    ...params,
  };

  if (typeof window !== "undefined" && "gtag" in window && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", event, {
      event_category: "engagement",
      event_label: params.label ?? params.location,
      value: params.value,
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
