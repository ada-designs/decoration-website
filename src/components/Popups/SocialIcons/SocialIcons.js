import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./SocialIcons.module.css";

export default function SocialIcons() {
  return (
    <ul className={styles.socialIcons}>
      <li>
        <Link href="#">
          <FontAwesomeIcon icon={faFacebook} className={styles.socialLink} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FontAwesomeIcon icon={faInstagram} className={styles.socialLink} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <FontAwesomeIcon icon={faEnvelope} className={styles.socialLink} />
        </Link>
      </li>
    </ul>
  );
}
