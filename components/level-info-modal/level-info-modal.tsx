import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import LevelInfoModalSuccess from "../level-info-modal-success/level-info-modal-success";
import LevelInfoModalFailure from "../level-info-modal-failure/level-info-modal-failure";
import type LevelInfoModalProps from "./level-info-modal.types";
import * as mui from "./level-info-modal.mui";
import styles from "./level-info-modal.module.css";

export default function LevelInfoModal({
  isOpen,
  onClose,
  isCorrect,
  id,
  numRemaining,
}: LevelInfoModalProps) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={mui.box}>
        {isCorrect ? (
          <LevelInfoModalSuccess numRemaining={numRemaining} />
        ) : (
          <LevelInfoModalFailure id={id} />
        )}
        <button onClick={onClose} className={styles.close}>
          X
        </button>
      </Box>
    </Modal>
  );
}
