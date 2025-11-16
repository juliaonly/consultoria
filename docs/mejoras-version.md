# Plan consolidado de mejoras

Este documento consolida el plan de acción actual para las mejoras priorizadas en la landing page del proyecto.

## 1. Identidad visual y assets
- Reorganizar y documentar los tokens existentes en `src/app/globals.css`.
- Crear una librería de íconos SVG reutilizables y componentes de ilustraciones responsivas.
- Documentar las guías de marca en `src/content/brand-guidelines.md` para facilitar su consulta.

## 2. Navegación sticky con CTA visibles
- Transformar el encabezado en una barra fija reactiva con blur y estados activos.
- Añadir un modo móvil con menú modal y CTA secundario.

## 3. Métricas interactivas en el hero
- Implementar un endpoint `api/metrics` con KPIs actualizados.
- Consumir los datos desde el hero mediante un hook en vivo con animaciones y toggles de periodo.

## 4. Microinteracciones y scrollytelling
- Crear un hook de parallax y un sistema declarativo de animaciones accesibles.
- Añadir microinteracciones de hover y una librería de curvas/timings compartida.

## 5. Componentización de tarjetas
- Extraer `ServiceCard` y `CaseCard` a componentes reutilizables con grids y carruseles configurables.
- Documentar los esquemas de datos en `src/types/content.ts`.

## 6. Testimonios y pruebas sociales
- Definir un arreglo de testimonios con citas, roles y logotipos.
- Construir una sección `TestimonialsMarquee` con badges de confianza.

## 7. CTA final con formulario inteligente
- Implementar validaciones personalizadas en el cliente para cada campo y lógica condicional enterprise.
- Conectar un endpoint `api/contact` con CRM o webhook y manejar estados de envío.

## 8. Rendimiento y accesibilidad responsive
- Añadir media queries para `prefers-reduced-motion` y optimizar imágenes.
- Ajustar tipografías y contrastes, además de documentar hallazgos en `docs/performance.md`.

## 9. Blog o hub de recursos
- Crear `src/app/recursos/` con artículos MDX y filtros por categoría.
- Implementar `generateMetadata` y CTAs contextuales.

## 10. Analítica y CRM end-to-end
- Integrar SDKs de analítica, helper `trackEvent` y documentación en `docs/analytics.md`.
- Conectar los endpoints con el CRM para reconciliar conversiones.

## Siguiente paso
Esta versión 2 ya integra todos los frentes descritos en un único pull request con código, contenidos y documentación sincronizados.
