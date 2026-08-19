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
  tagline: "Lighting consulting & custom lighting, by Celestial Lights",
  domain: "https://elorlighting.com",
  description:
    "Elor Lighting is the lighting consulting and custom lighting arm of Celestial Lights. We work out where every light belongs, design and manufacture the pieces that have to be made for the space, and install the whole scheme, for architects, developers and homeowners. Three experience stores in Kerala, with pan-India delivery and installation.",
  // One number for the whole business, calls and WhatsApp alike, including
  // every store. Enquiries are meant to funnel to this single line so they can
  // be automated and handled in one place. Do not introduce a second number.
  email: "hello@elorlighting.com",
  phone: "+91 99956 19470",
  phoneHref: "tel:+919995619470",
  hours: "Mon-Sat · 9:30 AM to 8:30 PM IST",

  // ── SHOP HANDOFF (swap when Shopify is live) ──────────────────────────────
  // e.g. "https://celestiallights.store" or the myshopify domain.
  shopUrl:
    "https://wa.me/919995619470?text=Hi%20Elor%2C%20I%27d%20like%20to%20browse%20the%20Celestial%20Lights%20collection.",
  shopLabel: "Celestial Lights",
  shopLive: false, // set true once the Shopify store is published

  whatsapp:
    "https://wa.me/919995619470?text=Hi%20Elor%2C%20I%27m%20interested%20in%20lighting%20for%20my%20space.",

  social: {
    instagram: "https://instagram.com/elorlighting",
    facebook: "https://facebook.com/elorlighting",
  },
} as const;

/**
 * The three stores do not share one brand: Kannur and Kozhikode trade as
 * Celestial Lights, Kochi as Elor Lighting Pvt Ltd. Anything that describes
 * the estate has to stay brand-neutral ("three experience stores") rather than
 * calling all three Celestial Lights.
 *
 * Every store deliberately carries the one company number rather than its own
 * line, so all enquiries land in a single place that can be automated. This is
 * intentional duplication, not placeholder data left behind.
 */
export const stores = [
  {
    city: "Kannur",
    brand: "Celestial Lights",
    address:
      "Ground Floor, P O Chovva, Kannothumchal, Kannur, Elayavoor, Kerala 670006",
    hours: "Mon-Sat · 9:30 AM to 8:30 PM",
    phone: site.phone,
    phoneHref: site.phoneHref,
    maps: "https://maps.google.com/?q=Celestial+Lights+Chovva+Kannothumchal+Kannur+Kerala+670006",
  },
  {
    city: "Kochi",
    brand: "Elor Lighting",
    address: "63/499, Chalakuzhy, Gandhi Nagar, Kadavanthara, Kochi, Kerala",
    hours: "Mon-Sat · 9:30 AM to 8:30 PM",
    phone: site.phone,
    phoneHref: site.phoneHref,
    maps: "https://maps.google.com/?q=Elor+Lighting+Chalakuzhy+Gandhi+Nagar+Kadavanthara+Kochi",
  },
  {
    city: "Kozhikode",
    brand: "Celestial Lights",
    address: "Mavoor Road, Kozhikode, Kerala 673004", // placeholder, awaiting the real address
    hours: "Mon-Sat · 9:30 AM to 8:30 PM",
    phone: site.phone,
    phoneHref: site.phoneHref,
    maps: "https://maps.google.com/?q=Mavoor+Road+Kozhikode+Kerala",
  },
] as const;

export const nav = [
  { label: "Collections", href: "/collections" },
  { label: "Customisation", href: "/customisation" },
  { label: "Consultation", href: "/consultation" },
  { label: "Stores", href: "/stores" },
  { label: "Commercial", href: "/#commercial" },
] as const;
