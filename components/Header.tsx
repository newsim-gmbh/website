"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { nav, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Der Header startet über dem dunklen Hero, wird beim Scrollen zum hellen
  // Panel — Text-/Button-Farben müssen sich entsprechend umschalten.
  const onDark = !scrolled && !open;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container>
        <div
          className={clsx(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20"
          )}
        >
          <a
            href="#top"
            className={clsx(
              "text-lg font-semibold tracking-tight transition-colors",
              onDark ? "text-white" : "text-ink"
            )}
          >
            {site.name}
            <span className="text-primary">.</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  onDark ? "text-white/70 hover:text-white" : "text-ink-soft hover:text-ink"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={site.calendlyUrl}
              className={clsx(
                "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                onDark
                  ? "bg-white text-ink hover:bg-white/90"
                  : "bg-ink text-white hover:bg-primary"
              )}
            >
              {site.primaryCta}
            </a>
          </div>

          <button
            aria-label="Menü öffnen"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
                className={clsx("h-0.5 w-full origin-center", onDark ? "bg-white" : "bg-ink")}
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                className={clsx("h-0.5 w-full", onDark ? "bg-white" : "bg-ink")}
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                className={clsx("h-0.5 w-full origin-center", onDark ? "bg-white" : "bg-ink")}
              />
            </div>
          </button>
        </div>
      </Container>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-line bg-background lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-surface hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.calendlyUrl}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-white"
            >
              {site.primaryCta}
            </a>
          </Container>
        </motion.div>
      )}
    </header>
  );
}
