import { profile, contact } from "../data/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-night-line bg-night px-6 py-7 text-night-text-soft sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 font-mono text-[11px] uppercase tracking-[0.1em] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} <span className="text-night-line">/</span> {profile.roles.join(" · ")}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-signal-soft"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={contact.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-signal-soft"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email" className="transition-colors hover:text-signal-soft">
            <MailIcon className="h-4 w-4" />
          </a>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
