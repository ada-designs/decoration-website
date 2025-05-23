import styles from "./Hero.module.css";
import OrangeArc from "./OrangeArc";

export default function Hero() {
  return (
    <section className={styles.heroSct}>
      <div className={styles.heroCont}>
        <div className={styles.heroOverlay}></div>
      </div>
      <OrangeArc />
    </section>
  );
}
