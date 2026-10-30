import Image from "next/image";
import Link from "next/link";
import { site, stores } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ShowroomReel } from "@/components/sections/ShowroomReel";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { GuideLinks } from "@/components/ui/GuideLinks";

const spaces = [
  { title: "Living Room", note: "Chandelier, cove and a lamp in the corner", img: "/spaces/corner-pendant.jpg", alt: "A warm living corner with a pleated pendant and a wash of light on the wall", href: "/guides/chandelier-for-living-room" },
  { title: "Stairwells & Voids", note: "Cascades & double-height pieces", img: "/collections/staircase-cascade.jpg", alt: "A red crystal cascade falling beside a dark spiral staircase", href: "/guides/staircase-lighting-design" },
  { title: "Outdoor & Facade", note: "Wall washers, lanterns & bollards", img: "/spaces/outdoor.jpg", alt: "A building facade at night with its terraces outlined in warm cove lighting", href: "/customisation" },
  { title: "Commercial", note: "Retail, hospitality & office", img: "/lifestyle/lobby-canopy.jpg", alt: "A black sculptural chandelier in a bright lobby", href: "/#commercial" },
];

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
              <p className="lede">Send the drawing, or a photo of the room. We write the plan in DIALux while the ceiling can still change, then supply the fittings and build what that room still needs. We install custom lights and give installation support for everything else. Centres in Kannur, Calicut and Kochi. The site can be anywhere in India. <Link href="/india">If you are building outside Kerala.</Link></p>
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

      {/* Customisation band */}
      <section className="sec glow-top" id="custom">
        <div className="wrap">
          <div className="split">
            <div>
              <Reveal as="span"><span className="eyebrow">Custom chandeliers · Our specialty</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 18 }}>Send us a picture.<br /><span className="serif-i">We build the light.</span></h2></Reveal>
              <Reveal delay={0.12}>
                <p className="lede" style={{ marginTop: 22 }}>A photo, a render, or a sketch is enough to start. We still measure the ceiling before we cut anything. Most custom pieces are made and installed in 3 to 6 weeks after the brief is agreed.</p>
              </Reveal>
              <Reveal delay={0.16}>
                <ul className="check-list">
                  <li><span className="tick">✓</span>Chandeliers, cascades and cluster pendants, sized to the drop and diameter of your ceiling</li>
                  <li><span className="tick">✓</span>A firm price before we build</li>
                  <li><span className="tick">✓</span>We install custom lights and give installation support for everything else.</li>
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
              <p className="lede">The client has signed the render. The showroom does not stock that fitting. Send the drawing. We make the piece, and we can supply the rest of the schedule from the same place.</p>
            </Reveal>
          </div>
          <Stagger className="pillars">
            {[
              { icon: "render", h: "Work from the render", p: "Send the visual the client signed. We turn it into a fixture, check the load and the drop against your section, and quote before you commit.", eg: "Render · Elevation · Mood image" },
              { icon: "drawing", h: "Built to the drawing", p: "The piece is made at the size the section shows. If the span or the finish does not exist yet, that is a normal brief.", eg: "Drop · Diameter · Finish" },
              { icon: "supplier", h: "One number after handover", p: "We install custom lights and give installation support for everything else. Fabricated pieces carry warranty up to 5 years.", eg: "Install · Warranty · Site" },
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
              <p className="lede">A void, a living room, a lobby. Each fitting is there because that room needed it. If yours is still a drawing, send the picture.</p>
            </Reveal>
          </div>
          <Stagger className="work-grid">
            {[
              { src: "/photos/wing-void.jpg", tall: true, h: "The void", p: "A crystal piece for the full height of the room", alt: "A crystal wing chandelier in a double-height dining room" },
              { src: "/work/w2-corridor.jpg", tall: false, h: "Lift lobby", p: "Cove, downlights and a feature ceiling", alt: "A lift lobby with a wide crystal ceiling fixture and wood-lined doors" },
              { src: "/photos/pleated-plant.jpg", tall: true, h: "Pendant", p: "A scalloped shade throwing light up the wall", alt: "A black pleated pendant over a side table, washing the wall with light" },
              { src: "/work/w4-lounge.jpg", tall: false, h: "Reception", p: "Warm light over the seating", alt: "A reception with warm cove lighting, a crystal ceiling, and a gold screen" },
              { src: "/photos/bedroom-dome.jpg", tall: true, h: "Bedroom", p: "A ribbed dome over the desk", alt: "A black ribbed dome pendant lighting a desk beside a bed" },
              { src: "/photos/lobby-square.jpg", tall: false, h: "Lobby", p: "A square crystal ceiling over curved seating", alt: "Curved lobby sofas under a square crystal ceiling light" },
              { src: "/photos/dome-desk.jpg", tall: true, h: "Study", p: "A white dome pendant, the rest of the room dark", alt: "A white dome pendant lighting a writing desk" },
              { src: "/photos/living-room.jpg", tall: false, h: "Living room", p: "Shelves, seating, and a pendant in the corner", alt: "A living room at night with lit display shelves and warm seating" },
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
              <Reveal delay={0.06}><h2 className="h-lg">The showroom,<br /><span className="serif-i">lights on.</span></h2></Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="lede">Short films from the Celestial Lights floor. The fittings are switched on, so you can see how the light moves before you order.</p>
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
              <Reveal delay={0.06}><h2 className="h-lg">One fitting<br />cannot do three jobs.</h2></Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="lede">A chandelier does not light a chopping board, a book, and a painting. We specify each job, on its own circuit, before anyone buys a fitting.</p>
            </Reveal>
          </div>
          <Stagger className="pillars">
            {[
              { icon: "ambient", h: "The light you walk into", p: "Cove, a diffused pendant, or ceiling fittings. This is what the room feels like at 7pm. Get it wrong and the chandelier will not save it.", eg: "Ceiling · Cove · Diffusers" },
              { icon: "task", h: "The light you work by", p: "Counter, desk, mirror. Its own switch. Bright enough for the job, and out of your eyes when you sit down.", eg: "Under-cabinet · Desk · Mirror" },
              { icon: "accent", h: "The light people notice", p: "A wash on a textured wall, a spot on a painting, the facade. Useful, and the first place a beam glares if the fitting is wrong.", eg: "Wall wash · Art · Facade" },
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
              <p className="lede">A list of product names is not a plan. We model the rooms in DIALux while the ceiling can still change. Your architect, contractor and electrician then get a drawing set they can build from.</p>
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
              <Image src="/lifestyle/hero-4.jpg" alt="A crystal ceiling light over a curved sofa, with wood-lined lift doors behind" fill sizes="(max-width: 1020px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </Reveal>
            <div>
              <Reveal as="span"><span className="eyebrow">Consultation & implementation</span></Reveal>
              <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 18 }}>The first session<br />is <span className="serif-i">free.</span></h2></Reveal>
              <Reveal delay={0.12}>
                <ul className="check-list">
                  <li><span className="tick">✓</span>At your site, in Kannur, Calicut or Kochi, or on video</li>
                  <li><span className="tick">✓</span>You leave with positions, colour temperature, and which circuits dim</li>
                  <li><span className="tick">✓</span>You pay only if you ask us to go ahead</li>
                  <li><span className="tick">✓</span>Supply is from our own fittings. We install custom lights and give installation support for everything else.</li>
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
              { h: "Consult", p: "Free. On site, in a centre, or on video. Bring the floor plan if you have it." },
              { h: "Design", p: "A DIALux model, then the drawing set and a price. The ceiling should still be open." },
              { h: "Supply", p: "Our fittings. Stand under them in Kannur, Calicut or Kochi before you order. The online shop is not open yet." },
              { h: "Install", p: "We install custom lights and give installation support for everything else. One point of contact, one warranty." },
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
              <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 18 }}>A café, a shop,<br />or a lobby.</h2></Reveal>
              <Reveal delay={0.12}>
                <p className="lede" style={{ marginTop: 22 }}>People stay longer when the light is comfortable, and the goods look like the price on them. We plan it, supply it, and fit the dates the builder already has.</p>
              </Reveal>
              <Reveal delay={0.16}>
                <ul className="check-list">
                  <li><span className="tick">✓</span>Hotels and restaurants: the dining room, the rooms, and the facade</li>
                  <li><span className="tick">✓</span>Retail: light on the goods, not a wash over the whole floor</li>
                  <li><span className="tick">✓</span>Offices and clinics: the lamp out of the eye at the desk</li>
                  <li><span className="tick">✓</span>Builders: one price for the project, delivered in phases</li>
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <MagneticButton href="/consultation#form" variant="gold">Discuss Your Project <span className="arr">→</span></MagneticButton>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="split-media frame">
              <Image src="/lifestyle/lobby-canopy.jpg" alt="A black sculptural chandelier filling a bright lobby" fill sizes="(max-width: 1020px) 100vw, 50vw" style={{ objectFit: "cover" }} />
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
              <p className="lede">Kannur and Calicut are Celestial Lights. Kochi is Elor. Come and stand under a fitting before you order it. The online shop is not open yet, so until then you come in, or you send the plan on WhatsApp.</p>
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
                  <Link className="store-link" href={`/stores/${s.city.toLowerCase()}`} style={{ color: "var(--caramel)" }}>{s.city} store details →</Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <div className="online-banner" style={{ background: "var(--on-pearl)", borderColor: "transparent", marginTop: 24 }}>
              <div>
                <h3 style={{ color: "#fff" }}>Building outside Kerala?</h3>
                <p>Send the drawings. The first session can be on video. We will tell you what to specify. The shop site is still being built.</p>
              </div>
              <a className="btn btn-gold" href={site.shopUrl} target="_blank" rel="noopener noreferrer">{site.shopCta} <span className="arr">→</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      <GuideLinks />

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap-tight">
          <Reveal as="span"><span className="eyebrow center">Free · No obligation</span></Reveal>
          <Reveal delay={0.06}><h2 className="h-lg" style={{ marginTop: 18 }}>Book the first session.<br />It is <span className="serif-i">free.</span></h2></Reveal>
          <Reveal delay={0.12}><p className="lede" style={{ textAlign: "center" }}>At the site, in a centre, or on video. If you already have a picture of the light, send that instead and we will say whether we can build it.</p></Reveal>
          <Reveal delay={0.16}>
            <div className="cta-ctas">
              <MagneticButton href="/consultation" variant="gold">Book a Free Consultation <span className="arr">→</span></MagneticButton>
              <MagneticButton href="/customisation" variant="ghost">Start a Custom Piece</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
