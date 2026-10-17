#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const DIRS = ["app", "components", "lib"];
const files = DIRS.flatMap(function walk(d) {
  const abs = join(ROOT, d);
  return readdirSync(abs).flatMap((n) => {
    const p = join(d, n);
    return statSync(join(ROOT, p)).isDirectory() ? walk(p) : /\.(tsx?|mjs|js)$/.test(n) ? [p] : [];
  });
});

const rules = [
  {
    id: "phone-literal",
    test: (f) => f !== "lib/brands.ts",
    rx: /(?:\+?91[\s-]?)?(?:88487[\s-]?08529|99956[\s-]?19470|\d{5}[\s-]\d{5})|wa\.me\/\d|tel:\+?\d/g,
    fix: "Phone numbers, tel: and wa.me links come only from lib/brands.ts (brands.elor / brands.celestial with display(), telHref(), waHref()).",
  },
  {
    id: "guide-date-literal",
    test: (f) => f.startsWith("app/guides/"),
    rx: /const UPDATED = "|dateModified: "\d{4}-/g,
    fix: "Guide dates come from lib/guides.ts. Use `const { updated: UPDATED, modified: MODIFIED } = guideDates(PATH)`.",
  },
  {
    id: "guide-updated-field",
    test: (f) => f === "lib/guides.ts",
    rx: /^\s+updated: "/gm,
    fix: "Set only `modified` (ISO) on a guide entry. The visible Updated label is derived from it.",
  },
  {
    id: "em-dash",
    test: () => true,
    rx: /\u2014/g,
    fix: "No em dashes in source, comments included. Agents copy them into page text. Rewrite with a full stop or a comma.",
  },
];

const failures = [];
for (const f of files) {
  const src = readFileSync(join(ROOT, f), "utf8");
  for (const r of rules) {
    if (!r.test(f)) continue;
    for (const m of src.matchAll(r.rx)) {
      const line = src.slice(0, m.index).split("\n").length;
      const lineText = src.split("\n")[line - 1];
      if (/check-source-allow:/.test(lineText)) continue;
      failures.push({ r, where: `${f}:${line}`, hit: m[0] });
    }
  }
}
for (const x of failures) console.log(`✗ ${x.r.id} ${x.where} "${x.hit}"\n   fix: ${x.r.fix}`);
console.log(`check-source: ${files.length} files, ${failures.length} failures`);
process.exit(failures.length ? 1 : 0);
