/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { FIcon } from "../../data";
import Image from "next/image";
import Button from "../../common/Button";
function Header() {
	const [open, setOpen] = useState(true);

	useEffect(() => {
		if (process.browser) {
			if (window.innerWidth < 1055) {
				setOpen(false);
			}
		}
	}, []);

	useEffect(() => {
		const url = window.location.href.split("/");
		const target = url[url.length - 1].toLowerCase();
		const element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);

	if (process.browser) {
		window.addEventListener("resize", () => {
			if (window.innerWidth < 1055) {
				setOpen(false);
			} else {
				setOpen(true);
			}
		});
	}

	return (
		<div className={styles.header}>
			<div
				className={styles.logoDiv}
				style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
			>
				<Link
					href="/"
					passHref
					onClick={(e) => {
						e.preventDefault();
						if (process.browser) {
							if (window.innerWidth < 1055) {
								setOpen(false);
							}
						}
					}}
				>
					<div style={{ minWidth: 50 }}>
						<Image
							className={styles.image}
							src={FIcon}
							alt={"Respct.Club"}
							width={50}
							height={60}
						/>
					</div>
				</Link>
			</div>

			<div className={styles.menu} onClick={() => setOpen(!open)}>
				{open ? (
					<>
						<div className={styles.change1}></div>
						<div className={styles.change2}></div>
						<div className={styles.change3}></div>
					</>
				) : (
					<>
						<div className={styles.bar1}></div>
						<div className={styles.bar2}></div>
						<div className={styles.bar3}></div>
					</>
				)}
			</div>
			<div style={{ display: "block", marginLeft: 0 }}>
				{open && (
					<>
						<div className={styles.collapse}>
							<Link
								href="/#Animation"
								passHref
								onClick={(e) => {
									const Animation = document.getElementById("Animation");
									e.preventDefault();
									if (process.browser) {
										if (window.innerWidth < 1055) {
											setOpen(false);
										}
									}
									Animation &&
										Animation.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
								}}
							>
								<div className={styles.nav_item}>Press F</div>
							</Link>

							<Link
								href="/#Creators"
								passHref
								onClick={(e) => {
									const join = document.getElementById("Creators");
									e.preventDefault();
									if (process.browser) {
										if (window.innerWidth < 1055) {
											setOpen(false);
										}
									}
									join &&
										join.scrollIntoView({ behavior: "smooth", block: "start" });
								}}
							>
								<div className={styles.nav_item}>Creators</div>
							</Link>

							<Link
								href="/#Join"
								passHref
								onClick={(e) => {
									const join = document.getElementById("Join");
									e.preventDefault();
									if (process.browser) {
										if (window.innerWidth < 1055) {
											setOpen(false);
										}
									}
									join &&
										join.scrollIntoView({ behavior: "smooth", block: "start" });
								}}
							>
								<div className={styles.nav_item}>Join Us</div>
							</Link>
						</div>
					</>
				)}
			</div>

			{open && (
				<div className={styles.socials}>
					<Button
						text="Early Access"
						href="https://forms.gle/QghPveGQ158FejHM9"
					/>

					{/* <Link href={'https://www.facebook.com/cassinocafe.FB'}>
          <a target="_blank" >
          <Image className={styles.image} src={FIcon} alt={'Respct.Club'} width={40} height={40} />
          </a>
        </Link> */}
				</div>
			)}
		</div>
	);
}

export default Header;
