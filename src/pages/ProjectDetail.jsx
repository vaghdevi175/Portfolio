import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/content";
import ProjectGallery from "../components/ProjectGallery";
import ProjectVisual from "../components/ProjectVisual";
import StepChain from "../components/StepChain";
import useReveal from "../hooks/useReveal";
import { ArrowUpRight, GitHubIcon } from "../components/icons";

// The project's video demo, shown in its own section after the gallery.
// Lazy-mounted once it scrolls near the viewport (these are large screen
// recordings), then autoplays muted/looped with visible controls so it
// reads as a demo reel rather than a static screenshot. Height-capped with
// object-contain — never cropped, never forced into a fixed ratio.
function DemoVideo({ src, name }) {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="w-full overflow-hidden rounded-sm border border-paper-line bg-paper-dim">
      {inView ? (
        <video
          className="max-h-[380px] w-full object-contain sm:max-h-[460px]"
          src={src}
          autoPlay={!reduceMotion}
          loop
          muted
          playsInline
          controls
          preload="metadata"
          aria-label={`${name} demo video`}
        />
      ) : (
        <div className="aspect-video w-full" />
      )}
    </div>
  );
}

function Field({ label, children }) {
  if (!children) return null;
  return (
    <div>
      <p className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-accent">{label}</p>
      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{children}</p>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// A running index of case-study sections, bracket-numbered as they're
// rendered — the reading order really is sequential, so the numbering
// carries information rather than decorating the heading.
function SectionHeading({ n, children }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[12px] text-accent">[{n}]</span>
      <h2 className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl">{children}</h2>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.id === slug);
  const project = projects[index];
  const bodyRef = useReveal();
  const galleryRef = useRef(null);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-display text-3xl text-ink">Project not found</p>
        <Link to="/" className="font-mono text-sm text-accent hover:underline">
          ← Back home
        </Link>
      </div>
    );
  }

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const hasVideo = Boolean(project.media?.video);
  const allImages = [project.media?.mainImage, ...(project.media?.images ?? [])].filter(Boolean);
  const galleryItems = allImages.map((src) => ({ type: "image", src }));
  const gridIndices = galleryItems.map((_, i) => i).filter((i) => i !== 0);
  const showGallery = galleryItems.length > 1;

  // Sequential numbering for whichever body sections this project actually
  // has — computed as the JSX below renders, so gaps in the data never
  // produce gaps in the count.
  let sectionCount = 0;
  const nextN = () => String(++sectionCount).padStart(2, "0");

  return (
    <article className="bg-paper pb-24 pt-10 sm:pt-14 lg:pt-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Link
          to="/"
          state={{ scrollTo: "work" }}
          className="inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-accent"
        >
          ← Back to index
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[20rem_1fr] lg:gap-16">
          {/* Sticky dossier column — stays put while the case study scrolls
              alongside it, so identity, tech, and prev/next are never more
              than a glance away. */}
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">{project.number}</span>
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-faint">{project.category}</p>
            </div>

            <h1
              className="mt-4 font-serif font-semibold leading-[1.04] tracking-tight text-ink"
              style={{ fontSize: "clamp(1.9rem, 2.6vw, 2.5rem)" }}
            >
              {project.name}
            </h1>
            <p className="mt-2 text-[15px] text-ink-soft">{project.subtitle}</p>

            {(project.projectType || project.team) && (
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-paper-line pt-5">
                {project.projectType && (
                  <div>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">Type</p>
                    <p className="mt-1 text-sm text-ink">{project.projectType}</p>
                  </div>
                )}
                {project.team && (
                  <div>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">Team</p>
                    <p className="mt-1 text-sm text-ink">{project.team}</p>
                  </div>
                )}
              </div>
            )}

            <p className="mt-6 text-[14.5px] leading-relaxed text-ink-soft">{project.overview}</p>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-2.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              Source
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-paper-line pt-6">
              <Link to={`/work/${prev.id}`} className="group flex flex-col gap-1.5">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">← Prev</span>
                <span className="font-display text-[15px] leading-snug text-ink transition-colors group-hover:text-accent">
                  {prev.name}
                </span>
              </Link>
              <Link to={`/work/${next.id}`} className="group flex flex-col items-end gap-1.5 text-right">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">Next →</span>
                <span className="font-display text-[15px] leading-snug text-ink transition-colors group-hover:text-accent">
                  {next.name}
                </span>
              </Link>
            </div>
          </aside>

          {/* Scrolling case-study column. */}
          <div ref={bodyRef} className="reveal min-w-0">
            <div className="overflow-hidden rounded-sm border border-paper-line bg-paper-dim">
              <div className="flex items-center gap-1.5 border-b border-paper-line bg-surface px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-paper-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-paper-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-paper-line" />
                <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                  {project.id}.output
                </span>
              </div>
              {project.media?.mainImage ? (
                <button
                  type="button"
                  onClick={() => galleryRef.current?.open(0)}
                  className="group block w-full"
                  aria-label={`View ${project.name} full-size`}
                >
                  <img
                    src={project.media.mainImage}
                    alt={`${project.name} main output`}
                    className="max-h-[460px] w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                </button>
              ) : (
                <div className="aspect-[16/10] w-full">
                  <ProjectVisual type={project.visual} variant="fill" />
                </div>
              )}
            </div>

            <div className="mt-14 flex flex-col gap-14">
              <div className="grid gap-8 border-t border-paper-line pt-10 sm:grid-cols-3">
                <Field label="Problem">{project.problem}</Field>
                <Field label="Goal / Idea">{project.goal}</Field>
                <Field label="My Role">{project.myRole}</Field>
              </div>

              {project.approach?.length > 0 && (
                <div className="border-t border-paper-line pt-10">
                  <SectionHeading n={nextN()}>Approach</SectionHeading>
                  <ol className="mt-6 flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-5">
                    {project.approach.map((step, i) => (
                      <li key={step} className="flex gap-4">
                        <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[15px] leading-relaxed text-ink-soft">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {project.workflow?.length > 0 && (
                <div className="border-t border-paper-line pt-10">
                  <SectionHeading n={nextN()}>Workflow</SectionHeading>
                  <div className="mt-6">
                    <StepChain steps={project.workflow} />
                  </div>
                </div>
              )}

              {project.architecture?.length > 0 && (
                <div className="border-t border-paper-line pt-10">
                  <SectionHeading n={nextN()}>Architecture</SectionHeading>
                  <div className="mt-6">
                    <StepChain steps={project.architecture} />
                  </div>
                </div>
              )}

              {(project.technologies?.length > 0 || project.areas?.length > 0) && (
                <div className="border-t border-paper-line pt-10">
                  <SectionHeading n={nextN()}>{project.technologies ? "Technology" : "Focus Areas"}</SectionHeading>
                  <p className="mt-6 max-w-2xl font-mono text-[13px] leading-loose tracking-wide text-ink-soft">
                    {(project.technologies ?? project.areas).join("   /   ")}
                  </p>
                </div>
              )}

              {project.keyFeatures?.length > 0 && (
                <div className="border-t border-paper-line pt-10">
                  <SectionHeading n={nextN()}>Key Features</SectionHeading>
                  <div className="mt-6 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
                    <BulletList items={project.keyFeatures} />
                  </div>
                </div>
              )}

              {showGallery && (
                <div className="border-t border-paper-line pt-10">
                  <SectionHeading n={nextN()}>Gallery</SectionHeading>
                  <div className="mt-6">
                    <ProjectGallery ref={galleryRef} items={galleryItems} name={project.name} gridIndices={gridIndices} />
                  </div>
                </div>
              )}
              {!showGallery && galleryItems.length > 0 && (
                <ProjectGallery ref={galleryRef} items={galleryItems} name={project.name} showGrid={false} />
              )}

              {hasVideo && (
                <div className="border-t border-paper-line pt-10">
                  <SectionHeading n={nextN()}>Video Demo</SectionHeading>
                  <div className="mt-6">
                    <DemoVideo src={project.media.video} name={project.name} />
                  </div>
                </div>
              )}

              {(project.challenges?.length > 0 || project.learnings?.length > 0) && (
                <div className="grid gap-10 border-t border-paper-line pt-10 sm:grid-cols-2">
                  {project.challenges?.length > 0 && (
                    <div>
                      <SectionHeading n={nextN()}>Challenges</SectionHeading>
                      <div className="mt-6">
                        <BulletList items={project.challenges} />
                      </div>
                    </div>
                  )}
                  {project.learnings?.length > 0 && (
                    <div>
                      <SectionHeading n={nextN()}>Learnings</SectionHeading>
                      <div className="mt-6">
                        <BulletList items={project.learnings} />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
