import { useState } from "react";
import { MdDarkMode, MdShare } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { GoBook } from "react-icons/go";
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
        <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <Logo color={color} />
          <span>Path</span>
        </li>
        <li>
          <AiFillGithub />
          <span>Code</span>
        </li>
        <li>
          <GoBook />
          <span>Docs</span>
        </li>
        <li>
          <MdShare />
          <span>Share</span>
        </li>
        <li>
          <MdDarkMode />
          <span>Mode</span>
        </li>
      </ul>
    </nav>
  );
}
