import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { school } from "@/lib/data/school";
import { faculty } from "@/lib/data/faculty";

export const metadata: Metadata = { title: "About" };

const sections = [
  { title: "Our Story", body: "[The school's founding story and journey — replace with real history.]" },
  { title: "Vision", body: "[The school's vision statement.]" },
  { title: "Mission", body: "[The school's mission statement.]" },
  { title: "Values", body: "[The values the school holds and teaches.]" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <p className="font-display italic text-[var(--color-brass-light)]">About {school.name}</p>
          <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.1] text-white md:text-[3.4rem]">
            [A confident, editorial headline introducing the school&rsquo;s story.]
          </h1>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Media src="/images/school/about-story.webp" alt="[Photograph representing the school's story]" />
          </div>
          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-[1.5rem] text-[var(--color-ink)]">{s.title}</h2>
                <p className="mt-3 text-[1rem] leading-relaxed text-[var(--color-slate)]">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper)] py-24">
        <Container>
          <h2 className="font-display text-[2rem] text-[var(--color-ink)]">Leadership</h2>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {faculty
              .filter((f) => f.group === "Leadership")
              .map((f) => (
                <div key={f.id} className="flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Media src={f.image.src} alt={f.image.alt} />
                  </div>
                  <h3 className="mt-4 font-display text-[1.2rem] text-[var(--color-ink)]">{f.name}</h3>
                  <p className="text-[0.9rem] text-[var(--color-brass)]">{f.position}</p>
                  <p className="mt-1 text-[0.85rem] text-[var(--color-slate)]">{f.qualification}</p>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-[var(--color-slate)]">{f.bio}</p>
                </div>
              ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <h2 className="font-display text-[1.6rem] text-[var(--color-ink)]">Accreditations & Affiliations</h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-[var(--color-slate)]">
            {school.boardAffiliation}. [List any additional accreditations or affiliations here.]
          </p>
        </Container>
      </section>
    </>
  );
}
