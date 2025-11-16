import type { Metadata } from "next";
import { LenisProvider } from "../components/lenis-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConsultorIA - Inteligencia aplicada a tus productos digitales",
  description:
    "ConsultorIA integra inteligencia artificial y diseno para crear experiencias web y soluciones empresariales a medida.",
  metadataBase: new URL("https://consultoria.josecruz.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ConsultorIA",
    description:
      "Soluciones empresariales impulsadas por IA que combinan estrategia, diseno y desarrollo full-stack.",
    url: "https://consultoria.josecruz.cl",
    siteName: "ConsultorIA",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-slate-950 text-slate-100">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
