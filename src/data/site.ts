import type { SiteContent } from "@/types/site";

const WHATSAPP_PHONE = "5561982371005";
const INSTAGRAM_URL = "https://www.instagram.com/lelematoos/";

export const siteContent: SiteContent = {
  seo: {
    title: "Lele Matoos - Marca Autoral",
    description:
      "Produtos autorais da Lele Matoos: bandeiras, prints, ecobags e coleções inspiradas no universo old school.",
  },
  brand: {
    name: "Lele Matoos",
    tagline: "Tattoo · Old School",
  },
  hero: {
    title: "Lele Matoos",
    subtitle: "Artista visual e tatuadora",
    note: "Marca autoral · peças em tiragem especial · universo old school",
  },
  fontVariant: "classic-script",
  themeVariant: "classic-rose",
  nav: [
    { id: "nav-produtos", label: "Produtos", href: "/produtos" },
    { id: "nav-categorias", label: "Categorias", href: "#categorias" },
    { id: "nav-faq", label: "FAQ", href: "#faq" },
    { id: "nav-contato", label: "Contato", href: "#contato" },
    { id: "nav-agendar", label: "Agendar", href: "#contato", cta: true },
  ],
  contact: {
    whatsappPhone: WHATSAPP_PHONE,
    instagramUrl: INSTAGRAM_URL,
    cityTitle: "Atendimento online para todo Brasil",
    description:
      "Chame para compras, encomendas, dúvidas de tamanho, frete e próximos lançamentos da marca.",
    actions: [
      {
        label: "WhatsApp para comprar",
        href: "https://wa.me/5561982371005?text=Oi!%20Quero%20comprar%20um%20produto%20da%20marca.",
      },
      {
        label: "Instagram com novidades",
        href: INSTAGRAM_URL,
      },
      {
        label: "Encomendas e tiragens especiais",
        messageOnly: true,
      },
    ],
    mainCtaText: "Falar sobre produtos",
    floatingText: "Comprar no WhatsApp",
    floatingInstagramText: "Ver no Instagram",
  },
};
