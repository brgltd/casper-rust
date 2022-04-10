import { LevelMarkdownProps } from "../level-markdown/level-markdown.types";
import styles from "./level-markdown-content.module.css";

export default function LevelMarkdownContent({
  title,
  contentHTML,
}: LevelMarkdownProps) {
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
