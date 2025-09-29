---
id: "git-02-first-commit"
track: "00-git-path"
level: 1
title: "Local Basics: init, status, add, commit, log"
time: "90m"
prerequisites: ["git-01-intro"]
outcomes:
  - "Initialize a repository and make multiple commits"
  - "Stage changes selectively and write meaningful messages"
  - "Inspect history with `log` and diffs with `show`"
assessment:
  type: "proof-of-work"
  deliverable: "Link to a GitHub repo (or tarball) with ≥3 commits and a README describing each commit"
resources:
  - label: "Git - Recording Changes"
    url: "https://git-scm.com/docs/gittutorial"
tags: ["init", "commit", "log"]
---

# Local Basics: init, status, add, commit, log

Create a new directory and:

```bash
git init
echo "# notes" > notes.md
git add notes.md
git commit -m "Add notes file"
echo "first idea" >> notes.md
git add -p          # stage hunks interactively
git commit -m "Add idea to notes"
git log --oneline
```

## Exercises

1) Write three small commits with clear messages.
2) Use `git show <commit>` to view the diff.

## Checklist

- [ ] 3+ commits
- [ ] At least one interactive stage (`git add -p`)
- [ ] README explains commit intent