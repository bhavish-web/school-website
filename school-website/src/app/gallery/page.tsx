import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages } from "@/lib/data/gallery";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <section className="grain-overlay bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="eyebrow text-[var(--color-gold-bright)]">Gallery</p>
            <h1 className="heading-tight mt-4 max-w-2xl font-display font-medium text-[2.4rem] font-medium leading-[1.12] text-white md:text-[3.4rem]">
              A look inside our school
            </h1>
          </Reveal>
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
