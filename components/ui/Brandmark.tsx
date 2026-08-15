import { Wordmark } from "./Wordmark";
import styles from "./Brandmark.module.css";

/**
 * The brand lockup: the ELOR wordmark with an optional LIGHTING descriptor
 * beneath it. The wordmark carries its own O, so there is no separate emblem
 * here and the name is artwork rather than live type.
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
      <Wordmark className={styles.mark} />
      {showTag && <span className={styles.tag}>Lighting</span>}
    </span>
  );
}
