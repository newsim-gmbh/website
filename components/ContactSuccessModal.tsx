"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import QRCode from "qrcode";
import { contacts, site } from "@/lib/content";

function buildVCard() {
  const c = contacts[0];
  const parts = c.name.split(" ");
  const firstName = parts[0];
  const familyName = parts[parts.length - 1];
  const middleName = parts.slice(1, -1).join(" ");
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${familyName};${firstName};${middleName};;`,
    `FN:${c.name}`,
    `ORG:${site.legalName}`,
    `TITLE:${c.role}`,
    `TEL;TYPE=CELL:${c.phone}`,
    `EMAIL:${c.email}`,
    `URL:https://${site.domain}`,
    "END:VCARD",
  ].join("\n");
}

export function ContactSuccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    QRCode.toDataURL(buildVCard(), { width: 240, margin: 1, color: { dark: "#191919", light: "#ffffff" } })
      .then((url) => {
        if (!cancelled) setQrDataUrl(url);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-line bg-surface p-8 text-center shadow-2xl sm:p-10"
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Schließen"
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-line hover:text-ink"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary-ink"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7" />
              </svg>
            </motion.div>

            <h3 className="font-heading mt-5 text-2xl font-bold tracking-tight text-ink">Nachricht gesendet!</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Vielen Dank für Ihre Anfrage — wir melden uns zeitnah bei Ihnen.
            </p>

            <div className="mt-7 rounded-2xl border border-line bg-background p-6">
              <p className="text-xs font-medium tracking-wide text-ink-soft uppercase">Bis dahin</p>
              <p className="mt-1 text-sm font-medium text-ink">Unsere Kontaktdaten direkt aufs Handy speichern</p>
              <div className="mt-4 flex justify-center">
                {qrDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={qrDataUrl} alt="QR-Code zum Speichern der newSIM-Kontaktdaten" className="h-40 w-40 rounded-xl border border-line" />
                ) : (
                  <div className="h-40 w-40 animate-pulse rounded-xl bg-line" />
                )}
              </div>
              <p className="mt-3 text-xs text-ink-soft">{contacts[0].name} · {contacts[0].role}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="font-heading mt-7 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-primary hover:text-ink"
            >
              Schließen
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
