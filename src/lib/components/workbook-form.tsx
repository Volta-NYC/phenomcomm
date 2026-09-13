"use client";
import { useRef, useState } from "react";
import { Arrow, Button } from "./ui";
import { site } from "@/lib/site";
export default function WorkbookForm() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<{name?: string; email?: string}>({});
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const data=new FormData(event.currentTarget);
    const name=String(data.get("name") ?? "").trim(), email=String(data.get("email") ?? "").trim();
    const invalid = {name: name.length < 2 ? "Please enter your name (at least 2 characters)." : undefined, email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Please enter a valid email address." : undefined};
    setErrors(invalid); setError("");
    if(invalid.name || invalid.email){ (invalid.name ? nameInput : emailInput).current?.focus(); return; }
    setPending(true);
    try {
      const response=await fetch("/api/workbook", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({name,email,website:String(data.get("website") ?? "")})});
      const result: {success?:boolean;error?:string}=await response.json();
      if(!response.ok || result.success !== true) throw new Error(result.error || "We couldn’t complete your request. Please try again.");
      setSuccess(true);
    } catch(e) { setError(e instanceof Error ? e.message : "We couldn’t connect. Please try again."); }
    finally { setPending(false); }
  }
  return <div className="workbook-form">{success ? <div className="form-success" role="status" aria-live="polite"><span className="success-icon" aria-hidden="true">✓</span><h3>Your next upgrade<br /><em>starts here.</em></h3><p>Your request has been accepted. You can download the workbook below. Check your inbox for any confirmation or follow-up from The Upgrade Framework.</p><Button href={site.workbook} download>Download your workbook</Button><p className="small-note">PDF · Companion workbook · Version 1.0</p></div> : <form onSubmit={submit} noValidate aria-label="Get the companion workbook" aria-busy={pending}><div className="field"><label htmlFor="workbook-name">Your name <span aria-hidden="true">*</span></label><input ref={nameInput} id="workbook-name" name="name" autoComplete="name" required minLength={2} maxLength={120} placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined}/>{errors.name && <p className="field-error" id="name-error">{errors.name}</p>}</div><div className="field"><label htmlFor="workbook-email">Email address <span aria-hidden="true">*</span></label><input ref={emailInput} id="workbook-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined}/>{errors.email && <p className="field-error" id="email-error">{errors.email}</p>}</div><div hidden aria-hidden="true"><label htmlFor="workbook-website">Website</label><input id="workbook-website" name="website" tabIndex={-1} autoComplete="off"/></div><p className="form-consent">By requesting the workbook, you’ll receive the PDF and occasional updates from The Upgrade Framework. No spam. Unsubscribe anytime. Required fields are marked *.</p>{error && <p className="form-message" role="alert">{error} You can also contact <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> for help.</p>}<button className="button button-primary" type="submit" disabled={pending}>{pending ? "Getting your workbook…" : "Get the free workbook"}<Arrow/></button><p className="privacy-note">Your details go directly to PhenomComm’s email list through MailerLite. They are not stored on this website.</p></form>}</div>;
}
