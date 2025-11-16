"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Service, CaseStudy, Testimonial } from "@/types/content";
import { ServiceGrid } from "@/components/cards/service-grid";
import { CaseCarousel } from "@/components/cards/case-carousel";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { ContactForm } from "@/components/contact-form";
import { MotionSection } from "@/components/motion-section";
import { trackEvent } from "@/lib/analytics";
import { useLiveMetrics } from "@/hooks/use-live-metrics";
import { ArrowIcon } from "@/components/icons";

const navigation = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Casos", href: "#casos" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "#contacto" },
];

const services: Service[] = [
  {
    title: "Arquitectura de productos IA",
    subtitle: "Discovery estratégico",
    description:
      "Evaluamos procesos, modelamos la plataforma y dejamos un backlog priorizado listo para PMO y squads.",
    points: [
      "Workshops ejecutivos + matriz de priorización",
      "Blueprint multicloud con controles de seguridad",
      "Playbooks de gobernanza y ROI trazable",
    ],
    image: "/illustrations/mockup-architecture.svg",
    imageAlt: "Blueprint ejecutivo y tablero de arquitectura de IA",
    badge: "Advisory",
  },
  {
    title: "Ingeniería de experiencias",
    subtitle: "Interfaces inmersivas",
    description:
      "Transformamos journeys críticos en interfaces sensoriales, accesibles y sincronizadas con datos en vivo.",
    points: [
      "Design systems AA/AAA con microinteracciones",
      "Testing asistido + insights en vivo",
      "Contenido multimodal con IA generativa",
    ],
    image: "/illustrations/mockup-experience.svg",
    imageAlt: "Dashboard de experiencia multicanal con módulos interactivos",
    badge: "Studio",
  },
  {
    title: "Automatización full stack",
    subtitle: "Agentes + observabilidad",
    description:
      "Orquestamos agentes, datos y controles para operar IA 24/7 con telemetría y feedback loops definidos.",
    points: [
      "Orquestación de agentes con guardrails",
      "Dashboards de observabilidad y alertas",
      "Integración con billing, auth y compliance",
    ],
    image: "/illustrations/mockup-automation.svg",
    imageAlt: "Panel operativo de automatización con agentes y métricas",
    badge: "Ops",
  },
];

const caseStudies: CaseStudy[] = [
  {
    company: "Atlas Maritime",
    headline: "Gemelo digital para terminales logísticos",
    description: "Sensores IoT y modelos generativos coordinan atraques y recursos en tiempo real.",
    result: "32% menos espera y 4.6M USD ahorrados en 12 meses.",
    tag: "Logística",
    image: "/illustrations/mockup-automation.svg",
    imageAlt: "Gemelo digital operando flujos logísticos",
  },
  {
    company: "Nova Health Group",
    headline: "Plataforma de triaje asistido",
    description: "Historias clínicas sintetizadas y seguimiento omnicanal con calidad clínica.",
    result: "-41% en tiempo de respuesta y 98% de satisfacción.",
    tag: "Salud",
    image: "/illustrations/mockup-experience.svg",
    imageAlt: "Panel de triaje asistido por IA",
  },
  {
    company: "Finexus",
    headline: "Sala de control para banca digital",
    description: "Riesgo, cumplimiento y operaciones centralizados con tableros prescriptivos.",
    result: "Incidentes críticos resueltos en 11 minutos (antes 53).",
    tag: "Finanzas",
    image: "/illustrations/mockup-architecture.svg",
    imageAlt: "Sala de control financiera",
  },
];

const process = [
  {
    phase: "1. Descubrimiento inmersivo",
    deliverables: "Insights + mapa de valor",
    description: "Auditoría de datos, assessment de madurez y casos priorizados con ROI trazable.",
  },
  {
    phase: "2. Experimentos controlados",
    deliverables: "Prototipos vivos + staging",
    description: "Prompts, modelos y flujos se validan con tus datos bajo feature flags y telemetría.",
  },
  {
    phase: "3. Lanzamiento escalable",
    deliverables: "Playbooks + monitoreo 24/7",
    description: "Automatizamos deploys, entrenamiento y soporte. Documentación completa para tus equipos.",
  },
];

const principles = [
  {
    title: "IA con impacto real",
    description: "Cada release nace con KPI de negocio, dashboards y experimentos listos para iterar.",
  },
  {
    title: "Experiencias premium",
    description: "Transiciones, sonido y contenido sincronizados para audiencias globales.",
  },
  {
    title: "Velocity sostenida",
    description: "Infraestructura como código, agentes para QA y soporte continuo.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "El kickoff incluyó tableros, governance y un piloto en 6 semanas sin sorpresas.",
    author: "Marina Feldman",
    role: "CPO, Atlas Maritime",
    logo: "atlas",
  },
  {
    quote: "Su escuadrón de experiencia es el único que combina creatividad y rigor técnico.",
    author: "Omar Contreras",
    role: "VP Experience, Finexus",
    logo: "finexus",
  },
  {
    quote: "Nos ayudaron a traducir IA en resultados clínicos medibles con auditoría completa.",
    author: "Isabel Rojas",
    role: "CTO, Nova Health",
    logo: "nova",
  },
];

const trustedBy = [
  "Microsoft for Startups",
  "AWS Activate",
  "Gobierno Digital CL",
  "VCX Partners",
  "LA New Ventures",
  "Biotech LATAM",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const headerBg = useTransform(scrollY, [0, 120], ["rgba(2,3,18,0)", "rgba(2,3,18,0.8)"]);
  const headerBorder = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [period, setPeriod] = useState<"year" | "quarter">("year");
  const { metrics } = useLiveMetrics(period);
  const year = new Date().getFullYear();

  const handleCtaClick = (name: string) => trackEvent({ name: "cta_click", data: { name } });

  return (
    <div className="relative isolate overflow-hidden pb-24">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(140deg,_rgba(3,7,27,0.96)_0%,_rgba(1,4,18,0.82)_40%,_rgba(4,12,40,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_rgba(51,241,127,0.14),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,_rgba(61,131,246,0.16),_transparent_55%)]" />
        <motion.div style={{ translateY: heroParallax }} className="absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_50%_0%,_rgba(116,247,208,0.25),_transparent_60%)]" />
      </div>

      <motion.header
        style={{ backgroundColor: headerBg, borderColor: headerBorder }}
        className="sticky top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-6 py-3 backdrop-blur"
      >
        <Link href="/" className="text-sm font-semibold tracking-[0.4em] text-white">
          CONSULTORIA
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link
            href="/recursos"
            onClick={() => handleCtaClick("header-secondary")}
            className="text-xs uppercase tracking-[0.3em] text-emerald-300"
          >
            Brochure
          </Link>
          <Link
            href="#contacto"
            onClick={() => handleCtaClick("header-primary")}
            className="rounded-full bg-emerald-400/90 px-4 py-2 text-slate-950"
          >
            Agenda kickoff
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Abrir menú">
          ☰
        </button>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-4 top-16 flex w-56 flex-col gap-3 rounded-2xl border border-white/10 bg-[#040824] p-4 text-sm"
          >
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="rounded-full bg-emerald-400/90 px-4 py-2 text-center text-slate-950"
              onClick={() => {
                handleCtaClick("header-mobile");
                setMenuOpen(false);
              }}
            >
              Agenda kickoff
            </Link>
          </motion.div>
        )}
      </motion.header>

      <section ref={heroRef} className="mx-auto mt-24 flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.5em] text-emerald-200">IA ENTERPRISE {year}</p>
          <h1 className="text-5xl font-semibold leading-tight text-white">
            Diseñamos, construimos y operamos experiencias impulsadas por IA para organizaciones que lideran industrias.
          </h1>
          <p className="text-lg text-white/70">
            Activamos squads híbridos que integran estrategia, diseño, ingeniería y analítica para lanzar programas de IA con impacto real.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contacto"
              onClick={() => handleCtaClick("hero-primary")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-semibold text-slate-900"
            >
              Agenda un diagnóstico
              <ArrowIcon className="text-slate-900" />
            </Link>
            <button
              type="button"
              onClick={() => handleCtaClick("hero-secondary")}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-lg text-white"
            >
              Descargar playbook
            </button>
          </div>
        </div>
        <div className="flex-1 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>Métricas en vivo</span>
            <div className="inline-flex rounded-full border border-white/10 p-1 text-xs">
              {(["year", "quarter"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setPeriod(value);
                    trackEvent({ name: "metric_toggle", data: { period: value } });
                  }}
                  className={`rounded-full px-3 py-1 ${
                    period === value ? "bg-white text-slate-900" : "text-white/60"
                  }`}
                >
                  {value === "year" ? "Últimos 12 meses" : "Último trimestre"}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {metric.value}
                  <span className="ml-1 text-base text-emerald-200">{metric.unit}</span>
                </p>
                <p className="text-sm text-white/60">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MotionSection className="mx-auto mt-24 max-w-6xl px-6" id="soluciones">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-emerald-200">Soluciones</p>
            <h2 className="mt-2 text-4xl font-semibold text-white">Componentes modulares para cada etapa</h2>
          </div>
          <p className="text-white/70 lg:w-2/5">
            Reutilizamos frameworks de estrategia, diseño y automatización para acelerar despliegues y garantizar calidad.
          </p>
        </div>
        <div className="mt-10">
          <ServiceGrid items={services} />
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-24 max-w-6xl px-6" id="casos">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-emerald-200">Casos reales</p>
            <h2 className="mt-2 text-4xl font-semibold text-white">Escenarios operando hoy</h2>
          </div>
          <p className="text-white/70 lg:w-2/5">
            Sectores con compliance estricto confían en nuestros squads para lanzar IA con gobernanza y KPIs claros.
          </p>
        </div>
        <div className="mt-8">
          <CaseCarousel items={caseStudies} />
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-24 max-w-6xl px-6" id="metodologia">
        <div className="grid gap-6 lg:grid-cols-3">
          {process.map((step) => (
            <article key={step.phase} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{step.phase}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{step.deliverables}</h3>
              <p className="mt-2 text-white/70">{step.description}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-24 max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.title} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <p className="text-sm text-emerald-200">{principle.title}</p>
              <p className="mt-3 text-white/70">{principle.description}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-24 max-w-6xl px-6">
        <p className="text-center text-sm uppercase tracking-[0.5em] text-white/50">Aliados y clientes</p>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/50">
          {trustedBy.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-24 max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Testimonios y badges de confianza</h2>
        <p className="mt-2 text-white/70">Pruebas sociales para equipos que necesitan respaldo.</p>
        <div className="mt-8">
          <TestimonialsMarquee items={testimonials} />
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
          <span className="rounded-full border border-white/20 px-4 py-2">Clutch 5⭐</span>
          <span className="rounded-full border border-white/20 px-4 py-2">+98% retención</span>
          <span className="rounded-full border border-white/20 px-4 py-2">SOC2-ready</span>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-24 max-w-6xl items-center gap-8 px-6 lg:flex" id="blog">
        <div className="flex-1 space-y-3">
          <p className="text-sm uppercase tracking-[0.5em] text-emerald-200">Recursos</p>
          <h2 className="text-4xl font-semibold text-white">Hub editorial de IA aplicada</h2>
          <p className="text-white/70">
            Explora artículos, checklists y frameworks en el hub de recursos. Cada nota enlaza directamente con nuestro formulario inteligente para convertir interés en acción.
          </p>
          <Link href="/recursos" className="inline-flex items-center gap-2 text-emerald-300">
            Visitar recursos <ArrowIcon className="text-emerald-300" />
          </Link>
        </div>
        <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-semibold text-white">Brand guidelines vivas</h3>
          <p className="mt-2 text-white/70">Consulta los lineamientos oficiales para mantener consistencia en campañas.</p>
          <Link href="/brand-guidelines" className="mt-4 inline-flex items-center gap-2 text-emerald-300">
            Abrir guías <ArrowIcon className="text-emerald-300" />
          </Link>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-24 max-w-6xl gap-10 px-6 lg:flex" id="contacto">
        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase tracking-[0.5em] text-emerald-200">CTA final</p>
          <h2 className="text-4xl font-semibold text-white">Formulario inteligente conectado a tu CRM</h2>
          <p className="text-white/70">
            Filtramos prospectos por industria, presupuesto y urgencia. Integramos los envíos a tu CRM o data warehouse a través de webhooks seguros.
          </p>
          <div className="space-y-2 text-white/70">
            <p>contacto@consultoria.ai</p>
            <p>+56 9 1234 5678</p>
            <p>WhatsApp · Calendly · Teams</p>
          </div>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </MotionSection>

      <footer className="mx-auto mt-24 flex max-w-6xl flex-col items-center gap-4 px-6 text-center text-sm text-white/50">
        <div className="h-px w-full bg-white/10" />
        <p>© {year} ConsultorIA. IA aplicada con experiencias premium.</p>
        <div className="flex gap-4">
          <Link href="/docs/analytics">Analytics</Link>
          <Link href="/docs/performance">Performance</Link>
        </div>
      </footer>
    </div>
  );
}
