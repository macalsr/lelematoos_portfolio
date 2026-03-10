import { galleryItems as mockGalleryItems } from "@/data/gallery";
import { shouldUseLocalFallback } from "@/lib/sanity/config";
import { fetchSanityGalleryItems } from "@/lib/sanity/fetchers";
import type { GalleryItem } from "@/types/site";

type SanityGalleryItem = {
  _id: string;
  title?: string;
  description?: string;
  category?: string;
  order?: number;
  imageUrl?: string;
  alt?: string;
};

function mapSanityGalleryItemToFrontend(item: SanityGalleryItem): GalleryItem | null {
  if (!item._id || !item.title || !item.description || !item.imageUrl) return null;

  return {
    id: item._id,
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl,
    alt: item.alt ?? item.title,
    category: item.category,
    order: item.order,
  };
}

export async function getGalleryItems() {
  if (shouldUseLocalFallback()) {
    return mockGalleryItems;
  }

  try {
    const sanityGalleryItems = await fetchSanityGalleryItems();
    if (!Array.isArray(sanityGalleryItems)) return [];
    const mapped = (sanityGalleryItems as SanityGalleryItem[])
      .map(mapSanityGalleryItemToFrontend)
      .filter((item): item is GalleryItem => item !== null);

    if (mapped.length > 0) return mapped;
    return [];
  } catch (error) {
    console.error("[Sanity] Failed to fetch gallery items:", error);
    return [];
  }
}
