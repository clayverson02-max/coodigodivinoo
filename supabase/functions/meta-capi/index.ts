// Meta Conversions API — server-side event forwarder
// Fires deduplicated events using the same event_id as the browser pixel.
import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const PIXEL_ID = "2149847235657959";
const ACCESS_TOKEN = Deno.env.get("META_CAPI_ACCESS_TOKEN");
const TEST_EVENT_CODE = Deno.env.get("META_CAPI_TEST_EVENT_CODE"); // optional

async function sha256(value: string) {
  const data = new TextEncoder().encode(value.trim().toLowerCase());
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

interface IncomingEvent {
  event_name: string;
  event_id: string;
  event_source_url?: string;
  value?: number;
  currency?: string;
  content_name?: string;
  email?: string;
  phone?: string;
  fbp?: string;
  fbc?: string;
  user_agent?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (!ACCESS_TOKEN) {
    return new Response(
      JSON.stringify({ error: "META_CAPI_ACCESS_TOKEN is not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  try {
    const body: IncomingEvent = await req.json();
    if (!body?.event_name || !body?.event_id) {
      return new Response(
        JSON.stringify({ error: "event_name and event_id are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Best-effort client IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("cf-connecting-ip") ||
      undefined;
    const userAgent = body.user_agent || req.headers.get("user-agent") || undefined;

    const userData: Record<string, unknown> = {};
    if (ip) userData.client_ip_address = ip;
    if (userAgent) userData.client_user_agent = userAgent;
    if (body.fbp) userData.fbp = body.fbp;
    if (body.fbc) userData.fbc = body.fbc;
    if (body.email) userData.em = [await sha256(body.email)];
    if (body.phone) userData.ph = [await sha256(body.phone.replace(/\D/g, ""))];

    const customData: Record<string, unknown> = {};
    if (body.value !== undefined) customData.value = body.value;
    if (body.currency) customData.currency = body.currency;
    if (body.content_name) customData.content_name = body.content_name;

    const payload = {
      data: [
        {
          event_name: body.event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id: body.event_id,
          event_source_url: body.event_source_url,
          action_source: "website",
          user_data: userData,
          custom_data: customData,
        },
      ],
      ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
    };

    const url = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (!res.ok) {
      console.error("Meta CAPI error", res.status, data);
      return new Response(
        JSON.stringify({ error: "Meta CAPI rejected the event", status: res.status, details: data }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true, meta: data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("meta-capi exception", err);
    const message = err instanceof Error ? err.message : "unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
