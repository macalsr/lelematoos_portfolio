import { products as mockProducts } from "@/data/products";
import {
  fetchSanityProductBySlug,
  fetchSanityProductSlugs,
  fetchSanityProducts,
} from "@/lib/sanity/fetchers";
import { shouldUseLocalFallback } from "@/lib/sanity/config";
import type { ProductCategoryId, ProductItem } from "@/types/site";

type SanityCategoryRef = {
  slug?: string;
  name?: string;
};

type SanityProduct = {
  _id: string;
  name?: string;
  slug?: string;
  category?: SanityCategoryRef;
  price?: number;
  shortDescription?: string;
  longDescription?: string;
  material?: string;
  size?: string;
  featured?: boolean;
  available?: boolean;
  mainImageUrl?: string;
};

function normalizeCategoryId(value?: string): ProductCategoryId {
  if (!value?.trim()) return "sem-categoria";
  return value.trim();
}

function formatPrice(value?: number) {
  if (typeof value !== "number" || Number.isNaN(value)) return "";
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);
}

function mapSanityProductToFrontend(product: SanityProduct): ProductItem | null {
  if (!product._id || !product.slug || !product.name) {
    return null;
  }

  const category = normalizeCategoryId(product.category?.slug);
  const shortDescription = product.shortDescription?.trim() || "Consulte detalhes no WhatsApp.";
  const longDescription = product.longDescription?.trim() || shortDescription;
  const material = product.material?.trim() || "Consulte";
  const size = product.size?.trim() || "Consulte";
  const mainImageUrl = product.mainImageUrl?.trim() || "/products/print-coracao-vintage.jpg";
  const priceLabel =
    typeof product.price === "number" && !Number.isNaN(product.price)
      ? formatPrice(product.price)
      : "Sob consulta";

  return {
    id: product._id,
    slug: product.slug,
    nome: product.name,
    categoria: category,
    preco: priceLabel,
    imagemPrincipal: mainImageUrl,
    descricaoCurta: shortDescription,
    destaque: Boolean(product.featured),
    disponivel: product.available !== false,
    descricaoLonga: longDescription,
    material,
    tamanho: size,
    primaryMessage: `Oi! Vim pelo site e tenho interesse no produto ${product.name}.`,
    secondaryMessage: `Oi! Tenho uma dúvida sobre o produto ${product.name}.`,
  };
}

export async function getProducts() {
  if (shouldUseLocalFallback()) {
    return mockProducts;
  }

  try {
    const sanityProducts = await fetchSanityProducts();
    const mapped = (sanityProducts as SanityProduct[])
      .map(mapSanityProductToFrontend)
      .filter((item): item is ProductItem => item !== null);

    if (mapped.length > 0) return mapped;
    return [];
  } catch (error) {
    console.error("[Sanity] Failed to fetch products:", error);
    return [];
  }
}

export async function getFeaturedProducts() {
  const list = await getProducts();
  return list.filter((product) => product.destaque && product.disponivel);
}

export async function getProductBySlug(slug: string) {
  if (shouldUseLocalFallback()) {
    return mockProducts.find((product) => product.slug === slug);
  }

  try {
    const sanityProduct = (await fetchSanityProductBySlug(slug)) as SanityProduct | null;
    const mapped = sanityProduct ? mapSanityProductToFrontend(sanityProduct) : null;
    if (mapped) return mapped;
  } catch (error) {
    console.error(`[Sanity] Failed to fetch product by slug "${slug}":`, error);
    return undefined;
  }

  return undefined;
}

export async function getProductSlugs() {
  if (shouldUseLocalFallback()) {
    return mockProducts.map((product) => product.slug);
  }

  try {
    const sanitySlugs = (await fetchSanityProductSlugs()) as Array<{ slug?: string }>;
    const slugs = sanitySlugs.map((item) => item.slug).filter((item): item is string => Boolean(item));
    if (slugs.length > 0) return slugs;
    return [];
  } catch (error) {
    console.error("[Sanity] Failed to fetch product slugs:", error);
    return [];
  }
}
