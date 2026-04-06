import { engagementModels, trustSignals } from "@/data/content";

export function TrustStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24">
      <div className="surface-panel relative overflow-hidden rounded-[32px] px-6 py-6 sm:px-8">
        <div className="grid-texture absolute inset-0 opacity-[0.18]" />
        <div className="relative grid gap-6 xl:grid-cols-[240px_minmax(0,1fr)_300px] xl:items-center">
          <div className="space-y-3">
            <span className="section-kicker">Como entramos</span>
            <p className="text-sm leading-relaxed text-slate-300">
              Unimos negocio, producto y tecnologia bajo el mismo criterio operativo para que el piloto no nazca desconectado del contexto real.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {trustSignals.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-relaxed text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Modelos de trabajo
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
      </div>
    </section>
  );
}
