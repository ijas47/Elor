/** The three cities where we have a physical store. */
export type StoreCity = "Kannur" | "Kochi" | "Kozhikode";

export interface StoreCityFAQ {
  q: string;
  a: string;
}

export interface StoreCityCopy {
  city: StoreCity;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroLede: string;
  heroImage: string;
  intro: string;
  whyUs: string[];
  faqs: StoreCityFAQ[];
}

export const storeCities: Record<StoreCity, StoreCityCopy> = {
  Kannur: {
    city: "Kannur",
    metaTitle: "Chandelier & Lighting Store in Kannur · Celestial Lights",
    metaDescription:
      "Custom chandelier design, fabrication and installation in Kannur, plus the Celestial Lights ready collection. Visit the Kannur store or book a consultation.",
    heroHeadline: "Custom Chandeliers & Lighting Design in Kannur",
    heroLede:
      "One of three Celestial Lights experience stores in Kerala, serving Kannur homes, offices and public spaces with bespoke fabrication, a ready collection, and full installation, backed by up to 5-year warranty.",
    heroImage: "/lifestyle/villa-night.jpg",
    intro:
      "Kannur is known as much for its handloom weaving heritage as its coastline, a town where considered, handmade craft is already part of daily life. That's the same standard we hold custom fixtures to: measured to your ceiling, built by hand, and installed by the same team that designed it.",
    whyUs: [
      "Custom chandeliers built from a photo, render or sketch, fabricated in crystal, glass, metal or acrylic",
      "The full Celestial Lights ready collection on the showroom floor to see and take home",
      "Free design consultation, at the Kannur store, at your site, or over video",
      "One team for design, fabrication and installation, with up to 5-year warranty",
    ],
    faqs: [
      { q: "Do you only serve Kannur, or the wider district?", a: "The Kannur store serves the whole district and nearby towns for consultation and installation, and we deliver pan-India from all three stores for anything ordered online or by phone." },
      { q: "Can I just walk in, or do I need an appointment?", a: "Walk-ins are welcome during store hours. Booking a consultation ahead means we can prepare mood boards and a cost range before you arrive." },
      { q: "Is everything in the Kannur store made to order?", a: "No. The store carries the full Celestial Lights ready collection to see and buy on the spot, alongside taking custom briefs for anything you can't find on the floor." },
      { q: "How long does a custom piece take from the Kannur store?", a: "Most custom pieces are designed, fabricated and installed within 3 to 6 weeks of your consultation." },
    ],
  },
  Kochi: {
    city: "Kochi",
    metaTitle: "Chandelier & Lighting Store in Kochi · Elor Lighting",
    metaDescription:
      "Custom chandelier design, fabrication and installation in Kochi, plus the Celestial Lights ready collection. Visit the Kadavanthara store or book a consultation.",
    heroHeadline: "Custom Chandeliers & Lighting Design in Kochi",
    heroLede:
      "Elor Lighting's Kochi store serves the city's homes, hospitality projects and commercial spaces with bespoke fabrication, a ready collection, and full installation, backed by up to 5-year warranty.",
    heroImage: "/work/w4-lounge.jpg",
    intro:
      "Kochi is Kerala's commercial hub, a city of apartments, villas, hotels and offices where lighting has to work as hard as it looks good. We design for that: schemes that hold up under daily use in a working city, not just for a photograph.",
    whyUs: [
      "Custom chandeliers built from a photo, render or sketch, fabricated in crystal, glass, metal or acrylic",
      "The full Celestial Lights ready collection on the showroom floor to see and take home",
      "Free design consultation, at the Kochi store, at your site, or over video",
      "Project pricing and phased delivery for hotels, retail and office fit-outs, alongside home lighting",
    ],
    faqs: [
      { q: "Do you work on commercial and hospitality projects in Kochi, or only homes?", a: "Both. The Kochi store handles residential projects alongside hotels, restaurants, retail and office fit-outs, with project pricing and phased delivery for builders and architects." },
      { q: "Can I just walk in, or do I need an appointment?", a: "Walk-ins are welcome during store hours. Booking a consultation ahead means we can prepare mood boards and a cost range before you arrive." },
      { q: "Is everything in the Kochi store made to order?", a: "No. The store carries the full Celestial Lights ready collection to see and buy on the spot, alongside taking custom briefs for anything you can't find on the floor." },
      { q: "How long does a custom piece take from the Kochi store?", a: "Most custom pieces are designed, fabricated and installed within 3 to 6 weeks of your consultation." },
    ],
  },
  Kozhikode: {
    city: "Kozhikode",
    metaTitle: "Chandelier & Lighting Store in Kozhikode · Celestial Lights",
    metaDescription:
      "Custom chandelier design, fabrication and installation in Kozhikode, plus the Celestial Lights ready collection. Visit the Kozhikode store or book a consultation.",
    heroHeadline: "Custom Chandeliers & Lighting Design in Kozhikode",
    heroLede:
      "One of three Celestial Lights experience stores in Kerala, serving Kozhikode homes, restaurants and retail spaces with bespoke fabrication, a ready collection, and full installation, backed by up to 5-year warranty.",
    heroImage: "/work/w1-cascade.jpg",
    intro:
      "Kozhikode is a historic Malabar port city where old-town character sits right next to new construction, and lighting has to bridge both. Whether it's a heritage-style home or a new-build café, we design fixtures that fit the room they're actually going into.",
    whyUs: [
      "Custom chandeliers built from a photo, render or sketch, fabricated in crystal, glass, metal or acrylic",
      "The full Celestial Lights ready collection on the showroom floor to see and take home",
      "Free design consultation, at the Kozhikode store, at your site, or over video",
      "One team for design, fabrication and installation, with up to 5-year warranty",
    ],
    faqs: [
      { q: "Do you only serve Kozhikode city, or the wider Malabar area?", a: "The Kozhikode store serves the city and surrounding Malabar towns for consultation and installation, and we deliver pan-India from all three stores for anything ordered online or by phone." },
      { q: "Can I just walk in, or do I need an appointment?", a: "Walk-ins are welcome during store hours. Booking a consultation ahead means we can prepare mood boards and a cost range before you arrive." },
      { q: "Is everything in the Kozhikode store made to order?", a: "No. The store carries the full Celestial Lights ready collection to see and buy on the spot, alongside taking custom briefs for anything you can't find on the floor." },
      { q: "How long does a custom piece take from the Kozhikode store?", a: "Most custom pieces are designed, fabricated and installed within 3 to 6 weeks of your consultation." },
    ],
  },
};
