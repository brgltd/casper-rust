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
          Learn how to develop casper smart contracts by building a simple
          abcdef ghixyz
        </h1>
      </div>
    </section>
  );
}
