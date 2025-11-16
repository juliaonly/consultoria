# Auditoría de performance v2

## Acciones
- Definidos `sizes` y `priority` selectivo en imágenes críticas.
- Tokens para `prefers-reduced-motion` y `prefers-color-scheme` en `globals.css`.
- Minimización de blur y gradientes cuando `motion` está reducido.

## Checklist Lighthouse
- Performance ≥ 92 en desktop.
- Accessibility ≥ 98 (contraste tokens `--color-fg-strong`).
- Best Practices ≥ 100.
- SEO ≥ 100 (metadatos en `/recursos`).

## Próximos pasos
- Automatizar mediciones con GitHub Actions + Lighthouse CI.
