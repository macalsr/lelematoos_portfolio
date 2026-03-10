# Lele Matos — Site

Site institucional + loja da tatuadora Lele Matos. Portfolio, catálogo de produtos e contato via WhatsApp.

**Stack:** Next.js (App Router) · Sanity CMS · Cloudflare Pages (OpenNext) · Tailwind CSS · TypeScript

---

## Setup

```bash
npm install
```

Crie `.env` na raiz:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=qtnabn6i
NEXT_PUBLIC_SANITY_DATASET=production        # ou "homolog"
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
SANITY_FALLBACK_MODE=off                     # "on" = usa dados mock locais
```

---

## Comandos

| Comando | O que faz |
|---|---|
| `npm run dev` | Front-end local → http://localhost:3000 |
| `npm run lint` | ESLint — **rodar antes de commitar** |
| `npm run build` | Build de produção (OpenNext/Cloudflare) |
| `npm run preview` | Preview local com runtime do Cloudflare |
| `npm run deploy:full` | Build + deploy para Cloudflare Pages |
| `npm run sanity:dev` | Sanity Studio local → http://localhost:3333 |
| `npm run sanity:deploy` | Deploy do Studio para sanity.io |

---

## Estrutura

```
src/
  app/              # Rotas (App Router) — pages e API routes
  components/
    layout/         # Header, Footer, SectionHeading
    sections/       # Seções de página (Hero, Products, FAQ…)
    ui/             # Componentes base reutilizáveis
  data/             # Mocks e fallbacks estáticos
  lib/              # Helpers e integrações (Sanity, WhatsApp…)
    sanity/         # client.ts, fetchers.ts, queries.ts, config.ts
  types/            # Tipos TypeScript globais

studio-lele-matos-site/   # Projeto Sanity (CMS separado)
  schemaTypes/      # Schemas: product, category, siteSettings, faqItem
```

**Onde mexer:**
- Conteúdo/copy → Sanity Studio ou `src/data/` (fallbacks)
- Nova seção de página → `src/components/sections/`
- Componente reutilizável → `src/components/ui/`
- Queries GROQ → `src/lib/sanity/fetchers.ts` — **nunca inline nos componentes**
- Estilos → Tailwind no componente; globais em `src/app/globals.css`

---

## Sanity CMS

- **Studio (produção):** https://lelematoos.sanity.studio/production
- **Studio (homolog):** https://lelematoos.sanity.studio/homolog
- Revalidação automática: webhook do Sanity para `/api/revalidate` após publicações
- Fallback: quando Sanity não retorna dados, o site usa os mocks de `src/data/`

Schemas disponíveis: `product`, `category`, `siteSettings`, `faqItem`

---

## Deploy

Hospedado no **Cloudflare Pages** via OpenNext. Variáveis de produção ficam no painel do Cloudflare.

```bash
npm run deploy:full   # build + deploy
```

Configs principais: `open-next.config.ts` · `wrangler.jsonc`

---

## Git

```
main        → produção (deploy automático)
feat/nome   → novas funcionalidades
fix/nome    → correções
content/    → ajustes de conteúdo
```

Prefixos de commit: `feat:` `fix:` `style:` `content:` `refactor:` `chore:`
