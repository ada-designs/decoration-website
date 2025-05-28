import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./PhoneIcons.module.css";

export default function PhoneIcons({ className }) {
  return (
    <ul className={styles.phones}>
      <li>
        <Link href="tel:+359895774249" className={styles.phoneLink1}>
          <FontAwesomeIcon icon={faPhone} />
        </Link>
      </li>
      <li>
        <Link
          href="viber://chat?number=359895774249"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.phoneLink2}
        >
          <FontAwesomeIcon icon={faViber} />
        </Link>
      </li>
      <li>
        <Link
          href="https://api.whatsapp.com/send?phone=359895774249&text=Здравейте! Бих искал да направя запитване."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.phoneLink3}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
      </li>
    </ul>
  );
}
