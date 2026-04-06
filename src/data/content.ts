import { ArchitectureIcon, ExperienceIcon, AutomationIcon, LogisticsIcon, HealthIcon, FinanceIcon } from "@/components/icons";

export const navigation = [
  { label: "Capacidades", href: "#capacidades" },
  { label: "Pruebas", href: "#pruebas" },
  { label: "Metodo", href: "#metodo" },
  { label: "Contacto", href: "#contacto" },
];

export const metrics = [
  {
    label: "Alineacion ejecutiva",
    value: "10 dias",
    description: "Negocio, producto y tecnologia salen del sprint con foco, riesgos y responsables definidos.",
  },
  {
    label: "Frentes coordinados",
    value: "3",
    description: "Estrategia, experiencia y automatizacion trabajan sobre una misma hoja de ruta.",
  },
  {
    label: "Salida util",
    value: "1",
    description: "Blueprint, prototipo o piloto acotado con siguiente paso claro desde el primer ciclo.",
  },
];

export const advisorySprint = [
  "Levantamos cuellos de botella, responsables y decisiones pendientes con una sola mesa de trabajo.",
  "Convertimos hallazgos en backlog priorizado, arquitectura base y una pieza visible para validar rapido.",
  "Dejamos criterios de exito, riesgos operativos y siguiente fase definidos antes de salir del sprint.",
];

export const deliveryModes = [
  {
    label: "Sprint de diagnostico",
    value: "10 dias",
    description: "Direccion ejecutiva, foco compartido y ruta priorizada para decidir rapido.",
  },
  {
    label: "Piloto controlado",
    value: "4 a 6 semanas",
    description: "Validacion con datos reales, observabilidad y limites claros de alcance.",
  },
  {
    label: "Acompanamiento",
    value: "Mensual",
    description: "Gobierno, QA operativo y mejora continua junto al equipo interno.",
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
  whenToCall: string;
  deliverables: string[];
  outcome: string;
  image: string;
  imageAlt: string;
  icon: ServiceIconKey;
}

export const services: ServiceItem[] = [
  {
    title: "Arquitectura y hoja de ruta IA",
    subtitle: "Direccion, backlog y decisiones de plataforma",
    description:
      "Aterrizamos donde conviene usar IA, que integraciones toca y como se gobierna el riesgo para que liderazgo no avance a ciegas.",
    whenToCall:
      "Cuando hay demasiadas ideas, presion por avanzar o decisiones de stack trabadas entre negocio y tecnologia.",
    deliverables: [
      "Mapa de oportunidades con prioridad ejecutiva",
      "Arquitectura objetivo y resguardos operativos",
      "Roadmap por fases con senales de adopcion",
    ],
    outcome:
      "Resultado esperado: un plan ejecutable que negocio, producto y tecnologia pueden defender en la misma mesa.",
    image: "/illustrations/mockup-architecture.svg",
    imageAlt: "Blueprint ejecutivo con arquitectura, backlog y riesgos priorizados",
    icon: "architecture",
  },
  {
    title: "Experiencias para decisiones criticas",
    subtitle: "Portales, dashboards y recorridos que ordenan la operacion",
    description:
      "Redisenamos los frentes donde usuarios internos o clientes necesitan claridad, trazabilidad y una interfaz que ayude a decidir sin friccion.",
    whenToCall:
      "Cuando la experiencia frena adopcion, el equipo opera en demasiadas pantallas o la informacion importante llega tarde.",
    deliverables: [
      "Flujos clave con criterios de prioridad y handoff",
      "Interfaz premium, sobria y accesible para operar",
      "Validacion con stakeholders antes de escalar desarrollo",
    ],
    outcome:
      "Resultado esperado: menos friccion para decidir, entrenar al equipo y sostener el cambio con una interfaz clara.",
    image: "/illustrations/mockup-experience.svg",
    imageAlt: "Panel editorial con recorridos clave, modulos y decisiones priorizadas",
    icon: "experience",
  },
  {
    title: "Automatizacion con gobierno",
    subtitle: "Agentes, pipelines y observabilidad",
    description:
      "Conectamos herramientas, reglas y modelos para mover trabajo repetitivo sin perder control, contexto ni visibilidad operacional.",
    whenToCall:
      "Cuando hay tareas manuales recurrentes, handoffs lentos o dependencia excesiva de expertos para sostener el proceso.",
    deliverables: [
      "Agentes acotados por contexto, permisos y fallback",
      "Integracion con CRM, ERP o stack interno existente",
      "Telemetria, alertas y playbooks para soporte operativo",
    ],
    outcome:
      "Resultado esperado: automatizacion medible con fallback humano y gobierno tecnico desde el inicio.",
    image: "/illustrations/mockup-automation.svg",
    imageAlt: "Panel operativo con agentes, integraciones y alertas accionables",
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
    company: "Operacion logistica",
    headline: "Sala de operaciones para priorizar excepciones y mover decisiones en tiempo real",
    description:
      "Ordenamos informacion dispersa, definimos reglas de alerta y armamos un tablero que negocio y operaciones pueden usar sin traduccion tecnica.",
    result: "Salida tipica: tablero de excepciones, responsables claros y protocolo de escalamiento desde el piloto.",
    tag: "Caso comparable",
    image: "/illustrations/mockup-automation.svg",
    imageAlt: "Sala de operaciones con excepciones priorizadas y decision ejecutiva",
    icon: "logistics",
  },
  {
    company: "Servicios clinicos",
    headline: "Triage, seguimiento y contexto compartido sin perder criterio humano",
    description:
      "La prioridad no es prometer magia. Es dejar trazabilidad, contexto util y un flujo que reduzca tiempos de respuesta.",
    result: "Se mide contra tiempo de atencion, handoff entre equipos y calidad del registro desde el piloto.",
    tag: "Flujo asistido",
    image: "/illustrations/mockup-experience.svg",
    imageAlt: "Panel de seguimiento clinico con prioridades y contexto sintetizado",
    icon: "health",
  },
  {
    company: "Backoffice financiero",
    headline: "Monitoreo, alertas y criterio operativo para equipos bajo presion",
    description:
      "Integramos fuentes, priorizamos eventos y definimos que automatizar, que revisar y como escalar cada excepcion.",
    result: "La prueba real es bajar retrabajo, tiempo fuera de SLA y dependencia de decisiones reactivas.",
    tag: "Operacion critica",
    image: "/illustrations/mockup-architecture.svg",
    imageAlt: "Sala de control financiera con metricas, alertas y decisiones priorizadas",
    icon: "finance",
  },
];

export const featuredCaseStudy = caseStudies[0]!;

export const methodologySteps = [
  {
    phase: "1. Diagnostico ejecutivo",
    deliverables: "Foco compartido + mapa de oportunidad",
    description:
      "Levantamos objetivos, restricciones, decisiones pendientes y datos disponibles para no confundir exploracion con plan real.",
  },
  {
    phase: "2. Piloto con alcance controlado",
    deliverables: "Prototipo, flujo o automatizacion medible",
    description:
      "Diseno, prompts, integraciones y experiencia se prueban sobre un frente acotado, con telemetria y responsables claros.",
  },
  {
    phase: "3. Escala con gobierno",
    deliverables: "Operacion, soporte y siguiente fase definida",
    description:
      "Formalizamos criterios de exito, soporte, ownership y backlog para escalar sin que el cambio dependa de heroicidades.",
  },
];

export const principles = [
  {
    title: "Impacto antes que narrativa",
    description:
      "Cada entrega se piensa para ayudar a decidir, operar o bajar friccion. Si no mueve eso, no entra al sprint.",
  },
  {
    title: "Experiencia sobria y util",
    description:
      "Jerarquia, detalle visual y accesibilidad al servicio de claridad, confianza y adopcion interna.",
  },
  {
    title: "Velocidad con resguardos",
    description:
      "Preferimos pilotos acotados, observables y defendibles antes que lanzamientos rapidos sin criterio operativo.",
  },
];

export const trustSignals = [
  "Liderazgo, producto y tecnologia en la misma mesa",
  "Entregables visibles desde el primer sprint",
  "Ritmo ejecutivo sin perder detalle tecnico",
  "Trabajo remoto o en sitio desde Chile",
];

export const engagementModels = [
  "Diagnostico ejecutivo para ordenar foco, riesgo y oportunidad",
  "Piloto controlado con entregables visibles y medicion real",
  "Acompanamiento para ejecutar, estabilizar y mejorar la operacion",
];

export const kickoffIncludes = [
  "Diagnostico de negocio, tecnologia y preparacion IA en un solo frente.",
  "Ruta priorizada con costos, riesgos y siguiente hito visible.",
  "Plan de adopcion para liderazgo, producto y operaciones.",
];

export const contactInfo = {
  name: "Jose Miguel Cruz Alvarado",
  role: "Director y consultor principal",
  phone: "+56 9 9949 5174",
  email: "jose_cruz_16@live.cl",
  location: "Vina del Mar, Chile",
  linkedin: "https://www.linkedin.com/in/josecruzalvarado",
  diagnosticEmailSubject: "Explorar diagnostico con ConsultorIA",
  proposalEmailSubject: "Solicitar propuesta inicial de ConsultorIA",
  referenceEmailSubject: "Solicitar caso comparable de ConsultorIA",
};
