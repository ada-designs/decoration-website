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
        <Link href="#" className={styles.phoneLink1}>
          <FontAwesomeIcon icon={faPhone} />
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.phoneLink2}>
          <FontAwesomeIcon icon={faViber} />
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.phoneLink3}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
      </li>
    </ul>
  );
}
