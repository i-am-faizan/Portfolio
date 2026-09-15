# Software Engineer Portfolio

A premium, animation-driven portfolio built with Next.js 14, TypeScript,
Tailwind CSS, and Framer Motion — inspired by the visual and motion
language of a reference chatbot landing page, reinterpreted for a
software engineer's work.

## Getting started

Dependencies are **not** included in this zip. Install them yourself:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Making it yours

All editable content lives in `/data`, separate from the components:

- `data/profile.ts` — name, title, tagline, philosophy
- `data/skills.ts` — skill categories and chips
- `data/projects.ts` — project showcase cards
- `data/experience.ts` — work timeline
- `data/education.ts` — degrees and certifications
- `data/social.ts` — GitHub / LinkedIn / X / email links
- `data/faq.ts` — the "working together" accordion
- `data/repos.ts` — GitHub activity cards (placeholder — wire up the
  GitHub REST API at `/users/{username}/repos` to make this live)

Update these files and every section updates automatically — no need
to touch component code.

## Design system

- **Layout**: the whole site sits inside a large rounded "canvas" frame
  (`app/page.tsx`), inset from the viewport edge, echoing the reference's
  floating-card presentation.
- **Color**: deep void background (`#07060d`) outside the frame, an
  off-white surface (`#faf9f7`) for light sections, and a violet/navy
  gradient (`bg-violet-fade`) for dark sections — defined in
  `tailwind.config.ts`.
- **Type**: Space Grotesk for display/headings, Inter for body copy,
  JetBrains Mono for code and small technical labels — loaded via
  `next/font/google` in `app/layout.tsx`.
- **Motion**: Lenis powers buttery smooth scrolling
  (`components/animations/SmoothScroll.tsx`). Section headings use a
  signature blur-to-sharp word reveal (`RevealText`); cards fade/stagger
  into view (`FadeIn`, `StaggerGroup`); buttons have a subtle magnetic
  pull (`Magnetic`); project cards tilt gently with the cursor. All
  motion respects `prefers-reduced-motion`.

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/
  nav/          Navbar
  sections/     One file per page section
  ui/           Buttons, badges, cards, decorative SVG backgrounds
  animations/   Reusable motion primitives
data/           All portfolio content, separate from UI
lib/            Small helpers (SVG path generation for the wave/topo art)
```
