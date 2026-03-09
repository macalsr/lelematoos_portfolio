import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductsCatalogSection } from "@/components/sections/ProductsCatalogSection";
import { getCategories } from "@/lib/categories";
import { getProducts } from "@/lib/products";
import { getSiteContent } from "@/lib/siteContent";

type ProductsPageProps = {
  searchParams: Promise<{ categoria?: string }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const products = await getProducts();
  const categories = await getCategories();
  const content = await getSiteContent();
  const { categoria } = await searchParams;

  return (
    <>
      <Header content={content} />
      <main>
        <ProductsCatalogSection
          products={products}
          categories={categories}
          initialCategory={categoria}
          heading={content.sections.catalogo}
        />
      </main>
      <Footer />
    </>
  );
}
