import { AdmissionStep } from "@/lib/types";

export function AdmissionTimeline({ steps }: { steps: AdmissionStep[] }) {
  return (
    <ol className="relative flex flex-col gap-0">
      {steps.map((s, i) => (
        <li key={s.step} className="relative flex gap-6 pb-10 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-brass)] font-display text-[1rem] text-[var(--color-brass)]">
              {s.step}
            </span>
            {i < steps.length - 1 && <span className="mt-1 w-px flex-1 bg-[var(--color-line)]" />}
          </div>
          <div className="pt-1.5">
            <h3 className="font-display text-[1.2rem] text-[var(--color-ink)]">{s.title}</h3>
            <p className="mt-1 max-w-md text-[0.95rem] leading-relaxed text-[var(--color-slate)]">
              {s.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
