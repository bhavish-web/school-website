import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

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
            Admissions for [Academic Year] are open
          </h2>
          <p className="mt-3 max-w-lg text-[1rem] leading-relaxed text-white/80">
            [Short line encouraging parents to begin the admission process, with a real application window once confirmed.]
          </p>
        </Reveal>
        <Reveal delay={0.12} className="flex flex-wrap gap-4">
          <Button href="/admissions" variant="primary">
            Begin Admission Enquiry
          </Button>
          <Button href="/admissions#prospectus" variant="ghostLight">
            Download Prospectus
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
