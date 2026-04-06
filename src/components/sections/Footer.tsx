import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { contactInfo, engagementModels, kickoffIncludes } from "@/data/content";
import { getDiagnosticMailto, getPhoneHref, getWhatsappHref } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();
  const diagnosticMailto = getDiagnosticMailto();
  const phoneHref = getPhoneHref();
  const linkedInHref = contactInfo.linkedin;
  const directAgendaHref = getWhatsappHref();

  return (
    <>
      <section id="contacto" className="relative z-10 mx-auto max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10">
        <div className="relative overflow-hidden rounded-[36px] border border-[rgba(182,239,232,0.14)] bg-[linear-gradient(155deg,rgba(16,30,53,0.98),rgba(8,15,34,0.96))] px-6 py-12 shadow-[0_42px_120px_rgba(1,7,20,0.58)] md:px-12 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,_rgba(182,239,232,0.14),_transparent_30%),radial-gradient(circle_at_88%_8%,_rgba(87,136,214,0.18),_transparent_36%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(182,239,232,0.4),transparent)]" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="space-y-8">
              <div>
                <span className="section-kicker">Contacto</span>
                <h2 className="text-balance font-[var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] text-white">
                  Un primer sprint con claridad ejecutiva, una salida visible y una ruta que el equipo pueda sostener.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-relaxed text-[color:var(--color-muted-strong)]">
                Coordinamos sesiones con liderazgo, conectamos datos clave y aterrizamos oportunidades que valga la pena validar. La salida no es una presentacion; es un plan accionable con prioridades, ownership y siguiente paso visible.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Que te llevas
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-[color:var(--color-muted-strong)]">
                    {kickoffIncludes.map((item) => (
                      <li key={item} className="rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Modelos de trabajo
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-[color:var(--color-muted-strong)]">
                    {engagementModels.map((item) => (
                      <li key={item} className="rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-4">
                <Link
                  href={diagnosticMailto}
                  className="group relative inline-flex w-full items-center justify-between gap-2 overflow-hidden rounded-full border border-[rgba(182,239,232,0.35)] bg-[rgba(182,239,232,0.9)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#07101d] transition hover:bg-white sm:w-auto sm:justify-center sm:px-8"
                >
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-160%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(160%)]">
                    <div className="relative h-full w-8 bg-white/30" />
                  </div>
                  Escribir ahora
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={directAgendaHref}
                  className="group inline-flex w-full items-center justify-between gap-2 rounded-full border border-white/16 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-[#d7e7ff] transition hover:border-[var(--color-accent)] hover:bg-white/5 hover:text-white sm:w-auto sm:justify-center sm:px-8"
                >
                  Agendar llamada
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.35em] text-slate-300">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
                  Chile, LatAm y trabajo remoto
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-[rgba(182,239,232,0.12)] bg-[linear-gradient(160deg,rgba(10,18,39,0.94),rgba(8,14,31,0.92))] p-8 shadow-[0_28px_80px_rgba(1,7,20,0.42)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(182,239,232,0.08),_transparent_52%)]" />
              <div className="relative flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
                <span className="h-px w-6 bg-[var(--color-accent)]" />
                Datos de contacto
              </div>

              <div className="relative mt-2 flex flex-col gap-2">
                <h3 className="font-[var(--font-display)] text-3xl text-white">
                  {contactInfo.name}
                </h3>
                <span className="text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">{contactInfo.role}</span>
              </div>

              <div className="relative mb-2 mt-4 grid gap-4 text-sm text-[color:var(--color-muted-strong)]">
                <a href={phoneHref} className="group flex items-center gap-4 transition hover:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[var(--color-accent)] group-hover:bg-[rgba(142,217,208,0.12)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span>
                  {contactInfo.phone}
                </a>
                <a href={diagnosticMailto} className="group flex items-center gap-4 transition hover:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[var(--color-accent)] group-hover:bg-[rgba(142,217,208,0.12)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  {contactInfo.email}
                </a>
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[var(--color-accent)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </span>
                  {contactInfo.location}
                </div>
                <Link
                  href={linkedInHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 transition hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[var(--color-accent)] group-hover:bg-[rgba(142,217,208,0.12)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </span>
                  LinkedIn
                </Link>
              </div>

              <div className="relative mt-auto rounded-[22px] border border-[rgba(182,239,232,0.12)] bg-[rgba(255,255,255,0.05)] p-5 text-sm leading-relaxed text-[color:var(--color-muted-strong)]">
                <span className="font-semibold text-white">Compromiso:</span> una salida util en menos de{" "}
                <span className="font-bold text-[var(--color-accent)]">10 dias habiles</span>, con plan de trabajo, criterios de exito y siguiente paso definido.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,39,0.94),rgba(8,13,29,0.92))] px-8 py-6 text-xs font-medium text-slate-300 shadow-[0_24px_60px_rgba(1,7,20,0.36)] backdrop-blur-sm sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 font-bold tracking-widest text-white">CI</span>
            <span>&copy; {year} ConsultorIA.<br className="sm:hidden" /> <span className="hidden sm:inline"> | </span>Construido desde Vina del Mar, Chile.</span>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href={diagnosticMailto}
              className="group flex items-center gap-2 transition hover:text-[var(--color-accent)]"
            >
              Solicitar diagnostico
              <span className="h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-4" />
            </Link>
            <Link
              href={linkedInHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition hover:text-[var(--color-accent)]"
            >
              LinkedIn
              <span className="h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
