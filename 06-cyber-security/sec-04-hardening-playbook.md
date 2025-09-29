---
id: "sec-04-hardening-playbook"
track: "06-cyber-security"
level: 4
title: "Advanced: Hardening Playbook & Threat Modeling (Lab)"
time: "8–12h"
prerequisites: ["sec-03-project-harden-app"]
outcomes:
  - "Produce a concise threat model (e.g., STRIDE) for a small web app"
  - "Apply concrete hardening steps (CSP, headers, rate limits, secrets mgmt)"
  - "Add minimal supply-chain checks (SBOM or dep scan) and secrets scanning"
  - "Document verification steps and residual risks"
assessment:
  type: "project"
  rubric_ref: "docs/_meta/rubrics/project_rubric.md"
  deliverable: "Playbook + hardened app config + verification logs (all in a legal lab)"
resources:
  - label: "OWASP Cheat Sheet Series"
    url: "https://cheatsheetseries.owasp.org/"
  - label: "CSP Reference"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
tags: ["hardening","threat-modeling","owasp","supply-chain","csp"]
---

# Advanced: Hardening Playbook (Lab only)

Create a short **threat model**, implement a **hardening playbook**, and capture **verification**. Focus on legal, isolated environments.

## Tasks
- Threat model (assets, actors, STRIDE analysis) for your L3 app.
- Apply headers (CSP, HSTS), input validation, rate limiting, secrets handling.
- Add dependency/secrets scanning and document results.
- Provide a verification checklist with evidence.