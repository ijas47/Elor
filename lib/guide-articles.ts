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

// Display date for the "Updated" eyebrow comes from each guide's `modified` (or `published`).
const UPDATED = "5 October 2026";

export const guideArticles: GuideArticle[] = [
  {
    slug: "chandelier-for-living-room",
    metaTitle: "Living Room Chandelier for Kerala Homes: Size, Fan, Ceiling",
    description:
      "How to choose a living room chandelier for a Kerala home: size it to the seating, keep it apart from the fan, anchor it to the slab, and suit it to humidity.",
    crumb: "Chandelier for a Living Room",
    eyebrow: "Buying guide",
    h1: "A living room chandelier",
    h1Em: "for a Kerala home.",
    lede: [
      {
        text: "Choose a living room chandelier in Kerala by sizing it to the seating group, not the whole hall. Keep it on a separate point from the ceiling fan, fix it to the slab before the false ceiling closes, and pick a material and finish that will stand the humidity. Then put it on its own switch.",
      },
    ],
    image: "/spaces/living.jpg",
    imageAlt:
      "A living room with a chandelier, cove light in the tray ceiling, and a lamp beside the sofa",
    sections: [
      {
        h: "What size chandelier suits a Kerala living room?",
        paragraphs: [
          [
            {
              text: "Size it to the part of the room where people sit. Many Kerala halls run straight into the dining area, sometimes into the foyer as well, and a diameter taken from the full length of that space lands too large once the sofas are in. Measure the seating group, then the clear height from floor to finished ceiling. ",
            },
            { text: "The chandelier size calculator", href: "/guides/chandelier-size-calculator" },
            { text: " turns those two numbers into a diameter and a drop. Use it before anyone orders a fitting from a photograph, because a photograph never shows the ceiling height it was taken under." },
          ],
          [
            {
              text: "The bottom of the piece has to clear anyone walking past, and it should not sit in the line of sight between two people talking across the sofas. If the dining table shares the room, the dining area usually gets its own light. One large piece trying to cover both ends up in the wrong place for each.",
            },
          ],
        ],
      },
      {
        h: "Can a chandelier and a ceiling fan share a living room?",
        paragraphs: [
          [
            {
              text: "Yes, but not the same point. In most Kerala homes the fan runs for much of the year, so the living room has to work with it rather than around it. The fan and the chandelier each get their own position and their own anchor, far enough apart that the blades never reach the piece and the fan does not set the drops swinging. A fan moving air past crystal also carries dust onto it, which matters later when the piece needs cleaning.",
            },
          ],
          [
            {
              text: "Where the ceiling is only one storey high, a low, close-fitting piece over the seating with the fan elsewhere is often the cleaner answer. The usual layouts and clearances are in ",
            },
            { text: "chandelier with a ceiling fan", href: "/guides/chandelier-with-ceiling-fan" },
            { text: "." },
          ],
        ],
      },
      {
        h: "What changes in a double-height living room?",
        paragraphs: [
          [
            {
              text: "A double-height void, common in Kerala villas and in homes built by families working abroad, gives the chandelier more room and makes every decision harder to undo. The piece is seen from the floor, from the stair, and from the upper landing, so it has to read from above as well as below. The drop is set by where it is seen from, not by a stock length.",
            },
          ],
          [
            {
              text: "The anchor goes into the slab at the top of the void, and the wiring and access are planned at the same time. Someone will need to reach that piece to clean it and to change a lamp. If the stair wraps the void, the ",
            },
            { text: "staircase lighting guide", href: "/guides/staircase-lighting-design" },
            { text: " covers the clearances from the flight and the handrail." },
          ],
        ],
      },
      {
        h: "Can a false ceiling hold a living room chandelier?",
        paragraphs: [
          [
            {
              text: "The decorative ceiling does not carry the weight. Gypsum and POP are finishes, not structure. The fixing goes into the RCC slab, on a point marked while the false ceiling is still open, and the ceiling is then built around it. Leave that until the gypsum has closed and the choices are to cut the ceiling or to hang something lighter than you wanted. What each ceiling build-up can and cannot hold is in the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: "." },
          ],
          [
            {
              text: "The same moment is when the circuits are decided. Cove light, spots, and the chandelier are three jobs and work better on three switches, so the room can be bright for guests and soft in the evening. How that is laid out is in ",
            },
            { text: "ceiling and lighting design", href: "/guides/ceiling-and-lighting-design" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Which chandelier material lasts in Kerala's humidity?",
        paragraphs: [
          [
            {
              text: "Crystal, glass, and acrylic all behave differently in weight, in the light they give, and in how much cleaning they ask for. Crystal sparkles most and shows dust most. Glass glows rather than sparkles and is more forgiving. The comparison is in ",
            },
            { text: "crystal, glass, and acrylic", href: "/guides/crystal-vs-glass-chandelier" },
            { text: "." },
          ],
          [
            {
              text: "The metal matters as much as the drops. A living room near the coast in Kochi, Kannur, or Kozhikode, or one opening onto a nalukettu courtyard, sees damp air for months. Untreated brass and iron mark in salt air, so ask for the finish in writing. The ",
            },
            { text: "brass guide", href: "/guides/brass-chandelier" },
            { text: " and the " },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: " explain what to ask for. For a traditional house where a crystal piece would look out of place, the " },
            { text: "wooden chandelier guide", href: "/guides/wooden-chandelier" },
            { text: " is the other route." },
          ],
        ],
      },
      {
        h: "How should a living room chandelier be switched?",
        paragraphs: [
          [
            {
              text: "On its own switch, and ideally on a dimmer if the fitting and the lamps support one. A chandelier is the object people notice, but it is rarely the light anyone wants for a quiet evening with the fan on and the television running. Lamps beside the sofa and a soft cove carry most evenings. The chandelier comes on when guests arrive, for a function, or for an occasion such as Onam or a wedding visit. Choose a warm colour of light so it flatters skin and wood; the ",
            },
            { text: "Kelvin, CRI, and beam guide", href: "/guides/colour-of-light" },
            { text: " explains the numbers on the box." },
          ],
        ],
      },
      {
        h: "How do I keep a living room chandelier clean?",
        paragraphs: [
          [
            {
              text: "Plan for it before you buy. A piece over the seating at normal height can be wiped in place from a stable platform. A piece in a double-height void needs proper access, so decide at the start who will clean it and how. The routine, with the power off at the breaker, is in ",
            },
            { text: "how to clean a crystal chandelier", href: "/guides/how-to-clean-a-crystal-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Should I buy a ready chandelier or have one made?",
        paragraphs: [
          [
            {
              text: "If a piece in the collection already fits the seating, the ceiling height, and the finish you want, it is a shelf fitting from Celestial Lights. You can see it at the Celestial Lights stores in Kannur and Kozhikode, or at the Elor experience centre in Kochi. When the void is unusual, the ceiling has an off-centre beam, or the picture you have saved is not something anyone stocks, Elor designs and makes the piece. How that works, with timelines and what drives the cost, is on ",
            },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ", and the " },
            { text: "pricing guide", href: "/guides/chandelier-pricing-guide" },
            { text: " covers budgeting." },
          ],
          [
            {
              text: "If the ceiling is still open and the room is still being drawn, start with the plan rather than the piece. ",
            },
            { text: "Book a lighting consultation", href: "/consultation" },
            { text: " and the living room is planned with the rest of the house before anything is bought. The method is in " },
            { text: "how a lighting plan is built", href: "/guides/how-a-lighting-plan-is-built" },
            { text: "." },
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
        q: "What size chandelier works in a Kerala living room?",
        a: "Size it to the seating group and the ceiling height, not to the full length of the hall. The chandelier size calculator on this site turns those two measurements into a diameter and a drop.",
      },
      {
        q: "Can I have a chandelier and a ceiling fan in the same living room?",
        a: "Yes, on separate points with their own anchors, far enough apart that the blades never reach the piece. The fan guide covers the usual layouts.",
      },
      {
        q: "Can the living-room false ceiling hold the chandelier?",
        a: "No. Gypsum and POP do not carry the weight. The anchor goes into the slab before the false ceiling closes, and the ceiling is built around it.",
      },
      {
        q: "Will a chandelier survive Kerala's humidity?",
        a: "The right one will. Choose the drops for how much cleaning you will do, and ask for a sealed finish on the metal, especially near the coast or beside an open courtyard.",
      },
      {
        q: "How should a chandelier in a double-height living room be planned?",
        a: "Size the drop to where it is seen from, including the stair and the upper landing. Fix the anchor to the top slab and plan access for cleaning and lamp changes at the same time.",
      },
      {
        q: "When is a living-room chandelier custom?",
        a: "When the ceiling, the reference picture, or the drop is not a stock size. Elor designs and makes that piece. Custom work is usually ready in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
      },
    ],
    published: "2026-10-05",
    modified: "2026-10-12",
  },
  {
    slug: "ceiling-and-lighting-design",
    metaTitle: "False Ceiling Lighting Design for Kerala",
    description:
      "False ceiling lighting design for Kerala homes: draw the furniture first, put cove, spots and the chandelier on separate circuits, and anchor it to the slab.",
    crumb: "Ceiling and Lighting Design",
    eyebrow: "Technical",
    h1: "Design the ceiling",
    h1Em: "around the light.",
    lede: [
      {
        text: "Design a false ceiling and its lighting together, before the gypsum closes. Draw the furniture first, then place three layers: cove for a soft wash, spots for tasks and paths, and a decorative piece over the seating or table. Give each its own circuit, fix the chandelier anchor to the slab, and leave the fan its own point.",
      },
    ],
    image: "/spaces/living.jpg",
    imageAlt: "A tray ceiling with cove lighting, recessed spots, and a chandelier over the seating",
    sections: [
      {
        h: "What is ceiling and lighting design?",
        paragraphs: [
          [
            {
              text: "It is the order of the work, not a folder of photographs. A false ceiling in a Kerala home is usually gypsum or POP hung below the RCC slab, and the lighting decides how deep it needs to be, where it steps, and where the openings go. If the ceiling is drawn first and the lights are fitted into whatever space is left, the result is spots in the wrong places, a cove that shows its LED strip, and a chandelier with nothing solid above it.",
            },
          ],
          [
            {
              text: "The drawing that settles this is a reflected ceiling plan: the ceiling seen from below, with every light, every fan, every anchor, and every circuit marked. The method behind it is ",
            },
            { text: "how a lighting plan is built", href: "/guides/how-a-lighting-plan-is-built" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Why should the furniture be drawn before the ceiling?",
        paragraphs: [
          [
            {
              text: "Because the light is for the furniture, not for the middle of the room. The sofa, the dining table, the bed, and the kitchen counter decide where the decorative piece hangs and where task light falls. A tray ceiling centred on the room but not on the seating puts the chandelier over the walkway. Fix the furniture layout, even roughly, and centre the ceiling features on it. Where a living and dining area share one long hall, as in many Kerala homes, each end gets its own ceiling feature and its own decorative light, rather than one tray stretched across both. If the furniture is likely to move, keep the decorative points flexible by marking two anchor positions while the ceiling is still open.",
            },
          ],
        ],
      },
      {
        h: "What do cove, spots, and the chandelier each do?",
        paragraphs: [
          [
            {
              text: "A cove washes the edge of the ceiling and makes the room feel taller and calmer; it is the light for a quiet evening. Spots mark a task or a path, or pick out a wall, a picture, or a shelf. The chandelier or pendant is the object in the room, the piece people notice. Put all three on one switch and the room has one scene, brighter or darker. On three circuits it has several, and that is most of what makes a room feel designed.",
            },
          ],
          [
            {
              text: "Agree the colour of the lamps once for the room, so the cove, the spots, and the chandelier match. The numbers are in ",
            },
            { text: "Kelvin, CRI, and beam", href: "/guides/colour-of-light" },
            { text: "." },
          ],
        ],
      },
      {
        h: "How deep should a false ceiling be for lighting?",
        paragraphs: [
          [
            {
              text: "Deep enough for the fittings you choose, which is why the fittings are chosen first. A downlight with a deep baffle, which hides the lamp from the sofa, needs more depth than a flat panel. A trimless fitting needs room behind the gypsum. A cove needs a lip high enough that the strip is not seen from across the room. If the lamp is visible from where people sit, the fitting was too shallow for the job. That is ",
            },
            { text: "why a downlight glares", href: "/guides/why-downlights-glare" },
            { text: ". Ask for the depth each fitting needs from its data sheet before the ceiling height is fixed." },
          ],
        ],
      },
      {
        h: "Can a false ceiling hold a chandelier?",
        paragraphs: [
          [
            {
              text: "No. Gypsum and POP are finishes, not structure. The chandelier anchor goes into the slab, at a point marked while the ceiling is open, and the false ceiling is built around it. The same applies to a heavy pendant. Leave it until after the ceiling closes and the choice is between cutting the ceiling and hanging something lighter than you wanted. The full sequence, and what each build-up can carry, is in the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Where does the ceiling fan go?",
        paragraphs: [
          [
            {
              text: "On its own point, marked on the same drawing. Most Kerala rooms need a fan for much of the year, and the fan competes with the chandelier for the centre of the ceiling. Decide which one takes the centre, then place the other far enough away that the blades never reach it. A fan below downlights also flickers the light as the blades pass, so keep spots out of the circle the blades sweep. The usual layouts are in ",
            },
            { text: "chandelier with a ceiling fan", href: "/guides/chandelier-with-ceiling-fan" },
            { text: "." },
          ],
        ],
      },
      {
        h: "How does Kerala's humidity affect a false ceiling with lights?",
        paragraphs: [
          [
            {
              text: "Gypsum near a bathroom, under a leaking terrace, or beside a nalukettu courtyard open to the rain sees damp for months. Fittings in those ceilings should be chosen for damp air, and drivers placed where they can be reached without breaking the ceiling. Leave a way in: an access panel near the drivers and the junctions saves a lot of damage later. What fails first near the coast is in the ",
            },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: ", and the ratings are explained in " },
            { text: "IP rating for outdoor lights", href: "/guides/ip-rating-for-outdoor-lights" },
            { text: "." },
          ],
        ],
      },
      {
        h: "How does this apply room by room?",
        paragraphs: [
          [
            {
              text: "The living room centres the decorative piece on the seating; see ",
            },
            { text: "chandelier for a living room", href: "/guides/chandelier-for-living-room" },
            { text: ". The bedroom keeps spots away from the pillow; see " },
            { text: "bedroom lighting", href: "/guides/bedroom-lighting-design" },
            { text: ". The kitchen puts task light in front of the cook, not behind; see " },
            { text: "kitchen lighting", href: "/guides/kitchen-lighting-design" },
            { text: ". A double-height void hangs from the top slab; see " },
            { text: "staircase lighting", href: "/guides/staircase-lighting-design" },
            { text: ". Whatever hangs from the ceiling has to be reachable for cleaning; the routine is in " },
            { text: "how to clean a crystal chandelier", href: "/guides/how-to-clean-a-crystal-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Who draws the ceiling, and where do the fittings come from?",
        paragraphs: [
          [
            {
              text: "Elor writes the lighting plan, in DIALux where the room needs a calculation, and marks the anchors before the ceiling closes. ",
            },
            { text: "Book a lighting consultation", href: "/consultation" },
            { text: " and start with a floor plan and a photo. Celestial Lights carries ready fittings for every room. A piece made for this ceiling is on " },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ", and the " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask anyone else." },
          ],
        ],
      },
    ],
    shelf:
      "Ready fittings for every room, including the ceiling, are shelf pieces at Celestial Lights.",
    custom:
      "A piece made for this ceiling, or a plan for the whole room, is Elor’s work.",
    faqs: [
      {
        q: "What is ceiling and lighting design?",
        a: "A marked ceiling that says where the cove, the spots, and the decorative piece go, which circuit each is on, and what the anchor is fixed to. It is drawn before the false ceiling closes.",
      },
      {
        q: "Should the chandelier be the only light?",
        a: "No. A single fitting in the middle leaves the walls dark and gives the room one level. Cove, spots, and task light stay in the plan. The chandelier sits on top of them.",
      },
      {
        q: "Can gypsum or POP hold a chandelier?",
        a: "No. The anchor goes into the slab while the ceiling is open, and the false ceiling is built around it. The false-ceiling guide sets out the sequence.",
      },
      {
        q: "Why can I see the bulb in my false-ceiling downlights?",
        a: "The fitting is too shallow, or the lamp sits too close to the opening. A deeper baffle or a recessed lamp hides it. Check the depth each fitting needs before the ceiling height is fixed.",
      },
      {
        q: "Who draws the ceiling?",
        a: "Elor writes the lighting plan, in DIALux where the room needs a calculation, and marks the anchor before the ceiling closes. You can start with a floor plan and a photo.",
      },
      {
        q: "Where do the fittings come from?",
        a: "Ready fittings are at Celestial Lights. Anything the ceiling still needs, and that the collection does not have, is designed and made by Elor, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
      },
    ],
    published: "2026-10-05",
    modified: "2026-10-12",
  },
  {
    slug: "home-lighting-design",
    metaTitle: "Home Lighting Design for Kerala Houses: One Plan, Every Room",
    description:
      "Home lighting design for Kerala houses: one plan for every room and the outside, drawn before the ceilings close, with consistent colour and separate circuits.",
    crumb: "Home Lighting Design",
    eyebrow: "Technical",
    h1: "The whole house,",
    h1Em: "one lighting plan.",
    lede: [
      {
        text: "Home lighting design for a Kerala house is one plan for every room and the outside, drawn while the ceilings and walls are still open. It places each light against the furniture, gives every room separate circuits, keeps one colour of light through the house, sets fans and anchors, and chooses outdoor and bathroom fittings for the monsoon and the coast.",
      },
    ],
    image: "/lifestyle/villa-night.jpg",
    imageAlt: "A house at night with cove light under the slabs, wall lights, and a lit path",
    sections: [
      {
        h: "What is home lighting design?",
        paragraphs: [
          [
            {
              text: "A drawing for the whole house that says where every light goes, which switch controls it, what it is fixed to, and what colour it is. House lighting design is the same search and the same job. It is different from choosing fittings room by room in a showroom, because it makes the decisions that have to be made before the electrician and the ceiling contractor finish: points, circuits, anchors, and depths.",
            },
          ],
          [
            {
              text: "The order we draw a plan in is set out in ",
            },
            { text: "how a lighting plan is built", href: "/guides/how-a-lighting-plan-is-built" },
            { text: "." },
          ],
        ],
      },
      {
        h: "When should a house lighting plan be drawn?",
        paragraphs: [
          [
            {
              text: "Before the wiring is concealed and before any false ceiling closes. In a typical build the conduits go into the slab and the walls early, so the plan is most useful when the structure is going up. Start from the architect's floor plans and the furniture layout. If the house is already finished, a plan still helps, but changes then mean chasing walls or opening ceilings.",
            },
          ],
        ],
      },
      {
        h: "Which rooms should be planned first?",
        paragraphs: [
          [
            {
              text: "The ones whose ceilings and walls close earliest: kitchens, bathrooms, and the stair. Mark those points first. Living, dining, and bedrooms follow. Outside comes into the same drawing, not as an afterthought, because the gate, the path, the car porch, the sit-out, and the facade need conduits laid before the paving and the plaster.",
            },
          ],
        ],
      },
      {
        h: "Why should the whole house use one colour of light?",
        paragraphs: [
          [
            {
              text: "So the house does not change temperature as you walk through it. A warm living room opening onto a cold white corridor and a bluish kitchen looks like three different houses. Agree the colour temperature and colour rendering once, then make exceptions on purpose, for example a task light over a work counter. The three numbers to agree are in ",
            },
            { text: "Kelvin, CRI, and beam", href: "/guides/colour-of-light" },
            { text: "." },
          ],
        ],
      },
      {
        h: "How should circuits and switches be planned?",
        paragraphs: [
          [
            {
              text: "Each room gets layers on separate switches: a general light, task light where work happens, and any decorative piece on its own. Switches go where people enter and where they stop, including two-way switching on the stair and beside the bed. The fan has its own regulator and point. A house planned this way can be lit for an evening, for guests, or for a function without every light in the room coming on at once.",
            },
          ],
        ],
      },
      {
        h: "How should the outside of a Kerala house be lit?",
        paragraphs: [
          [
            {
              text: "As its own set of circuits, planned with the rooms. The gate and the compound wall tell a visitor where to go. The path needs low light at the edges so nobody trips, without lamps shining into the eyes of someone walking up it. The car porch and the sit-out are rooms in their own right in a Kerala house, used most evenings, and deserve the same warm colour as the living room inside. The facade can be lit softly from below or from the slab edges, but a little goes a long way.",
            },
          ],
          [
            {
              text: "Put the outside lights on a timer or a sensor if you want them to come on reliably at dusk, and keep the sit-out on a switch by the door. Every one of these fittings faces the monsoon, so the rating and the finish matter more than the shape.",
            },
          ],
        ],
      },
      {
        h: "What changes in a Kerala house?",
        paragraphs: [
          [
            {
              text: "Fans run for much of the year, so every room's ceiling has to place the fan and the decorative light apart; see ",
            },
            { text: "chandelier with a ceiling fan", href: "/guides/chandelier-with-ceiling-fan" },
            { text: ". Many houses have a double-height void by the stair or the living room, and the piece in it hangs from the top slab; see " },
            { text: "staircase lighting", href: "/guides/staircase-lighting-design" },
            { text: ". The monsoon keeps bathrooms, verandas, and courtyards damp for months, and the coast adds salt air." },
          ],
          [
            {
              text: "A nalukettu or a courtyard open to the sky treats its edges as outdoors, so the fittings there need a weather rating; see ",
            },
            { text: "IP rating for outdoor lights", href: "/guides/ip-rating-for-outdoor-lights" },
            { text: ". Metal finishes near the sea need specifying, not choosing from a dry showroom; see the " },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: ". If you want a material that suits a traditional house, the " },
            { text: "wooden chandelier", href: "/guides/wooden-chandelier" },
            { text: " and " },
            { text: "brass chandelier", href: "/guides/brass-chandelier" },
            { text: " guides cover what to ask for." },
          ],
        ],
      },
      {
        h: "How is each room handled?",
        paragraphs: [
          [
            { text: "The living room", href: "/guides/chandelier-for-living-room" },
            { text: " sizes the chandelier to the seating. " },
            { text: "The ceiling", href: "/guides/ceiling-and-lighting-design" },
            { text: " splits cove, spots, and the decorative piece onto separate circuits. " },
            { text: "The stair", href: "/guides/staircase-lighting-design" },
            { text: " lights the tread and the void separately. " },
            { text: "The bedroom", href: "/guides/bedroom-lighting-design" },
            { text: " keeps the lamp out of the eyes. " },
            { text: "The kitchen", href: "/guides/kitchen-lighting-design" },
            { text: " gives the worktop its own light. Every decorative piece is fixed to the slab, not the false ceiling, as set out in the " },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: ", and placed where someone can reach it to clean it; see " },
            { text: "how to clean a crystal chandelier", href: "/guides/how-to-clean-a-crystal-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Can the plan be done if I am building from abroad?",
        paragraphs: [
          [
            {
              text: "The plan can start from drawings and video calls, which suits families building in Kerala while working elsewhere. Elor also designs lighting for sites elsewhere in India.",
            },
          ],
        ],
      },
      {
        h: "Should I buy ready fittings or have pieces made?",
        paragraphs: [
          [
            {
              text: "Most of a house is lit with ready fittings, and Celestial Lights carries ready fittings for every room. A piece made for a particular void, ceiling, or picture is designed and made by Elor; the process, timeline, and what drives the cost are on ",
            },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ", and budgeting is in the " },
            { text: "pricing guide", href: "/guides/chandelier-pricing-guide" },
            { text: ". To start the plan, " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " with the floor plans. Comparing showrooms first? The " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask." },
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
        q: "When should I start the lighting plan for a new house?",
        a: "While the structure is going up, before conduits are concealed and ceilings close. Start from the architect's floor plans and a furniture layout.",
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
        a: "Shelf fittings are at Celestial Lights. Elor writes the plan and makes the custom pieces, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else. Warranty is up to 5 years.",
      },
    ],
    published: "2026-10-05",
    modified: "2026-10-12",
  },
  {
    slug: "staircase-lighting-design",
    metaTitle: "Staircase Lighting for Kerala Homes: Treads, Voids, Cascades",
    description:
      "Staircase lighting design for Kerala homes: light each tread without glare, hang the double-height void from the slab, and keep the fan clear of the cascade.",
    crumb: "Staircase Lighting Design",
    eyebrow: "Technical",
    h1: "Light the tread.",
    h1Em: "Hang the void.",
    lede: [
      {
        text: "Staircase lighting in a Kerala home is two separate decisions. First, light the edge of every tread so each step reads at night without a lamp glaring into your eyes. Second, if the stair has a double-height void, hang the decorative piece from the slab, clear of the handrail, with a way to reach it for cleaning.",
      },
    ],
    image: "/collections/staircase-cascade.jpg",
    imageAlt: "A red crystal cascade hung in a spiral stair, with a wall light on the landing",
    sections: [
      {
        h: "How should stair treads be lit?",
        paragraphs: [
          [
            {
              text: "The job is to show the edge of each step. A low light set into the wall beside the treads, or a small fitting at each tread, puts light where the foot goes. A wall washer along the flight can do the same over a wider stair. What fails is a downlight on the landing ceiling aimed down the flight: it lights the steps and glares straight into the eyes of anyone climbing. The fitting is chosen so the lamp stays hidden from someone on the stair. The same idea in a room is ",
            },
            { text: "why a downlight glares", href: "/guides/why-downlights-glare" },
            { text: "." },
          ],
          [
            {
              text: "Put the tread lights on their own circuit, switchable from the top and the bottom of the flight. Late at night they are often the only light anyone needs, and the colour should be warm enough not to wake the house. Choosing the colour of light is covered in the ",
            },
            { text: "Kelvin, CRI, and beam guide", href: "/guides/colour-of-light" },
            { text: "." },
          ],
        ],
      },
      {
        h: "What goes in a double-height stair void?",
        paragraphs: [
          [
            {
              text: "Many Kerala houses put the stair in a double-height void, often beside the living room or the entrance, and that void is where a cascade or a long chandelier usually goes. It is not a dining drop. The piece is sized to the void, not to a table, and it is seen from the floor, from every step of the flight, and from the upper landing, so it has to look right from above as well as below.",
            },
          ],
          [
            {
              text: "The bottom of the piece stays clear of anyone on the flight and of the handrail. A spiral or a turning stair makes this tighter, because the clear space changes at every step. ",
            },
            { text: "The size calculator", href: "/guides/chandelier-size-calculator" },
            { text: " is the first check. Then draw the stair in section, with the piece in it, before anything is ordered." },
          ],
        ],
      },
      {
        h: "How should the landing and the stair wall be lit?",
        paragraphs: [
          [
            {
              text: "The landing is where people turn, stop, and sometimes look back down into the void, so it wants its own light rather than borrowed spill from the chandelier. A wall light at the turn, at a height nobody's head will meet, marks the change of direction. On a long straight flight, the wall beside the stair is often the best surface in the house for a picture light or a quiet wash, because everyone passes it slowly.",
            },
          ],
          [
            {
              text: "Keep the switching simple. The tread lights, the landing light, and the piece in the void are three circuits, each reachable from both ends of the stair. The decorative piece is then something you switch on for an evening or for guests, not the only way to see the steps. How circuits are grouped across a whole house is set out in ",
            },
            { text: "how a lighting plan is built", href: "/guides/how-a-lighting-plan-is-built" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Where is a staircase chandelier fixed?",
        paragraphs: [
          [
            {
              text: "To the slab at the top of the void, on its own anchor, set while the ceiling there is still open. A false ceiling at the top of the stair is a finish and does not carry the weight. Long cascades with many drops can be heavy, and the weight sits on that one point. What each ceiling build-up can and cannot hold is in the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Can a ceiling fan sit near a stair cascade?",
        paragraphs: [
          [
            {
              text: "Not close to it. Kerala homes run fans for much of the year, and a fan near the void sets the drops swinging and carries dust onto every strand. If the landing or the hall beside the stair needs a fan, keep it well away from the piece and give each its own point. The layouts that work are in ",
            },
            { text: "chandelier with a ceiling fan", href: "/guides/chandelier-with-ceiling-fan" },
            { text: "." },
          ],
        ],
      },
      {
        h: "How does humidity affect staircase lighting?",
        paragraphs: [
          [
            {
              text: "A stair beside an open courtyard, as in a nalukettu, or a flight with a window that stays open through the monsoon, sees damp air for months. Fittings near the opening want a rating for that, and metal finishes should be specified for humidity, not chosen from a dry showroom. Untreated brass and iron mark near the coast. The ",
            },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: " sets out what fails first, and " },
            { text: "IP rating for outdoor lights", href: "/guides/ip-rating-for-outdoor-lights" },
            { text: " explains the numbers." },
          ],
        ],
      },
      {
        h: "How do I clean a chandelier over a staircase?",
        paragraphs: [
          [
            {
              text: "Decide this before the piece is bought. A cascade over a flight cannot be reached from a household ladder on the steps. It needs a stable platform or a fixing that lets the piece be lowered, and a second person. Plan the access with the anchor. The routine itself, with the power off at the breaker, is in ",
            },
            { text: "how to clean a crystal chandelier", href: "/guides/how-to-clean-a-crystal-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Should a stair piece be ready-made or custom?",
        paragraphs: [
          [
            {
              text: "Start with the range. Celestial Lights carries ready cascades in a range of sizes, so measure the void first and compare its width and height with the pieces on offer, not with photographs. A stair that turns, a void narrower or wider than the stock pieces, or joinery the finish has to match is where a made piece earns its place: send the section and a picture, and Elor designs it. How custom work runs, and what drives the cost, is on ",
            },
            { text: "custom chandeliers", href: "/customisation" },
            { text: "." },
          ],
          [
            {
              text: "If the wiring and the ceiling are still open, start with the section through the stair. ",
            },
            { text: "Book a lighting consultation", href: "/consultation" },
            { text: " and the stair is planned with the rest of the house. The " },
            { text: "home lighting design guide", href: "/guides/home-lighting-design" },
            { text: " covers that whole-house plan, and if the void opens onto the hall, the " },
            { text: "living room guide", href: "/guides/chandelier-for-living-room" },
            { text: " covers the room beside it. Comparing showrooms first? The " },
            { text: "chandelier shop guide", href: "/guides/how-to-choose-a-chandelier-shop" },
            { text: " lists what to ask." },
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
        a: "Light on the treads, so each step reads at night without glare, and a decision about the void. The decorative piece, if there is one, hangs from the slab on its own anchor.",
      },
      {
        q: "What is the best way to light stair treads?",
        a: "Low lights in the wall beside the steps, or a small fitting at each tread, on their own circuit. Avoid a downlight on the landing aimed down the flight, because it glares at anyone climbing.",
      },
      {
        q: "Can a false ceiling at the top of the stair hold a cascade?",
        a: "No. The gypsum is a finish. The anchor is fixed to the slab while that ceiling is open. The false-ceiling guide sets out the sequence.",
      },
      {
        q: "How long should a staircase chandelier drop?",
        a: "Long enough to belong to the void, and short of the handrail and of anyone using the stair. Measure the clear height, use the size calculator, and draw the stair in section before ordering.",
      },
      {
        q: "How is a chandelier over a staircase cleaned?",
        a: "Not from a household ladder on the steps. Plan a stable platform or a way to lower the piece when the anchor is set. The crystal cleaning guide has the routine.",
      },
      {
        q: "Is a stair piece from the shelf or made?",
        a: "If the collection has a cascade that fits the width and the drop, it is at Celestial Lights. If it has to be made for that void, Elor designs and builds it, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
      },
    ],
    published: "2026-10-05",
    modified: "2026-10-12",
  },
  {
    slug: "bedroom-lighting-design",
    metaTitle: "Bedroom Lighting for Kerala Homes: Fan, Reading Light, Calm",
    description:
      "Bedroom lighting design for Kerala homes: no bright lamp in sight of the pillow, reading light on its own switch, and the fan kept clear of the ceiling piece.",
    crumb: "Bedroom Lighting Design",
    eyebrow: "Technical",
    h1: "Keep the lamp",
    h1Em: "out of the eyes.",
    lede: [
      {
        text: "Plan bedroom lighting in a Kerala home from the pillow outwards. Keep any bright lamp out of sight of someone lying in bed, put reading light at the bedside on its own switch, and keep the ceiling piece dimmable and well apart from the fan. Use warm light, and choose finishes that will cope with the humidity.",
      },
    ],
    image: "/spaces/bedroom.jpg",
    imageAlt: "A tiered crystal chandelier in a vaulted bedroom, hung clear of the window",
    sections: [
      {
        h: "What lighting does a bedroom need?",
        paragraphs: [
          [
            {
              text: "Three layers, each on its own switch. A low general light lets you move around the room and can be turned right down. A bedside light is for reading, and switches without anything else, so one person can read while the other sleeps. A soft wash on a wall or the headboard gives the room depth without putting a lamp in anyone's eyes. A decorative piece, if there is one, sits on top of these, not instead of them.",
            },
          ],
          [
            {
              text: "Keep the colour warm and consistent with the rest of the house, so the corridor and the bedroom do not clash at night. The numbers to agree before ordering anything are in ",
            },
            { text: "Kelvin, CRI, and beam", href: "/guides/colour-of-light" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Why should there be no downlight over the bed?",
        paragraphs: [
          [
            {
              text: "Because the bed is where people lie on their backs and look straight up. A downlight above the pillow is the one fitting in the house that is guaranteed to be seen directly. Put the ceiling lights over the walkway and the wardrobe instead, and choose fittings with the lamp set back so it stays hidden from most angles. Why some downlights glare and others do not is explained in ",
            },
            { text: "why downlights glare", href: "/guides/why-downlights-glare" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Can a bedroom have a chandelier and a ceiling fan?",
        paragraphs: [
          [
            {
              text: "Yes, if each has its own point. In Kerala the bedroom fan often runs all night for much of the year, so it usually takes the centre of the room. The chandelier or pendant goes elsewhere, often over the foot of the bed or the open floor, far enough away that the blades never reach it and the moving air does not set it swaying. The usual layouts are in ",
            },
            { text: "chandelier with a ceiling fan", href: "/guides/chandelier-with-ceiling-fan" },
            { text: "." },
          ],
          [
            {
              text: "A low ceiling wants a short drop or a piece that sits close to the ceiling. Check the drop against the ceiling height with the ",
            },
            { text: "size calculator", href: "/guides/chandelier-size-calculator" },
            { text: " before choosing from a photograph." },
          ],
        ],
      },
      {
        h: "Where should reading lights and switches go?",
        paragraphs: [
          [
            {
              text: "At the bed. A wall light or a pendant on each side, positioned so the light falls on the page rather than on the pillow next to it, is the usual answer. Each side gets its own switch within reach of the bed, and it helps to be able to switch off the main room light from the bed as well. Decide this while the walls are open, because moving a point after the plaster and paint is done is a much bigger job.",
            },
          ],
        ],
      },
      {
        h: "How does Kerala's humidity affect bedroom lighting?",
        paragraphs: [
          [
            {
              text: "Bedrooms often have an attached bathroom, and in a Kerala monsoon that bathroom stays damp for months. Fittings near the bathroom door, or in a bedroom that opens onto a balcony or a nalukettu courtyard, should be chosen for damp air. Metal finishes matter too: untreated brass and iron mark near the coast. The ",
            },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: " sets out what fails first, and " },
            { text: "IP ratings", href: "/guides/ip-rating-for-outdoor-lights" },
            { text: " explains what the numbers on a bathroom fitting mean." },
          ],
          [
            {
              text: "If you want a material that feels calmer than crystal in a bedroom, the ",
            },
            { text: "wooden chandelier guide", href: "/guides/wooden-chandelier" },
            { text: " and the " },
            { text: "brass guide", href: "/guides/brass-chandelier" },
            { text: " cover what to ask for." },
          ],
        ],
      },
      {
        h: "How should the way to the bathroom be lit at night?",
        paragraphs: [
          [
            {
              text: "With a low light, not the main one. A small fitting near the floor along the path from the bed to the bathroom door, or a dim light just inside the bathroom, lets someone get up at night without waking the room or their own eyes. This matters most in a bedroom for an elderly parent, where a missed step in the dark is the real risk. Put it on a switch by the bed, or on a sensor if you prefer, and keep it warm and dim.",
            },
          ],
          [
            {
              text: "A child's room follows the same rule with one addition: a dimmable general light, so the room can be bright for play and homework and almost dark at bedtime. Keep any fitting a child might reach or swing at out of the way, and fix it to the slab, not the false ceiling.",
            },
          ],
        ],
      },
      {
        h: "How do I light a wardrobe and a dressing area?",
        paragraphs: [
          [
            {
              text: "From the front, not from above. A light over the middle of the room leaves the inside of a wardrobe in shadow, and a mirror lit from above puts shadows under the eyes. A light inside the wardrobe that comes on with the door, and light on either side of the dressing mirror, show colours as they are. Choose a good colour rendering for the mirror; the numbers are in the colour-of-light guide linked above.",
            },
          ],
        ],
      },
      {
        h: "Can a false ceiling hold a bedroom chandelier?",
        paragraphs: [
          [
            {
              text: "No. A bedroom piece can be lighter than a stair cascade and still too heavy for gypsum or POP. The fixing goes into the slab while the false ceiling is still open, and the cove and the spots are wired at the same time. That sequence is in the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: ", and how the ceiling and its circuits are laid out is in " },
            { text: "ceiling and lighting design", href: "/guides/ceiling-and-lighting-design" },
            { text: "." },
          ],
        ],
      },
      {
        h: "How do I keep a bedroom chandelier clean?",
        paragraphs: [
          [
            {
              text: "A fan running every night carries dust onto the piece, and crystal shows it most. Before buying, check that someone can reach the piece from a stable platform without leaning over the bed. The routine, with the power off at the breaker, is in ",
            },
            { text: "how to clean a crystal chandelier", href: "/guides/how-to-clean-a-crystal-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Should a bedroom light be ready-made or custom?",
        paragraphs: [
          [
            {
              text: "Bedside lights, sconces, and bedroom pendants that already exist in the range come from Celestial Lights. When the room has a low ceiling, a vaulted roof, or a headboard the light should be built around, send a picture and the measurements and Elor makes the piece. The process, with the timeline and what drives the cost, is on ",
            },
            { text: "custom chandeliers", href: "/customisation" },
            { text: "." },
          ],
          [
            {
              text: "If the wiring is still open, start with the bed wall and the switch positions. ",
            },
            { text: "Book a lighting consultation", href: "/consultation" },
            { text: " and the bedroom is planned with the rest of the house; the whole-house approach is in " },
            { text: "home lighting design", href: "/guides/home-lighting-design" },
            { text: "." },
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
        a: "Someone lying in bed looks straight up at it, so it glares. Put ceiling lights over the walkway instead, and keep reading light at the side on its own switch.",
      },
      {
        q: "Can a bedroom have both a fan and a chandelier?",
        a: "Yes, on separate points with their own anchors. The fan usually takes the centre, and the decorative piece goes over the foot of the bed or the open floor, clear of the blades.",
      },
      {
        q: "What colour of light belongs in a bedroom?",
        a: "Warm, and the same family as the rest of the house. Kelvin, CRI, and beam are the three numbers to agree before a fitting is ordered.",
      },
      {
        q: "Can the bedroom light be made for the room?",
        a: "Yes. A stock fitting comes from Celestial Lights. A piece made for the ceiling or the headboard is Elor, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
      },
    ],
    published: "2026-10-05",
    modified: "2026-10-12",
  },
  {
    slug: "kitchen-lighting-design",
    metaTitle: "Kitchen Lighting for Kerala Homes: Worktop, Island, Steam",
    description:
      "Kitchen lighting design for Kerala homes: the worktop on its own circuit, the island pendant switched apart, no overhead shadows, finishes that survive steam.",
    crumb: "Kitchen Lighting Design",
    eyebrow: "Technical",
    h1: "The worktop gets",
    h1Em: "its own light.",
    lede: [
      {
        text: "Light a Kerala kitchen in layers. Put task light directly on the worktop, usually under the wall cabinets, so you never cook in your own shadow. Hang the island or dining pendant on a separate circuit. Then light the room generally, and choose fittings and finishes that can be wiped down and will cope with steam and humidity.",
      },
    ],
    image: "/collections/abstract-rings.jpg",
    imageAlt: "A linear pendant over a dining table, with the kitchen visible beyond",
    sections: [
      {
        h: "What lighting does a kitchen need?",
        paragraphs: [
          [
            {
              text: "Three jobs. Task light on the worktop, where you chop and cook. A pendant or linear piece over the island or the table, which is as much about how the room looks as what it lights. And general light, so the floor, the cupboards, and the corners are visible. Each goes on its own switch. One fitting in the middle of the ceiling tries to do all three and does none of them well.",
            },
          ],
          [
            {
              text: "How the circuits are grouped across a whole house is set out in ",
            },
            { text: "how a lighting plan is built", href: "/guides/how-a-lighting-plan-is-built" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Why do I cook in my own shadow?",
        paragraphs: [
          [
            {
              text: "Because the light is behind you. A ceiling light in the middle of the kitchen sits behind anyone facing the counter, so their head and shoulders throw a shadow onto the board. The fix is light in front of you: a strip or fitting under the wall cabinets, or downlights set close to the wall above the counter and aimed at the worktop. Keep the lamp out of direct view from where people stand. The reasons are in ",
            },
            { text: "why downlights glare", href: "/guides/why-downlights-glare" },
            { text: "." },
          ],
          [
            {
              text: "For a work surface, colour rendering matters, because you are judging food. The numbers to agree are in ",
            },
            { text: "Kelvin, CRI, and beam", href: "/guides/colour-of-light" },
            { text: "." },
          ],
          [
            {
              text: "Under-cabinet light needs planning with the carpenter. The wiring has to reach the underside of the wall cabinets before they are fixed, the strip or fitting needs a lip or a channel so it is not seen from the dining table, and the switch should be at the counter, not by the door. If the backsplash is glossy tile or polished stone, ask how the fitting will reflect in it; a bright line reflected in the splashback is a glare of its own.",
            },
          ],
        ],
      },
      {
        h: "How should an island pendant be hung?",
        paragraphs: [
          [
            {
              text: "High enough that nobody walks into it, and low enough that it lights the top of the island rather than the ceiling. A linear piece follows the length of the island, not a photograph of someone else's kitchen. Measure the island and the ceiling first, and check the drop with the ",
            },
            { text: "size calculator", href: "/guides/chandelier-size-calculator" },
            { text: ". Put it on a dimmer, if the fitting supports one, for the hours when nobody is cooking and the kitchen is part of the living space." },
          ],
          [
            {
              text: "In many Kerala homes the kitchen opens onto the dining area. If so, the dining light and the kitchen light are planned together so the two ends of the room do not compete. The fixing for a heavier piece goes into the slab, not the false ceiling; the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: " explains why." },
          ],
        ],
      },
      {
        h: "Do I need separate lighting in a work area or second kitchen?",
        paragraphs: [
          [
            {
              text: "Many Kerala houses have a work area or a second kitchen behind the main one, where the heavy cooking happens. That space wants plain, bright task light over the stove and the counter, with fittings that can be wiped down. If it is semi-open to the outside, or the wash area is outdoors, treat the fittings as outdoor ones. The ",
            },
            { text: "IP rating guide", href: "/guides/ip-rating-for-outdoor-lights" },
            { text: " sets out which rating to ask for." },
          ],
        ],
      },
      {
        h: "Which kitchen light finishes survive steam and humidity?",
        paragraphs: [
          [
            {
              text: "A kitchen is wiped down, sees steam and oil, and on the Kerala coast it is humid for months. Untreated brass and bare iron mark, and open fittings collect grease. Choose closed or easily wiped fittings near the stove, and ask for the finish in writing. What fails first near the sea is in the ",
            },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: ". A brass piece, if that is the finish you want, is specified on the " },
            { text: "brass page", href: "/guides/brass-chandelier" },
            { text: ". Glass and acrylic clean differently from crystal; the comparison is in " },
            { text: "crystal, glass, and acrylic", href: "/guides/crystal-vs-glass-chandelier" },
            { text: ", and the cleaning routine is in " },
            { text: "how to clean a crystal chandelier", href: "/guides/how-to-clean-a-crystal-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "How should the dining area next to the kitchen be lit?",
        paragraphs: [
          [
            {
              text: "As its own space. In many Kerala homes the dining table sits between the kitchen and the living room, and it is where the family actually spends the evening. Hang a pendant or a small chandelier over the table, sized to the table rather than the room, on its own switch and ideally a dimmer. When the kitchen is closed for the night, the dining light carries the room; when people are cooking, the worktop light does the work and the dining light can stay low.",
            },
          ],
          [
            {
              text: "Keep the colour of light the same in the kitchen and the dining area, so food looks the same on the counter and on the plate. If the dining area also opens to the living room, plan the three together; the ",
            },
            { text: "living room guide", href: "/guides/chandelier-for-living-room" },
            { text: " covers the room beside it." },
          ],
        ],
      },
      {
        h: "Can a kitchen have a ceiling fan and pendants?",
        paragraphs: [
          [
            {
              text: "Yes, with care. A fan over the stove disturbs a gas flame, and a fan close to a pendant sets it swinging. Give the fan its own point away from both. The layouts are in ",
            },
            { text: "chandelier with a ceiling fan", href: "/guides/chandelier-with-ceiling-fan" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Should a kitchen pendant be ready-made or custom?",
        paragraphs: [
          [
            {
              text: "A pendant made to a standard island length, already in the range, is a shelf fitting from Celestial Lights. When the island is an unusual length, or the finish has to match the cabinets, send a picture and the measurements and Elor makes the piece. The process, with the timeline and what drives the cost, is on ",
            },
            { text: "custom chandeliers", href: "/customisation" },
            { text: "." },
          ],
          [
            {
              text: "If the kitchen is still being designed, decide the light with the cabinet drawings, because the strip under the wall cabinets needs wiring before the cabinets go up. ",
            },
            { text: "Book a lighting consultation", href: "/consultation" },
            { text: " and the kitchen is planned with the rest of the house; see " },
            { text: "home lighting design", href: "/guides/home-lighting-design" },
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
        a: "A task light on the worktop, on its own switch, a separate pendant or linear piece over the island or the table, and general light for the room. One fitting in the middle of the ceiling does all three badly.",
      },
      {
        q: "Why is my kitchen counter in shadow?",
        a: "The ceiling light is behind you, so your body blocks it. Put light in front of you, under the wall cabinets or close to the wall above the counter.",
      },
      {
        q: "How low should an island pendant hang?",
        a: "High enough that people do not walk into it, and low enough that it lights the top of the island. Measure the ceiling and the island before ordering from a picture.",
      },
      {
        q: "Will brass survive in a Kerala kitchen?",
        a: "Untreated brass marks in salt air and in steam. A sealed finish, specified for the room, is the condition. The coastal guide covers what fails first.",
      },
      {
        q: "Is the kitchen pendant custom?",
        a: "A standard length from the collection is at Celestial Lights. A piece made to the island is designed and built by Elor, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
      },
    ],
    published: "2026-10-05",
    modified: "2026-10-12",
  },
  {
    slug: "wooden-chandelier",
    metaTitle: "Wooden Chandelier for Kerala Homes: Timber, Finish, Fixing",
    description:
      "How to choose a wooden chandelier for a Kerala home: match it to the joinery, ask how timber and finish are specified for humidity, and fix it to the slab.",
    crumb: "Wooden Chandelier",
    eyebrow: "Buying guide",
    h1: "Wood, where the",
    h1Em: "air allows it.",
    lede: [
      {
        text: "Choose a wooden chandelier for a Kerala home by deciding the room first, then the timber and its finish, then the shape. Ask the maker which timber and finish are used and whether they are meant for a humid room. Size it to the furniture, keep it clear of the fan, and fix it to the slab, not the false ceiling.",
      },
    ],
    image: "/lifestyle/store-wall.jpg",
    imageAlt: "The Celestial Lights wall, with mosaic pendants and crystal cascades on display",
    sections: [
      {
        h: "Why choose a wooden chandelier?",
        paragraphs: [
          [
            {
              text: "Because it belongs with the rest of the house. Kerala homes are full of timber: doors, window frames, ceilings, staircases, and in traditional houses whole verandas and courtyards. A wooden chandelier can pick up that joinery instead of competing with it. It gives a warmer, quieter light than crystal, and it reads as part of the architecture rather than an object hung in the middle of the room.",
            },
          ],
          [
            {
              text: "It is a material decision before it is a shape. Choose the room and the timber first, then the design.",
            },
          ],
        ],
      },
      {
        h: "Which rooms suit a wooden chandelier?",
        paragraphs: [
          [
            {
              text: "Rooms where the timber already is. A dining room with a wooden table and a timber ceiling, a living room with wooden joinery, a bedroom with a carved headboard, or a stair with a wooden handrail are natural places. A modern apartment with white walls and gypsum ceilings can also take one, as a single warm object. The living room is covered in ",
            },
            { text: "chandelier for a living room", href: "/guides/chandelier-for-living-room" },
            { text: " and the bedroom in " },
            { text: "bedroom lighting", href: "/guides/bedroom-lighting-design" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Does a wooden chandelier suit a traditional Kerala house?",
        paragraphs: [
          [
            {
              text: "Often better than crystal does. In a nalukettu or a house built around a central courtyard, a timber piece in the same tone as the rafters or the pillars looks as if it was always there. The care is with the air: a courtyard open to the rain brings damp right into the rooms around it, so ask how the piece is finished for that before choosing it. For a heritage house, keep the light warm and low, so the timber of the room glows rather than the fitting. Colour of light is covered in ",
            },
            { text: "Kelvin, CRI, and beam", href: "/guides/colour-of-light" },
            { text: "." },
          ],
        ],
      },
      {
        h: "What should I ask about timber and humidity?",
        paragraphs: [
          [
            {
              text: "Ask which timber is used, how it is finished, and whether that finish is specified for a humid room. A finish chosen for the room is part of the piece, not a coat added later. Say which room the piece is for, and whether it is near a bathroom, a kitchen, an open window, or a courtyard. Near the coast, ask about the metal parts too, the brackets, chains, and screws, because those are often what show wear first. The ",
            },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: " covers what to ask for near the sea." },
          ],
          [
            {
              text: "If the room is damp for much of the year, compare wood with the alternatives before deciding. Crystal, glass, and sealed metal are the usual ones; the comparison is in ",
            },
            { text: "crystal, glass, and acrylic", href: "/guides/crystal-vs-glass-chandelier" },
            { text: " and the " },
            { text: "brass guide", href: "/guides/brass-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "How should a wooden chandelier be lit and switched?",
        paragraphs: [
          [
            {
              text: "On its own switch, with a dimmer if the fitting and the lamps support one. Many wooden designs throw light through slats, cut-outs, or woven panels, so they draw patterns on the ceiling and walls. Look at the piece lit in a dark room before choosing it, because the shadows are part of the design. Keep the lamps warm, so the timber reads as wood and not as grey. If the piece is the only light in the room, it will be either too bright to look at or too dim to use; the cove and spots carry the room, and the chandelier sits on top. How those layers are set out is in ",
            },
            { text: "how a lighting plan is built", href: "/guides/how-a-lighting-plan-is-built" },
            { text: "." },
          ],
        ],
      },
      {
        h: "What size wooden chandelier do I need?",
        paragraphs: [
          [
            {
              text: "The same as any chandelier: size it to the furniture and the ceiling, not the whole room. Over a dining table, the piece follows the table. Over seating, it follows the seating group. Timber pieces often look heavier than metal ones of the same size, so when in doubt, go slightly smaller. In a double-height void, the piece is seen from the stair and the upper landing as well as from below, so judge it from above too. ",
            },
            { text: "The size calculator", href: "/guides/chandelier-size-calculator" },
            { text: " turns the room into a diameter and a drop." },
          ],
        ],
      },
      {
        h: "Can a false ceiling hold a wooden chandelier?",
        paragraphs: [
          [
            {
              text: "No. A timber frame can be heavier than it looks, and gypsum and POP do not carry a chandelier of any material. The anchor goes into the slab before the ceiling closes. That sequence is in the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: ", and how the ceiling and its circuits are laid out is in " },
            { text: "ceiling and lighting design", href: "/guides/ceiling-and-lighting-design" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Can a wooden chandelier hang near a ceiling fan?",
        paragraphs: [
          [
            {
              text: "Not on the same point, and not close. Most Kerala rooms run a fan for much of the year. Give the fan and the chandelier separate points far enough apart that the blades never reach the piece and the moving air does not set it swaying. The layouts are in ",
            },
            { text: "chandelier with a ceiling fan", href: "/guides/chandelier-with-ceiling-fan" },
            { text: "." },
          ],
        ],
      },
      {
        h: "How do I clean a wooden chandelier?",
        paragraphs: [
          [
            {
              text: "With the power off at the breaker and a dry, soft cloth or brush. Ask the maker what the finish tolerates before using anything else on it, and keep water away from the lamp holders and the wiring. If the piece has glass or crystal parts, those are cleaned as in ",
            },
            { text: "how to clean a crystal chandelier", href: "/guides/how-to-clean-a-crystal-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Should a wooden chandelier be ready-made or custom?",
        paragraphs: [
          [
            {
              text: "Celestial Lights carries ready fittings for every room; if a wooden piece in the collection fits the room, the size, and the climate, it is a shelf fitting. When the span, the timber, or the finish has to match the joinery, send a photograph of the joinery and the measurements, and Elor designs and makes the piece. The process, timeline, and what drives the cost are on ",
            },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ". If the house is still being built, " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " and the piece is planned with the rest of the house; see " },
            { text: "home lighting design", href: "/guides/home-lighting-design" },
            { text: "." },
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
        q: "Does a wooden chandelier suit a nalukettu or traditional house?",
        a: "Often, because it can match the rafters and pillars. Ask how it is finished for damp air if the room opens onto a courtyard, and keep the light warm and low.",
      },
      {
        q: "Do you have wooden chandeliers on the shelf?",
        a: "Whatever wood is in the current collection is at Celestial Lights. See the range and we will say what is actually there. The shop site is still being built.",
      },
      {
        q: "Can you make a wooden piece to match the furniture?",
        a: "Yes. Send the timber, the span, and a photograph of the joinery. Elor designs and makes that piece, usually in 3 to 6 weeks. We install custom lights and give installation support for everything else.",
      },
      {
        q: "Does the ceiling hold a timber frame?",
        a: "The false ceiling does not. The anchor is in the slab, marked before the gypsum closes. Weight is covered in the false-ceiling guide.",
      },
    ],
    published: "2026-10-05",
    modified: "2026-10-12",
  },
  {
    slug: "brass-chandelier",
    metaTitle: "Brass Chandelier for Kerala Homes: Finish, Size, Fixing",
    description:
      "How to choose a brass chandelier for a Kerala home: solid, plated or painted, a finish specified for humidity, sized to the furniture and fixed to the slab.",
    crumb: "Brass Chandelier",
    eyebrow: "Buying guide",
    h1: "Brass has to survive",
    h1Em: "the air it hangs in.",
    lede: [
      {
        text: "Choose a brass chandelier for a Kerala home by first asking what it actually is: solid brass, brass-plated, or a gold-coloured coat. Then specify the finish for the room, especially near the coast, a kitchen, or a courtyard. Size it to the furniture and the ceiling, keep it clear of the fan, and fix it to the slab.",
      },
    ],
    image: "/collections/dandelion-gold.jpg",
    imageAlt: "A brass-coloured sputnik chandelier with frosted glass globes",
    sections: [
      {
        h: "Why choose a brass chandelier?",
        paragraphs: [
          [
            {
              text: "Brass is familiar in a Kerala home. It is the metal of the nilavilakku, the temple lamp, and the old door fittings, so a brass chandelier can feel at home in a traditional house as easily as in a modern one. It suits warm light, works with timber and with white walls, and comes in shapes from classic arms to modern sputnik and linear designs.",
            },
          ],
        ],
      },
      {
        h: "Is it solid brass, plated, or a gold-coloured finish?",
        paragraphs: [
          [
            {
              text: "Ask before anything else, because they are different products. Solid brass is the metal all the way through. Brass plate is a thin brass layer over another metal. A gold-coloured coat is paint or powder coat that looks like brass. Each looks different up close, weighs differently, and behaves differently over the years. The specification, or the bill, should name which one you are buying or having made.",
            },
          ],
        ],
      },
      {
        h: "Which finish should a brass chandelier have?",
        paragraphs: [
          [
            {
              text: "Pick one and write it down: a lacquered finish, a plated coat, or a living finish that is allowed to change. Say which room the piece is for, and whether it is near the sea, a kitchen, a bathroom, or an open courtyard, so the finish can be chosen for that room rather than for a dry showroom. A kitchen and a coastal veranda are harder on any metal than a closed living room. What to ask for near the sea is in the ",
            },
            { text: "coastal guide", href: "/guides/coastal-lighting-kerala" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Which rooms suit a brass chandelier?",
        paragraphs: [
          [
            {
              text: "Living and dining rooms, a double-height entrance, a pooja area where brass is already the language, and bedrooms where a small piece adds warmth. In a kitchen, think about steam and grease before choosing an open brass design; see ",
            },
            { text: "kitchen lighting", href: "/guides/kitchen-lighting-design" },
            { text: ". For a double-height void, the clearances from the stair and the handrail are in " },
            { text: "staircase lighting", href: "/guides/staircase-lighting-design" },
            { text: ". If the room is mostly timber and you want the light to disappear into it, compare the " },
            { text: "wooden chandelier guide", href: "/guides/wooden-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Does a brass chandelier suit a pooja room?",
        paragraphs: [
          [
            {
              text: "It can, because brass is already the material of the lamps and vessels in most pooja rooms. Keep the piece small and the light warm and low, so it supports the lamp rather than outshining it. Many families prefer the pooja area lit softly from the side or the ceiling edge, with no fitting directly above the idols; ask the family what they want before placing anything. Smoke and oil from the lamp settle on any fitting nearby, so choose a design that is easy to reach and wipe.",
            },
          ],
        ],
      },
      {
        h: "How should brass sit with the other metals in a room?",
        paragraphs: [
          [
            {
              text: "Decide the room's metal once. Brass next to chrome taps, steel handles, and black window frames can look accidental. Either let the brass chandelier be the one warm metal in a cool room, on purpose, or carry brass into a few other details, such as door handles, a mirror frame, or switch plates, so it reads as a choice. The same applies to tone: a polished brass chandelier and an antique-finish wall light in the same room rarely look like a pair. Bring a photo of the room, or a sample of the other finishes, when choosing. If the room also has wooden joinery, look at the brass against that timber in daylight and in the evening, because both change with the light.",
            },
          ],
        ],
      },
      {
        h: "What colour of light suits brass?",
        paragraphs: [
          [
            {
              text: "Warm light flatters brass and the room around it; a cold white lamp makes it look flat and greenish. Agree the colour temperature once for the room, so the brass piece and the cove and spots match. If the piece has glass shades, the glass changes the light too, so look at it lit before deciding. The numbers to agree are in ",
            },
            { text: "Kelvin, CRI, and beam", href: "/guides/colour-of-light" },
            { text: ", and the glass options are compared in " },
            { text: "crystal, glass, and acrylic", href: "/guides/crystal-vs-glass-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "What size brass chandelier do I need?",
        paragraphs: [
          [
            {
              text: "Size it to the furniture and the ceiling, not the whole room: the seating group in a living room, the table in a dining room. ",
            },
            { text: "The size calculator", href: "/guides/chandelier-size-calculator" },
            { text: " turns those measurements into a diameter and a drop. Measure before ordering from a photograph, because a photograph never shows the ceiling height it was taken under." },
          ],
        ],
      },
      {
        h: "Can a false ceiling hold a brass chandelier?",
        paragraphs: [
          [
            {
              text: "No. Brass frames carry real weight, and gypsum and POP do not carry a chandelier. The anchor goes into the slab before the ceiling closes, as set out in the ",
            },
            { text: "false-ceiling guide", href: "/guides/false-ceiling-chandelier-weight" },
            { text: ". Plan the fan on its own point, well away from the piece; the layouts are in " },
            { text: "chandelier with a ceiling fan", href: "/guides/chandelier-with-ceiling-fan" },
            { text: "." },
          ],
        ],
      },
      {
        h: "How do I clean a brass chandelier?",
        paragraphs: [
          [
            {
              text: "With the power off at the breaker and a dry, soft cloth. Ask the maker what the finish tolerates before using any polish or cleaner, because a polish meant for bare brass can strip a lacquer or a plated coat. Keep liquid away from the lamp holders and the wiring. Glass or crystal parts are cleaned as in ",
            },
            { text: "how to clean a crystal chandelier", href: "/guides/how-to-clean-a-crystal-chandelier" },
            { text: "." },
          ],
        ],
      },
      {
        h: "Should a brass chandelier be ready-made or custom?",
        paragraphs: [
          [
            {
              text: "Celestial Lights carries ready fittings for every room; if a brass or brass-coloured piece in the collection fits the room and the finish you need, it is a shelf fitting. When you need a diameter, a finish, or a drawing the collection does not have, send the diameter, the finish, and the ceiling height, and Elor makes the piece. The process, timeline, and what drives the cost are on ",
            },
            { text: "custom chandeliers", href: "/customisation" },
            { text: ", and budgeting is in the " },
            { text: "pricing guide", href: "/guides/chandelier-pricing-guide" },
            { text: ". If the house is still being built, " },
            { text: "book a lighting consultation", href: "/consultation" },
            { text: " and the piece is planned with the rest of the house." },
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
        q: "Can I polish a brass chandelier?",
        a: "Only with what the finish allows. A polish for bare brass can strip a lacquer or a plated coat. Ask the maker, and clean with a dry cloth with the power off.",
      },
      {
        q: "Where do I see brass fittings?",
        a: "Shelf pieces are at Celestial Lights. See the range and we send what is in the collection. The online shop is still being built.",
      },
      {
        q: "Can Elor make a brass piece to a drawing?",
        a: "Yes. Send the diameter, the finish, and the ceiling height. Custom work is usually 3 to 6 weeks. We install custom lights and give installation support for everything else. Warranty is up to 5 years.",
      },
    ],
    published: "2026-10-05",
    modified: "2026-10-12",
  },
  {
    slug: "how-to-clean-a-crystal-chandelier",
    metaTitle: "How to Clean a Crystal Chandelier",
    description:
      "Clean a crystal chandelier with the power off, a cloth-and-glove wipe in place, and the drops washed by hand only when they are dull. Steps for Kerala homes.",
    crumb: "How to Clean a Crystal Chandelier",
    eyebrow: "How-to",
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
        { h: "Switch off at the breaker", p: "Turn the circuit off at the distribution board, as well as at the wall switch, and let the lamps cool." },
        { h: "Photograph the piece", p: "Take photos from below and from the side so every drop and strand goes back where it came from." },
        { h: "Set up below it", p: "Lay a folded towel or a padded sheet under the chandelier. Use a stable platform, and have a second person hold it for anything high." },
        { h: "Wipe each drop in place", p: "Wear cotton gloves. Hold each drop with one hand and wipe it with a dry lint-free cloth in the other, working round one tier at a time." },
        { h: "Hand-wash only the dull drops", p: "If a drop stays hazy, unhook it, wash it by hand in a bowl of lukewarm water with a little mild dish soap, rinse, and dry it with a lint-free cloth. Do one tier at a time so the layout is not lost." },
        { h: "Dust the frame and holders", p: "Wipe the frame with a dry cloth. Keep water away from the lamp holders and the canopy." },
        { h: "Rehang, dry, then power on", p: "Hang the drops back using the photos. Wait until every piece and holder is fully dry before switching the breaker back on." },
      ],
    },
    shelf:
      "A crystal piece that already exists in the collection is a shelf fitting at Celestial Lights.",
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
        q: "Who should clean a chandelier hung high?",
        a: "If nobody can reach it from a stable platform with a second person holding it, do not use a household ladder. Ask whoever installed it how the piece comes down safely.",
      },
    ],
    published: "2026-10-12",
    modified: "2026-10-12",
  },
  {
    slug: "ip-rating-for-outdoor-lights",
    metaTitle: "IP Rating for Outdoor Lights in Kerala",
    description:
      "What IP rating outdoor lights need: IP44 for a covered sit-out, IP65 for rain-exposed walls, IP66/67 for poolside and ground-recessed. With Kerala examples.",
    crumb: "IP Rating for Outdoor Lights",
    eyebrow: "Technical",
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
        { h: "Add finish and fixings near the coast", p: "On the coast, specify a corrosion-resistant body, finish, and stainless fixings as well as the IP number." },
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
