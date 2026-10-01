import useReveal from "../hooks/useReveal";
import { skills } from "../data/content";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="bg-paper px-6 py-24 sm:px-10 sm:py-32">
      <div ref={ref} className="reveal mx-auto max-w-5xl">
        <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent">[ 04 / Stack ]</p>
        <h2 className="mt-3 font-display font-medium tracking-tight text-ink text-fluid-h2">What I build with</h2>

        <div className="mt-12 overflow-hidden rounded-sm border border-night-line bg-night shadow-[0_20px_50px_-25px_rgba(10,14,22,0.55)]">
          <div className="flex items-center gap-1.5 border-b border-night-line px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
            <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.1em] text-night-text-soft">
              skills.json
            </span>
          </div>

          <div className="flex flex-col divide-y divide-night-line">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-baseline sm:gap-6 sm:px-6">
                <p className="shrink-0 font-mono text-[13px] text-night-text-soft sm:w-40">
                  <span className="text-signal-soft">&gt;</span>{" "}
                  {group.category.toLowerCase().replace(/\s*\/\s*|\s+/g, "_")}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-night-line px-3 py-1 font-mono text-[12.5px] text-night-text transition-colors hover:border-signal-soft hover:text-signal-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
