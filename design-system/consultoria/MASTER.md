# ConsultorIA Design System

Last aligned: 2026-04-02
Scope: Home-first marketing system for a premium B2B AI consultancy.

## North Star

- Dark, executive, calm, and technical.
- Spanish-first copy with restrained language for corporate buyers.
- Proof, hierarchy, and clarity before decorative effects.
- Motion only when it improves orientation or emphasis.

## Core Tokens

### Colors

| Role | Value | Usage |
|------|-------|-------|
| Background | `#060816` | Global canvas and page atmosphere |
| Foreground | `#F4F7FB` | Primary text |
| Muted | `#8F9DB4` | Secondary labels and UI support text |
| Muted Strong | `#D6DEEB` | Larger descriptive copy on dark surfaces |
| Accent | `#8ED9D0` | Kicker labels, active states, quiet emphasis |
| Accent Strong | `#B6EFE8` | Premium CTA text and accent hover states |
| Line | `rgba(148, 163, 184, 0.14)` | Soft borders |
| Line Strong | `rgba(148, 163, 184, 0.24)` | Elevated borders |

### Typography

- Heading font: `Manrope`
- Body font: `Source Sans 3`
- Headings should feel compressed, editorial, and direct.
- Body copy should remain highly readable on dark surfaces.
- Kicker labels use uppercase tracking and short phrases only.

### Surface Language

- `surface-panel`: soft glass surface for section containers.
- `surface-panel-strong`: stronger depth for hero aside and contact conversion block.
- Radii should stay in the `24px` to `36px` range.
- Radial glows and grid textures are supporting atmosphere, not primary decoration.

## Interaction Rules

### CTA System

- One primary CTA per section.
- Primary CTA: filled pill with accent background and dark text.
- Secondary CTA: transparent or low-contrast surface with strong border and hover.
- Footer and utility links stay sober and text-led.

### Motion

- Reveal motion should be subtle and directional.
- Use stagger only when it reinforces reading order.
- Respect `prefers-reduced-motion` across scroll and transitions.
- Sticky behavior is acceptable when it improves scanability, especially in the hero.

### Accessibility

- Maintain clear focus states on dark surfaces.
- Avoid low-contrast gray-on-navy combinations for body copy.
- Preserve anchor offsets for the sticky header.
- Mobile CTAs should expand full width when stacked.

## Content Rules

- Speak to leadership, product, technology, and operations as one system.
- Promise clarity, pilotability, and governance, not hype.
- Prefer terms such as `corporativo`, `descubrimiento`, `plan de trabajo`, and `resguardos operativos`.
- Avoid generic SaaS language, login-product tropes, and noisy growth-style UI.

## Anti-Patterns

- Light-mode corporate templates as a default direction.
- Orange-led CTA systems or bright blue corporate palettes.
- Logo carousels, tab farms, or role-switching widgets in the hero.
- Repetitive card grids when an editorial split layout communicates more clearly.
- English jargon when a precise Spanish equivalent exists.

## Validation

- `pnpm ux:prepare`
- `pnpm lint`
- `pnpm build`
- Manual review at `375px`, `768px`, `1024px`, and `1440px`
