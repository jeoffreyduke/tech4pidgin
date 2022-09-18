import React, {useState} from "react";
import styles from "../styles/Carousel.module.css";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { FavoriteRounded } from "@mui/icons-material";

export const CourseItem = () => {
  const [showAddToFavs, setShowAddToFavs] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.image}></div>
      <div className={styles.title}>A pidgin course</div>
      <div className={styles.tutor}>Jeoffrey Duke</div>
      <div className={styles.rating}>
        <Rating name="read-only" value={4} precision={0.5} size="small" />
      </div>
      <div className={styles.price}>$1000</div>

      <div className={styles.addToFavs}>
        <FavoriteRounded sx={{ width: 23, height: 23 }} />
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className={styles.Carousel}>
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <div className={styles.arrow}>
        <ChevronRightRoundedIcon />
      </div>
    </div>
  );
};

export default Carousel;
