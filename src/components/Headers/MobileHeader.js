import Image from "next/image";
import styles from "./MobileHeader.module.css";
import Link from "next/link";

export default function MobileHeader({ openMobileMenu, variant = "primary" }) {
  const isPrimary = variant === "primary";

  return (
    <header
      className={`${styles.header} ${
        isPrimary ? styles.headerMain : styles.headerSecondary
      }`}
    >
      <Link href="/">
        <Image
          src="/logo-white.png"
          alt="logo-white"
          className={styles.headerLogo}
          width={150}
          height={150}
        />
      </Link>
      <div className={styles.hamburger} onClick={openMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
