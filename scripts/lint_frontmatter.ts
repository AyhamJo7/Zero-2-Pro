#!/usr/bin/env node
/**
 * Front-matter linter for Zero-2-Pro modules.
 * - Validates ONLY module files under 00..06 track folders.
 * - If a file has no front-matter, emit a WARNING (legacy content).
 * - If a file has front-matter but lacks core keys (id/track/level/title), emit a WARNING.
 * - If a file has core keys and violates schema, emit an ERROR and fail.
 */

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { glob } from "glob";
import YAML from "yaml";
import Ajv from "ajv";
import addFormats from "ajv-formats";

type Result = {
  file: string;
  level: "error" | "warning";
  messages: string[];
};

const TRACK_GLOBS = [
  "00-git-path/**/*.md",
  "01-web-development/**/*.md",
  "02-python/**/*.md",
  "03-java/**/*.md",
  "04-go/**/*.md",
  "05-ai-ml/**/*.md",
  "06-cyber-security/**/*.md"
];

// Files we never validate as modules
const IGNORE_FILES = [
  "**/README.md",
  "**/TOC.md",
  "**/challenges/**",
];

const schemaPath = "schemas/module.schema.json";

const ajv = new Ajv({ allErrors: true, strict: false, allowUnionTypes: true });
addFormats(ajv);

async function loadSchema() {
  if (!existsSync(schemaPath)) {
    throw new Error(`Schema not found at ${schemaPath}`);
  }
  const raw = await readFile(schemaPath, "utf8");
  return JSON.parse(raw);
}

function extractFrontmatter(content: string) {
  // Match leading YAML block
  const m = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!m) return null;
  try {
    return YAML.parse(m[1]) ?? {};
  } catch (err) {
    return { __yamlError: String(err) };
  }
}

function hasCoreKeys(fm: any) {
  return fm && typeof fm === "object"
    && "id" in fm && "track" in fm && "level" in fm && "title" in fm;
}

(async function main() {
  console.log("🔍 Linting module front-matter...");

  const files = await glob(TRACK_GLOBS, {
    ignore: ["node_modules/**", ".git/**", ...IGNORE_FILES],
    dot: false,
    nodir: true
  });

  let results: Result[] = [];
  const schema = await loadSchema();
  const validate = ajv.compile(schema);

  for (const file of files) {
    const src = await readFile(file, "utf8");
    const fm = extractFrontmatter(src);

    if (!fm) {
      results.push({
        file,
        level: "warning",
        messages: ["No YAML front-matter (legacy module; recommended to add)"]
      });
      continue;
    }

    if ((fm as any).__yamlError) {
      results.push({
        file,
        level: "error",
        messages: [`Invalid YAML front-matter: ${(fm as any).__yamlError}`]
      });
      continue;
    }

    if (!hasCoreKeys(fm)) {
      results.push({
        file,
        level: "warning",
        messages: ["Front-matter present but missing one or more of: id, track, level, title"]
      });
      continue;
    }

    const ok = validate(fm);
    if (!ok) {
      const msgs = (validate.errors ?? []).map(e =>
        `${e.instancePath || "root"}: ${e.message}`
      );
      results.push({ file, level: "error", messages: msgs.length ? msgs : ["Schema validation failed"] });
    }
  }

  // Print report
  let errors = 0, warnings = 0;
  for (const r of results) {
    if (r.level === "error") {
      errors++;
      console.log(`❌ ${r.file}`);
      r.messages.forEach(m => console.log(`   Error: ${m}`));
    } else {
      warnings++;
      console.log(`⚠️ ${r.file}`);
      r.messages.forEach(m => console.log(`   Warning: ${m}`));
    }
  }

  console.log("\n📊 Front-matter Linting Summary:");
  console.log(`  Files processed: ${files.length}`);
  console.log(`  Files with errors: ${errors}`);
  console.log(`  Files with warnings: ${warnings}`);
  console.log(`  Status: ${errors ? "❌ FAILED" : "✅ OK"}`);

  process.exit(errors ? 1 : 0);
})().catch(err => {
  console.error("❌ Lint failed:", err);
  process.exit(1);
});
