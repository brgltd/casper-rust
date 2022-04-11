import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { AiOutlineArrowUp } from "react-icons/ai";
import processExpectedValue from "../../utils/process-expected-value";
import CONFIG from "../../config";
import type LevelInfoProps from "./level-info.types";
import styles from "./level-info.module.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#383838",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "32px",
};

function LevelInfoModalFailure({ id }) {
  return (
    <>
      <p className={styles.warn}>
        Then answer does not match the expect result.
      </p>
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
          className={styles.submit}
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

function LevelInfoModalSuccess() {
  return (
    <>
      <p className={styles.warn}>Congratulations, the answer is correct!</p>
      <p>Only 10 more questions to go.</p>
    </>
  );
}

function LevelInfoModal({ isOpen, onClose, isCorrect, id }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        {isCorrect ? (
          <LevelInfoModalSuccess />
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

export default function LevelInfo({
  id,
  numLevels,
  editorRef,
  expectedValue,
}: LevelInfoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  function onOpen() {
    const submittedRawValue = editorRef.current?.getValue() || "";
    const submittedValue = processExpectedValue(submittedRawValue);
    setIsCorrect(submittedValue === expectedValue);
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.container}>
        <Button
          // sx={mui.submit}
          sx={{
            marginRight: "32px",
            position: "relative",
            zIndex: 2,
            backgroundColor: "rgba(25, 118, 210, 0.5)",
          }}
          variant="contained"
          onClick={onOpen}
        >
          SUBMIT
        </Button>
        {id !== 1 && (
          <Link href={`/levels/${id - 1}`}>
            <a>
              <div className={cn(styles.iconWrapper, styles.left)}>
                <AiOutlineArrowUp />
              </div>
            </a>
          </Link>
        )}
        {id !== numLevels && (
          <Link href={`/levels/${id + 1}`}>
            <a>
              <div className={cn(styles.iconWrapper, styles.right)}>
                <AiOutlineArrowUp />
              </div>
            </a>
          </Link>
        )}
      </div>
      {/* <BasicModal isOpen={isOpen} onClose={onClose} /> */}
      <LevelInfoModal
        isOpen={isOpen}
        onClose={onClose}
        isCorrect={isCorrect}
        id={id}
      />
    </>
  );
}
