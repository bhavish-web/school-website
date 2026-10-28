import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { school } from "@/lib/data/school";
import { faculty } from "@/lib/data/faculty";

export const metadata: Metadata = { title: "About" };

const management = faculty.filter((f) => f.group === "Management");
const principal = faculty.find((f) => f.group === "Principal");
const teachers = faculty.filter((f) => f.group === "Faculty");

const sections = [
  { title: "Our Story", body: "[The school's founding story and journey — replace with real history.]" },
  { title: "Vision", body: "[The school's vision statement.]" },
  { title: "Mission", body: "[The school's mission statement.]" },
  { title: "Values", body: "[The values the school holds and teaches.]" },
];

export default function AboutPage() {
  return (
    <>
      <section className="grain-overlay bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="eyebrow text-[var(--color-gold-bright)]">About {school.name}</p>
            <h1 className="heading-tight mt-4 max-w-2xl font-display font-medium text-[2.4rem] font-medium leading-[1.12] text-white md:text-[3.4rem]">
              [A confident, editorial headline introducing the school&rsquo;s story.]
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
          <Reveal className="img-zoom-wrap relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Media src="/images/school/about-story.webp" alt="[Photograph representing the school's story]" zoom />
          </Reveal>
          <RevealGroup className="flex flex-col gap-10" stagger={0.1}>
            {sections.map((s) => (
              <RevealItem key={s.title}>
                <h2 className="font-display font-medium text-[1.5rem] text-[var(--color-ink)]">{s.title}</h2>
                <p className="mt-3 text-[1rem] leading-relaxed text-[var(--color-slate)]">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-24">
        <Container>
          <Reveal>
            <p className="eyebrow text-[var(--color-gold)]">The People Behind the School</p>
            <h2 className="mt-3 font-display font-medium text-[2rem] text-[var(--color-ink)]">Our Management</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {management.map((m) => (
              <RevealItem key={m.id} className="flex flex-col">
                <div className="img-zoom-wrap relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Media src={m.image.src} alt={m.image.alt} zoom />
                </div>
                <h3 className="mt-4 font-display font-medium text-[1.15rem] text-[var(--color-ink)]">{m.name}</h3>
                <p className="text-[0.9rem] text-[var(--color-gold)]">{m.position}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {principal && (
        <section className="bg-white py-24">
          <Container className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_3fr] md:items-center">
            <Reveal className="img-zoom-wrap relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Media src={principal.image.src} alt={principal.image.alt} zoom />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow text-[var(--color-gold)]">From the Principal&rsquo;s Desk</p>
              <h2 className="mt-3 font-display font-medium text-[2rem] text-[var(--color-ink)]">{principal.name}</h2>
              <p className="text-[0.95rem] text-[var(--color-gold)]">{principal.position}</p>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-[var(--color-slate)]">{principal.bio}</p>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="bg-[var(--color-paper)] py-24">
        <Container>
          <Reveal>
            <h2 className="font-display font-medium text-[2rem] text-[var(--color-ink)]">Our Faculty</h2>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-[var(--color-slate)]">
              [A line about the teaching team — their experience and commitment to every child.]
            </p>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {teachers.map((t) => (
              <RevealItem key={t.id} className="flex flex-col">
                <div className="img-zoom-wrap relative aspect-square overflow-hidden rounded-xl">
                  <Media src={t.image.src} alt={t.image.alt} zoom />
                </div>
                <h3 className="mt-3 font-display font-medium text-[1.05rem] text-[var(--color-ink)]">{t.name}</h3>
                <p className="text-[0.85rem] text-[var(--color-gold)]">{t.position}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <h2 className="font-display font-medium text-[1.6rem] text-[var(--color-ink)]">Accreditations & Affiliations</h2>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-[var(--color-slate)]">
              {school.boardAffiliation}. [List any additional accreditations or affiliations here.]
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
