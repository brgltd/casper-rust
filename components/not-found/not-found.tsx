import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Not Found</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}
