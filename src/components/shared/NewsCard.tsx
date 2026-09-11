import { Media } from "@/components/ui/Media";
import { NewsItem } from "@/lib/types";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex gap-5 border-b border-[var(--color-line)] py-6 first:pt-0 last:border-0">
      <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg">
        <Media src={item.thumbnail.src} alt={item.thumbnail.alt} />
      </div>
      <div>
        <span className="text-[0.78rem] font-medium text-[var(--color-brass)]">
          {item.category} · {item.date}
        </span>
        <h3 className="mt-1 font-display text-[1.1rem] leading-snug text-[var(--color-ink)]">
          {item.title}
        </h3>
        <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--color-slate)]">
          {item.description}
        </p>
      </div>
    </article>
  );
}
