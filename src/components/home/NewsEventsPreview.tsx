import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { EventCard } from "@/components/shared/EventCard";
import { NewsCard } from "@/components/shared/NewsCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { events } from "@/lib/data/events";
import { news } from "@/lib/data/news";

export function NewsEventsPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <SectionHeader
                title="What's happening"
                action={
                  <Button href="/events" variant="secondary">
                    All Events
                  </Button>
                }
              />
            </Reveal>
            <RevealGroup className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {events.slice(0, 4).map((e) => (
                <RevealItem key={e.slug}>
                  <EventCard event={e} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div>
            <Reveal delay={0.1}>
              <SectionHeader
                title="Announcements"
                action={
                  <Button href="/news" variant="secondary">
                    All News
                  </Button>
                }
              />
            </Reveal>
            <Reveal delay={0.18} className="mt-6">
              {news.slice(0, 4).map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
