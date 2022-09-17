import React from "react";
import styles from "../styles/Carousel.module.css";

export const CourseItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.image}></div>
      <div className={styles.title}></div>
      <div className={styles.tutor}></div>
      <div className={styles.rating}></div>
      <div className={styles.price}></div>
    </div>
  );
};

const Carousel = () => {
  return <div className={styles.Carousel}></div>;
};

export default Carousel;
