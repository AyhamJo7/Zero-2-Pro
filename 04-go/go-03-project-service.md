---
id: "go-03-project-service"
track: "04-go"
level: 3
title: "Milestone: Production-ish Go Service"
time: "6–10h"
prerequisites: ["go-02-core-concurrency"]
outcomes:
  - "Expose health/metrics endpoints"
  - "Implement config, logging, and basic tests"
  - "Package with a Dockerfile"
assessment:
  type: "project"
  rubric_ref: "docs/_meta/rubrics/project_rubric.md"
  deliverable: "Public repo, Dockerfile, README with tradeoffs"
tags: ["project","service","docker","metrics"]
---

# Milestone: Production-ish Go Service

Service with at least two endpoints, a worker, tests, and containerization. Explain design choices.