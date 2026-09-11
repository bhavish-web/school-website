import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { school } from "@/lib/data/school";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About" },
      { href: "/academics", label: "Academics" },
      { href: "/campus", label: "Campus" },
      { href: "/achievements", label: "Achievements" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { href: "/admissions", label: "Admission Process" },
      { href: "/admissions#fees", label: "Fee Structure" },
      { href: "/admissions#faqs", label: "FAQs" },
      { href: "/contact", label: "Contact Admissions" },
    ],
  },
  {
    title: "School",
    links: [
      { href: "/news", label: "News & Announcements" },
      { href: "/gallery", label: "Gallery" },
      { href: "/mandatory-disclosure", label: "Mandatory Disclosure" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 font-display text-[1.05rem] text-white">
              {school.shortName?.slice(0, 2) || "SL"}
            </span>
            <span className="font-display text-[1.1rem] text-white">{school.name}</span>
          </div>
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed">{school.tagline}</p>
          <div className="mt-6 flex gap-4 text-[0.85rem]">
            {school.socials.map((s) => (
              <a key={s.label} href={s.url} className="text-white/60 hover:text-white">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-[1.05rem] text-white">{col.title}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[0.92rem] hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-[0.82rem] md:flex-row md:items-center md:justify-between">
          <p>
            {school.address} · {school.phone} · {school.email}
          </p>
          <p>&copy; {new Date().getFullYear()} {school.name}. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
