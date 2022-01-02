import React from "react";
import styles from "./styles.module.css";

function RoadmapCard({ content, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.boxContent}>
          <ul>
            {content?.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.circle}>
        <div className={styles.textGradient}>{title}</div>
        <div className={styles.textGradient}>{new Date().getFullYear()}</div>
      </div>
    </div>
  );
}

export default RoadmapCard;
