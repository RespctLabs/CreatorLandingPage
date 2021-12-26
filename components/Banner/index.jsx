import React from 'react'
import styles from './styles.module.css';
import {FIcon } from '../../data';
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.leftSection}>
                    <Image
                    alt={"Respct.club Icon"}
                    src={FIcon}
                    />
                </div>
                <div className={styles.rightSection}>
                    <div>respct</div>
                    <div>Respct.club is a creator token platform where you become a shareholder in the journey of your favorite creator</div>
                    <div className={styles.buttonWrapper}>
                        <div className="buttonContainer">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </div>

                        <div className="buttonContainer">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
