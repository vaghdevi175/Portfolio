// A designed, abstract network composition echoing "intelligent systems" —
// now used as a quiet corner accent behind the hero's spec panel rather
// than the page's dominant centerpiece. Reappears (smaller still) as the
// About section's interactive Venn. Floats gently; respects
// prefers-reduced-motion globally via the app-wide CSS override.

const NODES = [
  [150, 38], [262, 88], [282, 212], [188, 292], [78, 258], [28, 138], [108, 88],
];

function Network({ className = "" }) {
  return (
    <svg viewBox="0 0 300 300" className={className} aria-hidden="true">
      <circle cx="150" cy="150" r="140" fill="none" stroke="var(--color-night-line)" strokeWidth="1" />
      <circle cx="150" cy="150" r="90" fill="none" stroke="var(--color-night-line)" strokeWidth="1" strokeDasharray="2 6" />

      {NODES.map(([x, y], i) => (
        <line
          key={`l${i}`}
          x1="150"
          y1="150"
          x2={x}
          y2={y}
          stroke="var(--color-signal-soft)"
          strokeWidth="1"
          opacity="0.4"
        />
      ))}

      <circle cx="150" cy="150" r="9" fill="var(--color-signal-soft)" />
      <circle cx="150" cy="150" r="16" fill="none" stroke="var(--color-signal-soft)" strokeWidth="1" opacity="0.5" />

      {NODES.map(([x, y], i) => (
        <circle
          key={`n${i}`}
          cx={x}
          cy={y}
          r={i % 2 === 0 ? 4.5 : 3}
          fill={i % 2 === 0 ? "var(--color-signal-soft)" : "var(--color-night-text)"}
        />
      ))}
    </svg>
  );
}

// Bleeds off the top-right corner of the hero, well behind the content
// grid, at low opacity — a texture, not a focal graphic.
export function HeroCornerGraph() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-24 hidden opacity-[0.22] sm:block lg:-right-16 lg:-top-16"
    >
      <Network className="hero-float h-[26rem] w-[26rem]" />
    </div>
  );
}

export default Network;
