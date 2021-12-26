import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import  { FIcon } from '../../data';

export default function index() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
            <div className={styles.mainBox}>
                <div className={styles.leftBox}>
                    <Image className={styles.image} src={FIcon} alt={'Respct.Club'} width={150} height={250} />
                </div>
                <div className={styles.rightBox}>
                <ul  className={styles.list}>
                    <li className={styles.listItem}>amily</li>
                    <li className={styles.listItem}>an</li>
                    <li className={styles.listItem}>amily</li>
                    <li className={styles.listItem}>an</li>
                    <li className={styles.listItem}>amily</li>
                </ul>  
                </div>
            </div>
            </div>
        </div>
    )
}
