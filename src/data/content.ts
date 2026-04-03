import { ArchitectureIcon, ExperienceIcon, AutomationIcon, LogisticsIcon, HealthIcon, FinanceIcon } from "@/components/icons";

export const navigation = [
  { label: "Oferta", href: "#soluciones" },
  { label: "Casos", href: "#casos" },
  { label: "Metodo", href: "#metodologia" },
  { label: "Contacto", href: "#contacto" },
];

export const metrics = [
  {
    label: "Pilotos corporativos",
    value: "120+",
    description: "Lanzamientos e integraciones activadas con producto, tecnologia y operaciones.",
  },
  {
    label: "Integraciones criticas",
    value: "45",
    description: "ERPs, CRMs y nubes hibridas conectadas con observabilidad y resguardos operativos.",
  },
  {
    label: "Tiempo a piloto",
    value: "6 semanas",
    description: "Pilotos productivos listos para medirse con criterio ejecutivo.",
  },
];

export const advisorySprint = [
  "Sesion de arranque con negocio, producto y tecnologia en la misma mesa.",
  "Mapa tecnico con prioridades, riesgos y avances tempranos definidos.",
  "Piloto acotado o prototipo navegable listo para validacion real.",
];

export const deliveryModes = [
  {
    label: "Sprint ejecutivo",
    value: "10 dias",
    description: "Direccion, descubrimiento y hoja de ruta lista para liderazgo.",
  },
  {
    label: "Piloto controlado",
    value: "6 semanas",
    description: "Entrega medible con arquitectura y observabilidad desde el dia uno.",
  },
  {
    label: "Equipo extendido",
    value: "Continuidad",
    description: "Acompanamiento en ejecucion, operacion y optimizacion del producto.",
  },
];

export const serviceIconMap = {
  architecture: ArchitectureIcon,
  experience: ExperienceIcon,
  automation: AutomationIcon,
} as const;

export type ServiceIconKey = keyof typeof serviceIconMap;

export interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  icon: ServiceIconKey;
}

export const services: ServiceItem[] = [
  {
    title: "Arquitectura de productos IA",
    subtitle: "Estrategia, gobierno y hoja de ruta ejecutiva",
    description:
      "Mapeamos procesos, definimos plataforma objetivo y cerramos una arquitectura base gobernable para liderazgo, producto y tecnologia.",
    points: [
      "Talleres ejecutivos con matrices de priorizacion",
      "Arquitecturas de referencia seguras en AWS, Azure o GCP",
      "Objetivos, riesgos y tablero de adopcion listos para liderazgo",
    ],
    image: "/illustrations/mockup-architecture.svg",
    imageAlt: "Blueprint ejecutivo y tablero de arquitectura de IA",
    icon: "architecture",
  },
  {
    title: "Ingenieria de experiencias",
    subtitle: "Interfaces premium, recorridos criticos y claridad para decidir",
    description:
      "Transformamos recorridos criticos en experiencias accesibles, sobrias y sincronizadas con datos reales y momentos de decision.",
    points: [
      "Sistemas de diseno auditables y accesibles AA/AAA",
      "Microinteracciones y transiciones guiadas por IA generativa",
      "Pruebas de usabilidad asistidas con hallazgos generados en vivo",
    ],
    image: "/illustrations/mockup-experience.svg",
    imageAlt: "Dashboard de experiencia multicanal con modulos interactivos",
    icon: "experience",
  },
  {
    title: "Automatizacion integral",
    subtitle: "Agentes, pipelines y observabilidad",
    description:
      "Orquestamos agentes, datos y resguardos operativos para operar IA 24/7 con telemetria, ciclos de mejora y gobierno continuo.",
    points: [
      "Orquestacion de agentes multimodal con resguardos operativos",
      "Tableros de observabilidad y alertas accionables",
      "Integracion con autenticacion, facturacion y cumplimiento corporativo",
    ],
    image: "/illustrations/mockup-automation.svg",
    imageAlt: "Panel operativo de automatizacion con agentes y metricas en tiempo real",
    icon: "automation",
  },
];

export const caseIconMap = {
  logistics: LogisticsIcon,
  health: HealthIcon,
  finance: FinanceIcon,
} as const;

export type CaseIconKey = keyof typeof caseIconMap;

export interface CaseStudyItem {
  company: string;
  headline: string;
  description: string;
  result: string;
  tag: string;
  image: string;
  imageAlt: string;
  icon: CaseIconKey;
}

export const caseStudies: CaseStudyItem[] = [
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

export const featuredCaseStudy = caseStudies[0]!;

export const methodologySteps = [
  {
    phase: "1. Descubrimiento inmersivo",
    deliverables: "Hallazgos accionables + mapa de valor",
    description:
      "Ciclos de entrevistas, auditorias de datos y evaluacion de madurez IA. Co-creamos casos priorizados con retorno trazable.",
  },
  {
    phase: "2. Experimentos controlados",
    deliverables: "Prototipos vivos + medicion en entorno controlado",
    description:
      "Diseno, prompts y modelos se prueban con tus datos reales bajo banderas de despliegue seguras y telemetria completa.",
  },
  {
    phase: "3. Lanzamiento escalable",
    deliverables: "Guias operativas + monitoreo 24/7",
    description:
      "Automatizamos despliegues, entrenamiento y soporte. Documentacion, capacitacion y traspaso segun tus equipos o acompanamiento continuo.",
  },
];

export const principles = [
  {
    title: "IA con impacto real",
    description:
      "Cada entrega nace con KPI de negocio, tableros de seguimiento y margen claro para iterar sin perder control.",
  },
  {
    title: "Experiencias premium",
    description:
      "Jerarquia, motion y detalle visual al servicio de claridad, confianza y performance.",
  },
  {
    title: "Velocidad sostenida",
    description:
      "Stack moderno, infraestructura como codigo y agentes que aceleran QA, soporte y entrenamiento continuo.",
  },
];

export const trustedBy = [
  "Microsoft for Startups",
  "AWS Activate",
  "Gobierno Digital CL",
  "VCX Partners",
  "LA New Ventures",
  "Biotech LATAM",
];

export const engagementModels = [
  "Consultoria de direccion y plan ejecutivo",
  "Piloto con datos reales y resguardos operativos",
  "Equipo mixto para ejecucion continua",
];

export const kickoffIncludes = [
  "Diagnostico tecnico, de negocio y de preparacion IA.",
  "Ruta de implementacion con costos, riesgos y avances tempranos priorizados.",
  "Plan de adopcion para liderazgo, producto y operaciones.",
];

export const contactInfo = {
  name: "Jose Miguel Cruz Alvarado",
  role: "Director ConsultorIA",
  phone: "+56 9 9949 5174",
  email: "jose_cruz_16@live.cl",
  location: "Vina del Mar, Chile",
  linkedin: "https://www.linkedin.com/in/josecruzalvarado",
  website: "https://consultoria.josecruz.cl",
  diagnosticEmailSubject: "Explorar diagnostico con ConsultorIA",
  proposalEmailSubject: "Solicitar propuesta inicial de ConsultorIA",
  referenceEmailSubject: "Solicitar referencia de ConsultorIA",
};
