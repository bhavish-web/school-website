"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { school } from "@/lib/data/school";

const links = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/campus", label: "Campus" },
  { href: "/student-life", label: "Student Life" },
  { href: "/achievements", label: "Achievements" },
  { href: "/admissions", label: "Admissions" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-[0_1px_0_0_var(--color-line)]" : "bg-white/0"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${school.name} — home`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-ink)]/15 bg-white font-display text-[1.05rem] text-[var(--color-ink)]">
            {school.shortName?.slice(0, 2) || "SL"}
          </span>
          <span className="hidden font-display text-[1.1rem] leading-tight text-[var(--color-ink)] sm:block">
            {school.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.95rem] font-medium text-[var(--color-ink)]/75 transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/admissions" variant="primary">
            Apply Now
          </Button>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-ink)] lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </Container>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-ink)] text-white lg:hidden">
          <Container className="flex h-20 items-center justify-between">
            <span className="font-display text-[1.1rem]">{school.name}</span>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </Container>
          <nav className="flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-[1.6rem] text-white/90 transition-colors hover:text-[var(--color-brass-light)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Container className="pb-10">
            <Button href="/admissions" variant="primary" className="w-full" onClick={() => setOpen(false)}>
              Apply Now
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
