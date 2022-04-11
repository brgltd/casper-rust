import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import Button from "@mui/material/Button";
import { AiOutlineArrowUp } from "react-icons/ai";
import LevelInfoModal from "../level-info-modal/level-info-modal";
import processExpectedValue from "../../utils/process-expected-value";
import type LevelInfoProps from "./level-info.types";
import * as mui from "./level-info.mui";
import styles from "./level-info.module.css";

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
        <Button sx={mui.submit} variant="contained" onClick={onOpen}>
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
      <LevelInfoModal
        isOpen={isOpen}
        onClose={onClose}
        isCorrect={isCorrect}
        id={id}
      />
    </>
  );
}
