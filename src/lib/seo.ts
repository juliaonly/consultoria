import { site } from "@/config/site";
import { contactInfo, engagementModels, services } from "@/data/content";

export function getSocialImageUrl() {
  return new URL("/opengraph-image", site.url).toString();
}

export function getHomeSchemas() {
  const socialImageUrl = getSocialImageUrl();

  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      image: socialImageUrl,
      description: site.description,
      areaServed: ["Chile", "LatAm", "Remote"],
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.city,
        addressCountry: site.location.country,
      },
      founder: {
        "@type": "Person",
        name: contactInfo.name,
        jobTitle: contactInfo.role,
      },
      sameAs: [contactInfo.linkedin],
      email: contactInfo.email,
      telephone: contactInfo.phone,
      serviceType: services.map((service) => service.title),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Capacidades ConsultorIA",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          name: service.title,
          description: service.description,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      inLanguage: site.locale,
      description: site.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${site.name} | Home`,
      url: site.url,
      inLanguage: site.locale,
      description: site.description,
      primaryImageOfPage: socialImageUrl,
      about: engagementModels,
    },
  ];
}
