# Lele Matoos Website

Landing page for Lele Matoos (tattoo artist) built with Next.js + TypeScript + Tailwind.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Scripts
- `npm run dev` - start local dev server
- `npm run build` - build for Cloudflare Workers (OpenNext)
- `npm run build:next` - regular Next.js build (Node runtime, optional)
- `npm run preview` - preview Cloudflare worker locally
- `npm run cf:dev` - run Wrangler dev server for built worker
- `npm run deploy` - deploy to Cloudflare Workers (requires previous OpenNext build)
- `npm run deploy:full` - build + deploy to Cloudflare Workers
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
npm run build
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
- If a CI pipeline is still calling `npx @cloudflare/next-on-pages@1`, remove that step and use `npm run build` + `npm run deploy`.
- Do not use only `npx wrangler versions upload` without running the OpenNext build first, because `.open-next/worker.js` will not exist.

### Cloudflare Workers dashboard commands
- Build command: `npm run build`
- Deploy command: `npm run deploy`

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

## Sanity CMS
Studio route in this app:
- `/admin` (light redirect only)

Studio source/config folder:
- `studio-lele-matos-site/`

Configured Sanity project:
- `projectId: qtnabn6i`
- `datasets (Studio workspaces): production, homolog`

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
1. Configure `SANITY_STUDIO_URL` with your external Studio URL.
2. Keep the public project settings (`NEXT_PUBLIC_SANITY_*`) aligned with your Sanity project.
3. `SANITY_FALLBACK_MODE=off` uses Sanity as source of truth; set `on` to enable local mock fallback.

Studio workspaces URLs:
- Production workspace: `https://lelematoos.sanity.studio/production`
- Homolog workspace: `https://lelematoos.sanity.studio/homolog`

Cloudflare environment setup (recommended):
- Production environment:
  - `SANITY_STUDIO_URL=https://lelematoos.sanity.studio/production`
  - `NEXT_PUBLIC_SANITY_DATASET=production`
- Homolog/Preview environment:
  - `SANITY_STUDIO_URL=https://lelematoos.sanity.studio/homolog`
  - `NEXT_PUBLIC_SANITY_DATASET=homolog`
