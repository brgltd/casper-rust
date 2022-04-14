import type LevelInfoModalSuccessProps from "./level-info-modal-success.types";
import styles from "./level-info-modal-success.module.css";

export default function LevelInfoModalSuccess({
  numRemaining,
}: LevelInfoModalSuccessProps) {
  return numRemaining !== 0 ? (
    <>
      <p className={styles.warn}>Congratulations, the answer is correct!</p>
      <p className={styles.warn}>
        Only {numRemaining} more{" "}
        {numRemaining === 1 ? "challenge" : "challenges"} to go.
      </p>
    </>
  ) : (
    <p className={styles.warn}>
      Congratulations, you&apos;ve completed all the challenges!
    </p>
  );
}
