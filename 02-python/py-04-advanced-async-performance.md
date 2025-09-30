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

# Advanced: Async I/O, Concurrency & Performance in Python

## Outcomes
- Profile async workloads; identify I/O vs CPU bottlenecks
- Use `asyncio`, `uvloop` (optional), and **structured concurrency** patterns
- Implement **bounded concurrency** and backpressure
- Add **benchmark + regression guard** in CI

## Prerequisites
- Python project basics, pytest, venv, type hints preferred
- Completed `py-03-project-cli` or have an equivalent CLI/script project

## Reading / References
- [Python — asyncio](https://docs.python.org/3/library/asyncio.html)
- [Python — cProfile & profile](https://docs.python.org/3/library/profile.html)
- [asyncio tasks & cancellations](https://docs.python.org/3/library/asyncio-task.html)
- [Amdahl's law refresher](https://en.wikipedia.org/wiki/Amdahl%27s_law)

## Exercise
1. Clone `templates/python-cli` or your L3 CLI project.
2. Implement **async pipeline** (e.g., fetch/process/write) with bounded concurrency (semaphore or task groups).
3. Add **micro-benchmark** (pytest-benchmark or timeit harness).
4. Include a **perf guard** in CI that fails if p95 latency regresses by >10% (commentary in README is acceptable if automation is not practical).

## Acceptance Checklist
- [ ] Async pipeline implemented and tested with pytest
- [ ] Benchmark script + baseline results committed
- [ ] CI perf guard demonstrated (either automated check or commentary + logs showing how to verify)