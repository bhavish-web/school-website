import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { school } from "@/lib/data/school";

export const metadata: Metadata = {
  title: {
    default: `${school.name} — ${school.tagline}`,
    template: `%s — ${school.name}`,
  },
  description: school.philosophy,
  openGraph: {
    title: school.name,
    description: school.philosophy,
    type: "website",
    images: ["/images/school/og-cover.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "School",
    name: school.name,
    description: school.philosophy,
    address: school.address,
    telephone: school.phone,
    email: school.email,
  };

  return (
    <html lang="en">
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
