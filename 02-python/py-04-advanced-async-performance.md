---
id: "py-04-advanced-async-performance"
track: "02-python"
level: 4
title: "Advanced: Async IO, Concurrency, and Profiling"
time: "8–12h"
prerequisites: ["py-03-project-cli"]
outcomes:
  - "Implement bounded concurrency with asyncio and task groups"
  - "Use profiling (cpu/mem) and benchmarking to find bottlenecks"
  - "Apply backpressure, retries, and timeouts for robustness"
  - "Compare sync vs async vs thread pools for a workload"
assessment:
  type: "project"
  rubric_ref: "docs/_meta/rubrics/project_rubric.md"
  deliverable: "High-throughput data fetcher/processor with benchmarks, flamegraphs, and a short report"
resources:
  - label: "Python — asyncio"
    url: "https://docs.python.org/3/library/asyncio.html"
  - label: "Python — cProfile & profile"
    url: "https://docs.python.org/3/library/profile.html"
tags: ["asyncio","profiling","concurrency","benchmarking","retries"]
---

# Advanced: Async IO, Concurrency, and Profiling

Build a small **data pipeline** (e.g., HTTP fetch → parse → write) with **bounded concurrency**, **timeouts**, and **retries**. Profile CPU/memory, produce quick flamegraphs, and compare throughput with a threaded version.

## Tasks
- Prototype sync, async, and thread-pool variants; measure throughput/latency.
- Add bounded concurrency; handle cancellations and timeouts.
- Profile (cpu/mem) and visualize hot paths; document findings.
- Provide a CLI to run scenarios and print metrics.