# Docs Overview

Content lives directly in track folders at the repo root (e.g., `00-git-path/`, `01-web-development/`, …).
A lightweight registry at `docs/_meta/catalog.json` lists all modules with their track, level, and file path.

## Validating & TOCs

Validate catalog structure:

```bash
npx ts-node scripts/validate_catalog.ts
```

(Next steps) Auto-generate per-track TOCs from the catalog:

```bash
npx ts-node scripts/build_toc.ts
```

## Rubrics

- **Level expectations:** `docs/_meta/rubrics/level_rubric.md`
- **Project grading:** `docs/_meta/rubrics/project_rubric.md`

**Tip:** Keep external links minimal and use canonical sources to reduce link-check noise.