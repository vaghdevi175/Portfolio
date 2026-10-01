import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

function ArrowIcon({ dir = "right", ...props }) {
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

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

// Unified gallery + lightbox for a project's real media (screenshots and,
// optionally, a video), used on the project detail page. Reusable across
// every project — the caller supplies a flat list of { type, src } items.
// A parent can also open the lightbox imperatively (e.g. from a click on
// the hero image) via the forwarded ref's `open(index)` method, so the
// hero and the thumbnail grid below share one lightbox instance.
const ProjectGallery = forwardRef(function ProjectGallery({ items, name, gridIndices, showGrid = true }, ref) {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;
  const indices = gridIndices ?? items.map((_, i) => i);

  useImperativeHandle(ref, () => ({
    open: (i = 0) => setOpenIndex(i),
  }));

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, items.length]);

  if (!items?.length) return null;
  const current = isOpen ? items[openIndex] : null;

  return (
    <>
      {showGrid && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {indices.map((i) => {
            const item = items[i];
            return (
              <button
                key={item.src}
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-paper-line bg-paper-dim"
              >
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/25 transition-colors group-hover:bg-ink/35">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface/95 text-ink">
                        <PlayIcon className="h-4 w-4 translate-x-[1px]" />
                      </span>
                    </span>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={`${name} screenshot ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}

      {createPortal(
        <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${name} media ${openIndex + 1} of ${items.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpenIndex(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-10"
          >
            {current.type === "video" ? (
              <motion.video
                key={current.src}
                src={current.src}
                controls
                autoPlay
                loop
                playsInline
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full rounded-sm shadow-2xl"
              />
            ) : (
              <motion.img
                key={current.src}
                src={current.src}
                alt={`${name} screenshot ${openIndex + 1}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full rounded-sm object-contain shadow-2xl"
              />
            )}

            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-night-line bg-night-raised text-night-text transition-colors hover:border-accent-soft hover:text-accent-soft sm:right-8 sm:top-8"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex((i) => (i - 1 + items.length) % items.length);
                  }}
                  aria-label="Previous item"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-night-line bg-night-raised text-night-text transition-colors hover:border-accent-soft hover:text-accent-soft sm:left-8"
                >
                  <ArrowIcon dir="left" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex((i) => (i + 1) % items.length);
                  }}
                  aria-label="Next item"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-night-line bg-night-raised text-night-text transition-colors hover:border-accent-soft hover:text-accent-soft sm:right-8"
                >
                  <ArrowIcon dir="right" className="h-5 w-5" />
                </button>
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[12px] uppercase tracking-[0.1em] text-night-text-soft">
                  {openIndex + 1} / {items.length}
                </span>
              </>
            )}
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
});

export default ProjectGallery;
