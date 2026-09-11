import Link from "next/link";
import { Media } from "@/components/ui/Media";
import { EventItem } from "@/lib/types";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link href={`/events/${event.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Media src={event.image.src} alt={event.image.alt} />
      </div>
      <span className="mt-4 text-[0.78rem] font-medium text-[var(--color-brass)]">
        {event.category} · {event.date}
      </span>
      <h3 className="mt-1 font-display text-[1.15rem] leading-snug text-[var(--color-ink)] group-hover:text-[var(--color-brass)]">
        {event.title}
      </h3>
      <p className="mt-2 text-[0.9rem] leading-relaxed text-[var(--color-slate)]">
        {event.description}
      </p>
    </Link>
  );
}
