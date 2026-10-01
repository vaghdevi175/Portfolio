import useReveal from "../hooks/useReveal";
import { profile } from "../data/content";
import AboutVisual from "./AboutVisual";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="bg-paper-dim px-6 py-24 sm:px-10 sm:py-32">
      <div ref={ref} className="reveal mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent">[ 03 / Profile ]</p>
          <p
            className="mt-6 font-serif font-medium leading-[1.3] tracking-tight text-ink"
            style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}
          >
            {profile.aboutLead} {profile.aboutBody}
          </p>
        </div>

        <AboutVisual />
      </div>
    </section>
  );
}
