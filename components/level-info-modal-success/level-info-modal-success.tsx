import styles from "./level-info-modal-success.module.css";

export default function LevelInfoModalSuccess() {
  return (
    <>
      <p className={styles.warn}>Congratulations, the answer is correct!</p>
      <p className={styles.warn}>Only 10 more questions to go.</p>
    </>
  );
}
