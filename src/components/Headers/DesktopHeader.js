import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import styles from "./DesktopHeader.module.css";

export default function Header({ openCta, variant = "primary" }) {
  const isPrimary = variant === "primary";

  return (
    <header className={isPrimary ? styles.headerMain : styles.headerSecondary}>
      <ul className={styles.navLinks}>
        <li>
          <Link href={{ pathname: "/", hash: "about" }}>За мен</Link>
        </li>
        <li>
          <Link href="/services">Услуги</Link>
        </li>
        <li>
          <Link href="/wedding">Сватбена флористика</Link>
        </li>
      </ul>

      <Link href="/" className={styles.headerLogo}>
        <Image
          src="/logo-white.png"
          alt="logo-white"
          width={200}
          height={200}
        />
      </Link>

      <Button
        className={`btn ${isPrimary ? "orange-btn" : "transp-btn"}`}
        onClick={openCta}
      >
        <span>Свържи се с нас</span>
      </Button>
    </header>
  );
}
