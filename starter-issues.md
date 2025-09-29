# Starter Issues to Create

Copy-paste these titles into GitHub Issues to get contributors started:

## Enhancement Issues

**Title:** Implement stricter markdownlint per folder (re-enable MD022/MD032 in content)
**Labels:** enhancement, good first issue
**Description:** Currently we have relaxed MD022/MD032 rules globally. Create a more granular markdownlint config that re-enables these spacing rules for content files while keeping them relaxed for templates.

**Title:** Docs: add screenshots/GIFs to all L3 project READMEs
**Labels:** docs, enhancement
**Description:** Each Level-3 milestone project should have visual examples (screenshots or GIFs) showing the working application. This helps learners understand what they're building toward.

**Title:** Add Level-4 proposals: Performance (Web), Concurrency patterns (Go), RAG eval (AI), Hardening playbook (Security)
**Labels:** module, enhancement
**Description:** Design Level-4 advanced modules for each track focusing on production-ready skills. Propose module structure, outcomes, and assessments for expert-level content.

**Title:** Good first issue: fix trailing newlines (MD047) and wrapping in docs/
**Labels:** good first issue, docs
**Description:** Several markdown files are missing trailing newlines and have inconsistent line wrapping. Fix MD047 violations and improve readability in the docs/ folder.

## Setup Instructions

After creating these issues:
1. Run `./setup-labels.sh` to create proper labels
2. Enable Discussions in repo Settings
3. Pin two discussion threads: "Start here" and "Show your proof-of-work"
4. Assign issues to appropriate milestones if needed