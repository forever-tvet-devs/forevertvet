# Forever Tvet Institute — Website

Public-facing website for **Forever Tvet Institute**, a nationally accredited vocational training school in Kigali, Rwanda.

## Stack

- **Next.js 16** — App Router, Turbopack, static generation
- **Tailwind CSS v4** — utility-first styling
- **TypeScript**
- **yet-another-react-lightbox** — gallery lightbox

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build    # production build (51 static pages)
pnpm start    # serve production build
```

## Structure

```
app/
  about/                  Our Story, Vision, Headmaster, Staff, Accreditations
  academics/              Curriculum, Departments, Calendar, Results
  admissions/             How to Apply, Apply Online, Requirements, Fees, FAQs
  school-life/            Gallery, Events, Clubs, Sports, Facilities, Virtual Tour
    events/[slug]/        Dynamic event detail pages
  news/[slug]/            Dynamic news article pages
  parents/                Parents Corner
  contact/
  login/

components/
  layout/                 Navbar, Footer
  sections/               Homepage sections
  ui/                     AnimatedText, FadeInBlur, Icons
  news/newsData.ts        All news articles (shared data — no "use client")
  school-life/eventsData.ts  All calendar events (shared data)
  auth/LoginForm.tsx

public/images/            Static assets
```

## Notes

- All 51 pages are statically generated at build time.
- Dynamic routes use `generateStaticParams` — no server required at runtime.
- Shared data files (`newsData.ts`, `eventsData.ts`) are plain TypeScript with no directives, importable by both server pages and client components.
