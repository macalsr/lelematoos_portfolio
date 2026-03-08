import type { Metadata } from "next";
import { Imperial_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { getSiteSeo } from "@/lib/siteSeo";
import "./globals.css";

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  variable: "--font-imperial",
  weight: "400",
});

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSiteSeo();

  return {
    title: seo.title,
    description: seo.description,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${imperialScript.variable} bg-bg text-green-dark`}>
        <div className="h-2 w-full bg-green-dark" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
