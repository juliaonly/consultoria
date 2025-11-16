# Instrumentación analítica v2

## Eventos implementados
- `cta_click` (hero y navegación)
- `metric_toggle`
- `contact_submitted`

## Flujo de datos
1. `trackEvent` despacha `CustomEvent` en el cliente.
2. Los handlers conectados en herramientas como Segment o RudderStack escuchan `consultoria:event`.
3. `POST /api/contact` agrega `receivedAt` para reconciliar leads en el CRM.

## Futuro
- Conectar `trackEvent` con `fetch('/api/analytics')` para almacenamiento server-side.
- Añadir mapa de calor via PostHog con consentimiento explícito.
