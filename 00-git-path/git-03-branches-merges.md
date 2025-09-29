---
id: "git-03-branches-merges"
track: "00-git-path"
level: 1
title: "Branches & Merges: Fast-forward, Three-way"
time: "90–120m"
prerequisites: ["git-02-first-commit"]
outcomes:
  - "Create and switch branches"
  - "Merge branches and explain fast-forward vs. recursive merge"
  - "Resolve a simple merge conflict"
assessment:
  type: "proof-of-work"
  deliverable: "Repo link with feature branch merged into main, plus a short note showing a conflict you resolved"
resources:
  - label: "Branching"
    url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell"
tags: ["branch", "merge", "conflict"]
---

# Branches & Merges: Fast-forward, Three-way

Branches are movable pointers to commits. A **fast-forward** merge moves the pointer; a **three-way** merge creates a merge commit.

## Exercises

1) Create branch `feature/hello`, add a file, commit.
2) On `main`, edit the same line to trigger a conflict.
3) Merge and resolve with your editor, then `git commit`.

## Checklist

- [ ] New branch created and merged
- [ ] Conflict resolved intentionally
- [ ] Notes explaining what happened