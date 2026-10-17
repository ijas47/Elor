---
name: verify-elor
description: Build, launch and drive the Elor Lighting marketing site (Next.js 15, www.elorlighting.com) in a real Chromium the way a visitor does, and capture evidence. Use before claiming any change to pages, guides, contact details, schema, footer, or the consultation form works.
---

# Verify Elor

The site is a static Next.js 15 App Router build. A visitor reads pages, taps call or WhatsApp links, and sends the consultation form. Verify on a production build (`next build` then `next start`), never on `next dev`. Dev adds `unsafe-eval` to the CSP and hydrates differently.

All helpers live in `.cursor/skills/verify-elor/scripts/` and run from anywhere inside the checkout. State goes in `.verify/` at the repo root (gitignored).

## Launch

```bash
.cursor/skills/verify-elor/scripts/launch.sh 3210
```

Ready when it prints `launch: ready at http://localhost:3210`. That line only appears after `/` serves HTML containing an `<h1>`, so the build finished and pages render. The build fetches Google Fonts through `next/font/google`. That fetch fails intermittently on the shared box with `An error occurred in next/font`. `launch.sh` retries it 3 times. Any other build error stops launch and prints the log tail.

No env vars, database or seed data are needed. The consultation form posts to FormSubmit from the browser, which `drive.mjs` intercepts.

Two checkouts can run side by side on different ports. One checkout runs one instance. `launch.sh` refuses to start a second one or to take a busy port.

## Doctor

```bash
.cursor/skills/verify-elor/scripts/doctor.sh
```

Read-only. Fails if no instance was launched from this checkout, if the pid is gone, if another process owns the port, or if `/` is not 200. Warns when files in `app/`, `components/` or `lib/` changed after the build, which means you are about to test stale code. Run it first whenever a result looks wrong.

## Drive

```bash
node .cursor/skills/verify-elor/scripts/drive.mjs /stores/kochi /guides/brass-chandelier --width 412 --label my-change
node .cursor/skills/verify-elor/scripts/drive.mjs /consultation --submit-consultation --label form
```

For each route it opens a fresh page in headless Chromium (bundled `~/.cache/ms-playwright/chromium-*` or `/usr/bin/google-chrome`) and records the title, meta description, h1s, heading levels, every `tel:` and `wa.me` link, JSON-LD `telephone` values, em dash count in visible text, footer heading styles, and console errors. It takes a full-page and a footer screenshot.

Stable handles used: route paths, `footer`, `a[href^="tel:"]`, `a[href*="wa.me/"]`, `script[type="application/ld+json"]`, and the form fields `#name`, `#phone`, `#city`, `#notes`, `button[type="submit"]`, `[role="status"]`.

Default width is 412 (the mobile size Lighthouse and the LCP work used). Pass `--width 1440` for desktop.

For the whole-site static checks (em dashes, phones per brand, meta lengths, headings, links, sitemap), run `npm run verify` after a build. That reads the built HTML in `.next/server/app` and needs no server.

## Evidence

Each drive writes `.verify/evidence/<timestamp>-<label>/` with `evidence.json` and PNGs. A proof needs:

- The real user path. Load the page by URL and click the real button. Do not call component functions or edit `lib/` values in a test.
- Before and after. For a visual or content change, drive the same routes on `main` (a separate worktree on another port) and on your branch, and compare `evidence.json` plus screenshots.
- Side effects. For the form, `formsubmitPayload` in `evidence.json` is the exact JSON the browser would send to FormSubmit, and `formStatus` is the message the visitor sees.
- Mocks only at the production boundary. FormSubmit, Google Analytics and Clarity are intercepted. FormSubmit gets a fake success, so no real email reaches hello@elorlighting.com. Never run `--submit-consultation` without the interception in `drive.mjs`, and never submit the form on the live site.

## Cleanup

```bash
.cursor/skills/verify-elor/scripts/cleanup.sh
```

Stops the process group that `launch.sh` started (pid in `.verify/server.pid`) and nothing else. Never kill `next` by name: other agents on this box run their own instances. Evidence in `.verify/evidence/` is kept.

## Features

The feature map in `features/` lists what a visitor can do and how to prove each one. A proof that drives one convenient page is incomplete when the map lists others for the same feature.
