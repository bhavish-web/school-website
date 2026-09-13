import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-[var(--color-paper)] py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            title="From our school community"
            description="[Short introduction to the testimonials below.]"
            align="center"
          />
        </Reveal>
        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.id} className="hover-lift rounded-2xl">
              <TestimonialCard t={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
