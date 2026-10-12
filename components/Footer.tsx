import Link from "next/link";
import { site, stores } from "@/lib/site";
import { Brandmark } from "@/components/ui/Brandmark";
import { roomGuideLinks, topicGuideLinks } from "@/lib/guideLinks";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.foot}>
      <div className="wrap">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand} aria-label="Elor Lighting home">
              <Brandmark size="lg" />
            </Link>
            <p className={styles.blurb}>
              The lighting consultancy of Celestial Lights. We design for
              any site in India and supply our own fittings. We install custom lights and give installation support for everything else. Experience centres in Kannur, Calicut
              and Kochi.
            </p>
            <a
              href={site.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              {site.shopCta} <span className="arr">→</span>
            </a>
          </div>

          <div className={styles.col}>
            <h2>Explore</h2>
            <Link href="/collections">Collections</Link>
            <Link href="/customisation">Customisation</Link>
            <Link href="/consultation">Consultation</Link>
            <Link href="/stores">Our Stores</Link>
            <Link href="/india">Across India</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/#commercial">Commercial</Link>
            <Link href="/for/architects-and-designers">For Architects &amp; Designers</Link>
            <Link href="/press">Press</Link>
          </div>

          <div className={styles.col}>
            <h2>Our Stores</h2>
            {stores.map((s) => (
              <a key={s.city} href={s.maps} target="_blank" rel="noopener noreferrer">
                {s.city}
              </a>
            ))}
            <a href={site.shopUrl} target="_blank" rel="noopener noreferrer">
              Online, Pan-India
            </a>
          </div>

          <div className={styles.col}>
            <h2>Talk to us</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            <p>{site.hours}</p>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp {site.whatsappNumber} →
            </a>
          </div>
        </div>

        <nav className={styles.guides} aria-label="Lighting guides">
          <h4>Lighting guides</h4>
          <div className={styles.guideRow}>
            {[...roomGuideLinks, ...topicGuideLinks].map((g) => (
              <Link key={g.href} href={g.href}>{g.label}</Link>
            ))}
          </div>
        </nav>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Elor Lighting. All rights reserved.</span>
          <span className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </span>
          <span>
            Elor Lighting · Celestial Lights ·{" "}
            <Link href="/stores/kannur">Kannur</Link> ·{" "}
            <Link href="/stores/kochi">Kochi</Link> ·{" "}
            <Link href="/stores/kozhikode">Kozhikode</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
