"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProductCard } from "@/components/sections/ProductCard";
import { Container } from "@/components/ui/Container";
import { sectionStyles } from "@/lib/sectionStyles";
import type { CategoryItem, ProductCategoryId, ProductItem, SiteContent } from "@/types/site";

type ProductsCatalogSectionProps = {
  products: ProductItem[];
  categories: CategoryItem[];
  whatsappPhone: string;
  initialCategory?: string;
  heading: SiteContent["sections"]["catalogo"];
};

export function ProductsCatalogSection({
  products,
  categories,
  whatsappPhone,
  initialCategory,
  heading,
}: ProductsCatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategoryId | "todas">(() => {
    if (!initialCategory) return "todas";
    return categories.some((category) => category.id === initialCategory) ? initialCategory : "todas";
  });
  const categoryNames = useMemo(
    () => new Map(categories.map((category) => [category.id, category.nome])),
    [categories],
  );
  const availableProducts = useMemo(() => {
    const list = products.filter((product) => product.disponivel);
    return list.sort((a, b) => Number(b.destaque) - Number(a.destaque));
  }, [products]);

  const visibleProducts = useMemo(() => {
    if (activeCategory === "todas") return availableProducts;
    return availableProducts.filter((product) => product.categoria === activeCategory);
  }, [activeCategory, availableProducts]);

  return (
    <section id="produtos" className={`${sectionStyles.base} ${sectionStyles.tinted}`}>
      <Container>
        <SectionHeading kicker={heading.kicker} title={heading.title} text={heading.text} />

        <div className="mt-6 flex flex-wrap gap-2 max-md:mt-5">
          <button
            type="button"
            onClick={() => setActiveCategory("todas")}
            className={`rounded-full border border-green-dark/20 px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] ${
              activeCategory === "todas" ? "bg-button-primary text-white" : "bg-surface text-green-dark"
            }`}
          >
            Todas
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border border-green-dark/20 px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] ${
                activeCategory === category.id ? "bg-button-primary text-white" : "bg-surface text-green-dark"
              }`}
            >
              {category.nome}
            </button>
          ))}
        </div>

        <div className={`${sectionStyles.contentGridTop} grid grid-cols-3 gap-[22px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-4`}>
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categoryLabel={categoryNames.get(product.categoria) ?? product.categoria}
              whatsappPhone={whatsappPhone}
            />
          ))}
        </div>

        {visibleProducts.length === 0 ? (
          <p className="mt-6 text-sm font-black uppercase tracking-[0.12em] text-green-mid">
            Nenhum produto nessa categoria no momento.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
