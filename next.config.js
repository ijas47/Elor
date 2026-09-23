/**
 * script-src/style-src keep 'unsafe-inline': the app renders many inline
 * `style={{}}` props (real `style` attributes in the DOM) and the App Router
 * injects an inline RSC-hydration script, so a nonce-free strict policy would
 * break rendering. A nonce-based CSP (via middleware) would remove the need
 * for 'unsafe-inline' but is a separate, bigger change.
 */
// Next's dev server evaluates its own refresh runtime. Production does not,
// so unsafe-eval stays off the live site. Without it, `next dev` never
// hydrates and the consultation form falls through to a plain navigation.
const googleTag = "https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com";
const scriptSrc =
  process.env.NODE_ENV === "development"
    ? `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${googleTag}`
    : `script-src 'self' 'unsafe-inline' ${googleTag}`;

const csp = [
  "default-src 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self'",
  `connect-src 'self' ${googleTag}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // The three city guides moved to /stores/{city} when store pages became the
  // canonical local entity. Permanent so link equity and any existing index
  // entries follow.
  async redirects() {
    return ["kannur", "kochi", "kozhikode"].map((city) => ({
      source: `/guides/custom-chandeliers-${city}`,
      destination: `/stores/${city}`,
      permanent: true,
    }));
  },
};

module.exports = nextConfig;
