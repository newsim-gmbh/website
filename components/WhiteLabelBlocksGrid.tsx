"use client";

import { motion } from "framer-motion";
import { RevealGroup, revealItem } from "./Reveal";
import { Icon } from "./Icon";
import { whiteLabelBuildingBlocks } from "@/lib/content";

export function WhiteLabelBlocksGrid() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {whiteLabelBuildingBlocks.map((block) => (
        <motion.div
          key={block.id}
          variants={revealItem}
          className="rounded-3xl border border-dark-line card-dark-gradient p-7"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-primary">
            <Icon name={block.icon} className="h-5 w-5" />
          </div>
          <h3 className="font-heading mt-4 text-base font-bold text-white">{block.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{block.body}</p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
