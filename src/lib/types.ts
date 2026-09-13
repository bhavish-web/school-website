// Shared content types.
// These shapes are the contract between /lib/data (content) and the
// UI components. Populate real data by editing the files in /lib/data —
// never inside a component.

export type ImageRef = {
  src: string;
  alt: string;
};

export type SchoolInfo = {
  name: string;
  shortName: string;
  tagline: string;
  philosophy: string; // 1-2 sentence description of educational philosophy
  establishedYear: string | null;
  studentCount: string | null;
  facultyCount: string | null;
  boardAffiliation: string | null;
  address: string;
  phone: string;
  whatsapp: string | null;
  email: string;
  officeHours: string;
  mapEmbedUrl: string | null;
  mapUrl: string | null;
  socials: { label: string; url: string }[];
};

export type AcademicStage = {
  id: string;
  stage: string; // e.g. "Primary"
  ageRange: string;
  description: string;
  focusAreas: string[];
  image: ImageRef;
};

export type Facility = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: ImageRef;
};

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  fullDescription: string;
  image: ImageRef;
  gallery: ImageRef[];
  location: string | null;
  cta: { label: string; href: string } | null;
};

export type FacultyMember = {
  id: string;
  name: string;
  position: string;
  qualification: string;
  bio: string;
  image: ImageRef;
  group: "Leadership" | "Academic Leadership" | "Faculty";
};

export type GalleryImage = {
  id: string;
  category: "Campus" | "Academics" | "Sports" | "Events" | "Celebrations" | "Student Life" | "Competitions";
  image: ImageRef;
};
