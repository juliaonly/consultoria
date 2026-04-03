"use client";

import { engagementModels, trustedBy } from "@/data/content";
import { Reveal } from "@/components/reveal";

export function TrustStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24">
      <Reveal className="surface-panel relative overflow-hidden rounded-[32px] px-6 py-6 sm:px-8">
        <div className="grid-texture absolute inset-0 opacity-[0.18]" />
        <div className="relative grid gap-6 xl:grid-cols-[240px_minmax(0,1fr)_300px] xl:items-center">
          <div className="space-y-3">
            <span className="section-kicker">Entorno corporativo</span>
            <p className="text-sm leading-relaxed text-slate-300">
              Entramos con una sola narrativa: producto, experiencia y automatizacion bajo el mismo criterio operativo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-sm font-medium tracking-[0.12em] text-slate-200 transition hover:text-white sm:tracking-[0.18em]"
              >
                {name}
              </span>
            ))}
          </div>

          <div className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Carril de trabajo
            </p>
            <div className="mt-4 grid gap-3">
              {engagementModels.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/8 bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
