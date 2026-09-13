import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { EventCard } from "@/components/shared/EventCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { events } from "@/lib/data/events";
import { school } from "@/lib/data/school";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="font-display italic text-[var(--color-gold-bright)]">Events</p>
            <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.1] text-white md:text-[3.2rem]">
              What&rsquo;s happening at {school.shortName}
            </h1>
          </Reveal>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <RevealItem key={e.slug}>
                <EventCard event={e} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
