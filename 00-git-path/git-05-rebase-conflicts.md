---
id: "git-05-rebase-conflicts"
track: "00-git-path"
level: 2
title: "Rebase Safely: interactive rebase, fixups, autosquash"
time: "90m"
prerequisites: ["git-04-remotes-github"]
outcomes:
  - "Use `git rebase -i` to squash/fixup commits"
  - "Explain when to rebase vs. merge"
  - "Resolve rebase conflicts and continue/abort properly"
assessment:
  type: "proof-of-work"
  deliverable: "Repo link where you squashed WIP commits into a clean history, with notes on conflict resolution"
resources:
  - label: "Interactive rebase"
    url: "https://git-scm.com/docs/git-rebase"
tags: ["rebase", "history", "autosquash"]
---

# Rebase Safely: interactive rebase, fixups, autosquash

Interactive rebase lets you **rewrite local history** before sharing. Use `fixup!` commits and `--autosquash` to tidy.

## Exercises

1) Create 3 WIP commits.
2) `git rebase -i HEAD~3` → squash/fixup.
3) If a conflict appears, `git status` → edit → `git add` → `git rebase --continue`.

## Checklist

- [ ] Clean, logical commit history
- [ ] Notes on *when not* to rebase (shared branches)