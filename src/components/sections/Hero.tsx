import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteContent as mockSiteContent } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { messageStoreInfo } from "@/lib/whatsappMessages";
import { sectionStyles } from "@/lib/sectionStyles";
import type { SiteContent } from "@/types/site";

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  const heroName = content.hero.title;
  const heroSubname = content.hero.subtitle;
  const heroNote = content.hero.note;
  const heroImageUrl = content.hero.imageUrl || mockSiteContent.hero.imageUrl;
  const heroImageAlt = content.hero.imageAlt || `${heroName} hero`;
  const heroImageSize = content.hero.imageSize || "medium";
  const heroImageWrapClass =
    heroImageSize === "small"
      ? "w-[min(420px,84vw)] max-md:w-[min(300px,88vw)]"
      : heroImageSize === "large"
        ? "w-[min(760px,96vw)] max-md:w-[min(470px,96vw)]"
        : "w-[min(620px,92vw)] max-md:w-[min(390px,92vw)]";

  return (
    <section id="home" className={sectionStyles.hero}>
      <Container className="section-reveal">
        <div className="relative flex flex-col items-center overflow-hidden px-2 pb-4 pt-6 text-center max-md:px-0 max-md:pt-2">
          <div className="absolute top-10 h-[64%] w-[min(860px,92%)] rounded-[999px] bg-[radial-gradient(circle,rgba(var(--color-accent-soft),0.42),rgba(255,255,255,0)_68%)] blur-2xl max-md:top-16 max-md:w-full" />
          <div className="absolute top-[20%] h-20 w-20 rounded-full bg-white/35 blur-2xl max-md:hidden" />

          <div className={`relative z-10 ${heroImageWrapClass}`}>
            {heroImageUrl ? (
              <Image
                src={heroImageUrl}
                alt={heroImageAlt}
                width={800}
                height={900}
                className="w-full h-auto object-cover drop-shadow-[0_42px_56px_rgba(108,58,76,0.2)]"
                priority
                sizes="(max-width: 768px) 90vw, 70vw"
              />
            ) : null}
          </div>

          <div className="relative z-20 mt-2 flex max-w-[620px] flex-col items-center max-md:mt-1">
            <div className="font-ui text-[11px] font-black uppercase tracking-[0.34em] text-header-bg/76 max-md:text-[10px] max-md:tracking-[0.22em]">
              {heroSubname}
            </div>

            <h1 className="font-logo m-0 mt-3 text-[clamp(84px,11vw,168px)] font-normal leading-[0.8] text-pink-shock max-md:mt-2 max-md:text-[clamp(68px,20vw,112px)]">
              {heroName}
            </h1>

            <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.85] text-header-bg/82 max-md:mt-3 max-md:max-w-[32ch] max-md:text-[14px] max-md:leading-[1.72]">
              {heroNote}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 max-md:mt-5">
              <Button href="#produtos" variant="miniPrimary">
                Ver produtos
              </Button>
              <Button
                href={buildWhatsAppUrl(content.contact.whatsappPhone, messageStoreInfo())}
                variant="miniSecondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </Button>
              {content.contact.instagramUrl ? (
                <Button
                  href={content.contact.instagramUrl}
                  variant="miniSecondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
