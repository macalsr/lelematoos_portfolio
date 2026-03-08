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
    subname: "Artista visual e tatuadora",
  },
  hero: {
    note: "Marca autoral · peças em tiragem especial · universo old school",
  },
  nav: [
    { id: "nav-produtos", label: "Produtos", href: "#produtos" },
    { id: "nav-categorias", label: "Categorias", href: "#categorias" },
    { id: "nav-sobre", label: "Sobre", href: "#sobre" },
    { id: "nav-galeria", label: "Galeria", href: "#galeria" },
    { id: "nav-colecao", label: "Coleção", href: "#colecao" },
    { id: "nav-faq", label: "FAQ", href: "#faq" },
    { id: "nav-contato", label: "Contato", href: "#contato" },
    { id: "nav-agendar", label: "Agendar", href: "#contato", cta: true },
  ],
  about: {
    sectionText:
      "A Lele Matoos é tatuadora e artista visual. A loja nasce desse repertório old school e transforma essa linguagem em peças autorais.",
    cards: [
      {
        title: "Origem no tattoo",
        description:
          "A marca nasce da estética old school da Lele: traço firme, símbolos clássicos e leitura forte.",
      },
      {
        title: "Peças autorais",
        description:
          "Bandeiras, prints, ecobags e itens de coleção criados a partir do universo visual da artista.",
        tone: "pink",
      },
      {
        title: "Lançamentos curados",
        description:
          "As coleções entram em ciclos, com tiragens limitadas e foco em identidade artística.",
        tone: "green",
      },
    ],
    pills: [
      "Marca autoral de artista tatuadora",
      "Coleções com linguagem old school",
      "Peças para decorar, vestir e colecionar",
      "Encomendas e dúvidas por WhatsApp",
    ],
  },
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
  },
};
