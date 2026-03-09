import { fetchSanity } from "./client";
import {
  categoriesQuery,
  faqItemsQuery,
  galleryItemsQuery,
  productBySlugQuery,
  productSlugsQuery,
  productsQuery,
  siteSettingsQuery,
} from "./queries";
import { isSanityConfigured } from "./config";

export async function fetchSanityProducts() {
  if (!isSanityConfigured()) return [];
  return fetchSanity(productsQuery);
}

export async function fetchSanityProductBySlug(slug: string) {
  if (!isSanityConfigured()) return null;
  return fetchSanity(productBySlugQuery, { slug });
}

export async function fetchSanityProductSlugs() {
  if (!isSanityConfigured()) return [];
  return fetchSanity(productSlugsQuery);
}

export async function fetchSanityCategories() {
  if (!isSanityConfigured()) return [];
  return fetchSanity(categoriesQuery);
}

export async function fetchSanitySiteSettings() {
  if (!isSanityConfigured()) return null;
  return fetchSanity(siteSettingsQuery);
}

export async function fetchSanityFaqItems() {
  if (!isSanityConfigured()) return [];
  return fetchSanity(faqItemsQuery);
}

export async function fetchSanityGalleryItems() {
  if (!isSanityConfigured()) return [];
  return fetchSanity(galleryItemsQuery);
}
