import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  text: string;
  children?: ReactNode;
};

export function SectionHeading({ kicker, title, text, children }: SectionHeadingProps) {
  return (
    <>
      <span className="font-ui mb-3 inline-block text-xs font-black uppercase tracking-[0.25em] text-pink-dark">
        {kicker}
      </span>
      <h2 className="font-heading mb-[14px] text-[clamp(34px,5vw,58px)] font-black uppercase leading-[0.92] text-green-dark">
        {title}
      </h2>
      {text.trim() ? (
        <p className="font-body m-0 max-w-[760px] text-lg leading-[1.75] text-muted max-md:text-[15px] max-md:leading-[1.65]">
          {text}
        </p>
      ) : null}
      {children}
    </>
  );
}
