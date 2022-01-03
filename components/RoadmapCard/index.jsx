import React from "react";
import styles from "./styles.module.css";

function RoadmapCard({ content, title, left, opp, small }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.box}
        style={
          !small
            ? left
              ? !opp
                ? { left: "var(--right-box)" }
                : null
              : opp
              ? { left: "var(--right-box)" }
              : null
            : { left: 0 }
        }
      >
        <div
          className={styles.boxContent}
          style={
            !small
              ? left
                ? !opp
                  ? { marginLeft: "calc(var(--circle-radius)/2)" }
                  : null
                : opp
                ? { marginLeft: "calc(var(--circle-radius)/2)" }
                : null
              : null
          }
        >
          <ul>
            {content?.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={styles.circle}
        style={
          !small
            ? left
              ? !opp
                ? { left: 0 }
                : null
              : opp
              ? { left: 0 }
              : null
            : !left
            ? { left: -100, top: 30 }
            : { left: 100, top: 30 }
        }
      >
        <div className={styles.textGradient}>{title}</div>
        <div className={styles.textGradient}>{new Date().getFullYear()}</div>
      </div>
    </div>
  );
}

export default RoadmapCard;
