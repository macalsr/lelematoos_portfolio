import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  text: string;
  children?: ReactNode;
};

export function SectionHeading({ kicker, title, text, children }: SectionHeadingProps) {
  return (
    <div className="section-reveal max-w-[860px]">
      <span className="font-ui mb-4 inline-flex rounded-full border border-pink-dark/15 bg-pink-soft/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-pink-dark max-md:mb-3">
        {kicker}
      </span>
      <h2 className="font-heading mb-5 max-w-[12ch] text-[clamp(34px,5vw,60px)] font-black uppercase leading-[1.07] text-green-dark max-md:mb-4 max-md:max-w-none max-md:leading-[0.98]">
        {title}
      </h2>
      {text.trim() ? (
        <p className="font-body m-0 max-w-[680px] text-lg leading-[1.82] text-muted max-md:text-[15px] max-md:leading-[1.7]">
          {text}
        </p>
      ) : null}
      {children}
    </div>
  );
}
