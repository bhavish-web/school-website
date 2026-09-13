import { Media } from "@/components/ui/Media";
import { Achievement } from "@/lib/types";

export function AchievementCard({ achievement: a }: { achievement: Achievement }) {
  return (
    <article className="hover-lift flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
      <div className="img-zoom-wrap relative aspect-[16/10] w-full">
        <Media src={a.image.src} alt={a.image.alt} zoom />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="text-[0.78rem] font-medium text-[var(--color-gold)]">{a.category}</span>
        <h3 className="font-display text-[1.2rem] leading-snug text-[var(--color-ink)]">{a.title}</h3>
        <p className="text-[0.9rem] text-[var(--color-slate)]">{a.person} · {a.competition}</p>
        <p className="mt-1 text-[0.9rem] leading-relaxed text-[var(--color-slate)]">{a.description}</p>
        <div className="mt-auto flex items-center justify-between pt-4 text-[0.82rem] text-[var(--color-slate)]">
          <span>{a.date}</span>
          <span className="font-medium text-[var(--color-brass)]">{a.result}</span>
        </div>
      </div>
    </article>
  );
}
