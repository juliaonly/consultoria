"use client";

import { methodologySteps, principles } from "@/data/content";
import { Reveal } from "@/components/reveal";

export function Methodology() {
  return (
    <section id="metodologia" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="section-kicker">Metodo</span>
          <h2 className="text-balance font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-tight text-white">
            Un proceso corto para decidir mejor y una operacion larga para sostener resultado.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            La metodologia esta pensada para reducir incertidumbre rapido, validar con senales reales y dejar una forma de operar que el equipo pueda mantener.
          </p>
        </div>
        <div className="rounded-full border border-[rgba(142,217,208,0.18)] bg-[rgba(142,217,208,0.08)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          gobernanza, ritmo y adopcion
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_360px]">
        <div className="surface-panel rounded-[32px] p-6 sm:p-8">
          <div className="grid gap-4">
            {methodologySteps.map((step, index) => (
              <Reveal
                key={step.phase}
                delay={index * 0.08}
                className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 sm:p-6"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[rgba(142,217,208,0.2)] bg-[rgba(142,217,208,0.08)] text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                      {step.deliverables}
                    </p>
                    <h3 className="mt-3 font-[var(--font-display)] text-2xl leading-tight text-white">
                      {step.phase.replace(/^\d+\.\s/, "")}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <Reveal className="surface-panel-strong rounded-[28px] p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Modelo operativo
            </p>
            <h3 className="mt-4 font-[var(--font-display)] text-[1.75rem] leading-tight text-white">
              La IA entra con criterio operativo, no como experimento suelto.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              El valor aparece cuando descubrimiento, experiencia y automatizacion comparten lenguaje de negocio, telemetria y gobierno tecnico.
            </p>
          </Reveal>

          {principles.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.08 + index * 0.08}
              className="surface-panel rounded-[24px] p-5"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
