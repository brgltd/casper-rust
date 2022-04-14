import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import { MdShare } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { TopbarModalContext } from "../../context/topbar-modal-context";
import CONFIG from "../../config";
import Logo from "../logo/logo";
import styles from "./topbar.module.css";

export default function Topbar() {
  const [color, setColor] = useState("#ffffff");
  const { onTopbarModalOpen } = useContext(TopbarModalContext);
  const { pathname } = useRouter();

  function onEnter() {
    setColor("#fa5959");
  }

  function onLeave() {
    setColor("#ffffff");
  }

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li onMouseEnter={onEnter} onMouseLeave={onLeave} title="Homepage">
            <Link href="/">
              <a className={cn(styles.item, styles.home)}>
                <Logo color={color} />
                <span className={styles.text}>Levels</span>
              </a>
            </Link>
          </li>
          <li title="Casper docs">
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
          <li title="Repository">
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
          {pathname !== "/" && (
            <li title="Social media">
              <button className={styles.item} onClick={onTopbarModalOpen}>
                <MdShare />
                <span className={styles.text}>Share</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
