import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { news } from "@/lib/data/news";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-24 md:py-32">
        <Container>
          <p className="font-display italic text-[var(--color-brass-light)]">News</p>
          <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] leading-[1.1] text-white md:text-[3.2rem]">
            Announcements & updates
          </h1>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container className="max-w-3xl">
          <div className="flex flex-col">
            {news.map((n) => (
              <article key={n.slug} className="flex gap-6 border-b border-[var(--color-line)] py-8 first:pt-0 last:border-0">
                <div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-lg">
                  <Media src={n.thumbnail.src} alt={n.thumbnail.alt} />
                </div>
                <div>
                  <span className="text-[0.8rem] font-medium text-[var(--color-brass)]">
                    {n.category} · {n.date}
                  </span>
                  <h2 className="mt-1 font-display text-[1.25rem] text-[var(--color-ink)]">{n.title}</h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--color-slate)]">{n.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
