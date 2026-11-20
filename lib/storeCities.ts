/** Kannur and Kozhikode stores are open. The Kochi store is opening soon. */
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
    metaTitle: "Celestial Lights Kannur",
    metaDescription:
      "Celestial Lights Kannur: chandelier store and experience centre. Custom design and fabrication plus the ready collection, installed by us. Walk in or book.",
    heroHeadline: "Custom Chandeliers & Lighting Design in Kannur",
    heroLede:
      "A Celestial Lights store and experience centre in Kannur. Lighting plans for architects and owners who are building, the ready range on the floor, and custom chandeliers made in our factory.",
    heroImage: "/lifestyle/hero-4.jpg",
    intro:
      "The ready fittings are on the floor. A custom piece starts from a photo, a render, or a sketch, and we measure the ceiling before we build. Most custom pieces take 3 to 6 weeks after the brief is agreed.",
    whyUs: [
      "Custom chandeliers built from a photo, render or sketch, fabricated in crystal, glass, metal or acrylic",
      "The full Celestial Lights ready collection on the showroom floor to see and take home",
      "Free design consultation, at the Kannur store, at your site, or over video",
      "We install custom lights and give installation support for everything else, with up to 5-year warranty",
    ],
    faqs: [
      { q: "Do you only serve Kannur, or the wider district?", a: "The Kannur store serves the whole district and nearby towns for consultation and installation support. We install custom lights and give installation support for everything else. We deliver pan-India from the Kannur and Kozhikode stores, and by phone or online order. The Kochi store is opening soon." },
      { q: "Can I just walk in, or do I need an appointment?", a: "Walk-ins are welcome during store hours. Booking a consultation ahead means we can prepare mood boards and a cost range before you arrive." },
      { q: "Is everything in the Kannur store made to order?", a: "No. The store carries the full Celestial Lights ready collection to see and buy on the spot, alongside taking custom briefs for anything you can't find on the floor." },
      { q: "How long does a custom piece take from the Kannur store?", a: "Most custom pieces are designed, fabricated and installed within 3 to 6 weeks of your consultation." },
    ],
  },
  Kochi: {
    city: "Kochi",
    metaTitle: "Kochi Experience Centre, Opening Soon",
    metaDescription:
      "The Elor experience centre in Kochi is opening soon. Book a design consultation on video or at your site, or visit the open stores in Kannur and Calicut.",
    heroHeadline: "The Kochi Experience Centre Is Opening Soon",
    heroLede:
      "The Elor experience centre in Kochi is opening soon. Until it opens, we still design and make lighting for Kochi projects. Book a consultation on video, at your site, or visit the Celestial Lights stores in Kannur and Calicut.",
    heroImage: "/work/w4-lounge.jpg",
    intro:
      "Kochi is Kerala's commercial hub, a city of apartments, villas, hotels and offices where lighting has to work as hard as it looks good. We design for that: schemes that hold up under daily use in a working city. The Kadavanthara location is the upcoming Elor centre, not a store you can walk into yet.",
    whyUs: [
      "Custom chandeliers built from a photo, render or sketch, fabricated in crystal, glass, metal or acrylic",
      "Design services are free*, at your site, over video, or at the Kannur or Calicut store",
      "We install custom lights and give installation support for everything else",
      "Project pricing and phased delivery for hotels, retail and office fit-outs, alongside home lighting",
    ],
    faqs: [
      { q: "Do you work on commercial and hospitality projects in Kochi, or only homes?", a: "Both. We handle residential projects in Kochi alongside hotels, restaurants, retail and office fit-outs, with project pricing and phased delivery for builders and architects. The Kochi store itself is opening soon." },
      { q: "Can I visit the Kochi store?", a: "Not yet. The Kochi store is opening soon. Until then, visit the Celestial Lights stores in Kannur and Calicut, or book a consultation at your site or on video." },
      { q: "Can I see the ready collection in Kochi?", a: "Not yet. The Kochi store is not open. The Celestial Lights ready collection can be seen at the Kannur and Calicut stores. Custom pieces are designed from a photo, a render, or a sketch, and made in our factory." },
      { q: "How long does a custom piece take for a Kochi project?", a: "Most custom pieces are designed, fabricated and installed within 3 to 6 weeks of your consultation." },
    ],
  },
  Kozhikode: {
    city: "Kozhikode",
    metaTitle: "Celestial Lights Calicut",
    metaDescription:
      "Celestial Lights Kozhikode (Calicut): chandelier store and experience centre. Custom design and fabrication plus the ready collection, installed by our team.",
    heroHeadline: "Custom Chandeliers & Lighting Design in Kozhikode",
    heroLede:
      "A Celestial Lights store and experience centre in Calicut. Lighting plans for architects and owners who are building, the ready range on the floor, and custom chandeliers made in our factory.",
    heroImage: "/collections/staircase-cascade.jpg",
    intro:
      "Kozhikode is a historic Malabar port city where old-town character sits right next to new construction, and lighting has to bridge both. Whether it's a heritage-style home or a new-build café, we design fixtures that fit the room they're actually going into.",
    whyUs: [
      "Custom chandeliers built from a photo, render or sketch, fabricated in crystal, glass, metal or acrylic",
      "The full Celestial Lights ready collection on the showroom floor to see and take home",
      "Free design consultation, at the Kozhikode store, at your site, or over video",
      "We install custom lights and give installation support for everything else, with up to 5-year warranty",
    ],
    faqs: [
      { q: "Do you only serve Kozhikode city, or the wider Malabar area?", a: "The Kozhikode store serves the city and surrounding Malabar towns for consultation and installation support. We install custom lights and give installation support for everything else. We deliver pan-India from the Kannur and Kozhikode stores, and by phone or online order. The Kochi store is opening soon." },
      { q: "Can I just walk in, or do I need an appointment?", a: "Walk-ins are welcome during store hours. Booking a consultation ahead means we can prepare mood boards and a cost range before you arrive." },
      { q: "Is everything in the Kozhikode store made to order?", a: "No. The store carries the full Celestial Lights ready collection to see and buy on the spot, alongside taking custom briefs for anything you can't find on the floor." },
      { q: "How long does a custom piece take from the Kozhikode store?", a: "Most custom pieces are designed, fabricated and installed within 3 to 6 weeks of your consultation." },
    ],
  },
};
