import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const nextBin = resolve(dirname(require.resolve("next/package.json")), "dist/bin/next");
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const port = process.argv[2] || process.env.PORT || "3000";
const result = spawnSync(process.execPath, [nextBin, "start", "-p", port], {
  cwd: projectRoot,
  env: { ...process.env, NEXT_STATIC_EXPORT: "false" },
  stdio: "inherit",
});

process.exit(result.status ?? 1);
