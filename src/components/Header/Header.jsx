import styles from "./Header.module.scss";
import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("works");

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}></div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <NavLink
              onChange={() => setActiveLink("products")}
              isActive={activeLink === "products"}
            >
              Products
            </NavLink>
            <NavLink
              onChange={() => setActiveLink("works")}
              isActive={activeLink === "works"}
            >
              Our Works
            </NavLink>
            <NavLink
              onChange={() => setActiveLink("services")}
              isActive={activeLink === "services"}
            >
              Services
            </NavLink>
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
