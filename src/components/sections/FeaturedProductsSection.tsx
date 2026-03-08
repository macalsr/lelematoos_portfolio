import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { TattooIcon } from "@/components/ui/TattooIcons";
import { products } from "@/data/products";
import { siteContent } from "@/data/site";
import { sectionStyles } from "@/lib/sectionStyles";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const PHONE = siteContent.contact.whatsappPhone;

export function FeaturedProductsSection() {
  return (
    <section id="produtos" className={`${sectionStyles.base} ${sectionStyles.tinted}`}>
      <Container>
        <SectionHeading
          kicker="Produtos em destaque"
          title="Peças autorais da marca"
          text="A linguagem old school da Lele Matoos vira produto em bandeiras, prints e ecobags com identidade própria."
        />

        <div className={`${sectionStyles.contentGridTop} grid grid-cols-3 gap-[22px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-4`}>
          {products.map((product) => (
            <Card key={product.id} variant="flash">
              <div className="flex aspect-square items-center justify-center border-b-[4px] border-b-green-dark bg-[linear-gradient(135deg,#f6d5df,#f8e6ec_42%,#dcebcf)] p-[22px]">
                <div className={product.kind === "rose" ? "w-[min(240px,100%)]" : ""}>
                  <TattooIcon
                    kind={product.kind}
                    className={product.kind === "rose" ? "w-full" : "h-[220px] w-[220px] max-md:h-[180px] max-md:w-[180px]"}
                  />
                </div>
              </div>

              <div className="flex h-full flex-col gap-[14px] p-[22px] max-md:gap-3.5 max-md:p-5">
                <div className="w-fit rounded-full border-[4px] border-green-dark bg-pink-soft px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-green-dark">
                  {product.tag}
                </div>
                <h3 className="m-0 text-[26px] font-black uppercase leading-[0.95] text-green-dark max-md:text-2xl">
                  {product.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.75] text-muted">{product.description}</p>
                <div className="mt-0.5 text-[22px] font-black uppercase text-pink-dark">{product.price}</div>

                <div className="mt-auto grid gap-3">
                  <Button
                    href={buildWhatsAppUrl(PHONE, product.primaryMessage)}
                    variant="miniPrimary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar
                  </Button>
                  <Button
                    href={buildWhatsAppUrl(PHONE, product.secondaryMessage)}
                    variant="miniSecondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}