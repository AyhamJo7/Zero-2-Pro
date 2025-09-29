---
id: "py-00-setup"
track: "02-python"
level: 0
title: "From Zero: Install Python, Virtual Envs, and First Script"
time: "60–90m"
prerequisites: ["git-01-intro"]
outcomes:
  - "Install Python and verify with REPL"
  - "Create and activate a virtual environment"
  - "Run a script that reads/writes a file"
assessment:
  type: "proof-of-work"
  deliverable: "Repo with `hello.py` and instructions to create/activate venv"
resources:
  - label: "venv docs"
    url: "https://docs.python.org/3/library/venv.html"
tags: ["python","venv","basics"]
---

# From Zero: Install Python, Virtual Envs, and First Script

Use `python -m venv .venv` and `pip` (or uv/pipx). Keep environments local per project.