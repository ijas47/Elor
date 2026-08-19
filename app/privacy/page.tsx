import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Elor Lighting collects, uses and protects the information you share with us through our website, consultation form and WhatsApp.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const UPDATED = "19 August 2026";

export default function Privacy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }])),
        }}
      />
      <section className="sec">
      <div className="wrap-tight">
        <span className="eyebrow">Legal</span>
        <h1 className="h-lg" style={{ marginTop: 18 }}>Privacy Policy</h1>
        <p className="lede" style={{ marginTop: 16 }}>Last updated {UPDATED}</p>

        <div className="legal-body">
          <p>
            This policy explains what information Elor Lighting ({site.domain}) collects when
            you use this website, why, and what happens to it. Elor Lighting is the lighting
            consulting and custom lighting arm of Celestial Lights, operating three experience
            stores in Kerala (Kannur, Kochi, Kozhikode) with pan-India delivery and installation.
          </p>

          <h2 className="h-md">What we collect</h2>
          <p>
            If you use the consultation form on <a href="/consultation">/consultation</a>, you
            may enter your name, phone number, city, the type of space, its approximate size,
            and any notes you add. If you send a reference image via WhatsApp or email from{" "}
            <a href="/customisation">/customisation</a> or elsewhere on the site, whatever you
            choose to include in that message (photos, floor plans, contact details) is what we
            receive.
          </p>
          <p>
            We do not run any e-commerce or payment flow on this site — the Celestial Lights shop
            is a separate storefront, and purchases there are governed by that store&rsquo;s own
            policies once it is live.
          </p>

          <h2 className="h-md">How that information moves</h2>
          <p>
            The consultation form does not submit to a server we run. When you press &ldquo;Request
            Consultation,&rdquo; the form composes a WhatsApp message from the details you entered
            and opens WhatsApp with it pre-filled — nothing is sent until you send that message
            yourself. From that point, the conversation and any files you share are handled inside
            WhatsApp, under Meta&rsquo;s own privacy policy and terms, not ours. The same applies if
            you choose the &ldquo;Email a Reference&rdquo; option: your message goes through your own
            email provider.
          </p>
          <p>
            We currently do not use analytics, advertising, or tracking cookies on this site. If
            we add analytics tooling in the future (for example, to understand which pages are
            useful), we will update this policy to describe what is collected and why before doing
            so.
          </p>

          <h2 className="h-md">Why we use it</h2>
          <p>
            Solely to respond to your enquiry — to understand your space, prepare a consultation
            or a custom-fixture quote, and follow up with you. We do not sell, rent, or share your
            information with third parties for their marketing purposes.
          </p>

          <h2 className="h-md">How long we keep it</h2>
          <p>
            Enquiry conversations are kept as long as reasonably needed to handle your project and
            any warranty period that follows, then deleted or anonymised. You can ask us to delete
            an enquiry at any time using the contact details below.
          </p>

          <h2 className="h-md">Your rights</h2>
          <p>
            Under India&rsquo;s Digital Personal Data Protection Act, 2023, you can ask us what
            information we hold about you, ask us to correct it, or ask us to delete it. To do any
            of this, email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a> and we will respond within a reasonable time.
          </p>

          <h2 className="h-md">Third-party links</h2>
          <p>
            This site links out to WhatsApp, Instagram, Facebook and Google Maps. Once you leave
            elorlighting.com for one of those platforms, their own privacy policy applies, not
            this one.
          </p>

          <h2 className="h-md">Changes to this policy</h2>
          <p>
            If this policy changes materially, we will update the date at the top of this page.
            Continuing to use the site after a change means you accept the updated policy.
          </p>

          <h2 className="h-md">Contact</h2>
          <p>
            Elor Lighting · <a href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </div>
      </section>
    </>
  );
}
