import { NextRequest, NextResponse } from "next/server";

// Existing public MailerLite form destination, verified in the original /upgrade/ HTML.
// Keeping this provider preserves the client's list and configured email automation.
const subscriptionEndpoint = "https://assets.mailerlite.com/jsonp/2491109/forms/192168851031459178/subscribe";
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== request.nextUrl.origin)
    return NextResponse.json({ error: "This request must come from the workbook page." }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json({ error: "Invalid request format." }, { status: 415 });
  if (Number(request.headers.get("content-length") || 0) > 4096)
    return NextResponse.json({ error: "Your request is too large." }, { status: 413 });
  let value: unknown;
  try {
    const body = await request.text();
    if (body.length > 4096) return NextResponse.json({ error: "Your request is too large." }, { status: 413 });
    value = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  }
  if (!value || typeof value !== "object")
    return NextResponse.json({ error: "Please enter your name and email." }, { status: 400 });
  const input = value as Record<string, unknown>;
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  if (input.website) return NextResponse.json({ error: "We couldn’t process this request." }, { status: 400 });
  if (name.length < 2 || name.length > 120 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ error: "Please enter a valid name and email address." }, { status: 400 });
  try {
    const response = await fetch(subscriptionEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
      body: new URLSearchParams({ "fields[name]": name, "fields[email]": email, "ml-submit": "1", anticsrf: "true" }),
      signal: AbortSignal.timeout(12000),
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Subscription provider rejected the request");
    const result: unknown = await response.json();
    if (!result || typeof result !== "object" || !("success" in result) || result.success !== true)
      return NextResponse.json(
        { error: "The email service couldn’t confirm your request. Please check your email address and try again." },
        { status: 502 },
      );
    return NextResponse.json({ success: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json(
      { error: "The email service is temporarily unavailable. Please try again in a moment." },
      { status: 502 },
    );
  }
}
