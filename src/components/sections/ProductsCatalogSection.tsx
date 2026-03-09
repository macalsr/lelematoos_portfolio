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
  initialCategory?: string;
  heading: SiteContent["sections"]["catalogo"];
};

export function ProductsCatalogSection({
  products,
  categories,
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

  const filterButtonClass = (isActive: boolean) =>
    `rounded-full border px-4 py-3 text-[11px] font-black uppercase tracking-[0.16em] transition-all duration-200 max-md:px-3.5 max-md:py-2.5 ${
      isActive
        ? "border-pink-dark/20 bg-button-primary text-white shadow-[0_14px_28px_rgba(138,72,94,0.18)]"
        : "border-green-dark/12 bg-surface/75 text-green-dark hover:border-pink-dark/15 hover:bg-pink-soft/65"
    }`;

  return (
    <section id="produtos" className={`${sectionStyles.base} ${sectionStyles.tinted}`}>
      <Container>
        <SectionHeading kicker={heading.kicker} title={heading.title} text={heading.text} />

        <div className="mt-8 flex flex-wrap gap-2.5 max-md:gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("todas")}
            className={filterButtonClass(activeCategory === "todas")}
          >
            Todas
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={filterButtonClass(activeCategory === category.id)}
            >
              {category.nome}
            </button>
          ))}
        </div>

        <div className={`${sectionStyles.contentGridTop} grid grid-cols-2 gap-x-8 gap-y-10 max-xl:gap-x-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-y-8`}>
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categoryLabel={categoryNames.get(product.categoria) ?? product.categoria}
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
