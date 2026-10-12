/**
 * Long-form bodies for the room and material guides added 5 October 2026.
 * Older guides keep their own page files. A slug lives here only when
 * app/guides/[slug]/page.tsx should render it.
 *
 * Shelf fittings link out to Celestial Lights. A piece made for the room
 * stays on Elor, at /customisation.
 */

export interface GuideRun {
  text: string;
  href?: string;
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideArticle {
  slug: string;
  metaTitle: string;
  description: string;
  crumb: string;
  eyebrow: string;
  h1: string;
  h1Em: string;
  lede: GuideRun[];
  image: string;
  imageAlt: string;
  sections: { h: string; paragraphs: GuideRun[][] }[];
  shelf: string;
  custom: string;
  faqs: GuideFaq[];
  /** Optional numbered steps. Rendered as a list and emitted as HowTo schema. */
  howTo?: { name: string; steps: { h: string; p: string }[] };
  /** ISO dates for Article schema. Default to the 5 October set. */
  published?: string;
  modified?: string;
}

const UPDATED = "5 October 2026";

export const guideArticles: GuideArticle[] = [
  {
    slug: "chandelier-for-living-room",
    metaTitle: "Chandelier for a Living Room",
    description:
      "Size a chandelier for a living room from the seating, the ceiling, and the fan clearance. Shelf pieces are at Celestial Lights. Elor makes the custom piece.",
    crumb: "Chandelier for a Living Room",
    eyebrow: `Buying guide · Updated ${UPDATED}`,
    h1: "The seating decides",
    h1Em: "the chandelier.",
    lede: [
      {
        text: "A chandelier for a living room is sized to the sofas, not to the length of the hall. Ceiling height, a fan if the room has one, and the slab above the gypsum decide the rest.",
      },
    ],
    image: "/spaces/living.jpg",
    imageAlt:
      "A living room with a chandelier, cove light in the tray ceiling, and a lamp beside the sofa",
    sections: [
      {
        h: "Measure the seating, then the drop",
        paragraphs: [
          [
            {
              text: "The piece hangs over the part of the room where people sit. A diameter taken from the whole hall lands too large once the sofas are in. ",
            },
            { text: "The size calculator", href: "/guides/chandelier-size-calculator" },
            { text: " turns the room into a diameter and a drop. Use that before anyone orders a fitting from a photograph." },
          ],
          [
            {
              text: "The bottom of the piece stays clear of anyone walking past. In a room with a ceiling fan, the fan and the chandelier do not share a point. Clearances and the usual layouts are in the ",
            },
            { text: "fan guide", href: "/guides/chandelier-with-ceiling-fan" },
            { text: "." },
          ],
        ],
      },
      {
        h: "The anchor goes in before the ceiling closes",
        paragraphs: [
          [
            {
              text: "Gypsum and POP do not carry a chandelier. The fixing goes into the slab, on a point marked while the ceiling is still open. What each ceiling can hold is the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: ". Crystal, glass, and acrylic behave differently in weight and in a humid room. That comparison is ",
            },
            { text: "crystal, glass, and acrylic", href: "/guides/crystal-vs-glass-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Made for the room, or planned first",
        paragraphs: [
          [
            { text: "When the stock sizes do not fit a living room, send a picture and the measurements and Elor makes the piece. That process, with the timeline and what it costs, is on " },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ". If the wiring and the ceiling are still open, start with the seating plan and the ceiling drawing: " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " and the plan is drawn before anything is bought. Comparing showrooms first? The " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask." },
          ],
        ],
      },
    ],
    shelf:
      "A living-room piece that already exists in the collection is a shelf fitting at Celestial Lights.",
    custom:
      "A double-height void, an off-centre beam, or a picture nobody stocks is a piece Elor designs and makes.",
    faqs: [
      {
        q: "What size chandelier works in a living room?",
        a: "Size it to the seating group and the ceiling height, not to the full length of the hall. The chandelier size calculator on this site turns those two measurements into a diameter and a drop.",
      },
      {
        q: "Can the living-room false ceiling hold it?",
        a: "The decorative ceiling does not carry the weight. The anchor goes into the slab before the gypsum or POP closes. The false-ceiling guide covers what each build-up can and cannot hold.",
      },
      {
        q: "Where do I see a ready living-room chandelier?",
        a: "Shelf fittings are at Celestial Lights. See the range, and we send what is in the collection. The online shop is still being built, so that link opens a conversation.",
      },
      {
        q: "When is the living-room light custom?",
        a: "When the ceiling, the reference, or the drop is not a stock size. Elor designs and makes that piece. Most custom work is ready in 3 to 6 weeks, with free installation. A ready fitting comes with installation support.",
      },
    ],
  },
  {
    slug: "ceiling-and-lighting-design",
    metaTitle: "Ceiling and Lighting Design",
    description:
      "Ceiling and lighting design puts the cove, the spots, and the chandelier on separate circuits. Elor draws it before the gypsum closes.",
    crumb: "Ceiling and Lighting Design",
    eyebrow: `Technical · Updated ${UPDATED}`,
    h1: "Design the ceiling",
    h1Em: "around the light.",
    lede: [
      {
        text: "Ceiling and lighting design is the order of the work, not a folder of photographs. The furniture is drawn first. Cove, spots, and the chandelier are three jobs, on three circuits, settled before the gypsum closes.",
      },
    ],
    image: "/spaces/living.jpg",
    imageAlt: "A tray ceiling with cove lighting, recessed spots, and a chandelier over the seating",
    sections: [
      {
        h: "Three jobs, three circuits",
        paragraphs: [
          [
            {
              text: "A cove washes the edge of the ceiling. Spots mark a task or a path. The chandelier or pendant is the object in the room. Put all three on one switch and the room has one scene, brighter or darker. The method is ",
            },
            { text: "how a lighting plan is built", href: "/guides/how-a-lighting-plan-is-built" },
            { text: "." },
          ],
          [
            {
              text: "Gypsum depth decides what can recess. A deep baffle needs room. A trimless fitting needs room. If the lamp is visible from the sofa, the fitting is too shallow. That is ",
            },
            { text: "why a downlight glares", href: "/guides/why-downlights-glare" },
            { text: "." },
          ],
        ],
      },
      {
        h: "The decorative piece is specified on top",
        paragraphs: [
          [
            {
              text: "The chandelier does not replace the layers. It is one line on the plan, with its own anchor in the slab. Weight, and why the fixing cannot wait, is the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: ". Colour of the lamps is agreed once for the room. The numbers are ",
            },
            { text: "Kelvin, CRI, and beam", href: "/guides/colour-of-light" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Made for the room, or planned first",
        paragraphs: [
          [
            { text: "When the stock sizes do not fit a ceiling, send a picture and the measurements and Elor makes the piece. That process, with the timeline and what it costs, is on " },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ". If the wiring and the ceiling are still open, start with the reflected ceiling plan: " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " and the plan is drawn before anything is bought. Comparing showrooms first? The " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask." },
          ],
        ],
      },
    ],
    shelf:
      "Downlights, cove profiles, and a pendant that already exists are shelf fittings at Celestial Lights.",
    custom:
      "A piece made for this ceiling, or a plan for the whole room, is Elor’s work.",
    faqs: [
      {
        q: "What is ceiling and lighting design?",
        a: "A marked ceiling that says where the cove, the spots, and the decorative piece go, which circuit each is on, and what the anchor is fixed to. It is drawn before the false ceiling closes.",
      },
      {
        q: "Should the chandelier be the only light?",
        a: "No. A single fitting in the middle leaves the walls dark and gives the room one level. Ambient, vertical, and task light stay in the plan. The chandelier sits on top of them.",
      },
      {
        q: "Who draws the ceiling?",
        a: "Elor writes the lighting plan, in DIALux where the room needs a calculation, and marks the anchor before the ceiling closes. You can start with a floor plan and a photo.",
      },
      {
        q: "Where do the fittings come from?",
        a: "Ready fittings are at Celestial Lights. Anything the ceiling still needs, and that the collection does not have, is designed and made by Elor, usually in 3 to 6 weeks. Free installation is on the custom piece. Ready fittings come with installation support.",
      },
    ],
  },
  {
    slug: "home-lighting-design",
    metaTitle: "Home Lighting Design",
    description:
      "Home lighting design is one plan for every room, before the ceilings close. House lighting design is the same job. Shelf fittings are at Celestial Lights.",
    crumb: "Home Lighting Design",
    eyebrow: `Technical · Updated ${UPDATED}`,
    h1: "The whole house,",
    h1Em: "one lighting plan.",
    lede: [
      {
        text: "Home lighting design is one drawing for every room, written while the ceilings can still change. A house lighting design is the same search and the same job.",
      },
    ],
    image: "/lifestyle/villa-night.jpg",
    imageAlt: "A house at night with cove light under the slabs, wall lights, and a lit path",
    sections: [
      {
        h: "Close the wet rooms first",
        paragraphs: [
          [
            {
              text: "Kitchens, baths, and the stair lose their open ceiling earliest. Those points are marked first. Living, dining, and bedrooms follow, on the same family of colour, so the house does not change temperature as you walk. The three numbers are ",
            },
            { text: "Kelvin, CRI, and beam", href: "/guides/colour-of-light" },
            { text: "." },
          ],
          [
            {
              text: "Outside is part of the plan. The path, the porch, and the facade are separate from the rooms, and on the coast the fittings have to live in salt air. That is the ",
            },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Each room keeps its own page",
        paragraphs: [
          [
            { text: "The living room", href: "/guides/chandelier-for-living-room" },
            { text: " sizes the chandelier. " },
            { text: "The ceiling", href: "/guides/ceiling-and-lighting-design" },
            { text: " splits cove, spots, and the decorative piece. " },
            { text: "The stair", href: "/guides/staircase-lighting-design" },
            { text: " lights the tread and the void separately. " },
            { text: "The bedroom", href: "/guides/bedroom-lighting-design" },
            { text: " keeps the lamp out of the eyes. " },
            { text: "The kitchen", href: "/guides/kitchen-lighting-design" },
            { text: " gives the worktop its own circuit. The order we draw them in is " },
            { text: "how a lighting plan is built", href: "/guides/how-a-lighting-plan-is-built" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Made for the room, or planned first",
        paragraphs: [
          [
            { text: "When the stock sizes do not fit the house, send a picture and the measurements and Elor makes the piece. That process, with the timeline and what it costs, is on " },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ". If the wiring and the ceiling are still open, start with the floor plans: " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " and the plan is drawn before anything is bought. Comparing showrooms first? The " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask. Verandas, sit-outs and the courtyard need a rated fitting. Which rating goes where is in the " },
            { text: "IP rating guide", href: "/guides/ip-rating-for-outdoor-lights" },
            { text: "." },
          ],
        ],
      },
    ],
    shelf:
      "Room by room, a fitting that already exists is a shelf piece at Celestial Lights.",
    custom:
      "The plan, and any light the house still needs, is designed and made by Elor.",
    faqs: [
      {
        q: "What is a home lighting design?",
        a: "A plan that places the light in every room, names the circuits, and marks the anchors before the false ceilings close. House lighting design means the same thing.",
      },
      {
        q: "Do I need a plan if I only want a chandelier?",
        a: "The chandelier still needs a point, a drop, and an anchor. The rest of the room needs its own layers, or the piece becomes the only light. Send the floor plan and a photo either way.",
      },
      {
        q: "Can this be done from outside Kerala?",
        a: "The plan and the quotation can be done from drawings and video. Installation is arranged from the Kannur, Kozhikode, or Kochi centre, depending on the house. Kannur and Kozhikode trade as Celestial Lights. Kochi is the Elor experience centre.",
      },
      {
        q: "What is made, and what is from the shelf?",
        a: "Shelf fittings are at Celestial Lights. Elor writes the plan and makes the custom pieces, usually in 3 to 6 weeks. Free installation is on custom-designed lights. Ready fittings come with installation support. Warranty is up to 5 years.",
      },
    ],
  },
  {
    slug: "staircase-lighting-design",
    metaTitle: "Staircase Lighting Design",
    description:
      "Staircase lighting design lights each tread, then hangs the void from the slab. Shelf cascades are at Celestial Lights. A piece made for the void is Elor.",
    crumb: "Staircase Lighting Design",
    eyebrow: `Technical · Updated ${UPDATED}`,
    h1: "Light the tread.",
    h1Em: "Hang the void.",
    lede: [
      {
        text: "Staircase lighting design is two decisions. One puts light on the nose of each tread so the step reads at night. The other hangs a piece in the void, from the slab, on its own anchor.",
      },
    ],
    image: "/collections/staircase-cascade.jpg",
    imageAlt: "A red crystal cascade hung in a spiral stair, with a wall light on the landing",
    sections: [
      {
        h: "The step has to read without a glare in the eyes",
        paragraphs: [
          [
            {
              text: "A washer on the wall, or a small light at the tread, shows the edge of the step. A downlight aimed down the flight from the landing glares as you climb. The fitting is chosen so the lamp stays hidden from someone on the stair. The same idea, in a room, is ",
            },
            { text: "why a downlight glares", href: "/guides/why-downlights-glare" },
            { text: "." },
          ],
        ],
      },
      {
        h: "The void is not a dining drop",
        paragraphs: [
          [
            {
              text: "A cascade in a double-height stair is sized to the void, not to a table. The bottom stays clear of anyone on the flight and of the handrail. ",
            },
            { text: "The size calculator", href: "/guides/chandelier-size-calculator" },
            {
              text: " is the check. The fixing is in the slab at the top, before that ceiling closes. What the ceiling can carry is the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Made for the room, or planned first",
        paragraphs: [
          [
            { text: "When the stock sizes do not fit a stair void, send a picture and the measurements and Elor makes the piece. That process, with the timeline and what it costs, is on " },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ". If the wiring and the ceiling are still open, start with the section through the stair: " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " and the plan is drawn before anything is bought. Comparing showrooms first? The " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask. A crystal piece in a stair void has to be reachable for cleaning. The routine is in " },
            { text: "how to clean a crystal chandelier", href: "/guides/how-to-clean-a-crystal-chandelier" },
            { text: "." },
          ],
        ],
      },
    ],
    shelf:
      "A cascade already in the collection is a shelf piece at Celestial Lights.",
    custom:
      "A void with an odd width, a turn, or a finish that has to match the joinery is made by Elor.",
    faqs: [
      {
        q: "What does staircase lighting design include?",
        a: "Light on the treads, so each step is readable at night, and a decision about the void. The decorative piece, if there is one, hangs from the slab on its own anchor.",
      },
      {
        q: "Can a false ceiling at the top of the stair hold a cascade?",
        a: "The gypsum cannot. The anchor is fixed to the slab while that ceiling is open. The false-ceiling guide sets out the sequence.",
      },
      {
        q: "How long is the drop?",
        a: "Long enough to belong to the void, and short of the handrail and of anyone using the stair. Measure the clear height and use the size calculator before a piece is ordered from a picture.",
      },
      {
        q: "Is a stair piece from the shelf or made?",
        a: "If the collection has a cascade that fits the width and the drop, it is at Celestial Lights. If it has to be made for that void, Elor designs and builds it, usually in 3 to 6 weeks, with free installation. A ready fitting comes with installation support.",
      },
    ],
  },
  {
    slug: "bedroom-lighting-design",
    metaTitle: "Bedroom Lighting Design",
    description:
      "Bedroom lighting design keeps a bright lamp off the pillow and puts reading light on its own switch. Shelf fittings are at Celestial Lights.",
    crumb: "Bedroom Lighting Design",
    eyebrow: `Technical · Updated ${UPDATED}`,
    h1: "Keep the lamp",
    h1Em: "out of the eyes.",
    lede: [
      {
        text: "Bedroom lighting design starts from the pillow. A bare lamp over the bed is the mistake. Reading light sits at the side, on its own switch. The piece in the ceiling is dimmable, and clear of a fan.",
      },
    ],
    image: "/spaces/bedroom.jpg",
    imageAlt: "A tiered crystal chandelier in a vaulted bedroom, hung clear of the window",
    sections: [
      {
        h: "Three levels, and the bed is not one of the spots",
        paragraphs: [
          [
            {
              text: "A low ambient level lets the room be dark. A bedside light is for reading, and it switches alone, so the ceiling stays off. A vertical wash on a wall or a headboard gives the room depth without a lamp in the eyes. Colour stays warm. The numbers are ",
            },
            { text: "Kelvin, CRI, and beam", href: "/guides/colour-of-light" },
            { text: "." },
          ],
          [
            {
              text: "If the room has a ceiling fan, the fan keeps its own point. The chandelier does not hang on the same drop. Clearances are in the ",
            },
            { text: "fan guide", href: "/guides/chandelier-with-ceiling-fan" },
            { text: ". A low ceiling wants a short drop or a close-to-ceiling piece, checked with the " },
            { text: "size calculator", href: "/guides/chandelier-size-calculator" },
            { text: "." },
          ],
        ],
      },
      {
        h: "The ceiling still needs an anchor",
        paragraphs: [
          [
            {
              text: "A bedroom piece can be lighter than a stair cascade and still too heavy for gypsum. The fixing goes into the slab before the ceiling closes. That sequence is the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Made for the room, or planned first",
        paragraphs: [
          [
            { text: "When the stock sizes do not fit a bedroom, send a picture and the measurements and Elor makes the piece. That process, with the timeline and what it costs, is on " },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ". If the wiring and the ceiling are still open, start with the bed wall and the ceiling: " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " and the plan is drawn before anything is bought. Comparing showrooms first? The " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask." },
          ],
        ],
      },
    ],
    shelf:
      "A bedside light, a sconce, or a bedroom pendant from the collection is at Celestial Lights.",
    custom:
      "A piece matched to a low ceiling, a vault, or the headboard is designed and made by Elor.",
    faqs: [
      {
        q: "Where should a bedroom chandelier hang?",
        a: "Clear of the pillow line, and clear of a ceiling fan if the room has one. Over the foot of the bed or the open floor is the usual place. The size calculator checks the drop against the ceiling height.",
      },
      {
        q: "Why not a downlight above the bed?",
        a: "A lamp you can see from the pillow glares. Reading light belongs at the side, on its own switch. The ceiling piece, if there is one, dims.",
      },
      {
        q: "What colour of light belongs in a bedroom?",
        a: "Warm, and the same family as the rest of the house. Kelvin, CRI, and beam are the three numbers to agree before a fitting is ordered.",
      },
      {
        q: "Can the bedroom light be made for the room?",
        a: "Yes. A stock fitting comes from Celestial Lights. A piece made for the ceiling or the headboard is Elor, usually in 3 to 6 weeks, with free installation. Ready fittings come with installation support.",
      },
    ],
  },
  {
    slug: "kitchen-lighting-design",
    metaTitle: "Kitchen Lighting Design",
    description:
      "Kitchen lighting design gives the worktop its own light and keeps the island pendant on a separate circuit. Shelf pendants are at Celestial Lights.",
    crumb: "Kitchen Lighting Design",
    eyebrow: `Technical · Updated ${UPDATED}`,
    h1: "The worktop gets",
    h1Em: "its own light.",
    lede: [
      {
        text: "Kitchen lighting design fails when one pendant is asked to light the chopping board. The counter has its own light. The island pendant is a second circuit. Steam, wiping, and the finish are decided with the fitting.",
      },
    ],
    image: "/collections/abstract-rings.jpg",
    imageAlt: "A linear pendant over a dining table, with the kitchen visible beyond",
    sections: [
      {
        h: "Task light on the counter, pendant over the island",
        paragraphs: [
          [
            {
              text: "A strip under the wall cabinet, or a fitting aimed at the worktop, is the light you cook by. It switches without the decorative piece. The pendant hangs above the island or the table, high enough to walk under, and on a dimmer for the hour when nobody is cooking.",
            },
          ],
          [
            {
              text: "The length of a linear piece follows the island, not a photograph of someone else’s kitchen. If the span is particular, it is made. Colour and beam for a work surface are in ",
            },
            { text: "Kelvin, CRI, and beam", href: "/guides/colour-of-light" },
            { text: "." },
          ],
        ],
      },
      {
        h: "The finish has to live with steam",
        paragraphs: [
          [
            {
              text: "A kitchen is wiped down. On the Kerala coast it is also humid. Untreated brass and bare iron pit. What lasts is the ",
            },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: ". A brass piece, if that is the finish you want, is specified on the " },
            { text: "brass page", href: "/guides/brass-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Made for the room, or planned first",
        paragraphs: [
          [
            { text: "When the stock sizes do not fit a kitchen, send a picture and the measurements and Elor makes the piece. That process, with the timeline and what it costs, is on " },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ". If the wiring and the ceiling are still open, start with the counter layout: " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " and the plan is drawn before anything is bought. Comparing showrooms first? The " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask. A work-area light outside, or by the wash area, needs a rated fitting. See the " },
            { text: "IP rating guide", href: "/guides/ip-rating-for-outdoor-lights" },
            { text: "." },
          ],
        ],
      },
    ],
    shelf:
      "A pendant already made to a standard island length is a shelf fitting at Celestial Lights.",
    custom:
      "A linear piece made to your island, or a finish matched to the kitchen, is Elor.",
    faqs: [
      {
        q: "What light does a kitchen actually need?",
        a: "A task light on the worktop, on its own switch, and a separate pendant or linear piece over the island or the table. One fitting in the middle of the ceiling does both jobs badly.",
      },
      {
        q: "How low should an island pendant hang?",
        a: "High enough that people do not walk into it, and low enough that it lights the top of the island. Measure the ceiling and the island before ordering from a picture.",
      },
      {
        q: "Will brass survive in a Kerala kitchen?",
        a: "Untreated brass pits in salt air and in steam. A sealed finish, specified for the room, is the condition. The coastal guide covers what fails first.",
      },
      {
        q: "Is the kitchen pendant custom?",
        a: "A standard length from the collection is at Celestial Lights. A piece made to the island is designed and built by Elor, usually in 3 to 6 weeks, with free installation. Ready fittings come with installation support.",
      },
    ],
  },
  {
    slug: "wooden-chandelier",
    metaTitle: "Wooden Chandelier",
    description:
      "A wooden chandelier suits a dry, finished room. Humid coastal air moves untreated timber. Shelf pieces are at Celestial Lights. Elor makes the rest.",
    crumb: "Wooden Chandelier",
    eyebrow: `Buying guide · Updated ${UPDATED}`,
    h1: "Wood, where the",
    h1Em: "air allows it.",
    lede: [
      {
        text: "A wooden chandelier is a material decision before it is a shape. Timber moves with humidity. In a dry, air-conditioned room a sealed wood finish can be right. On an open Kerala coast it often is not.",
      },
    ],
    image: "/lifestyle/store-wall.jpg",
    imageAlt: "The Celestial Lights wall, with mosaic pendants and crystal cascades on display",
    sections: [
      {
        h: "Ask what the air will do to the timber",
        paragraphs: [
          [
            {
              text: "Untreated wood swells, opens at the joints, and dulls. A finish specified for the room is part of the piece, not a coat added later. Salt air is harder still. What fails outdoors and on the coast is the ",
            },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: ". Crystal, glass, and a sealed metal are the usual alternatives. The material comparison is " },
            { text: "crystal, glass, and acrylic", href: "/guides/crystal-vs-glass-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Wood is still a weight on the slab",
        paragraphs: [
          [
            {
              text: "A timber frame can be heavier than it looks. The anchor goes into the slab before the ceiling closes, same as any other chandelier. That sequence is the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: ". Diameter and drop still come from the room, via the " },
            { text: "size calculator", href: "/guides/chandelier-size-calculator" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Made for the room, or planned first",
        paragraphs: [
          [
            { text: "When the stock sizes do not fit a wooden piece, send a picture and the measurements and Elor makes the piece. That process, with the timeline and what it costs, is on " },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ". If the wiring and the ceiling are still open, start with the timber and the room: " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " and the plan is drawn before anything is bought. Comparing showrooms first? The " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask." },
          ],
        ],
      },
    ],
    shelf:
      "If a wood piece in the collection fits the room and the climate, it is a shelf fitting at Celestial Lights.",
    custom:
      "If the span, the timber, or the finish has to match the joinery, Elor designs and makes it.",
    faqs: [
      {
        q: "Is a wooden chandelier suitable in Kerala?",
        a: "In a dry, air-conditioned room, with a finish specified for humidity, it can be. In open salt air, untreated timber moves and fails. The coastal guide is the check before the material is chosen.",
      },
      {
        q: "Do you have wooden chandeliers on the shelf?",
        a: "Whatever wood is in the current collection is at Celestial Lights. See the range and we will say what is actually there. The shop site is still being built.",
      },
      {
        q: "Can you make a wooden piece to match the furniture?",
        a: "Yes. Send the timber, the span, and a photograph of the joinery. Elor designs and makes that piece, usually in 3 to 6 weeks, with free installation.",
      },
      {
        q: "Does the ceiling hold a timber frame?",
        a: "The false ceiling does not. The anchor is in the slab, marked before the gypsum closes. Weight is covered in the false-ceiling guide.",
      },
    ],
  },
  {
    slug: "brass-chandelier",
    metaTitle: "Brass Chandelier",
    description:
      "A brass chandelier needs a finish specified for the room. Untreated brass pits on the Kerala coast. Shelf pieces are at Celestial Lights. Elor makes the rest.",
    crumb: "Brass Chandelier",
    eyebrow: `Buying guide · Updated ${UPDATED}`,
    h1: "Brass has to survive",
    h1Em: "the air it hangs in.",
    lede: [
      {
        text: "A brass chandelier is a finish and a structure. The alloy, or a brass-coloured metal with a sealed coat, has to be specified for the room. Untreated brass pits in salt air within a season or two.",
      },
    ],
    image: "/collections/dandelion-gold.jpg",
    imageAlt: "A brass-coloured sputnik chandelier with frosted glass globes",
    sections: [
      {
        h: "Specify the finish before the shape",
        paragraphs: [
          [
            {
              text: "Lacquer, a plated coat, or a living finish that is allowed to change: pick one, and write it down. A kitchen and a coastal verandah are harder than a dry living room. What fails first is the ",
            },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: ". If the room wants timber instead, that decision is the " },
            { text: "wood page", href: "/guides/wooden-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Then size it, and fix it to the slab",
        paragraphs: [
          [
            {
              text: "Diameter and drop come from the room. ",
            },
            { text: "The size calculator", href: "/guides/chandelier-size-calculator" },
            {
              text: " does that part. Brass frames carry real weight. The anchor goes into the slab before the ceiling closes, as set out in the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Made for the room, or planned first",
        paragraphs: [
          [
            { text: "When the stock sizes do not fit a brass piece, send a picture and the measurements and Elor makes the piece. That process, with the timeline and what it costs, is on " },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ". If the wiring and the ceiling are still open, start with the finish and the room: " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " and the plan is drawn before anything is bought. Comparing showrooms first? The " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask." },
          ],
        ],
      },
    ],
    shelf:
      "A brass or brass-coloured piece already in the collection is a shelf fitting at Celestial Lights.",
    custom:
      "A diameter, a finish, or a drawing the collection does not have is made by Elor.",
    faqs: [
      {
        q: "Will a brass chandelier last in Kerala?",
        a: "A sealed finish, specified for humidity, can. Untreated brass pits in salt air. Say which room it is for before the finish is chosen. The coastal guide lists what fails first.",
      },
      {
        q: "Is brass the same as a gold-coloured finish?",
        a: "No. Solid brass, brass plate, and a painted gold coat age differently. The specification should name which one you are buying or making.",
      },
      {
        q: "Where do I see brass fittings?",
        a: "Shelf pieces are at Celestial Lights. See the range and we send what is in the collection. The online shop is still being built.",
      },
      {
        q: "Can Elor make a brass piece to a drawing?",
        a: "Yes. Send the diameter, the finish, and the ceiling height. Custom work is usually 3 to 6 weeks, with free installation. A ready fitting comes with installation support. Warranty is up to 5 years.",
      },
    ],
  },
  {
    slug: "how-to-clean-a-crystal-chandelier",
    metaTitle: "How to Clean a Crystal Chandelier",
    description:
      "Clean a crystal chandelier with the power off, a cloth-and-glove wipe in place, and the drops washed by hand only when they are dull. Steps for Kerala homes.",
    crumb: "How to Clean a Crystal Chandelier",
    eyebrow: "How-to · Updated 12 October 2026",
    h1: "Switch it off,",
    h1Em: "then clean it in place.",
    lede: [
      {
        text: "To clean a crystal chandelier, switch it off at the breaker, let the lamps cool, and photograph it. Wipe each drop in place with a lint-free cloth and cotton gloves. Take drops off and hand-wash them only when a wipe does not clear the haze. Dry every piece before the power goes back on.",
      },
    ],
    image: "/video/showroom-crystal.jpg",
    imageAlt: "Crystal chandeliers lit in the showroom",
    sections: [
      {
        h: "How often does a crystal chandelier need cleaning?",
        paragraphs: [
          [
            {
              text: "When the sparkle goes flat. In a Kerala room with a ceiling fan running most of the year, that comes round sooner than people expect, because the fan moves dust onto every facet. A kitchen or a room near a road needs it more often than a closed bedroom. Why crystal shows dust more than glass or acrylic is in the ",
            },
            { text: "crystal, glass, and acrylic guide", href: "/guides/crystal-vs-glass-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Can I clean it without taking it down?",
        paragraphs: [
          [
            {
              text: "Usually, yes. The frame stays on its anchor. Only the drops move, and only if a wipe will not clear them. A piece hung high in a double-height void or over a ",
            },
            { text: "staircase", href: "/guides/staircase-lighting-design" },
            {
              text: " needs proper access: a stable platform, a second person, and the floor below cleared. If nobody can reach it safely, it is not a job for a household ladder.",
            },
          ],
        ],
      },
      {
        h: "What should I not use on crystal?",
        paragraphs: [
          [
            {
              text: "Nothing abrasive, and no spray aimed at the fitting. Liquid that runs into a lamp holder or along the wiring is the risk, not the crystal. Do not twist drops while the frame is loaded, and do not let the fixing take your weight. Plated or brass frames also need a dry cloth, not a wet one. The ",
            },
            { text: "brass guide", href: "/guides/brass-chandelier" },
            { text: " covers finishes." },
          ],
        ],
      },
    ],
    howTo: {
      name: "How to clean a crystal chandelier",
      steps: [
        { h: "Switch off at the breaker", p: "Turn the circuit off at the distribution board, not only at the wall switch, and let the lamps cool." },
        { h: "Photograph the piece", p: "Take photos from below and from the side so every drop and strand goes back where it came from." },
        { h: "Set up below it", p: "Lay a folded towel or a padded sheet under the chandelier. Use a stable platform, and have a second person hold it for anything high." },
        { h: "Wipe each drop in place", p: "Wear cotton gloves. Hold each drop with one hand and wipe it with a dry lint-free cloth in the other, working round one tier at a time." },
        { h: "Hand-wash only the dull drops", p: "If a drop stays hazy, unhook it, wash it by hand in a bowl of lukewarm water with a little mild dish soap, rinse, and dry it with a lint-free cloth. Do one tier at a time so the layout is not lost." },
        { h: "Dust the frame and holders", p: "Wipe the frame with a dry cloth. Keep water away from the lamp holders and the canopy." },
        { h: "Rehang, dry, then power on", p: "Hang the drops back using the photos. Wait until every piece and holder is fully dry before switching the breaker back on." },
      ],
    },
    shelf:
      "A crystal piece that already exists in the collection is a shelf fitting at Celestial Lights. Replacement drops can be asked for in the same chat.",
    custom:
      "A crystal chandelier sized and hung for a room nobody can easily reach is designed by Elor with access for cleaning drawn in from the start.",
    faqs: [
      {
        q: "Can I clean a crystal chandelier without taking it down?",
        a: "Yes, in most homes. Switch it off at the breaker, wipe each drop in place with gloves and a lint-free cloth, and only unhook the drops that stay hazy.",
      },
      {
        q: "Can I spray cleaner on a chandelier while it hangs?",
        a: "Avoid it. Liquid that runs into the lamp holders or along the wiring is the real risk. Wipe the drops instead, and wash the dull ones off the frame.",
      },
      {
        q: "Why does my chandelier get dusty so fast?",
        a: "A ceiling fan running most of the year carries dust onto every facet, and crystal shows it more than glass or acrylic. A kitchen or a road-facing room adds more.",
      },
      {
        q: "Who can clean or service a high chandelier in Kerala?",
        a: "Ask the people who installed it. For a piece from Elor or Celestial Lights, message us with a photo and the ceiling height and we will tell you what the job needs.",
      },
    ],
    published: "2026-10-12",
    modified: "2026-10-12",
  },
  {
    slug: "ip-rating-for-outdoor-lights",
    metaTitle: "IP Rating for Outdoor Lights in Kerala",
    description:
      "What IP rating outdoor lights need: IP44 for a covered sit-out, IP65 for rain-exposed walls and courtyards, IP66/67 for poolside and ground-recessed. Kerala examples.",
    crumb: "IP Rating for Outdoor Lights",
    eyebrow: "Technical · Updated 12 October 2026",
    h1: "Read the second digit,",
    h1Em: "then the place.",
    lede: [
      {
        text: "Outdoor lights in Kerala need IP44 as a minimum under a covered sit-out or balcony, IP65 anywhere driven monsoon rain reaches, such as a facade, an open terrace, or a nalukettu courtyard, and IP66 or IP67 by a pool or in the ground. The first digit is dust. The second is water.",
      },
    ],
    image: "/work/w5-garden.jpg",
    imageAlt: "Garden and path lighting at night",
    sections: [
      {
        h: "What does an IP rating mean?",
        paragraphs: [
          [
            {
              text: "IP stands for ingress protection. The first digit says how well the fitting keeps out solids and dust. The second says how well it keeps out water. A higher second digit means more water. IP20 is an indoor fitting. IP44 handles splashing. IP65 handles low-pressure jets, which is what monsoon rain against a wall behaves like. IP66 and IP67 take heavy jets or immersion.",
            },
          ],
        ],
      },
      {
        h: "Which IP rating for each place outside a Kerala home?",
        paragraphs: [
          [
            {
              text: "Covered sit-out, car porch, or balcony under a slab: IP44. Wall lights on an exposed facade, gate pillars, open terraces, and a nalukettu courtyard open to the sky: IP65. Poolside, water features, and uplights set into the ground: IP66 or IP67. When the place sits between two of these, take the higher rating. The table and the coastal detail are in the ",
            },
            { text: "coastal lighting guide", href: "/guides/coastal-lighting-kerala" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Is the IP rating enough near the sea?",
        paragraphs: [
          [
            {
              text: "No. The rating covers water and dust getting in. It says nothing about salt air eating the body, the screws, or the bracket. In Kochi, Kannur, Kozhikode, or anywhere on the coast, ask for the finish and the fixings as well as the number. ",
            },
            { text: "Why brass and iron pit", href: "/guides/coastal-lighting-kerala" },
            { text: " is covered there too." },
          ],
        ],
      },
      {
        h: "Do bathrooms count as outdoor?",
        paragraphs: [
          [
            {
              text: "For the fitting, nearly. A Kerala bathroom stays humid for months, so a fitting near the shower wants IP44 or better. The same goes for a kitchen hood zone. How the whole house is planned room by room is the ",
            },
            { text: "home lighting design guide", href: "/guides/home-lighting-design" },
            { text: "." },
          ],
        ],
      },
    ],
    howTo: {
      name: "How to choose the IP rating for an outdoor light",
      steps: [
        { h: "Mark where rain reaches", p: "Walk the outside of the house in the monsoon, or ask the site engineer, and mark every point driven rain can hit." },
        { h: "Sort each point", p: "Covered and only splashed: IP44. Open to driven rain, like a facade, terrace, gate, or courtyard: IP65. Jets, immersion, or ground-recessed: IP66 or IP67." },
        { h: "Take the higher rating when unsure", p: "If a point sits between two categories, specify the higher one." },
        { h: "Add finish and fixings near the coast", p: "On the coast, specify a corrosion-resistant body, finish, and stainless fixings, not only the IP number." },
        { h: "Check the rating on the fitting", p: "Confirm the IP rating is printed on the product or its data sheet before it is installed." },
      ],
    },
    shelf:
      "Outdoor wall, gate, and garden fittings that already exist in the range are shelf pieces at Celestial Lights. Ask for the IP rating with the photo.",
    custom:
      "A facade, courtyard, or pool lit as one plan, with the rating set per point, is a lighting design Elor draws before the wiring goes in.",
    faqs: [
      {
        q: "What IP rating do outdoor lights need in Kerala?",
        a: "IP44 at minimum for a covered sit-out or balcony, IP65 for anything exposed to driven rain such as a facade, terrace, or open courtyard, and IP66 or IP67 for poolside and ground-recessed lights.",
      },
      {
        q: "Is IP65 waterproof?",
        a: "IP65 is protected against low-pressure water jets from any direction, which covers monsoon rain on a wall. It is not rated for immersion. Use IP67 where a fitting can sit in water.",
      },
      {
        q: "What do the two digits in IP65 mean?",
        a: "The first digit, 6, is protection against dust. The second digit, 5, is protection against water jets. The higher each digit, the more protection.",
      },
      {
        q: "Can Elor plan the outdoor lighting for my house?",
        a: "Yes. Elor designs lighting for sites anywhere in India from its centres in Kerala, and sets the IP rating, finish, and fixing for each point in the plan. Book a consultation to start.",
      },
    ],
    published: "2026-10-12",
    modified: "2026-10-12",
  },
];

export function getGuideArticle(slug: string): GuideArticle | undefined {
  return guideArticles.find((article) => article.slug === slug);
}

export { UPDATED as guideArticlesUpdated };
