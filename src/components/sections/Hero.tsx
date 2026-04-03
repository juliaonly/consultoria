"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowIcon } from "@/components/icons";
import { advisorySprint, contactInfo, deliveryModes, metrics } from "@/data/content";
import { Reveal } from "@/components/reveal";
import { AmbientPaths } from "@/components/ui/AmbientPaths";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const diagnosticMailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(contactInfo.diagnosticEmailSubject)}`;
  const directAgendaHref = `https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`;

  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 720], [0, shouldReduceMotion ? 0 : -120]);
  const opacity = useTransform(scrollY, [0, 560], [1, shouldReduceMotion ? 1 : 0.18]);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(5,8,22,0.98)_0%,_rgba(6,10,25,0.98)_36%,_rgba(7,12,30,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,_rgba(142,217,208,0.16),_transparent_46%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_10%,_rgba(80,127,206,0.18),_transparent_52%)]" />
        <AmbientPaths className="top-0 h-[72vh] opacity-[0.9]" />
        <div className="grid-texture absolute inset-0 opacity-[0.18]" />

        <motion.div
          style={{ translateY: heroParallax, opacity }}
          className="absolute inset-x-[-20%] top-[-24%] h-[48vh] rounded-full bg-[radial-gradient(circle_at_center,_rgba(142,217,208,0.18),_transparent_64%)] blur-3xl"
        />
      </div>

      <section
        id="hero"
        className="relative mx-auto max-w-7xl px-4 pb-16 pt-18 sm:px-6 sm:pt-24 sm:pb-20 lg:pb-24"
      >
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1.08fr)_400px] xl:items-start">
          <div className="space-y-8 pt-4 sm:space-y-10 sm:pt-10">
            <motion.span
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="section-kicker"
            >
              Consultoria IA para equipos en escalado
            </motion.span>

            <div className="space-y-5 sm:space-y-6">
              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="max-w-4xl text-balance font-[var(--font-display)] text-[clamp(2.85rem,6vw,5.5rem)] leading-[1.02] text-white"
              >
                Estrategia, experiencia y automatizacion IA con ritmo de entrega real.
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                className="max-w-2xl text-pretty text-[1.05rem] leading-relaxed text-[color:var(--color-muted-strong)] sm:text-lg"
              >
                Entramos donde mas duele: decision ejecutiva, recorridos criticos y automatizaciones que ya no pueden esperar. Disenamos el plan, activamos el piloto y dejamos una base sobria para escalar.
              </motion.p>
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link
                href="#contacto"
                className="group relative inline-flex w-full items-center justify-between gap-2 overflow-hidden rounded-full border border-[rgba(182,239,232,0.4)] bg-[rgba(182,239,232,0.9)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#07101d] transition hover:bg-white sm:w-auto sm:justify-center sm:px-8"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-160%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(160%)]">
                  <div className="relative h-full w-8 bg-white/40" />
                </div>
                <span>Solicitar diagnostico</span>
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#casos"
                className="group inline-flex w-full items-center justify-between gap-2 rounded-full border border-white/14 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-[#d7e7ff] transition hover:border-[var(--color-accent)] hover:bg-white/5 hover:text-white sm:w-auto sm:justify-center sm:px-8"
              >
                Ver casos recientes
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Desde descubrimiento ejecutivo hasta operacion continua.
              </span>
            </motion.div>

            <Reveal className="surface-panel relative overflow-hidden rounded-[32px] p-4 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`rounded-[24px] border border-white/8 bg-white/[0.03] p-5 ${index === 0 ? "sm:col-span-1" : ""}`}
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                      {metric.label}
                    </p>
                    <p className="mt-4 font-[var(--font-display)] text-3xl text-white">
                      {metric.value}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.aside
            initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="surface-panel-strong relative h-fit overflow-hidden rounded-[32px] p-6 sm:p-8 xl:sticky xl:top-28"
          >
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(142,217,208,0.16),_transparent_52%)]"
              aria-hidden
            />

            <div className="relative z-10 space-y-8">
              <div>
                <span className="section-kicker">
                  Sprint inaugural
                </span>
                <p className="mt-5 text-balance font-[var(--font-display)] text-[1.9rem] leading-snug text-white">
                  En 10 dias alineamos liderazgo, arquitectura y camino de ejecucion.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Definimos el foco, aterrizamos el plan de trabajo y dejamos una primera pieza visible para validar con criterio de negocio.
                </p>
              </div>

              <div className="space-y-3">
                {advisorySprint.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4"
                  >
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
                  <Link
                    href={diagnosticMailto}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[var(--color-accent-strong)]"
                  >
                    Escribir ahora
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href={directAgendaHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    Agenda directa
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
