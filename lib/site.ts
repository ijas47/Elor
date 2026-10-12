/**
 * Central site configuration.
 *
 * SHOP HANDOFF
 * ------------
 * The Celestial Lights Shopify store is not live yet. Every "Shop" / "Available
 * at Celestial Lights" action reads `shopUrl` below. Until Shopify is built it
 * points to a WhatsApp enquiry so no button is ever dead. When the store goes
 * live, change this ONE value and every handoff link across the site updates.
 */

export const site = {
  name: "Elor Lighting",
  brand: "Elor",
  tagline: "Lighting plans, supply, and custom chandeliers. By Celestial Lights.",
  domain: "https://www.elorlighting.com",
  description:
    "Elor Lighting is the lighting consultancy of Celestial Lights. We design lighting for sites anywhere in India and supply our own fittings. Custom-designed lights include free installation. Ready fittings and everything else come with installation support. The plan is written in DIALux. Custom chandeliers are made in our factory. Experience centres and the office are in Kerala: Celestial Lights in Kannur and Calicut, and a full Elor experience centre in Kochi. An online store for the range is being built.",
  /**
   * `description` above is the full entity description — it feeds Organization
   * schema and llms.txt, where length is fine. `metaDescription` is the SERP
   * version: Google truncates around 160 characters, so the long one lost its
   * location and its call to action before anyone read them.
   */
  metaDescription:
    "Lighting design anywhere in India, with our own fittings. Free installation on custom lights. Centres in Kannur, Calicut and Kochi.",

  // Elor uses ONE number for calls and WhatsApp: +91 88487 08529.
  // +91 99956 19470 is the Celestial Lights line and appears only on the
  // Celestial store pages (Kannur, Kozhikode) via `celestialPhone` below.
  email: "hello@elorlighting.com",
  phone: "+91 88487 08529",
  phoneHref: "tel:+918848708529",
  celestialPhone: "+91 99956 19470",
  celestialPhoneHref: "tel:+919995619470",
  whatsappNumber: "+91 88487 08529",
  hours: "Mon-Sat · 9:30 AM to 8:30 PM IST",

  // ── SHOP HANDOFF (swap when Shopify is live) ──────────────────────────────
  // e.g. "https://celestiallights.store" or the myshopify domain.
  shopUrl:
    "https://wa.me/918848708529?text=Hi%20Elor%2C%20I%27d%20like%20to%20browse%20the%20Celestial%20Lights%20collection.",
  shopLabel: "Celestial Lights",
  shopLive: false, // set true once the Shopify store is published
  // While the store is being built, do not label the button "Shop".
  shopCta: "See the range",

  whatsapp:
    "https://wa.me/918848708529?text=Hi%20Elor%2C%20I%27m%20interested%20in%20lighting%20for%20my%20space.",

  social: {
    instagram: "https://instagram.com/elorlighting",
    facebook: "https://facebook.com/elorlighting",
  },

  // Verification key for IndexNow (instant-index protocol used by Bing/Yandex).
  // Matching file lives at public/<key>.txt. Submitting URLs on publish is a
  // separate follow-up; this just makes the site verifiable.
  indexNowKey: "47d1e184a9472a8ef2421ef36e117c5f",

  // GA4 web stream for www.elorlighting.com.
  gaMeasurementId: "G-QXWSL80NYJ",
} as const;

/**
 * Celestial has two stores, Kannur and Calicut (Kozhikode), and an experience
 * centre at each. Kochi is Elor's full experience centre, not a third Celestial
 * store. Do not call all three "Celestial stores".
 *
 * Phones: the Elor (Kochi) centre carries the Elor number; the two Celestial
 * stores carry the Celestial line. Address parts are stored separately so the
 * PostalAddress schema gets a clean streetAddress plus locality/region/PIN;
 * `address` is the display string built from them.
 *
 * `geo` is locality-level (OpenStreetMap Nominatim geocoding of the address
 * text), not a GPS-surveyed exact point — fine for LocalBusiness schema, but
 * replace with the real coordinates if you ever pin the exact building.
 * Kozhikode's is doubly approximate since its address is itself a placeholder.
 */
export const stores = [
  {
    city: "Kannur",
    brand: "Celestial Lights",
    kind: "Store and experience centre",
    street:
      "Ground Floor, P O Chovva, Kannothumchal, Elayavoor",
    locality: "Kannur",
    region: "Kerala",
    postalCode: "670006",
    address:
      "Ground Floor, P O Chovva, Kannothumchal, Kannur, Elayavoor, Kerala 670006",
    hours: "Mon-Sat · 9:30 AM to 8:30 PM",
    phone: site.celestialPhone,
    phoneHref: site.celestialPhoneHref,
    maps: "https://maps.google.com/?q=Celestial+Lights+Chovva+Kannothumchal+Kannur+Kerala+670006",
    geo: { lat: 11.8739191, lng: 75.3881457 },
  },
  {
    city: "Kochi",
    brand: "Elor Lighting",
    kind: "Full experience centre",
    street:
      "63/499, Chalakuzhy, Gandhinagar Road, near the Fire and Rescue Station, Gandhi Nagar, Kadavanthra",
    locality: "Kochi",
    region: "Kerala",
    postalCode: "682020",
    address:
      "63/499, Chalakuzhy, Gandhinagar Road, near the Fire and Rescue Station, Gandhi Nagar, Kadavanthra, Kochi, Kerala 682020",
    hours: "Mon-Sat · 9:30 AM to 8:30 PM",
    phone: site.phone,
    phoneHref: site.phoneHref,
    maps: "https://maps.google.com/?q=Elor+Lighting+63/499+Chalakuzhy+Gandhinagar+Road+Kadavanthra+Kochi+682020",
    geo: { lat: 9.9889781, lng: 76.2951875 },
  },
  {
    city: "Kozhikode",
    brand: "Celestial Lights",
    kind: "Store and experience centre",
    // placeholder, awaiting the real address
    street:
      "Mavoor Road",
    locality: "Kozhikode",
    region: "Kerala",
    postalCode: "673004",
    address:
      "Mavoor Road, Kozhikode, Kerala 673004",
    hours: "Mon-Sat · 9:30 AM to 8:30 PM",
    phone: site.celestialPhone,
    phoneHref: site.celestialPhoneHref,
    maps: "https://maps.google.com/?q=Mavoor+Road+Kozhikode+Kerala",
    geo: { lat: 11.2579121, lng: 75.7987029 },
  },
] as const;

export const nav = [
  { label: "Collections", href: "/collections" },
  { label: "Customisation", href: "/customisation" },
  { label: "Consultation", href: "/consultation" },
  { label: "Stores", href: "/stores" },
  { label: "Guides", href: "/guides" },
  { label: "Commercial", href: "/#commercial" },
] as const;
