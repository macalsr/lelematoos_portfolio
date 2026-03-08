import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { sectionStyles } from "@/lib/sectionStyles";
import type { CategoryItem, ProductItem } from "@/types/site";

type ProductCategoriesSectionProps = {
  products: ProductItem[];
  categories: CategoryItem[];
};

export function ProductCategoriesSection({ products, categories }: ProductCategoriesSectionProps) {
  return (
    <section id="categorias" className={sectionStyles.base}>
      <Container>
        <SectionHeading
          kicker="Categorias"
          title="O que você encontra"
          text="Cada categoria carrega a assinatura visual da artista, sem perder a origem no universo tattoo."
        />

        <div className={`${sectionStyles.contentGridTop} grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-3`}>
          {categories.map((category) => (
            <Card key={category.id} variant="quick">
              <strong className="mb-1.5 block text-[22px] font-black uppercase text-green-dark max-md:text-[20px]">
                {category.nome}
              </strong>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-muted">
                {category.descricao}
              </span>
              <span className="mt-2 block text-[11px] font-black uppercase tracking-[0.14em] text-green-mid">
                {products.filter((product) => product.categoria === category.id).length} produtos
              </span>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
