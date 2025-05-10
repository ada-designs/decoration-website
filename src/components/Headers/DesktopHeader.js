import Button from "../Button";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header({ isCta, openCta }) {
  return (
    <header className={styles.headerMain}>
      <ul>
        <li>
          <a href="#about">За мен</a>
        </li>
        <li>
          <Link href="/services">Услуги</Link>
        </li>
        <li>
          <Link href="/wedding">Сватбена флористика</Link>
        </li>
      </ul>
      <Link href={"/"} className={styles.headerLogo}>
        <Image
          src="/logo-white.png"
          alt="logo-white"
          width={200}
          height={200}
        />
      </Link>
      <Button className="btn orange-btn" onClick={openCta}>
        <span>Свържи се с нас</span>
      </Button>
    </header>
  );
}
