---
id: "git-01-intro"
track: "00-git-path"
level: 0
title: "Git from Absolute Zero: Concepts & Setup"
time: "60–90m"
prerequisites: []
outcomes:
  - "Explain what version control is and name 3 benefits of Git"
  - "Describe commits, DAG, and HEAD in your own words"
  - "Install Git and configure your username/email"
assessment:
  type: "proof-of-work"
  deliverable: "Screenshot or snippet of `git --version` and `git config --list --show-origin` in your environment"
resources:
  - label: "Pro Git (free book)"
    url: "https://git-scm.com/book/en/v2"
  - label: "Official downloads"
    url: "https://git-scm.com/downloads"
tags: ["git", "vcs", "setup"]
---

# Git from Absolute Zero: Concepts & Setup

Git is a **content-addressed** version control system. Commits point to trees/blobs and to a parent commit, forming a DAG. `HEAD` is your current snapshot (usually a branch reference).

## Exercises

1) Install Git.
2) Run: `git config --global user.name "Your Name"` and `git config --global user.email you@example.com`.
3) Show your version: `git --version`.

## Checklist

- [ ] Git installed
- [ ] Username/email set
- [ ] Wrote a 3–5 sentence explanation of commits & HEAD