import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { facilities } from "@/lib/data/facilities";

export function CampusPreview() {
  const [first, second, third, fourth, fifth] = facilities;

  return (
    <section className="bg-[var(--color-paper)] py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Our Campus"
            title="A campus built for how children actually learn"
            description="[Short description inviting visitors to explore the campus.]"
            action={
              <Button href="/campus" variant="secondary">
                Explore The Campus
              </Button>
            }
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          <Reveal delay={0.05} className="img-zoom-wrap relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-4 md:row-span-2 md:aspect-auto">
            <Media src={first.image.src} alt={first.image.alt} zoom />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="font-display font-medium text-[1.4rem] text-white">{first.name}</p>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="img-zoom-wrap relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2">
            <Media src={second.image.src} alt={second.image.alt} zoom />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5">
              <p className="font-display font-medium text-[1.1rem] text-white">{second.name}</p>
            </div>
          </Reveal>
          <Reveal delay={0.19} className="img-zoom-wrap relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2">
            <Media src={third.image.src} alt={third.image.alt} zoom />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5">
              <p className="font-display font-medium text-[1.1rem] text-white">{third.name}</p>
            </div>
          </Reveal>
        </div>
        <p className="mt-3 text-[0.85rem] text-[var(--color-slate)]">
          {fourth?.name} · {fifth?.name} and more — see the full campus tour.
        </p>
      </Container>
    </section>
  );
}
