import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectVisual from "./ProjectVisual";
import { ArrowUpRight, StackIcon } from "./icons";

const revealUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// Tinted "mat" each project's contained image sits on — keeps the mosaic
// tile full-bleed and colourful without ever cropping the screenshot itself.
const WASH = {
  fashion: "radial-gradient(120% 100% at 25% 12%, color-mix(in srgb, var(--color-accent) 16%, var(--color-night)) 0%, var(--color-night) 62%)",
  voice: "radial-gradient(110% 90% at 75% 20%, color-mix(in srgb, var(--color-signal) 20%, var(--color-night)) 0%, var(--color-night) 60%)",
  blog: "radial-gradient(115% 95% at 20% 85%, color-mix(in srgb, var(--color-accent) 14%, var(--color-night)) 0%, var(--color-night) 58%)",
  toxic: "radial-gradient(110% 90% at 80% 80%, color-mix(in srgb, var(--color-gold) 18%, var(--color-night)) 0%, var(--color-night) 60%)",
  club: "radial-gradient(110% 90% at 80% 10%, color-mix(in srgb, var(--color-signal) 16%, var(--color-night)) 0%, var(--color-night) 60%)",
};

export default function ProjectShowcase({ project, spanClass, large }) {
  const mainImage = project.media?.mainImage;
  const extraCount = (project.media?.images?.length ?? 0) + (project.media?.video ? 1 : 0);
  const hasMultiple = extraCount > 0;
  const wash = WASH[project.visual] ?? "var(--color-night)";

  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative ${spanClass}`}
    >
      <Link
        to={`/work/${project.id}`}
        className="group relative flex h-full min-h-[16rem] flex-col overflow-hidden rounded-sm border border-paper-line"
        style={{ background: wash }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-4 z-10 select-none font-mono text-[13px] text-night-text-soft/70"
        >
          {project.number}
        </span>

        {hasMultiple && (
          <span
            aria-hidden="true"
            className="absolute right-4 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-night-raised/90 text-night-text shadow-sm backdrop-blur-[2px]"
          >
            <StackIcon className="h-3.5 w-3.5" />
          </span>
        )}

        <div className="relative flex min-h-0 flex-1 items-center justify-center p-6 pt-12">
          {mainImage ? (
            <img
              src={mainImage}
              alt={`${project.name} preview`}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full">
              <ProjectVisual type={project.visual} variant="fill" />
            </div>
          )}
        </div>

        <div className="relative z-10 bg-gradient-to-t from-night via-night/85 to-transparent px-5 pb-5 pt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal-soft">{project.category}</p>
          <h3
            className={`mt-2 font-serif font-semibold leading-[1.05] tracking-tight text-night-text transition-colors group-hover:text-signal-soft ${
              large ? "text-[1.75rem] sm:text-[2.1rem]" : "text-[1.35rem]"
            }`}
          >
            {project.name}
          </h3>
          {large && <p className="mt-2 max-w-md text-[14px] leading-relaxed text-night-text-soft">{project.preview}</p>}
          <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-night-text-soft transition-colors group-hover:text-night-text">
            View case file
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
