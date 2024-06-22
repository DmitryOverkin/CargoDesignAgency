import styles from "../Header/Header.module.scss";

export default function NavLink({ isActive, onChange, children }) {
  return (
    <li
      onClick={() => onChange()}
      className={
        isActive ? `${styles.listItem} ${styles.active}` : `${styles.listItem}`
      }
    >
      <a href="#">{children}</a>
    </li>
  );
}
