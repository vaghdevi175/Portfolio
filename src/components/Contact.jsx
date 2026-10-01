import useReveal from "../hooks/useReveal";
import { contact } from "../data/content";
import { GitHubIcon, LinkedInIcon } from "./icons";
import ResumeButton from "./ResumeButton";

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      id="contact"
      className="dot-texture relative overflow-hidden border-t border-night-line bg-night text-night-text"
    >
      <div ref={ref} className="reveal relative mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-signal-soft">[ 08 / Contact ]</p>
          <p className="max-w-sm text-lg leading-relaxed text-night-text-soft">
            Reach out about roles, collaborations, or to talk through something I've built.
          </p>
        </div>

        <div className="mt-10 border-t border-night-line pt-10 sm:mt-14 sm:pt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-night-text-soft/70">mailto:</p>
          <a
            href={`mailto:${contact.email}`}
            className="group mt-3 inline-block break-all font-serif text-[2rem] font-semibold leading-[1.05] tracking-tight text-night-text transition-colors hover:text-signal-soft sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[4rem]"
          >
            {contact.email}
            <span className="mt-3 block h-px w-0 bg-signal-soft transition-all duration-500 ease-out group-hover:w-full" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 sm:mt-16">
          <ResumeButton variant="outline" />
          <div className="flex items-center gap-3">
            <a
              href={contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-night-line text-night-text-soft transition-colors hover:border-signal-soft hover:text-signal-soft"
            >
              <GitHubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-night-line text-night-text-soft transition-colors hover:border-signal-soft hover:text-signal-soft"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
