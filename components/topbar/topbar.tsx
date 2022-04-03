import styles from "./topbar.module.css";

export default function Topbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>home</li>
        <li>content</li>
        <li>share</li>
        <li>repo</li>
        <li>network</li>
        <li>docs</li>
      </ul>
    </nav>
  );
}
