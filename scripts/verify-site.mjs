#!/usr/bin/env node
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT = join(ROOT, ".next/server/app");
const PUBLIC = join(ROOT, "public");

const ELOR_PHONE = "918848708529";
const CELESTIAL_PHONE = "919995619470";
const CELESTIAL_PAGES = new Set(["index", "stores", "stores/kannur", "stores/kozhikode"]);
const AI_TELLS = [
  /\bdelve\b/i, /\belevate[sd]?\b/i, /\bseamless(ly)?\b/i, /\bunlock(s|ed|ing)?\b/i,
  /\btapestry\b/i, /\btestament\b/i, /in today's world/i, /\bnot just\b/i,
  /\bwhether you're\b/i,
];
const PLACEHOLDERS = [/\bplaceholder\b/i, /lorem ipsum/i, /\bTODO\b/, /90000 0000\d/, /Mavoor Road/i];
const META_DESC_MAX = 160;
const TITLE_MAX = 65;

if (!existsSync(OUT)) {
  console.error("verify-site: no build output at .next/server/app. Run `npm run build` first.");
  process.exit(2);
}

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(OUT).filter((f) => f.endsWith(".html") || f.endsWith(".body"));
const route = (f) => relative(OUT, f).replace(/\.(html|body)$/, "");
const routes = new Set(files.map(route));
const failures = [];
const fail = (rule, where, msg, fix) => failures.push({ rule, where, msg, fix });

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");

function visibleText(html) {
  return decode(
    html
      .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi, " $1 ")
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<!-- -->/g, "")
      .replace(/<[^>]+>/g, " ")
  ).replace(/\s+/g, " ");
}

function context(text, idx) {
  return text.slice(Math.max(0, idx - 40), idx + 40).trim();
}

function digitsOf(s) {
  return s.replace(/[^\d]/g, "");
}

const redirectSources = new Set(["kannur", "kochi", "kozhikode"].map((c) => `guides/custom-chandeliers-${c}`));

for (const f of files) {
  const r = route(f);
  if (r === "_not-found") continue;
  const raw = readFileSync(f, "utf8");
  const isHtml = f.endsWith(".html");
  const text = isHtml ? visibleText(raw) : raw;

  let m;
  const em = /\u2014/g;
  while ((m = em.exec(text))) {
    fail("no-em-dash", r, `em dash in "${context(text, m.index)}"`, "Rewrite the sentence with a full stop, comma, colon or parentheses. Do not swap in a hyphen.");
  }
  const en = /\u2013/g;
  while ((m = en.exec(text))) {
    const before = text.slice(Math.max(0, m.index - 8), m.index);
    const after = text.slice(m.index + 1, m.index + 8);
    if (!(/\d\s*(m|cm|km|kg|ft|in)?\s*$/.test(before) && /^\s*₹?\d/.test(after))) {
      fail("no-en-dash-as-dash", r, `en dash used as a dash in "${context(text, m.index)}"`, "En dash is only allowed in number ranges like 5–10. Rewrite the sentence.");
    }
  }
  for (const rx of AI_TELLS) {
    const hit = rx.exec(text);
    if (hit) fail("no-ai-tell", r, `"${hit[0]}" in "${context(text, hit.index)}"`, "Use plain wording. See the banned list in AGENTS.md.");
  }
  for (const rx of PLACEHOLDERS) {
    const hit = rx.exec(text);
    if (hit) fail("no-placeholder", r, `"${hit[0]}" in "${context(text, hit.index)}"`, "Leave the field empty in lib/site.ts instead of publishing a placeholder.");
  }

  const phoneRx = /(?:\+91[\s-]?\d{5}[\s-]?\d{5}|tel:\+?\d{10,13}|wa\.me\/\d{10,13})/g;
  while ((m = phoneRx.exec(raw))) {
    const d = digitsOf(m[0]).replace(/^(?!91)(\d{10})$/, "91$1");
    if (d !== ELOR_PHONE && d !== CELESTIAL_PHONE) {
      fail("known-phones-only", r, `unknown phone ${m[0]}`, "Phones come from lib/site.ts only: Elor +91 88487 08529, Celestial +91 99956 19470.");
    }
    if (m[0].startsWith("wa.me") && d !== ELOR_PHONE) {
      fail("whatsapp-is-elor", r, `WhatsApp link to ${m[0]}`, "WhatsApp links must use site.whatsapp (Elor +91 88487 08529).");
    }
    if (d === CELESTIAL_PHONE && !CELESTIAL_PAGES.has(r)) {
      fail("celestial-phone-scope", r, `Celestial number ${m[0]} on an Elor-only page`, "Use site.phone (Elor). site.celestialPhone belongs only to the Kannur and Kozhikode store entries.");
    }
  }

  if (!isHtml) continue;

  for (const block of raw.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    let data;
    try {
      data = JSON.parse(block[1]);
    } catch (e) {
      fail("jsonld-parses", r, `invalid JSON-LD: ${e.message}`, "Build schema objects in lib/schema.ts and serialise with JSON.stringify.");
      continue;
    }
    const nodes = [];
    const visit = (n) => {
      if (Array.isArray(n)) return n.forEach(visit);
      if (n && typeof n === "object") {
        nodes.push(n);
        Object.values(n).forEach(visit);
      }
    };
    visit(data);
    for (const n of nodes) {
      if (!n.telephone || typeof n.name !== "string") continue;
      const d = digitsOf(n.telephone);
      if (/elor/i.test(n.name) && d !== ELOR_PHONE) fail("schema-phone-owner", r, `${n["@type"]} "${n.name}" has telephone ${n.telephone}`, "Elor entities use site.phone.");
      if (/celestial/i.test(n.name) && d !== CELESTIAL_PHONE) fail("schema-phone-owner", r, `${n["@type"]} "${n.name}" has telephone ${n.telephone}`, "Celestial entities use site.celestialPhone.");
    }
  }

  const desc = /<meta name="description" content="([^"]*)"/.exec(raw);
  if (!desc) fail("meta-description", r, "missing meta description", "Export `metadata.description` from the page.");
  else if (decode(desc[1]).length > META_DESC_MAX) fail("meta-description", r, `meta description is ${decode(desc[1]).length} chars (max ${META_DESC_MAX})`, "Trim the page's `description` to 150-160 characters.");
  const title = /<title>([^<]*)<\/title>/.exec(raw);
  if (title && decode(title[1]).length > TITLE_MAX) fail("title-length", r, `title is ${decode(title[1]).length} chars (max ${TITLE_MAX}): "${decode(title[1])}"`, "Shorten META_TITLE; the ' | Elor Lighting' suffix is added by the layout.");

  const body = raw.replace(/<script\b[\s\S]*?<\/script>/gi, "");
  const levels = [...body.matchAll(/<h([1-6])\b/gi)].map((x) => Number(x[1]));
  const h1s = levels.filter((l) => l === 1).length;
  if (h1s !== 1) fail("one-h1", r, `${h1s} h1 elements`, "Each page has exactly one h1.");
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      fail("heading-order", r, `h${levels[i - 1]} followed by h${levels[i]}`, "Do not skip heading levels. Pass headingLevel to GuideCard/PieceCard if needed.");
      break;
    }
  }

  for (const h of raw.matchAll(/href="(\/[^"#?]*)/g)) {
    const p = h[1].replace(/\/$/, "") || "/";
    if (p.startsWith("/_next/")) continue;
    const key = p === "/" ? "index" : p.slice(1);
    if (routes.has(key) || redirectSources.has(key) || existsSync(join(PUBLIC, p)) || p === "/consultation") continue;
    fail("internal-link-resolves", r, `link to ${p} has no built page`, "Link only to routes that exist. Guide slugs come from lib/guides.ts.");
  }
}

const sitemap = readFileSync(join(OUT, "sitemap.xml.body"), "utf8");
const today = new Date().toISOString().slice(0, 10);
for (const u of sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>([^<]+)<\/lastmod>)?/g)) {
  const path = new URL(u[1]).pathname;
  const key = path === "/" ? "index" : path.slice(1);
  if (!routes.has(key) && path !== "/consultation") fail("sitemap-url-builds", "sitemap.xml", `${path} is in the sitemap but has no built page`, "Derive sitemap routes from lib data.");
  if (u[2] && u[2].slice(0, 10) > today) fail("sitemap-lastmod-not-future", "sitemap.xml", `${path} lastmod ${u[2]} is in the future`, "Use the real content date.");
}

const byRule = {};
for (const x of failures) (byRule[x.rule] ??= []).push(x);
for (const [rule, xs] of Object.entries(byRule)) {
  console.log(`\n✗ ${rule} (${xs.length})  fix: ${xs[0].fix}`);
  for (const x of xs.slice(0, 8)) console.log(`   ${x.where}: ${x.msg}`);
  if (xs.length > 8) console.log(`   ... ${xs.length - 8} more`);
}
console.log(`\nverify-site: ${files.length} artifacts, ${failures.length} failures`);
process.exit(failures.length ? 1 : 0);
