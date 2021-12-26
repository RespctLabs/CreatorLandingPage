import React from 'react';
import { roadMap } from '../../data';
import Image from 'next/image';
import styles from './styles.module.css';

export default function index() {
    return (
        <div className={styles.alignImage} >
            <Image
                src={roadMap}
                alt="Picture of the author"
                className={styles.alignRoadmap}
                height={1300}
            />
        </div>
    )
}

