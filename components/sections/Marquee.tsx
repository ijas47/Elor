"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./Marquee.module.css";

const items = [
  "DIALux plans",
  "Custom chandeliers",
  "Custom lights installed by us",
  "Installation support",
  "Warranty up to 5 years",
  "Kannur · Calicut · Kochi",
  "Sites anywhere in India",
];

export function Marquee() {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div className={styles.wrap} aria-hidden="true">
      <motion.div
        className={styles.track}
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {row.map((it, i) => (
          <span key={i} className={styles.item}>
            {it}
            <span className={styles.star}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
