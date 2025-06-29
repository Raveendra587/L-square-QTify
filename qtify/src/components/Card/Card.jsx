import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

function Card({ title, image, chipLabel }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.cardBottom}>
        
        <Chip label={chipLabel} className={styles.chip} />
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
}

export default Card;