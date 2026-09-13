import { FacultyMember } from "@/lib/types";

export const faculty: FacultyMember[] = [
  {
    id: "principal",
    name: "[Principal Name]",
    position: "Principal",
    qualification: "[Qualification]",
    bio: "[Short introduction.]",
    image: { src: "/images/faculty/principal.webp", alt: "[Principal Name]" },
    group: "Leadership",
  },
  {
    id: "vice-principal",
    name: "[Vice Principal Name]",
    position: "Vice Principal",
    qualification: "[Qualification]",
    bio: "[Short introduction.]",
    image: { src: "/images/faculty/vice-principal.webp", alt: "[Vice Principal Name]" },
    group: "Leadership",
  },
];
