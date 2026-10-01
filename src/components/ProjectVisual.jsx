// Designed, abstract compositions standing in for real project screenshots.
// Each is a deliberate visual metaphor for the project's domain — not a
// fabricated screenshot. Swap in a real image later by replacing the <svg>.
// Colors are CSS variables so every visual follows the active light/dark
// theme automatically.

const INK = "var(--color-ink-soft)";
const INK_DARK = "var(--color-ink)";
const ACCENT = "var(--color-accent)";
const LINE = "var(--color-paper-line)";

// A single reusable film-grain filter per visual type (id keyed by type so
// multiple cards on one page never collide on the same SVG id).
function Grain({ id }) {
  return (
    <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" />
    </filter>
  );
}

function Frame({ children, variant, wash }) {
  const box =
    variant === "fill"
      ? "relative h-full w-full"
      : `relative w-full overflow-hidden rounded-sm border border-paper-line ${
          variant === "compact" ? "aspect-square" : "aspect-[4/5]"
        }`;
  return (
    <div className={box} style={{ background: wash }}>
      {children}
    </div>
  );
}

const par = () => "xMidYMid meet";

function FashionFit({ variant }) {
  const gid = "grain-fashion";
  return (
    <Frame
      variant={variant}
      wash="radial-gradient(120% 90% at 30% 15%, color-mix(in srgb, var(--color-accent) 10%, var(--color-paper-dim)) 0%, var(--color-paper-dim) 60%)"
    >
      <svg viewBox="0 0 300 375" preserveAspectRatio={par(variant)} className="h-full w-full" aria-hidden="true">
        <Grain id={gid} />
        <rect width="300" height="375" filter={`url(#${gid})`} />

        <ellipse cx="150" cy="185" rx="72" ry="118" fill={ACCENT} opacity="0.08" />

        <path
          d="M120 70 L95 95 L108 118 L118 108 L118 300 L182 300 L182 108 L192 118 L205 95 L180 70 L165 82 L135 82 Z"
          fill="none"
          stroke={INK}
          strokeWidth="1.4"
        />
        <g stroke={ACCENT} strokeWidth="1.6" fill={ACCENT}>
          <circle cx="150" cy="95" r="3" />
          <circle cx="150" cy="150" r="3" />
          <circle cx="122" cy="175" r="3" />
          <circle cx="178" cy="175" r="3" />
          <circle cx="150" cy="230" r="3" />
          <circle cx="128" cy="290" r="3" />
          <circle cx="172" cy="290" r="3" />
          <path
            d="M150 95 L150 150 L122 175 M150 150 L178 175 M150 150 L150 230 L128 290 M150 230 L172 290"
            fill="none"
            strokeWidth="1"
            opacity="0.75"
          />
          <circle cx="150" cy="150" r="7" fill="none" className="pulse-ring" />
        </g>
      </svg>
    </Frame>
  );
}

function VoiceAssistant({ variant }) {
  const gid = "grain-voice";
  const bars = [8, 20, 12, 32, 18, 40, 24, 14, 30, 10, 22, 16, 36, 20, 12];
  return (
    <Frame
      variant={variant}
      wash="radial-gradient(100% 80% at 70% 30%, color-mix(in srgb, var(--color-accent) 9%, var(--color-paper-dim)) 0%, var(--color-paper-dim) 65%)"
    >
      <svg viewBox="0 0 300 375" preserveAspectRatio={par(variant)} className="h-full w-full" aria-hidden="true">
        <Grain id={gid} />
        <rect width="300" height="375" filter={`url(#${gid})`} />

        <g stroke={INK} strokeWidth="1" fill="none" opacity="0.4">
          <circle cx="150" cy="187" r="60" />
          <circle cx="150" cy="187" r="90" />
          <circle cx="150" cy="187" r="120" />
        </g>
        <g transform="translate(72, 187)">
          {bars.map((h, i) => (
            <rect
              key={i}
              className="wave-bar"
              x={i * 11}
              y={-h / 2}
              width="5"
              height={h}
              rx="1.5"
              fill={i % 4 === 1 ? ACCENT : INK_DARK}
              opacity={i % 4 === 1 ? 1 : 0.7}
              style={{ transformOrigin: "center", animationDelay: `${i * 0.09}s` }}
            />
          ))}
        </g>
      </svg>
    </Frame>
  );
}

function BlogGenerator({ variant }) {
  const gid = "grain-blog";
  const widths = [88, 62, 74, 40, 0, 90, 80, 55, 68, 30];
  return (
    <Frame
      variant={variant}
      wash="radial-gradient(110% 90% at 20% 80%, color-mix(in srgb, var(--color-accent) 9%, var(--color-paper-dim)) 0%, var(--color-paper-dim) 60%)"
    >
      <svg viewBox="0 0 300 375" preserveAspectRatio={par(variant)} className="h-full w-full" aria-hidden="true">
        <Grain id={gid} />
        <rect width="300" height="375" filter={`url(#${gid})`} />

        <g transform="translate(40, 90)">
          {widths.map((w, i) =>
            w === 0 ? null : (
              <rect
                key={i}
                className="type-line"
                x="0"
                y={i * 20}
                width={(w / 100) * 220}
                height="7"
                rx="1"
                fill={i === 5 || i === 6 ? ACCENT : INK_DARK}
                opacity={i === 5 || i === 6 ? 0.85 : 0.45}
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            )
          )}
          <rect x="0" y={4 * 20} width="2.5" height="7" fill={ACCENT} className="cursor-blink" />
        </g>
      </svg>
    </Frame>
  );
}

function ToxicDetection({ variant }) {
  const gid = "grain-toxic";
  const clean = [
    [40, 60], [65, 40], [90, 75], [55, 95], [30, 110], [100, 50], [70, 65], [45, 130],
  ];
  const toxic = [
    [190, 220], [215, 260], [240, 235], [200, 285], [260, 210], [230, 300], [255, 265], [180, 250],
  ];
  return (
    <Frame variant={variant} wash="var(--color-paper-dim)">
      <svg viewBox="0 0 300 375" preserveAspectRatio={par(variant)} className="h-full w-full" aria-hidden="true">
        <Grain id={gid} />
        <rect width="300" height="375" filter={`url(#${gid})`} />

        <polygon points="0,0 300,0 300,375 260,375" fill={INK_DARK} opacity="0.045" />
        <polygon points="0,375 300,375 300,0 40,0" fill={ACCENT} opacity="0.07" />

        <line x1="20" y1="330" x2="280" y2="70" stroke={INK} strokeWidth="1.2" strokeDasharray="4 5" />
        {clean.map(([x, y], i) => (
          <circle key={`c${i}`} cx={x} cy={y + 90} r="4.5" fill={INK_DARK} opacity="0.7" />
        ))}
        {toxic.map(([x, y], i) => (
          <circle key={`t${i}`} cx={x} cy={y - 20} r="4.5" fill={ACCENT} />
        ))}
      </svg>
    </Frame>
  );
}

function ClubWebsite({ variant }) {
  const gid = "grain-club";
  return (
    <Frame
      variant={variant}
      wash="radial-gradient(100% 80% at 80% 10%, color-mix(in srgb, var(--color-accent) 8%, var(--color-paper-dim)) 0%, var(--color-paper-dim) 65%)"
    >
      <svg viewBox="0 0 300 375" preserveAspectRatio={par(variant)} className="h-full w-full" aria-hidden="true">
        <Grain id={gid} />
        <rect width="300" height="375" filter={`url(#${gid})`} />

        <g transform="translate(-10,-14) rotate(-3 150 150)" opacity="0.55">
          <rect x="34" y="30" width="232" height="290" rx="10" fill="var(--color-paper)" stroke={LINE} strokeWidth="1.2" />
        </g>
        <g transform="translate(8,6) rotate(2 150 150)">
          <rect x="30" y="34" width="240" height="286" rx="10" fill="var(--color-paper)" stroke={INK_DARK} strokeWidth="1.2" />
          <rect x="30" y="34" width="240" height="30" rx="10" fill={ACCENT} opacity="0.12" />
          <circle cx="46" cy="49" r="4" fill={ACCENT} />
          <rect x="30" y="86" width="240" height="66" fill={ACCENT} opacity="0.1" />
          <rect x="46" y="176" width="66" height="82" rx="4" fill="none" stroke={INK_DARK} strokeWidth="1" opacity="0.5" />
          <rect x="122" y="176" width="66" height="82" rx="4" fill="none" stroke={INK_DARK} strokeWidth="1" opacity="0.5" />
          <rect x="198" y="176" width="66" height="82" rx="4" fill="none" stroke={INK_DARK} strokeWidth="1" opacity="0.5" />
        </g>
      </svg>
    </Frame>
  );
}

const VISUALS = {
  fashion: FashionFit,
  voice: VoiceAssistant,
  blog: BlogGenerator,
  toxic: ToxicDetection,
  club: ClubWebsite,
};

export default function ProjectVisual({ type, figureLabel, variant = "portrait" }) {
  const Visual = VISUALS[type];
  if (!Visual) return null;
  return (
    <div className="relative h-full w-full">
      <Visual variant={variant} />
      {figureLabel && (
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">{figureLabel}</p>
      )}
    </div>
  );
}
