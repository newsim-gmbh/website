"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { MegaMenu } from "./MegaMenu";
import { Logo } from "./Logo";
import { mainNav, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), 150);
  };

  // Der Header startet über dem dunklen Hero, wird beim Scrollen/bei offenem
  // Menü zum hellen Panel — Text-/Button-Farben müssen sich entsprechend umschalten.
  const onDark = !scrolled && !open && openIndex === null;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open || openIndex !== null
          ? "bg-background/95 backdrop-blur-md border-b border-line"
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
          <Link
            href="/"
            aria-label={site.name}
            className={clsx("transition-colors", onDark ? "text-white" : "text-ink")}
          >
            <Logo className="h-8 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item, i) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openMenu(i)}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    onDark ? "text-white/80 hover:text-white" : "text-ink-soft hover:text-ink"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      viewBox="0 0 24 24"
                      className={clsx(
                        "h-3.5 w-3.5 transition-transform",
                        openIndex === i && "rotate-180"
                      )}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {item.children && openIndex === i && (
                  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                    <MegaMenu item={item} onNavigate={() => setOpenIndex(null)} />
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "text-sm font-medium transition-colors",
                onDark ? "text-white/70 hover:text-white" : "text-ink-soft hover:text-ink"
              )}
            >
              Login
            </a>
            <Link
              href={site.calendlyUrl}
              className={clsx(
                "font-heading inline-flex items-center rounded-full px-5 py-2.5 text-sm font-bold transition-all",
                onDark
                  ? "bg-white text-ink hover:bg-primary"
                  : "bg-ink text-white hover:bg-primary hover:text-ink"
              )}
            >
              Kontakt
            </Link>
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
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-line bg-background lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item, i) => (
              <div key={item.label} className="border-b border-line py-1 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex-1 rounded-lg px-3 py-3 text-base font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      aria-label={`${item.label} Untermenü`}
                      onClick={() => setMobileOpenIndex(mobileOpenIndex === i ? null : i)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center text-ink-soft"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={clsx("h-4 w-4 transition-transform", mobileOpenIndex === i && "rotate-180")}
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && mobileOpenIndex === i && (
                  <div className="flex flex-col gap-0.5 pb-3 pl-3">
                    {item.children.map((child) =>
                      child.external ? (
                        <a
                          key={child.label}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg px-3 py-2.5 text-sm text-ink-soft"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={clsx(
                            "rounded-lg px-3 py-2.5 text-sm text-ink-soft",
                            child.comingSoon && "pointer-events-none opacity-50"
                          )}
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            <a
              href={site.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-medium text-ink"
            >
              Login
            </a>
            <Link
              href={site.calendlyUrl}
              onClick={() => setOpen(false)}
              className="font-heading mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
            >
              Kontakt
            </Link>
          </Container>
        </motion.div>
      )}
    </header>
  );
}
