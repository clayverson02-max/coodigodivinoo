/**
 * Meta Pixel + Conversions API tracking helper.
 * Generates a shared event_id so browser pixel and server CAPI events are deduplicated.
 */
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function uuid() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : undefined;
}

interface TrackOptions {
  value?: number;
  currency?: string;
  contentName?: string;
}

export async function trackEvent(eventName: string, options: TrackOptions = {}) {
  const eventId = uuid();
  const eventSourceUrl = typeof window !== "undefined" ? window.location.href : undefined;

  // 1. Browser pixel
  if (typeof window !== "undefined" && window.fbq) {
    const customData: Record<string, unknown> = {};
    if (options.value !== undefined) customData.value = options.value;
    if (options.currency) customData.currency = options.currency;
    if (options.contentName) customData.content_name = options.contentName;
    window.fbq("track", eventName, customData, { eventID: eventId });
  }

  // 2. Server-side Conversions API (deduplicated via event_id)
  try {
    await supabase.functions.invoke("meta-capi", {
      body: {
        event_name: eventName,
        event_id: eventId,
        event_source_url: eventSourceUrl,
        value: options.value,
        currency: options.currency,
        content_name: options.contentName,
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
      },
    });
  } catch (err) {
    // Fail silently — pixel still fired client-side
    console.warn("[meta-capi] event failed", err);
  }
}
