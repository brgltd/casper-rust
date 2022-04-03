import styles from "./level.module.css";
import ChildrenProps from "../../types/children-props";

export default function Level({ children }: ChildrenProps): JSX.Element {
  return <main className={styles.container}>{children}</main>;
}
