import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import Carousel from "./Carousel";

const Homecomp = () => {
  return (
    <div className={styles.Homecomp}>
      <div className={styles.carouselHeaders}>
        Top courses in Web Development
      </div>
      <section className={styles.first}>
        <Carousel />
      </section>

      <div className={styles.carouselHeaders}>Top courses in Web Design</div>
      <section className={styles.first}>
        <Carousel />
      </section>

      <div className={styles.carouselHeaders}>
        Top courses in IT and Software
      </div>
      <section className={styles.first}>
        <Carousel />
      </section>
    </div>
  );
};

export default Homecomp;
