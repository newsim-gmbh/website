"use client";

import { motion } from "framer-motion";
import { models } from "@/lib/content";

export function OwnershipScale() {
  return (
    <div className="mt-14">
      <div className="flex items-center justify-between text-sm font-medium text-ink-soft">
        <span>Minimaler Aufwand</span>
        <span>Maximale Kontrolle</span>
      </div>
      <div className="relative mt-4 h-1.5 w-full overflow-hidden rounded-full bg-line">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="h-full w-full rounded-full bg-gradient-to-r from-primary/40 via-primary to-signal"
        />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {models.map((m) => (
          <div key={m.id} className="text-center text-xs font-medium text-ink-soft sm:text-sm">
            {m.name}
          </div>
        ))}
      </div>
    </div>
  );
}
