"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./Marquee.module.css";

const items = [
  "Custom Chandeliers",
  "Lighting Consultation",
  "Facade & Outdoor",
  "In-house Installation",
  "5-Year Warranty",
  "Pan-India Delivery",
  "Own Supply Chain",
  "Made to Measure",
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
