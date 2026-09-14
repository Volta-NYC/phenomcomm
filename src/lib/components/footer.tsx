import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "@/lib/site";
import { Arrow } from "./ui";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
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
          <div>
            <p className="footer-label">Explore</p>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/get-started">Get started</Link>
          </div>
          <div>
            <p className="footer-label">Let’s connect</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            <div className="social-links">
              {site.social.map((item) => (
                <a href={item.href} key={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                  <Arrow diagonal />
                </a>
              ))}
            </div>
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
          <a href="https://novusnyc.org" target="_blank" rel="noreferrer">
            Made by Novus
          </a>
        </div>
      </div>
    </footer>
  );
}
