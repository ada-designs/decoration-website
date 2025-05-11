import Link from "next/link";
import Button from "@/components/Button";
import styles from '../Services.module.css'

export function Service({ name, text, image, link, key }) {
    return (
      <li className={styles.serviceLi}>
        <div className={styles.imgDiv}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.contentDiv}>
          <h2 dangerouslySetInnerHTML={{ __html: name }} />
          <p>{text}</p>
          <Link href={link}>
            <Button className="btn orange-btn">
              <span>Резервирай сега</span>
            </Button>
          </Link>
        </div>
      </li>
    );
  }
  