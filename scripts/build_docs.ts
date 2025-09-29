/**
 * Generate docs/tracks/*.md pages from docs/_meta/catalog.json.
 * - Groups by track and level.
 * - Writes tracks/index.md (overview) + per-track pages.
 * Run:
 *   npx tsx scripts/build_docs.ts
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

type CatalogEntry = {
  id: string;
  track: string;   // "01-web-development"
  level: number;   // 0..4
  path: string;    // "01-web-development/web-00-orientation.md"
  title?: string;
};

const repoRoot = process.cwd();
const catalogPath = join(repoRoot, "docs", "_meta", "catalog.json");

if (!existsSync(catalogPath)) {
  console.error("No docs/_meta/catalog.json found.");
  process.exit(0);
}
const catalog = JSON.parse(readFileSync(catalogPath, "utf8")) as CatalogEntry[];

const levelNames: Record<number, string> = {
  0: "Zero",
  1: "Foundations",
  2: "Core",
  3: "Projects",
  4: "Advanced",
};

const byTrack = new Map<string, CatalogEntry[]>();
for (const e of catalog) {
  if (!byTrack.has(e.track)) byTrack.set(e.track, []);
  byTrack.get(e.track)!.push(e);
}

// Ensure docs/tracks
const docsDir = join(repoRoot, "docs");
const tracksDir = join(docsDir, "tracks");
mkdirSync(tracksDir, { recursive: true });

// Tracks overview page
const trackList = [...byTrack.keys()].sort();
const human = (t: string) => {
  // "01-web-development" -> "01 — Web Development"
  const [num, ...rest] = t.split("-");
  const name = rest.map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
  return `${num} — ${name}`;
};

let overview: string[] = [
  "# Tracks Overview",
  "",
  "Browse each track. Pages are generated from the catalog.",
  ""
];

for (const track of trackList) {
  const ents = byTrack.get(track)!;
  const counts = ents.reduce<Record<number, number>>((acc, e) => {
    acc[e.level] = (acc[e.level] || 0) + 1; return acc;
  }, {});
  const parts = track.split("-");
  const pageSlug = parts.join("-");
  overview.push(`- [${human(track)}](./${pageSlug}.md) — ` +
    `L0:${counts[0]||0} L1:${counts[1]||0} L2:${counts[2]||0} L3:${counts[3]||0} L4:${counts[4]||0}`);
}
overview.push("");
writeFileSync(join(tracksDir, "index.md"), overview.join("\n"), "utf8");

// Per-track pages
for (const track of trackList) {
  const entries = byTrack.get(track)!.slice()
    .sort((a, b) => a.level - b.level || (a.title || a.id).localeCompare(b.title || b.id));

  const page: string[] = [
    `# ${human(track)}`,
    "",
    `> Modules for **${human(track)}** grouped by level. Links go to the repo file.`,
    ""
  ];

  for (let lvl = 0; lvl <= 4; lvl++) {
    const items = entries.filter(e => e.level === lvl);
    if (!items.length) continue;
    page.push(`## Level ${lvl} — ${levelNames[lvl]}`, "");
    for (const e of items) {
      const label = e.title || e.id;
      // Link directly to file in repo (keeps single source of truth)
      const gh = `https://github.com/AyhamJo7/Zero-2-Pro/blob/main/${e.path}`;
      page.push(`- [${label}](${gh}) \`(${e.id})\``);
    }
    page.push("");
  }

  const out = join(tracksDir, `${track}.md`);
  writeFileSync(out, page.join("\n"), "utf8");
  console.log(`✅ Wrote ${out}`);
}

console.log("🎯 Docs pages generated.");