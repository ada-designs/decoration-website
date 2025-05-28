import Button from "../Button";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";

export default function OrangeArc() {
  return (
    <div className={styles.orangeArc}>
      <div className={styles.whiteArc}>
        <div className={styles.whiteArcFirst}>
          <h1>
            <span className="word1">Украса</span>
            <br></br>
            <span className="word2">за събития</span>
          </h1>
          <p>
            Спестете време и усилия при декорирането на вашето следващо събитие
            с Always Blooming Events! Ние превръщаме всеки празничен ден в
            незабравимо изживяване с уникална украса за сватби, рождени дни,
            юбилеи, детски празненства, погачи, кръщенета, корпоративни
            мероприятия, абитуриентски балове, момински партита, вечери на плажа
            и много други. <br></br> <br></br> Доверете се на нас, за да бъде
            всичко точно както искате!
          </p>
          <Link href="/services">
            <Button className="btn transp-btn">Научете повече</Button>
          </Link>
        </div>

        <div className={styles.whiteArcSecond} id="about">
          <div className={styles.whiteArcSecondText}>
            <h2>Коя съм аз?</h2>
            <p>
              Казвам се Йоана и съм сертифициран декоратор и собственик на
              Always Blooming Events. Започнах това приключение преди една
              година, и доста бързо се превърна в незаменима част от моят живот,
              и работа на пълно работно време. За мен е много важно да създам за
              вас, моите клиенти, красиви и уникални декори, които да запазят
              спомена за вашите специални поводи.
              <br></br>
              <br></br>За всички мои клиенти и минали такива, благодаря ви, че
              ми позволихте да бъда част от вашите специални дни! За всички
              бъдещи клиенти, нямам търпение да създадем заедно спомени и
              прекрасни събития!
            </p>
            <span className={styles.signature}>Йоана Иванова</span>
          </div>
          <Image src="/yoana.jpeg" alt="yoana" height={700} width={600} />
        </div>
      </div>
    </div>
  );
}
