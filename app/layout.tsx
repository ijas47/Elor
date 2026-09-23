import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import "./globals.css";
import "./sections.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    // Titles are budgeted to ~60 characters, the width Google renders before
    // truncating. The template adds " | Elor Lighting" (16), so page titles
    // below are kept to ~44.
    default: "Elor Lighting | Custom Chandeliers & Lighting Design",
    template: "%s | Elor Lighting",
  },
  description: site.metaDescription,
  keywords: [
    "custom chandeliers Kerala",
    "chandelier manufacturer Kerala",
    "lighting consultation Kerala",
    "lighting shop Kochi",
    "lighting shop Kannur",
    "lighting shop Kozhikode",
    "Celestial Lights",
    "bespoke chandelier India",
    "facade lighting Kerala",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.domain,
    siteName: site.name,
    title: "Elor Lighting | Custom Chandeliers, Design & Installation",
    description: site.metaDescription,
    images: [{ url: "/lifestyle/hero-1.jpg", width: 1200, height: 630, alt: "Elor Lighting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elor Lighting",
    description: site.metaDescription,
    images: ["/lifestyle/hero-1.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/brand/favicon.svg" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.domain,
  logo: `${site.domain}/brand/logo-mark.svg`,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  areaServed: "IN",
  sameAs: [site.social.instagram, site.social.facebook],
  // Each store's own address lives in its LightingStore schema at
  // /stores/{city}. No Organization-level address here: which of the three is
  // the registered office is a business fact, not something to infer.
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    email: site.email,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "ml"],
  },
};

// No `potentialAction`/SearchAction here deliberately: the site has no
// on-site search, and a sitelinks-search-box schema pointing at a
// non-existent search endpoint would be invalid structured data.
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.domain,
  publisher: { "@type": "Organization", name: site.name, url: site.domain },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="grain">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gaMeasurementId}');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Nav />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
