export const FONT_VARIANTS = [
  "classic-script",
  "vintage-bold",
  "clean-editorial",
  "oldschool-soft",
] as const;

export type FontVariant = (typeof FONT_VARIANTS)[number];

export const DEFAULT_FONT_VARIANT: FontVariant = "classic-script";

export function isFontVariant(value: string): value is FontVariant {
  return (FONT_VARIANTS as readonly string[]).includes(value);
}

export function getSafeFontVariant(value?: string | null): FontVariant {
  if (!value) return DEFAULT_FONT_VARIANT;
  const normalized = value.trim().toLowerCase();
  return isFontVariant(normalized) ? normalized : DEFAULT_FONT_VARIANT;
}

export function getFontVariantBodyClass(variant: FontVariant): string {
  return `font-variant-${variant}`;
}
