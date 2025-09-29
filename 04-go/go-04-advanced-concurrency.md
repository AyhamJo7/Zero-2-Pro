---
id: "go-04-advanced-concurrency"
track: "04-go"
level: 4
title: "Advanced: Concurrency Patterns, Context, and Backpressure"
time: "8–12h"
prerequisites: ["go-03-project-service"]
outcomes:
  - "Use context for cancellation/deadlines across goroutines"
  - "Implement worker pools, fan-in/fan-out, and pipelines with backpressure"
  - "Detect and avoid goroutine leaks; write race-safe code"
  - "Benchmark and profile goroutine/alloc behavior"
assessment:
  type: "project"
  rubric_ref: "docs/_meta/rubrics/project_rubric.md"
  deliverable: "Service with a concurrent processing pipeline, graceful shutdown, and benchmarks/profiles"
resources:
  - label: "Go memory model & concurrency"
    url: "https://go.dev/doc/effective_go#concurrency"
  - label: "Context package"
    url: "https://pkg.go.dev/context"
tags: ["go","concurrency","context","backpressure","profiling"]
---

# Advanced: Concurrency Patterns

Design a **pipeline** that ingests jobs, processes them via worker pools, and exposes status endpoints. Propagate **context** cancellations and handle backpressure. Provide benchmarks and profiles.

## Tasks
- Implement fan-out workers with bounded queues and backpressure.
- Ensure context cancellation stops work promptly; no goroutine leaks.
- Add shutdown hooks; verify graceful termination under load.
- Benchmark variants and share results.