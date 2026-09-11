import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AdmissionsCTA() {
  return (
    <section className="bg-[var(--color-forest)] py-20">
      <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-[1.9rem] leading-tight text-white md:text-[2.4rem]">
            Admissions for [Academic Year] are open
          </h2>
          <p className="mt-3 max-w-lg text-[1rem] leading-relaxed text-white/75">
            [Short line encouraging parents to begin the admission process, with a real application window once confirmed.]
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button href="/admissions" variant="primary">
            Begin Admission Enquiry
          </Button>
          <Button href="/admissions#prospectus" variant="ghostLight">
            Download Prospectus
          </Button>
        </div>
      </Container>
    </section>
  );
}
