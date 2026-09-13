import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/lib/components/navbar";
import Footer from "@/lib/components/footer";
import Reveals from "@/lib/components/reveals";
import { site } from "@/lib/site";
import "./globals.css";
const sans = localFont({ src: [
  { path: "../../public/fonts/dm-sans-400-normal.ttf", weight: "400", style: "normal" },
  { path: "../../public/fonts/dm-sans-500-normal.ttf", weight: "500", style: "normal" },
  { path: "../../public/fonts/dm-sans-600-normal.ttf", weight: "600", style: "normal" },
  { path: "../../public/fonts/dm-sans-700-normal.ttf", weight: "700", style: "normal" },
], variable: "--font-sans", display: "swap" });
const serif = localFont({ src: [
  { path: "../../public/fonts/instrument-serif-400-normal.ttf", weight: "400", style: "normal" },
  { path: "../../public/fonts/instrument-serif-400-italic.ttf", weight: "400", style: "italic" },
], variable: "--font-serif", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "PhenomComm | Talent development that works", template: "%s | PhenomComm" },
  description: "Close the gap between knowing and doing. PhenomComm helps leaders, teams, and organizations build lasting performance through The Upgrade Framework™.",
  openGraph: { type: "website", locale: "en_US", siteName: site.name, images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "PhenomComm. Talent development that works." }] },
  twitter: { card: "summary_large_image" }, manifest: "/manifest.webmanifest",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content">{children}</main><Footer /><Reveals /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, legalName: site.legalName, url: site.url, logo: `${site.url}/images/phenomcomm-logo.webp`, email: site.email, telephone: "+18038750525", founder: { "@type": "Person", name: "Paulette Cunningham" }, sameAs: site.social.map(item => item.href) }) }} /></body></html>;
}
