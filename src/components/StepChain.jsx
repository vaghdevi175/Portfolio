// Renders a sequence of steps connected by arrows — used for the
// Workflow and Architecture sections on project detail pages.
export default function StepChain({ steps }) {
  if (!steps?.length) return null;
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded-sm border border-paper-line bg-paper px-3 py-1.5 font-mono text-[12.5px] text-ink">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="text-ink-faint" aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
