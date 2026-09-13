import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { academicStages } from "@/lib/data/academics";

export const metadata: Metadata = { title: "Academics" };

export default function AcademicsPage() {
  return (
    <>
      <section className="grain-overlay bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="eyebrow text-[var(--color-gold-bright)]">Academics</p>
            <h1 className="heading-tight mt-4 max-w-2xl font-display font-medium text-[2.4rem] font-medium leading-[1.12] text-white md:text-[3.4rem]">
              A curriculum designed around how children actually grow
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] text-white/75">
              [Short overview of the academic approach across all stages.]
            </p>
          </Reveal>
        </Container>
      </section>

      {academicStages.map((s, i) => (
        <section key={s.id} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-paper)]"}>
          <Container className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2">
            <Reveal className={`img-zoom-wrap relative aspect-[4/3] overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <Media src={s.image.src} alt={s.image.alt} zoom />
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-[0.85rem] font-medium text-[var(--color-gold)]">{s.ageRange}</span>
              <h2 className="mt-2 font-display font-medium text-[2rem] text-[var(--color-ink)]">{s.stage}</h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-[var(--color-slate)]">{s.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.focusAreas.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-[var(--color-line)] px-4 py-1.5 text-[0.85rem] text-[var(--color-ink)] transition-colors hover:border-[var(--color-brass)] hover:text-[var(--color-brass)]"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      ))}

      <section id="calendar" className="bg-white py-20">
        <Container>
          <Reveal>
            <h2 className="font-display font-medium text-[1.8rem] text-[var(--color-ink)]">Academic Calendar</h2>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-[var(--color-slate)]">
              [Add the academic year calendar — term dates, holidays, and key academic milestones — once confirmed.]
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
