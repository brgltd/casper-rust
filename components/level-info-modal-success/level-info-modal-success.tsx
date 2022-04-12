import type LevelInfoModalSuccessProps from "./level-info-modal-success.types";
import styles from "./level-info-modal-success.module.css";

export default function LevelInfoModalSuccess({
  numRemaining,
}: LevelInfoModalSuccessProps) {
  return (
    <>
      <p className={styles.warn}>Congratulations, the answer is correct!</p>
      <p className={styles.warn}>
        Only {numRemaining} more {numRemaining === 1 ? "question" : "questions"}{" "}
        to go.
      </p>
    </>
  );
}
