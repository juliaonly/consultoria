import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Methodology } from "@/components/sections/Methodology";
import { Footer } from "@/components/sections/Footer";
import { getHomeSchemas } from "@/lib/seo";

export default function Home() {
  const schema = getHomeSchemas();

  return (
    <div className="relative isolate overflow-hidden bg-[var(--color-background)] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <Header />
      <main id="contenido-principal" className="relative z-10 w-full overflow-hidden">
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
