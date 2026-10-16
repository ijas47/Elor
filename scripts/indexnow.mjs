#!/usr/bin/env node
// Submit every URL in the live sitemap to IndexNow (Bing, Yandex and the other
// participating engines share submissions through api.indexnow.org).
//
// Usage:
//   node scripts/indexnow.mjs            submit all sitemap URLs
//   node scripts/indexnow.mjs --dry-run  list what would be sent
//
// The key file must be live at https://www.elorlighting.com/<key>.txt before
// a submission will be accepted. It ships from public/.

const HOST = "www.elorlighting.com";
const SITE = `https://${HOST}`;
const KEY = "47d1e184a9472a8ef2421ef36e117c5f";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const dryRun = process.argv.includes("--dry-run");

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].trim())
    .filter((u) => u.startsWith(SITE));
  return [...new Set(urls)];
}

async function checkKey() {
  const res = await fetch(`${SITE}/${KEY}.txt`);
  const body = (await res.text()).trim();
  if (!res.ok || body !== KEY) {
    throw new Error(`key file not live at ${SITE}/${KEY}.txt (status ${res.status})`);
  }
}

const urlList = await sitemapUrls();
console.log(`${urlList.length} URLs from ${SITE}/sitemap.xml`);

if (dryRun) {
  urlList.forEach((u) => console.log(u));
  process.exit(0);
}

await checkKey();
const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
// 200 = accepted, 202 = accepted while the key is being verified.
console.log(`IndexNow responded ${res.status} ${res.statusText}`);
const text = await res.text();
if (text) console.log(text);
if (res.status !== 200 && res.status !== 202) process.exit(1);
