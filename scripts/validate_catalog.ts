/**
 * Lightweight validator for the catalog and module metadata.
 * Run with:
 *   npx ts-node scripts/validate_catalog.ts
 *
 * CI note:
 * - Step 4 will add docs/_meta/catalog.json and rubrics.
 * - This script exits 0 if the catalog isn't present yet (so CI doesn't fail).
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

type CatalogEntry = {
  id: string;          // module id (matches front-matter id)
  track: string;       // folder name like "00-git-path"
  level: number;       // 0..4
  path: string;        // relative path to the markdown file
  title?: string;      // optional convenience title
};

const repoRoot = process.cwd();
const catalogPath = join(repoRoot, "docs", "_meta", "catalog.json");

function ok(msg: string) {
  console.log(`✅ ${msg}`);
}
function warn(msg: string) {
  console.warn(`⚠️  ${msg}`);
}
function fail(msg: string): never {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

if (!existsSync(catalogPath)) {
  warn("catalog.json not found yet (expected in Step 4). Skipping validation for now.");
  process.exit(0);
}

let catalogRaw: string;
try {
  catalogRaw = readFileSync(catalogPath, "utf8");
} catch (e) {
  fail(`Unable to read catalog.json: ${(e as Error).message}`);
}

let catalog: CatalogEntry[];
try {
  catalog = JSON.parse(catalogRaw);
} catch (e) {
  fail(`catalog.json is not valid JSON: ${(e as Error).message}`);
}

if (!Array.isArray(catalog)) {
  fail("catalog.json must be an array of entries.");
}

const seenIds = new Set<string>();
const validTracks = new Set([
  "00-git-path",
  "01-web-development",
  "02-python",
  "03-java",
  "04-go",
  "05-ai-ml",
  "06-cyber-security",
]);

for (const [i, entry] of catalog.entries()) {
  const prefix = `entry #${i + 1}`;
  if (!entry.id || typeof entry.id !== "string") fail(`${prefix}: missing/invalid 'id'`);
  if (seenIds.has(entry.id)) fail(`${prefix}: duplicate id '${entry.id}'`);
  seenIds.add(entry.id);

  if (!validTracks.has(entry.track)) {
    fail(`${prefix}: invalid track '${entry.track}'`);
  }
  if (
    typeof entry.level !== "number" ||
    entry.level < 0 ||
    entry.level > 4
  ) {
    fail(`${prefix}: 'level' must be 0..4`);
  }
  if (!entry.path || typeof entry.path !== "string") {
    fail(`${prefix}: missing 'path' to module file`);
  }
  // Existence check is deferred until modules are added (Step 5/6).
}

ok(`Catalog parsed (${catalog.length} entries). Basic validation passed.`);
process.exit(0);