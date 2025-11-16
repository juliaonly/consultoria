"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import type { ChangeEvent, FormEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "../components/reveal";
import { CaseCard } from "../components/case-card";
import { ArrowIcon } from "../components/arrow-icon";

const navigation = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Insights", href: "#insights" },
  { label: "Casos", href: "#casos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Recursos", href: "#recursos" },
  { label: "Contacto", href: "#contacto" },
];

const metrics = [
  {
    label: "Implementaciones enterprise",
    value: "120+",
    description: "Despliegues en 7 paises con soporte y gobierno continuo.",
  },
  {
    label: "Integraciones criticas",
    value: "45",
    description: "ERPs, CRMs y nubes hibridas conectadas con observabilidad total.",
  },
  {
    label: "Tiempo de entrega",
    value: "6 semanas",
    description: "Pilotos productivos listos para escalar desde el kickoff.",
  },
];

const services = [
  {
    title: "Arquitectura de productos IA",
    subtitle: "Discovery estrategico, governance y roadmap ejecutivo",
    description:
      "Evaluamos tus procesos, modelamos la plataforma y dejamos un backlog priorizado para construir sin friccion.",
    points: [
      "Workshops ejecutivos con matrices de priorizacion",
      "Arquitecturas de referencia seguras en AWS, Azure o GCP",
      "OKRs, riesgos y tablero de adopcion listos para PMO",
    ],
    image: "/illustrations/mockup-architecture.svg",
    imageAlt: "Blueprint ejecutivo y tablero de arquitectura de IA",
    ctaLabel: "Agenda blueprint",
    ctaHref: "#contacto",
    ctaVariant: "primary",
  },
  {
    title: "Ingenieria de experiencias",
    subtitle: "Interfaces inmersivas y microinteracciones premium",
    description:
      "Transformamos journeys criticos en interfaces sensoriales, accesibles y sincronizadas con datos en vivo.",
    points: [
      "Design systems auditables y accesibles AA/AAA",
      "Microinteracciones y transiciones guiadas por IA generativa",
      "Testing de usabilidad asistido con insights generados en vivo",
    ],
    image: "/illustrations/mockup-experience.svg",
    imageAlt: "Dashboard de experiencia multicanal con modulos interactivos",
    ctaLabel: "Solicitar workshop",
    ctaHref: "mailto:jose_cruz_16@live.cl?subject=Workshop%20de%20experiencias",
    ctaVariant: "secondary",
  },
  {
    title: "Automatizacion full stack",
    subtitle: "Agentes, pipelines y observabilidad",
    description:
      "Orquestamos agentes, datos y controles para operar IA 24/7 con telemetria y feedback loops definidos.",
    points: [
      "Orquestacion de agentes multimodal con guardrails",
      "Dashboards de observabilidad y alertas accionables",
      "Integracion con autenticacion, billing y compliance corporativo",
    ],
    image: "/illustrations/mockup-automation.svg",
    imageAlt: "Panel operativo de automatizacion con agentes y metricas en tiempo real",
    ctaLabel: "Hablar con un ingeniero",
    ctaHref: "https://wa.me/56999495174",
    ctaVariant: "link",
  },
];

const caseStudies = [
  {
    company: "Atlas Maritime",
    headline: "Gemelo digital para terminales logisticos",
    description:
      "Sensores IoT, pronosticos y modelos generativos sincronizados para coordinar atraques y recursos.",
    result: "32% menos espera y 4.6M USD ahorrados en 12 meses.",
    tag: "Logistica inteligente",
    image: "/illustrations/mockup-automation.svg",
    imageAlt: "Gemelo digital operando flujos logisticos en tiempo real",
    ctaLabel: "Profundizar caso",
    ctaHref: "mailto:jose_cruz_16@live.cl?subject=Atlas%20Maritime%20-%20detalle",
  },
  {
    company: "Nova Health Group",
    headline: "Plataforma de triaje asistido",
    description:
      "Historias clinicas sintetizadas, priorizacion dinamica y seguimiento omnicanal con calidad clinica.",
    result: "-41% en tiempo de respuesta y 98% de satisfaccion.",
    tag: "Salud",
    image: "/illustrations/mockup-experience.svg",
    imageAlt: "Panel de triaje asistido por IA para equipos clinicos",
    ctaLabel: "Solicitar demo",
    ctaHref: "mailto:jose_cruz_16@live.cl?subject=Nova%20Health%20-%20triaje",
  },
  {
    company: "Finexus",
    headline: "Sala de control para banca digital",
    description:
      "Riesgo, cumplimiento y operaciones centralizados con tableros prescriptivos y agentes correctivos.",
    result: "Incidentes criticos resueltos en 11 minutos (antes 53).",
    tag: "Finanzas",
    image: "/illustrations/mockup-architecture.svg",
    imageAlt: "Sala de control financiera con metricas y alertas priorizadas",
    ctaLabel: "Agenda referencia",
    ctaHref: "mailto:jose_cruz_16@live.cl?subject=Finexus%20-%20sala%20de%20control",
  },
];

const processSteps = [
  {
    phase: "1. Descubrimiento inmersivo",
    deliverables: "Insights accionables + mapa de valor",
    description:
      "Sprints de entrevistas, auditorias de datos y assessment de madurez IA. Co-creamos casos priorizados con ROI trazable.",
  },
  {
    phase: "2. Experimentos controlados",
    deliverables: "Prototipos vivos + medicion en staging",
    description:
      "Diseno, prompts y modelos se prueban con tus datos reales bajo feature flags seguros y telemetria completa.",
  },
  {
    phase: "3. Lanzamiento escalable",
    deliverables: "Playbooks operativos + monitoreo 24/7",
    description:
      "Automatizamos deploys, entrenamiento y soporte. Documentacion, training y handoff segun tus equipos o acompanamiento continuo.",
  },
];

const principles = [
  {
    title: "IA con impacto real",
    description:
      "Cada release nace con KPI de negocio, dashboards de seguimiento y experimentos listos para iterar.",
  },
  {
    title: "Experiencias premium",
    description:
      "Transiciones, sonido y contenido sincronizados para audiencias globales que esperan detalle y performance.",
  },
  {
    title: "Velocity sostenida",
    description:
      "Stack moderno, infraestructura como codigo y agentes que aceleran QA, soporte y entrenamiento.",
  },
];

const trustedBy = [
  {
    name: "Microsoft for Startups",
    logo: "/logos/microsoft-startups.svg",
    href: "https://www.microsoft.com/startups",
    type: "Programa",
  },
  {
    name: "AWS Activate",
    logo: "/logos/aws-activate.svg",
    href: "https://aws.amazon.com/activate/",
    type: "Cloud",
  },
  {
    name: "Gobierno Digital CL",
    logo: "/logos/gobierno-digital.svg",
    href: "https://www.gob.cl/gobdigital/",
    type: "Sector publico",
  },
  {
    name: "VCX Partners",
    logo: "/logos/vcx-partners.svg",
    href: "https://www.vcxpartners.com/",
    type: "VC",
  },
  {
    name: "LA New Ventures",
    logo: "/logos/la-new-ventures.svg",
    href: "https://lanewventures.com/",
    type: "Innovacion",
  },
  {
    name: "Biotech LATAM",
    logo: "/logos/biotech-latam.svg",
    href: "https://biotechlatam.com/",
    type: "Salud",
  },
];

const testimonials = [
  {
    quote:
      "Pasamos de investigar ideas a lanzar un piloto medible en cuatro semanas. La disciplina del equipo hizo toda la diferencia.",
    author: "Cristobal Alliende",
    role: "CTO VCX Partners",
  },
  {
    quote:
      "Integraron nuestros procesos publicos sin friccion, cuidando seguridad y accesibilidad en cada release.",
    author: "Daniela Ponce",
    role: "Directora Gobierno Digital CL",
  },
];

const certifications = [
  {
    label: "ISO 27001 ready",
    description: "Controles de seguridad auditables y cifrado extremo a extremo.",
    icon: "/badges/iso.svg",
  },
  {
    label: "AWS + Azure",
    description: "Workloads certificados en ambas nubes con FinOps incluido.",
    icon: "/badges/multi-cloud.svg",
  },
  {
    label: "DesignOps IA",
    description: "Playbooks de research asistido y governance de prompts.",
    icon: "/badges/designops.svg",
  },
];

const insightCategories = ["Tendencias", "Publicaciones", "Casos recientes"] as const;

const insights = [
  {
    title: "GenAI en operaciones criticas",
    summary: "Checklist para habilitar copilotos en ambientes regulados.",
    tag: "Tendencias",
    publishedAt: "Jun 2024",
    ctaHref: "https://consultoria.local/insights/operaciones",
  },
  {
    title: "Playbook de governance IA",
    summary: "Framework de roles, riesgos y tableros ejecutivos.",
    tag: "Publicaciones",
    publishedAt: "May 2024",
    ctaHref: "https://consultoria.local/insights/governance",
  },
  {
    title: "Caso fintech: agentes soporte",
    summary: "Bot que resolvio 68% de tickets sin derivar.",
    tag: "Casos recientes",
    publishedAt: "Abr 2024",
    ctaHref: "https://consultoria.local/insights/fintech",
  },
  {
    title: "Diseño multimodal accesible",
    summary: "Componentes inclusivos validados con usuarios reales.",
    tag: "Publicaciones",
    publishedAt: "Abr 2024",
    ctaHref: "https://consultoria.local/insights/accesibilidad",
  },
  {
    title: "Tendencias retail IA",
    summary: "Experiencias hiper personalizadas conectadas con inventario.",
    tag: "Tendencias",
    publishedAt: "Mar 2024",
    ctaHref: "https://consultoria.local/insights/retail",
  },
];

const plans = [
  {
    name: "Discovery",
    idealFor: "Equipos que necesitan claridad y roadmap",
    deliverables: ["Blueprint integral", "Backlog priorizado", "Playbook de riesgos"],
    outcomes: "Validacion tecnica + business case en 10 dias",
    badge: "Mas elegido",
    investment: "Desde 12K USD",
    ctaLabel: "Reservar discovery",
    ctaHref: "mailto:jose_cruz_16@live.cl?subject=Discovery%20IA",
  },
  {
    name: "Escala",
    idealFor: "Empresas con pilotos listos para expandirse",
    deliverables: ["Arquitectura modular", "Automatizaciones QA", "SRE compartido"],
    outcomes: "Pasamos de piloto a multi-region en 8 semanas",
    investment: "Desde 28K USD",
    ctaLabel: "Co-crear plan",
    ctaHref: "https://wa.me/56999495174",
  },
  {
    name: "Operaciones",
    idealFor: "Organizaciones con productos IA en produccion",
    deliverables: ["Command center", "FinOps + observabilidad", "Soporte 24/7"],
    outcomes: "SLAs garantizados y costos optimizados",
    investment: "Retainer mensual",
    ctaLabel: "Explorar modelo",
    ctaHref: "mailto:jose_cruz_16@live.cl?subject=Operaciones%20IA",
  },
];

const resources = [
  {
    title: "Playbook de adopcion IA",
    description: "Guia paso a paso para alinear negocio, datos y tecnologia.",
    format: "PDF",
    file: "playbook-adopcion-ia.pdf",
    cta: "Descargar",
  },
  {
    title: "Checklist de experiencia multimodal",
    description: "Evaluacion rapida para auditar accesibilidad y delight.",
    format: "Notion",
    file: "checklist-experiencia.notion",
    cta: "Solicitar acceso",
  },
  {
    title: "Canvas de agentes operativos",
    description: "Define objetivos, datos y guardrails para tus agentes.",
    format: "Miro",
    file: "canvas-agentes.miro",
    cta: "Copiar",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const year = new Date().getFullYear();
  const [selectedCategory, setSelectedCategory] = useState<(typeof insightCategories)[number]>("Tendencias");
  const filteredInsights = useMemo(
    () => insights.filter((item) => item.tag === selectedCategory).slice(0, 3),
    [selectedCategory],
  );
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [isHoveringCases, setIsHoveringCases] = useState(false);
  const activeCase = caseStudies[activeCaseIndex];
  useEffect(() => {
    if (isHoveringCases) return;
    const interval = setInterval(() => {
      setActiveCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isHoveringCases]);
  const handlePrevCase = useCallback(() => {
    setActiveCaseIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  }, []);
  const handleNextCase = useCallback(() => {
    setActiveCaseIndex((prev) => (prev + 1) % caseStudies.length);
  }, []);
  const handleDotClick = useCallback((index: number) => {
    setActiveCaseIndex(index);
  }, []);
  const [selectedResource, setSelectedResource] = useState(resources[0]);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const structuredTestimonials = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: testimonials.map((testimonial, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Review",
          reviewBody: testimonial.quote,
          author: {
            "@type": "Person",
            name: testimonial.author,
          },
        },
      })),
    }),
    [],
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus !== "idle") {
      setFormStatus("idle");
      setFormMessage("");
    }
  };

  const handleLeadSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedResource) return;
    setFormStatus("loading");
    setFormMessage("");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, resource: selectedResource.title }),
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.message ?? "No pudimos registrar tu solicitud");
      }
      setFormStatus("success");
      setFormMessage("Listo, enviamos el recurso directo a tu correo.");
      setFormData({ name: "", email: "", company: "" });
    } catch (error) {
      setFormStatus("error");
      setFormMessage(error instanceof Error ? error.message : "Ocurrio un error inesperado");
    }
  };

  return (
    <div className="relative isolate overflow-hidden pb-24">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(140deg,_rgba(3,7,27,0.96)_0%,_rgba(1,4,18,0.82)_40%,_rgba(4,12,40,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_rgba(51,241,127,0.14),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,_rgba(61,131,246,0.16),_transparent_55%)]" />
        <motion.div
          style={{ translateY: heroParallax }}
          className="absolute inset-x-[-25%] top-[-28%] h-[60vh] rounded-full bg-[radial-gradient(circle_at_center,_rgba(116,247,208,0.35),_transparent_60%)] blur-3xl"
        />
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(90deg,_rgba(148,163,184,0.15)_1px,transparent_0),linear-gradient(180deg,_rgba(148,163,184,0.12)_1px,transparent_0)] bg-[size:120px_120px]" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md sm:px-6 sm:py-5 md:flex-row md:items-center md:justify-between">
            <Link
              href="#hero"
              className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em] text-slate-100"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold text-white transition group-hover:border-[#74f7d0] group-hover:text-[#74f7d0]">
                CI
              </span>
              ConsultorIA
            </Link>
            <nav className="hide-scrollbar flex w-full items-center justify-between gap-3 overflow-x-auto text-[0.72rem] uppercase tracking-[0.35em] text-slate-300 sm:justify-center sm:text-xs md:w-auto md:justify-end md:text-sm md:tracking-[0.28em]">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative inline-flex items-center gap-1 rounded-full px-2 py-1 font-medium transition hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="absolute inset-x-0 bottom-0 h-[1px] origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 self-start rounded-full border border-[#74f7d0]/60 bg-[#74f7d0]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#63e6c3] transition hover:border-[#74f7d0] hover:bg-[#74f7d0]/20 hover:text-[#74f7d0] sm:self-auto"
            >
              Agenda un kickoff
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="hero"
          ref={heroRef}
          className="mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32"
        >
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="space-y-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-slate-200"
              >
                Inteligencia aplicada
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="font-[var(--font-display)] text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] text-white"
              >
                Productos digitales impulsados por IA que nacen listos para el mundo enterprise.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="max-w-2xl text-lg text-slate-300"
              >
                Combinamos estrategia, diseno y ejecucion tecnica con copilotos y agentes que aceleran cada sprint. Sin humo: impacto medible, experiencias premium y bases solidas para escalar.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#74f7d0] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#041b21] transition hover:bg-[#33f17f]"
                >
                  Iniciar proyecto piloto
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="#casos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#d7e7ff] transition hover:border-[#74f7d0] hover:text-[#74f7d0]"
                >
                  Ver casos recientes
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </motion.div>
              <div className="grid gap-6 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <Reveal
                    key={metric.label}
                    delay={index * 0.08}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <div className="text-sm uppercase tracking-[0.35em] text-slate-400">
                      {metric.label}
                    </div>
                    <div className="mt-4 font-[var(--font-display)] text-3xl text-white">
                      {metric.value}
                    </div>
                    <p className="mt-3 text-sm text-slate-300">{metric.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <motion.aside
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div
                className="absolute -inset-px rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(116,247,208,0.22),_rgba(18,26,68,0.8))] opacity-70"
                aria-hidden
              />
              <div className="relative space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.45em] text-slate-300">
                    Plan maestro 10 dias
                  </span>
                  <p className="mt-3 font-[var(--font-display)] text-2xl text-white">
                    Exploramos, prototipamos y entregamos blueprint con roadmap, costos y riesgos.
                  </p>
                </div>
                <div className="grid gap-3 rounded-2xl border border-white/10 bg-[rgba(5,13,42,0.8)] p-4 text-sm text-slate-200">
                  <div className="text-xs uppercase tracking-[0.4em] text-[#74f7d0]">
                    Consultor principal
                  </div>
                  <div className="text-lg font-semibold text-white">
                    Jose Miguel Cruz Alvarado
                  </div>
                  <div className="grid gap-1 text-sm text-slate-300">
                    <span>+56 9 9949 5174</span>
                    <span>jose_cruz_16@live.cl</span>
                    <span>Vina del Mar, Chile</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Soluciones web con inteligencia y diseno</span>
                  <span className="inline-flex items-center gap-2 text-[#74f7d0]">
                    Agenda directa
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 px-8 py-8 backdrop-blur">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
                    Aliados y clientes
                  </span>
                  <p className="text-sm text-slate-200">
                    Casos reales, programas corporativos y partners cloud que avalan nuestra ejecucion.
                  </p>
                </div>
                <div className="text-xs uppercase tracking-[0.4em] text-[#74f7d0]">98% retencion</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {trustedBy.map((ally) => (
                  <Link
                    key={ally.name}
                    href={ally.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#050e2b]/70 px-4 py-3 transition hover:border-[#74f7d0]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <Image
                        src={ally.logo}
                        alt={ally.name}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-8 w-auto"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{ally.name}</div>
                      <div className="text-xs uppercase tracking-[0.35em] text-slate-400">{ally.type}</div>
                    </div>
                    <ArrowIcon className="ml-auto h-3.5 w-3.5 text-[#74f7d0] opacity-0 transition group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.author} className="rounded-3xl border border-white/10 bg-[#040b24]/80 p-6">
                    <p className="text-base text-white">“{testimonial.quote}”</p>
                    <div className="mt-4 text-sm text-slate-300">
                      {testimonial.author} · {testimonial.role}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.label}
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200"
                  >
                    <Image src={cert.icon} alt={cert.label} width={20} height={20} loading="lazy" />
                    <div className="flex flex-col gap-1 text-left normal-case tracking-normal">
                      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#74f7d0]">{cert.label}</span>
                      <span className="text-[0.78rem] text-slate-200">{cert.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="mx-auto max-w-6xl px-4 pb-32 sm:px-6">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#74f7d0]">Tendencias IA</span>
              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-tight text-white">
                Insights accionables para mantener vigente tu roadmap.
              </h2>
              <p className="text-sm text-slate-300">
                Investigacion, learnings y lanzamientos frescos que compartimos con clientes y aliados para tomar decisiones informadas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filtros de insights">
              {insightCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                    selectedCategory === category
                      ? "border-[#74f7d0] bg-[#74f7d0]/10 text-white"
                      : "border-white/10 text-slate-300 hover:border-[#74f7d0] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {filteredInsights.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="text-xs uppercase tracking-[0.35em] text-slate-400">{item.tag}</div>
                <h3 className="mt-4 font-[var(--font-display)] text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{item.summary}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                  <span>{item.publishedAt}</span>
                  <Link
                    href={item.ctaHref}
                    className="inline-flex items-center gap-2 text-[#74f7d0]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Leer insight
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="soluciones" className="mx-auto max-w-7xl px-4 pb-32 sm:px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#74f7d0]">
                Soluciones
              </span>
              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] leading-tight text-white">
                From idea to rollout con squads mixtos humano + IA y entregables precisos.
              </h2>
              <p className="text-sm text-slate-300">
                Planificamos cada engagement con objetivos cuantificables, medidas de exito compartidas y automatizaciones que nos permiten iterar sin perder control.
              </p>
            </div>
            <Link
              href="mailto:jose_cruz_16@live.cl"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#d7e7ff] transition hover:border-[#74f7d0] hover:text-[#74f7d0]"
            >
              Descargar brochure
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => {
              const ctaVariants: Record<string, string> = {
                primary:
                  "inline-flex items-center gap-2 rounded-full bg-[#74f7d0] px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#041b21] transition hover:bg-[#33f17f]",
                secondary:
                  "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2 text-sm font-semibold text-[#d7e7ff] transition hover:border-[#74f7d0] hover:text-[#74f7d0]",
                link:
                  "inline-flex items-center gap-2 text-sm font-semibold text-[#74f7d0] transition hover:text-white",
              };
              const ctaClass = ctaVariants[service.ctaVariant ?? "link"] ?? ctaVariants.link;
              return (
                <Reveal key={service.title} delay={index * 0.12}>
                  <motion.article
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-[1px] rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(116,247,208,0.12),_rgba(9,16,46,0.9))]" />
                    </div>
                    <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#040d23]/60">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(116,247,208,0.18),_transparent_70%)] opacity-70 transition duration-500 group-hover:opacity-100" />
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={320}
                        height={200}
                        loading="lazy"
                        className="relative z-10 h-auto w-full object-cover"
                        sizes="(min-width: 1024px) 320px, 90vw"
                      />
                    </figure>
                    <span className="text-xs uppercase tracking-[0.35em] text-slate-300">
                      {service.subtitle}
                    </span>
                    <h3 className="font-[var(--font-display)] text-2xl text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-200">{service.description}</p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-200">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-[#74f7d0]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <Link href={service.ctaHref} className={ctaClass} data-cta={`service-${service.title}`}>
                        {service.ctaLabel}
                        <ArrowIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="casos" className="mx-auto max-w-7xl px-4 pb-32 sm:px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#74f7d0]">
                Casos reales
              </span>
              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-tight text-white">
                Equipos que hoy operan con ConsultorIA + IA y miden resultado cada semana.
              </h2>
              <p className="text-sm text-slate-300">
                Proyectos a medida, integrados con sistemas criticos y operando con SLA enterprise.
              </p>
            </div>
            <Link
              href="mailto:jose_cruz_16@live.cl?subject=Solicitar%20referencia%20ConsultorIA"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#d7e7ff] transition hover:border-[#74f7d0] hover:text-[#74f7d0]"
            >
              Solicitar referencia
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[rgba(10,16,46,0.72)] p-8 backdrop-blur"
            onMouseEnter={() => setIsHoveringCases(true)}
            onMouseLeave={() => setIsHoveringCases(false)}
          >
            <div className="overflow-hidden" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase.company}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <CaseCard caseStudy={activeCase} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevCase}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100 transition hover:border-[#74f7d0]"
                  aria-label="Ver caso anterior"
                >
                  <ArrowIcon className="h-4 w-4 rotate-180" />
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={handleNextCase}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100 transition hover:border-[#74f7d0]"
                  aria-label="Ver siguiente caso"
                >
                  Siguiente
                  <ArrowIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {caseStudies.map((item, index) => (
                  <button
                    key={item.company}
                    type="button"
                    onClick={() => handleDotClick(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeCaseIndex === index ? "bg-[#74f7d0] scale-125" : "bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Mostrar caso ${item.company}`}
                    aria-pressed={activeCaseIndex === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="metodologia" className="mx-auto max-w-6xl px-4 pb-32 sm:px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#74f7d0]">
                Metodologia
              </span>
              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-tight text-white">
                Ejecutamos con foco en gobernanza, velocity y adopcion.
              </h2>
              <p className="text-sm text-slate-300">
                Cada etapa se respalda con dashboards, automatizaciones y entregables ejecutivos que habilitan decisiones rapidas.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.4em] text-slate-200">
              Feature flags, analytics, SRE y soporte incluidos
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-[#74f7d0] via-white/20 to-[#74f7d0]" />
            <div className="relative grid gap-12">
              {processSteps.map((step, index) => (
                <Reveal key={step.phase} delay={index * 0.12} className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#060c28] font-semibold text-[#74f7d0]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    {step.phase}
                  </div>
                  <div className="mt-3 font-[var(--font-display)] text-xl text-white">
                    {step.deliverables}
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{step.description}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-[rgba(5,10,34,0.8)] p-6 sm:grid-cols-3">
              {principles.map((item) => (
                <div key={item.title} className="space-y-3 text-sm text-slate-300">
                  <div className="text-sm font-semibold uppercase tracking-[0.35em] text-[#74f7d0]">
                    {item.title}
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="comparativo" className="mx-auto max-w-7xl px-4 pb-32 sm:px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#74f7d0]">Planes</span>
              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] leading-tight text-white">
                Selecciona el acompañamiento ideal segun tu madurez.
              </h2>
              <p className="text-sm text-slate-300">
                Todos los planes incluyen governance, analytics y soporte directo del squad fundador. Escala cuando lo necesites.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.4em] text-slate-200">
              KPIs compartidos y revisiones semanales
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.35em] text-slate-400">{plan.name}</div>
                    <h3 className="mt-2 text-xl font-semibold text-white">{plan.idealFor}</h3>
                  </div>
                  {plan.badge && (
                    <span className="rounded-full border border-[#74f7d0]/40 bg-[#74f7d0]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#74f7d0]">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Entregables</div>
                  <ul className="space-y-2 text-sm text-slate-200">
                    {plan.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#74f7d0]" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-[#050f2b]/80 p-4 text-sm text-slate-200">
                  <div className="text-xs uppercase tracking-[0.35em] text-[#74f7d0]">Outcome esperado</div>
                  <p className="mt-2 text-base text-white">{plan.outcomes}</p>
                </div>
                <div className="mt-6 text-sm text-slate-300">{plan.investment}</div>
                <div className="mt-auto pt-6">
                  <Link
                    href={plan.ctaHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d7e7ff] transition hover:border-[#74f7d0] hover:text-[#74f7d0]"
                  >
                    {plan.ctaLabel}
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="recursos" className="mx-auto max-w-6xl px-4 pb-32 sm:px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#74f7d0]">Recursos premium</span>
              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.1rem)] leading-tight text-white">
                Descarga frameworks y playbooks exclusivos.
              </h2>
              <p className="text-sm text-slate-300">
                Cada descarga incluye acompanamiento directo para aclarar dudas y llevarlo a tu contexto.
              </p>
            </div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-300">Sin spam, solo valor accionable</div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {resources.map((resource) => {
                const isActive = selectedResource?.title === resource.title;
                return (
                  <button
                    type="button"
                    key={resource.title}
                    onClick={() => setSelectedResource(resource)}
                    className={`text-left transition ${
                      isActive
                        ? "rounded-[28px] border border-[#74f7d0] bg-[#74f7d0]/10"
                        : "rounded-[28px] border border-white/10 bg-white/5 hover:border-[#74f7d0]/60"
                    } p-6`}
                    aria-pressed={isActive}
                  >
                    <div className="text-xs uppercase tracking-[0.35em] text-slate-400">{resource.format}</div>
                    <h3 className="mt-3 font-[var(--font-display)] text-2xl text-white">{resource.title}</h3>
                    <p className="mt-2 text-sm text-slate-200">{resource.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#74f7d0]">
                      {resource.cta}
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>
            <form
              onSubmit={handleLeadSubmit}
              className="relative flex flex-col gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-[#74f7d0]">Recibelo en tu correo</div>
                <p className="mt-2 text-sm text-slate-200">
                  Seleccionado: <span className="font-semibold text-white">{selectedResource?.title}</span>
                </p>
              </div>
              <label className="text-sm text-slate-300">
                Nombre completo
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#030918] px-4 py-3 text-white focus:border-[#74f7d0] focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-300">
                Email corporativo
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#030918] px-4 py-3 text-white focus:border-[#74f7d0] focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-300">
                Empresa
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#030918] px-4 py-3 text-white focus:border-[#74f7d0] focus:outline-none"
                />
              </label>
              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#74f7d0] px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#041b21] transition hover:bg-[#33f17f] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {formStatus === "loading" ? "Enviando..." : "Recibir recurso"}
                <ArrowIcon className="h-4 w-4" />
              </button>
              <p className="text-xs text-slate-400">
                Al enviar aceptas nuestra politica de privacidad y recibir actualizaciones relevantes. Nada de spam.
              </p>
              {formMessage && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    formStatus === "success"
                      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                      : "border-red-400/40 bg-red-400/10 text-red-200"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {formMessage}
                </div>
              )}
            </form>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[radial-gradient(circle_at_top_left,_rgba(116,247,208,0.24),_rgba(5,12,36,0.85))] px-8 py-12 md:px-12">
            <div className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,_rgba(51,241,127,0.2),_transparent)]" />
            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#74f7d0]">
                  Traccion en 72 horas
                </span>
                <h2 className="font-[var(--font-display)] text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.1] text-white">
                  Kickoff ejecutivo, diagnostico profundo y plan accionable sin friccion.
                </h2>
                <p className="max-w-2xl text-sm text-slate-200">
                  Coordinamos sesiones con tus lideres, conectamos datos claves y levantamos oportunidades con impacto financiero. Te llevas un blueprint completo y un piloto listo para activarse.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="text-xs uppercase tracking-[0.35em] text-slate-300">
                      Que incluye
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-200">
                      <li>Diagnostico tecnico y de negocio</li>
                      <li>Roadmap con milestones y costos</li>
                      <li>Plan de adopcion y training</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="text-xs uppercase tracking-[0.35em] text-slate-300">
                      Opciones
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-200">
                      <li>Build with ConsultorIA</li>
                      <li>Coaching para tu equipo interno</li>
                      <li>Operamos como squad extendido</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="mailto:jose_cruz_16@live.cl"
                    className="inline-flex items-center gap-2 rounded-full bg-[#74f7d0] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#041b21] transition hover:bg-[#33f17f]"
                  >
                    Escribir ahora
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://wa.me/56999495174"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#d7e7ff] transition hover:border-[#74f7d0] hover:text-[#74f7d0]"
                  >
                    Agendar llamada
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                  <div className="text-xs uppercase tracking-[0.35em] text-slate-300">
                    Disponible remoto o en sitio
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col gap-4 rounded-3xl border border-[rgba(116,247,208,0.3)] bg-[rgba(4,10,38,0.9)] p-6">
                <div className="relative text-xs uppercase tracking-[0.4em] text-[#74f7d0]">
                  Datos de contacto
                </div>
                <div className="relative font-[var(--font-display)] text-2xl text-white">
                  Jose Miguel Cruz Alvarado
                </div>
                <div className="relative grid gap-2 text-sm text-slate-200">
                  <span>Director ConsultorIA</span>
                  <span>+56 9 9949 5174</span>
                  <span>jose_cruz_16@live.cl</span>
                  <span>Vina del Mar, Chile</span>
                </div>
                <div className="relative mt-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
                  Compromiso: prototipo funcional con tu data en menos de 10 dias habiles.
                </div>
                <div className="relative text-xs uppercase tracking-[0.35em] text-[#74f7d0]">
                  Ready for global
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Script
        id="structured-testimonials"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredTestimonials) }}
      />

      <footer className="relative z-10 mx-auto max-w-6xl px-4 py-12 text-xs text-slate-400 sm:px-6">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <span>(c) {year} ConsultorIA. Construido desde Vina del Mar, Chile.</span>
          <div className="flex items-center gap-6">
            <Link
              href="mailto:jose_cruz_16@live.cl"
              className="transition hover:text-[#74f7d0]"
            >
              Escribeme
            </Link>
            <Link
              href="https://www.linkedin.com/in/josecruzalvarado"
              className="transition hover:text-[#74f7d0]"
            >
              LinkedIn
            </Link>
            <Link href="tel:+56999495174" className="transition hover:text-[#74f7d0]">
              +56 9 9949 5174
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
