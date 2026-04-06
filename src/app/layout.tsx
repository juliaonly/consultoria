import type { Metadata, Viewport } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "consultoria IA",
    "automatizacion IA",
    "experiencia digital corporativa",
    "estrategia de producto IA",
    "consultoria tecnologia chile",
  ],
  openGraph: {
    title: site.title,
    description:
      "Direccion, experiencia y automatizacion IA para equipos que necesitan una ruta ejecutable y medible.",
    url: site.url,
    siteName: site.name,
    locale: site.ogLocale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: site.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sourceSans.variable} ${manrope.variable} antialiased bg-[var(--color-background)] text-[var(--color-foreground)]`}>
        {children}
      </body>
    </html>
  );
}
