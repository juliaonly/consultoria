# ConsultorIA Landing

Landing page premium para ConsultorIA, enfocada en presentar servicios enterprise de IA con experiencias de usuario cinematograficas y microinteracciones fluidas.

## Caracteristicas destacadas
- Hero inmersivo con métricas en tiempo real (`/api/metrics`) y header sticky con CTA múltiples.
- Librería de componentes modulares: tarjetas de servicios/casos, `TestimonialsMarquee`, formulario inteligente con validaciones personalizadas.
- Blog/recursos (`/recursos`) alimentado desde Markdown local y guías de marca servidas en `/brand-guidelines`.
- Documentación viva en `/docs/analytics` y `/docs/performance` para auditar eventos y accesibilidad.
- Contacto con validaciones, lógica condicional y endpoint `/api/contact` listo para integrarse con CRM.

## Stack tecnico
- Next.js 15 (App Router, TypeScript).
- Tailwind CSS 4 con design tokens en `globals.css`.
- Framer Motion 12 para animaciones y transiciones.
- Lenis para smooth scrolling controlado.

## Comandos
Instalar dependencias (pnpm recomendado):
```bash
pnpm install
```

Entorno de desarrollo (Webpack por defecto):
```bash
pnpm dev
```

Opcional Turbopack experimental:
```bash
pnpm dev:turbopack
```

Linting y build:
```bash
pnpm lint
pnpm build
```

## Estructura relevante
- `src/app/page.tsx`: landing completa con hero dinámico, tarjetas modulares y formulario inteligente.
- `src/app/recursos/`: hub editorial alimentado por Markdown.
- `src/app/api/*`: endpoints de métricas y contacto.
- `src/components/cards/`: ServiceGrid, CaseCarousel y tarjetas reutilizables.
- `src/components/contact-form.tsx`: formulario con validaciones personalizadas y lógica condicional.

## Deploy
Preparada para desplegar en Vercel. Ejecuta `pnpm build` (sin Turbopack) y conecta el repositorio a tu proyecto en Vercel.
