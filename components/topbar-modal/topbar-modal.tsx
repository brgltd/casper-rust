import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import * as mui from "./topbar-modal.mui";
import type TopbarModalProps from "./topbar-modal.types";
import styles from "./topbar-modal.module.css";

export default function TopbarModal({
  isOpen,
  onClose,
  numCorrect,
}: TopbarModalProps) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={mui.box}>
        <p className={styles.msg}>Share your CasperCity progress</p>
        <div className={styles.icons}>
          <TwitterShareButton
            url="localhost:3000"
            title={`test share #2, count=${numCorrect}`}
          >
            <TwitterIcon size={64} round={true} />
          </TwitterShareButton>
          <FacebookShareButton url="https://github.com" quote="test share #1">
            <FacebookIcon size={64} round={true} />
          </FacebookShareButton>
        </div>
        <button onClick={onClose} className={styles.close}>
          X
        </button>
      </Box>
    </Modal>
  );
}
