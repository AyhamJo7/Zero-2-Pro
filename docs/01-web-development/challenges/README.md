# Web Development Level-3 Challenges

These stretch challenges extend the **web-03-project-spa-api** milestone with additional complexity and real-world scenarios.

## Challenge 1: Progressive Web App (PWA)

Transform your SPA into a full PWA with:

- Service worker for offline functionality
- App manifest for installability
- Push notifications integration
- Background sync capabilities

**Skills developed:** Service workers, PWA APIs, offline-first design

## Challenge 2: Advanced Authentication

Extend authentication with:

- OAuth2 integration (Google, GitHub)
- Multi-factor authentication (TOTP)
- Role-based access control (RBAC)
- Session management and refresh tokens

**Skills developed:** OAuth flows, security patterns, token management

## Challenge 3: Real-time Features

Add real-time capabilities:

- WebSocket integration for live updates
- Real-time collaboration features
- Server-sent events for notifications
- Optimistic UI updates

**Skills developed:** WebSockets, real-time patterns, state synchronization

## Challenge 4: Performance & Monitoring

Implement production-ready optimizations:

- Code splitting and lazy loading
- Performance budgets and monitoring
- Error tracking and logging
- Analytics and user behavior tracking

**Skills developed:** Performance optimization, observability, analytics

## Challenge 5: Deployment & DevOps

Set up production deployment pipeline:

- Docker containerization
- CI/CD pipeline with automated tests
- Environment management (dev/staging/prod)
- Database migrations and backups

**Skills developed:** Docker, CI/CD, deployment strategies, infrastructure

## Getting Started

1. Choose 2-3 challenges that interest you most
2. Fork or extend your existing web-03 project
3. Document your implementation approach
4. Submit your enhanced project for peer review

## Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [OAuth2 Specification](https://oauth.net/2/)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [Web Performance Best Practices](https://web.dev/performance/)

---

## Level-4 Challenge Variants — Advanced Web Performance

These challenge variants extend the **web-04-advanced-performance** module with additional stretch goals that deepen your production skills.

---

## Variant A — Performance Budgets Everywhere
**Goal**: Apply budgets to scripts, images, and API latency. Fail CI if any budget is exceeded.

**Deliverables**:
- Budget config file (e.g., `budgets.json` or similar)
- CI run link or logs showing pass/fail
- Before/after report (e.g., Lighthouse or bundle analyzer)

**Acceptance Criteria**:
- At least 3 budgets defined (e.g., JS, CSS, image size)
- CI job fails when any budget exceeded
- Evidence of threshold enforcement

---

## Variant B — Progressive Enhancement Stress-Test
**Goal**: Ensure core flows work with JS disabled; record Lighthouse scores.

**Deliverables**:
- Screenshots of app with JS disabled
- Notes documenting which flows work/fail
- Any fixes applied to make it "PE-ready"
- Lighthouse report (before/after if fixes applied)

**Acceptance Criteria**:
- At least one critical flow tested without JS
- Documented findings + next steps
- Lighthouse score documented

---

## Variant C — (Your own stretch)
**Goal**: Propose and execute a measurable stretch aligned with the module outcomes.

**Examples**:
- HTTP/2 push or early hints
- Service worker for offline capability
- Real User Monitoring (RUM) with field data analysis
- A/B test infrastructure

**Deliverables**:
- Short proposal (1–2 paragraphs)
- Implementation evidence (code, config, screenshots)
- Metrics or results (e.g., before/after latency, hit rate)

**Acceptance Criteria**:
- Measurable outcome
- Documented steps and results
- Ties back to L3/L4 learning outcomes