"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/reveal";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 11L11 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M7.75 5H11V8.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 7H20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      <path d="M4 12H20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      <path d="M4 17H20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 18L18 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      <path d="M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function ArchitectureIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 9.5L12 5L20 9.5L12 14L4 9.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M4 14.5L12 19L20 14.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M4 12L12 16.5L20 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function ExperienceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 8C5.5 6.067 7.067 4.5 9 4.5C10.209 4.5 11.281 5.104 12 6C12.719 5.104 13.791 4.5 15 4.5C16.933 4.5 18.5 6.067 18.5 8C18.5 12 12 16.5 12 16.5C12 16.5 5.5 12 5.5 8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <circle cx="9" cy="8" r="1" fill="currentColor" />
      <circle cx="15" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

function AutomationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 5.5V4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M12 20V18.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M6.5 7.5L5.5 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M18.5 6L17.5 7.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M5 12H6.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M18 12H19.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M6.5 16.5L5.5 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M17.5 16.5L18.5 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}

function LogisticsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 7H20V16H4V7Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path d="M4 11H20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M8 16V18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M16 16V18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M9 18H7.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M17 18H15.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}

function HealthIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 6.5C10.2 4.5 6.833 4.333 5 6.5C3.5 8.25 3.667 11.167 5.5 13L12 19L18.5 13C20.333 11.167 20.5 8.25 19 6.5C17.167 4.333 13.8 4.5 12 6.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path d="M9.5 11H11.25V8.5H12.75V11H14.5V12.5H12.75V14.5H11.25V12.5H9.5V11Z" fill="currentColor" />
    </svg>
  );
}

function FinanceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 18H19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      <path
        d="M7 8H9V16H7V8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M11.5 5H13.5V16H11.5V5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M16 11H18V16H16V11Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

const navigation = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Casos", href: "#casos" },
  { label: "Metodologia", href: "#metodologia" },
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

const serviceIconMap = {
  architecture: ArchitectureIcon,
  experience: ExperienceIcon,
  automation: AutomationIcon,
} as const;

type ServiceIconKey = keyof typeof serviceIconMap;

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  icon: ServiceIconKey;
}

const services: ServiceItem[] = [
  {
    title: "Arquitectura de productos IA",
    subtitle: "Discovery estrategico, governance y roadmap ejecutivo",
    description:
      "Mapeamos tus procesos, definimos la plataforma objetivo y dejamos backlog y blueprint gobernable.",
    points: [
      "Workshops ejecutivos con matrices de priorizacion",
      "Arquitecturas de referencia seguras en AWS, Azure o GCP",
      "OKRs, riesgos y tablero de adopcion listos para PMO",
    ],
    image: "/illustrations/mockup-architecture.svg",
    imageAlt: "Blueprint ejecutivo y tablero de arquitectura de IA",
    icon: "architecture",
  },
  {
    title: "Ingenieria de experiencias",
    subtitle: "Interfaces inmersivas y microinteracciones premium",
    description:
      "Transformamos journeys criticos en experiencias accesibles, sensoriales y sincronizadas con data viva.",
    points: [
      "Design systems auditables y accesibles AA/AAA",
      "Microinteracciones y transiciones guiadas por IA generativa",
      "Testing de usabilidad asistido con insights generados en vivo",
    ],
    image: "/illustrations/mockup-experience.svg",
    imageAlt: "Dashboard de experiencia multicanal con modulos interactivos",
    icon: "experience",
  },
  {
    title: "Automatizacion full stack",
    subtitle: "Agentes, pipelines y observabilidad",
    description:
      "Orquestamos agentes, datos y guardrails para operar IA 24/7 con telemetria y feedback loops.",
    points: [
      "Orquestacion de agentes multimodal con guardrails",
      "Dashboards de observabilidad y alertas accionables",
      "Integracion con autenticacion, billing y compliance corporativo",
    ],
    image: "/illustrations/mockup-automation.svg",
    imageAlt: "Panel operativo de automatizacion con agentes y metricas en tiempo real",
    icon: "automation",
  },
];

const caseIconMap = {
  logistics: LogisticsIcon,
  health: HealthIcon,
  finance: FinanceIcon,
} as const;

type CaseIconKey = keyof typeof caseIconMap;

interface CaseStudyItem {
  company: string;
  headline: string;
  description: string;
  result: string;
  tag: string;
  image: string;
  imageAlt: string;
  icon: CaseIconKey;
}

const caseStudies: CaseStudyItem[] = [
  {
    company: "Atlas Maritime",
    headline: "Gemelo digital para terminales logisticos",
    description:
      "Sincronizamos sensores IoT, pronosticos y generativos para coordinar atraques y recursos clave.",
    result: "32% menos espera y 4.6M USD en 12 meses.",
    tag: "Logistica inteligente",
    image: "/illustrations/mockup-automation.svg",
    imageAlt: "Gemelo digital operando flujos logisticos en tiempo real",
    icon: "logistics",
  },
  {
    company: "Nova Health Group",
    headline: "Plataforma de triaje asistido",
    description:
      "Historia sintetizada, priorizacion dinamica y seguimiento omnicanal con estandares clinicos.",
    result: "41% menos tiempo de respuesta y 98% de satisfaccion.",
    tag: "Salud",
    image: "/illustrations/mockup-experience.svg",
    imageAlt: "Panel de triaje asistido por IA para equipos clinicos",
    icon: "health",
  },
  {
    company: "Finexus",
    headline: "Sala de control para banca digital",
    description:
      "Centralizamos riesgo, cumplimiento y operaciones con tableros prescriptivos y agentes correctivos.",
    result: "Incidentes criticos resueltos en 11 minutos (antes 53).",
    tag: "Finanzas",
    image: "/illustrations/mockup-architecture.svg",
    imageAlt: "Sala de control financiera con metricas y alertas priorizadas",
    icon: "finance",
  },
];

const methodologySteps = [
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
  "Microsoft for Startups",
  "AWS Activate",
  "Gobierno Digital CL",
  "VCX Partners",
  "LA New Ventures",
  "Biotech LATAM",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const year = new Date().getFullYear();

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

      <header className="relative z-20">
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
            <nav className="hidden md:flex md:items-center md:gap-8 md:text-sm md:tracking-[0.28em] md:text-slate-300 md:uppercase">
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
            <div className="flex items-center justify-between gap-3 md:justify-end">
              <button
                type="button"
                onClick={() => setIsNavOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200 transition hover:border-[#74f7d0] hover:text-[#74f7d0] md:hidden"
                aria-label="Abrir menu"
              >
                Menu
                <MenuIcon className="h-4 w-4" />
              </button>
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 self-start rounded-full border border-[#74f7d0]/60 bg-[#74f7d0]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#63e6c3] transition hover:border-[#74f7d0] hover:bg-[#74f7d0]/20 hover:text-[#74f7d0] sm:self-auto"
              >
                Agenda un kickoff
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#030a1f]/90 backdrop-blur-lg md:hidden"
          >
            <div className="mx-auto flex h-full w-full max-w-sm flex-col justify-between px-6 py-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.45em] text-white">
                  ConsultorIA
                </span>
                <button
                  type="button"
                  onClick={() => setIsNavOpen(false)}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:border-[#74f7d0] hover:text-[#74f7d0]"
                  aria-label="Cerrar menu"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsNavOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-slate-200 transition hover:border-[#74f7d0] hover:text-[#74f7d0]"
                  >
                    {item.label}
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
              <div className="grid gap-3 text-xs text-slate-400">
                <span>Version 2.0 visual refresh</span>
                <span>Listo para equipos enterprise + IA</span>
              </div>
            </div>
          </motion.div>
        )}
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
              <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0">
                {metrics.map((metric, index) => (
                  <Reveal
                    key={metric.label}
                    delay={index * 0.08}
                    className="min-w-[240px] snap-start rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:min-w-0"
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
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 px-8 py-6 backdrop-blur">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
                Aliados y clientes
              </span>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-slate-200">
                {trustedBy.map((name) => (
                  <span
                    key={name}
                    className="relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:scale-x-0 after:bg-[#74f7d0] after:transition-transform hover:after:scale-x-100"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[#74f7d0]">
                98% retencion
              </div>
            </div>
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
              const ServiceIcon = serviceIconMap[service.icon];
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
                    <div className="flex items-center gap-3 text-[#74f7d0]">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#74f7d0]/40 bg-[#05152d]/80">
                        <ServiceIcon className="h-6 w-6" />
                      </span>
                      <span className="text-xs uppercase tracking-[0.35em] text-slate-300">
                        {service.subtitle}
                      </span>
                    </div>
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
                    <div className="mt-auto flex items-center justify-between pt-6 text-sm text-[#74f7d0]">
                      <span>Blueprint inclusivo</span>
                      <ArrowIcon className="h-4 w-4" />
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
          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((item, index) => {
              const CaseIcon = caseIconMap[item.icon];
              return (
                <Reveal key={item.company} delay={index * 0.12}>
                  <motion.article
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(10,16,46,0.72)] p-8 backdrop-blur"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-[1px] rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(116,247,208,0.16),_rgba(9,14,40,0.9))]" />
                    </div>
                    <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#040d23]/60">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(51,241,127,0.16),_transparent_70%)] opacity-70 transition duration-500 group-hover:opacity-100" />
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        width={320}
                        height={200}
                        loading="lazy"
                        className="relative z-10 h-auto w-full object-cover"
                        sizes="(min-width: 1024px) 320px, 90vw"
                      />
                    </figure>
                    <div className="relative flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#74f7d0]/40 bg-[#041327]/80 text-[#74f7d0]">
                        <CaseIcon className="h-5 w-5" />
                      </span>
                      <span>{item.tag}</span>
                    </div>
                    <div className="relative mt-6 space-y-4">
                      <h3 className="font-[var(--font-display)] text-2xl text-white">
                        {item.headline}
                      </h3>
                      <p className="text-sm text-slate-200">{item.description}</p>
                    </div>
                    <div className="relative mt-6 rounded-2xl border border-[#74f7d0]/30 bg-[#0b1e33]/80 p-4 text-sm text-[#74f7d0]">
                      {item.result}
                    </div>
                    <div className="relative mt-8 flex items-center justify-between text-xs text-slate-400">
                      <span>{item.company}</span>
                      <span className="inline-flex items-center gap-2 text-[#74f7d0]">
                        Ver detalle
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
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
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-10">
            <div className="absolute left-8 top-10 bottom-10 hidden w-px bg-gradient-to-b from-[#74f7d0] via-white/20 to-[#74f7d0] sm:block" />
            <div className="relative flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-10 sm:overflow-visible sm:pb-0">
              {methodologySteps.map((step, index) => (
                <Reveal
                  key={step.phase}
                  delay={index * 0.12}
                  className="relative min-w-[260px] snap-start rounded-3xl border border-white/10 bg-white/[0.04] p-6 pl-16 backdrop-blur-sm sm:min-w-0 sm:p-8"
                >
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#060c28] font-semibold text-[#74f7d0]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="font-[var(--font-display)] text-xl text-white">
                    {step.phase}
                  </div>
                  <div className="text-xs uppercase tracking-[0.35em] text-[#74f7d0]">
                    {step.deliverables}
                  </div>
                  <p className="mt-3 text-sm text-slate-200">{step.description}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-[rgba(5,10,34,0.8)] p-6 sm:grid-cols-3">
              {principles.map((item) => (
                <div key={item.title} className="space-y-3 text-sm text-slate-200">
                  <div className="text-sm font-semibold uppercase tracking-[0.35em] text-[#74f7d0]">
                    {item.title}
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[radial-gradient(circle_at_top_left,_rgba(116,247,208,0.24),_rgba(5,12,36,0.85))] px-6 py-10 md:px-12 md:py-12">
            <div className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,_rgba(51,241,127,0.2),_transparent)]" />
            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
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
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                    <div className="text-xs uppercase tracking-[0.35em] text-slate-300">
                      Que incluye
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-200">
                      <li>Diagnostico tecnico y de negocio</li>
                      <li>Roadmap con milestones y costos</li>
                      <li>Plan de adopcion y training</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
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

      <footer className="relative z-10 mx-auto max-w-6xl border-t border-white/10 px-4 py-12 text-xs text-slate-400 sm:px-6">
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
