import { products as mockProducts } from "@/data/products";
import {
  fetchSanityProductBySlug,
  fetchSanityProductSlugs,
  fetchSanityProducts,
} from "@/lib/sanity/fetchers";
import { shouldUseLocalFallback } from "@/lib/sanity/config";
import type { ProductCategoryId, ProductItem, ProductKind } from "@/types/site";

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
  visualKind?: ProductKind;
  novelty?: boolean;
  currentCollection?: boolean;
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
  if (
    !product._id ||
    !product.slug ||
    !product.name ||
    typeof product.price !== "number" ||
    Number.isNaN(product.price) ||
    !product.shortDescription ||
    !product.longDescription ||
    !product.material ||
    !product.size ||
    !product.visualKind ||
    !product.mainImageUrl
  ) {
    return null;
  }

  const category = normalizeCategoryId(product.category?.slug);

  return {
    id: product._id,
    slug: product.slug,
    nome: product.name,
    categoria: category,
    preco: formatPrice(product.price),
    imagemPrincipal: product.mainImageUrl,
    descricaoCurta: product.shortDescription,
    destaque: Boolean(product.featured),
    novidade: Boolean(product.novelty),
    colecaoAtual: Boolean(product.currentCollection),
    disponivel: product.available !== false,
    descricaoLonga: product.longDescription,
    material: product.material,
    tamanho: product.size,
    primaryMessage: `Oi! Vim pelo site e tenho interesse no produto ${product.name}.`,
    secondaryMessage: `Oi! Tenho uma dúvida sobre o produto ${product.name}.`,
    kind: product.visualKind,
  };
}

export async function getProducts() {
  try {
    const sanityProducts = await fetchSanityProducts();
    const mapped = (sanityProducts as SanityProduct[])
      .map(mapSanityProductToFrontend)
      .filter((item): item is ProductItem => item !== null);

    if (mapped.length > 0) return mapped;
    return shouldUseLocalFallback() ? mockProducts : [];
  } catch {
    return shouldUseLocalFallback() ? mockProducts : [];
  }
}

export async function getFeaturedProducts() {
  const list = await getProducts();
  return list.filter((product) => product.destaque && product.disponivel);
}

export async function getProductBySlug(slug: string) {
  try {
    const sanityProduct = (await fetchSanityProductBySlug(slug)) as SanityProduct | null;
    const mapped = sanityProduct ? mapSanityProductToFrontend(sanityProduct) : null;
    if (mapped) return mapped;
  } catch {
    if (shouldUseLocalFallback()) {
      return mockProducts.find((product) => product.slug === slug);
    }
  }

  return shouldUseLocalFallback() ? mockProducts.find((product) => product.slug === slug) : undefined;
}

export async function getProductSlugs() {
  try {
    const sanitySlugs = (await fetchSanityProductSlugs()) as Array<{ slug?: string }>;
    const slugs = sanitySlugs.map((item) => item.slug).filter((item): item is string => Boolean(item));
    if (slugs.length > 0) return slugs;
    return shouldUseLocalFallback() ? mockProducts.map((product) => product.slug) : [];
  } catch {
    return shouldUseLocalFallback() ? mockProducts.map((product) => product.slug) : [];
  }
}
