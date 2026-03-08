import type { Metadata } from "next";
import {
  Bebas_Neue,
  Caveat,
  Fjalla_One,
  Imperial_Script,
  Lora,
  Nunito,
  Oswald,
  Playfair_Display,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { getThemeCssVariables, getSafeThemeVariant } from "@/lib/themes";
import { getFontVariantBodyClass, getSafeFontVariant } from "@/lib/fonts";
import { getSiteContent } from "@/lib/siteContent";
import { getSiteSeo } from "@/lib/siteSeo";
import "./globals.css";

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  variable: "--font-imperial",
  weight: "400",
});
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "600", "700"],
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "600", "700"],
});
const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  variable: "--font-fjalla",
  weight: "400",
});

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSiteSeo();

  return {
    title: seo.title,
    description: seo.description,
    icons: seo.faviconUrl
      ? {
          icon: [{ url: seo.faviconUrl }],
          shortcut: [{ url: seo.faviconUrl }],
          apple: [{ url: seo.faviconUrl }],
        }
      : undefined,
    openGraph: seo.ogImageUrl
      ? {
          title: seo.title,
          description: seo.description,
          images: [
            {
              url: seo.ogImageUrl,
              alt: seo.ogImageAlt ?? seo.title,
            },
          ],
        }
      : undefined,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getSiteContent();
  const fontVariant = getSafeFontVariant(content.fontVariant);
  const variantClass = getFontVariantBodyClass(fontVariant);
  const themeVariant = getSafeThemeVariant(content.themeVariant);
  const themeVariables = getThemeCssVariables(themeVariant);

  return (
    <html lang="pt-BR">
      <body
        className={`${imperialScript.variable} ${oswald.variable} ${bebasNeue.variable} ${playfairDisplay.variable} ${lora.variable} ${nunito.variable} ${caveat.variable} ${fjallaOne.variable} ${variantClass} bg-bg text-green-dark font-body`}
        style={themeVariables as React.CSSProperties}
      >
        <div className="h-2 w-full bg-button-primary" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
