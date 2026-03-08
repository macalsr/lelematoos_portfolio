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
  heroImageUrl?: string;
  heroImageAlt?: string;
  brandTagline?: string;
  fontVariant?: string;
  themeVariant?: string;
  location?: string;
  contactDescription?: string;
  contactActions?: Array<{
    label?: string;
    href?: string;
    messageOnly?: boolean;
  }>;
  contactMainCtaText?: string;
  contactFloatingText?: string;
  contactFloatingInstagramText?: string;
};

function cloneSiteContent(base: SiteContent): SiteContent {
  return {
    ...base,
    brand: { ...base.brand },
    hero: { ...base.hero },
    nav: [...base.nav],
    contact: {
      ...base.contact,
      actions: base.contact.actions.map((action) => ({ ...action })),
    },
  };
}

function createEmptySiteContent(): SiteContent {
  return {
    seo: { title: "", description: "" },
    brand: { name: "", tagline: "", logoImageUrl: undefined, logoImageAlt: undefined },
    hero: { title: "", subtitle: "", note: "", imageUrl: undefined, imageAlt: undefined },
    fontVariant: mockSiteContent.fontVariant,
    themeVariant: mockSiteContent.themeVariant,
    nav: [...mockSiteContent.nav],
    contact: {
      whatsappPhone: "",
      instagramUrl: "",
      cityTitle: "",
      description: "",
      actions: [],
      mainCtaText: "",
      floatingText: "",
      floatingInstagramText: "",
    },
  };
}

function normalizeWhatsappPhone(value?: string) {
  if (!value) return "";
  return value.replace(/\D/g, "");
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
    if (settings.heroImageUrl?.trim()) content.hero.imageUrl = settings.heroImageUrl.trim();
    if (settings.heroImageAlt?.trim()) content.hero.imageAlt = settings.heroImageAlt.trim();
    if (settings.brandTagline?.trim()) content.brand.tagline = settings.brandTagline.trim();
    content.fontVariant = getSafeFontVariant(settings.fontVariant);
    content.themeVariant = getSafeThemeVariant(settings.themeVariant);
    if (settings.location?.trim()) content.contact.cityTitle = settings.location.trim();
    if (settings.contactDescription?.trim()) content.contact.description = settings.contactDescription.trim();
    if (settings.contactMainCtaText?.trim()) content.contact.mainCtaText = settings.contactMainCtaText.trim();
    if (settings.contactFloatingText?.trim()) content.contact.floatingText = settings.contactFloatingText.trim();
    if (settings.contactFloatingInstagramText?.trim()) {
      content.contact.floatingInstagramText = settings.contactFloatingInstagramText.trim();
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
