"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site";
import { Brandmark } from "@/components/ui/Brandmark";
import styles from "./Nav.module.css";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`${styles.head} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" aria-label="Elor Lighting home" className={styles.brand}>
          <Brandmark />
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {nav.map((item) => {
            const base = item.href.split("#")[0]; // "" for "/#commercial"
            const active = base.length > 1 && pathname.startsWith(base);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? styles.active : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.cta}>
          <Link href="/consultation" className="btn btn-gold">
            Book Consultation
          </Link>
          <button
            className={styles.menuBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span data-open={open} />
            <span data-open={open} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.sheet}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 + i * 0.05 }}
              >
                <Link href={item.href}>{item.label}</Link>
              </motion.div>
            ))}
            <a
              href={site.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sheetShop}
            >
              Shop {site.shopLabel} →
            </a>
            <Link href="/consultation" className="btn btn-gold" style={{ marginTop: 8 }}>
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
