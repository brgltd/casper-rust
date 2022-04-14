import Name from "../name/name";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.name}>
          <Name />
        </div>
        <h1 className={styles.msg}>
          Learn how to code <strong>Casper Smart Contracts</strong> in Rust
          through interactive challenges
        </h1>
      </div>
    </section>
  );
}
