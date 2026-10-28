import { FacultyMember } from "@/lib/types";

// Management — the 9 partners. Fill in each partner's name and position.
const management: FacultyMember[] = [
  { position: "[Position]", id: "partner-1" },
  { position: "[Position]", id: "partner-2" },
  { position: "[Position]", id: "partner-3" },
  { position: "[Position]", id: "partner-4" },
  { position: "[Position]", id: "partner-5" },
  { position: "[Position]", id: "partner-6" },
  { position: "[Position]", id: "partner-7" },
  { position: "[Position]", id: "partner-8" },
  { position: "[Position]", id: "partner-9" },
].map((m) => ({
  id: m.id,
  name: "[Name]",
  position: m.position,
  bio: "",
  image: { src: `/images/management/${m.id}.webp`, alt: "[Name]" },
  group: "Management" as const,
}));

const principal: FacultyMember = {
  id: "principal",
  name: "[Principal Name]",
  position: "Principal",
  bio: "[A short message from the Principal to parents and students.]",
  image: { src: "/images/faculty/principal.webp", alt: "[Principal Name]" },
  group: "Principal",
};

// Faculty — add one entry per teacher. "position" is the subject or role.
const teachers: FacultyMember[] = [
  { id: "vice-principal", position: "Vice Principal" },
  { id: "teacher-1", position: "[Subject]" },
  { id: "teacher-2", position: "[Subject]" },
  { id: "teacher-3", position: "[Subject]" },
  { id: "teacher-4", position: "[Subject]" },
  { id: "teacher-5", position: "[Subject]" },
  { id: "teacher-6", position: "[Subject]" },
  { id: "teacher-7", position: "[Subject]" },
].map((t) => ({
  id: t.id,
  name: "[Teacher Name]",
  position: t.position,
  bio: "",
  image: { src: `/images/faculty/${t.id}.webp`, alt: "[Teacher Name]" },
  group: "Faculty" as const,
}));

export const faculty: FacultyMember[] = [...management, principal, ...teachers];
