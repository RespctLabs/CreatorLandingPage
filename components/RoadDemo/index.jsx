import React, { useEffect, useState } from "react";
import RoadmapCard from "../RoadmapCard";
import styles from "./styles.module.css";
import roadmap from "../../roadmap.json";

export default function Roaddemo() {
  const [opp, setOpp] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 800) {
        setOpp(true);
      }
      if (window.innerWidth < 600) {
        setSmall(true);
      }
    }
  }, []);

  return (
    <>
      {/* <div className={styles.heading}> Road Map</div> */}
      <div className={styles.main}>
        <div className={styles.container}>
          {roadmap.map((data, index) => (
            <div key={index} className={styles.card}>
              <RoadmapCard
                content={data.content}
                title={data.title}
                left={index % 2 != 0}
                opp={opp}
                small={small}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
