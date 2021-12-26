import React from 'react'
import styles from './styles.module.css';
export default function index() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
            <div className={styles.mainBox}>
                <p className={styles.leftBox}>F</p>
                <div className={styles.rightBox}>
                <ul  className={styles.list}>
                    <li className={styles.listItem}>amily</li>
                    <li className={styles.listItem}>amily</li>
                    <li className={styles.listItem}>amily</li>
                    <li className={styles.listItem}>amily</li>
                    <li className={styles.listItem}>amily</li>
                </ul>  
                </div>
            </div>
            </div>
        </div>
    )
}
