import type { Metadata } from "next";
import { Imperial_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteContent } from "@/data/site";
import "./globals.css";

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  variable: "--font-imperial",
  weight: "400",
});

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
};

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