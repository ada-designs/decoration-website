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
              <Link href="#">
                <FontAwesomeIcon icon={faPhone} className={styles.phoneLink1} />
                + 359 897 409 384
              </Link>
            </li>
            <li>
              <Link href="#">
                <FontAwesomeIcon icon={faViber} className={styles.phoneLink2} />
                + 359 897 409 384
              </Link>
            </li>
            <li>
              <Link href="#">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className={styles.phoneLink3}
                />
                + 359 897 409 384
              </Link>
            </li>
          </ul>
          <div className={styles.socialMedia}>
            <p>Последвайте ни в социалните мрежи:</p>
            <ul className={styles.socialIcons}>
              <li>
                <Link href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={styles.socialLink}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={styles.socialLink}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={styles.socialLink}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
