import { useRef } from "react";
import useReveal from "../hooks/useReveal";
import { achievements } from "../data/content";

function Chevron({ dir = "right", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d={dir === "right" ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Achievements() {
  const ref = useReveal();
  const trackRef = useRef(null);

  const scrollBy = (dir) => () => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section id="achievements" className="bg-paper-dim px-6 py-24 sm:px-10 sm:py-32">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent">[ 06 / Record ]</p>
            <h2 className="mt-3 font-display font-medium tracking-tight text-ink text-fluid-h2">Achievements</h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={scrollBy(-1)}
              aria-label="Scroll achievements left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <Chevron dir="left" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollBy(1)}
              aria-label="Scroll achievements right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <Chevron dir="right" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-10 -mx-6 sm:-mx-10">
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 sm:px-10"
          >
            {achievements.map((item, i) => (
              <div
                key={item.name}
                className="group relative flex w-[15.5rem] shrink-0 snap-start flex-col overflow-hidden rounded-sm border border-paper-line bg-paper px-5 pb-6 pt-8 transition-colors hover:border-accent/50"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-3 select-none font-serif text-[5rem] font-semibold leading-none text-ink-faint/[0.07]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-fit rounded-full border border-accent/30 bg-accent/[0.07] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-accent">
                  {item.result}
                </span>
                <h3 className="relative mt-4 font-display text-[17px] font-medium leading-snug text-ink">
                  {item.name}
                </h3>
                <p className="relative mt-auto pt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-paper-dim to-transparent sm:w-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-paper-dim to-transparent sm:w-10" />
        </div>
      </div>
    </section>
  );
}
