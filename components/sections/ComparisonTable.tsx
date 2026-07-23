"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { comparisonTable } from "@/lib/content";

function Pill({ value }: { value: string }) {
  const styles: Record<string, string> = {
    newSIM: "bg-primary/10 text-primary-ink",
    Partner: "bg-signal/10 text-signal",
    optional: "bg-line text-ink-soft",
  };
  return (
    <span
      className={clsx(
        "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
        styles[value] ?? "bg-line text-ink-soft"
      )}
    >
      {value}
    </span>
  );
}

export function ComparisonTable() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-14 rounded-3xl border border-line bg-surface">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
      >
        <div>
          <p className="font-medium text-ink">{comparisonTable.title}</p>
          <p className="mt-1 text-sm text-ink-soft">Feature-für-Feature-Vergleich, Punkt für Punkt</p>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background text-lg text-ink-soft"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="overflow-x-auto border-t border-line px-7 pb-7 pt-2">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="text-left text-xs font-medium tracking-wide text-ink-soft uppercase">
                    {comparisonTable.columns.map((c) => (
                      <th key={c} className="py-3 pr-4">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.rows.map((row) => (
                    <tr key={row[0]} className="border-t border-line">
                      <td className="py-3 pr-4 font-medium text-ink">{row[0]}</td>
                      <td className="py-3 pr-4">
                        <Pill value={row[1]} />
                      </td>
                      <td className="py-3 pr-4">
                        <Pill value={row[2]} />
                      </td>
                      <td className="py-3 pr-4 text-ink-soft">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-xs text-ink-soft">{comparisonTable.note}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
