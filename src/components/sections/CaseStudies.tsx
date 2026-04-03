"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { caseIconMap, caseStudies, contactInfo, featuredCaseStudy } from "@/data/content";
import { Reveal } from "@/components/reveal";

export function CaseStudies() {
  const secondaryCaseStudies = caseStudies.slice(1);
  const FeaturedIcon = caseIconMap[featuredCaseStudy.icon];
  const referenceMailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(contactInfo.referenceEmailSubject)}`;

  return (
    <section id="casos" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="section-kicker">Casos</span>
          <h2 className="text-balance font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-tight text-white">
            Equipos que hoy operan con IA aplicada y revisan resultado en lenguaje de negocio.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            No vendemos vitrinas. Mostramos decisiones, integraciones y mejoras medibles en entornos donde cada entrega tiene costo operativo real.
          </p>
        </div>
        <Link
          href={referenceMailto}
          className="group inline-flex w-full items-center justify-between gap-2 rounded-full border border-white/16 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-[#d7e7ff] transition hover:border-[var(--color-accent)] hover:bg-white/5 hover:text-white md:w-auto md:justify-center"
        >
          Solicitar referencia
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_380px]">
        <Reveal className="h-full">
          <article className="surface-panel relative overflow-hidden rounded-[32px] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(142,217,208,0.08),_transparent_34%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="section-kicker">Caso destacado</span>
                  <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-300">
                    <FeaturedIcon className="h-4 w-4 text-[var(--color-accent)]" />
                    {featuredCaseStudy.tag}
                  </span>
                </div>

                <h3 className="mt-6 max-w-xl text-balance font-[var(--font-display)] text-[clamp(2rem,3.4vw,3rem)] leading-tight text-white">
                  {featuredCaseStudy.headline}
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                  {featuredCaseStudy.description}
                </p>

                <div className="mt-6 rounded-[24px] border border-[rgba(142,217,208,0.18)] bg-[rgba(142,217,208,0.08)] px-5 py-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Impacto medido
                  </p>
                  <p className="mt-3 font-[var(--font-display)] text-2xl leading-snug text-white">
                    {featuredCaseStudy.result}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <span className="rounded-full border border-white/10 px-4 py-2 uppercase tracking-[0.26em] text-slate-300">
                    {featuredCaseStudy.company}
                  </span>
                  <span>Integracion con sistemas criticos y toma de decision en tiempo real.</span>
                </div>
              </div>

              <figure className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(4,10,24,0.72)] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(142,217,208,0.12),_transparent_62%)]" />
                <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-[rgba(5,12,28,0.88)]">
                  <Image
                    src={featuredCaseStudy.image}
                    alt={featuredCaseStudy.imageAlt}
                    width={520}
                    height={360}
                    loading="lazy"
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 1280px) 28vw, 100vw"
                  />
                </div>
              </figure>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-6">
          {secondaryCaseStudies.map((item, index) => {
            const CaseIcon = caseIconMap[item.icon];
            return (
              <Reveal key={item.company} delay={index * 0.08}>
                <article className="surface-panel rounded-[28px] p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[rgba(142,217,208,0.18)] bg-[rgba(142,217,208,0.08)] text-[var(--color-accent)]">
                      <CaseIcon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                        {item.tag}
                      </p>
                      <h3 className="mt-3 font-[var(--font-display)] text-2xl leading-tight text-white">
                        {item.headline}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Resultado
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white">{item.result}</p>
                  </div>

                  <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
                    <span className="uppercase tracking-[0.24em] text-slate-300">{item.company}</span>
                    <span className="inline-flex items-center gap-2 text-[var(--color-accent)]">
                      Ver detalle
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
