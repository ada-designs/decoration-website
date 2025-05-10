import styles from "./MobilePopup.module.css";
import Form from "../Form/Form";
import PhoneIcons from "../PhoneIcons/PhoneIcons";
import Image from "next/image";

export default function MobilePopup({ isCta, closeCta }) {
  return (
    <>
      <div
        className={styles.wrapper}
        style={{ display: isCta ? "flex" : "none" }}
      />
      <div className={styles.cta} style={{ display: isCta ? "flex" : "none" }}>
        <div className={styles.orangeArc}>
          <span onClick={closeCta}>Назад</span>
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
          />
          <h2>Имате въпроси?</h2>
          <p>Изпратете ни имейл и попитайте всичко, което Ви интересува</p>
          <Form />
          <span className={styles.contacts}>Контакти</span>
          <PhoneIcons />
        </div>
      </div>
    </>
  );
}
