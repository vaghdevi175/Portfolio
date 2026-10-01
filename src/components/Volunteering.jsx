import useReveal from "../hooks/useReveal";
import { volunteering } from "../data/content";
import { CalendarIcon, LocationIcon } from "./icons";

function Placeholder() {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center bg-paper-dim">
      <svg viewBox="0 0 240 180" className="h-2/3 w-2/3 opacity-70" aria-hidden="true">
        <circle cx="70" cy="60" r="22" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.2" />
        <path d="M30 140c6-28 26-42 40-42s34 14 40 42" fill="none" stroke="var(--color-ink-soft)" strokeWidth="1.2" />
        <circle cx="168" cy="72" r="16" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" />
        <path d="M136 140c5-22 20-32 32-32s27 10 32 32" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

function Card({ item }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal flex flex-col overflow-hidden rounded-sm border border-paper-line bg-paper shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(16,24,40,0.08)]"
    >
      <div className="overflow-hidden">
        {item.image ? (
          <img src={item.image} alt={item.name} className="aspect-[4/3] w-full object-cover" />
        ) : (
          <Placeholder />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium tracking-tight text-ink">{item.name}</h3>
        <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{item.description}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-paper-line pt-4">
          <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-ink-faint">
            <CalendarIcon className="h-3.5 w-3.5 text-accent" />
            {item.date}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-ink-faint">
            <LocationIcon className="h-3.5 w-3.5 text-accent" />
            {item.location}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Volunteering() {
  return (
    <section className="bg-paper-dim px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent">[ 07 / Beyond Code ]</p>
        <h2 className="mt-3 font-display font-medium tracking-tight text-ink text-fluid-h2">Volunteering</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {volunteering.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
