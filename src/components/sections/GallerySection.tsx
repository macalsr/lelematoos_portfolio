import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { TattooIcon } from "@/components/ui/TattooIcons";
import { galleryItems } from "@/data/gallery";
import { sectionStyles } from "@/lib/sectionStyles";

export function GallerySection() {
  return (
    <section id="galeria" className={`${sectionStyles.base} ${sectionStyles.tinted}`}>
      <Container>
        <SectionHeading
          kicker="Galeria"
          title="Universo visual da marca"
          text="Referências visuais, estudos e peças que conectam a origem tattoo com os produtos autorais."
        />

        <div className={`${sectionStyles.contentGridTop} grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-4`}>
          {galleryItems.map((item) => (
            <Card key={item.id} variant="portfolio">
              <div className="flex aspect-[1/1.1] items-center justify-center border-b-[4px] border-b-green-dark bg-[linear-gradient(135deg,#f3d4df,#dcebcf)] p-[18px]">
                <TattooIcon
                  kind={item.kind}
                  className={item.kind === "rose" ? "w-[160px] max-md:w-[140px]" : "h-[180px] w-[180px] max-md:h-[150px] max-md:w-[150px]"}
                />
              </div>

              <div className="p-[18px] max-md:p-5">
                <h3 className="mb-2 text-xl font-black uppercase leading-none text-green-dark">
                  {item.title}
                </h3>
                <p className="m-0 text-sm leading-[1.7] text-muted">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}