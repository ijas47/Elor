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
  tagline: "Lighting design, manufacture & installation",
  domain: "https://elorlighting.in",
  description:
    "Elor Lighting is a lighting design practice with its own workshop. We plan where every light falls, manufacture the custom pieces, and install the whole scheme ourselves, for architects, developers and homeowners. Three Celestial Lights experience stores in Kerala, with pan-India delivery and installation.",
  email: "hello@elorlighting.in",
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  hours: "Mon-Sat · 9:30 AM to 8:30 PM IST",

  // ── SHOP HANDOFF (swap when Shopify is live) ──────────────────────────────
  // e.g. "https://celestiallights.store" or the myshopify domain.
  shopUrl:
    "https://wa.me/919000000000?text=Hi%20Elor%2C%20I%27d%20like%20to%20browse%20the%20Celestial%20Lights%20collection.",
  shopLabel: "Celestial Lights",
  shopLive: false, // set true once the Shopify store is published

  whatsapp:
    "https://wa.me/919000000000?text=Hi%20Elor%2C%20I%27m%20interested%20in%20lighting%20for%20my%20space.",

  social: {
    instagram: "https://instagram.com/elorlighting",
    facebook: "https://facebook.com/elorlighting",
  },
} as const;

export const stores = [
  {
    city: "Kannur",
    brand: "Celestial Lights",
    address: "Fort Road, Kannur, Kerala 670001",
    hours: "Mon-Sat · 9:30 AM to 8:30 PM",
    phone: "+91 90000 00001",
    phoneHref: "tel:+919000000001",
    maps: "https://maps.google.com/?q=Fort+Road+Kannur+Kerala",
  },
  {
    city: "Kochi",
    brand: "Celestial Lights",
    address: "MG Road, Ernakulam, Kochi, Kerala 682016",
    hours: "Mon-Sat · 9:30 AM to 8:30 PM",
    phone: "+91 90000 00002",
    phoneHref: "tel:+919000000002",
    maps: "https://maps.google.com/?q=MG+Road+Ernakulam+Kochi+Kerala",
  },
  {
    city: "Kozhikode",
    brand: "Celestial Lights",
    address: "Mavoor Road, Kozhikode, Kerala 673004",
    hours: "Mon-Sat · 9:30 AM to 8:30 PM",
    phone: "+91 90000 00003",
    phoneHref: "tel:+919000000003",
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
