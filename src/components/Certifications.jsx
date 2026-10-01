import useReveal from "../hooks/useReveal";
import { certifications, education } from "../data/content";

export default function Certifications() {
  const ref = useReveal();

  return (
    <section id="certifications" className="bg-paper px-6 py-24 sm:px-10 sm:py-32">
      <div ref={ref} className="reveal mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-b border-paper-line pb-8">
          <div>
            <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent">[ 05 / Credentials ]</p>
            <h2 className="mt-3 font-display font-medium tracking-tight text-ink text-fluid-h2">Certifications</h2>
          </div>
          <p className="max-w-xs font-mono text-[11.5px] uppercase leading-relaxed tracking-[0.08em] text-ink-faint">
            {education.degree} · {education.institution} · {education.period}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <div key={cert.name} className="flex gap-5 border-l-2 border-accent/40 pl-5">
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                  C-{String(i + 1).padStart(2, "0")} · {cert.date}
                </span>
                <span className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                  {cert.issuer}
                </span>
                <h3 className="mt-3 font-serif text-[21px] font-semibold leading-tight tracking-tight text-ink">
                  {cert.name}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
