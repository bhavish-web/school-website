import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { school } from "@/lib/data/school";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="font-display italic text-[var(--color-gold-bright)]">Contact</p>
            <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.1] text-white md:text-[3.2rem]">
              We&rsquo;d love to hear from you
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MapPin size={22} className="mt-1 shrink-0 text-[var(--color-gold)]" />
                <div>
                  <p className="font-medium text-[var(--color-ink)]">Address</p>
                  <p className="text-[0.95rem] text-[var(--color-slate)]">{school.address}</p>
                  <Button href={school.mapUrl ?? "#"} variant="ghost" className="mt-1">Get Directions</Button>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={22} className="mt-1 shrink-0 text-[var(--color-gold)]" />
                <div>
                  <p className="font-medium text-[var(--color-ink)]">Phone</p>
                  <p className="text-[0.95rem] text-[var(--color-slate)]">{school.phone}</p>
                  <Button href={`tel:${school.phone}`} variant="ghost" className="mt-1">Call School</Button>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={22} className="mt-1 shrink-0 text-[var(--color-gold)]" />
                <div>
                  <p className="font-medium text-[var(--color-ink)]">Email</p>
                  <p className="text-[0.95rem] text-[var(--color-slate)]">{school.email}</p>
                  <Button href={`mailto:${school.email}`} variant="ghost" className="mt-1">Email School</Button>
                </div>
              </li>
              {school.whatsapp && (
                <li className="flex gap-4">
                  <MessageCircle size={22} className="mt-1 shrink-0 text-[var(--color-gold)]" />
                  <div>
                    <p className="font-medium text-[var(--color-ink)]">WhatsApp</p>
                    <Button href={`https://wa.me/${school.whatsapp}`} variant="ghost" className="mt-1">WhatsApp Us</Button>
                  </div>
                </li>
              )}
              <li id="timings" className="flex gap-4">
                <Clock size={22} className="mt-1 shrink-0 text-[var(--color-gold)]" />
                <div>
                  <p className="font-medium text-[var(--color-ink)]">Office Timings</p>
                  <p className="text-[0.95rem] text-[var(--color-slate)]">{school.officeHours}</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.12} className="overflow-hidden rounded-2xl bg-[var(--color-paper)]">
            {school.mapEmbedUrl ? (
              <iframe
                src={school.mapEmbedUrl}
                className="h-full min-h-[360px] w-full border-0"
                loading="lazy"
                title="School location map"
              />
            ) : (
              <div className="flex min-h-[360px] flex-col items-center justify-center gap-2 p-8 text-center">
                <MapPin size={26} className="text-[var(--color-ink)]/25" strokeWidth={1.5} />
                <p className="text-[0.9rem] text-[var(--color-slate)]">
                  [Google Maps embed will appear here once the school address is confirmed.]
                </p>
              </div>
            )}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
