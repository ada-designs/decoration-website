import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

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
            <a
              href="mailto:always.blooming.eventss@gmail.com?subject=Запитване&body=Здравейте, искам да организирате моето събитие!"
              style={{ display: "flex", gap: "25px", alignItems: "center" }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>always.blooming.eventss@gmail.com</span>
            </a>
          </li>
          <li>
            <Link
              href="tel:+359895774249"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <FontAwesomeIcon icon={faPhone} />
              <span>+359 895 774 249</span>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: !isMobile ? "20px" : "" }}
            />
            <span>
              гр. Варна, кв. Аспарухово, {!isMobile && <br />} ул. Народни
              будители 2 {!isMobile && <br />} (Сити Сентър Аспарухово ет.2)
            </span>
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
