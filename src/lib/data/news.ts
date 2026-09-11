import { NewsItem } from "@/lib/types";

export const news: NewsItem[] = [
  {
    slug: "example-announcement",
    title: "[Announcement Title]",
    date: "[Date]",
    category: "[Category]",
    thumbnail: { src: "/images/news/example.webp", alt: "[Announcement Title]" },
    description: "[Short summary shown on news cards.]",
    body: "[Full article body. Replace with real announcement copy.]",
  },
];
