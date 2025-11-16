import { NextResponse } from "next/server";
import { Metric } from "@/types/content";

const YEAR_METRICS: Metric[] = [
  { label: "Implementaciones enterprise", value: 132, description: "Despliegues activos", unit: "proyectos" },
  { label: "Integraciones críticas", value: 56, description: "ERPs / CRMs", unit: "sistemas" },
  { label: "Tiempo de entrega", value: 5.5, description: "Promedio kickoff -> piloto", unit: "semanas" },
];

const QUARTER_METRICS: Metric[] = [
  { label: "Casos lanzados", value: 28, description: "Q4", unit: "proyectos" },
  { label: "CSAT enterprise", value: 97, description: "Net satisfaction", unit: "%" },
  { label: "SLA de soporte", value: 11, description: "Resolución incidentes", unit: "minutos" },
];

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = (searchParams.get("period") as "year" | "quarter") ?? "year";
  const metrics = period === "quarter" ? QUARTER_METRICS : YEAR_METRICS;
  return NextResponse.json({ metrics, generatedAt: Date.now() });
}
