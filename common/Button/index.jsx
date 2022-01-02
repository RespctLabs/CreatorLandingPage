import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Button({ text, href }) {
  return (
    <Link href={href} passHref={true}>
      <a target="_blank">
        <div className={styles.button}>{text}</div>
      </a>
    </Link>
  );
}
