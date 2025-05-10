import Button from "../Button";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function OrangeArc() {
  return (
    <div className={styles.orangeArc}>
      <div className={styles.whiteArc}>
        <div className={styles.whiteArcFirst}>
          <h1>
            <span className="word1">Декорация</span>
            <br></br>
            <span className="word2">на събития</span>
          </h1>
          <p>
            Спестете време за декорация на вашето следващо събитие с помощта на
            Always Blooming Events. Ние предлагаме украса за сватби, рождени
            дни, юбилеи, детски рождени дни, погачи, кръщенета, корпоративни
            събития, абитуриентски балове, момински партита, вечери на плажа и
            др. <br></br> <br></br> Уверете се, че следващото ви събитие ще се
            окаже точно както искате.
          </p>
          <Button className="btn transp-btn">Научете повече</Button>
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
