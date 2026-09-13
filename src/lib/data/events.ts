import { EventItem } from "@/lib/types";

// Add a new event by adding an object to this array — no component
// changes required. Replace this example with real events.
export const events: EventItem[] = [
  {
    slug: "example-event",
    title: "[Event Title]",
    date: "[Event Date]",
    category: "[Category]",
    description: "[One-line summary shown on event cards.]",
    fullDescription:
      "[Full event description shown on the event detail page. Replace with real event copy.]",
    image: { src: "/images/events/example-event.webp", alt: "[Event Title]" },
    gallery: [
      { src: "/images/events/example-event-1.webp", alt: "[Event photo]" },
      { src: "/images/events/example-event-2.webp", alt: "[Event photo]" },
      { src: "/images/events/example-event-3.webp", alt: "[Event photo]" },
    ],
    location: "[Venue]",
    cta: null,
  },
];
