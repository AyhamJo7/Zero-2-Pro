# Contributing Guidelines

Thank you for your interest in improving the Zero-to-Pro Developer Roadmap! This guide will help you contribute effectively.

## 🎯 Types of Contributions

### Content Contributions
- **New modules:** Add learning modules to existing tracks
- **New tracks:** Propose entirely new learning specializations
- **Improvements:** Enhance existing content, fix errors, update outdated information
- **Assessments:** Create or improve proof-of-work assessments

### Technical Contributions
- **CI/CD:** Improve automated testing and validation
- **Tooling:** Enhance scripts for content management
- **Documentation:** Improve setup instructions and guides

## 📋 Content Standards

### Module Requirements
All modules must include:

```yaml
---
id: "unique-module-id"
track: "track-name"
level: 0-4
title: "Module Title"
outcomes:
  - "Specific, measurable learning outcome"
  - "Another outcome"
assessment: "Brief description of proof-of-work"
---
```

### Quality Guidelines
- **Clear objectives:** Each module must have specific, measurable learning outcomes
- **Hands-on focus:** Emphasize practical exercises over theory
- **Progressive difficulty:** Ensure logical skill progression
- **Assessment alignment:** Assessments must validate stated outcomes
- **Beginner-friendly:** Use clear language and avoid unnecessary jargon

## 🔄 Contribution Process

### 1. Before You Start
- Check existing issues and PRs to avoid duplication
- Open an issue to discuss major changes
- Review the [module schema](./schemas/module.schema.json)

### 2. Development Setup
```bash
# Clone the repository
git clone <repo-url>
cd REPO

# Install dependencies
npm install

# Validate your changes
npm run validate
npm run lint
```

### 3. Making Changes
- Create a feature branch: `git checkout -b feature/your-feature-name`
- Follow the established directory structure
- Include proper front-matter in all modules
- Update `docs/_meta/catalog.json` for new content

### 4. Testing Your Changes
```bash
# Validate module schemas
npm run validate:modules

# Check external links
npm run check:links

# Lint markdown
npm run lint:markdown
```

### 5. Submitting Changes
- Write clear, descriptive commit messages
- Open a Pull Request with:
  - Clear description of changes
  - Links to related issues
  - Screenshots for UI changes
  - Confirmation that tests pass

## 📝 Content Guidelines

### Writing Style
- Use clear, conversational tone
- Write for beginners but respect intelligence
- Include concrete examples
- Provide context for why skills matter

### Code Examples
- Include complete, runnable examples
- Add comments explaining key concepts
- Use consistent formatting and style
- Test all code before submission

### Assessments
- Create specific, measurable challenges
- Provide clear success criteria
- Include rubrics for complex projects
- Balance challenge with achievability

## 🔍 Review Process

### Automated Checks
All PRs must pass:
- Schema validation for module front-matter
- Markdown linting
- External link verification
- JSON/YAML syntax validation

### Manual Review
Maintainers will review for:
- Content accuracy and clarity
- Alignment with learning objectives
- Appropriate difficulty progression
- Code quality and security

## 🚫 What We Don't Accept

- **Unsafe content:** Malicious code, security vulnerabilities
- **Copyrighted material:** Content without proper licensing
- **Off-topic content:** Material not aligned with track objectives
- **Low-effort submissions:** Incomplete modules or poor quality content
- **Commercial promotion:** Excessive self-promotion or advertising

## 📄 Licensing

By contributing, you agree that your contributions will be licensed under:
- **Code:** MIT License
- **Content:** Creative Commons Attribution 4.0 International License

## 🆘 Getting Help

- **Questions:** Open a GitHub Discussion
- **Issues:** Use GitHub Issues for bugs and feature requests
- **Direct contact:** Reach out to maintainers listed in CODEOWNERS

## 🏆 Recognition

Contributors will be:
- Listed in module credits for significant contributions
- Recognized in release notes
- Added to our contributors section

Thank you for helping build an amazing learning resource for developers worldwide!