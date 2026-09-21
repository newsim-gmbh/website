"use client";

import { motion } from "framer-motion";
import { RevealGroup, revealItem } from "./Reveal";
import { Icon } from "./Icon";
import { platform } from "@/lib/content";

export function PlatformArchitecture() {
  return (
    <div className="overflow-hidden rounded-3xl border border-dark-line">
      {/* Schicht 1: Vertriebskanäle */}
      <div className="card-dark-gradient border-b border-dark-line p-6 sm:p-8">
        <p className="mb-4 text-xs font-medium tracking-wide text-white/40 uppercase">
          {platform.channelsLayer.label}
        </p>
        <div className="flex flex-wrap gap-3">
          {platform.channelsLayer.items.map((c) => (
            <span key={c} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Schicht 2: Enabling-Plattform / BSS */}
      <div className="bg-dark p-6 sm:p-8">
        <p className="mb-3 text-xs font-medium tracking-wide text-primary uppercase">{platform.coreLabel}</p>
        <h3 className="font-heading text-lg font-bold text-white sm:text-xl">{platform.coreTitle}</h3>

        <RevealGroup className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-dark-line sm:grid-cols-2 lg:grid-cols-4">
          {platform.core.map((c) => (
            <motion.div key={c.title} variants={revealItem} className="card-dark-gradient p-6 sm:p-8">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-primary">
                <Icon name={c.icon} className="h-4.5 w-4.5" />
              </div>
              <p className="text-sm font-semibold text-white">{c.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/50">{c.body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>

      {/* Schicht 3: Netz, Regulierung, Schnittstellen */}
      <div className="card-dark-gradient border-t border-dark-line p-6 sm:p-8">
        <p className="mb-4 text-xs font-medium tracking-wide text-white/40 uppercase">
          {platform.networkLayer.label}
        </p>
        <div className="flex flex-wrap gap-3">
          {platform.networkLayer.items.map((n) => (
            <span key={n} className="rounded-full bg-primary/15 px-4 py-2 text-sm text-primary/90">
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
