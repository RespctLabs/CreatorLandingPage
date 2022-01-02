import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faTelegramPlane,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";

export default function index() {
  return (
    <div className={styles.footer}>
      <div className={styles.lowerfooter}>
        <div className={styles.lowerfooterInner}>
          {/* <Link href="https://respctclub.substack.com/">
            <a target="_blank">
              <span className={styles.lowerfooterLink}></span>
            </a>
          </Link> */}
          <Link href="https://twitter.com/RespctClub">
            <a target="_blank">
              <span className={styles.lowerfooterLink}>
                <FontAwesomeIcon icon={faTwitter} color="#fff" />
              </span>
            </a>
          </Link>
          <Link href="https://www.reddit.com/r/respctClub/">
            <a target="_blank">
              <span className={styles.lowerfooterLink}>
                <FontAwesomeIcon icon={faRedditAlien} color="#fff" />
              </span>
            </a>
          </Link>

          <Link href="https://t.me/respctclub">
            <a target="_blank">
              <span className={styles.lowerfooterLink}>
                <FontAwesomeIcon icon={faTelegramPlane} color="#fff" />
              </span>
            </a>
          </Link>

          <Link href="https://discord.gg/eQPFAAT4">
            <a target="_blank">
              <span className={styles.lowerfooterLink}>
                <FontAwesomeIcon icon={faDiscord} color="#fff" />
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
