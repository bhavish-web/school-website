import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { school } from "@/lib/data/school";

export function AdmissionsCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-forest)] py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{ background: "var(--gradient-flame)" }}
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <h2 className="font-display text-[1.9rem] leading-tight text-white md:text-[2.4rem]">
            Ready to join {school.shortName}?
          </h2>
          <p className="mt-3 max-w-lg text-[1rem] leading-relaxed text-white/80">
            [Short line encouraging parents to get in touch about admissions, once the enrolment window and process are confirmed.]
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <Button href="/contact" variant="primary">
            Enquire Now
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
