"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { school } from "@/lib/data/school";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Media
          src="/images/school/hero.webp"
          alt="[Hero photograph of the school campus or students]"
          tone="ink"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/70 to-[var(--color-ink)]/20" />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
        style={{ background: "var(--gradient-flame)" }}
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[80vh] flex-col justify-end gap-8 pb-16 pt-28 sm:gap-10 sm:pb-20 sm:pt-32 md:min-h-[92vh] md:pb-28 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-[1.05rem] italic text-[var(--color-gold-bright)]">
            {school.name}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-display text-[2.6rem] leading-[1.08] text-white md:text-[4.2rem]"
        >
          {school.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-[1.1rem] leading-relaxed text-white/80"
        >
          {school.philosophy}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-5"
        >
          <Button href="/contact" variant="primary">
            Enquire About Admissions
          </Button>
          <Button href="/about" variant="ghostLight">
            Discover Our School
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
