import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "@/lib/site";
import { Arrow } from "./ui";

function SocialIcon({ name }: { name: string }) {
  if (name === "LinkedIn")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.2 8.8v9M6.2 5.9v.1M10.2 17.8v-5.2c0-2.8 3.6-3 3.6 0v5.2m0-4.9c0-2.9 4-3.1 4 0v4.9" />
      </svg>
    );
  if (name === "Instagram")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
        <circle cx="12" cy="12" r="3.45" />
        <circle cx="17.25" cy="6.9" r=".8" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.7 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.2-1.4 1.4-1.4h1.5V4.5c-.3 0-1.1-.1-2-.1-2.1 0-3.5 1.3-3.5 3.7v2.1H8.7V13h2.4v7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" aria-label="PhenomComm home">
              <Image
                src="/images/phenomcomm-logo.webp"
                alt="PhenomComm. Talent development that works."
                width={260}
                height={78}
              />
            </Link>
            <p>
              Intentional growth.
              <br />
              Meaningful, lasting change.
            </p>
            <span>Based in New York. Working nationwide.</span>
          </div>
          <div className="footer-cta">
            <p className="footer-label">Let’s build what’s next</p>
            <h2>Growth starts with a conversation.</h2>
            <a className="footer-cta-link" href={site.booking} target="_blank" rel="noreferrer">
              Schedule a consult <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="footer-grid">
          <nav className="footer-nav" aria-label="Footer navigation">
            <p className="footer-label">Explore</p>
            <div>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/get-started">Get started</Link>
            </div>
          </nav>
          <div className="footer-connect">
            <p className="footer-label">Let’s connect</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
          <div className="footer-credential">
            <Image src="/icon-192.png" alt="" width={56} height={56} />
            <p>
              MWBE certified
              <br />
              <span>NYC & Port Authority of NY & NJ</span>
            </p>
            <a href={site.capability} target="_blank" rel="noreferrer">
              Capability statement <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <div className="footer-bottom-actions">
            <a className="footer-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="social-links" aria-label="Social media">
              {site.social.map((item) => (
                <a href={item.href} key={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <SocialIcon name={item.label} />
                  <span className="sr-only">Follow PhenomComm on {item.label}</span>
                </a>
              ))}
            </div>
          </div>
          <a href="https://novusnyc.org" target="_blank" rel="noreferrer">
            Made by Novus
          </a>
        </div>
      </div>
    </footer>
  );
}
