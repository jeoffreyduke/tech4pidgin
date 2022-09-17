import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

const Homecomp = () => {
  return (
    <div className={styles.Homecomp}>
      <Image
        src="/assets/logos/white-small.png"
        alt="logo"
        height={1000}
        width={60}
      />
    </div>
  );
};

export default Homecomp;
