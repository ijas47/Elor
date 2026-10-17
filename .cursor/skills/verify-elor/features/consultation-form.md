# Consultation form

A visitor asks for a lighting consultation. The browser posts JSON to `https://formsubmit.co/ajax/hello@elorlighting.com`. Without JavaScript the form posts to `/api/consultation`, which forwards server-side.

## Sub-features
- Client submit with a success or error message in `[role="status"]`.
- No-JS fallback via `/api/consultation` (redirects to `/consultation?sent=1#form`).
- Honeypot field `#company`.

## How to get to it (user POV)
Nav, Consultation, fill the form, press Request Consultation.

## Driving it with drive.mjs
```bash
node .cursor/skills/verify-elor/scripts/drive.mjs /consultation --submit-consultation --label form
```
Pass when `formStatus` starts with "Thanks." and `formsubmitPayload` has `Name`, `Phone`, `City`, `Notes` matching what was typed and `_subject` "Consultation request: Verification Run, Kochi".

## Gotchas
- FormSubmit is intercepted and answered with a fake success. Without the interception a real email goes to hello@elorlighting.com. Never remove it.
- The no-JS path calls FormSubmit from the server and is not covered by `drive.mjs`. Do not hit `/api/consultation` with a POST locally: it sends a real email.
- `/consultation` is rendered on demand (it reads `?sent=1`), so it has no file in `.next/server/app`. `verify-site.mjs` treats it as a known route.
