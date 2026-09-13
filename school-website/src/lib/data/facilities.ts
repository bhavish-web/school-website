import { Facility } from "@/lib/types";

// Only list facilities that genuinely exist on campus.
export const facilities: Facility[] = [
  { id: "classrooms", name: "Classrooms", category: "Learning", description: "[Short description of classroom environment.]", image: { src: "/images/campus/classrooms.webp", alt: "[Classrooms]" } },
  { id: "science-labs", name: "Science Labs", category: "Learning", description: "[Short description of science lab facilities.]", image: { src: "/images/campus/science-labs.webp", alt: "[Science Labs]" } },
  { id: "computer-labs", name: "Computer Labs", category: "Learning", description: "[Short description of computer lab facilities.]", image: { src: "/images/campus/computer-labs.webp", alt: "[Computer Labs]" } },
  { id: "library", name: "Library", category: "Learning", description: "[Short description of the library and its collection.]", image: { src: "/images/campus/library.webp", alt: "[Library]" } },
  { id: "sports", name: "Sports Facilities", category: "Sports & Wellness", description: "[Short description of sports grounds and facilities.]", image: { src: "/images/campus/sports.webp", alt: "[Sports Facilities]" } },
  { id: "auditorium", name: "Auditorium", category: "Arts & Culture", description: "[Short description of the auditorium.]", image: { src: "/images/campus/auditorium.webp", alt: "[Auditorium]" } },
  { id: "art-studio", name: "Art Studio", category: "Arts & Culture", description: "[Short description of the art facilities.]", image: { src: "/images/campus/art.webp", alt: "[Art Studio]" } },
  { id: "music-room", name: "Music Room", category: "Arts & Culture", description: "[Short description of the music facilities.]", image: { src: "/images/campus/music.webp", alt: "[Music Room]" } },
  { id: "transport", name: "Transportation", category: "Support Services", description: "[Short description of transport routes and safety measures.]", image: { src: "/images/campus/transport.webp", alt: "[Transportation]" } },
  { id: "cafeteria", name: "Cafeteria", category: "Support Services", description: "[Short description of dining facilities.]", image: { src: "/images/campus/cafeteria.webp", alt: "[Cafeteria]" } },
  { id: "security", name: "Campus Security", category: "Support Services", description: "[Short description of security and safety measures.]", image: { src: "/images/campus/security.webp", alt: "[Campus Security]" } },
];
