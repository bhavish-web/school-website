import { Sparkles, Compass, Cpu, Palette, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
        <SectionHeader
          title="What sets our approach apart"
          description="[Short framing sentence introducing the school's educational philosophy.]"
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => {
            const Icon = icons[p.icon];
            return (
              <div key={p.id} className="flex flex-col gap-4 bg-[var(--color-paper)] p-8">
                <Icon size={26} strokeWidth={1.4} className="text-[var(--color-brass)]" />
                <h3 className="font-display text-[1.3rem] text-[var(--color-ink)]">{p.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-[var(--color-slate)]">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
