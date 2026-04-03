import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const workspaceRoot = path.resolve(repoRoot, "..");
const searchScript = path.join(
  workspaceRoot,
  ".claude",
  "skills",
  "consultoria-ui-refactor",
  "scripts",
  "search.py",
);

function resolvePython() {
  const candidates = [];

  if (process.env.PYTHON) {
    candidates.push([process.env.PYTHON]);
  }

  candidates.push(["python"], ["py", "-3"]);

  for (const [command, ...baseArgs] of candidates) {
    const result = spawnSync(command, [...baseArgs, "--version"], {
      encoding: "utf8",
    });

    if (!result.error && result.status === 0) {
      return { command, baseArgs };
    }
  }

  throw new Error("Python is required to run the ConsultorIA UI skill search.");
}

if (!existsSync(searchScript)) {
  console.error(`Missing search script: ${searchScript}`);
  process.exit(1);
}

const userArgs = process.argv.slice(2);

if (userArgs.length === 0) {
  console.error("Usage: pnpm ux:search -- \"<query>\" [--domain ux|style|color|landing|product|typography|react|web] [--stack nextjs|react]");
  process.exit(1);
}

let python;

try {
  python = resolvePython();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

const result = spawnSync(
  python.command,
  [...python.baseArgs, searchScript, ...userArgs],
  {
    cwd: repoRoot,
    stdio: "inherit",
  },
);

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
