import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import { MdShare } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import TopbarModal from "../topbar-modal/topbar-modal";
import CONFIG from "../../config";
import Logo from "../logo/logo";
import styles from "./topbar.module.css";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("#ffffff");

  function onEnter() {
    setColor("#808080");
  }

  function onLeave() {
    setColor("#ffffff");
  }

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <Link href="/">
              <a className={cn(styles.item, styles.home)}>
                <Logo color={color} />
                <span className={styles.text}>City</span>
              </a>
            </Link>
          </li>
          <li>
            <a
              className={styles.item}
              href={CONFIG.CASPER}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoBook />
              <span className={styles.text}>Docs</span>
            </a>
          </li>
          <li>
            <a
              className={styles.item}
              href={CONFIG.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
              <span className={styles.text}>Code</span>
            </a>
          </li>
          <li>
            <button className={styles.item} onClick={onOpen}>
              <MdShare />
              <span className={styles.text}>Share</span>
            </button>
          </li>
        </ul>
      </nav>
      <TopbarModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
