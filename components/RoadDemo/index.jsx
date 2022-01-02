import React from "react";
import RoadmapCard from "../RoadmapCard";
import styles from "./styles.module.css";
import roadmap from "../../roadmap.json";

export default function Roaddemo() {
  return (
    <>
      {/* <div className={styles.heading}> Road Map</div> */}
      <div className={styles.main}>
        <div className={styles.container}>
          {roadmap.map((data, index) => (
            <div
              key={index}
              style={
                index % 2 != 0 ? { marginRight: "0", marginLeft: "auto" } : null
              }
            >
              <RoadmapCard
                content={data.content}
                title={data.title}
                left={index % 2 != 0}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
