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
