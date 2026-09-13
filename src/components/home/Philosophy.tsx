import { Sparkles, Compass, Cpu, Palette, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { pillars } from "@/lib/data/pillars";

const icons = {
  excellence: Sparkles,
  leadership: Compass,
  innovation: Cpu,
  arts: Palette,
  growth: Leaf,
};

export function Philosophy() {
  return (
    <section className="bg-[var(--color-paper)] py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            title="What sets our approach apart"
            description="[Short framing sentence introducing the school's educational philosophy.]"
          />
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => {
            const Icon = icons[p.icon];
            return (
              <RevealItem
                key={p.id}
                className="group flex flex-col gap-4 bg-[var(--color-paper)] p-8 transition-colors duration-300 hover:bg-white"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-gold)] shadow-[0_6px_16px_-8px_rgba(35,16,7,0.25)] transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--color-brass)]">
                  <Icon size={24} strokeWidth={1.4} />
                </span>
                <h3 className="font-display text-[1.3rem] text-[var(--color-ink)]">{p.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-[var(--color-slate)]">
                  {p.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
