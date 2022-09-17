import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import Carousel from "./Carousel";

const Homecomp = () => {
  return (
    <div className={styles.Homecomp}>
      <section>
        <Carousel />
      </section>
    </div>
  );
};

export default Homecomp;
