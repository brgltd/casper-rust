import { useState } from "react";
import cn from "classnames";
import { MdDarkMode, MdShare } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import CONFIG from "../../config";
import Logo from "../logo/logo";
import styles from "./topbar.module.css";

export default function Topbar() {
  const [color, setColor] = useState("#ffffff");

  function onEnter() {
    setColor("#808080");
  }

  function onLeave() {
    setColor("#ffffff");
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li
          className={cn(styles.item, styles.path)}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <Logo color={color} />
          <span className={styles.text}>Path</span>
        </li>
        <li>
          <a
            className={styles.item}
            href={CONFIG.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
            <span className={styles.text}>Code</span>
          </a>
        </li>
        <li>
          <a
            className={styles.item}
            href={CONFIG.CASPER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoBook />
            <span className={styles.text}>Docs</span>
          </a>
        </li>
        <li className={styles.item}>
          <MdShare />
          <span className={styles.text}>Share</span>
        </li>
        <li className={styles.item}>
          <MdDarkMode />
          <span className={styles.text}>Mode</span>
        </li>
      </ul>
    </nav>
  );
}
