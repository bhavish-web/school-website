import { Hero } from "@/components/home/Hero";
import { QuickActions } from "@/components/home/QuickActions";
import { AcademicsPreview } from "@/components/home/AcademicsPreview";
import { CampusPreview } from "@/components/home/CampusPreview";
import { EventsPreview } from "@/components/home/EventsPreview";
import { AdmissionsCTA } from "@/components/home/AdmissionsCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <AcademicsPreview />
      <CampusPreview />
      <EventsPreview />
      <AdmissionsCTA />
    </>
  );
}
