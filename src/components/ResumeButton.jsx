import { useState } from "react";
import { contact } from "../data/content";
import { ArrowUpRight, DocumentIcon } from "./icons";

// Resume CTA that degrades gracefully until a real resume URL is wired up.
// No placeholder/fake URL is ever used.
export default function ResumeButton({ variant = "solid" }) {
  const [note, setNote] = useState(false);

  const base =
    "group inline-flex items-center gap-2.5 rounded-sm px-5 py-2.5 font-mono text-[13px] uppercase tracking-[0.1em] transition-all duration-300";

  const styles =
    variant === "solid"
      ? "bg-accent text-paper hover:bg-accent-soft"
      : "border border-night-line text-night-text hover:border-signal-soft hover:text-signal-soft";

  if (contact.resumeUrl) {
    return (
      <a href={contact.resumeUrl} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
        <DocumentIcon className="h-4 w-4" />
        Resume
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    );
  }

  return (
    <div className="relative inline-flex flex-col items-start">
      <button
        type="button"
        onClick={() => setNote(true)}
        aria-describedby="resume-note"
        className={`${base} ${styles} opacity-90`}
      >
        <DocumentIcon className="h-4 w-4" />
        Resume
      </button>
      {note && (
        <p id="resume-note" role="status" className="mt-2 font-mono text-[11px] tracking-wide text-night-text-soft">
          Resume link coming soon — reach out via email in the meantime.
        </p>
      )}
    </div>
  );
}
