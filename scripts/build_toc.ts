/**
 * Generate per-track TOC.md files from docs/_meta/catalog.json.
 * - Groups modules by track and level.
 * - Sorts by level (0..4), then title (asc).
 * - Links are relative to each track folder.
 *
 * Run:
 *   npx ts-node scripts/build_toc.ts
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

type CatalogEntry = {
  id: string;
  track: string;    // e.g. "01-web-development"
  level: number;    // 0..4
  path: string;     // e.g. "01-web-development/web-00-orientation.md"
  title?: string;
};

const repoRoot = process.cwd();
const catalogPath = join(repoRoot, "docs", "_meta", "catalog.json");

if (!existsSync(catalogPath)) {
  console.log("ℹ️  No docs/_meta/catalog.json found. Nothing to do.");
  process.exit(0);
}

const raw = readFileSync(catalogPath, "utf8");
const catalog = JSON.parse(raw) as CatalogEntry[];

const byTrack = new Map<string, CatalogEntry[]>();
for (const entry of catalog) {
  if (!byTrack.has(entry.track)) byTrack.set(entry.track, []);
  byTrack.get(entry.track)!.push(entry);
}

const levelNames: Record<number, string> = {
  0: "Zero",
  1: "Foundations",
  2: "Core",
  3: "Projects",
  4: "Advanced"
};

let wrote = 0;
for (const [track, entries] of byTrack) {
  const trackDir = join(repoRoot, track);
  if (!existsSync(trackDir)) mkdirSync(trackDir, { recursive: true });

  const parts: string[] = [];
  parts.push(`# ${track} — Table of Contents\n`);

  for (let lvl = 0; lvl <= 4; lvl++) {
    const items = entries
      .filter(e => e.level === lvl)
      .sort((a, b) => (a.title || a.id).localeCompare(b.title || b.id));

    if (items.length === 0) continue;

    parts.push(`## Level ${lvl} — ${levelNames[lvl]}\n`);
    for (const e of items) {
      // Make links relative to the track directory.
      const rel = e.path.startsWith(`${track}/`)
        ? e.path.slice(track.length + 1)
        : e.path;
      const label = e.title ? e.title : e.id;
      parts.push(`- [${label}](${rel}) \`(${e.id})\``);
    }
    parts.push(""); // blank line
  }

  const outPath = join(trackDir, "TOC.md");
  writeFileSync(outPath, parts.join("\n"), "utf8");
  console.log(`✅ Wrote ${outPath}`);
  wrote++;
}

if (wrote === 0) {
  console.log("ℹ️  No tracks found in catalog.");
} else {
  console.log(`🎯 TOC generation complete for ${wrote} track(s).`);
}