import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import { events } from "@/lib/data/events";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  return { title: event?.title ?? "Event" };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return notFound();

  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <>
      <section className="relative bg-[var(--color-ink)]">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Media src={event.image.src} alt={event.image.alt} tone="ink" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] to-transparent" />
        </div>
        <Container className="relative -mt-24 pb-16">
          <span className="text-[0.85rem] font-medium text-[var(--color-brass-light)]">
            {event.category} · {event.date}
            {event.location ? ` · ${event.location}` : ""}
          </span>
          <h1 className="mt-3 max-w-2xl font-display text-[2rem] leading-tight text-white md:text-[2.8rem]">
            {event.title}
          </h1>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="max-w-3xl">
          <p className="text-[1.05rem] leading-relaxed text-[var(--color-slate)]">
            {event.fullDescription}
          </p>
          {event.cta && (
            <div className="mt-8">
              <Button href={event.cta.href} variant="primary">{event.cta.label}</Button>
            </div>
          )}
        </Container>
      </section>

      {event.gallery.length > 0 && (
        <section className="bg-[var(--color-paper)] py-16">
          <Container>
            <h2 className="font-display text-[1.5rem] text-[var(--color-ink)]">Gallery</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {event.gallery.map((g, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                  <Media src={g.src} alt={g.alt} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <h2 className="font-display text-[1.5rem] text-[var(--color-ink)]">Related Events</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {related.map((e) => (
                <a key={e.slug} href={`/events/${e.slug}`} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Media src={e.image.src} alt={e.image.alt} />
                  </div>
                  <h3 className="mt-3 font-display text-[1.05rem] text-[var(--color-ink)] group-hover:text-[var(--color-brass)]">
                    {e.title}
                  </h3>
                </a>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
