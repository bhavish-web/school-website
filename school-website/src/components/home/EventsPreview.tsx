import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { EventCard } from "@/components/shared/EventCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { events } from "@/lib/data/events";

export function EventsPreview() {
  return (
    <section className="bg-[var(--color-paper)] py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Calendar"
                title="What's happening"
            description="[Short introduction to upcoming events and school happenings.]"
            action={
              <Button href="/events" variant="secondary">
                All Events
              </Button>
            }
          />
        </Reveal>
        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((e) => (
            <RevealItem key={e.slug}>
              <EventCard event={e} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
