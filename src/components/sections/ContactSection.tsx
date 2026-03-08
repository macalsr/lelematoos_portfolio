import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/data/site";
import { sectionStyles } from "@/lib/sectionStyles";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const PHONE = siteContent.contact.whatsappPhone;

export function ContactSection() {
  return (
    <>
      <section id="contato" className={`${sectionStyles.base} ${sectionStyles.tintedTop}`}>
        <Container>
          <SectionHeading
            kicker="Contato"
            title="Reserva, agenda e dúvidas"
            text="O objetivo aqui é reduzir atrito. O site apresenta e o WhatsApp fecha."
          />

          <div className={`${sectionStyles.contentGridTop} grid grid-cols-[1.1fr_0.9fr] items-center gap-6 rounded-[30px] border-[4px] border-green-dark bg-pink-soft p-[34px] shadow-[8px_8px_0_#193f31] max-lg:grid-cols-1 max-md:gap-5 max-md:p-5`}>
            <div>
              <h3 className="mb-3 text-[clamp(28px,4vw,42px)] font-black uppercase leading-none text-green-dark max-md:leading-[1.05]">
                {siteContent.contact.cityTitle}
              </h3>
              <p className="m-0 max-w-[560px] text-lg leading-[1.75] text-muted max-md:text-[15px] max-md:leading-[1.65]">
                {siteContent.contact.description}
              </p>
            </div>

            <div className="grid gap-[14px]">
              {siteContent.contact.actions.map((action) =>
                action.href ? (
                  <Button
                    key={action.label}
                    href={action.href}
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

              <Button
                href={buildWhatsAppUrl(PHONE, "Oi! Quero agendar uma tattoo.")}
                variant="contactMain"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteContent.contact.mainCtaText}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Button
        href={buildWhatsAppUrl(PHONE, "Oi! Tenho interesse em reservar um flash.")}
        variant="floating"
        target="_blank"
        rel="noopener noreferrer"
      >
        {siteContent.contact.floatingText}
      </Button>
    </>
  );
}
