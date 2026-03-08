import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { sectionStyles } from "@/lib/sectionStyles";
import type { ProductItem } from "@/types/site";

function getCollectionBadges(product: ProductItem) {
  const badges: string[] = [];

  if (product.colecaoAtual) badges.push("Coleção atual");
  if (product.novidade) badges.push("Novidade");
  if (product.destaque) badges.push("Destaque");

  return badges;
}

type CollectionSectionProps = {
  products: ProductItem[];
};

export function CollectionSection({ products }: CollectionSectionProps) {
  const collectionProducts = products.filter(
    (product) => product.colecaoAtual || product.novidade || product.destaque,
  );

  return (
    <section id="colecao" className={sectionStyles.base}>
      <Container>
        <SectionHeading
          kicker="Coleção"
          title="Drops e lançamentos"
          text="Produtos em ciclo de coleção com tiragens selecionadas, mantendo o caráter autoral da marca."
        />

        <div
          className={`${sectionStyles.contentGridTop} grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-4`}
        >
          {collectionProducts.map((product) => {
            const badges = getCollectionBadges(product);

            return (
              <Card key={product.id} variant="portfolio">
                <div className="flex aspect-[1/1.1] items-center justify-center border-b-[4px] border-b-green-dark bg-[linear-gradient(135deg,#f6d5df,#e8f2df)] p-[18px]">
                  <img
                    src={product.imagemPrincipal}
                    alt={product.nome}
                    className="h-full w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-[18px] max-md:p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {badges.map((badge) => (
                      <div
                        key={`${product.id}-${badge}`}
                        className="w-fit rounded-full border-[4px] border-green-dark bg-pink-soft px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-green-dark"
                      >
                        {badge}
                      </div>
                    ))}
                  </div>

                  <h3 className="mb-2 text-xl font-black uppercase leading-none text-green-dark">{product.nome}</h3>
                  <p className="m-0 text-sm leading-[1.7] text-muted">{product.descricaoCurta}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
