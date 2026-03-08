import { siteContent as mockSiteContent } from "@/data/site";
import { getSafeFontVariant } from "@/lib/fonts";
import { getSafeThemeVariant } from "@/lib/themes";
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
  headerTitle?: string;
  headerLogoUrl?: string;
  headerLogoAlt?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroNote?: string;
  heroImageSize?: string;
  heroImageUrl?: string;
  heroImageAlt?: string;
  brandTagline?: string;
  fontVariant?: string;
  themeVariant?: string;
  contactFloatingText?: string;
  contactFloatingInstagramText?: string;
  sectionProductsKicker?: string;
  sectionProductsTitle?: string;
  sectionProductsText?: string;
  sectionCatalogKicker?: string;
  sectionCatalogTitle?: string;
  sectionCatalogText?: string;
  sectionFaqKicker?: string;
  sectionFaqTitle?: string;
  sectionFaqText?: string;
};

function cloneSiteContent(base: SiteContent): SiteContent {
  return {
    ...base,
    brand: { ...base.brand },
    hero: { ...base.hero },
    nav: [...base.nav],
    contact: {
      ...base.contact,
    },
    sections: {
      produtos: { ...base.sections.produtos },
      catalogo: { ...base.sections.catalogo },
      faq: { ...base.sections.faq },
    },
  };
}

function createEmptySiteContent(): SiteContent {
  return {
    seo: { title: "", description: "" },
    brand: { name: "", tagline: "", logoImageUrl: undefined, logoImageAlt: undefined },
    hero: { title: "", subtitle: "", note: "", imageSize: "medium", imageUrl: undefined, imageAlt: undefined },
    fontVariant: mockSiteContent.fontVariant,
    themeVariant: mockSiteContent.themeVariant,
    nav: [...mockSiteContent.nav],
    contact: {
      whatsappPhone: "",
      instagramUrl: "",
      floatingText: "",
      floatingInstagramText: "",
    },
    sections: {
      produtos: { ...mockSiteContent.sections.produtos },
      catalogo: { ...mockSiteContent.sections.catalogo },
      faq: { ...mockSiteContent.sections.faq },
    },
  };
}

function getSafeHeroImageSize(value?: string): SiteContent["hero"]["imageSize"] {
  if (value === "small" || value === "medium" || value === "large") return value;
  return "medium";
}

function normalizeWhatsappPhone(value?: string) {
  const input = value?.trim();
  if (!input) return "";

  // Accept full WhatsApp links or raw numbers.
  const waMeMatch = input.match(/wa\.me\/(\d{10,15})/i);
  if (waMeMatch?.[1]) return waMeMatch[1];

  const apiMatch = input.match(/[?&]phone=(\d{10,15})/i);
  if (apiMatch?.[1]) return apiMatch[1];

  const digits = input.replace(/\D/g, "");
  if (digits.length >= 10) return digits;
  return "";
}

export async function getSiteContent() {
  if (shouldUseLocalFallback()) {
    return cloneSiteContent(mockSiteContent);
  }

  const content = createEmptySiteContent();

  try {
    const settings = (await fetchSanitySiteSettings()) as SanitySiteSettings | null;
    if (!settings) return content;

    const whatsappPhone = normalizeWhatsappPhone(settings.whatsapp);
    const instagramUrl = settings.instagram?.trim();

    if (settings.seo?.title?.trim()) content.seo.title = settings.seo.title.trim();
    if (settings.seo?.description?.trim()) content.seo.description = settings.seo.description.trim();
    if (whatsappPhone) content.contact.whatsappPhone = whatsappPhone;
    if (instagramUrl) content.contact.instagramUrl = instagramUrl;
    if (settings.headerTitle?.trim()) content.brand.name = settings.headerTitle.trim();
    if (settings.headerLogoUrl?.trim()) content.brand.logoImageUrl = settings.headerLogoUrl.trim();
    if (settings.headerLogoAlt?.trim()) content.brand.logoImageAlt = settings.headerLogoAlt.trim();
    if (settings.heroTitle?.trim()) content.hero.title = settings.heroTitle.trim();
    if (settings.heroSubtitle?.trim()) content.hero.subtitle = settings.heroSubtitle.trim();
    if (settings.heroNote?.trim()) content.hero.note = settings.heroNote.trim();
    content.hero.imageSize = getSafeHeroImageSize(settings.heroImageSize);
    if (settings.heroImageUrl?.trim()) content.hero.imageUrl = settings.heroImageUrl.trim();
    if (settings.heroImageAlt?.trim()) content.hero.imageAlt = settings.heroImageAlt.trim();
    if (settings.brandTagline?.trim()) content.brand.tagline = settings.brandTagline.trim();
    content.fontVariant = getSafeFontVariant(settings.fontVariant);
    content.themeVariant = getSafeThemeVariant(settings.themeVariant);
    if (settings.contactFloatingText?.trim()) content.contact.floatingText = settings.contactFloatingText.trim();
    if (settings.contactFloatingInstagramText?.trim()) {
      content.contact.floatingInstagramText = settings.contactFloatingInstagramText.trim();
    }
    if (settings.sectionProductsKicker?.trim()) content.sections.produtos.kicker = settings.sectionProductsKicker.trim();
    if (settings.sectionProductsTitle?.trim()) content.sections.produtos.title = settings.sectionProductsTitle.trim();
    if (typeof settings.sectionProductsText === "string") content.sections.produtos.text = settings.sectionProductsText.trim();
    if (settings.sectionCatalogKicker?.trim()) content.sections.catalogo.kicker = settings.sectionCatalogKicker.trim();
    if (settings.sectionCatalogTitle?.trim()) content.sections.catalogo.title = settings.sectionCatalogTitle.trim();
    if (typeof settings.sectionCatalogText === "string") content.sections.catalogo.text = settings.sectionCatalogText.trim();
    if (settings.sectionFaqKicker?.trim()) content.sections.faq.kicker = settings.sectionFaqKicker.trim();
    if (settings.sectionFaqTitle?.trim()) content.sections.faq.title = settings.sectionFaqTitle.trim();
    if (typeof settings.sectionFaqText === "string") content.sections.faq.text = settings.sectionFaqText.trim();

    return content;
  } catch {
    return content;
  }
}
