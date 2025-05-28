import styles from "./Popup.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faViber,
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Form from "../Form/Form"; // Import the reusable Form component

export default function DesktopPopup({ isCta, closeCta }) {
  return (
    <>
      <div
        className={styles.wrapper}
        style={{ display: isCta ? "block" : "none" }}
      />
      <div className={styles.cta} style={{ display: isCta ? "flex" : "none" }}>
        <span className={styles.closeIcon} onClick={closeCta}>
          <FontAwesomeIcon icon={faAngleRight} />
          Обратно
        </span>
        <div className={styles.left}>
          <h2>Имате въпроси?</h2>
          <p>Изпратете ни имейл и попитайте всичко, което Ви интересува</p>
          <Form /> {/* Use the reusable Form component */}
        </div>
        <div className={styles.right}>
          <h2>Контакти</h2>
          <ul className={styles.phones}>
            <li>
              <Link href="tel:+359895774249" className={styles.phoneLink1}>
                <FontAwesomeIcon icon={faPhone} />{" "}
                <span className={styles.phoneText}>+359895774249</span>
              </Link>
            </li>
            <li>
              <Link
                href="viber://chat?number=359895774249"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.phoneLink2}
              >
                <FontAwesomeIcon icon={faViber} />{" "}
                <span className={styles.phoneText}>+359895774249</span>
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
                <span className={styles.phoneText}>+359895774249</span>
              </Link>
            </li>
          </ul>
          <div className={styles.socialMedia}>
            <p>Последвайте ни в социалните мрежи:</p>
            <ul className={styles.socialIcons}>
              <li>
                <a
                  href="https://www.facebook.com/p/Always-Blooming-Events-61561397053103/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={styles.socialLink}
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/always_blooming_events_?igsh=dzRocmhxNHo3ZjJp&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={styles.socialLink}
                  />
                </a>
              </li>

              <li>
                <a href="mailto:always.blooming.eventss@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={styles.socialLink}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
