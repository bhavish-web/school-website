import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const categories = [
  { label: "Sports", image: { src: "/images/student-life/sports.webp", alt: "[Sports activity photo]" } },
  { label: "Arts & Culture", image: { src: "/images/student-life/arts.webp", alt: "[Arts activity photo]" } },
  { label: "Clubs & Leadership", image: { src: "/images/student-life/clubs.webp", alt: "[Club activity photo]" } },
  { label: "Community Service", image: { src: "/images/student-life/service.webp", alt: "[Community service photo]" } },
];

export function StudentLife() {
  return (
    <section className="bg-[var(--color-ink)] py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            title="Students don't just study here"
            description="[Short description communicating the breadth of student life and experiences.]"
            tone="light"
            action={
              <Button href="/student-life" variant="ghostLight">
                See Student Life
              </Button>
            }
          />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <RevealItem key={c.label} className="img-zoom-wrap relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Media src={c.image.src} alt={c.image.alt} tone="ink" zoom />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-display text-[1.05rem] text-white">{c.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
