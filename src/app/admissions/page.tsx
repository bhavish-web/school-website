import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AdmissionTimeline } from "@/components/shared/AdmissionTimeline";
import { Faq } from "@/components/shared/Faq";
import { Reveal } from "@/components/ui/Reveal";
import {
  admissionSteps,
  admissionEligibility,
  admissionDocuments,
  admissionDates,
  admissionFaqs,
} from "@/lib/data/admissions";
import { school } from "@/lib/data/school";

export const metadata: Metadata = { title: "Admissions" };

export default function AdmissionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-ink)] py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
          style={{ background: "var(--gradient-flame)" }}
          aria-hidden="true"
        />
        <Container>
          <Reveal>
            <p className="font-display italic text-[var(--color-gold-bright)]">Admissions</p>
            <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.1] text-white md:text-[3.2rem]">
              A simple, guided path to joining {school.name}
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#enquiry" variant="primary">Begin Admission Enquiry</Button>
              <Button href="#prospectus" variant="ghostLight">Download Prospectus</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="font-display text-[1.9rem] text-[var(--color-ink)]">Admission Process</h2>
            <div className="mt-10">
              <AdmissionTimeline steps={admissionSteps} />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col gap-12">
            <div>
              <h3 className="font-display text-[1.3rem] text-[var(--color-ink)]">Eligibility</h3>
              <ul className="mt-4 flex flex-col gap-2 text-[0.95rem] text-[var(--color-slate)]">
                {admissionEligibility.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[1.3rem] text-[var(--color-ink)]">Required Documents</h3>
              <ul className="mt-4 flex flex-col gap-2 text-[0.95rem] text-[var(--color-slate)]">
                {admissionDocuments.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[1.3rem] text-[var(--color-ink)]">Important Dates</h3>
              <ul className="mt-4 flex flex-col gap-2 text-[0.95rem] text-[var(--color-slate)]">
                {admissionDates.map((d) => (
                  <li key={d.label} className="flex justify-between border-b border-[var(--color-line)] pb-2">
                    <span>{d.label}</span>
                    <span className="font-medium text-[var(--color-brass)]">{d.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="fees" className="bg-[var(--color-paper)] py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-[1.7rem] text-[var(--color-ink)]">Fee Structure</h2>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-[var(--color-slate)]">
              [Add the fee structure by grade once confirmed. Keep this data-driven so it can be updated each year.]
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="prospectus" className="bg-white py-20">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-[1.6rem] text-[var(--color-ink)]">Prospectus</h2>
              <p className="mt-2 max-w-md text-[0.95rem] text-[var(--color-slate)]">
                [Link the school prospectus PDF once available.]
              </p>
            </div>
            <Button href="#" variant="secondary">Download Prospectus</Button>
          </Reveal>
        </Container>
      </section>

      <section id="faqs" className="bg-[var(--color-paper)] py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-[1.7rem] text-[var(--color-ink)]">Frequently Asked Questions</h2>
            <div className="mt-8">
              <Faq items={admissionFaqs} />
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="enquiry" className="bg-[var(--color-ink)] py-20">
        <Container>
          <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-[1.8rem] text-white">Ready to begin?</h2>
              <p className="mt-2 max-w-md text-white/70">
                {school.phone} · {school.email}
              </p>
            </div>
            <Button href="/contact" variant="primary">Begin Admission Enquiry</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
