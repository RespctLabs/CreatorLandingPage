import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import {
	Twitter,
	Discord,
	Medium,
	Reddit,
	Telegram,
	Substack,
} from "../../data";
import Image from "next/image";

export default function index() {
	console.log(Reddit);
	return (
		<div className={styles.footer}>
			<div className={styles.lowerfooter}>
				<div className={styles.lowerfooterInner}>
					<Link href="https://respctclub.substack.com/">
						<a target="_blank">
							{" "}
							<span className={styles.lowerfooterLink}>
								<Image alt={"medium"} src={Substack} height={40} width={40} />
							</span>
						</a>
					</Link>
					<Link href="https://twitter.com/RespctClub">
						<a target="_blank">
							{" "}
							<span className={styles.lowerfooterLink}>
								<Image alt={"twitter"} src={Twitter} height={40} width={40} />
							</span>
						</a>
					</Link>
					<Link href="https://www.reddit.com/r/respctClub/">
						<a target="_blank">
							{" "}
							<span className={styles.lowerfooterLink}>
								<Image alt={"reddit"} src={Reddit} height={40} width={40} />
							</span>
						</a>
					</Link>

					<Link href="https://t.me/respctclub">
						<a target="_blank">
							{" "}
							<span className={styles.lowerfooterLink}>
								<Image alt={"twitter"} src={Telegram} height={40} width={40} />
							</span>
						</a>
					</Link>

					<Link href="https://discord.gg/eQPFAAT4">
						<a target="_blank">
							{" "}
							<span className={styles.lowerfooterLink}>
								<Image alt={"discord"} src={Discord} height={40} width={40} />
							</span>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
