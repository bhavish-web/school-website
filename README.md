# Jyothi Model High School — Website

A premium, data-driven school website for **Jyothi Model High School**
(Medibavi, Secunderabad), built with **Next.js 16 (App Router) +
TypeScript + Tailwind CSS v4 + Framer Motion**. The color system is
derived from the official school logo, and content is fully separated
from the UI, so anyone can replace text and images later without
touching component code.

This is phase one of the brief: the design system, content architecture,
component library, logo integration, and the highest-priority pages are
built and working. See "What's built vs. what's next" below for exactly
what's left.

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

The official Jyothi Model High School logo is already wired in — it lives
at `/public/images/school/logo.png` (background removed so it drops
cleanly onto both light and dark sections) and renders in the navbar,
footer, and favicon. `/public/images/school/logo-original.png` keeps the
untouched original file for reference.

If you ever need to swap in an updated version of the logo, just replace
`logo.png` with the new file (same filename) — no component changes
needed. To regenerate the favicon from a new logo:
```bash
python3 -c "
from PIL import Image
img = Image.open('public/images/school/logo.png').convert('RGBA')
img.save('src/app/favicon.ico', sizes=[(s,s) for s in (16,32,48,64,128,256)])
"
```

## Design system / color tokens

All colors, fonts, and spacing are defined once as CSS variables in
`/src/app/globals.css` under `:root`. Every component reads color through
these variables, so changing a hex value there re-themes the entire site:

```
--color-ink:    #3A1B12;  /* primary — nav overlay, dark section bands (diya-bowl maroon) */
--color-brass:  #C81E1E;  /* accent — CTAs, primary actions (logo red) */
--color-gold:   #D99A26;  /* icons, category labels, secondary highlights (logo marigold/flame) */
--color-forest: #7C9A2E;  /* secondary accent — variety (logo olive ring) */
--color-paper:  #FBF5E9;  /* warm cream section background (logo inner yellow, softened) */
```

These are derived directly from the official logo's four dominant colors
— the red ring, olive-green ring, marigold/orange flame, and the deep
maroon of the diya bowl. If the logo is ever refreshed, re-sample these
values from the new file and the whole site re-themes automatically —
no component touches a hardcoded color.

Typography: Fraunces (display serif, headlines) + Inter (body/UI),
self-hosted via @fontsource so there's no external font request.

---

## What's built vs. what's next

Built and working:
- Design system (color tokens, type scale, spacing, buttons, cards)
  derived from the official logo
- Official logo integrated into navbar, footer, and favicon (background
  removed for a clean drop onto both light and dark sections)
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
   /src/lib/data/ with verified school information (full address, phone,
   email, established year, student/faculty counts, board affiliation).
2. Real photography — populate /public/images/.
3. A dedicated Faculty/Leadership page beyond the About page's leadership
   block, once faculty data is ready.
4. Results/Outcomes page — only build this once real board results or
   verified outcomes exist to show.
5. Cross-browser/device visual QA pass and Lighthouse audit once real
   images are in place (placeholders keep bundle size artificially low
   right now, so performance numbers will shift with real photography).
6. Wire the contact form to an actual email/CRM endpoint.

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
