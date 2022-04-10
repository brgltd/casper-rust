import ChildrenProps from "../../types/children-props";
import styles from "./list.module.css";

export default function List({ children }: ChildrenProps) {
  return <ul className={styles.list}>{children}</ul>;
}
