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

# Advanced: Web Performance & Production Readiness

## Outcomes
- Measure and improve **Core Web Vitals** with lab & field data
- Profile bundle size, identify top offenders, and reduce **Time-to-Interactive**
- Implement **HTTP caching** (immutable assets) and **code-splitting**
- Add **synthetic monitoring** and budget checks to CI

## Prerequisites
- Comfortable with modern JS bundlers, basic SPA, and REST APIs
- Completed `web-03-project-spa-api` or have an equivalent SPA/API project

## Reading / References
- [Web.dev — Core Web Vitals](https://web.dev/vitals/)
- [MDN — Resource Hints](https://developer.mozilla.org/en-US/docs/Web/Performance/Resource_Hints)
- [webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) or equivalent
- [HTTP Caching Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

## Exercise
1. Start from your L3 SPA/API milestone (or the `templates/web-spa-api` starter).
2. Add a **bundle analyzer** and cut JS payload by **≥25%**.
3. Add **route-based code splitting** and lazy loading for at least one route.
4. Configure **Cache-Control** for static assets (immutable + long TTL).
5. Add a CLI script or CI step that **fails** if bundle exceeds budget (e.g., 200KB main chunk).

## Acceptance Checklist
- [ ] `npm run analyze` report present and committed
- [ ] Evidence of payload reduction in PR notes (before/after metrics)
- [ ] Code splitting verified (network waterfall or build output)
- [ ] Cache headers shown (config file or screenshot)
- [ ] CI budget check demonstrated (pass + fail example logs or commentary)