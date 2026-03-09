import type { ReactNode } from "react";

type CardVariant = "plain" | "quick" | "flash" | "process" | "portfolio";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

const cardVariants: Record<CardVariant, string> = {
  plain: "",
  quick: "rounded-[24px] p-5 text-center shadow-[0_18px_36px_rgba(138,72,94,0.06)]",
  flash: "flex h-full flex-col overflow-hidden rounded-[22px] shadow-[0_18px_42px_rgba(138,72,94,0.06)] transition-transform duration-300 hover:-translate-y-1",
  process: "rounded-[28px] p-6 shadow-[0_20px_48px_rgba(138,72,94,0.08)] max-md:p-5",
  portfolio: "overflow-hidden rounded-[28px]",
};

export function Card({ children, className = "", variant = "plain" }: CardProps) {
  return (
    <div className={`border border-green-dark/15 bg-surface ${cardVariants[variant]} ${className}`}>
      {children}
    </div>
  );
}
