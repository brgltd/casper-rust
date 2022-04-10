import IndexData from "../../types/index-data";
import styles from "./list-item.module.css";

export default function ListItem({ title, id, experience }: IndexData) {
  return (
    <li className={styles.item}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{experience}</div>
      <div>status: todo</div>
      <div>start now</div>
    </li>
  );
}
