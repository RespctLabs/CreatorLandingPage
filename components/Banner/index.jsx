import React from 'react'
import styles from './styles.module.css';
import {FIcon } from '../../data';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../common/Button';

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
                    <div className={styles.rightSectionHeader}>
                        <span className={styles.mobileIcon}>
                            <Image
                            alt={"Respct.club Icon"}
                            src={FIcon}
                            />
                        </span>
                        <span className={styles.rightSectionHeaderGradient}>respct</span>
                    </div>
                    <div className={styles.rightSectionText}>Respct.club is a creator token platform where you become a shareholder in the journey of your favorite creator</div>
                    <div className={styles.buttonWrapper}>

                        <Button text="Early Access" href="/" />

                        <div className={styles.gapper}/>

                        <Button text="Try Testnet" href="/" />

                    </div>

                </div>
            </div>
        </div>
    )
}
