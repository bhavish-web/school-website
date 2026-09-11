import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";

export const metadata: Metadata = { title: "Student Life" };

const categories = [
  { label: "Sports", description: "[Description of sports programmes and competitions students take part in.]" },
  { label: "Clubs & Leadership", description: "[Description of student clubs, councils, and leadership opportunities.]" },
  { label: "Arts & Culture", description: "[Description of music, art, drama, and cultural activities.]" },
  { label: "Competitions & Olympiads", description: "[Description of academic and extracurricular competitions.]" },
  { label: "Field Trips & Celebrations", description: "[Description of excursions, festivals, and school celebrations.]" },
  { label: "Community Service", description: "[Description of service and outreach initiatives.]" },
];

export default function StudentLifePage() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <p className="font-display italic text-[var(--color-brass-light)]">Student Life</p>
          <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.1] text-white md:text-[3.2rem]">
            Students don&rsquo;t just study here — they experience things here
          </h1>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.label}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Media
                  src={`/images/student-life/${c.label.toLowerCase().replace(/[^a-z]+/g, "-")}.webp`}
                  alt={`[${c.label} photo]`}
                />
              </div>
              <h3 className="mt-4 font-display text-[1.15rem] text-[var(--color-ink)]">{c.label}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-[var(--color-slate)]">{c.description}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
