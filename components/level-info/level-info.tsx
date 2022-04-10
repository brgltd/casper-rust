import Link from "next/link";
import cn from "classnames";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./level-info.module.css";
import type LevelInfoProps from "./level-info.types";

export default function LevelInfo({ id, numLevels }: LevelInfoProps) {
  return (
    <div className={styles.container}>
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
  );
}
