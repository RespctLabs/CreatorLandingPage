import React from "react";
import RoadmapCard from "../RoadmapCard";
import styles from "./styles.module.css";
import roadmap from "../../roadmap.json";

{
  /* <div className={styles.timeline}>
<div  className={[styles.container, styles.left].join(' ')}> */
}

export default function index() {
  return (
    <>
      {/* <div className={styles.heading}> Road Map</div> */}
      <div className={styles.container}>
        {/* {roadmap.map((data, index) => (
          <div key={index} className={styles.ptag}>
            <RoadmapCard content={data.content} title={data.title} />
          </div>
        ))} */}
        <div className={styles.ptag}>
          <div> • Testnet DEX & LP launch (Testnet)</div>
          <div> • Private Token Sales (Sales)</div>
          <div> • Social Media Presence & Strong Community Building</div>
          <div> • Creator Launchpad V1</div>
        </div>

        <div className={styles.ptag}>
          <div> • Mainnet Selective Usage DEX & LP (Trial Usage)</div>
          <div> • Testnet Selective Testing Creator Launchpad (Testing)</div>
          <div> • Testnet Governance System Native Token (Testing)</div>
          <div> • Creators on boarding (Announcement)</div>
          <div>
            {" "}
            • #Watch&Earn Rewarding Mechanism of Creator Token (Testing)
          </div>
          <div> • Private Token Sales-2 (Sales)</div>
          <div> • Listing on DEX, CEX, LP pools for $Respct</div>
        </div>

        <div className={styles.ptag}>
          <div> • Launch DEX & LP & Farms</div>
          <div> • Launch Creator Launchpad</div>
          <div>
            {" "}
            • Fiat Exchange Protocol established (Quicker transactions)
          </div>
          <div> • #Watch&Earn Mainnet Launch</div>
          <div> • Testnet Creator Token DAO (Testing)</div>
        </div>

        <div className={styles.ptag}>
          <div> • Launch Creator Token DAO </div>
        </div>
      </div>
    </>
  );
}
