import styles from "./wedding.module.css";
import Button from "../Button";
import Image from "next/image";

export default function WeddingSct({ openCta }) {
  return (
    <section className={styles.weddingSct}>
      <div className={styles.heroCont}>
        <div className={styles.heroOverlay}></div>
      </div>
      <div className={styles.orangeArc}>
        <div className={styles.whiteArc}>
          <div className={styles.whiteArcFirst}>
            <h1>
              <span className="word1">Сватбена</span>
              <br></br>
              <span className="word2">флористика</span>
            </h1>
            <p>
              Спестете време за декорация на вашето следващо събитие с помощта
              на Always Blooming Events. Ние предлагаме украса за сватби,
              рождени дни, юбилеи, детски рождени дни, погачи, кръщенета,
              корпоративни събития, абитуриентски балове, момински партита,
              вечери на плажа и др. <br></br> <br></br> Уверете се, че
              следващото ви събитие ще се окаже точно както искате.
            </p>
            <Button className="btn transp-btn">Научете повече</Button>
          </div>
        </div>
      </div>

      <div className={styles.bigPictures1}></div>
      <div className={styles.bigPictures2}></div>
      <div className={styles.bigPictures3}></div>
      <div className={styles.boxBtn}>
        <div className={styles.descrBox}>
          <p>
            Сватбената украса е сърцето на всяка незабравима сватба – тя създава
            атмосферата, подчертава стила и прави всеки момент още по-вълшебен.
            Нашата сватбена декорация се отличава с внимание към детайла,
            персонализиран подход и безупречен вкус. Всяка аранжировка, всеки
            елемент е създаден с любов и вдъхновение, за да отрази вашата
            уникална история. Затова вярваме, че нашата украса не просто краси
            пространството – тя разказва вашата приказка по най-красивия
            възможен начин.
          </p>
        </div>
        <Button className="btn orange-btn" onClick={openCta}>
          <span>Резервирай сега</span>
        </Button>
      </div>
      {/* <div className={styles.images}>
        <Image
          className={styles.image1}
          src="/hero.jpg"
          alt="hero"
          width={200}
          height={200}
        ></Image>
        <div className="rectangleCenter"></div>
        <Image
          className={styles.image2}
          src="/hero.jpg"
          alt="hero"
          width={200}
          height={200}
        ></Image>
      </div> */}
    </section>
  );
}
