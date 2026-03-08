import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { CollectionSection } from "@/components/sections/CollectionSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { Hero } from "@/components/sections/Hero";
import { ProductCategoriesSection } from "@/components/sections/ProductCategoriesSection";
import { ShopInfoSection } from "@/components/sections/ShopInfoSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProductsSection />
        <ProductCategoriesSection />
        <AboutSection />
        <GallerySection />
        <CollectionSection />
        <ShopInfoSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}