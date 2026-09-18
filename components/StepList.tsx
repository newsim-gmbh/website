"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { RevealGroup, revealItem } from "./Reveal";

export function StepList({ steps, tone = "light" }: { steps: string[]; tone?: "light" | "dark" }) {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          variants={revealItem}
          className={clsx(
            "rounded-2xl border p-5",
            tone === "dark" ? "border-dark-line card-dark-gradient" : "border-line bg-surface"
          )}
        >
          <span
            className={clsx(
              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold",
              tone === "dark" ? "bg-white/10 text-white" : "bg-ink text-white"
            )}
          >
            {i + 1}
          </span>
          <p className={clsx("mt-3 text-sm leading-relaxed", tone === "dark" ? "text-white/80" : "text-ink")}>
            {step}
          </p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
