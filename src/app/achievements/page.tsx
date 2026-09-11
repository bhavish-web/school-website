import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AchievementCard } from "@/components/shared/AchievementCard";
import { achievements } from "@/lib/data/achievements";

export const metadata: Metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <p className="font-display italic text-[var(--color-brass-light)]">Achievements</p>
          <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.1] text-white md:text-[3.2rem]">
            Moments we&rsquo;re proud of
          </h1>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a) => (
              <AchievementCard key={a.id} achievement={a} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
