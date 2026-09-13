"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-[0_1px_0_0_var(--color-line)]" : "bg-white/0"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${school.name} — home`}>
          <span className="relative h-12 w-12 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image src="/images/school/logo.png" alt={`${school.name} logo`} fill className="object-contain" priority />
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
              className="group relative text-[0.95rem] font-medium text-[var(--color-ink)]/75 transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[var(--color-brass)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Enquire Now
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-ink)] text-white lg:hidden"
          >
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
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 font-display text-[1.6rem] text-white/90 transition-colors hover:text-[var(--color-gold-bright)]"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Container className="pb-10">
              <Button href="/contact" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Enquire Now
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
