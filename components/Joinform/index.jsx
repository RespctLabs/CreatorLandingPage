import React, {useState} from 'react'
import styles from './styles.module.css';
import Link from 'next/link';

export default class EmailForm extends React.Component {
    constructor(props) {
      super(props);
    }
     
    render() {
      return (
        <div className={styles.mainContainer}>
            <div className={styles.innerContainer}>

                <div className={styles.headerContainer}>
                    Join us
                </div>
                <br/>

                <div className={styles.formContainer}>
                    <div className={styles.buttonContainer} >
                            <div className={styles.textButton}>
                                <Link href="/">
                                    <a>Creator</a>
                                </Link>
                            </div>

                            <div className={styles.textButton}>
                                <Link href="/">
                                    <a>Fan</a>
                                </Link>
                            </div>
                    </div>
                    <div className={styles.formContainer}>
                        <form action="https://formsubmit.co/social@respct.club" method="POST">
                            <input type="email" name="email" />
                            <br/>
                            <input type="submit" value="Join Now" />
                        </form>
                    </div>
                </div>


            </div>
        </div>
      );
    }
  }