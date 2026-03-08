import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { sectionStyles } from "@/lib/sectionStyles";
import type { GalleryItem } from "@/types/site";

type GallerySectionProps = {
  items: GalleryItem[];
};

export function GallerySection({ items }: GallerySectionProps) {
  return (
    <section id="galeria" className={`${sectionStyles.base} ${sectionStyles.tinted}`}>
      <Container>
        <SectionHeading
          kicker="Galeria"
          title="Universo visual da marca"
          text="Referências visuais, estudos e peças que conectam a origem tattoo com os produtos autorais."
        />

        <div className={`${sectionStyles.contentGridTop} grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-4`}>
          {items.map((item) => (
            <Card key={item.id} variant="portfolio">
              <div className="flex aspect-[1/1.1] items-center justify-center border-b border-b-green-dark/10 bg-[linear-gradient(135deg,#f3d4df,#dcebcf)] p-[18px]">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="h-full w-full rounded-xl object-cover"
                  loading="lazy"
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
