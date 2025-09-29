---
id: "ai-04-rag-eval-guardrails"
track: "05-ai-ml"
level: 4
title: "Advanced: RAG Evaluation, Guardrails, and Observability"
time: "8–12h"
prerequisites: ["ai-03-project-mlapp"]
outcomes:
  - "Build an evaluation harness for a RAG or ML app with a small labeled set"
  - "Track retrieval metrics (hit-rate, precision@k) and output quality"
  - "Run ablations (chunk size, k, prompt variants) and compare"
  - "Add guardrails (input constraints, basic PII/unsafe content checks) and logging"
assessment:
  type: "project"
  rubric_ref: "docs/_meta/rubrics/project_rubric.md"
  deliverable: "Evaluation notebook + report with ablations, metrics tables, and a discussion of tradeoffs/limits"
resources:
  - label: "Evaluation concepts for RAG"
    url: "https://haystack.deepset.ai/tutorials/rag-evaluation"
  - label: "Prompting fundamentals"
    url: "https://platform.openai.com/docs/guides/prompt-engineering"
tags: ["rag","evaluation","guardrails","observability","ablations"]
---

# Advanced: RAG Evaluation & Guardrails

Create a **reproducible eval harness** for your L3 app. Track retrieval quality and task-level outputs, run a few **ablations**, and add minimal **guardrails** with logging.

## Tasks
- Prepare a small gold dataset; write eval scripts/notebooks.
- Measure retrieval metrics (hit-rate, p@k) and output checks (exact/heuristic).
- Try 2–3 chunking/k/prompt variants; compare results.
- Add simple guardrails and log eval runs.