export type NavItem = {
  id?: string;
  label: string;
  href: string;
  cta?: boolean;
};

export type ProductKind = "rose" | "heart" | "star" | "leaf";

export type ProductCategoryId = string;

export type ProductItem = {
  id: string;
  slug: string;
  nome: string;
  categoria: ProductCategoryId;
  preco: string;
  imagemPrincipal: string;
  descricaoCurta: string;
  destaque: boolean;
  novidade: boolean;
  colecaoAtual: boolean;
  disponivel: boolean;
  descricaoLonga: string;
  material: string;
  tamanho: string;
  primaryMessage: string;
  secondaryMessage: string;
  kind: ProductKind;
};

export type CategoryItem = {
  id: ProductCategoryId;
  nome: string;
  descricao: string;
};

export type GalleryKind = "heart" | "star" | "rose" | "leaf";

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  category?: string;
  order?: number;
  kind?: GalleryKind;
};

export type ShopInfoItem = {
  id: number;
  title: string;
  description: string;
};

export type AboutCard = {
  title: string;
  description: string;
  tone?: "default" | "pink" | "green";
};

export type ContactLink = {
  label: string;
  href?: string;
  messageOnly?: boolean;
};

export type SiteContent = {
  seo: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tagline: string;
    subname: string;
  };
  hero: {
    note: string;
  };
  nav: NavItem[];
  about: {
    sectionText: string;
    cards: AboutCard[];
    pills: string[];
  };
  contact: {
    whatsappPhone: string;
    instagramUrl: string;
    cityTitle: string;
    description: string;
    actions: ContactLink[];
    mainCtaText: string;
    floatingText: string;
  };
};
