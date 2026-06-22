import { useEffect, useState } from "react";
import { subscribeToAnalyticsEvents, AnalyticsEventData } from "@/lib/analytics";

const MAX_EVENTS = 10;

export default function DevAnalyticsDebugger() {
  const [events, setEvents] = useState<AnalyticsEventData[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToAnalyticsEvents((data) => {
      if (data.event === "external_link_click") {
        setEvents((prev) => [data, ...prev].slice(0, MAX_EVENTS));
      }
    });
    return unsubscribe;
  }, []);

  if (!import.meta.env.DEV) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-card/95 border border-border shadow-lg backdrop-blur text-sm font-semibold text-foreground hover:bg-card transition-colors"
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          External Link Debug
        </span>
        <span className="text-xs text-muted-foreground font-mono">{events.length}</span>
      </button>

      {open && (
        <div className="mt-2 rounded-lg bg-card/95 border border-border shadow-xl backdrop-blur overflow-hidden max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-secondary/30">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recent Events</span>
            <button
              onClick={() => setEvents([])}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Clear
            </button>
          </div>

          {events.length === 0 ? (
            <p className="px-4 py-6 text-xs text-muted-foreground text-center">
              No external_link_click events fired yet.
            </p>
          ) : (
            <ul className="divide-y divide-border">
              {events.map((e, i) => (
                <li key={`${e.timestamp}-${i}`} className="px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-primary">{e.label ?? "Email"}</span>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {new Date(e.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    location: <span className="text-foreground/80">{e.location}</span>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
