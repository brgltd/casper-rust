import styles from "./level.module.css";
import type LevelProps from "./level.types";

export default function Level({ children }: LevelProps): JSX.Element {
  return <main className={styles.container}>{children}</main>;
}
