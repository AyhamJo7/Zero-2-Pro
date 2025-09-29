---
id: "java-04-advanced-resilience"
track: "03-java"
level: 4
title: "Advanced: Resilient Services (timeouts, retries, circuit breakers) & Observability"
time: "8–12h"
prerequisites: ["java-03-project-service"]
outcomes:
  - "Add timeouts, retries with backoff/jitter, and a circuit breaker around external calls"
  - "Expose structured logs, metrics, and traces for critical paths"
  - "Load-test basic SLOs; capture and analyze failure modes"
  - "Document resiliency tradeoffs and fallback behavior"
assessment:
  type: "project"
  rubric_ref: "docs/_meta/rubrics/project_rubric.md"
  deliverable: "Harden your service with resilience patterns + metrics/traces; include load-test results and SLO notes"
resources:
  - label: "Resilience patterns overview"
    url: "https://martinfowler.com/bliki/CircuitBreaker.html"
  - label: "OpenTelemetry (concepts)"
    url: "https://opentelemetry.io/docs/concepts/"
tags: ["resilience","timeouts","retries","circuit-breaker","observability"]
---

# Advanced: Resilience & Observability

Wrap outbound HTTP/database calls with **timeouts**, **retry + backoff**, and a **circuit breaker**. Emit metrics/traces/logs, run a short load test, and document SLOs and failure handling.

## Tasks
- Add client timeouts and bounded connection pools.
- Implement retry policy with jitter; guard with a circuit breaker.
- Emit metrics (latency, errors, retries) and a basic trace around a request.
- Load-test a steady and a failure scenario; add conclusions.