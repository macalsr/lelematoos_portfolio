export type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
};

export type ProductKind = "rose" | "heart" | "star" | "leaf";

export type ProductItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  price: string;
  primaryMessage: string;
  secondaryMessage: string;
  kind: ProductKind;
};

export type CategoryItem = {
  id: string;
  title: string;
  subtitle: string;
};

export type GalleryKind = "heart" | "star" | "rose" | "leaf";

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  kind: GalleryKind;
};

export type CollectionItem = {
  id: string;
  title: string;
  description: string;
  kind: GalleryKind;
  status: string;
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