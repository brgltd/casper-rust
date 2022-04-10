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
      <div className={styles.id}>{id}</div>
      <div className={styles.experience}>{experience}</div>
      <div>{title}</div>
      <div className={styles.status}>status: todo</div>
      <div className={styles.start}>start now</div>
      <div className={styles.estimation}>Est. {estimation}</div>
    </li>
  );
}
