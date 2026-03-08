import { siteContent as mockSiteContent } from "@/data/site";
import { shouldUseLocalFallback } from "@/lib/sanity/config";
import { fetchSanitySiteSettings } from "@/lib/sanity/fetchers";
import type { SiteContent } from "@/types/site";

type SanitySiteSettings = {
  seo?: {
    title?: string;
    description?: string;
  };
  whatsapp?: string;
  instagram?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroNote?: string;
  brandTagline?: string;
  navItems?: Array<{
    id?: string;
    label?: string;
    href?: string;
    cta?: boolean;
  }>;
  aboutText?: string;
  aboutCards?: Array<{
    title?: string;
    description?: string;
    tone?: "default" | "pink" | "green";
  }>;
  aboutPills?: string[];
  location?: string;
  contactDescription?: string;
  contactActions?: Array<{
    label?: string;
    href?: string;
    messageOnly?: boolean;
  }>;
  contactMainCtaText?: string;
  contactFloatingText?: string;
};

function cloneSiteContent(base: SiteContent): SiteContent {
  return {
    ...base,
    brand: { ...base.brand },
    hero: { ...base.hero },
    nav: [...base.nav],
    about: {
      ...base.about,
      cards: base.about.cards.map((card) => ({ ...card })),
      pills: [...base.about.pills],
    },
    contact: {
      ...base.contact,
      actions: base.contact.actions.map((action) => ({ ...action })),
    },
  };
}

function createEmptySiteContent(): SiteContent {
  return {
    seo: { title: "", description: "" },
    brand: { name: "", tagline: "", subname: "" },
    hero: { note: "" },
    nav: [],
    about: {
      sectionText: "",
      cards: [],
      pills: [],
    },
    contact: {
      whatsappPhone: "",
      instagramUrl: "",
      cityTitle: "",
      description: "",
      actions: [],
      mainCtaText: "",
      floatingText: "",
    },
  };
}

function normalizeWhatsappPhone(value?: string) {
  if (!value) return "";
  return value.replace(/\D/g, "");
}

export async function getSiteContent() {
  const content = shouldUseLocalFallback()
    ? cloneSiteContent(mockSiteContent)
    : createEmptySiteContent();

  try {
    const settings = (await fetchSanitySiteSettings()) as SanitySiteSettings | null;
    if (!settings) return content;

    const whatsappPhone = normalizeWhatsappPhone(settings.whatsapp);
    const instagramUrl = settings.instagram?.trim();

    if (settings.seo?.title?.trim()) content.seo.title = settings.seo.title.trim();
    if (settings.seo?.description?.trim()) content.seo.description = settings.seo.description.trim();
    if (whatsappPhone) content.contact.whatsappPhone = whatsappPhone;
    if (instagramUrl) content.contact.instagramUrl = instagramUrl;
    if (settings.heroTitle?.trim()) content.brand.name = settings.heroTitle.trim();
    if (settings.heroSubtitle?.trim()) content.brand.subname = settings.heroSubtitle.trim();
    if (settings.heroNote?.trim()) content.hero.note = settings.heroNote.trim();
    if (settings.brandTagline?.trim()) content.brand.tagline = settings.brandTagline.trim();
    if (settings.aboutText?.trim()) content.about.sectionText = settings.aboutText.trim();
    if (settings.location?.trim()) content.contact.cityTitle = settings.location.trim();
    if (settings.contactDescription?.trim()) content.contact.description = settings.contactDescription.trim();
    if (settings.contactMainCtaText?.trim()) content.contact.mainCtaText = settings.contactMainCtaText.trim();
    if (settings.contactFloatingText?.trim()) content.contact.floatingText = settings.contactFloatingText.trim();

    if (settings.navItems?.length) {
      content.nav = settings.navItems
        .filter((item) => item.label?.trim() && item.href?.trim())
        .map((item, index) => ({
          id: item.id?.trim() || `nav-${index + 1}`,
          label: item.label!.trim(),
          href: item.href!.trim(),
          cta: Boolean(item.cta),
        }));
    }

    if (settings.aboutCards?.length) {
      content.about.cards = settings.aboutCards
        .filter((item) => item.title?.trim() && item.description?.trim())
        .map((item) => ({
          title: item.title!.trim(),
          description: item.description!.trim(),
          tone: item.tone,
        }));
    }

    if (settings.aboutPills?.length) {
      content.about.pills = settings.aboutPills.map((pill) => pill.trim()).filter(Boolean);
    }

    if (settings.contactActions?.length) {
      content.contact.actions = settings.contactActions
        .filter((item) => item.label?.trim())
        .map((item) => ({
          label: item.label!.trim(),
          href: item.href?.trim(),
          messageOnly: Boolean(item.messageOnly),
        }));
    }

    content.contact.actions = content.contact.actions.map((action) => {
      if (action.label.toLowerCase().includes("instagram") && content.contact.instagramUrl) {
        return { ...action, href: content.contact.instagramUrl };
      }

      if (action.label.toLowerCase().includes("whatsapp") && content.contact.whatsappPhone) {
        return {
          ...action,
          href: `https://wa.me/${content.contact.whatsappPhone}`,
        };
      }

      return action;
    });

    return content;
  } catch {
    return content;
  }
}
