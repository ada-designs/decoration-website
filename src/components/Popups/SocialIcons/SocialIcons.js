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
        <Link href="https://www.facebook.com/profile.php?id=61561397053103&locale=bg_BG">
          <FontAwesomeIcon icon={faFacebook} className={styles.socialLink} />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/always_blooming_events_/?utm_source=qr#">
          <FontAwesomeIcon icon={faInstagram} className={styles.socialLink} />
        </Link>
      </li>
      <li>
        <a
          href="mailto:sasho@abv.bg?subject=Запитване&body=Здравейте, искам да организирате моето събитие!"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    </ul>
  );
}
