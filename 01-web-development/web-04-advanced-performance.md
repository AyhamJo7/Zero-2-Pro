---
id: "web-04-advanced-performance"
track: "01-web-development"
level: 4
title: "Advanced: Web Performance & Observability (CWV, bundling, budgets)"
time: "8–12h"
prerequisites: ["web-03-project-spa-api"]
outcomes:
  - "Measure Core Web Vitals (LCP/INP/CLS) locally and via lab tools; define a perf budget"
  - "Reduce JS/CSS payload via code-splitting, tree-shaking, and asset caching"
  - "Implement lazy loading and prefetch/preload where appropriate"
  - "Add basic RUM/observability to monitor performance over time"
assessment:
  type: "project"
  rubric_ref: "docs/_meta/rubrics/project_rubric.md"
  deliverable: "Optimize your SPA project to meet a stated perf budget; include before/after metrics + lighthouse reports"
resources:
  - label: "web.dev — Core Web Vitals"
    url: "https://web.dev/vitals/"
  - label: "MDN — Resource Hints"
    url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Resource_Hints"
tags: ["performance","core-web-vitals","bundling","observability","lighthouse"]
---

# Advanced: Web Performance & Observability

Define a **performance budget** for your SPA and hit it. Measure with Lighthouse/DevTools, then optimize payload, loading strategy, and caching. Add minimal **RUM** (real-user monitoring) to watch regressions.

## Tasks
- Record baseline CWV metrics (Lighthouse JSON + screenshots).
- Add code-splitting and lazy loading for non-critical routes/components.
- Implement long-term caching (hashed assets) + appropriate cache headers.
- Add `<link rel="preload">` or `prefetch` where it helps; avoid over-prefetch.
- Add basic RUM (e.g., Performance API + simple endpoint or third-party).
- Document results: before/after tables, what improved and why.