import { projects } from "../data/content";
import ProjectShowcase from "./ProjectShowcase";

// Explicit bento placement on the 12-column index grid (lg+). Below lg every
// tile stacks full-width in source order — this only governs the desktop
// mosaic. Deliberately asymmetric: one featured tile, two stacked half-tiles
// beside it, two even tiles closing the row.
const PLACEMENT = [
  "lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-3",
  "lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:row-end-2",
  "lg:col-start-8 lg:col-end-13 lg:row-start-2 lg:row-end-3",
  "lg:col-start-1 lg:col-end-7 lg:row-start-3 lg:row-end-4",
  "lg:col-start-7 lg:col-end-13 lg:row-start-3 lg:row-end-4",
];

export default function Work() {
  return (
    <section id="work" className="bg-paper px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 border-b border-paper-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent">[ 02 / Index ]</p>
            <h2 className="mt-3 font-display font-medium tracking-tight text-ink text-fluid-h2">Work</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Five projects spanning computer vision, generative AI, voice interfaces, and full-stack
            engineering. Open any one for the full case study.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:auto-rows-[19rem] lg:gap-6">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.id} project={project} spanClass={PLACEMENT[i]} large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
