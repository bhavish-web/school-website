import { Achievement } from "@/lib/types";

export const achievements: Achievement[] = [
  {
    id: "example-achievement",
    title: "[Achievement Title]",
    person: "[Student / Team Name]",
    competition: "[Competition Name]",
    date: "[Date]",
    category: "[Category]",
    description: "[Short description of the achievement.]",
    result: "[Result / Position]",
    image: { src: "/images/achievements/example.webp", alt: "[Achievement Title]" },
  },
];
