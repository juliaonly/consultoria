import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Methodology } from "@/components/sections/Methodology";
import { Footer } from "@/components/sections/Footer";
import { contactInfo, engagementModels, services } from "@/data/content";

export default function Home() {
  const socialImageUrl = new URL("/opengraph-image", contactInfo.website).toString();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ConsultorIA",
    url: contactInfo.website,
    image: socialImageUrl,
    description:
      "Consultoria premium para definir estrategia, disenar experiencias y activar automatizacion IA con criterio ejecutivo.",
    areaServed: ["Chile", "LatAm", "Remoto"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vina del Mar",
      addressCountry: "CL",
    },
    founder: {
      "@type": "Person",
      name: contactInfo.name,
      jobTitle: contactInfo.role,
    },
    sameAs: [contactInfo.linkedin],
    email: contactInfo.email,
    telephone: contactInfo.phone,
    knowsAbout: [
      "Estrategia de producto con IA",
      "Ingenieria de experiencias",
      "Automatizacion con agentes y observabilidad",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios ConsultorIA",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: service.title,
        description: service.description,
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ConsultorIA",
    url: contactInfo.website,
    inLanguage: "es-CL",
    description:
      "ConsultorIA ayuda a equipos de alta exigencia a pasar de la exploracion a una hoja de ruta ejecutable con IA.",
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ConsultorIA | Home",
    url: contactInfo.website,
    about: engagementModels,
    primaryImageOfPage: socialImageUrl,
  };

  return (
    <div className="relative isolate overflow-hidden bg-[var(--color-background)] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema, pageSchema]),
        }}
      />
      <Header />
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <TrustStrip />
        <Services />
        <CaseStudies />
        <Methodology />
      </main>
      <Footer />
    </div>
  );
}
