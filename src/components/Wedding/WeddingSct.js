import styles from "./wedding.module.css";
import Button from "../Button";
import Link from "next/link";
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
              Създаваме сватбени аранжировки с естествени цветя, вдъхновени от
              вашата любовна история. Всяко цвете е подбрано с внимание, за да
              подчертае стила, емоцията и красотата на вашия специален ден.{" "}
              <br></br> <br></br> Доверете се на нас, за да бъде всичко точно
              както искате!
            </p>
            <Link href="/services">
              <Button className="btn transp-btn">Научете повече</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bigPictures1}></div>
      <div className={styles.bigPictures2}></div>
      <div className={styles.bigPictures3}></div>
      <div className={styles.boxBtn}>
        <div className={styles.descrBox}>
          <p>
            Естествените цветя придават живот, емоция и неподправена красота на
            всяка сватба. В Always Blooming Events създаваме флорални
            аранжировки, които не просто украсяват, а разказват историята на
            вашата любов – нежно, стилно и с внимание към всеки детайл. От
            булчинския букет до декорацията на церемонията и масите – всичко е
            изработено с прецизност и вдъхновение, за да направи вашия ден
            наистина незабравим.
          </p>
        </div>
        <Link href="/services">
          <Button className="btn transp-btn">Научете повече</Button>
        </Link>
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
