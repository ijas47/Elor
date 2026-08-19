import type { Metadata } from "next";
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
    default:
      "Elor Lighting | Custom Chandeliers, Lighting Design & Installation | Kerala & Pan-India",
    template: "%s | Elor Lighting",
  },
  description: site.description,
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
    description: site.description,
    images: [{ url: "/lifestyle/hero-1.jpg", width: 1200, height: 630, alt: "Elor Lighting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elor Lighting",
    description: site.description,
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
  areaServed: "IN",
  sameAs: [site.social.instagram, site.social.facebook],
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
