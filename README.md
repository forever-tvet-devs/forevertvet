# Forever TVET Institute — Official Website

Public-facing website for **Forever TVET Institute**, a nationally accredited vocational training institution located in Kigali, Rwanda. Founded in 2018, the institute provides industry-ready vocational training in heavy machinery, land survey, industrial electricity, road construction, and computer engineering.

## Tech Stack

| Layer        | Technology                                   |
| ------------ | -------------------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Language     | TypeScript 5                                 |
| Styling      | Tailwind CSS v4                              |
| Animations   | GSAP, Lenis (smooth scroll)                  |
| Rich Editor  | Tiptap (admin portal)                        |
| UI Libraries | Phosphor Icons, Lucide, Swiper, Shadcn UI    |
| Analytics    | Vercel Analytics                             |
| Package Mgr  | pnpm                                         |

## Prerequisites

- **Node.js** >= 20
- **pnpm** >= 10

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/forever-tvet-devs/forevertvet.git
cd forevertvet

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command      | Description                        |
| ------------ | ---------------------------------- |
| `pnpm dev`   | Start dev server with Turbopack    |
| `pnpm build` | Create optimised production build  |
| `pnpm start` | Serve the production build locally |
| `pnpm lint`  | Run ESLint across the codebase     |

## Project Structure

```
app/
├── (admin)/              Admin portal (protected layout)
│   └── portal/           Dashboard pages
├── about/                Our Story, Vision & Mission, Headmaster, Leadership, Partners, Accreditations
├── academics/            Curriculum, Departments, Calendar, Results
├── admissions/           How to Apply, Apply Online, Requirements, Fees, FAQs
├── school-life/          Gallery, Events, Clubs, Sports, Facilities, Virtual Tour
│   └── events/[slug]/    Dynamic event detail pages
├── news/                 News listing
│   └── [slug]/           Dynamic news article pages
├── parents/              Parents Corner
├── contact/              Contact page
├── cookies/              Cookie policy
├── privacy-policy/       Privacy policy
├── terms/                Terms of service
└── login/                Authentication

components/
├── layout/               Navbar, Footer
├── sections/             Homepage sections (Hero, Stats, Academics, Testimonials, etc.)
├── ui/                   Shared UI primitives (Icons, SmoothScroll, CookieConsent, etc.)
├── about/                About page components
├── academics/            Academics page components
├── admissions/           Admissions page components
├── admin/                Admin portal components
├── auth/                 Login form
├── contact/              Contact form
├── news/                 News grid & data
├── parents/              Parent contact form
└── school-life/          School life components & event data

public/images/            Static image assets
```

## Key Architectural Decisions

- **Static Generation** — All public pages are statically generated at build time for maximum performance.
- **Dynamic Routes** — News articles and events use `generateStaticParams` for static pre-rendering with no runtime server required.
- **Shared Data Files** — `newsData.ts` and `eventsData.ts` are plain TypeScript modules (no `"use client"` directive) so they can be imported by both server pages and client components.

## Deployment

The site is deployed on [Vercel](https://vercel.com). Pushing to the `main` branch triggers an automatic production deployment.

## License

This project is proprietary. All rights reserved.
