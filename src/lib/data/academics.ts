import { AcademicStage } from "@/lib/types";

// Only include stages the school actually offers.
export const academicStages: AcademicStage[] = [
  {
    id: "pre-primary",
    stage: "Pre-Primary",
    ageRange: "[Age Range]",
    description: "[Short description of the pre-primary programme and approach.]",
    focusAreas: ["[Focus Area]", "[Focus Area]", "[Focus Area]"],
    image: { src: "/images/academics/pre-primary.webp", alt: "[Pre-Primary classroom]" },
  },
  {
    id: "primary",
    stage: "Primary",
    ageRange: "[Age Range]",
    description: "[Short description of the primary programme and approach.]",
    focusAreas: ["[Focus Area]", "[Focus Area]", "[Focus Area]"],
    image: { src: "/images/academics/primary.webp", alt: "[Primary classroom]" },
  },
  {
    id: "middle-school",
    stage: "Middle School",
    ageRange: "[Age Range]",
    description: "[Short description of the middle school programme and approach.]",
    focusAreas: ["[Focus Area]", "[Focus Area]", "[Focus Area]"],
    image: { src: "/images/academics/middle-school.webp", alt: "[Middle School classroom]" },
  },
  {
    id: "senior-secondary",
    stage: "Senior Secondary",
    ageRange: "[Age Range]",
    description: "[Short description of the senior secondary programme and streams offered.]",
    focusAreas: ["[Focus Area]", "[Focus Area]", "[Focus Area]"],
    image: { src: "/images/academics/senior-secondary.webp", alt: "[Senior Secondary classroom]" },
  },
];
