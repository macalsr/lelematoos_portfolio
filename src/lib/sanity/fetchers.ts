import { sanityClient } from "./client";
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
  return sanityClient.fetch(productsQuery);
}

export async function fetchSanityProductBySlug(slug: string) {
  if (!isSanityConfigured()) return null;
  return sanityClient.fetch(productBySlugQuery, { slug });
}

export async function fetchSanityProductSlugs() {
  if (!isSanityConfigured()) return [];
  return sanityClient.fetch(productSlugsQuery);
}

export async function fetchSanityCategories() {
  if (!isSanityConfigured()) return [];
  return sanityClient.fetch(categoriesQuery);
}

export async function fetchSanitySiteSettings() {
  if (!isSanityConfigured()) return null;
  return sanityClient.fetch(siteSettingsQuery);
}

export async function fetchSanityFaqItems() {
  if (!isSanityConfigured()) return [];
  return sanityClient.fetch(faqItemsQuery);
}

export async function fetchSanityGalleryItems() {
  if (!isSanityConfigured()) return [];
  return sanityClient.fetch(galleryItemsQuery);
}
