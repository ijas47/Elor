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
      "Ready fittings from Celestial Lights, our sister store, on the showroom floor to see and take home, at wholesale best rates",
      "Design services are free*, at the Kannur store, at your site, or over video",
      "We install custom lights and give installation support for everything else, with up to 5-year warranty",
    ],
    faqs: [
      { q: "Do you only serve Kannur, or the wider district?", a: "The Kannur store serves the whole district and nearby towns for consultation and installation support. We install custom lights and give installation support for everything else. We deliver pan-India from the Kannur and Kozhikode stores, and by phone or online order. The Kochi store is opening soon." },
      { q: "Can I just walk in, or do I need an appointment?", a: "Walk-ins are welcome during store hours. Booking a consultation ahead means we can prepare mood boards and a cost range before you arrive." },
      { q: "Is everything in the Kannur store made to order?", a: "No. Ready fittings from Celestial Lights, our sister store, are on the floor to see and buy on the spot, at wholesale best rates, alongside taking custom briefs for anything you can't find on the floor." },
      { q: "How long does a custom piece take from the Kannur store?", a: "Most custom pieces are designed, fabricated and installed within 3 to 6 weeks of your consultation." },
    ],
  },
  Kochi: {
    city: "Kochi",
    metaTitle: "Kochi Lighting Store, Opening Soon",
    metaDescription:
      "Elor's Kochi lighting store in Kadavanthra is opening soon. Until then, visit Celestial Lights in Kannur or Kozhikode, or book a consultation.",
    heroHeadline: "The Kochi Lighting Store Is Opening Soon",
    heroLede:
      "The Elor lighting store and experience centre in Kadavanthra, Kochi, is opening soon. It is not open for visits yet, and there is no opening date to share. To see lights in person today, go to the Celestial Lights stores in Kannur or Kozhikode, or book a consultation.",
    heroImage: "/work/w4-lounge.jpg",
    intro:
      "Kochi is a city of apartments, villas, hotels and offices. While the store gets ready, we still design and make lighting for Kochi projects, with the first session at your site or on video. Ready fittings are at Celestial Lights, our sister store, at wholesale best rates.",
    whyUs: [
      "Custom chandeliers made from a photo, render or sketch, in crystal, glass, metal or acrylic",
      "Design services are free*, at your site or over video",
      "We install custom lights and give installation support for everything else",
      "Project pricing and phased delivery for hotels, retail and office fit-outs, as well as homes",
    ],
    faqs: [
      { q: "Is the Kochi store open?", a: "Not yet. The Kochi store is opening soon, and there is no opening date to share. Until then, the Celestial Lights stores in Kannur and Kozhikode are open, or you can book a consultation at your site or on video." },
      { q: "Where can I see lights in person now?", a: "At the Celestial Lights stores in Kannur and Kozhikode. The Kannur store is at Philips Building, Kannur, Kerala 670005. Both are open Monday to Saturday, 9:30 AM to 8:30 PM." },
      { q: "Do you work on commercial projects in Kochi, or only homes?", a: "Both. We handle homes in Kochi as well as hotels, restaurants, retail and office fit-outs, with project pricing and phased delivery for builders and architects." },
      { q: "How long does a custom piece take for a Kochi project?", a: "Most custom pieces are designed, made and installed within 3 to 6 weeks of your consultation." },
    ],
  },
  Kozhikode: {
    city: "Kozhikode",
    metaTitle: "Celestial Lights Calicut",
    metaDescription:
      "Celestial Lights Kozhikode (Calicut): chandelier store and experience centre. Custom design and fabrication plus the ready collection, installed by our team.",
    heroHeadline: "Custom Chandeliers & Lighting Design in Kozhikode",
    heroLede:
      "A Celestial Lights store and experience centre in Calicut. Lighting plans for architects and owners who are building, the ready range on the floor, and custom chandeliers made in our factory. Comparing prices before you buy? Celestial Lights, our sister store, works at wholesale best rates.",
    heroImage: "/collections/staircase-cascade.jpg",
    intro:
      "Kozhikode is a historic Malabar port city where old-town character sits right next to new construction, and lighting has to bridge both. Whether it's a heritage-style home or a new-build café, we design fixtures that fit the room they're actually going into.",
    whyUs: [
      "Custom chandeliers built from a photo, render or sketch, fabricated in crystal, glass, metal or acrylic",
      "Ready fittings from Celestial Lights, our sister store, on the showroom floor to see and take home, at wholesale best rates",
      "Design services are free*, at the Kozhikode store, at your site, or over video",
      "We install custom lights and give installation support for everything else, with up to 5-year warranty",
    ],
    faqs: [
      { q: "Do you only serve Kozhikode city, or the wider Malabar area?", a: "The Kozhikode store serves the city and surrounding Malabar towns for consultation and installation support. We install custom lights and give installation support for everything else. We deliver pan-India from the Kannur and Kozhikode stores, and by phone or online order. The Kochi store is opening soon." },
      { q: "Can I just walk in, or do I need an appointment?", a: "Walk-ins are welcome during store hours. Booking a consultation ahead means we can prepare mood boards and a cost range before you arrive." },
      { q: "Is everything in the Kozhikode store made to order?", a: "No. Ready fittings from Celestial Lights, our sister store, are on the floor to see and buy on the spot, at wholesale best rates, alongside taking custom briefs for anything you can't find on the floor." },
      { q: "How long does a custom piece take from the Kozhikode store?", a: "Most custom pieces are designed, fabricated and installed within 3 to 6 weeks of your consultation." },
    ],
  },
};
