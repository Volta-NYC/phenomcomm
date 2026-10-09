"use client";

import { useEffect, useRef, useState } from "react";
import { BookObject, Button } from "./ui";
import { site } from "@/lib/site";

const dismissedKey = "phenomcomm-book-popup-dismissed";

export default function BookPopup() {
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(dismissedKey)) return;
    const timer = window.setTimeout(() => setOpen(true), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function close() {
    sessionStorage.setItem(dismissedKey, "true");
    setOpen(false);
  }

  if (!open) return null;
  return (
    <div className="book-popup-backdrop" role="presentation" onMouseDown={close}>
      <section
        className="book-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-popup-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="book-popup-close" ref={closeButton} type="button" onClick={close} aria-label="Close book offer">
          <span aria-hidden="true">×</span>
        </button>
        <div className="book-popup-object" aria-hidden="true">
          <BookObject />
        </div>
        <div className="book-popup-copy">
          <p className="book-popup-eyebrow">The book behind The Upgrade Framework™</p>
          <h2 id="book-popup-title">
            Don’t Let Your Phone
            <br />
            <em>Upgrade Before You Do.</em>
          </h2>
          <p>A practical three-step framework for intentional growth in your career, relationships, and life.</p>
          <div className="book-popup-actions">
            <Button href={site.book} external>
              Explore the book
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
