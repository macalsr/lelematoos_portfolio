import { siteContent as mockSiteContent } from "@/data/site";
import { shouldUseLocalFallback } from "@/lib/sanity/config";
import { fetchSanitySiteSettings } from "@/lib/sanity/fetchers";

type SanitySiteSettingsSeo = {
  seo?: {
    title?: string;
    description?: string;
  };
  seoTitle?: string;
  seoDescription?: string;
  ogImageUrl?: string;
  ogImageAlt?: string;
  headerLogoUrl?: string;
};

export type SiteSeo = {
  title: string;
  description: string;
  ogImageUrl?: string;
  ogImageAlt?: string;
  faviconUrl?: string;
};

function getSeoFallback(): SiteSeo {
  if (!shouldUseLocalFallback()) {
    return { title: "", description: "" };
  }

  return {
    title: mockSiteContent.seo.title,
    description: mockSiteContent.seo.description,
  };
}

export async function getSiteSeo(): Promise<SiteSeo> {
  const fallback = getSeoFallback();
  if (shouldUseLocalFallback()) {
    return fallback;
  }

  try {
    const settings = (await fetchSanitySiteSettings()) as SanitySiteSettingsSeo | null;
    if (!settings) return fallback;

    const title = settings.seoTitle?.trim() || settings.seo?.title?.trim() || fallback.title;
    const description = settings.seoDescription?.trim() || settings.seo?.description?.trim() || fallback.description;

    return {
      title,
      description,
      ogImageUrl: settings.ogImageUrl,
      ogImageAlt: settings.ogImageAlt,
      faviconUrl: settings.headerLogoUrl || settings.ogImageUrl,
    };
  } catch {
    return fallback;
  }
}
