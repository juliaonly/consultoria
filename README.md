# ConsultorIA Landing

Landing page premium para ConsultorIA, enfocada en presentar servicios enterprise de IA con experiencias de usuario cinematograficas y microinteracciones fluidas.

## Caracteristicas destacadas
- Hero inmersivo con parallax, smooth scrolling via Lenis y animaciones Framer Motion.
- Secciones para soluciones, casos reales y metodologia con contenidos redactados para clientes enterprise.
- Componentes reutilizables (`Reveal`, `LenisProvider`) y estilos avanzados con Tailwind CSS v4.
- Cards y timelines con efectos glassmorphism, gradientes dinamicos y foco en performance.
- Contacto inspirado en la tarjeta corporativa con CTA directos (telefono, correo y WhatsApp).

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
- `src/app/page.tsx`: landing completa con todas las secciones.
- `src/app/globals.css`: tokens de color, fondos y animaciones globales.
- `src/components/lenis-provider.tsx`: wrapper para smooth scrolling.
- `src/components/reveal.tsx`: helper para animaciones on-scroll.

## Deploy
Preparada para desplegar en Vercel. Ejecuta `pnpm build` (sin Turbopack) y conecta el repositorio a tu proyecto en Vercel.
