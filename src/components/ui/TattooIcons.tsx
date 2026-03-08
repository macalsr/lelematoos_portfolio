import type { FlashKind, PortfolioKind } from "@/types/site";

export type TattooIconKind = FlashKind | PortfolioKind;

export function RoseIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#102733" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#f4432c" d="M260 80c58-44 148-22 180 44 20 42 10 96-24 132-24 26-54 35-84 45-28 10-52 22-72 46-20-24-44-36-72-46-30-10-60-19-84-45-34-36-44-90-24-132 32-66 122-88 180-44z"/>
        <path fill="#fffdf8" d="M186 184c16-26 48-42 82-36-20 8-36 22-46 40 28-6 62 2 84 26-32 0-58 12-78 30-8-22-20-42-42-60z"/>
        <path fill="#f4432c" d="M214 270c30-20 66-28 102-18-26 8-46 20-62 40 30-2 58 10 76 28-26 0-48 8-66 22-18 14-30 30-40 52-2-28-10-54-28-78-4-6-8-10-18-14z"/>
        <path fill="#a5c63b" d="M164 344c-34 4-62 20-84 48 36-6 66 2 88 20-2-22-2-44-4-68z"/>
        <path fill="#a5c63b" d="M360 344c34 4 62 20 84 48-36-6-66 2-88 20 2-22 2-44 4-68z"/>
        <path fill="#b36f3e" d="M254 338c-10 44-12 86-6 126 16-34 44-58 78-76-30-4-54-18-72-50z"/>
        <path fill="#b36f3e" d="M248 338c-28 20-50 42-66 68-12 20-20 40-26 62 20-20 44-34 74-40 6-30 12-60 18-90z"/>
      </g>
    </svg>
  );
}

export function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#102733" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#f4432c" d="M110 38c20-24 58-26 80-4 22 22 22 58 0 80l-80 74-80-74c-22-22-22-58 0-80 22-22 60-20 80 4z"/>
        <path fill="#fffdf8" d="M72 82c10-14 30-22 48-16-12 4-22 12-28 22 14-2 32 2 42 14-16 0-30 8-40 18-6-12-12-24-22-38z"/>
        <path fill="#b36f3e" d="M110 188v24"/>
      </g>
    </svg>
  );
}

export function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#102733" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#f4432c" d="M120 24l18 42h46l-36 28 14 44-42-26-42 26 14-44-36-28h46z"/>
        <path fill="#fffdf8" d="M120 54l8 18h20l-16 12 6 20-18-12-18 12 6-20-16-12h20z"/>
        <path fill="#f6d55c" d="M120 142l8 20h22l-18 12 6 20-18-12-18 12 6-20-18-12h22z"/>
      </g>
    </svg>
  );
}

export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#102733" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#a5c63b" d="M120 26c46 10 78 44 84 88-40-12-74-6-104 18-4-42 4-76 20-106z"/>
        <path fill="#dcebcf" d="M120 52c24 12 40 30 48 56-24-4-44 2-60 16-2-26 2-48 12-72z"/>
        <path fill="#b36f3e" d="M124 108c0 48-12 84-32 112"/>
      </g>
    </svg>
  );
}

type TattooIconProps = {
  kind: TattooIconKind;
  className?: string;
};

export function TattooIcon({ kind, className = "" }: TattooIconProps) {
  if (kind === "heart") {
    return <HeartIcon className={className} />;
  }

  if (kind === "star") {
    return <StarIcon className={className} />;
  }

  if (kind === "leaf") {
    return <LeafIcon className={className} />;
  }

  return <RoseIcon className={className} />;
}