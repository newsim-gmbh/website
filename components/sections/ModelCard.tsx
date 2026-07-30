"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { revealItem } from "../Reveal";
import { Icon } from "../Icon";
import type { BusinessModel } from "@/lib/content";

export function ModelCard({ model }: { model: BusinessModel }) {
  const filled = model.ownershipLevel;

  return (
    <motion.div
      variants={revealItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={clsx(
        "flex h-full flex-col rounded-3xl border p-7",
        model.id === "branded-reseller"
          ? "border-primary/40 bg-sky shadow-[0_20px_60px_-25px_rgba(148,184,233,0.5)]"
          : "border-line bg-surface"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
            {model.step}
          </span>
          <div
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-full",
              model.id === "branded-reseller" ? "bg-white/70 text-primary-ink" : "bg-primary/15 text-primary-ink"
            )}
          >
            <Icon name={model.icon} className="h-4 w-4" />
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className={clsx(
                "h-1.5 w-4 rounded-full",
                i < filled ? "bg-primary" : "bg-line"
              )}
            />
          ))}
        </div>
      </div>

      <h3 className="font-heading mt-5 text-xl font-bold tracking-tight text-ink">{model.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{model.tagline}</p>

      {model.idealFor && (
        <p className="mt-4 rounded-xl bg-line/60 px-3 py-2.5 text-xs leading-relaxed text-ink-soft">
          <span className="font-medium text-ink">Ideal für: </span>
          {model.idealFor}
        </p>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
        <div>
          <p className="font-medium text-ink">newSIM übernimmt</p>
          <ul className="mt-2 space-y-1.5 text-ink-soft">
            {model.newSimResponsibilities.map((r) => (
              <li key={r} className="flex gap-1.5">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-medium text-ink">Sie übernehmen</p>
          <ul className="mt-2 space-y-1.5 text-ink-soft">
            {model.partnerResponsibilities.map((r) => (
              <li key={r} className="flex gap-1.5">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-ink" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {model.keyBenefits && (
        <div className="mt-6 space-y-2 border-t border-line pt-5">
          {model.keyBenefits.map((b) => (
            <div key={b.title} className="text-xs">
              <span className="font-medium text-ink">{b.title}</span>{" "}
              <span className="text-ink-soft">— {b.body}</span>
            </div>
          ))}
        </div>
      )}

      {model.sourceName && (
        <p className="mt-auto pt-6 text-[11px] text-ink-soft/60">
          Auch bekannt als &bdquo;{model.sourceName}&ldquo;
        </p>
      )}
    </motion.div>
  );
}
