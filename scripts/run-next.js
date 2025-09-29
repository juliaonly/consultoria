#!/usr/bin/env node

const { spawn } = require("node:child_process");
const path = require("node:path");

const validCommands = new Set(["dev", "build", "start", "lint"]);
const args = process.argv.slice(2);
if (args.length === 0 || !validCommands.has(args[0])) {
  console.error("run-next: usage -> node scripts/run-next.js <dev|build|start|lint> [args]");
  process.exit(1);
}

const command = args[0];
const commandArgs = args.slice(1);

const DEFAULT_TIMEOUTS = {
  dev: 0,
  build: 420_000,
};

let timeoutMs = DEFAULT_TIMEOUTS[command] ?? 600_000;
const timeoutIndex = commandArgs.findIndex((arg) => arg.startsWith("--timeout="));
if (timeoutIndex >= 0) {
  const rawValue = Number(commandArgs[timeoutIndex].split("=")[1]);
  if (Number.isFinite(rawValue) && rawValue > 0) {
    timeoutMs = rawValue;
  }
  commandArgs.splice(timeoutIndex, 1);
}

const patchModule = path.resolve(__dirname, "patch-trace.js");
const nodeOptions = [process.env.NODE_OPTIONS, `--require ${patchModule}`]
  .filter(Boolean)
  .join(" ");

const spawnArgs = ["exec", "next", command, ...commandArgs];
const child = spawn("pnpm", spawnArgs, {
  shell: process.platform === "win32",
  env: {
    ...process.env,
    NEXT_DISABLE_TRACE: "1",
    NODE_OPTIONS: nodeOptions,
  },
  stdio: "inherit",
});

let timer = null;

function scheduleTimeout() {
  if (timeoutMs <= 0) return;
  timer = setTimeout(() => {
    console.error(`run-next: command '${command}' exceeded ${timeoutMs}ms. Sending SIGTERM...`);
    child.kill("SIGTERM");
    setTimeout(() => {
      if (!child.killed) {
        console.error("run-next: forcing termination with SIGKILL");
        child.kill("SIGKILL");
      }
    }, 5000);
  }, timeoutMs);
}

function cancelTimeout() {
  if (!timer) return;
  clearTimeout(timer);
  timer = null;
}

scheduleTimeout();

child.on("exit", (code, signal) => {
  cancelTimeout();
  if (signal) {
    console.error(`run-next: process exited due to signal ${signal}`);
    process.exit(1);
  }
  process.exit(code ?? 0);
});

child.on("error", (error) => {
  cancelTimeout();
  console.error("run-next: failed to start command", error);
  process.exit(1);
});
