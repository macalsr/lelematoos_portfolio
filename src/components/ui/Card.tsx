import type { ReactNode } from "react";

type CardVariant = "plain" | "quick" | "flash" | "process" | "portfolio";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

const cardVariants: Record<CardVariant, string> = {
  plain: "",
  quick: "rounded-[22px] p-5 text-center",
  flash: "flex h-full flex-col overflow-hidden rounded-[30px]",
  process: "rounded-[26px] p-6 max-md:p-5",
  portfolio: "overflow-hidden rounded-[28px]",
};

export function Card({ children, className = "", variant = "plain" }: CardProps) {
  return (
    <div className={`border border-green-dark/15 bg-surface ${cardVariants[variant]} ${className}`}>
      {children}
    </div>
  );
}
