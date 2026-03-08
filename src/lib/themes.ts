export const THEME_VARIANTS = [
  "classic-rose",
  "olive-vintage",
  "dark-oldschool",
  "cream-pink",
] as const;

export type ThemeVariant = (typeof THEME_VARIANTS)[number];

export type ThemeTokens = {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  muted: string;
  border: string;
  buttonPrimary: string;
  buttonSecondary: string;
  surfaceAlt: string;
  accentSoft: string;
  accentStrong: string;
  accentVivid: string;
};

export const DEFAULT_THEME_VARIANT: ThemeVariant = "classic-rose";

export const THEME_TOKENS: Record<ThemeVariant, ThemeTokens> = {
  "classic-rose": {
    background: "245 239 232",
    surface: "255 248 246",
    primary: "25 63 49",
    secondary: "49 88 70",
    accent: "231 164 190",
    text: "25 63 49",
    muted: "75 106 90",
    border: "25 63 49",
    buttonPrimary: "25 63 49",
    buttonSecondary: "217 233 203",
    surfaceAlt: "232 242 223",
    accentSoft: "244 202 215",
    accentStrong: "203 92 136",
    accentVivid: "255 79 154",
  },
  "olive-vintage": {
    background: "239 234 220",
    surface: "249 245 234",
    primary: "56 76 50",
    secondary: "101 122 86",
    accent: "198 160 138",
    text: "50 66 44",
    muted: "92 108 78",
    border: "56 76 50",
    buttonPrimary: "56 76 50",
    buttonSecondary: "214 223 191",
    surfaceAlt: "231 236 214",
    accentSoft: "231 206 186",
    accentStrong: "155 112 92",
    accentVivid: "192 129 99",
  },
  "dark-oldschool": {
    background: "33 32 36",
    surface: "46 45 51",
    primary: "236 223 194",
    secondary: "199 182 143",
    accent: "181 107 128",
    text: "236 223 194",
    muted: "190 177 150",
    border: "236 223 194",
    buttonPrimary: "94 74 46",
    buttonSecondary: "78 95 84",
    surfaceAlt: "58 57 64",
    accentSoft: "130 88 102",
    accentStrong: "212 138 159",
    accentVivid: "238 118 152",
  },
  "cream-pink": {
    background: "252 247 242",
    surface: "255 252 249",
    primary: "87 84 88",
    secondary: "129 124 133",
    accent: "236 181 199",
    text: "87 84 88",
    muted: "130 122 133",
    border: "114 107 121",
    buttonPrimary: "114 107 121",
    buttonSecondary: "236 238 225",
    surfaceAlt: "246 239 232",
    accentSoft: "247 217 227",
    accentStrong: "199 125 151",
    accentVivid: "232 115 155",
  },
};

export function isThemeVariant(value: string): value is ThemeVariant {
  return (THEME_VARIANTS as readonly string[]).includes(value);
}

export function getSafeThemeVariant(value?: string | null): ThemeVariant {
  if (!value) return DEFAULT_THEME_VARIANT;
  const normalized = value.trim().toLowerCase();
  return isThemeVariant(normalized) ? normalized : DEFAULT_THEME_VARIANT;
}

export function getThemeCssVariables(variant: ThemeVariant): Record<string, string> {
  const theme = THEME_TOKENS[variant];

  return {
    "--color-bg": theme.background,
    "--color-surface": theme.surface,
    "--color-primary": theme.primary,
    "--color-secondary": theme.secondary,
    "--color-accent": theme.accent,
    "--color-text": theme.text,
    "--color-muted": theme.muted,
    "--color-border": theme.border,
    "--color-button-primary": theme.buttonPrimary,
    "--color-button-secondary": theme.buttonSecondary,
    "--color-surface-alt": theme.surfaceAlt,
    "--color-accent-soft": theme.accentSoft,
    "--color-accent-strong": theme.accentStrong,
    "--color-accent-vivid": theme.accentVivid,
  };
}
