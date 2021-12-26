import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import  { FIcon } from '../../data';
import Fannotation from '../Fannotation';

export default function index() {
    return (
        <div className={styles.wrapper}>
            <Fannotation />
            
        </div>
    )
}
