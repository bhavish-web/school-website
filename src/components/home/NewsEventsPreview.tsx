import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { EventCard } from "@/components/shared/EventCard";
import { NewsCard } from "@/components/shared/NewsCard";
import { events } from "@/lib/data/events";
import { news } from "@/lib/data/news";

export function NewsEventsPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeader
              title="What's happening"
              action={
                <Button href="/events" variant="secondary">
                  All Events
                </Button>
              }
            />
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {events.slice(0, 4).map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              title="Announcements"
              action={
                <Button href="/news" variant="secondary">
                  All News
                </Button>
              }
            />
            <div className="mt-6">
              {news.slice(0, 4).map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
