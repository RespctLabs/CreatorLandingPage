import React from 'react'
import styles from './styles.module.css';
import Link from 'next/link';
import {footerContent} from "../../data";
import { Facebook, Instagram, Twitter, Linkedin, Discord, Medium }  from "../../data";
import SvgIcon from '../../common/SvgIcon';
import Image from 'next/image';

export default function index() {
    return (
        <div  className={styles.footer}>
            {/* <div className={styles.upperfooter}> 

                {Object.keys(footerContent).map((keyName, i) => (
                    <div key={i} className={styles.upperfooterColumn}>
                        <div className={styles.upperfooterHeading}>{keyName}</div>
                        <br />
                        {Object.keys(footerContent[keyName]).map((valueName, i) => (
                            <div key={i}>
                                <div  className={styles.upperfooterLink} >
                                    <Link href={footerContent[keyName][valueName]}>
                                        <a target="_blank">{valueName}</a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

            </div> */}

            <div className={styles.lowerfooter}> 
            <div className={styles.lowerfooterInner}>
               
                <div >
                    <Link href="https://respctclub.medium.com/" >
                        <a target="_blank"> <span className={styles.lowerfooterLink}><Image
                                alt={"medium"}
                                src={Medium}
                               
                                />
                                </span></a>
                    </Link>
                    <Link href="https://twitter.com/RespctClub"  >
                        <a target="_blank">  <span className={styles.lowerfooterLink}><Image
                                alt={"twitter"}
                                src={Twitter}
                               
                                />
                                </span></a>
                    </Link>
                    {/* <Link href="/" >
                        <a target="_blank">  <span className={styles.lowerfooterLink}><Image
                                alt={"facecbook"}
                                src={Facebook}
                               
                                />
                                </span></a>
                    </Link>
                    <Link href="/"  >
                        <a target="_blank">
                            <span className={styles.lowerfooterLink}><Image
                                alt={"instagram"}
                                src={Instagram}
                               
                                />
                                </span>
                        </a>
                    </Link> */}
                    {/* <Link href="/"  >
                        <a target="_blank" > <span className={styles.lowerfooterLink}><Image
                                alt={"linkedin"}
                                src={Linkedin}
                               
                                />
                                </span>
                        </a>
                    </Link>
                    <Link href="/"  >
                        <a target="_blank">  <span className={styles.lowerfooterLink}><Image
                                alt={"discord"}
                                src={Discord}
                               
                                />
                                </span>
                        </a>
                    </Link> */}
                </div>
            </div>
            </div>
        </div>
    )
}
