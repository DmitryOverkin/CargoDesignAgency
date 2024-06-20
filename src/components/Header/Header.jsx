import styles from "./Header.module.scss";
import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState("");

  //   function changeActiveLink(linkName) {
  //     if(linkName = 'works'){
  //       setIsActive('works')
  //     }else if(linkName = 'products'){
  //       setIsActive('products')
  //     }else{
  //       setIsActive('services')
  //   }
  // }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}></div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <NavLink>Products</NavLink>
            <NavLink>Our Works</NavLink>
            <NavLink>Services</NavLink>
          </ul>
        </nav>

        <div className={styles.headerBtns}>
          <span>
            <a className={styles.headerFAQLink} href="/#">
              FAQ
            </a>
          </span>
          <Button>Get started</Button>
        </div>
      </div>
    </header>
  );
}
