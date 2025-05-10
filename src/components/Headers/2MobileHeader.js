import Image from "next/image";
import styles from "./2MobileHeader.module.css";

export default function SecondaryMobileHeader({ openMobileMenu }) {
  return (
    <header className={styles.headerSecondary}>
      <Image
        src="/logo-white.png"
        alt="logo-white"
        className={styles.headerLogo}
        width={200}
        height={200}
      />
      <div className={styles.hamburger} onClick={openMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
