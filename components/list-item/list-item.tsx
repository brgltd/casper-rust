import Link from "next/link";
import { BiRun } from "react-icons/bi";
import { GiStrong } from "react-icons/gi";
import { GiStrongMan } from "react-icons/gi";
import IndexData from "../../types/index-data";
import styles from "./list-item.module.css";

export default function ListItem({
  title,
  id,
  experience,
  estimation,
}: IndexData) {
  return (
    <li>
      <Link href={`/levels/${id}`}>
        <a className={styles.item}>
          <div className={styles.info}>
            <div className={styles.id}>{id}</div>
            <div className={styles.experience}>{experience}</div>
            <div className={styles.iconWrapper}>
              {experience === "Beginner" ? (
                <BiRun />
              ) : experience === "Advanced" ? (
                <GiStrongMan />
              ) : (
                <GiStrong />
              )}
            </div>
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.status}>
            {/* <div className={styles.iconWrapper}>
              <RiTodoLine />
            </div> */}
          </div>
          <div className={styles.start}>START NOW</div>
          <div className={styles.estimation}>Est. {estimation}</div>
        </a>
      </Link>
    </li>
  );
}
