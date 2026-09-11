import { Hero } from "@/components/home/Hero";
import { QuickActions } from "@/components/home/QuickActions";
import { Intro } from "@/components/home/Intro";
import { Philosophy } from "@/components/home/Philosophy";
import { AcademicsPreview } from "@/components/home/AcademicsPreview";
import { CampusPreview } from "@/components/home/CampusPreview";
import { StudentLife } from "@/components/home/StudentLife";
import { AchievementsPreview } from "@/components/home/AchievementsPreview";
import { AdmissionsCTA } from "@/components/home/AdmissionsCTA";
import { NewsEventsPreview } from "@/components/home/NewsEventsPreview";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <Intro />
      <Philosophy />
      <AcademicsPreview />
      <CampusPreview />
      <StudentLife />
      <AchievementsPreview />
      <AdmissionsCTA />
      <NewsEventsPreview />
      <Testimonials />
    </>
  );
}
