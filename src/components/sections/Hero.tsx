import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { advisorySprint, contactInfo, deliveryModes, metrics } from "@/data/content";
import { getDiagnosticMailto, getWhatsappHref } from "@/lib/contact";

export function Hero() {
  const diagnosticMailto = getDiagnosticMailto();
  const directAgendaHref = getWhatsappHref();

  return (
    <section
      id="hero"
      className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute left-[-8%] top-8 -z-10 h-[420px] w-[58%] rounded-full bg-[radial-gradient(circle,_rgba(142,217,208,0.16),_transparent_62%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-4%] top-0 -z-10 h-[360px] w-[42%] rounded-full bg-[radial-gradient(circle,_rgba(87,136,214,0.2),_transparent_64%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[10%] top-24 -z-10 h-[220px] w-[34%] grid-texture opacity-[0.05] [mask-image:radial-gradient(circle_at_top_left,black,transparent_72%)]"
        aria-hidden
      />

      <div className="grid gap-12 xl:grid-cols-[minmax(0,1.08fr)_400px] xl:items-start">
        <div className="space-y-8 pt-1 sm:space-y-10 sm:pt-2">
          <span className="section-kicker">Consultoria IA para decisiones y entregas criticas</span>

          <div className="space-y-5 sm:space-y-6">
            <h1 className="max-w-4xl text-balance font-[var(--font-display)] text-[clamp(2.85rem,6vw,5.35rem)] leading-[1.02] text-white">
              Pasamos de exploracion dispersa a una ruta IA que liderazgo puede aprobar y el equipo puede operar.
            </h1>

            <p className="max-w-2xl text-pretty text-[1.05rem] leading-relaxed text-[color:var(--color-muted-strong)] sm:text-lg">
              Entramos donde hay friccion real: foco ejecutivo difuso, interfaces que no ayudan a decidir y automatizaciones sin gobierno. Ordenamos el frente, activamos una prueba util y dejamos base para escalar.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="#contacto"
              className="group relative inline-flex w-full items-center justify-between gap-2 overflow-hidden rounded-full border border-[rgba(182,239,232,0.4)] bg-[rgba(182,239,232,0.92)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#07101d] transition hover:bg-white sm:w-auto sm:justify-center sm:px-8"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-160%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(160%)]">
                <div className="relative h-full w-8 bg-white/40" />
              </div>
              <span>Solicitar diagnostico</span>
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#capacidades"
              className="group inline-flex w-full items-center justify-between gap-2 rounded-full border border-white/14 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-[#d7e7ff] transition hover:border-[var(--color-accent)] hover:bg-white/5 hover:text-white sm:w-auto sm:justify-center sm:px-8"
            >
              Ver capacidades
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
              Diagnostico, piloto y acompanamiento sin humo de showcase.
            </span>
          </div>

          <div className="surface-panel relative overflow-hidden rounded-[32px] p-4 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-4 font-[var(--font-display)] text-3xl text-white">{metric.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="surface-panel-strong relative h-fit overflow-hidden rounded-[32px] p-6 sm:p-8 xl:sticky xl:top-28">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(142,217,208,0.16),_transparent_52%)]"
            aria-hidden
          />

          <div className="relative z-10 space-y-8">
            <div>
              <span className="section-kicker">Sprint inaugural</span>
              <p className="mt-5 text-balance font-[var(--font-display)] text-[1.9rem] leading-snug text-white">
                En dos semanas dejamos foco, una salida visible y siguiente paso decidido.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                No buscamos impresionar con volumen. Buscamos que el equipo salga del primer ciclo con prioridades claras, riesgos acotados y un frente concreto para validar.
              </p>
            </div>

            <div className="space-y-3">
              {advisorySprint.map((item, index) => (
                <div key={item} className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-[rgba(182,239,232,0.28)] bg-[rgba(182,239,232,0.08)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-200">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-1">
              {deliveryModes.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-white/8 bg-[rgba(255,255,255,0.04)] px-4 py-4"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[24px] border border-white/8 bg-[rgba(5,9,23,0.46)] px-5 py-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Consultor principal
              </p>
              <div className="mt-4 grid gap-2 text-sm text-slate-300">
                <p className="font-semibold text-white">{contactInfo.name}</p>
                <p>{contactInfo.role}</p>
                <p>{contactInfo.location}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={diagnosticMailto}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[var(--color-accent-strong)]"
                >
                  Escribir ahora
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a
                  href={directAgendaHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  Agenda directa
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
