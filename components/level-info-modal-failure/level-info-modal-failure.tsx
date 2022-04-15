import Button from "@mui/material/Button";
import CONFIG from "../../config";
import type LevelInfoModalFailureProps from "./level-info-modal-failure.types";
import styles from "./level-info-modal-failure.module.css";

export default function LevelInfoModalFailure({
  id,
}: LevelInfoModalFailureProps) {
  return (
    <>
      <p className={styles.title}>Then answer is incorrect.</p>
      <p className={styles.warn}>Please, try again.</p>
      <div className={styles.flex}>
        <span className={styles.stuck}>Stuck?</span>
        <Button
          sx={{
            marginRight: "32px",
            position: "relative",
            zIndex: 2,
            backgroundColor: "rgba(25, 118, 210, 0.5)",
          }}
          variant="contained"
          href={`${CONFIG.ANSWERS}/${id}.md`}
          target="_blank"
          rel="noopener noreferrer"
        >
          CHECK EXPECTED ANSWER
        </Button>
      </div>
    </>
  );
}
