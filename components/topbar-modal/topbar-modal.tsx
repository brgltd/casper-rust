import { useMemo } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import generateUserMessage from "../../utils/generate-user-message";
import * as mui from "../../styles/mui.ts";
import type TopbarModalProps from "./topbar-modal.types";
import styles from "./topbar-modal.module.css";

export default function TopbarModal({
  isOpen,
  numCorrect,
  numRemaining,
  onClose,
}: TopbarModalProps) {
  const message = useMemo(
    () => generateUserMessage(numCorrect, numRemaining),
    [numCorrect, numRemaining]
  );

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={mui.box}>
        <p className={styles.msg}>Share your CasperCity progress</p>
        <div className={styles.icons}>
          <TwitterShareButton url="https://github.com" title={message}>
            <TwitterIcon size={64} round={true} />
          </TwitterShareButton>
          <FacebookShareButton url="https://github.com" quote={message}>
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
