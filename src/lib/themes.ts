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
  headerBackground: string;
  headerText: string;
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
    // Theme 1: rosa queimado + verde escuro + bege claro + oliva claro
    background: "244 237 221",
    surface: "252 247 238",
    headerBackground: "22 82 56",
    headerText: "252 247 238",
    primary: "22 82 56",
    secondary: "62 106 78",
    accent: "143 58 70",
    text: "30 54 44",
    muted: "88 112 97",
    border: "52 94 71",
    buttonPrimary: "22 82 56",
    buttonSecondary: "210 224 176",
    surfaceAlt: "233 240 211",
    accentSoft: "228 190 194",
    accentStrong: "123 46 60",
    accentVivid: "168 73 89",
  },
  "olive-vintage": {
    // Theme 2: doce retro colorido
    background: "247 234 203",
    surface: "255 245 224",
    headerBackground: "73 64 56",
    headerText: "255 245 224",
    primary: "227 104 136",
    secondary: "102 152 204",
    accent: "240 140 33",
    text: "73 64 56",
    muted: "115 104 93",
    border: "204 135 64",
    buttonPrimary: "227 104 136",
    buttonSecondary: "180 181 52",
    surfaceAlt: "239 226 191",
    accentSoft: "248 205 216",
    accentStrong: "214 120 39",
    accentVivid: "93 141 192",
  },
  "dark-oldschool": {
    // Theme 3: vinho e rosa vibrante
    background: "248 224 220",
    surface: "255 239 234",
    headerBackground: "138 72 94",
    headerText: "255 239 234",
    primary: "138 72 94",
    secondary: "33 138 10",
    accent: "255 128 170",
    text: "108 58 76",
    muted: "138 103 117",
    border: "148 84 104",
    buttonPrimary: "138 72 94",
    buttonSecondary: "202 226 173",
    surfaceAlt: "236 244 214",
    accentSoft: "255 210 223",
    accentStrong: "161 92 118",
    accentVivid: "255 128 170",
  },
  "cream-pink": {
    // Theme 4: mistico vibrante
    background: "24 20 24",
    surface: "39 31 36",
    headerBackground: "24 20 24",
    headerText: "245 221 199",
    primary: "245 221 199",
    secondary: "248 126 58",
    accent: "245 176 196",
    text: "245 221 199",
    muted: "206 181 164",
    border: "173 126 146",
    buttonPrimary: "161 92 118",
    buttonSecondary: "248 126 58",
    surfaceAlt: "56 46 53",
    accentSoft: "122 84 102",
    accentStrong: "161 92 118",
    accentVivid: "248 126 58",
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
    "--color-header-bg": theme.headerBackground,
    "--color-header-text": theme.headerText,
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
