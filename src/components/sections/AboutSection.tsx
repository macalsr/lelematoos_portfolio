import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { siteContent } from "@/data/site";
import { sectionStyles } from "@/lib/sectionStyles";

function getToneClass(tone: "default" | "pink" | "green" | undefined): string {
  if (tone === "pink") return "bg-pink-soft";
  if (tone === "green") return "bg-green-soft";
  return "bg-surface";
}

export function AboutSection() {
  return (
    <section id="sobre" className={sectionStyles.base}>
      <Container>
        <SectionHeading
          kicker="Sobre a artista"
          title="Tatuagem como origem da marca"
          text="A Lele Matoos é tatuadora e artista visual. A loja nasce desse repertório old school e transforma essa linguagem em peças autorais."
        />

        <div className={`${sectionStyles.contentGridTop} grid grid-cols-[0.95fr_1.05fr] items-start gap-7 max-lg:grid-cols-1 max-md:gap-5`}>
          <div className="grid gap-4">
            {siteContent.about.cards.map((card) => (
              <Card key={card.title} variant="about" className={getToneClass(card.tone)}>
                <h3 className="mb-2.5 text-2xl font-black uppercase leading-none text-green-dark">{card.title}</h3>
                <p className="m-0 leading-[1.8] text-muted">{card.description}</p>
              </Card>
            ))}
          </div>

          <div>
            <div className="mt-6 grid grid-cols-2 gap-[14px] max-md:mt-4 max-md:grid-cols-1">
              {siteContent.about.pills.map((pill) => (
                <Pill key={pill}>{pill}</Pill>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}