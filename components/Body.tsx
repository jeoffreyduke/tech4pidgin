import React from "react";
import styles from "../styles/Body.module.css";

interface BodyProps {
  Midcomp: JSX.Element;
}

const Body = ({ Midcomp }: BodyProps) => {
  return (
    <div className={styles.Body}>
      <main className={styles.main}>{Midcomp}</main>
    </div>
  );
};

export default Body;
