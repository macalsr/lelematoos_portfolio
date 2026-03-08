import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f5efe8",
        surface: "#fff8f6",
        "green-dark": "#193f31",
        "green-mid": "#315846",
        "green-soft": "#d9e9cb",
        "green-soft-2": "#e8f2df",
        pink: "#e7a4be",
        "pink-soft": "#f4cad7",
        "pink-dark": "#cb5c88",
        "pink-shock": "#ff4f9a",
        muted: "#4b6a5a",
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
