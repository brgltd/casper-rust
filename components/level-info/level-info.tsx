import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { AiOutlineArrowUp } from "react-icons/ai";
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

function BasicModal({ isSubmitOpen, onSubmitClose }) {
  return (
    <Modal open={isSubmitOpen} onClose={onSubmitClose}>
      <Box sx={style}>
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
            href="https://github.com/brgltd"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHECK EXPECTED ANSWER
          </Button>
        </div>
        <button onClick={onSubmitClose} className={styles.close}>
          X
        </button>
      </Box>
    </Modal>
  );
}

export default function LevelInfo({
  id,
  numLevels,
}: // editorRef,
LevelInfoProps) {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  function onSubmitOpen() {
    setIsSubmitOpen(true);
    // const value = editorRef.current?.getValue();
  }

  function onSubmitClose() {
    setIsSubmitOpen(false);
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
          onClick={onSubmitOpen}
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
      <BasicModal isSubmitOpen={isSubmitOpen} onSubmitClose={onSubmitClose} />
    </>
  );
}
