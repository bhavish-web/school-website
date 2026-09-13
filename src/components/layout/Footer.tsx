import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { school } from "@/lib/data/school";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About" },
      { href: "/academics", label: "Academics" },
      { href: "/campus", label: "Campus" },
      { href: "/student-experience", label: "Student Experience" },
    ],
  },
  {
    title: "School",
    links: [
      { href: "/events", label: "Events" },
      { href: "/gallery", label: "Gallery" },
      { href: "/mandatory-disclosure", label: "Mandatory Disclosure" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="grain-overlay bg-[var(--color-ink)] text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-20 md:grid-cols-[1.3fr_1fr_1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-11 shrink-0">
              <Image src="/images/school/logo.png" alt={`${school.name} logo`} fill className="object-contain" />
            </span>
            <span className="font-display font-medium text-[1.05rem] font-medium text-white">{school.name}</span>
          </div>
          <p className="mt-5 max-w-xs text-[0.92rem] font-light leading-relaxed">{school.tagline}</p>
          <div className="mt-7 flex gap-5 text-[0.8rem] tracking-[0.02em]">
            {school.socials.map((s) => (
              <a key={s.label} href={s.url} className="text-white/55 transition-colors hover:text-[var(--color-gold-bright)]">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/50">{col.title}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[0.9rem] text-white/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col items-start gap-3 md:justify-center">
          <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/50">Admissions</h3>
          <p className="max-w-[16rem] text-[0.9rem] text-white/80">Have a question about enrolling? We&rsquo;re happy to help.</p>
          <Button href="/contact" variant="primary">Enquire Now</Button>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-[0.8rem] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            {school.address} · {school.phone} · {school.email}
          </p>
          <p>&copy; {new Date().getFullYear()} {school.name}. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
