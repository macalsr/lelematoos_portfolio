import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { shopInfoItems } from "@/data/shopInfo";
import { sectionStyles } from "@/lib/sectionStyles";

export function ShopInfoSection() {
  return (
    <section id="faq" className={sectionStyles.base}>
      <Container>
        <SectionHeading
          kicker="FAQ"
          title="Compra, envio e encomendas"
          text="Tudo que a pessoa precisa para comprar com segurança e entender o funcionamento da loja autoral."
        />

        <div className={`${sectionStyles.contentGridTop} grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1`}>
          {shopInfoItems.map((item) => (
            <Card key={item.id} variant="process">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-green-dark bg-green-soft text-lg font-black text-green-dark">
                {item.id}
              </div>
              <h3 className="mb-2.5 text-2xl font-black uppercase leading-none text-green-dark">{item.title}</h3>
              <p className="m-0 text-[15px] leading-[1.75] text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}