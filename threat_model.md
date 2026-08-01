# Threat Model

## Project Overview

A single-file static HTML executive discussion site for Siemens Mobility, presenting a connected field operating model built on Salesforce capabilities. The entire application is `index.html` served via Python's built-in HTTP server on port 5000. There is no backend, no database, no authentication system, no user-submitted data, and no third-party API integrations. It is not currently deployed.

## Assets

- **Static HTML content** — The page content itself (marketing/executive material). No credentials, PII, or business-sensitive data are stored or processed by the application.
- **Hosting environment** — The Replit environment running the HTTP server.

## Trust Boundaries

- **Browser to static file server** — The only boundary is a browser requesting static files. The server returns pre-built HTML/CSS/JS with no dynamic processing.
- **No client/server data flow** — There is no form submission, API call, or user-controlled input path.

## Scan Anchors

- **Production entry point:** `index.html` (entire application)
- **Server:** Python `http.server` (serves static files only)
- **No authenticated surface, no admin surface, no database queries**
- **Not currently deployed** (no public URL)

## Threat Categories

### Information Disclosure

The content of the site is marketing/executive material intended for sharing. No secrets, API keys, or PII are embedded in the HTML. Risk is low: the only sensitive information would be the business content itself, which is intentional.

If the site is deployed publicly, the content becomes accessible to anyone with the URL. Access can be controlled by keeping the Replit deployment visibility set to `private` or `password-protected` if the content is meant only for the Siemens team.

### Denial of Service

Python's built-in `http.server` is not hardened for production use and has no rate limiting. If exposed publicly under heavy load, it could be overwhelmed. For a low-traffic executive demo site this is an acceptable risk, but a production deployment should use a hardened static file server or CDN.

### Spoofing / Tampering / Elevation of Privilege

Not applicable. There is no authentication system, no user accounts, no mutable state, and no privileged operations. An attacker cannot gain elevated privileges in a system that has none.
