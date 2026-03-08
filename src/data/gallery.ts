import type { GalleryItem } from "@/types/site";

export const galleryItems: GalleryItem[] = [
  {
    id: "coracao-classico",
    title: "Coração clássico",
    description: "Estudo visual que conecta tattoo tradicional e produto autoral.",
    imageUrl: "/products/print-coracao-vintage.jpg",
    alt: "Coração clássico da galeria Lele Matoos",
    category: "Old school",
    order: 1,
    kind: "heart",
  },
  {
    id: "estrela-retro",
    title: "Estrela retrô",
    description: "Símbolo old school aplicado na linguagem da marca.",
    imageUrl: "/products/ecobag-estrela-old-school.jpg",
    alt: "Estrela retrô da galeria Lele Matoos",
    category: "Old school",
    order: 2,
    kind: "star",
  },
  {
    id: "rosa-tradicional",
    title: "Rosa tradicional",
    description: "Assinatura visual recorrente nas coleções da Lele.",
    imageUrl: "/products/bandeira-rosa-classica.jpg",
    alt: "Rosa tradicional da galeria Lele Matoos",
    category: "Assinatura",
    order: 3,
    kind: "rose",
  },
  {
    id: "folha-ornamental",
    title: "Folha ornamental",
    description: "Elemento de composição para peças delicadas e marcantes.",
    imageUrl: "/products/bandeira-rosa-classica.jpg",
    alt: "Folha ornamental da galeria Lele Matoos",
    category: "Floral",
    order: 4,
    kind: "leaf",
  },
];
