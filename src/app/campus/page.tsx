import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { facilities } from "@/lib/data/facilities";

export const metadata: Metadata = { title: "Campus" };

const grouped = facilities.reduce<Record<string, typeof facilities>>((acc, f) => {
  acc[f.category] = acc[f.category] ? [...acc[f.category], f] : [f];
  return acc;
}, {});

export default function CampusPage() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="font-display italic text-[var(--color-gold-bright)]">Campus</p>
            <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.1] text-white md:text-[3.2rem]">
              Explore the campus
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] text-white/75">
              [Short line inviting visitors to explore the physical spaces of the school.]
            </p>
          </Reveal>
        </Container>
      </section>

      {Object.entries(grouped).map(([category, items], i) => (
        <section key={category} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-paper)]"}>
          <Container className="py-20">
            <Reveal>
              <h2 className="font-display text-[1.7rem] text-[var(--color-ink)]">{category}</h2>
            </Reveal>
            <RevealGroup className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((f) => (
                <RevealItem key={f.id}>
                  <div className="img-zoom-wrap relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Media src={f.image.src} alt={f.image.alt} zoom />
                  </div>
                  <h3 className="mt-4 font-display text-[1.1rem] text-[var(--color-ink)]">{f.name}</h3>
                  <p className="mt-1 text-[0.9rem] leading-relaxed text-[var(--color-slate)]">{f.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      ))}
    </>
  );
}
