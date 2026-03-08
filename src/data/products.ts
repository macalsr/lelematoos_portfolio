import type { ProductItem } from "@/types/site";

export const products: ProductItem[] = [
  {
    id: "prod-001",
    slug: "bandeira-rosa-classica",
    nome: "Bandeira Rosa Clássica",
    categoria: "bandeiras",
    preco: "R$ 220",
    imagemPrincipal: "/products/bandeira-rosa-classica.jpg",
    descricaoCurta:
      "Peça de parede com arte old school inspirada no traço tradicional da Lele Matoos.",
    destaque: true,
    novidade: false,
    colecaoAtual: true,
    disponivel: true,
    descricaoLonga:
      "Bandeira autoral para ambiente interno, criada a partir do repertório visual de tattoo tradicional da artista. Ideal para estúdio, quarto e espaços criativos.",
    material: "Tecido premium com impressão de alta definição",
    tamanho: "90 x 130 cm",
    primaryMessage:
      "Oi! Quero comprar a Bandeira Rosa Clássica. Tem pronta entrega?",
    secondaryMessage:
      "Oi! Quero mais detalhes de tamanho e material da Bandeira Rosa Clássica.",
    kind: "rose",
  },
  {
    id: "prod-002",
    slug: "print-coracao-vintage",
    nome: "Print Coração Vintage",
    categoria: "prints",
    preco: "R$ 95",
    imagemPrincipal: "/products/print-coracao-vintage.jpg",
    descricaoCurta:
      "Impressão autoral em estética retrô para compor ambientes com identidade old school.",
    destaque: true,
    novidade: true,
    colecaoAtual: true,
    disponivel: true,
    descricaoLonga:
      "Print em tiragem especial com acabamento fosco e arte assinada. A peça traduz o universo de flash tradicional para decoração autoral.",
    material: "Papel fine art 240g",
    tamanho: "A3 (29,7 x 42 cm)",
    primaryMessage:
      "Oi! Quero comprar o Print Coração Vintage. Como funciona o envio?",
    secondaryMessage:
      "Oi! Quero saber mais sobre papel e tamanho do Print Coração Vintage.",
    kind: "heart",
  },
  {
    id: "prod-003",
    slug: "ecobag-estrela-old-school",
    nome: "Ecobag Estrela Old School",
    categoria: "ecobags",
    preco: "R$ 79",
    imagemPrincipal: "/products/ecobag-estrela-old-school.jpg",
    descricaoCurta:
      "Ecobag em tiragem especial com ilustração autoral para uso diário.",
    destaque: true,
    novidade: true,
    colecaoAtual: false,
    disponivel: true,
    descricaoLonga:
      "Ecobag resistente com ilustração inspirada nos desenhos old school da Lele. Pensada para uso cotidiano sem perder personalidade.",
    material: "Algodão cru reforçado",
    tamanho: "38 x 42 cm",
    primaryMessage:
      "Oi! Quero comprar a Ecobag Estrela Old School. Ainda tem disponível?",
    secondaryMessage:
      "Oi! Quero detalhes de medidas e tecido da Ecobag Estrela Old School.",
    kind: "star",
  },
];

export const featuredProducts = products.filter((product) => product.destaque);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
