import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { galleryImages } from "@/lib/data/gallery";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <p className="font-display italic text-[var(--color-brass-light)]">Gallery</p>
          <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.1] text-white md:text-[3.2rem]">
            A look inside our school
          </h1>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <GalleryGrid images={galleryImages} />
        </Container>
      </section>
    </>
  );
}
