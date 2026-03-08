# Lele Matoos Website

Landing page for Lele Matoos (tattoo artist) built with Next.js + TypeScript + Tailwind.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Scripts
- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - run production build
- `npm run lint` - lint project
- `npm run sanity:dev` - run Sanity Studio
- `npm run sanity:build` - build Sanity Studio
- `npm run sanity:deploy` - deploy Sanity Studio

## Run locally
1. Install dependencies:
```bash
npm install
```
2. Start development:
```bash
npm run dev
```
3. Open `http://localhost:3000`

## Project structure
```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  data/
    site.ts
    flashes.ts
    portfolio.ts
    process.ts
  lib/
    sectionStyles.ts
    whatsapp.ts
  types/
    site.ts
```

## Content updates (no layout changes)
Edit only:
- `src/data/site.ts`
- `src/data/flashes.ts`
- `src/data/portfolio.ts`
- `src/data/process.ts`

## Visual/style updates
- Global spacing rhythm: `src/lib/sectionStyles.ts`
- Reusable UI style: `src/components/ui/*`
- Tattoo SVGs/icons: `src/components/ui/TattooIcons.tsx`

## Header behavior
- Desktop: full visible navigation
- Mobile: compact fixed header with menu button and expandable menu

## Sanity CMS (initial setup)
Studio is embedded in this Next.js app at:
- `/admin`

Studio source/config folder:
- `studio-lele-matos-site/`

Configured Sanity project:
- `projectId: qtnabn6i`
- `dataset: production`
- `basePath: /admin`

Current schemas:
- `product`
- `category`
- `siteSettings`
- `faqItem`

Useful files:
- `studio-lele-matos-site/sanity.config.ts`
- `studio-lele-matos-site/sanity.cli.ts`
- `studio-lele-matos-site/schemaTypes/*`
- `src/app/admin/[[...tool]]/page.tsx`
- `src/lib/sanity/client.ts`
- `src/lib/sanity/queries.ts`
- `src/lib/sanity/fetchers.ts`

Environment:
1. Copy `.env.example` to `.env.local`.
2. Keep the provided Sanity values or adjust if needed.
3. `SANITY_FALLBACK_MODE=off` (default) uses Sanity as source of truth; set `local` only for temporary local fallback.
