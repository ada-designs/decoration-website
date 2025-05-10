import Link from "next/link";
import Button from "../../Button";
import Image from "next/image";
import styles from "./MobileMenu.module.css";

import SocialIcons from "../Social icons/SocialIcons";
import PhoneIcons from "../PhoneIcons/PhoneIcons";

export default function MobileMenu({ isOpen, closeMobileMenu, openCta }) {
  return (
    <div
      className={styles.offScreenCont}
      style={{ right: isOpen ? "0" : "-110%" }}
    >
      <div className={styles.orangeArc}>
        <span onClick={closeMobileMenu}>Назад</span>
        <Image
          src="/logo-white.png"
          alt="logo-white"
          className={styles.offScreenLogo}
          width={200}
          height={200}
        />
      </div>

      <div className={styles.whiteSpace}>
        <Image
          src="./rectangle.svg"
          alt="rectangle"
          className={styles.rectangleSvg}
          width={48}
          height={48}
          href="/"
        />
        <ul className={styles.links}>
          <li>
            <Link href="/" onClick={closeMobileMenu}>
              Начало
            </Link>
          </li>
          <li>
            <Link href="#" onClick={closeMobileMenu}>
              За мен
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMobileMenu}>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/wedding" onClick={closeMobileMenu}>
              Сватбена флористика
            </Link>
          </li>
        </ul>
        <Button className="btn orange-btn" onClick={openCta}>
          <span>Резервирай сега</span>
        </Button>
        <SocialIcons />
      </div>

      <ul className={styles.links}>
        <li className={styles.contacts}>
          <Link href="/services">Контакти</Link>
        </li>
      </ul>

      <PhoneIcons />
    </div>
  );
}
