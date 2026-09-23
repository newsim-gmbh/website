"use client";

import { useState } from "react";
import clsx from "clsx";
import { Icon } from "./Icon";
import type { IotFeatureTab } from "@/lib/content";

export function IotFeatureTabs({ tabs }: { tabs: IotFeatureTab[] }) {
  const [active, setActive] = useState(tabs[0].key);
  const tab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div className="rounded-3xl border border-line bg-surface p-3 sm:p-4">
      <div className="grid gap-2 sm:grid-cols-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(t.key)}
            className={clsx(
              "flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
              t.key === active ? "bg-ink text-white" : "bg-background text-ink-soft hover:text-ink"
            )}
          >
            <Icon name={t.icon} className="h-4.5 w-4.5" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-3 rounded-2xl bg-background p-8 sm:p-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-ink">
          <Icon name={tab.icon} className="h-5 w-5" />
        </div>
        <h3 className="font-heading mt-5 text-xl font-bold tracking-tight text-ink sm:text-2xl">{tab.title}</h3>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{tab.body}</p>
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {tab.points.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-ink">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
