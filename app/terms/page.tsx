import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Elor Lighting website, elorlighting.com.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const UPDATED = "19 August 2026";

export default function Terms() {
  return (
    <section className="sec">
      <div className="wrap-tight">
        <span className="eyebrow">Legal</span>
        <h1 className="h-lg" style={{ marginTop: 18 }}>Terms of Service</h1>
        <p className="lede" style={{ marginTop: 16 }}>Last updated {UPDATED}</p>

        <div className="legal-body">
          <p>
            These terms govern your use of {site.domain}, operated by Elor Lighting, the
            lighting consulting and custom lighting arm of Celestial Lights. By using this site
            you agree to them.
          </p>

          <h2 className="h-md">What this site is</h2>
          <p>
            This is an informational and enquiry site describing Elor&rsquo;s lighting
            consultation, custom fabrication and installation services, and Celestial Lights&rsquo;
            experience stores in Kannur, Kochi and Kozhikode. It does not process payments or sell
            products directly — enquiries made through the consultation form or a WhatsApp/email
            reference are the start of a conversation, not a binding order. Any quote, price or
            timeline becomes binding only once confirmed separately in writing between you and
            Elor.
          </p>

          <h2 className="h-md">Using the site</h2>
          <p>
            You may browse and use this site for personal or professional evaluation of Elor&rsquo;s
            services. You may not copy, redistribute or use the site&rsquo;s content, photography,
            or the &ldquo;Elor Lighting&rdquo; and &ldquo;Celestial Lights&rdquo; names and marks for
            commercial purposes without our written permission.
          </p>

          <h2 className="h-md">Accuracy</h2>
          <p>
            We describe our process, pieces and stores in good faith and keep this site current,
            but fixture availability, lead times, and store hours can change. Treat anything on
            this site as indicative until confirmed directly with us.
          </p>

          <h2 className="h-md">Third-party platforms</h2>
          <p>
            This site links to WhatsApp, Instagram, Facebook and Google Maps for your convenience.
            We don&rsquo;t control those platforms and aren&rsquo;t responsible for their content,
            availability, or how they handle your data once you leave elorlighting.com — see our{" "}
            <a href="/privacy">Privacy Policy</a> for more on that.
          </p>

          <h2 className="h-md">Liability</h2>
          <p>
            The site and its content are provided as-is. To the extent permitted by law, Elor
            Lighting is not liable for indirect or consequential loss arising from your use of the
            site itself; this does not affect the separate warranty terms that apply to any
            fixture or installation you actually commission from us.
          </p>

          <h2 className="h-md">Changes</h2>
          <p>
            We may update these terms as the business changes. The date at the top of this page
            reflects the latest version; continued use of the site after an update means you
            accept it.
          </p>

          <h2 className="h-md">Governing law</h2>
          <p>These terms are governed by the laws of India, with courts in Kerala having jurisdiction.</p>

          <h2 className="h-md">Contact</h2>
          <p>
            Elor Lighting · <a href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
