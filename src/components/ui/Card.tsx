import type { ReactNode } from "react";

type CardVariant = "plain" | "quick" | "flash" | "process" | "portfolio" | "about";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

const cardVariants: Record<CardVariant, string> = {
  plain: "",
  quick: "rounded-[22px] p-5 text-center shadow-green-mid",
  flash: "flex h-full flex-col overflow-hidden rounded-[30px] shadow-green-hard",
  process: "rounded-[26px] p-6 shadow-pink-hard max-md:p-5",
  portfolio: "overflow-hidden rounded-[28px] shadow-pink-hard",
  about: "rounded-[26px] p-6 shadow-green-hard max-md:p-5",
};

export function Card({ children, className = "", variant = "plain" }: CardProps) {
  return (
    <div className={`border-[4px] border-green-dark bg-surface ${cardVariants[variant]} ${className}`}>
      {children}
    </div>
  );
}