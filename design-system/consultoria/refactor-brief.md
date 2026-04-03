# ConsultorIA UX/UI Refactor Brief

Generated: 2026-04-02T05:01:36.478Z

## North Star
- Present ConsultorIA as a premium, executive-facing AI consultancy.
- Clarify the offer quickly across strategy, experience engineering, and automation.
- Raise trust through stronger hierarchy, proof blocks, and cleaner conversion paths.
- Keep motion intentional, restrained, and accessible.

## Current Surface
- Route focus: `src/app/page.tsx`.
- Home page sections currently assembled: CaseStudies, Footer, Hero, Methodology, Services, TrustStrip.
- Global tokens and atmosphere live in `src/app/globals.css`.
- Marketing copy and proof points live in `src/data/content.ts`.

## Working Docs
- `design-system/consultoria/MASTER.md`
- `design-system/consultoria/pages/home.md`
- `design-system/consultoria/component-inventory.md`
- `design-system/consultoria/refactor-brief.md`

## Recommended Refactor Order
1. Confirm visual direction and token system in the generated design-system docs.
2. Tighten offer hierarchy and trust signals in `src/data/content.ts`.
3. Refactor `Header` and `Hero` together so navigation, framing, and CTA rhythm align.
4. Rebuild proof-heavy sections next: services, case studies, methodology.
5. Unify supporting primitives and motion rules after section-level decisions are stable.
6. Finish with footer/contact conversion and responsive QA.

## Guardrails
- Keep Spanish-first copy unless the task explicitly changes locale.
- Avoid generic SaaS boilerplate, emoji icons, and purple-led palettes.
- Prefer typography, spacing, proof, and composition over decorative excess.
- Respect focus states, contrast, reduced motion, and mobile readability.

## Validation
- `pnpm lint`
- `pnpm dev`
- Manual review at 375px, 768px, 1024px, and 1440px

## MCP Supplement
- If this session exposes MCP tools from the workspace root, use `@21st-dev/magic`, `stitch`, and `nanobanana` as accelerators only.
- Do not block the refactor on MCP availability.
