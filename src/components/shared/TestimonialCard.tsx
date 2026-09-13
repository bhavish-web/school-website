import { Testimonial } from "@/lib/types";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-line)] bg-white p-8">
      <span className="font-display text-[2.5rem] leading-none text-[var(--color-gold)]" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 font-display text-[1.15rem] italic leading-relaxed text-[var(--color-ink)]">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-[var(--color-line)] pt-4 text-[0.9rem] text-[var(--color-slate)]">
        <span className="font-medium text-[var(--color-ink)]">{t.name}</span> — {t.role}
      </figcaption>
    </figure>
  );
}
