import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "../Popups/MobileMenu/MobileMenu";
import { useState } from "react";
import Image from "next/image";

export default function MobileHeader({ openMobileMenu }) {
  return (
    <header className={styles.headerMain}>
      <Image
        src="/logo-white.png"
        alt="logo-white"
        className={styles.headerLogo}
        width={200}
        height={200}
      />
      <div className={styles.hamburger} onClick={openMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
