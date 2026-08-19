export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  city: "Kochi" | "Kozhikode" | "Kannur";
  initial: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "We gave them a bare shell in Kochi and a Pinterest board. The plan they returned felt designed by someone who had lived in our home for years. Evenings feel like a resort now.",
    name: "Anjali & Rahul Menon",
    role: "Home in Panampilly Nagar, Kochi",
    city: "Kochi",
    initial: "A",
  },
  {
    quote: "Our café's evening footfall rose noticeably after the relight. Guests keep photographing the walls. One team handled design, supply and installation. I never chased an electrician.",
    name: "Sameer K.",
    role: "Café owner, Kozhikode",
    city: "Kozhikode",
    initial: "S",
  },
  {
    quote: "As an architect I've worked with many lighting vendors. Elor is the rare one that reads drawings properly, improves them, and shows up on site when they say. On all my projects now.",
    name: "Ar. Divya Nair",
    role: "Principal Architect, Kannur",
    city: "Kannur",
    initial: "D",
  },
];
