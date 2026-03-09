import type { Metadata } from "next";
import {
  Caveat,
  Fjalla_One,
  Imperial_Script,
  Nunito,
} from "next/font/google";
import { getSiteSeo } from "@/lib/siteSeo";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});
const imperialScript = Imperial_Script({
  subsets: ["latin"],
  variable: "--font-imperial-script",
  weight: "400",
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
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} ${imperialScript.variable} ${caveat.variable} ${fjallaOne.variable} bg-bg text-green-dark font-body`}>
        {children}
      </body>
    </html>
  );
}
