import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Calender } from "../../data";
import Image from "next/image";
import Button from "../../common/Button";

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.mainContainer} id="Join">
        <div className={styles.innerContainer}>
          <div className={styles.headerContainer}>
            <Link href="https://forms.gle/QghPveGQ158FejHM9">
              <a target="_blank">Join us</a>
            </Link>
          </div>

          <div className={styles.text}>
            Have doubts about getting started? Don&apos;t worry we have got your
            back schedule a meeting with us today!
          </div>

          <div className={styles.button}>
            <Button
              text="Join Us"
              href="https://calendly.com/utsav_singla/15min"
            />
          </div>

          {/* <div className={styles.formContainer}>
                    <div className={styles.buttonContainer} >
                            <div className={styles.textButton}>
                                Creator
                            </div>

                            <div className={styles.textButton}>
                                    Fan
                            </div>
                    </div>
                    <div className={styles.formContainer}>
                        <form action="https://formsubmit.co/social@respct.club" method="POST">
                            <input type="email" name="email" style={{fontSize:'25px', color:'#DD1919'}} />
                            <br/>
                            <input type="submit" value="Join Us" />
                        </form>
                    </div>
                </div> */}
        </div>
      </div>
    );
  }
}
