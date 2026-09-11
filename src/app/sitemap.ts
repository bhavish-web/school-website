import type { MetadataRoute } from "next";
import { events } from "@/lib/data/events";

const base = "https://example.com"; // replace with the school's real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "", "/about", "/academics", "/campus", "/student-life", "/achievements",
    "/admissions", "/news", "/events", "/gallery", "/contact",
    "/mandatory-disclosure", "/privacy-policy",
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));

  const eventRoutes = events.map((e) => ({
    url: `${base}/events/${e.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...eventRoutes];
}
