"use client";

import { motion } from "framer-motion";
import { RevealGroup, revealItem } from "./Reveal";
import { Icon } from "./Icon";
import type { iotShop } from "@/lib/content";

export function IotTrustGrid({ points }: { points: (typeof iotShop)["trust"]["points"] }) {
  return (
    <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
      {points.map((p) => (
        <motion.div key={p.title} variants={revealItem} className="rounded-3xl border border-dark-line card-dark-gradient p-7">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-primary">
            <Icon name={p.icon} className="h-5 w-5" />
          </div>
          <p className="font-heading mt-4 text-base font-bold text-white">{p.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{p.body}</p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
