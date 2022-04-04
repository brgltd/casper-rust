import { MdDarkMode, MdShare } from "react-icons/md";
import { AiFillGithub, AiOutlineRead } from "react-icons/ai";
import Logo from "../../assets/svg-jsx/logo";
import styles from "./topbar.module.css";

export default function Topbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Logo />
        </li>
        <li>
          <AiFillGithub />
        </li>
        <li>
          <AiOutlineRead />
        </li>
        <li>
          <MdShare />
        </li>
        <li>
          <MdDarkMode />
        </li>
      </ul>
    </nav>
  );
}
