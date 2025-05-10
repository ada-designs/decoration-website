import Link from "next/link";
import styles from "./2Header.module.css";
import Button from "../Button";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SecondaryHeader({ openCta }) {
  return (
    <header className={styles.headerSecondary}>
      <ul>
        <li>
          <a href="#about">За мен</a>
        </li>
        <li>
          <Link href="/Services">Услуги</Link>
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
      <Button className="btn transp-btn" onClick={openCta}>
        <span>Свържи се с нас</span>
      </Button>
    </header>
  );
}
