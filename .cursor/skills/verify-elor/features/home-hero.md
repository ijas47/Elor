# Home hero and LCP

The home hero is a server-rendered first scene. `HeroScroll` loads the scroll-scrubbed sequence after hydration. Mobile LCP went from about 6.0s to 3.8s in PR #12.

## Sub-features
- Static first scene that paints without JS.
- Scroll scrub across three scenes.
- Reduced motion collapses to one scene.

## How to get to it (user POV)
Open `/` and scroll.

## Driving it with drive.mjs
```bash
node .cursor/skills/verify-elor/scripts/drive.mjs / --width 412 --label home
```
Pass when `h1` has one entry, `consoleErrors` has nothing besides the stubbed analytics requests, and the full-page screenshot shows the hero image and headline. For LCP, run Lighthouse mobile against the local production build three times and take the median, as PR #12 did.

## Gotchas
- `drive.mjs` intercepts Google Analytics and Clarity. The browser logs those as `Failed to load resource: net::ERR_FAILED`. Ignore those two lines, report anything else.
- The sticky nav floats over element screenshots of the footer.
