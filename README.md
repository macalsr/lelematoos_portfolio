# Lele Matoos Website

Landing page for Lele Matoos (tattoo artist) built with Next.js + TypeScript + Tailwind.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Scripts
- `npm run dev` - start local dev server
- `npm run build` - regular Next.js build
- `npm run build:cf` - build for Cloudflare Workers (OpenNext)
- `npm run preview` - preview Cloudflare worker locally
- `npm run cf:dev` - run Wrangler dev server for built worker
- `npm run deploy` - deploy to Cloudflare Workers
- `npm run start` - run Next.js production server (Node, optional)
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

## Cloudflare Workers (OpenNext)
This project is configured to deploy on Cloudflare Workers using OpenNext.
It is **not** configured for Cloudflare Pages + `next-on-pages`.

1. Build worker assets:
```bash
npm run build:cf
```
2. Preview locally with worker runtime:
```bash
npm run preview
```
3. Deploy:
```bash
npm run deploy
```

Important:
- In Cloudflare, create/use a **Workers** project (not Pages).
- If a CI pipeline is still calling `npx @cloudflare/next-on-pages@1`, remove that step and use `npm run build:cf` + `npm run deploy` (or `npm run deploy:workers`).

Main config files:
- `open-next.config.ts`
- `wrangler.jsonc`

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
3. `SANITY_FALLBACK_MODE=off` uses Sanity as source of truth; set `on` to enable local mock fallback.
