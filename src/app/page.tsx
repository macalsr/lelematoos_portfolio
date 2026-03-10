import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { Hero } from "@/components/sections/Hero";
import { ShopInfoSection } from "@/components/sections/ShopInfoSection";
import { getCategories } from "@/lib/categories";
import { getFaqItems } from "@/lib/faq";
import { getProducts } from "@/lib/products";
import { getSiteContent } from "@/lib/siteContent";

export const revalidate = 3600;

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();
  const faqItems = await getFaqItems();
  const content = await getSiteContent();

  return (
    <>
      <Header content={content} />
      <main>
        <Hero content={content} />
        <FeaturedProductsSection
          products={products}
          categories={categories}
          heading={content.sections.produtos}
        />
        <ShopInfoSection items={faqItems} heading={content.sections.faq} />
      </main>
      <Footer />
    </>
  );
}
