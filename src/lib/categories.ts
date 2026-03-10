import { productCategories as mockCategories } from "@/data/categories";
import { shouldUseLocalFallback } from "@/lib/sanity/config";
import { fetchSanityCategories } from "@/lib/sanity/fetchers";
import type { CategoryItem } from "@/types/site";

type SanityCategory = {
  _id: string;
  name?: string;
  slug?: string;
  description?: string;
  order?: number;
};

function mapSanityCategoryToFrontend(category: SanityCategory): CategoryItem | null {
  if (!category._id || !category.name || !category.slug) return null;

  return {
    id: category.slug,
    nome: category.name,
    descricao: category.description?.trim() || "Categoria autoral da marca",
  };
}

export async function getCategories() {
  if (shouldUseLocalFallback()) {
    return mockCategories;
  }

  try {
    const sanityCategories = await fetchSanityCategories();
    if (!Array.isArray(sanityCategories)) return [];
    const mapped = (sanityCategories as SanityCategory[])
      .map(mapSanityCategoryToFrontend)
      .filter((item): item is CategoryItem => item !== null);

    if (mapped.length > 0) return mapped;
    return [];
  } catch (error) {
    console.error("[Sanity] Failed to fetch categories:", error);
    return [];
  }
}
