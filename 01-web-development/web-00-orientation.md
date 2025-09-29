---
id: "web-00-orientation"
track: "01-web-development"
level: 0
title: "From Zero: How the Web Works (Client/Server, HTTP, HTML/CSS)"
time: "90m"
prerequisites: ["git-01-intro"]
outcomes:
  - "Explain client–server and request/response with HTTP verbs"
  - "Create a minimal HTML page with semantic tags"
  - "Use browser DevTools to inspect elements and network requests"
assessment:
  type: "proof-of-work"
  deliverable: "Gist or repo with index.html and a short README explaining the request lifecycle"
resources:
  - label: "MDN HTTP Overview"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
  - label: "MDN HTML Elements"
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
tags: ["http","html","css","devtools"]
---

# From Zero: How the Web Works

The browser (client) sends an HTTP request to a server and renders the response. Start with semantic HTML and basic CSS.

## Exercises

- Build `index.html` with `<header>`, `<main>`, `<footer>`.
- Add a CSS file and change typography.
- Open DevTools → Network tab; reload and note status codes.