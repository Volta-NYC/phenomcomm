import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}
export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  download = false,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline" | "light" | "text";
  className?: string;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <Link
      className={`button button-${variant} ${className}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
      <Arrow diagonal={external} />
    </Link>
  );
}
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 760px) 90vw, 45vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-heading-copy">{children}</div>}
    </div>
  );
}
export function ContactCta({
  title = (
    <>
      Your next chapter
      <br />
      starts with <em>your people.</em>
    </>
  ),
  description = "Let’s talk about where you are, where you want to be, and how we can help close the gap.",
}: {
  title?: ReactNode;
  description?: string;
}) {
  return (
    <section className="contact-cta">
      <div className="container cta-inner" data-reveal>
        <div>
          <Eyebrow>Let’s build what’s next</Eyebrow>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{description}</p>
          <Button href={site.booking} external>
            Let’s start a conversation
          </Button>
        </div>
      </div>
      <span className="cta-circle" aria-hidden="true" />
    </section>
  );
}
export function ServiceIcon({ kind }: { kind: string }) {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
    >
      {kind === "leadership" ? (
        <>
          <path d="M9 39V25h10v14M19 39V17h10v22M29 39V8h10v31M6 39h36" />
          <path d="m8 17 9-9m-9 0h9v9" />
        </>
      ) : kind === "teams" ? (
        <>
          <circle cx="24" cy="12" r="5" />
          <circle cx="10" cy="22" r="4" />
          <circle cx="38" cy="22" r="4" />
          <path d="M15 38v-9a9 9 0 0 1 18 0v9M3 38v-4a7 7 0 0 1 9-7M45 38v-4a7 7 0 0 0-9-7" />
        </>
      ) : (
        <>
          <circle cx="24" cy="24" r="17" />
          <circle cx="24" cy="24" r="10" />
          <path d="M24 3v12m0 18v12M3 24h12m18 0h12" />
        </>
      )}
    </svg>
  );
}
export function BookObject({ className = "" }: { className?: string }) {
  return (
    <div className={`book-object ${className}`}>
      <Image
        src="/images/book-cover.webp"
        alt="Don’t Let Your Phone Upgrade Before You Do, by Paulette Cunningham, M.Ed."
        width={1003}
        height={1600}
        sizes="(max-width: 760px) 55vw, 300px"
      />
      <span className="book-spine" aria-hidden="true" />
    </div>
  );
}
export function UpgradeMark({ className = "", live = false }: { className?: string; live?: boolean }) {
  return (
    <svg
      className={`upgrade-mark ${live ? "upgrade-mark-live" : ""} ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 41 24 30l13 11" />
      <path d="M11 29 24 18l13 11" />
      <path d="M11 17 24 6l13 11" />
    </svg>
  );
}
