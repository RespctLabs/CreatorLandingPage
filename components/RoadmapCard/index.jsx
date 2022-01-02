import React from "react";
import styles from "./styles.module.css";

function RoadmapCard({ content, title, left }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.box}
        style={left ? { left: "var(--right-box)" } : null}
      >
        <div
          className={styles.boxContent}
          style={left ? { marginLeft: "calc(var(--circle-radius)/2)" } : null}
        >
          <ul>
            {content?.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.circle} style={left ? { left: 0 } : null}>
        <div className={styles.textGradient}>{title}</div>
        <div className={styles.textGradient}>{new Date().getFullYear()}</div>
      </div>
    </div>
  );
}

export default RoadmapCard;
