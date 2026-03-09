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
    imageSize: "medium",
  },
  nav: [
    { id: "nav-produtos", label: "Produtos", href: "/produtos" },
    { id: "nav-faq", label: "FAQ", href: "#faq" },
  ],
  contact: {
    whatsappPhone: WHATSAPP_PHONE,
    instagramUrl: INSTAGRAM_URL,
    floatingText: "Comprar no WhatsApp",
    floatingInstagramText: "Ver no Instagram",
  },
  sections: {
    produtos: {
      kicker: "Produtos em destaque",
      title: "Peças autorais da marca",
      text: "",
    },
    catalogo: {
      kicker: "Catálogo",
      title: "Todos os produtos da marca",
      text: "Aqui você encontra todas as peças autorais disponíveis, organizadas por categoria.",
    },
    faq: {
      kicker: "FAQ",
      title: "Compra, envio e encomendas",
      text: "Tudo que a pessoa precisa para comprar com segurança e entender o funcionamento da loja.",
    },
  },
};
