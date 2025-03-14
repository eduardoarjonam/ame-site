import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agencia de Marketing y Automatizaciones | Soluciones Digitales",
  description: "Potencia tu negocio con estrategias de marketing digital y automatizaciones inteligentes. Expertos en crecimiento empresarial y transformación digital.",
  keywords: "marketing digital, automatizaciones, agencia marketing, SEO, desarrollo web, estrategia digital",
  openGraph: {
    title: "Agencia de Marketing y Automatizaciones | Soluciones Digitales",
    description: "Potencia tu negocio con estrategias de marketing digital y automatizaciones inteligentes.",
    type: "website",
    locale: "es_ES"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
