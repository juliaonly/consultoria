const fs = require("fs");
const os = require("node:os");
const path = require("path");

const TRACE_SUFFIX = `${path.sep}.next${path.sep}trace`.toLowerCase();
const DEV_NULL = os.devNull || "/dev/null";
const traceFilePath = path.resolve(process.cwd(), ".next", "trace");

try {
  if (fs.existsSync(traceFilePath)) {
    fs.rmSync(traceFilePath, { force: true });
  }
} catch (error) {
  const message = error && typeof error === "object" ? error.message : String(error);
  console.warn(`patch-trace: failed to remove existing trace (${traceFilePath}): ${message}`);
}

function isTraceFile(target) {
  if (!target) return false;
  const normalized = path.resolve(String(target)).toLowerCase();
  return normalized.endsWith(TRACE_SUFFIX);
}

const originalCreateWriteStream = fs.createWriteStream;
let warned = false;

fs.createWriteStream = function patchedCreateWriteStream(target, options) {
  if (isTraceFile(target)) {
    if (!warned) {
      const resolvedTarget = path.resolve(String(target));
      console.warn(
        `patch-trace: redirecting trace writes from ${resolvedTarget} to ${DEV_NULL}.`
      );
      warned = true;
    }
    return originalCreateWriteStream.call(fs, DEV_NULL, options);
  }
  return originalCreateWriteStream.call(fs, target, options);
};
