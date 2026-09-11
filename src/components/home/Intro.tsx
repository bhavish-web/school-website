import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { school } from "@/lib/data/school";

export function Intro() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-[2rem] leading-[1.15] text-[var(--color-ink)] md:text-[2.9rem]">
            [A short, confident introduction to the school&rsquo;s identity and story.]
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-[var(--color-slate)]">
            [One or two supporting sentences that expand on the school&rsquo;s identity —
            replace with real introductory copy once available.]
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--color-line)] pt-10 sm:grid-cols-4 md:grid-cols-2">
            {school.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-[2.1rem] text-[var(--color-ink)]">{s.value}</dt>
                <dd className="mt-1 text-[0.85rem] text-[var(--color-slate)]">{s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <Button href="/about" variant="secondary">
              Discover Our Story
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Media src="/images/school/campus-wide.webp" alt="[Wide photograph of the school campus]" />
        </div>
      </Container>
    </section>
  );
}
