import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { messageStoreInfo } from "@/lib/whatsappMessages";
import type { SiteContent } from "@/types/site";

type ContactSectionProps = {
  content: SiteContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  const storeInfoHref = buildWhatsAppUrl(content.contact.whatsappPhone, messageStoreInfo());
  const instagramHref = content.contact.instagramUrl?.trim();
  const whatsappFloatingText = content.contact.floatingText || "WhatsApp";
  const instagramFloatingText = content.contact.floatingInstagramText || "Instagram";

  return (
    <>
      <Button
        href={storeInfoHref}
        variant="floating"
        className={instagramHref ? "bottom-[66px] sm:bottom-[84px]" : ""}
        target="_blank"
        rel="noopener noreferrer"
      >
        {whatsappFloatingText}
      </Button>

      {instagramHref ? (
        <Button href={instagramHref} variant="floating" target="_blank" rel="noopener noreferrer">
          {instagramFloatingText}
        </Button>
      ) : null}
    </>
  );
}
