export type AnalyticsEvent = {
  name: string;
  data?: Record<string, unknown>;
};

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("consultoria:event", {
      detail: { ...event, timestamp: Date.now() },
    })
  );
  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", event.name, event.data ?? {});
  }
}
