"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { sectionStyles } from "@/lib/sectionStyles";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { messageProductInterest } from "@/lib/whatsappMessages";
import type { CategoryItem, ProductCategoryId, ProductItem } from "@/types/site";

type FeaturedProductsSectionProps = {
  products: ProductItem[];
  categories: CategoryItem[];
  whatsappPhone: string;
};

export function FeaturedProductsSection({ products, categories, whatsappPhone }: FeaturedProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategoryId | "todas">("todas");
  const categoryNames = useMemo(
    () => new Map(categories.map((category) => [category.id, category.nome])),
    [categories],
  );
  const availableProducts = useMemo(() => {
    const list = products.filter((product) => product.disponivel);
    return list.sort((a, b) => Number(b.destaque) - Number(a.destaque));
  }, [products]);
  const highlightedProducts = useMemo(() => {
    const list = availableProducts.filter((product) => product.destaque);
    return list.length > 0 ? list : availableProducts.slice(0, 6);
  }, [availableProducts]);

  const visibleProducts = useMemo(() => {
    if (activeCategory === "todas") return highlightedProducts;
    return highlightedProducts.filter((product) => product.categoria === activeCategory);
  }, [activeCategory, highlightedProducts]);

  return (
    <section id="produtos" className={`${sectionStyles.base} ${sectionStyles.tinted}`}>
      <Container>
        <SectionHeading
          kicker="Produtos em destaque"
          title="Peças autorais da marca"
          text=""
        />

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
            <Card key={product.id} variant="flash">
              <Link
                href={`/produtos/${product.slug}`}
                className="flex aspect-square items-center justify-center border-b border-b-green-dark/10 bg-[linear-gradient(135deg,rgba(var(--color-accent-soft),0.92),rgba(var(--color-surface),0.96)_42%,rgba(var(--color-surface-alt),0.96))] p-[22px] max-lg:aspect-[4/3] max-md:aspect-square"
              >
                <img
                  src={product.imagemPrincipal}
                  alt={product.nome}
                  className="h-full w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </Link>

              <div className="flex h-full flex-col gap-[14px] p-[22px] max-md:gap-3.5 max-md:p-5">
                <div className="w-fit rounded-full border border-green-dark/20 bg-pink-soft px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-green-dark">
                  {categoryNames.get(product.categoria) ?? product.categoria}
                </div>

                <h3 className="m-0 text-[26px] font-black uppercase leading-[0.95] text-green-dark max-md:text-2xl">
                  <Link href={`/produtos/${product.slug}`}>{product.nome}</Link>
                </h3>

                <p className="m-0 text-[15px] leading-[1.75] text-muted">{product.descricaoCurta}</p>
                <div className="mt-0.5 text-[22px] font-black uppercase text-pink-dark">{product.preco}</div>

                <div className="mt-auto grid gap-3">
                  <Button
                    href={buildWhatsAppUrl(whatsappPhone, messageProductInterest(product.nome))}
                    variant="miniPrimary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar
                  </Button>

                  <Button href={`/produtos/${product.slug}`} variant="miniSecondary">
                    Ver produto
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {visibleProducts.length === 0 ? (
          <p className="mt-6 text-sm font-black uppercase tracking-[0.12em] text-green-mid">
            Nenhum produto nessa categoria no momento.
          </p>
        ) : null}

        <div className="mt-6 flex justify-center">
          <Button href="/produtos" variant="miniSecondary">
            Ver todos os produtos
          </Button>
        </div>
      </Container>
    </section>
  );
}
