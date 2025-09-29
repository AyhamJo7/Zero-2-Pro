---
id: "java-03-project-service"
track: "03-java"
level: 3
title: "Milestone: Production-ish Service (Logging, Health, Dockerfile)"
time: "6–10h"
prerequisites: ["java-02-core-rest"]
outcomes:
  - "Implement basic health checks"
  - "Add logging and configuration"
  - "Containerize the service"
assessment:
  type: "project"
  rubric_ref: "docs/_meta/rubrics/project_rubric.md"
  deliverable: "Public repo + Dockerfile and README with tradeoffs"
tags: ["project","service","docker","logging"]
---

# Milestone: Production-ish Service (Logging, Health, Dockerfile)

Build a small REST service with health endpoint, config via env vars, and a Dockerfile. Include minimal tests and CI.