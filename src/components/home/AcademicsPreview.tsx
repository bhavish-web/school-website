import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { academicStages } from "@/lib/data/academics";

export function AcademicsPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            title="A learning journey built stage by stage"
            description="[Short description of how the academic programme is structured across stages.]"
            action={
              <Button href="/academics" variant="secondary">
                View Full Curriculum
              </Button>
            }
          />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academicStages.map((s) => (
            <RevealItem key={s.id} className="group flex flex-col">
              <div className="img-zoom-wrap relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Media src={s.image.src} alt={s.image.alt} zoom />
              </div>
              <h3 className="mt-5 font-display text-[1.2rem] text-[var(--color-ink)]">{s.stage}</h3>
              <p className="mt-1 text-[0.85rem] text-[var(--color-gold)]">{s.ageRange}</p>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-[var(--color-slate)]">
                {s.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
