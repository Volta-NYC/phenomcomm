"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/lib/site";
import { Arrow } from "./ui";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const closeMenu = () => setOpen(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          toggle.current,
          ...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []),
        ].filter((item): item is HTMLButtonElement | HTMLAnchorElement => Boolean(item));
        const first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }
    const desktop = window.matchMedia("(min-width: 1000px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", resize);
    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", keydown);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className={`site-header ${open ? "menu-open" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="PhenomComm home" onClick={closeMenu}>
          <Image
            src="/images/phenomcomm-logo.webp"
            alt="PhenomComm. Talent development that works."
            width={857}
            height={258}
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <span className="nav-label" aria-hidden="true">
            Explore
          </span>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} scroll aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="nav-cta" href={site.booking} target="_blank" rel="noreferrer">
          Let’s talk <Arrow diagonal />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span /> <span />
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
        </button>
      </div>
      {open && (
        <div className="mobile-panel" id="mobile-navigation" ref={panel}>
          <nav aria-label="Mobile navigation">
            <Link href="/" scroll onClick={closeMenu}>
              Home
            </Link>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                scroll
                onClick={closeMenu}
              >
                {item.label}
                <Arrow />
              </Link>
            ))}
            <Link href="/get-started" scroll onClick={closeMenu}>
              Get started
              <Arrow />
            </Link>
            <a
              href={site.booking}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
              onClick={closeMenu}
            >
              Schedule a consult
              <Arrow diagonal />
            </a>
          </nav>
          <p>Better people. Stronger teams. Lasting change.</p>
        </div>
      )}
    </header>
  );
}
