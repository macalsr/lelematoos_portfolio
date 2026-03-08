import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "green-dark": "rgb(var(--color-primary) / <alpha-value>)",
        "green-mid": "rgb(var(--color-secondary) / <alpha-value>)",
        "green-soft": "rgb(var(--color-button-secondary) / <alpha-value>)",
        "green-soft-2": "rgb(var(--color-surface-alt) / <alpha-value>)",
        pink: "rgb(var(--color-accent) / <alpha-value>)",
        "pink-soft": "rgb(var(--color-accent-soft) / <alpha-value>)",
        "pink-dark": "rgb(var(--color-accent-strong) / <alpha-value>)",
        "pink-shock": "rgb(var(--color-accent-vivid) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        "button-primary": "rgb(var(--color-button-primary) / <alpha-value>)",
        "button-secondary": "rgb(var(--color-button-secondary) / <alpha-value>)",
      },
      boxShadow: {
        "green-hard": "6px 6px 0 #193f31",
        "green-mid": "4px 4px 0 #193f31",
        "pink-hard": "6px 6px 0 #cb5c88",
        "pink-strong": "8px 8px 0 #193f31",
      },
      borderRadius: {
        xl2: "34px",
        lg2: "24px",
        md2: "18px",
      },
      maxWidth: {
        container: "1220px",
      },
    },
  },
  plugins: [],
};

export default config;
