import { Logo } from "./Logo";
import styles from "./Brandmark.module.css";

/**
 * The full brand lockup: Celestial Drop emblem + ELOR wordmark (Playfair) +
 * optional LIGHTING descriptor. Used in the nav and footer.
 */
export function Brandmark({
  showTag = true,
  size = "md",
}: {
  showTag?: boolean;
  size?: "md" | "lg";
}) {
  return (
    <span className={`${styles.lockup} ${size === "lg" ? styles.lg : ""}`}>
      <Logo className={styles.emblem} />
      <span className={styles.text}>
        <span className={styles.word}>Elor</span>
        {showTag && <span className={styles.tag}>Lighting</span>}
      </span>
    </span>
  );
}
