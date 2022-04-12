import { useState, useMemo } from "react";
import Link from "next/link";
import cn from "classnames";
import Button from "@mui/material/Button";
import { AiOutlineArrowUp } from "react-icons/ai";
import LevelInfoModal from "../level-info-modal/level-info-modal";
import processExpectedValue from "../../utils/process-expected-value";
import getAnswersFromStorage from "../../utils/get-answers-from-storage";
import computeNumCorrect from "../../utils/compute-num-correct";
import type LevelInfoProps from "./level-info.types";
import type Answers from "../../types/answers";
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
  const [answers, setAnswers] = useState<Answers>(() =>
    getAnswersFromStorage(numLevels)
  );

  function onOpen() {
    const submittedRawValue = editorRef.current?.getValue() || "";
    const submittedValue = processExpectedValue(submittedRawValue);
    const isAnswerCorrect = submittedValue === expectedValue;
    const newAnswers = { ...answers };
    newAnswers[id] = isAnswerCorrect;
    setAnswers(newAnswers);
    localStorage.setItem("answers", JSON.stringify(newAnswers));
    setIsCorrect(isAnswerCorrect);
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  const numCorrect = useMemo(() => computeNumCorrect(answers), [answers]);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.progress}>
          Progress: {numCorrect}/{numLevels}
        </p>
        <Button
          sx={mui.submit}
          variant="contained"
          size="large"
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
      <LevelInfoModal
        isOpen={isOpen}
        onClose={onClose}
        isCorrect={isCorrect}
        id={id}
      />
    </>
  );
}
