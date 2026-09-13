import { CalendarDays, Banknote, Clock, Phone, UserRound, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const actions = [
  { href: "/admissions", label: "Admissions", icon: GraduationCap },
  { href: "/academics#calendar", label: "Academic Calendar", icon: CalendarDays },
  { href: "/admissions#fees", label: "Fee Structure", icon: Banknote },
  { href: "/contact#timings", label: "School Timings", icon: Clock },
  { href: "/contact", label: "Contact", icon: Phone },
  { href: "/contact", label: "Parent Portal", icon: UserRound },
];

export function QuickActions() {
  return (
    <div className="relative z-10 -mt-10 md:-mt-12">
      <Container>
        <div className="flex gap-3 overflow-x-auto rounded-2xl bg-white p-3 shadow-[0_18px_50px_-20px_rgba(46,15,8,0.4)] md:grid md:grid-cols-6 md:gap-2 md:overflow-visible">
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <Link
                key={a.label}
                href={a.href}
                className="group flex min-w-[130px] flex-col items-center gap-2 rounded-xl px-3 py-4 text-center transition-colors duration-300 hover:bg-[var(--color-paper)] md:min-w-0"
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-[var(--color-gold)] transition-transform duration-300 group-hover:scale-125 group-hover:text-[var(--color-brass)]"
                />
                <span className="text-[0.82rem] font-medium leading-tight text-[var(--color-ink)]">
                  {a.label}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
