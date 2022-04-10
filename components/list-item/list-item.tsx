import IndexData from "../../types/index-data";
import styles from "./list-item.module.css";

export default function ListItem({
  title,
  id,
  experience,
  estimation,
}: IndexData) {
  return (
    <li className={styles.item}>
      <div>{id + 1}</div>
      <div>{experience}</div>
      <div>{title}</div>
      <div>status: todo</div>
      <div>start now</div>
      <div>{estimation}</div>
    </li>
  );
}
