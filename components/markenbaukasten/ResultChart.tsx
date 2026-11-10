"use client";

import type { CommissionResult } from "@/lib/markenbaukasten";

function niceStep(max: number): number {
  const r = max / 4;
  const p = Math.pow(10, Math.floor(Math.log10(r || 1)));
  const n = r / p;
  return (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * p;
}

export function ResultChart({ result }: { result: CommissionResult }) {
  const W = 560;
  const H = 200;
  const pl = 44;
  const pb = 24;
  const pt = 10;
  const pr = 8;
  const max = Math.max(...result.months, result.fee || 0) * 1.1;
  const bw = (W - pl - pr) / 24;
  const y = (v: number) => pt + (H - pt - pb) * (1 - v / max);
  const step = niceStep(max);

  const gridLines: { v: number }[] = [];
  for (let v = 0; v <= max; v += step) gridLines.push({ v });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Provision je Monat" className="w-full">
      {gridLines.map((g, i) => (
        <g key={i}>
          <line x1={pl} x2={W - pr} y1={y(g.v)} y2={y(g.v)} stroke="var(--line)" />
          <text x={pl - 6} y={y(g.v) + 4} textAnchor="end" fontSize={10} fill="var(--ink-soft)">
            {Math.round(g.v).toLocaleString("de-DE")}
          </text>
        </g>
      ))}
      {result.months.map((v, i) => {
        const x = pl + i * bw + 2;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y(v)}
              width={bw - 4}
              height={y(0) - y(v)}
              rx={3}
              fill={i === 11 ? "var(--ink)" : "var(--primary)"}
            />
            {(i === 0 || i === 11 || i === 23) && (
              <text x={x + (bw - 4) / 2} y={H - 8} textAnchor="middle" fontSize={10} fill="var(--ink-soft)">
                M{i + 1}
              </text>
            )}
          </g>
        );
      })}
      {result.fee > 0 && (
        <line x1={pl} x2={W - pr} y1={y(result.fee)} y2={y(result.fee)} stroke="var(--ink)" strokeDasharray="5 4" />
      )}
    </svg>
  );
}
