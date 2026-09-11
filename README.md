# School Website — Design System & Starter Build

A premium, data-driven school website built with **Next.js 16 (App Router)
+ TypeScript + Tailwind CSS v4 + Framer Motion**. Content and the visual
system are fully separated from the UI, so you (or anyone) can replace
text, images, and the logo later without touching any component code.

This is phase one of the brief: the design system, content architecture,
component library, and the highest-priority pages are built and working.
See "What's built vs. what's next" below for exactly what's left.

---

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
```

Requires Node 18+.

---

## How to add your real content (no code changes needed)

All real-world content lives in `/src/lib/data/*.ts`. Edit these files —
never the `.tsx` component files — to update the site:

| File | Controls |
|---|---|
| `school.ts` | Name, tagline, philosophy, contact info, stats |
| `pillars.ts` | The "Educational Philosophy" pillars (3-5) |
| `academics.ts` | Pre-Primary / Primary / Middle / Senior Secondary content |
| `facilities.ts` | Campus facilities shown on the Campus page |
| `events.ts` | Add a new event by adding one object to the array — a new page at `/events/your-slug` is created automatically |
| `news.ts` | Announcements/news list |
| `achievements.ts` | Student/school achievements |
| `testimonials.ts` | Parent / student / alumni quotes — never fabricate these |
| `faculty.ts` | Leadership & faculty profiles |
| `gallery.ts` | Categorized gallery images |
| `admissions.ts` | Admission steps, eligibility, documents, dates, FAQs |

Every bracketed value like `[School Name]` or `[Event Title]` is a
placeholder — replace it with the real information. Nothing in this
project was invented as fact; all statistics, achievements, testimonials,
and claims are placeholders until you supply verified content.

## How to add real photographs

Drop image files into the matching folder under `/public/images/` using
the exact filename referenced in the relevant data file (or edit the
`src` path in the data file to match your filename):

```
/public/images/
  school/        hero, about, wide shots, social-share cover image
  campus/        facilities
  academics/     one photo per academic stage
  events/        event cover + gallery photos
  achievements/  one photo per achievement
  student-life/  sports, arts, clubs, service
  faculty/       staff portraits
  gallery/       general gallery, organized by category
  news/          news thumbnails
```

Until a real file exists at a given path, the site automatically shows a
tasteful placeholder instead of a broken image — the `Media` component
(`/src/components/ui/Media.tsx`) detects the missing file and renders a
branded placeholder box with the image's caption. Nothing breaks, and no
component change is required when you add the real photo.

Recommended: WebP or AVIF, under ~300KB, consistent aspect ratio within
each section.

## How to add the official logo

The site currently uses a text mark (the school's initials in a circle)
in the navbar and footer as a placeholder. Once you provide the logo:

1. Add the file at `/public/images/school/logo.svg` (or `.png`).
2. In `/src/components/layout/Navbar.tsx` and `Footer.tsx`, replace the
   `<span>` initials mark with an `<Image src="/images/school/logo.svg" />`.
3. Re-derive the color tokens in `/src/app/globals.css` (see below) from
   the logo's actual colors.

Do not regenerate or re-color the logo itself — use it exactly as supplied.

## Design system / color tokens

All colors, fonts, and spacing are defined once as CSS variables in
`/src/app/globals.css` under `:root`. Every component reads color through
these variables, so changing a hex value there re-themes the entire site:

```
--color-ink:    #14213D;  /* primary - nav, dark section bands */
--color-brass:  #A9812F;  /* accent - CTAs, highlights */
--color-forest: #2F4739;  /* secondary accent */
--color-paper:  #F6F4EE;  /* warm off-white section background */
```

These are provisional, chosen to read as trustworthy and premium without
the school's actual brand colors. Once the logo is supplied, update these
six values and the whole site re-themes automatically — no component
touches a hardcoded color.

Typography: Fraunces (display serif, headlines) + Inter (body/UI),
self-hosted via @fontsource so there's no external font request.

---

## What's built vs. what's next

Built and working:
- Design system (color tokens, type scale, spacing, buttons, cards)
- Full data-driven content architecture (11 typed data files)
- Placeholder-safe image system (Media component)
- Homepage (Hero, Quick Actions, Intro, Philosophy, Academics, Campus,
  Student Life, Achievements, Admissions CTA, News/Events, Testimonials)
- Dedicated pages: About, Academics, Campus, Student Life, Achievements,
  Admissions (with process timeline + FAQ accordion), Events (list +
  detail template with gallery/lightbox), News, Gallery (category filter
  + lightbox), Contact (with map slot + enquiry form), Mandatory
  Disclosure, Privacy Policy
- Responsive nav with full-screen mobile menu
- SEO: per-page metadata, sitemap.ts, robots.ts, School JSON-LD
  structured data
- Accessibility basics: semantic HTML, visible focus states, alt text on
  every image, prefers-reduced-motion respected, keyboard-navigable
  lightbox and mobile menu
- Production build verified clean (0 errors, 0 lint warnings)

Recommended next steps (not yet built, in priority order):
1. Real content pass — replace every bracketed placeholder in
   /src/lib/data/ with verified school information.
2. Real photography — populate /public/images/.
3. Official logo integration (see above) and a final re-theme of the
   color tokens to match it.
4. A dedicated Faculty/Leadership page beyond the About page's leadership
   block, once faculty data is ready.
5. Results/Outcomes page — only build this once real board results or
   verified outcomes exist to show.
6. Cross-browser/device visual QA pass and Lighthouse audit once real
   images are in place (placeholders keep bundle size artificially low
   right now, so performance numbers will shift with real photography).
7. Wire the contact form to an actual email/CRM endpoint.

---

## Project structure

```
src/
  app/                 routes (App Router) - one folder per page
  components/
    ui/                Button, Container, SectionHeader, Media (primitives)
    layout/            Navbar, Footer
    home/              Homepage-only sections
    shared/            Cards, Gallery, FAQ, AdmissionTimeline - reused across pages
  lib/
    data/              All real-world content - edit these files
    types.ts           Shared TypeScript types for every content shape
public/
  images/              Photo folders, one per section - see README.md inside
```
