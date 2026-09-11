import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Mandatory Disclosure" };

const rows = [
  { label: "Name of the School", value: "[School Name]" },
  { label: "Affiliation Number", value: "[Affiliation Number]" },
  { label: "School Code", value: "[School Code]" },
  { label: "Complete Address", value: "[School Address]" },
  { label: "Principal Qualification & Experience", value: "[Principal Details]" },
  { label: "Recognition Details", value: "[Recognition Details]" },
  { label: "Land Area", value: "[Land Area]" },
  { label: "Fire Safety Certificate", value: "[Certificate Reference]" },
  { label: "Building Safety Certificate", value: "[Certificate Reference]" },
  { label: "Water, Health & Sanitation Certificate", value: "[Certificate Reference]" },
];

export default function MandatoryDisclosurePage() {
  return (
    <section className="bg-white py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-[2.2rem] text-[var(--color-ink)]">Mandatory Disclosure</h1>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--color-slate)]">
          [This page will list the school&rsquo;s mandatory public disclosure information as required
          by the affiliating board, once the verified details and supporting documents are provided.]
        </p>
        <dl className="mt-10 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_1.2fr] sm:gap-4">
              <dt className="text-[0.9rem] font-medium text-[var(--color-ink)]">{r.label}</dt>
              <dd className="text-[0.9rem] text-[var(--color-slate)]">{r.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
