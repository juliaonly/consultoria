"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowIcon, MenuIcon, CloseIcon } from "@/components/icons";
import { navigation } from "@/data/content";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-[28px] border px-5 py-4 transition duration-300 sm:px-6 ${
          isScrolled
            ? "border-[var(--color-line-strong)] bg-[rgba(7,10,23,0.9)] shadow-[0_24px_80px_rgba(2,6,23,0.4)] backdrop-blur-xl"
            : "border-white/10 bg-[rgba(8,13,30,0.72)] backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href="#hero"
            className="group inline-flex items-center gap-3 text-slate-100"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-sm font-semibold tracking-[0.28em] text-white transition duration-300 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
              CI
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-[0.38em] text-white">
                ConsultorIA
              </span>
              <span className="hidden text-[0.72rem] tracking-[0.22em] text-slate-400 sm:block">
                estrategia IA para producto y operacion
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative inline-flex items-center gap-1 rounded-full py-1 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-slate-300 transition hover:text-white"
              >
                <span>{item.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--color-accent)] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#casos"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-300 transition hover:border-white/20 hover:text-white md:inline-flex"
            >
              Ver resultados
            </Link>
            <Link
              href="#contacto"
              className="group hidden items-center gap-2 rounded-full border border-[rgba(142,217,208,0.28)] bg-[rgba(142,217,208,0.08)] px-5 py-2.5 text-sm font-semibold text-[var(--color-accent-strong)] transition hover:border-[var(--color-accent)] hover:bg-[rgba(142,217,208,0.14)] hover:text-white md:inline-flex"
            >
              Solicitar diagnostico
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={() => setIsNavOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-slate-200 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:hidden"
              aria-label="Abrir menu"
            >
              Menu
              <MenuIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isNavOpen ? (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[rgba(4,7,18,0.96)] backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex h-full w-full max-w-sm flex-col justify-between px-6 py-8">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.42em] text-white">
                    ConsultorIA
                  </span>
                  <span className="mt-2 text-xs tracking-[0.18em] text-slate-400">
                    direccion, experiencia y automatizacion IA
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsNavOpen(false)}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:border-[var(--color-accent)] hover:bg-[rgba(142,217,208,0.08)] hover:text-[var(--color-accent)]"
                  aria-label="Cerrar menu"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <motion.div
                initial={shouldReduceMotion ? false : { y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex flex-col gap-5"
              >
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={shouldReduceMotion ? false : { x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsNavOpen(false)}
                      className="group flex items-center justify-between rounded-[22px] border border-white/8 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.36em] text-slate-200 transition duration-300 hover:border-[rgba(142,217,208,0.3)] hover:bg-[rgba(142,217,208,0.08)] hover:text-[var(--color-accent-strong)]"
                    >
                      {item.label}
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                ))}
                <div className="surface-panel rounded-[24px] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Diagnostico inicial
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Enfocamos el primer sprint en claridad ejecutiva, prioridades definidas y una ruta realista para piloto.
                  </p>
                  <Link
                    href="#contacto"
                    onClick={() => setIsNavOpen(false)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white"
                  >
                    Solicitar diagnostico
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="grid gap-3 text-xs text-slate-400"
              >
                <div className="accent-rule mb-1" />
                <span className="text-[var(--color-accent)]">Listo para equipos corporativos con IA</span>
                <span>Producto, experiencia y automatizacion en un mismo modelo de trabajo.</span>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
