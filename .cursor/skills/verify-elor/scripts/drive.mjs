#!/usr/bin/env node
import { chromium } from "playwright-core";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const root = execSync("git rev-parse --show-toplevel").toString().trim();
const args = process.argv.slice(2);
const flag = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : d; };
const routes = args.filter((a, i) => !a.startsWith("--") && !args[i - 1]?.startsWith("--"));
if (!routes.length) {
  console.error("usage: drive.mjs <route...> [--width 412] [--submit-consultation] [--label name]");
  process.exit(2);
}
const width = Number(flag("width", "412"));
const submit = args.includes("--submit-consultation");
const portFile = join(root, ".verify/server.port");
if (!existsSync(portFile)) { console.error("drive: no running instance. Run launch.sh first."); process.exit(2); }
const base = `http://localhost:${readFileSync(portFile, "utf8").trim()}`;

function chromePath() {
  const cache = join(process.env.HOME, ".cache/ms-playwright");
  const dir = existsSync(cache) && readdirSync(cache).find((d) => /^chromium-\d+$/.test(d));
  const bundled = dir && join(cache, dir, "chrome-linux64/chrome");
  if (bundled && existsSync(bundled)) return bundled;
  if (existsSync("/usr/bin/google-chrome")) return "/usr/bin/google-chrome";
  throw new Error("No Chromium found. Run: npx playwright-core install chromium");
}

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const outDir = join(root, ".verify/evidence", `${stamp}-${flag("label", "run")}`);
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ executablePath: chromePath() });
const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
const results = [];
for (const route of routes) {
  const page = await context.newPage();
  const consoleErrors = [];
  const external = [];
  page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
  page.on("pageerror", (e) => consoleErrors.push(String(e)));
  let formsubmitPayload = null;
  await page.route(/formsubmit\.co/, async (r) => {
    formsubmitPayload = r.request().postDataJSON?.() ?? r.request().postData();
    await r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: "true" }) });
  });
  await page.route(/googletagmanager|google-analytics|clarity\.ms|c\.bing\.com/, (r) => { external.push(r.request().url()); r.abort(); });

  const resp = await page.goto(base + route, { waitUntil: "networkidle" });
  const slug = route === "/" ? "home" : route.slice(1).replace(/\//g, "_");
  const facts = await page.evaluate(() => {
    const q = (s) => [...document.querySelectorAll(s)];
    const footerH = q("footer h1, footer h2, footer h3, footer h4, footer h5, footer h6").map((h) => {
      const cs = getComputedStyle(h);
      const r = h.getBoundingClientRect();
      return { tag: h.tagName, text: h.textContent.trim(), fontSize: cs.fontSize, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing, color: cs.color, marginBottom: cs.marginBottom, height: Math.round(r.height) };
    });
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content ?? null,
      h1: q("h1").map((h) => h.textContent.trim()),
      headings: q("h1,h2,h3,h4,h5,h6").map((h) => Number(h.tagName[1])),
      tel: [...new Set(q('a[href^="tel:"]').map((a) => a.getAttribute("href")))],
      whatsapp: [...new Set(q('a[href*="wa.me/"]').map((a) => a.getAttribute("href").split("?")[0]))],
      jsonldTelephones: q('script[type="application/ld+json"]').flatMap((s) => (s.textContent.match(/"telephone":"[^"]+"/g) ?? [])),
      emDashes: (document.body.innerText.match(/\u2014/g) ?? []).length,
      footerHeadings: footerH,
    };
  });
  if (submit && route.startsWith("/consultation")) {
    await page.fill("#name", "Verification Run");
    await page.fill("#phone", "+91 00000 00000");
    await page.fill("#city", "Kochi");
    await page.fill("#notes", "Automated verification. Not a real enquiry.");
    await page.click('button[type="submit"]');
    await page.waitForSelector('[role="status"]', { timeout: 10000 });
    facts.formStatus = await page.textContent('[role="status"]');
    facts.formsubmitPayload = formsubmitPayload;
  }
  await page.screenshot({ path: join(outDir, `${slug}.png`), fullPage: true });
  await page.locator("footer").screenshot({ path: join(outDir, `${slug}-footer.png`) }).catch(() => {});
  results.push({ route, status: resp?.status(), consoleErrors, blockedThirdParty: external.length, ...facts });
  await page.close();
}
await browser.close();
writeFileSync(join(outDir, "evidence.json"), JSON.stringify({ base, width, commit: execSync("git rev-parse --short HEAD").toString().trim(), results }, null, 2));
for (const r of results) {
  console.log(`${r.route} ${r.status} h1=${r.h1.length} tel=${r.tel.join(",")} wa=${r.whatsapp.join(",")} emDashes=${r.emDashes} consoleErrors=${r.consoleErrors.length}${r.formStatus ? ` form="${r.formStatus.trim()}"` : ""}`);
}
console.log(`drive: evidence in ${outDir}`);
