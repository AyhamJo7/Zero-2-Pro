# Quick Start Guide

Get up and running with Zero-to-Pro in 10 minutes! This guide covers everything you need to start learning.

## 🎯 Choose Your Path

**New to programming?** Start here:
- [Git Fundamentals](tracks/git-path.md) → [Web Development](tracks/web-development.md)

**Have programming experience?** Jump to:
- [Python Track](tracks/python.md) • [Java Track](tracks/java.md) • [Go Track](tracks/go.md)

**Interested in AI/ML or Security?**
- [AI/ML Track](tracks/ai-ml.md) • [Cyber Security Track](tracks/cyber-security.md)

## ⚡ 10-Minute Setup

### Step 1: Development Environment

Choose one option:

=== "GitHub Codespaces (Recommended)"

    1. **Fork this repository** on GitHub
    2. **Click "Code" → "Create codespace on main"**
    3. **Wait 2-3 minutes** for automatic setup
    4. **You're ready!** All tools pre-installed

=== "Local Setup"

    1. **Install Git**: [Download here](https://git-scm.com/)
    2. **Clone repository**:
       ```bash
       git clone https://github.com/YOUR_USERNAME/Zero-2-Pro.git
       cd Zero-2-Pro
       ```
    3. **Install Node.js**: [Download v20](https://nodejs.org/)
    4. **Install dependencies**:
       ```bash
       npm install
       ```

=== "VS Code Dev Container"

    1. **Install VS Code** and **Docker Desktop**
    2. **Install Dev Containers extension**
    3. **Clone and open** repository in VS Code
    4. **Click "Reopen in Container"** when prompted
    5. **Wait for container build** (5-10 minutes first time)

### Step 2: Verify Setup

Run these commands to ensure everything works:

```bash
# Validate catalog and build TOC
npm run check

# Start local documentation server
npm run site:serve
```

Visit `http://localhost:8000` to see the site running locally.

### Step 3: Pick Your First Module

Based on your background:

**Complete Beginner:**
```bash
# Start with Git basics
open docs/00-git-path/git-01-intro.md
```

**Some Programming Experience:**
```bash
# Jump to a specific track
open docs/01-web-development/web-00-orientation.md
open docs/02-python/py-00-setup.md
```

**Experienced Developer:**
```bash
# Go straight to Level 2 modules
open docs/01-web-development/web-02-core-fullstack.md
```

## 🚀 Next Steps

You're all set! Here's what to do now:

1. **[Choose your track](tracks/index.md)** based on your goals
2. **[Join the community](https://github.com/AyhamJo7/Zero-2-Pro/discussions)** and introduce yourself
3. **[Create progress issue](https://github.com/AyhamJo7/Zero-2-Pro/issues/new?template=progress.md)** to track your journey
4. **Start learning!** Remember: consistency beats intensity

---

*Happy learning! 🎉*
