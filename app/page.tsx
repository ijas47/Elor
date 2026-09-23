import Image from "next/image";
import Link from "next/link";
import { site, stores } from "@/lib/site";
import { pieces } from "@/lib/collections";
import { testimonials } from "@/lib/testimonials";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ShowroomReel } from "@/components/sections/ShowroomReel";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { PieceCard } from "@/components/ui/PieceCard";
import { Icon } from "@/components/ui/Icon";

const spaces = [
  // Living-room photograph is Pexels 7166647 (Max Vakhtbovych), free to use.
  // It shows a kind of room, not an Elor project. Swap it when the owners send theirs.
  { title: "Living Room", note: "Chandelier, cove and a lamp in the corner", img: "/spaces/living.jpg", alt: "A living room lit in layers: a chandelier, cove light in the ceiling, and a lamp beside the sofa", href: "/collections#chandeliers" },
  { title: "Stairwells & Voids", note: "Cascades & double-height pieces", img: "/collections/staircase-cascade.jpg", alt: "A red crystal cascade falling beside a dark spiral staircase", href: "/collections#chandeliers" },
  { title: "Outdoor & Facade", note: "Wall washers, lanterns & bollards", img: "/spaces/outdoor.jpg", alt: "A building facade at night with its terraces outlined in warm cove lighting", href: "/collections#outdoor" },
  { title: "Commercial", note: "Retail, hospitality & office", img: "/lifestyle/lobby-canopy.jpg", alt: "A bright lobby under a large black sculptural chandelier", href: "/#commercial" },
];

// autumn-leaves is the hero scene now, so the edit promotes crystal-petal instead
const featured = ["asgard-crystal-chandelier", "abstract-five-ring", "dandelion-gold", "crystal-petal"]
  .map((s) => pieces.find((p) => p.slug === s)!)
  .filter(Boolean);

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Trust */}
      <div className="trust">
        <div className="trust-inner">
          <div className="trust-item"><span className="trust-num">DIALux</span><span className="trust-label">The plan is calculated<br />before the ceiling closes</span></div>
          <div className="trust-item"><span className="trust-num">Factory</span><span className="trust-label">Custom chandeliers<br />made by us</span></div>
          <div className="trust-item"><span className="trust-num">Range</span><span className="trust-label">Basic fittings<br />to luxury pieces</span></div>
          <div className="trust-item"><span className="trust-num">3</span><span className="trust-label">Experience centres<br />Kannur, Calicut, Kochi</span></div>
        </div>
      </div>

      {/* Shop by space */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">For architects and owners building now</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">Start with<br />the room.</h2></Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="lede">The ceiling is about to close, and nobody has decided how the room should feel at night. Send the drawing or the picture. We write the plan, supply what we already make, and build what the room still needs.</p>
            </Reveal>
          </div>
          <Stagger className="spaces">
            {spaces.map((s) => (
              <StaggerItem key={s.title}>
                <Link className="space-card" href={s.href}>
                  <Image src={s.img} alt={s.alt} width={520} height={650} />
                  <div className="space-info">
                    <h3>{s.title}</h3>
                    <p>{s.note}</p>
                  </div>
                  <span className="space-go" aria-hidden>→</span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured collection */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">The Elor edit</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">Made for a ceiling,<br />not a shelf.</h2></Reveal>
            </div>
            <Reveal delay={0.12}>
              <MagneticButton href="/collections" variant="ghost">
                View the Collection <span className="arr">→</span>
              </MagneticButton>
            </Reveal>
          </div>
          <Stagger className="collection-grid">
            {featured.map((p) => (
              <StaggerItem key={p.slug}>
                <PieceCard piece={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Customisation band */}
      <section className="sec glow-top" id="custom">
        <div className="wrap">
          <div className="split">
            <div>
              <Reveal as="span"><span className="eyebrow">Custom chandeliers · Our specialty</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 18 }}>Send us a picture.<br /><span className="serif-i">We build the light.</span></h2></Reveal>
              <Reveal delay={0.12}>
                <p className="lede" style={{ marginTop: 22 }}>A Pinterest screenshot, a photo from a hotel lobby, a page torn from a magazine, even a rough sketch. If you can show it to us, we make it, sized to your ceiling, finished to match your interiors.</p>
              </Reveal>
              <Reveal delay={0.16}>
                <ul className="check-list">
                  <li><span className="tick">✓</span>Chandeliers, cascades, cluster pendants and statement ceiling pieces, built to order</li>
                  <li><span className="tick">✓</span>Any reference welcome: an image, a drawing, a render, or a fixture you can&rsquo;t find anywhere</li>
                  <li><span className="tick">✓</span>Made to your exact drop and diameter, so it fits the void it was designed for</li>
                  <li><span className="tick">✓</span>One piece, made once. Nobody else in your city has the same light</li>
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="cta-ctas" style={{ justifyContent: "flex-start" }}>
                  <MagneticButton href="/customisation" variant="gold">Start a Custom Piece <span className="arr">→</span></MagneticButton>
                  <MagneticButton href="/customisation#brief" variant="ghost">Send a Reference</MagneticButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="split-media frame">
              <Image src="/collections/staircase-cascade.jpg" alt="A red crystal cascade built to fall the height of a spiral stair" fill sizes="(max-width: 1020px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* For architects */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">For architects & interior designers</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">When the fixture in<br />your render doesn&rsquo;t exist.</h2></Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="lede">You specified a piece no showroom stocks. The client has signed off on it. Then someone suggests the nearest thing in a catalogue, and the room loses its centre. Send the drawing. We make that piece, and we supply the rest of the schedule so you are not chasing three other shops.</p>
            </Reveal>
          </div>
          <Stagger className="pillars">
            {[
              { icon: "render", h: "Work from the render", p: "Send the visual you presented to your client. We reverse-engineer it into a buildable fixture, confirm load and drop against your section, and quote before you commit.", eg: "Render · Elevation · Mood image" },
              { icon: "drawing", h: "Protect the design intent", p: "No more substituting the nearest catalogue item and watching the scheme lose its centrepiece. It gets built the way it was drawn, at the scale the space needs.", eg: "Made to drawing · No substitutions" },
              { icon: "supplier", h: "One accountable supplier", p: "Design, fabrication, delivery and installation sit with us. Your client has one number to call, and you are not left coordinating a fixture that arrived in pieces.", eg: "Single point · Site coordination" },
            ].map((c) => (
              <StaggerItem key={c.h}>
                <div className="pillar">
                  <div className="pillar-ico"><Icon name={c.icon as "render"} /></div>
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                  <p className="pillar-eg">{c.eg}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <MagneticButton href="/customisation#brief" variant="gold">Send Us a Reference <span className="arr">→</span></MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Selected work */}
      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal delay={0.06}><h2 className="h-lg">The room, then<br />the <span className="serif-i">light.</span></h2></Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="lede">A stairwell, a lobby, a facade. The fixture is there to give the room a character, not to fill a catalogue page. Project photographs from our own sites are on the way. Until then, send the picture of yours.</p>
            </Reveal>
          </div>
          <Stagger className="work-grid">
            {[
              { src: "/work/w1-cascade.jpg", tall: true, h: "Stairwell void", p: "A cascade for the full height of the stair", alt: "A glass cascade falling past a tall stairwell window" },
              { src: "/work/w2-corridor.jpg", tall: false, h: "Lift lobby", p: "Cove, downlights and a feature ceiling", alt: "A lift lobby with a wide crystal ceiling fixture and backlit panels" },
              { src: "/work/w3-showroom.jpg", tall: true, h: "Showroom floor", p: "A grand piece, seen switched on", alt: "A large multi-tier crystal chandelier lit on a showroom floor" },
              { src: "/work/w4-lounge.jpg", tall: false, h: "Reception", p: "Warm light over the seating", alt: "A reception lounge lit by warm cove lighting and a crystal ceiling" },
              { src: "/work/w5-garden.jpg", tall: true, h: "The approach", p: "Path, trees and the facade, as one scheme", alt: "A villa lawn at night lit by bollards and tree uplights" },
            ].map((w) => (
              <StaggerItem key={w.src} className={w.tall ? "work-item work-tall" : "work-item"}>
                <figure className="work-fig frame">
                  <Image src={w.src} alt={w.alt} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  <figcaption className="work-cap">
                    <strong>{w.h}</strong>
                    <span>{w.p}</span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Showroom reel */}
      <section className="sec glow-top">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">Inside Celestial Lights</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">Our showroom,<br /><span className="serif-i">in motion.</span></h2></Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="lede">Photographs freeze light. These don&rsquo;t. A few moments from the Celestial Lights floor, where every fixture hangs lit, so you see how it moves and glows long before it reaches your ceiling.</p>
            </Reveal>
          </div>
          <ShowroomReel />
        </div>
      </section>

      {/* Layered light education */}
      <section className="sec on-pearl">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">How we plan a room</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">Every room needs<br />three layers of light.</h2></Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="lede">Ambient to fill it, task to work in it, accent to give it depth. Miss a layer and the room falls flat however good the fixture is, which is why we specify all three together rather than picking lights one at a time.</p>
            </Reveal>
          </div>
          <Stagger className="pillars">
            {[
              { icon: "ambient", h: "Ambient light", p: "The base layer that fills the room: ceiling lights, cove strips, diffused pendants. It decides whether a space feels welcoming or clinical the moment you walk in.", eg: "Ceiling · Cove LED · Diffusers" },
              { icon: "task", h: "Task light", p: "Focused light where life happens: the kitchen counter, the reading chair, the mirror, the desk. Bright enough to work by, placed so it never glares.", eg: "Table lamps · Under-cabinet · Mirror" },
              { icon: "accent", h: "Accent light", p: "The drama. Wall washers on texture, spots on art, a glow behind the panel, bollards along the path. Accent light is what makes people say wow.", eg: "Wall washers · Spots · Facade" },
            ].map((c) => (
              <StaggerItem key={c.h}>
                <div className="pillar" style={{ background: "#fff", borderColor: "var(--line-pearl)" }}>
                  <div className="pillar-ico" style={{ color: "var(--caramel)" }}><Icon name={c.icon as "ambient"} /></div>
                  <h3>{c.h}</h3>
                  <p style={{ color: "var(--on-pearl-dim)" }}>{c.p}</p>
                  <p className="pillar-eg" style={{ borderColor: "var(--line-pearl)", color: "var(--caramel)" }}>{c.eg}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* The deliverable */}
      <section className="sec" style={{ background: "var(--ink)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal><h2 className="h-lg">What a lighting plan<br />actually <span className="serif-i">contains.</span></h2></Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="lede">Not a quotation with fixture names on it. The scheme is modelled in DIALux first, so the light levels are known while the ceiling can still change. Then your architect, contractor and electrician get a drawing set they can build from.</p>
            </Reveal>
          </div>
          <Stagger className="register">
            {[
              { h: "DIALux calculation", p: "Lux levels, distribution and a false-colour view of each room. This is how we check the room is actually lit the way the drawing promises, before conduit is laid." },
              { h: "Reflected ceiling plan", p: "Every fixture marked in position on your floor plan, with drop heights and beam directions. The document the site works from." },
              { h: "Circuit and switching layout", p: "What comes on with which switch, which groups dim, where the drivers sit. Decided at drawing stage, not argued about on site." },
              { h: "Fixture schedule", p: "Every light listed with code, finish, lamp type, colour temperature and wattage, so the specification survives handover to anyone else." },
              { h: "Layer breakdown per room", p: "Ambient, task and accent shown separately, so you can see what the room does at dinner and what it does at midnight." },
              { h: "Custom drawings", p: "For anything made to measure: scaled elevations, glass and finish samples, and a firm price before we cut a single part." },
              { h: "Night walkthrough", p: "We come back after install, aim the spots, set the scenes, and adjust with you in the dark. That is when a scheme is actually finished." },
            ].map((s) => (
              <StaggerItem key={s.h} className="register-row">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Consultation split */}
      <section className="sec" id="consult">
        <div className="wrap">
          <div className="split reverse">
            <Reveal className="split-media frame">
              <Image src="/lifestyle/hero-4.jpg" alt="A finished lounge lit end to end, a crystal ceiling fixture over warm layered lighting" fill sizes="(max-width: 1020px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </Reveal>
            <div>
              <Reveal as="span"><span className="eyebrow">Consultation & implementation</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 18 }}>You dream it. We light it. <span className="serif-i">End to end.</span></h2></Reveal>
              <Reveal delay={0.12}>
                <ul className="check-list">
                  <li><span className="tick">✓</span>A lighting designer studies your floor plan, interiors and how you use each room</li>
                  <li><span className="tick">✓</span>You get a fixture-by-fixture plan: positions, colour temperature and dimming zones</li>
                  <li><span className="tick">✓</span>Everything supplied from Elor&rsquo;s own range, so quality and pricing stay in our control</li>
                  <li><span className="tick">✓</span>Our crew installs, aims and tunes every light, then hands you one warranty for all of it</li>
                </ul>
              </Reveal>
              <Reveal delay={0.16}>
                <MagneticButton href="/consultation" variant="gold">Start Your Lighting Plan <span className="arr">→</span></MagneticButton>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="sec glow-top">
        <div className="wrap">
          <Reveal><h2 className="h-lg" style={{ textAlign: "center", marginBottom: 64 }}>How it <span className="serif-i">works</span></h2></Reveal>
          <Stagger className="journey">
            {[
              { h: "Consult", p: "Free first session at your site, in any store, or on a video call. We listen before we recommend." },
              { h: "Design", p: "A tailored lighting plan with layouts, moods, fixture selections and a transparent estimate." },
              { h: "Supply", p: "Fixtures from our own inventory. See them glowing in-store before you commit. Delivered pan-India." },
              { h: "Install", p: "Certified electricians install and fine-tune. One point of contact, one warranty, zero blame games." },
            ].map((s) => (
              <StaggerItem key={s.h}>
                <div className="j-step"><h3>{s.h}</h3><p>{s.p}</p></div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Commercial */}
      <section className="sec" id="commercial" style={{ background: "var(--ink)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="split">
            <div>
              <Reveal as="span"><span className="eyebrow">For business spaces</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 18 }}>Lighting that earns<br />its keep.</h2></Reveal>
              <Reveal delay={0.12}>
                <p className="lede" style={{ marginTop: 22 }}>In a café, a boutique or a lobby, lighting is a revenue decision. It sets how long people stay and how good your product looks. We partner with architects, builders and owners across India to deliver on schedule and on spec.</p>
              </Reveal>
              <Reveal delay={0.16}>
                <ul className="check-list">
                  <li><span className="tick">✓</span>Restaurants, cafés & hotels: mood-driven dining and facade lighting</li>
                  <li><span className="tick">✓</span>Retail & showrooms: display lighting that flatters the merchandise</li>
                  <li><span className="tick">✓</span>Offices & clinics: glare-free, energy-efficient working light</li>
                  <li><span className="tick">✓</span>Project pricing, site coordination and phased delivery for builders</li>
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <MagneticButton href="/consultation#form" variant="gold">Discuss Your Project <span className="arr">→</span></MagneticButton>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="split-media frame">
              <Image src="/lifestyle/lobby-canopy.jpg" alt="A bright lobby under a large black sculptural chandelier" fill sizes="(max-width: 1020px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stores preview */}
      <section className="sec on-pearl" id="stores">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">See it before you specify it</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">Stand under it<br />before you <span className="serif-i">sign off.</span></h2></Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="lede">Celestial has stores and experience centres in Kannur and Calicut. Kochi is the full experience centre. The range runs from basic fittings to the luxury pieces, and the custom work is made in our factory. The online store is being built. Until it opens, come in, or send the plan.</p>
            </Reveal>
          </div>
          <Stagger className="stores-grid">
            {stores.map((s) => (
              <StaggerItem key={s.city}>
                <div className="store-card" style={{ background: "#fff", borderColor: "var(--line-pearl)" }}>
                  <div className="store-city" style={{ color: "var(--on-pearl)" }}>{s.city}</div>
                  <div className="store-brand" style={{ color: "var(--caramel)" }}>{s.brand} · {s.kind}</div>
                  <p style={{ color: "var(--on-pearl-dim)" }}><span className="store-k">Address</span>{s.address}</p>
                  <p style={{ color: "var(--on-pearl-dim)" }}><span className="store-k">Hours</span>{s.hours}</p>
                  <p style={{ color: "var(--on-pearl-dim)" }}><span className="store-k">Phone</span>{s.phone}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <div className="online-banner" style={{ background: "var(--on-pearl)", borderColor: "transparent", marginTop: 24 }}>
              <div>
                <h3 style={{ color: "#fff" }}>Building outside Kerala?</h3>
                <p>Send the drawings. We consult on the plan over video, and the online store for the range is on the way. Until it opens, we will walk you through what to specify.</p>
              </div>
              <a className="btn btn-gold" href={site.shopUrl} target="_blank" rel="noopener noreferrer">{site.shopCta} <span className="arr">→</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="stack-sm">
              <Reveal as="span"><span className="eyebrow">Word of mouth</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg">Rooms we&rsquo;ve<br />transformed</h2></Reveal>
            </div>
          </div>
          <Stagger className="quote-grid">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="quote-card">
                  <span className="quote-mark">&ldquo;</span>
                  <blockquote>{t.quote}</blockquote>
                  <div className="quote-who">
                    <span className="quote-av">{t.initial}</span>
                    <div><div className="quote-name">{t.name}</div><div className="quote-role">{t.role}</div></div>
                  </div>
                  <div className="stars">★★★★★</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap-tight">
          <Reveal as="span"><span className="eyebrow center">Free · No obligation</span></Reveal>
          <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 18 }}>Your space is one plan away<br />from feeling <span className="serif-i">extraordinary.</span></h2></Reveal>
          <Reveal delay={0.12}><p className="lede" style={{ textAlign: "center" }}>Book a consultation at home, in-store, or over video. If you just want to browse, the collection is always open.</p></Reveal>
          <Reveal delay={0.16}>
            <div className="cta-ctas">
              <MagneticButton href="/consultation" variant="gold">Book a Free Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/collections" variant="ghost">View the Collection</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
