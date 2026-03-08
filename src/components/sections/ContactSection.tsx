import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { sectionStyles } from "@/lib/sectionStyles";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { messageStoreInfo } from "@/lib/whatsappMessages";
import type { SiteContent } from "@/types/site";

type ContactSectionProps = {
  content: SiteContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  const storeInfoHref = buildWhatsAppUrl(content.contact.whatsappPhone, messageStoreInfo());

  return (
    <>
      <section id="contato" className={`${sectionStyles.base} ${sectionStyles.tintedTop}`}>
        <Container>
          <SectionHeading
            kicker="Contato"
            title="Compras, encomendas e dúvidas"
            text="Fale direto com a marca para comprar produtos, acompanhar lançamentos e tirar dúvidas sobre envio."
          />

          <div className={`${sectionStyles.contentGridTop} grid grid-cols-[1.1fr_0.9fr] items-center gap-6 rounded-[30px] border-[4px] border-green-dark bg-pink-soft p-[34px] shadow-[8px_8px_0_#193f31] max-lg:grid-cols-1 max-md:gap-5 max-md:p-5`}>
            <div>
              <h3 className="mb-3 text-[clamp(28px,4vw,42px)] font-black uppercase leading-none text-green-dark max-md:leading-[1.05]">
                {content.contact.cityTitle}
              </h3>
              <p className="m-0 max-w-[560px] text-lg leading-[1.75] text-muted max-md:text-[15px] max-md:leading-[1.65]">
                {content.contact.description}
              </p>
            </div>

            <div className="grid gap-[14px]">
              {content.contact.actions.map((action) =>
                action.href ? (
                  <Button
                    key={action.label}
                    href={action.href.includes("wa.me") ? storeInfoHref : action.href}
                    variant="contactAction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {action.label}
                  </Button>
                ) : (
                  <div
                    key={action.label}
                    className="rounded-[20px] border-[4px] border-green-dark bg-surface p-[18px] text-[13px] font-black uppercase tracking-[0.12em] text-green-dark shadow-green-mid"
                  >
                    {action.label}
                  </div>
                ),
              )}

              <Button href={storeInfoHref} variant="contactMain" target="_blank" rel="noopener noreferrer">
                {content.contact.mainCtaText}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Button href={storeInfoHref} variant="floating" target="_blank" rel="noopener noreferrer">
        {content.contact.floatingText}
      </Button>
    </>
  );
}
