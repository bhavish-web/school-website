"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ImageAlt } from "./PlaceholderArt";

/**
 * Media renders a real photograph once one exists at `src`.
 * Until then (or if the file 404s), it falls back to a tasteful,
 * on-brand placeholder — never a broken-image icon — so the layout
 * always looks finished. Drop a file at the referenced path in
 * /public/images/... and it will appear automatically; no component
 * changes required.
 */
export function Media({
  src,
  alt,
  className,
  tone = "paper",
  fill = true,
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  tone?: "paper" | "ink";
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={clsx(
          "relative flex h-full w-full items-center justify-center overflow-hidden",
          tone === "paper" ? "bg-[var(--color-paper)]" : "bg-[var(--color-ink-2)]",
          className
        )}
      >
        <PlaceholderPattern tone={tone} />
        <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
          <ImageAlt className={tone === "paper" ? "text-[var(--color-ink)]/25" : "text-white/25"} />
          <span
            className={clsx(
              "font-body text-[0.8rem] leading-snug",
              tone === "paper" ? "text-[var(--color-slate)]" : "text-white/55"
            )}
          >
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={clsx("object-cover", className)}
      onError={() => setErrored(true)}
    />
  );
}

function PlaceholderPattern({ tone }: { tone: "paper" | "ink" }) {
  const stroke = tone === "paper" ? "rgba(20,33,61,0.08)" : "rgba(255,255,255,0.06)";
  return (
    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
      <defs>
        <pattern id={`grid-${tone}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke={stroke} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#grid-${tone})`} />
    </svg>
  );
}
