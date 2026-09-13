import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <h1 className="font-display font-medium text-[2.2rem] text-[var(--color-ink)]">Privacy Policy</h1>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--color-slate)]">
            [Add the school&rsquo;s privacy policy and terms of use here once drafted or reviewed by the school&rsquo;s administration.]
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
