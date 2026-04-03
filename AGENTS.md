# ConsultorIA Agents

## Scope

Use this file when the task starts in `C:\Zackompany\ConsultorIA` or the user asks for work on ConsultorIA's site, landing page, brand presentation, UX, UI, accessibility, or motion system.

## Product posture

- Treat ConsultorIA as an active premium B2B AI consultancy site.
- Prioritize clarity of offer, trust, conversion, and design-system consistency over novelty for its own sake.
- Keep the repo isolated from patterns in other Zackompany projects unless the user explicitly asks for cross-pollination.

## Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- Framer Motion
- Lenis

## Default workflow

1. Preserve any in-progress user work in `src/`; do not reset or rewrite active files casually.
2. For UX/UI tasks, use `C:\Zackompany\.claude\skills\consultoria-ui-refactor`.
3. Refresh the refactor docs before major design changes:
   - `pnpm ux:prepare`
4. Use the generated files as working references:
   - `design-system/consultoria/MASTER.md`
   - `design-system/consultoria/pages/home.md`
   - `design-system/consultoria/component-inventory.md`
   - `design-system/consultoria/refactor-brief.md`
5. Only after the docs are aligned, implement component or styling changes.

## UX/UI guardrails

- Keep the tone premium, technical, calm, and credible.
- Maintain Spanish-first copy unless the task explicitly changes locale.
- Avoid emoji icons, generic SaaS defaults, and purple-led palettes.
- Prefer deliberate typography, atmospheric backgrounds, clear section hierarchy, and meaningful motion.
- Respect reduced motion, focus visibility, contrast, and mobile readability.

## Key files

- `src/app/page.tsx`: home route assembly
- `src/app/globals.css`: global tokens and backgrounds
- `src/data/content.ts`: copy, metrics, service, case-study, and contact content
- `src/components/layout/*`: structural chrome
- `src/components/sections/*`: page sections
- `src/components/ui/*`: reusable UI primitives

## Validation

- `pnpm ux:prepare`
- `pnpm lint`
- `pnpm dev`

## MCP note

The workspace root has `C:\Zackompany\.mcp.json` configured with `@21st-dev/magic`, `stitch`, and `nanobanana`. Use them only if the current Codex session exposes those MCP tools; otherwise stay on the local scripted workflow.
