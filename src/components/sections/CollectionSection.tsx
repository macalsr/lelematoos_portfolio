import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { TattooIcon } from "@/components/ui/TattooIcons";
import { collectionItems } from "@/data/collection";
import { sectionStyles } from "@/lib/sectionStyles";

export function CollectionSection() {
  return (
    <section id="colecao" className={sectionStyles.base}>
      <Container>
        <SectionHeading
          kicker="Coleção"
          title="Drops e lançamentos"
          text="Coleções em ciclo com tiragens selecionadas, mantendo o caráter autoral da marca."
        />

        <div className={`${sectionStyles.contentGridTop} grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-4`}>
          {collectionItems.map((item) => (
            <Card key={item.id} variant="portfolio">
              <div className="flex aspect-[1/1.1] items-center justify-center border-b-[4px] border-b-green-dark bg-[linear-gradient(135deg,#f6d5df,#e8f2df)] p-[18px]">
                <TattooIcon
                  kind={item.kind}
                  className={item.kind === "rose" ? "w-[160px] max-md:w-[140px]" : "h-[180px] w-[180px] max-md:h-[150px] max-md:w-[150px]"}
                />
              </div>

              <div className="p-[18px] max-md:p-5">
                <div className="mb-3 w-fit rounded-full border-[4px] border-green-dark bg-pink-soft px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-green-dark">
                  {item.status}
                </div>
                <h3 className="mb-2 text-xl font-black uppercase leading-none text-green-dark">{item.title}</h3>
                <p className="m-0 text-sm leading-[1.7] text-muted">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}