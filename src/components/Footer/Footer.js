import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Footer({ isMobile }) {
  return (
    <footer className={styles.footerSct}>
      <Locations isMobile={isMobile} />

      <div className={styles.footerImg}>
        <img src="/logo-white.png" alt="logo-white" className={styles.logo} />
      </div>
      <div className={styles.footerCont}>
        <ul className={styles.ulLeft}>
          <li>
            <a href="#">За мен</a>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Сватбена флористика</a>
          </li>
        </ul>
        <ul className={styles.ulRight}>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>awlays.blooming.events@gmail.com</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <span>+359 784 567 274</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>гр. Варна, кв. Аспарухово, ул. Флора 34</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

function Locations({ isMobile }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1% 0 5%",
      }}
    >
      <Image
        src="/map.png"
        alt="map"
        width={300}
        height={400}
        className={styles.map}
      />
      <h3 style={{ display: !isMobile ? "flex" : "none" }}>
        Региони на обслужване
      </h3>
      <p>
        Извършваме украси и декорации в следните градове и райони:<br></br>
        <br></br> Варна, Св.Константин и Елена, Аксаково, Балчик, Добрич.
      </p>
    </div>
  );
}
