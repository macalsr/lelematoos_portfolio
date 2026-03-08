import { Container } from "@/components/ui/Container";
import { siteContent as mockSiteContent } from "@/data/site";
import { RoseIcon } from "@/components/ui/TattooIcons";
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
      ? "w-[min(320px,82%)] max-md:w-[min(260px,84%)]"
      : heroImageSize === "large"
        ? "w-[min(520px,95%)] max-md:w-[min(420px,95%)]"
        : "w-[min(420px,90%)]";

  return (
    <section id="home" className={sectionStyles.hero}>
      <Container className="flex items-center justify-center">
        <div className="flex w-full max-w-[760px] flex-col items-center gap-6 text-center max-md:gap-5">
          <div className="flex flex-col items-center gap-[18px]">
            <div className={heroImageWrapClass}>
              {heroImageUrl ? (
                <img
                  src={heroImageUrl}
                  alt={heroImageAlt}
                  className="w-full rounded-xl object-cover"
                  loading="eager"
                />
              ) : (
                <RoseIcon className="w-full" />
              )}
            </div>

            <h1 className="font-logo m-0 text-[clamp(62px,8vw,104px)] font-normal leading-[0.9] text-pink-shock">
              {heroName}
            </h1>
            <div className="font-ui text-xs font-black uppercase tracking-[0.24em] text-green-mid">
              {heroSubname}
            </div>
          </div>

          <p className="font-body px-2 text-center text-[13px] font-extrabold uppercase tracking-[0.14em] text-muted max-md:text-xs max-md:leading-[1.55] max-md:tracking-[0.1em]">
            {heroNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
