import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { Hero } from "@/components/sections/Hero";
import { ShopInfoSection } from "@/components/sections/ShopInfoSection";
import { getCategories } from "@/lib/categories";
import { getFaqItems } from "@/lib/faq";
import { getProducts } from "@/lib/products";
import { getSiteContent } from "@/lib/siteContent";

export const dynamic = "force-dynamic";

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
          whatsappPhone={content.contact.whatsappPhone}
        />
        <ShopInfoSection items={faqItems} />
        <ContactSection content={content} />
      </main>
      <Footer />
    </>
  );
}
