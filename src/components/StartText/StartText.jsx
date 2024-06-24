import styles from "./StartText.module.scss";
import Button from "../Button/Button";

export default function StartText() {
  return (
    <section className={styles.startText}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Cargo <span style={{ color: "#585962" }}>Design</span> Agency
          </h1>
          <p className={styles.subTitle}>
            Ahead with 100+ Amazing clients with 20+ Country <br /> Served the
            best design materials
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
}
