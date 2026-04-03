import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const projectSlug = "consultoria";
const defaultPage = "home";

function parseArgs(argv) {
  const options = {
    page: defaultPage,
    mode: "all",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--page") {
      options.page = argv[index + 1] ?? options.page;
      index += 1;
      continue;
    }

    if (arg === "--design-only") {
      options.mode = "design";
      continue;
    }

    if (arg === "--inventory-only") {
      options.mode = "inventory";
      continue;
    }

    if (arg === "--brief-only") {
      options.mode = "brief";
    }
  }

  return options;
}

function walkFiles(directory) {
  if (!existsSync(directory)) {
    return [];
  }

  const files = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath));
      continue;
    }

    if (/\.(css|ts|tsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files.sort((left, right) => left.localeCompare(right));
}

function toPosix(relativePath) {
  return relativePath.split(path.sep).join("/");
}

function extractExports(source) {
  const exportNames = new Set();
  const patterns = [
    /export\s+default\s+function\s+([A-Za-z0-9_]+)/g,
    /export\s+function\s+([A-Za-z0-9_]+)/g,
    /export\s+const\s+([A-Za-z0-9_]+)/g,
    /export\s+class\s+([A-Za-z0-9_]+)/g,
    /export\s+default\s+([A-Za-z0-9_]+)/g,
  ];

  for (const pattern of patterns) {
    let match = pattern.exec(source);

    while (match) {
      exportNames.add(match[1]);
      match = pattern.exec(source);
    }
  }

  const blockPattern = /export\s*\{\s*([^}]+)\s*\}/g;
  let blockMatch = blockPattern.exec(source);

  while (blockMatch) {
    const names = blockMatch[1]
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => part.split(/\s+as\s+/i)[0]?.trim())
      .filter(Boolean);

    for (const name of names) {
      exportNames.add(name);
    }

    blockMatch = blockPattern.exec(source);
  }

  return [...exportNames];
}

function describeFile(absolutePath) {
  const source = readFileSync(absolutePath, "utf8");
  const relativePath = toPosix(path.relative(repoRoot, absolutePath));

  return {
    relativePath,
    exports: extractExports(source),
    lines: source.split(/\r?\n/).length,
  };
}

function groupInventoryEntries() {
  const entries = [
    ...walkFiles(path.join(repoRoot, "src", "app")),
    ...walkFiles(path.join(repoRoot, "src", "components")),
    ...walkFiles(path.join(repoRoot, "src", "data")),
  ].map(describeFile);

  const groups = {
    app: [],
    layout: [],
    sections: [],
    ui: [],
    support: [],
    data: [],
  };

  for (const entry of entries) {
    if (entry.relativePath.startsWith("src/app/")) {
      groups.app.push(entry);
      continue;
    }

    if (entry.relativePath.startsWith("src/components/layout/")) {
      groups.layout.push(entry);
      continue;
    }

    if (entry.relativePath.startsWith("src/components/sections/")) {
      groups.sections.push(entry);
      continue;
    }

    if (entry.relativePath.startsWith("src/components/ui/")) {
      groups.ui.push(entry);
      continue;
    }

    if (entry.relativePath.startsWith("src/data/")) {
      groups.data.push(entry);
      continue;
    }

    groups.support.push(entry);
  }

  return groups;
}

function formatEntry(entry) {
  const exportsText = entry.exports.length > 0 ? entry.exports.map((name) => `\`${name}\``).join(", ") : "none";
  return `- \`${entry.relativePath}\` | exports: ${exportsText} | lines: ${entry.lines}`;
}

function buildInventoryMarkdown(groups) {
  const timestamp = new Date().toISOString();
  const lines = [
    "# ConsultorIA Component Inventory",
    "",
    `Generated: ${timestamp}`,
    "",
    "## Summary",
    `- App files: ${groups.app.length}`,
    `- Layout files: ${groups.layout.length}`,
    `- Section files: ${groups.sections.length}`,
    `- UI primitive files: ${groups.ui.length}`,
    `- Support files: ${groups.support.length}`,
    `- Data files: ${groups.data.length}`,
    "",
    "## App Surface",
  ];

  for (const entry of groups.app) {
    lines.push(formatEntry(entry));
  }

  lines.push("", "## Layout", ...groups.layout.map(formatEntry));
  lines.push("", "## Sections", ...groups.sections.map(formatEntry));
  lines.push("", "## UI Primitives", ...groups.ui.map(formatEntry));
  lines.push("", "## Support Modules", ...groups.support.map(formatEntry));
  lines.push("", "## Data Sources", ...groups.data.map(formatEntry));
  lines.push("");

  return lines.join("\n");
}

function buildRefactorBrief(groups, pageName) {
  const timestamp = new Date().toISOString();
  const sectionNames = groups.sections.map((entry) => path.basename(entry.relativePath, path.extname(entry.relativePath)));

  const lines = [
    "# ConsultorIA UX/UI Refactor Brief",
    "",
    `Generated: ${timestamp}`,
    "",
    "## North Star",
    "- Present ConsultorIA as a premium, executive-facing AI consultancy.",
    "- Clarify the offer quickly across strategy, experience engineering, and automation.",
    "- Raise trust through stronger hierarchy, proof blocks, and cleaner conversion paths.",
    "- Keep motion intentional, restrained, and accessible.",
    "",
    "## Current Surface",
    "- Route focus: `src/app/page.tsx`.",
    `- Home page sections currently assembled: ${sectionNames.join(", ")}.`,
    "- Global tokens and atmosphere live in `src/app/globals.css`.",
    "- Marketing copy and proof points live in `src/data/content.ts`.",
    "",
    "## Working Docs",
    `- \`design-system/${projectSlug}/MASTER.md\``,
    `- \`design-system/${projectSlug}/pages/${pageName}.md\``,
    `- \`design-system/${projectSlug}/component-inventory.md\``,
    `- \`design-system/${projectSlug}/refactor-brief.md\``,
    "",
    "## Recommended Refactor Order",
    "1. Confirm visual direction and token system in the generated design-system docs.",
    "2. Tighten offer hierarchy and trust signals in `src/data/content.ts`.",
    "3. Refactor `Header` and `Hero` together so navigation, framing, and CTA rhythm align.",
    "4. Rebuild proof-heavy sections next: services, case studies, methodology.",
    "5. Unify supporting primitives and motion rules after section-level decisions are stable.",
    "6. Finish with footer/contact conversion and responsive QA.",
    "",
    "## Guardrails",
    "- Keep Spanish-first copy unless the task explicitly changes locale.",
    "- Avoid generic SaaS boilerplate, emoji icons, and purple-led palettes.",
    "- Prefer typography, spacing, proof, and composition over decorative excess.",
    "- Respect focus states, contrast, reduced motion, and mobile readability.",
    "",
    "## Validation",
    "- `pnpm lint`",
    "- `pnpm dev`",
    "- Manual review at 375px, 768px, 1024px, and 1440px",
    "",
    "## MCP Supplement",
    "- If this session exposes MCP tools from the workspace root, use `@21st-dev/magic`, `stitch`, and `nanobanana` as accelerators only.",
    "- Do not block the refactor on MCP availability.",
    "",
  ];

  return lines.join("\n");
}

function currentStamp() {
  return new Date().toISOString().slice(0, 10);
}

function buildMasterMarkdown() {
  const lines = [
    "# ConsultorIA Design System",
    "",
    `Last aligned: ${currentStamp()}`,
    "Scope: Home-first marketing system for a premium B2B AI consultancy.",
    "",
    "## North Star",
    "",
    "- Dark, executive, calm, and technical.",
    "- Spanish-first copy with restrained language for corporate buyers.",
    "- Proof, hierarchy, and clarity before decorative effects.",
    "- Motion only when it improves orientation or emphasis.",
    "",
    "## Core Tokens",
    "",
    "### Colors",
    "",
    "| Role | Value | Usage |",
    "|------|-------|-------|",
    "| Background | `#060816` | Global canvas and page atmosphere |",
    "| Foreground | `#F4F7FB` | Primary text |",
    "| Muted | `#8F9DB4` | Secondary labels and UI support text |",
    "| Muted Strong | `#D6DEEB` | Larger descriptive copy on dark surfaces |",
    "| Accent | `#8ED9D0` | Kicker labels, active states, quiet emphasis |",
    "| Accent Strong | `#B6EFE8` | Premium CTA text and accent hover states |",
    "| Line | `rgba(148, 163, 184, 0.14)` | Soft borders |",
    "| Line Strong | `rgba(148, 163, 184, 0.24)` | Elevated borders |",
    "",
    "### Typography",
    "",
    "- Heading font: `Manrope`",
    "- Body font: `Source Sans 3`",
    "- Headings should feel compressed, editorial, and direct.",
    "- Body copy should remain highly readable on dark surfaces.",
    "- Kicker labels use uppercase tracking and short phrases only.",
    "",
    "### Surface Language",
    "",
    "- `surface-panel`: soft glass surface for section containers.",
    "- `surface-panel-strong`: stronger depth for hero aside and contact conversion block.",
    "- Radii should stay in the `24px` to `36px` range.",
    "- Radial glows and grid textures are supporting atmosphere, not primary decoration.",
    "",
    "## Interaction Rules",
    "",
    "### CTA System",
    "",
    "- One primary CTA per section.",
    "- Primary CTA: filled pill with accent background and dark text.",
    "- Secondary CTA: transparent or low-contrast surface with strong border and hover.",
    "- Footer and utility links stay sober and text-led.",
    "",
    "### Motion",
    "",
    "- Reveal motion should be subtle and directional.",
    "- Use stagger only when it reinforces reading order.",
    "- Respect `prefers-reduced-motion` across scroll and transitions.",
    "- Sticky behavior is acceptable when it improves scanability, especially in the hero.",
    "",
    "### Accessibility",
    "",
    "- Maintain clear focus states on dark surfaces.",
    "- Avoid low-contrast gray-on-navy combinations for body copy.",
    "- Preserve anchor offsets for the sticky header.",
    "- Mobile CTAs should expand full width when stacked.",
    "",
    "## Content Rules",
    "",
    "- Speak to leadership, product, technology, and operations as one system.",
    "- Promise clarity, pilotability, and governance, not hype.",
    "- Prefer terms such as `corporativo`, `descubrimiento`, `plan de trabajo`, and `resguardos operativos`.",
    "- Avoid generic SaaS language, login-product tropes, and noisy growth-style UI.",
    "",
    "## Anti-Patterns",
    "",
    "- Light-mode corporate templates as a default direction.",
    "- Orange-led CTA systems or bright blue corporate palettes.",
    "- Logo carousels, tab farms, or role-switching widgets in the hero.",
    "- Repetitive card grids when an editorial split layout communicates more clearly.",
    "- English jargon when a precise Spanish equivalent exists.",
    "",
    "## Validation",
    "",
    "- `pnpm ux:prepare`",
    "- `pnpm lint`",
    "- `pnpm build`",
    "- Manual review at `375px`, `768px`, `1024px`, and `1440px`",
    "",
  ];

  return lines.join("\n");
}

function buildHomeMarkdown() {
  const lines = [
    "# Home Page Overrides",
    "",
    `Last aligned: ${currentStamp()}`,
    "Route: `src/app/page.tsx`",
    "",
    "## Purpose",
    "",
    "Convert executive visitors into a diagnostic conversation, proposal request, or direct contact without forcing them through generic SaaS flows.",
    "",
    "## Section Order",
    "",
    "1. Hero with primary positioning, dual CTA, metrics, and sticky sprint aside",
    "2. Trust strip with affiliations and engagement models",
    "3. Services in alternating editorial blocks",
    "4. Case studies with one featured proof block and two secondary results cards",
    "5. Methodology with process steps plus operating principles",
    "6. Footer and contact block with clear diagnostic and scheduling actions",
    "",
    "## Layout Rules",
    "",
    "- Max width stays at `7xl` for main content rhythm.",
    "- Background remains deep dark with restrained radial atmosphere.",
    "- Trust must appear before services.",
    "- Hero aside remains sticky on desktop.",
    "- Mobile spacing should stay tight and avoid dead air between sections.",
    "- Section anchors must account for the sticky header.",
    "",
    "## CTA Rules",
    "",
    "- Header and hero primary CTA point to `#contacto`.",
    "- Services CTA opens proposal email with a prefilled subject.",
    "- Case studies CTA opens reference request email with a prefilled subject.",
    "- Hero aside and footer CTA use the diagnostic email subject.",
    "- WhatsApp is used only as a direct scheduling path, never as the only conversion action.",
    "",
    "## Copy Rules",
    "",
    "- Keep the tone premium, calm, and credible.",
    "- Lead with business clarity and execution rhythm.",
    "- Proof should sound operational and measurable.",
    "- Avoid exaggerated claims, startup slang, or generic showcase language.",
    "",
    "## Visual Emphasis",
    "",
    "- Hero headline, sprint aside, featured case, and footer contact block are the four strongest visual anchors.",
    "- Metrics, engagement models, and methodology principles should read as support layers, not competing heroes.",
    "- Use asymmetry to avoid repetitive three-card storytelling.",
    "",
    "## Motion And Accessibility",
    "",
    "- Reduced motion must disable smooth-scroll feel and heavy reveal motion.",
    "- Hover is additive, not required for comprehension.",
    "- Focus visibility and readable contrast are non-negotiable.",
    "",
    "## Out Of Scope",
    "",
    "- Login CTA",
    "- Industry tabs",
    "- Mega menu navigation",
    "- Carousel-heavy trust sections",
    "- Light corporate template variants",
    "",
  ];

  return lines.join("\n");
}

function writeDesignSystemDocs(pageName) {
  const designSystemDir = path.join(repoRoot, "design-system", projectSlug);
  const pagesDir = path.join(designSystemDir, "pages");

  mkdirSync(designSystemDir, { recursive: true });
  mkdirSync(pagesDir, { recursive: true });

  const masterPath = path.join(designSystemDir, "MASTER.md");
  const homePath = path.join(pagesDir, `${pageName}.md`);

  writeFileSync(masterPath, buildMasterMarkdown(), "utf8");
  writeFileSync(homePath, buildHomeMarkdown(), "utf8");

  console.log(`Wrote ${toPosix(path.relative(repoRoot, masterPath))}`);
  console.log(`Wrote ${toPosix(path.relative(repoRoot, homePath))}`);
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const designSystemDir = path.join(repoRoot, "design-system", projectSlug);
  mkdirSync(designSystemDir, { recursive: true });

  const groups = groupInventoryEntries();

  if (options.mode === "all" || options.mode === "design") {
    writeDesignSystemDocs(options.page);
  }

  if (options.mode === "all" || options.mode === "inventory") {
    const inventoryPath = path.join(designSystemDir, "component-inventory.md");
    writeFileSync(inventoryPath, buildInventoryMarkdown(groups), "utf8");
    console.log(`Wrote ${toPosix(path.relative(repoRoot, inventoryPath))}`);
  }

  if (options.mode === "all" || options.mode === "brief") {
    const briefPath = path.join(designSystemDir, "refactor-brief.md");
    writeFileSync(briefPath, buildRefactorBrief(groups, options.page), "utf8");
    console.log(`Wrote ${toPosix(path.relative(repoRoot, briefPath))}`);
  }
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
