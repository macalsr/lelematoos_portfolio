import type { SiteContent } from "@/types/site";

const WHATSAPP_PHONE = "5561999999999";
const INSTAGRAM_URL = "#";

export const siteContent: SiteContent = {
  seo: {
    title: "Lele Matoos Tattoo",
    description:
      "Flashes old school, reservas por sinal e agendamentos da tatuadora Lele Matoos.",
  },
  brand: {
    name: "Lele Matoos",
    tagline: "Tattoo Studio · Old School",
    subname: "Old school tattoo",
  },
  hero: {
    note: "Reserva simples · sinal via WhatsApp · atendimento com hora marcada",
  },
  quickInfo: [
    { title: "Flash", subtitle: "Pronto para reservar" },
    { title: "Sinal", subtitle: "Confirma sua vaga" },
    { title: "Custom", subtitle: "Projeto sob consulta" },
    { title: "Agenda", subtitle: "Sessão com horário" },
  ],
  nav: [
    { label: "Flashes", href: "#flash" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Agendar", href: "#contato", cta: true },
  ],
  about: {
    cards: [
      {
        title: "Traço firme",
        description:
          "Desenho com leitura clara, contraste forte e acabamento tradicional.",
      },
      {
        title: "Linguagem retrô",
        description:
          "Visual feminino e vintage, mantendo o peso clássico do old school.",
        tone: "pink",
      },
      {
        title: "Atendimento direto",
        description:
          "Orçamento, reserva e alinhamento do projeto feitos pelo WhatsApp.",
        tone: "green",
      },
    ],
    pills: [
      "Atendimento com hora marcada",
      "Flashes disponíveis para reserva",
      "Projetos autorais sob consulta",
      "Sinal abatido no valor final",
    ],
  },
  contact: {
    whatsappPhone: WHATSAPP_PHONE,
    instagramUrl: INSTAGRAM_URL,
    cityTitle: "Atendimento em Brasília",
    description:
      "Chame para reservar um flash, pagar o sinal, pedir orçamento ou conversar sobre tattoo personalizada.",
    actions: [
      {
        label: "WhatsApp para reserva",
        href: "https://wa.me/5561999999999?text=Oi!%20Quero%20reservar%20um%20flash.",
      },
      {
        label: "Instagram com flashes e agenda",
        href: INSTAGRAM_URL,
      },
      {
        label: "Sinal via WhatsApp · atendimento marcado",
        messageOnly: true,
      },
    ],
    mainCtaText: "Chamar no WhatsApp",
    floatingText: "Reservar no WhatsApp",
  },
};