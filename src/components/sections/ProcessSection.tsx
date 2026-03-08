import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { processSteps } from "@/data/process";
import { sectionStyles } from "@/lib/sectionStyles";

export function ProcessSection() {
  return (
    <section id="como-funciona" className={sectionStyles.base}>
      <Container>
        <SectionHeading
          kicker="Como funciona"
          title="Fluxo simples, sem malabarismo"
          text="A pessoa entende rápido como reservar. Isso reduz dúvida, evita mensagem repetida e passa uma sensação de processo profissional."
        />

        <div className={`${sectionStyles.contentGridTop} grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1`}>
          {processSteps.map((step) => (
            <Card key={step.id} variant="process">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-green-dark bg-green-soft text-lg font-black text-green-dark">
                {step.id}
              </div>
              <h3 className="mb-2.5 text-2xl font-black uppercase leading-none text-green-dark">
                {step.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.75] text-muted">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}