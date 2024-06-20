import styles from "../Header/Header.module.scss";

export default function NavLink({isActive, children}) {
  return (
    <li
      className={
        isActive ? `${styles.listItem} ${styles.active}` : `${styles.listItem}`
      }
    >
      <a href="#">{children}</a>
    </li>
  );
}
