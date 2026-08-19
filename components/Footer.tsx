import Link from "next/link";
import { site, stores } from "@/lib/site";
import { Brandmark } from "@/components/ui/Brandmark";
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
              The lighting consulting and custom lighting arm of Celestial
              Lights. We plan the positions, make what has to be made, and
              install it. Three experience stores in Kerala, serving all of
              India.
            </p>
            <a
              href={site.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Shop {site.shopLabel} <span className="arr">→</span>
            </a>
          </div>

          <div className={styles.col}>
            <h4>Explore</h4>
            <Link href="/collections">Collections</Link>
            <Link href="/customisation">Customisation</Link>
            <Link href="/consultation">Consultation</Link>
            <Link href="/stores">Our Stores</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/#commercial">Commercial</Link>
          </div>

          <div className={styles.col}>
            <h4>Our Stores</h4>
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
            <h4>Talk to us</h4>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            <p>{site.hours}</p>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp us →
            </a>
          </div>
        </div>

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
