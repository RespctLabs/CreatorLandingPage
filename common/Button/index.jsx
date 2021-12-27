import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';


export default function Button(props) {
    return (
        <Link href={props.href}>
        <div className={styles.button}>
                <a>{props.text}</a>
        </div>
        </Link>

    )
}


