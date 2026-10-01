import { motion, useReducedMotion } from "framer-motion";
import { profile, contact } from "../data/content";
import { ArrowUpRight } from "./icons";
import ResumeButton from "./ResumeButton";
import { HeroCornerGraph } from "./HeroVisual";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="dot-texture relative overflow-hidden border-b border-night-line bg-night text-night-text">
      <HeroCornerGraph />

      <motion.div
        variants={container}
        initial={reduceMotion ? "show" : "hidden"}
        animate="show"
        className="relative mx-auto grid w-full max-w-[80rem] gap-x-10 gap-y-14 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:py-32"
      >
        <div>
          <motion.p variants={item} className="font-mono text-[12.5px] uppercase tracking-[0.2em] text-signal-soft">
            N° 01 — {profile.roles.join(" / ")}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-serif font-semibold leading-[0.94] tracking-tight text-night-text"
            style={{ fontSize: "clamp(3rem, 8.4vw, 6.75rem)" }}
          >
            Vaghdevi
            <br />
            Pappala
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-lg text-lg leading-relaxed text-night-text-soft">
            {profile.positioning}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
            <ResumeButton variant="solid" />
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.1em] text-night-text-soft transition-colors hover:text-signal-soft"
            >
              View the work
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative">
          <div className="rounded-sm border border-night-line bg-night-raised/70 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 border-b border-night-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
              <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.1em] text-night-text-soft">
                focus.json
              </span>
            </div>
            <ul className="flex flex-col gap-3.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
              {profile.exploring.map((area) => (
                <li key={area} className="flex items-baseline gap-2.5 text-night-text-soft">
                  <span className="text-signal-soft">&gt;</span>
                  <span className="text-night-text">{area.toLowerCase().replace(/\s+/g, "_")}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 max-w-xs font-mono text-[11px] leading-relaxed text-night-text-soft">
            {profile.aboutLead}
          </p>
        </motion.div>
      </motion.div>

      <div className="relative mx-auto flex w-full max-w-[80rem] items-center justify-between border-t border-night-line px-6 py-4 sm:px-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-night-text-soft">
          {contact.email}
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-night-text-soft">
          Scroll
          <span className="scroll-pulse h-1.5 w-1.5 rounded-full bg-signal-soft" />
        </span>
      </div>
    </section>
  );
}
