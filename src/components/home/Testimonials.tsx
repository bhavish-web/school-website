import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-[var(--color-paper)] py-24 md:py-32">
      <Container>
        <SectionHeader
          title="From our school community"
          description="[Short introduction to the testimonials below.]"
          align="center"
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
