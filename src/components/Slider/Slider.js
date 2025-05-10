import styles from "./Slider.module.css";
import Button from "../Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const slides = [
  {
    id: 0,
    title: "Моминско <br> Парти",
    link: "#",
    backgroundImage: "./2.jpg",
  },
  {
    id: 1,
    title: "Сватбена <br> Флористика",
    link: "#",
    backgroundImage: "./floristika_slider.jpg",
  },
  {
    id: 2,
    title: "Юбилей/ <br> Рожден ден",
    link: "#",
    backgroundImage: "./1.jpg",
  },
  { id: 3, title: "Корпоративно", link: "#", backgroundImage: "./hero.png" },
  {
    id: 4,
    title: "Вечери <br> На Плажа",
    link: "#",
    backgroundImage: "./picnic.jpg",
  },
  { id: 5, title: "Кръщене", link: "#", backgroundImage: "./krushtene.jpg" },
  {
    id: 6,
    title: "Ергенско <br> парти",
    link: "#",
    backgroundImage: "./1.jpg",
  },
  {
    id: 7,
    title: "Детски <br> рожден ден",
    link: "#",
    backgroundImage: "./detski.jpg",
  },
  {
    id: 8,
    title: "Абитуриентски <br> бал",
    link: "#",
    backgroundImage: "./1.jpg",
  },
];

export default function Slider({ isMobile }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const leftIndex = (currentIndex - 1 + slides.length) % slides.length;
  const rightIndex = (currentIndex + 1) % slides.length;
  const visibleSlides = [
    slides[leftIndex],
    slides[currentIndex],
    slides[rightIndex],
  ];

  function triggerAnimationAndChange(indexFn) {
    setIsAnimating(true);
    indexFn(); // Immediately update the index
    setTimeout(() => {
      setIsAnimating(false); // Reset animation state after the animation duration
    }, 600); // Match the duration of the pageFlip animation
  }

  function changeActiveLeft() {
    triggerAnimationAndChange(() => {
      if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
      else setCurrentIndex(slides.length - 1);
    });
  }

  function changeActiveRight() {
    triggerAnimationAndChange(() => {
      if (currentIndex < slides.length - 1) setCurrentIndex(currentIndex + 1);
      else setCurrentIndex(0);
    });
  }

  return (
    <section className={styles.sliderSct}>
      <h2>
        <span className="word1">Нашите</span>
        <br></br>
        <span className="word2">услуги</span>
      </h2>
      {!isMobile && (
        <ul
          className={`${styles.sliderCont} ${
            isAnimating ? styles.animate : ""
          }`}
        >
          {visibleSlides.map((item, index) => {
            const isLeft = index === 0;
            const isRight = index === 2;
            return (
              <SliderItem
                key={item.id}
                title={item.title}
                backgroundImage={item.backgroundImage}
                isActive={index === 1}
                isLeft={isLeft}
                isRight={isRight}
                changeActiveLeft={changeActiveLeft}
                changeActiveRight={changeActiveRight}
              />
            );
          })}
        </ul>
      )}
      {isMobile && (
        <ul className={styles.staticSliderCont}>
          {" "}
          {slides.map((item, index) => {
            return (
              <StaticSliderItem
                key={item.id}
                title={item.title}
                backgroundImage={item.backgroundImage}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}

function SliderItem({
  title,
  isActive,
  isRight,
  isLeft,
  backgroundImage,
  changeActiveLeft,
  changeActiveRight,
}) {
  let itemClass = styles.sliderItem;
  if (isActive) itemClass += ` ${styles.active} ${styles.animateFadeZoom}`; // Apply animation class to active item
  if (isLeft) itemClass += ` ${styles.left} ${styles.animateSlideLeft}`;
  if (isRight) itemClass += ` ${styles.right} ${styles.animateSlideRight}`;

  return (
    <li
      className={itemClass}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={styles.leftArrow}
        onClick={changeActiveLeft}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        className={styles.rightArrow}
        onClick={changeActiveRight}
      />
      <Button className="btn transp-btn">Научи повече</Button>
    </li>
  );
}

function StaticSliderItem({ title, backgroundImage }) {
  return (
    <li
      className={styles.staticSliderItem}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <Button className="btn transp-btn">Научи повече</Button>
    </li>
  );
}
