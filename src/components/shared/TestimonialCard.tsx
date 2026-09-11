import { Testimonial } from "@/lib/types";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl bg-white p-8">
      <blockquote className="font-display text-[1.2rem] italic leading-relaxed text-[var(--color-ink)]">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 text-[0.9rem] text-[var(--color-slate)]">
        <span className="font-medium text-[var(--color-ink)]">{t.name}</span> — {t.role}
      </figcaption>
    </figure>
  );
}
