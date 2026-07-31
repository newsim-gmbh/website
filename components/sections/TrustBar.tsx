"use client";

import { motion } from "framer-motion";
import { Container } from "../Container";
import { Icon } from "../Icon";
import { trustBar } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="border-b border-line bg-surface py-6">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
        >
          {trustBar.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
              <Icon name={item.icon} className="h-4.5 w-4.5 text-primary-ink" />
              {item.text}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
