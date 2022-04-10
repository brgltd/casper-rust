import type LevelData from "../../types/level-data";
import styles from "./level-markdown-content.module.css";

export default function LevelMarkdownContent({
  title,
  contentHTML,
}: LevelData) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      />
    </div>
  );
}
