---
id: "git-06-history-tools"
track: "00-git-path"
level: 2
title: "Time Travel: log formats, blame, bisect, tags"
time: "60–90m"
prerequisites: ["git-05-rebase-conflicts"]
outcomes:
  - "Customize `git log --graph --decorate --oneline --all`"
  - "Use `git blame` to find introduction of a line"
  - "Use `git bisect` to identify a breaking commit"
  - "Create and push annotated tags"
assessment:
  type: "proof-of-work"
  deliverable: "Repo or gist showing bisect transcript and an annotated tag pushed to origin"
resources:
  - label: "bisect"
    url: "https://git-scm.com/docs/git-bisect"
  - label: "tag"
    url: "https://git-scm.com/docs/git-tag"
tags: ["bisect", "blame", "tag"]
---

# Time Travel: log formats, blame, bisect, tags

- Pretty logs accelerate comprehension.
- `blame` shows last change per line; `bisect` binary-searches history to find regressions.
- Annotated tags (`-a`) are ideal for releases.

## Exercises

- Break a test intentionally; run `git bisect start`, mark good/bad until culprit found.
- Create `v0.1.0` as an annotated tag and push it.

## Checklist

- [ ] Graph log alias saved (optional)
- [ ] Bisect used to find a bug
- [ ] Tag created and pushed