"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { HeroTitle } from "@/components/motion/HeroTitle";
import styles from "./Hero.module.css";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <motion.div
          className={styles.mediaInner}
          initial={reduce ? undefined : { scale: 1.16 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/lifestyle/hero-1.jpg"
            alt="A custom crystal bubble chandelier lighting a grand hotel lobby"
            fill
            priority
            sizes="100vw"
            className={styles.img}
          />
        </motion.div>
        <div className={styles.scrim} />
        <div className={styles.vignette} />
      </div>

      <div className={`wrap ${styles.inner}`}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Custom chandeliers · Consultation · Installation
        </motion.p>

        <HeroTitle
          className={`h-xl ${styles.title}`}
          lines={[
            <>Light is how a space</>,
            <>
              learns to <i className="serif-i">feel.</i>
            </>,
          ]}
        />

        <motion.p
          className={`lede ${styles.lede}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          We build custom chandeliers from any picture you send us, plan the
          lighting for your whole space, and install it ourselves. One team, from
          the first sketch to the final switch-on. Pan-India, from Kerala.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton href="/customisation" variant="gold">
            Create a Custom Piece <span className="arr">→</span>
          </MagneticButton>
          <MagneticButton href="/consultation" variant="ghost">
            Book a Free Consultation
          </MagneticButton>
        </motion.div>

        <motion.div
          className={styles.note}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 1 }}
        >
          <span className={styles.dot} />3 experience stores in Kerala · Kannur ·
          Kochi · Kozhikode
        </motion.div>
      </div>

      {!reduce && (
        <motion.div
          className={styles.scroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <span>Scroll</span>
          <motion.span
            className={styles.scrollLine}
            animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
}
