import Link from "next/link";
import Button from "@/components/Button";
import styles from "./Services.module.css";
import OpenCtaButton from "../OpenCtaButton";

export function Service({ name, text, image, openCta }) {
  return (
    <li className={styles.serviceLi}>
      <div className={styles.imgDiv}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.contentDiv}>
        <h2 dangerouslySetInnerHTML={{ __html: name }} />
        <p>{text}</p>
        <OpenCtaButton openCta={openCta} />
      </div>
    </li>
  );
}
