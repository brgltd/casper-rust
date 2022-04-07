import type ContentHTML from "../../types/content-html";
import styles from "./level-markdown-content.module.css";

export default function LevelMarkdownContent({ contentHTML }: ContentHTML) {
  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: contentHTML }}
    />
  );
}
