import { shopInfoItems as mockFaqItems } from "@/data/shopInfo";
import { shouldUseLocalFallback } from "@/lib/sanity/config";
import { fetchSanityFaqItems } from "@/lib/sanity/fetchers";
import type { ShopInfoItem } from "@/types/site";

type SanityFaqItem = {
  _id: string;
  question?: string;
  answer?: string;
};

function mapSanityFaqItemToFrontend(item: SanityFaqItem, index: number): ShopInfoItem | null {
  if (!item._id || !item.question || !item.answer) return null;

  return {
    id: index + 1,
    title: item.question,
    description: item.answer,
  };
}

export async function getFaqItems() {
  try {
    const sanityFaqItems = (await fetchSanityFaqItems()) as SanityFaqItem[];
    const mapped = sanityFaqItems
      .map((item, index) => mapSanityFaqItemToFrontend(item, index))
      .filter((item): item is ShopInfoItem => item !== null);

    if (mapped.length > 0) return mapped;
    return shouldUseLocalFallback() ? mockFaqItems : [];
  } catch {
    return shouldUseLocalFallback() ? mockFaqItems : [];
  }
}
