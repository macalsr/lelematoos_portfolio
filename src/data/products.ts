import type { ProductItem } from "@/types/site";

export const products: ProductItem[] = [
  {
    id: "bandeira-rosa-classica",
    tag: "Bandeira",
    title: "Bandeira Rosa Clássica",
    description:
      "Peça de parede com arte old school inspirada no traço tradicional da Lele Matoos.",
    price: "R$ 220",
    primaryMessage:
      "Oi! Quero comprar a Bandeira Rosa Clássica. Tem pronta entrega?",
    secondaryMessage:
      "Oi! Quero mais detalhes de tamanho e material da Bandeira Rosa Clássica.",
    kind: "rose",
  },
  {
    id: "print-coracao-vintage",
    tag: "Print",
    title: "Print Coração Vintage",
    description:
      "Impressão autoral em estética retrô para compor ambientes com identidade old school.",
    price: "R$ 95",
    primaryMessage:
      "Oi! Quero comprar o Print Coração Vintage. Como funciona o envio?",
    secondaryMessage:
      "Oi! Quero saber mais sobre papel e tamanho do Print Coração Vintage.",
    kind: "heart",
  },
  {
    id: "ecobag-estrela",
    tag: "Ecobag",
    title: "Ecobag Estrela Old School",
    description:
      "Ecobag em tiragem especial com ilustração autoral para uso diário.",
    price: "R$ 79",
    primaryMessage:
      "Oi! Quero comprar a Ecobag Estrela Old School. Ainda tem disponível?",
    secondaryMessage:
      "Oi! Quero detalhes de medidas e tecido da Ecobag Estrela Old School.",
    kind: "star",
  },
];