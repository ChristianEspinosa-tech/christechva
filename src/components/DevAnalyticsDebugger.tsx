import { useEffect, useMemo, useRef, useState } from "react";
import { subscribeToAnalyticsEvents, AnalyticsEventData, AnalyticsEvent } from "@/lib/analytics";
import { Input } from "@/components/ui/input";
import { Copy, Check, Pin, PinOff } from "lucide-react";

const MAX_EVENTS = 10;

const ALL_EVENT_TYPES: AnalyticsEvent[] = [
  "schedule_call_click",
  "lets_talk_click",
  "social_click",
  "external_link_click",
];

export default function DevAnalyticsDebugger() {
  const [events, setEvents] = useState<AnalyticsEventData[]>([]);
  const [open, setOpen] = useState(false);
  const [activeTypes, setActiveTypes] = useState<AnalyticsEvent[]>(ALL_EVENT_TYPES);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToAnalyticsEvents((data) => {
      setEvents((prev) => [data, ...prev].slice(0, MAX_EVENTS));
    });
    return unsubscribe;
  }, []);

  const visibleEvents = useMemo(
    () =>
      events.filter((e) => {
        const matchesType = activeTypes.includes(e.event);
        if (!matchesType) return false;
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          (e.label ?? "").toLowerCase().includes(q) ||
          (e.location ?? "").toLowerCase().includes(q)
        );
      }),
    [events, activeTypes, searchQuery]
  );

  const toggleType = (type: AnalyticsEvent) => {
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  if (!import.meta.env.DEV) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-card/95 border border-border shadow-lg backdrop-blur text-sm font-semibold text-foreground hover:bg-card transition-colors"
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Analytics Debug
        </span>
        <span className="text-xs text-muted-foreground font-mono">{visibleEvents.length}</span>
      </button>

      {open && (
        <div className="mt-2 rounded-lg bg-card/95 border border-border shadow-xl backdrop-blur overflow-hidden max-h-[28rem] flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-secondary/30">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Filters</span>
            <button
              onClick={() => setEvents([])}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="px-3 py-2 border-b border-border flex flex-wrap gap-2">
            {ALL_EVENT_TYPES.map((type) => {
              const active = activeTypes.includes(type);
              return (
                <button
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`text-[10px] font-semibold px-2 py-1 rounded-full border transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-secondary/50 text-muted-foreground border-border hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>

          <div className="px-3 py-2 border-b border-border">
            <Input
              type="text"
              placeholder="Search by label or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 text-xs"
            />
          </div>

          <div className="overflow-y-auto flex-1">
            {visibleEvents.length === 0 ? (
              <p className="px-4 py-6 text-xs text-muted-foreground text-center">
                No events match the selected filters.
              </p>
            ) : (
              <ul className="divide-y divide-border">
                {visibleEvents.map((e, i) => (
                  <li key={`${e.timestamp}-${i}`} className="px-4 py-3 relative group">
                    <div className="flex items-center justify-between mb-1 gap-2">
                      <span className="text-xs font-mono text-primary truncate">{e.event}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-muted-foreground font-mono">
                          {new Date(e.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                        </span>
                        <button
                          onClick={async () => {
                            await navigator.clipboard.writeText(JSON.stringify(e, null, 2));
                            setCopiedIndex(i);
                            setTimeout(() => setCopiedIndex((prev) => (prev === i ? null : prev)), 1500);
                          }}
                          className="p-1 rounded-md hover:bg-secondary transition-colors"
                          title="Copy event payload"
                        >
                          {copiedIndex === i ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            <Copy className="w-3 h-3 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/80 truncate">
                      label: <span className="text-muted-foreground">{e.label ?? "—"}</span>
                    </p>
                    <p className="text-xs text-foreground/80 truncate">
                      location: <span className="text-muted-foreground">{e.location}</span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

