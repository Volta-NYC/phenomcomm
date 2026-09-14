"use client";
import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function Reveals() {
  const pathname = usePathname();

  // Route changes should always begin with the page's opening content. Hash links
  // remain intentionally exempt so in-page navigation can target its section.
  useLayoutEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );
    items.forEach((item) => {
      if (item.getBoundingClientRect().top > window.innerHeight * 0.9) item.classList.add("reveal-pending");
      observer.observe(item);
    });
    const show = () => {
      if (preference.matches) items.forEach((item) => item.classList.remove("reveal-pending"));
    };
    preference.addEventListener("change", show);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", show);
      items.forEach((item) => item.classList.remove("reveal-pending"));
    };
  }, [pathname]);
  return null;
}
