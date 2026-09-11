"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { GalleryImage } from "@/lib/types";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [category, setCategory] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(images.map((i) => i.category)))];
  const filtered = category === "All" ? images : images.filter((i) => i.category === category);

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-4 py-1.5 text-[0.85rem] transition-colors ${
              category === c
                ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white"
                : "border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-ink)]/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl"
          >
            <div className="relative aspect-square w-full">
              <Media src={img.image.src} alt={img.image.alt} />
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
          }}
        >
          <button onClick={close} aria-label="Close" className="absolute right-5 top-5 text-white/80 hover:text-white">
            <X size={28} />
          </button>
          <button onClick={prev} aria-label="Previous image" className="absolute left-4 text-white/80 hover:text-white md:left-8">
            <ChevronLeft size={32} />
          </button>
          <div className="relative aspect-[4/3] w-full max-w-3xl">
            <Media src={filtered[activeIndex].image.src} alt={filtered[activeIndex].image.alt} tone="ink" />
          </div>
          <button onClick={next} aria-label="Next image" className="absolute right-4 text-white/80 hover:text-white md:right-8">
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
