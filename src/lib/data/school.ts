import { SchoolInfo } from "@/lib/types";

// Replace every remaining bracketed value with the school's real information.
// Name, tagline, and locality below come directly from the official logo —
// everything else is a structural placeholder until verified.
export const school: SchoolInfo = {
  name: "Jyothi Model High School",
  shortName: "JMHS",
  tagline: "Education Is Light Of Life",
  philosophy:
    "[One to two sentences describing the school's educational philosophy — what it believes about how children learn and grow.]",
  establishedYear: "[Established Year]",
  studentCount: "[Student Count]",
  facultyCount: "[Faculty Count]",
  boardAffiliation: "[Board Affiliation]",
  address: "Medibavi, Secunderabad, [Full Address / Pincode]",
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
