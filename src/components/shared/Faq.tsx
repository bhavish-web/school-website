"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FaqItem } from "@/lib/types";

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-[1.05rem] text-[var(--color-ink)]">{item.question}</span>
              <Plus
                size={20}
                className={`shrink-0 text-[var(--color-brass)] transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="pb-5 text-[0.95rem] leading-relaxed text-[var(--color-slate)]">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
