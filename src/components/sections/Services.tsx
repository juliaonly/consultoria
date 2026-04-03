"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { contactInfo, services, serviceIconMap } from "@/data/content";
import { Reveal } from "@/components/reveal";

export function Services() {
  const proposalMailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(contactInfo.proposalEmailSubject)}`;

  return (
    <section id="soluciones" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="section-kicker">Oferta</span>
          <h2 className="text-balance font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] leading-tight text-white">
            Tres carriles para llevar IA a producto, experiencia y operacion sin dispersar el foco.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            Cada frente tiene un rol distinto en la cadena de valor. Lo importante es coordinarlos como sistema, no como iniciativas aisladas.
          </p>
        </div>
        <Link
          href={proposalMailto}
          className="group inline-flex w-full items-center justify-between gap-2 rounded-full border border-white/16 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-[#d7e7ff] transition hover:border-[var(--color-accent)] hover:bg-white/5 hover:text-white md:w-auto md:justify-center"
        >
          Solicitar propuesta base
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="space-y-8">
        {services.map((service, index) => {
          const ServiceIcon = serviceIconMap[service.icon];
          return (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="surface-panel relative overflow-hidden rounded-[32px] p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(142,217,208,0.08),_transparent_36%)]" />
                <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                        0{index + 1}
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(142,217,208,0.18)] bg-[rgba(142,217,208,0.08)] text-[var(--color-accent)]">
                        <ServiceIcon className="h-6 w-6" />
                      </span>
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-300">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="mt-6 max-w-xl font-[var(--font-display)] text-[clamp(1.9rem,3vw,2.7rem)] leading-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                      {service.description}
                    </p>

                    <div className="mt-6 grid gap-3 lg:grid-cols-3">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-relaxed text-slate-200"
                        >
                          {point}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
                      <span className="h-px w-10 bg-white/10" />
                      Entregables claros, criterio tecnico y ritmo ejecutivo.
                    </div>
                  </div>

                  <figure
                    className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(4,10,24,0.75)] p-4 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(142,217,208,0.12),_transparent_62%)]" />
                    <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-[rgba(5,12,28,0.88)]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={560}
                        height={360}
                        loading="lazy"
                        className="h-auto w-full object-cover"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                    </div>
                    <figcaption className="relative mt-4 flex items-center justify-between gap-3 rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                      <span>{service.imageAlt}</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(142,217,208,0.08)] text-[var(--color-accent)]">
                        <ArrowIcon className="h-4 w-4" />
                      </span>
                    </figcaption>
                  </figure>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
