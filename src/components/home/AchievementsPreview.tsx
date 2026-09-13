import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { AchievementCard } from "@/components/shared/AchievementCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { achievements } from "@/lib/data/achievements";

export function AchievementsPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            title="Moments we're proud of"
            description="[Short introduction to the achievements shown below.]"
            action={
              <Button href="/achievements" variant="secondary">
                View All Achievements
              </Button>
            }
          />
        </Reveal>
        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.slice(0, 3).map((a) => (
            <RevealItem key={a.id}>
              <AchievementCard achievement={a} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
