---
id: "git-04-remotes-github"
track: "00-git-path"
level: 2
title: "Remotes & GitHub: clone, fetch, pull, push, PR"
time: "90–120m"
prerequisites: ["git-03-branches-merges"]
outcomes:
  - "Add a remote and push a local repository"
  - "Explain the difference between `fetch` and `pull`"
  - "Open a pull request and request a review"
assessment:
  type: "proof-of-work"
  deliverable: "Public GitHub repo URL and a merged PR (screenshot of PR page)"
resources:
  - label: "Remotes"
    url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes"
  - label: "GitHub Flow"
    url: "https://docs.github.com/en/get-started/quickstart/github-flow"
tags: ["remote", "github", "pull-request"]
---

# Remotes & GitHub: clone, fetch, pull, push, PR

- `git remote add origin <url>`
- `git push -u origin main` sets upstream.
- `git fetch` downloads references; `git pull` fetches **and** merges/rebases.

## Exercises

- Fork a repo or create a new one.
- Push local commits; open a PR from a branch; request a review.

## Checklist

- [ ] Remote added
- [ ] Branch pushed with `-u`
- [ ] PR created and merged