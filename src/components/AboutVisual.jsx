import { useState } from "react";

// A small interactive Venn composition illustrating the exact three ideas
// named in the About copy — not decoration for its own sake.
const NODES = [
  { key: "intelligent", label: "Intelligent Systems", cx: 125, cy: 92, color: "var(--color-accent)" },
  { key: "engineering", label: "Software Engineering", cx: 83, cy: 162, color: "var(--color-gold)" },
  { key: "ux", label: "Clean User Experiences", cx: 167, cy: 162, color: "var(--color-ink)" },
];
const R = 78;

export default function AboutVisual() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xs">
      <svg viewBox="0 0 250 254" className="h-full w-full" aria-hidden="true">
        {NODES.map((n) => {
          const isActive = active === n.key;
          const isDimmed = active !== null && !isActive;
          return (
            <circle
              key={n.key}
              cx={n.cx}
              cy={n.cy}
              r={R}
              fill={n.color}
              fillOpacity={isActive ? 0.22 : isDimmed ? 0.05 : 0.12}
              stroke={n.color}
              strokeOpacity={isActive ? 0.9 : isDimmed ? 0.2 : 0.5}
              strokeWidth={isActive ? 2 : 1.2}
              style={{ transition: "all 0.35s ease" }}
            />
          );
        })}
      </svg>

      {NODES.map((n) => (
        <button
          key={n.key}
          type="button"
          onMouseEnter={() => setActive(n.key)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(n.key)}
          onBlur={() => setActive(null)}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full px-2 py-1 text-center"
          style={{ left: `${(n.cx / 250) * 100}%`, top: `${(n.cy / 254) * 100}%`, width: "42%" }}
        >
          <span
            className="font-mono text-[10.5px] uppercase leading-tight tracking-[0.04em] transition-colors sm:text-[11.5px]"
            style={{ color: active === n.key ? n.color : "var(--color-ink-soft)" }}
          >
            {n.label}
          </span>
        </button>
      ))}
    </div>
  );
}
