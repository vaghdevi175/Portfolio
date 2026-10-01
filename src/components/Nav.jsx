import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { nav, contact } from "../data/content";
import { GitHubIcon, LinkedInIcon } from "./icons";

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// The index list shared by the desktop rail and the mobile drawer — a
// vertical table of contents rather than a horizontal menu, with a sliding
// bracket marker on the active entry instead of a pill fill.
function IndexList({ items, activeId, onSelect, className = "" }) {
  return (
    <ul className={`flex flex-col ${className}`}>
      {items.map((item, i) => {
        const id = item.href.slice(1);
        const isActive = activeId === id;
        return (
          <li key={item.href} className="relative">
            <a
              href={item.href}
              onClick={onSelect(id)}
              aria-current={isActive ? "true" : undefined}
              className="group flex items-center gap-4 py-3 font-mono text-[13px] uppercase tracking-[0.1em] text-night-text-soft transition-colors hover:text-night-text"
            >
              <span
                className={`font-mono text-[11px] transition-colors ${
                  isActive ? "text-signal-soft" : "text-night-line group-hover:text-night-text-soft"
                }`}
              >
                0{i + 1}
              </span>
              <span className={isActive ? "text-night-text" : ""}>{item.label}</span>
              {isActive && (
                <motion.span
                  layoutId="rail-active-marker"
                  className="absolute -left-4 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-signal-soft"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll-spy: highlight whichever nav section currently sits in a thin
  // band near the vertical middle of the viewport.
  useEffect(() => {
    if (!isHome) {
      setActiveId(null);
      return;
    }
    const ids = nav.map((item) => item.href.slice(1));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome, location.pathname]);

  const goToSection = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const goHome = (e) => {
    e.preventDefault();
    setOpen(false);
    if (isHome) {
      document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
    }
  };

  const Brand = ({ compact }) => (
    <a href="/" onClick={goHome} className="group flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-night-line font-mono text-[12px] text-signal-soft transition-colors group-hover:border-signal-soft">
        VP
      </span>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-[17px] tracking-tight text-night-text">Vaghdevi Pappala</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-night-text-soft">
            AI/ML · Full-Stack
          </span>
        </span>
      )}
    </a>
  );

  return (
    <>
      {/* Desktop: fixed full-height index rail — the one constant
          structural anchor of the layout. */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-[var(--rail-width)] flex-col justify-between border-r border-night-line bg-night px-7 py-8 lg:flex">
        <div>
          <Brand />
          <p className="mt-10 font-mono text-[10.5px] uppercase tracking-[0.14em] text-night-text-soft/70">
            [ Index ]
          </p>
          <nav aria-label="Section index" className="mt-2">
            <IndexList items={nav} activeId={activeId} onSelect={goToSection} className="border-t border-night-line/70" />
          </nav>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 border-t border-night-line pt-5">
            <a
              href={contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-night-line text-night-text-soft transition-colors hover:border-signal-soft hover:text-signal-soft"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-night-line text-night-text-soft transition-colors hover:border-signal-soft hover:text-signal-soft"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-night-text-soft/60">
            portfolio.sys © {new Date().getFullYear()}
          </p>
        </div>
      </aside>

      {/* Mobile / tablet: slim top bar + slide-in drawer using the same
          rail visual language. */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-night-line bg-night px-5 py-4 lg:hidden">
        <Brand compact={false} />
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-night-line text-night-text transition-colors hover:border-signal-soft hover:text-signal-soft"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </header>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[82vw] max-w-xs flex-col justify-between border-l border-night-line bg-night px-7 py-8 transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-night-text-soft/70">[ Index ]</p>
          <nav aria-label="Section index" className="mt-2">
            <IndexList items={nav} activeId={activeId} onSelect={goToSection} className="border-t border-night-line/70" />
          </nav>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 border-t border-night-line pt-5">
            <a
              href={contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-night-line text-night-text-soft transition-colors hover:border-signal-soft hover:text-signal-soft"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-night-line text-night-text-soft transition-colors hover:border-signal-soft hover:text-signal-soft"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
