import type { Metadata, Viewport } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import { LenisProvider } from "../components/lenis-provider";
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
  title: "ConsultorIA | Estrategia, experiencia y automatizacion IA",
  description:
    "ConsultorIA ayuda a equipos corporativos a definir estrategia, disenar experiencias y activar automatizacion IA con criterio ejecutivo y ritmo de entrega real.",
  metadataBase: new URL("https://consultoria.josecruz.cl"),
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
    title: "ConsultorIA | Estrategia, experiencia y automatizacion IA",
    description:
      "Direccion, experiencia y automatizacion IA para equipos que necesitan una ruta ejecutable, no solo una prueba aislada.",
    url: "https://consultoria.josecruz.cl",
    siteName: "ConsultorIA",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ConsultorIA | Estrategia, experiencia y automatizacion IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ConsultorIA | Estrategia, experiencia y automatizacion IA",
    description:
      "Consultoria premium para definir, prototipar y escalar productos y operaciones con IA.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#060816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sourceSans.variable} ${manrope.variable} antialiased bg-[var(--color-background)] text-[var(--color-foreground)]`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
