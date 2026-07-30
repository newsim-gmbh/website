"use client";

import Link from "next/link";
import clsx from "clsx";
import { Icon } from "./Icon";
import type { NavItem } from "@/lib/content";

export function MegaMenu({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  if (!item.children) return null;

  return (
    <div className="w-[min(90vw,640px)] rounded-3xl border border-line bg-surface p-3 shadow-[0_30px_80px_-20px_rgba(25,25,25,0.25)]">
      <div className="flex items-center justify-between gap-4 rounded-2xl bg-background px-5 py-4">
        <div>
          <p className="text-xs font-medium tracking-wide text-primary-ink uppercase">{item.label}</p>
          {item.intro && <p className="mt-1 text-sm text-ink-soft">{item.intro}</p>}
        </div>
        <Link
          href={item.href}
          onClick={onNavigate}
          className="font-heading shrink-0 rounded-full bg-ink px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-primary hover:text-ink"
        >
          Übersicht
        </Link>
      </div>

      <div className="mt-2 grid gap-1 sm:grid-cols-2">
        {item.children.map((child) => {
          const itemClassName = clsx(
            "flex items-start gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-background",
            child.comingSoon && "pointer-events-none opacity-50"
          );
          const content = (
            <>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-ink">
                <Icon name={child.icon} className="h-4.5 w-4.5" />
              </span>
              <span>
                <span className="flex items-center gap-2 text-sm font-medium text-ink">
                  {child.label}
                  {child.comingSoon && (
                    <span className="rounded-full bg-line px-2 py-0.5 text-[10px] font-medium text-ink-soft">
                      bald
                    </span>
                  )}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-ink-soft">{child.description}</span>
              </span>
            </>
          );

          return child.external ? (
            <a
              key={child.label}
              href={child.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onNavigate}
              className={itemClassName}
            >
              {content}
            </a>
          ) : (
            <Link key={child.label} href={child.href} onClick={onNavigate} className={itemClassName}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
