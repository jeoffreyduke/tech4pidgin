import React, { useState, useRef } from "react";
import styles from "../styles/Carousel.module.css";
import Rating from "@mui/material/Rating";
import { gsap } from "gsap";
import Image from "next/image";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { FavoriteRounded } from "@mui/icons-material";

export const CourseItem = () => {
  const favBtn = useRef<HTMLDivElement>(null);
  //const [showAddToFavs, setShowAddToFavs] = useState(false);

  const showAddToFavs = () => {
    gsap.to(favBtn.current, {
      y: "-2.5",
      scale: 1.1,
      duration: 0.4,
      opacity: 1,
      display: "flex",
    });
  };

  const hideAddToFavs = () => {
    gsap.to(favBtn.current, {
      y: "1.5",
      duration: 0.4,
      opacity: 0,
      display: "none",
    });
  };

  return (
    <div
      className={styles.item}
      onMouseEnter={showAddToFavs}
      onMouseLeave={hideAddToFavs}
    >
      <div className={styles.image}></div>
      <div className={styles.title}>A pidgin course</div>
      <div className={styles.tutor}>Jeoffrey Duke</div>
      <div className={styles.rating}>
        <Rating name="read-only" value={4} precision={0.5} size="small" />
      </div>
      <div className={styles.price}>$1000</div>

      <div ref={favBtn} className={styles.addToFavs}>
        <FavoriteRounded sx={{ width: 23, height: 23 }} />
      </div>
    </div>
  );
};

const Carousel = () => {
  const carousel = useRef<HTMLDivElement>(null);

  // scroll carousel to the right
  const scrollRight = () => {
    gsap.to(carousel.current, {
      x: "-=496",
      duration: 0.4,
      ease: "power4.out",
    });
  };

  return (
    <div className={styles.Carousel}>
      <div className={styles.CarouselCon} ref={carousel}>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
      <div className={styles.arrow} onClick={scrollRight}>
        <ChevronRightRoundedIcon />
      </div>
    </div>
  );
};

export default Carousel;
