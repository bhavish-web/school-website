import { SchoolInfo } from "@/lib/types";

// Replace every bracketed value with the school's real information.
// Nothing here is fabricated — these are structural placeholders only.
export const school: SchoolInfo = {
  name: "[School Name]",
  shortName: "[Short Name]",
  tagline: "[School Tagline]",
  philosophy:
    "[One to two sentences describing the school's educational philosophy — what it believes about how children learn and grow.]",
  establishedYear: "[Established Year]",
  studentCount: "[Student Count]",
  facultyCount: "[Faculty Count]",
  boardAffiliation: "[Board Affiliation]",
  address: "[School Address]",
  phone: "[Phone Number]",
  whatsapp: null,
  email: "[Email Address]",
  officeHours: "[Office Timings, e.g. Mon–Sat, 8:30 AM – 4:00 PM]",
  mapEmbedUrl: null,
  mapUrl: null,
  socials: [
    { label: "Instagram", url: "#" },
    { label: "Facebook", url: "#" },
    { label: "YouTube", url: "#" },
  ],
  stats: [
    { label: "Years of Excellence", value: "[XX+]" },
    { label: "Students", value: "[XXXX+]" },
    { label: "Faculty Members", value: "[XX+]" },
    { label: "Achievements", value: "[XX+]" },
  ],
};
