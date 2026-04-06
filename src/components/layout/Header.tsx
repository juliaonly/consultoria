"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { navigation } from "@/data/content";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!isNavOpen || typeof document === "undefined") return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusableItems = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');

    focusableItems?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsNavOpen(false);
        return;
      }

      if (event.key !== "Tab" || !focusableItems || focusableItems.length === 0) {
        return;
      }

      const firstElement = focusableItems[0];
      const lastElement = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isNavOpen]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6">
      <a href="#contenido-principal" className="skip-link">
        Saltar al contenido
      </a>

      <div
        className={`mx-auto max-w-7xl rounded-[24px] border px-4 py-3 transition duration-300 sm:px-5 ${
          isScrolled
            ? "border-white/10 bg-[rgba(7,10,23,0.82)] shadow-[0_18px_48px_rgba(2,6,23,0.26)] backdrop-blur-xl"
            : "border-white/8 bg-[rgba(8,13,30,0.56)] backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="#hero" className="group inline-flex items-center gap-3 text-slate-100">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-sm font-semibold tracking-[0.24em] text-white transition duration-300 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
              CI
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-[0.9rem] font-semibold uppercase tracking-[0.34em] text-white">
                ConsultorIA
              </span>
              <span className="hidden text-[0.68rem] tracking-[0.16em] text-slate-500 xl:block">
                estrategia IA, experiencia y operacion
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative inline-flex items-center gap-1 rounded-full py-1 text-[0.69rem] font-medium uppercase tracking-[0.24em] text-slate-300 transition hover:text-white"
              >
                <span>{item.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--color-accent)] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#pruebas"
              className="hidden items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-slate-400 transition hover:text-white lg:inline-flex"
            >
              Ver casos comparables
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="#contacto"
              className="group hidden items-center gap-2 rounded-full border border-[rgba(142,217,208,0.22)] bg-[rgba(142,217,208,0.05)] px-4 py-2 text-[0.92rem] font-semibold text-[var(--color-accent-strong)] transition hover:border-[var(--color-accent)] hover:bg-[rgba(142,217,208,0.1)] hover:text-white md:inline-flex"
            >
              Solicitar diagnostico
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={() => setIsNavOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-slate-200 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:hidden"
              aria-controls="mobile-navigation"
              aria-expanded={isNavOpen}
              aria-label="Abrir menu"
            >
              Menu
              <MenuIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {isNavOpen ? (
        <div
          className="fixed inset-0 z-50 bg-[rgba(4,7,18,0.96)] backdrop-blur-xl md:hidden"
          onClick={() => setIsNavOpen(false)}
        >
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            ref={dialogRef}
            className="mx-auto flex h-full w-full max-w-sm flex-col justify-between px-6 py-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span
                  id="mobile-navigation-title"
                  className="text-xs font-semibold uppercase tracking-[0.42em] text-white"
                >
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

            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsNavOpen(false)}
                  className="group flex items-center justify-between rounded-[22px] border border-white/8 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.36em] text-slate-200 transition duration-300 hover:border-[rgba(142,217,208,0.3)] hover:bg-[rgba(142,217,208,0.08)] hover:text-[var(--color-accent-strong)]"
                >
                  {item.label}
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
              <div className="surface-panel rounded-[24px] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Diagnostico inicial
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  El primer sprint termina con prioridades definidas, riesgos visibles y una salida util para validar.
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
            </div>

            <div className="grid gap-3 text-xs text-slate-400">
              <div className="accent-rule mb-1" />
              <span className="text-[var(--color-accent)]">Listo para equipos corporativos con IA</span>
              <span>Foco, experiencia y automatizacion en un mismo ritmo de trabajo.</span>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
