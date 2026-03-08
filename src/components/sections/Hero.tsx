import { siteContent } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { RoseIcon } from "@/components/ui/TattooIcons";
import { sectionStyles } from "@/lib/sectionStyles";

export function Hero() {
  return (
    <section id="home" className={sectionStyles.hero}>
      <Container className="flex items-center justify-center">
        <div className="flex w-full max-w-[760px] flex-col items-center gap-6 text-center max-md:gap-5">
          <div className="flex flex-col items-center gap-[18px]">
            <div className="w-[min(420px,90%)]">
              <RoseIcon className="w-full" />
            </div>

            <h1 className="m-0 font-imperial text-[clamp(62px,8vw,104px)] font-normal leading-[0.9] text-pink-shock">
              {siteContent.brand.name}
            </h1>
            <div className="text-xs font-black uppercase tracking-[0.24em] text-green-mid">
              {siteContent.brand.subname}
            </div>
          </div>

          <p className="px-2 text-center text-[13px] font-extrabold uppercase tracking-[0.14em] text-muted max-md:text-xs max-md:leading-[1.55] max-md:tracking-[0.1em]">
            {siteContent.hero.note}
          </p>
        </div>
      </Container>
    </section>
  );
}