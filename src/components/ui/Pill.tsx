import type { ReactNode } from "react";

type PillVariant = "default" | "soft";

type PillProps = {
  children: ReactNode;
  className?: string;
  variant?: PillVariant;
};

const pillVariants: Record<PillVariant, string> = {
  default:
    "rounded-[20px] border-[4px] border-green-dark bg-surface p-4 text-xs font-black uppercase tracking-[0.14em] shadow-green-mid",
  soft:
    "rounded-[20px] border-[4px] border-green-dark bg-green-soft-2 p-4 text-xs font-black uppercase tracking-[0.14em] shadow-green-mid",
};

export function Pill({ children, className = "", variant = "default" }: PillProps) {
  return <div className={`${pillVariants[variant]} ${className}`}>{children}</div>;
}