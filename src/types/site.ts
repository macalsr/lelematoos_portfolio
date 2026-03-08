export type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
};

export type QuickInfoItem = {
  title: string;
  subtitle: string;
};

export type FlashKind = "rose" | "heart" | "star";

export type FlashItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  price: string;
  signal: string;
  primaryMessage: string;
  secondaryMessage: string;
  kind: FlashKind;
};

export type ProcessStep = {
  id: number;
  title: string;
  description: string;
};

export type PortfolioKind = "heart" | "star" | "rose" | "leaf";

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  kind: PortfolioKind;
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
  quickInfo: QuickInfoItem[];
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
