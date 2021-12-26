import React from 'react'
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import SvgIcon from '../../common/SvgIcon';
import Image from 'next/image';

export default function index(props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                <Image
                    alt={props.data.imageAlt}
                    src={props.data.imageURL}
                    width={'303vw'}
                    height={'303vw'}
                />
            </div>
            <h1 className={styles.coinShortNameContainer}> $ {props.data.coinShortName}</h1>
            <div className={styles.coinDescriptionContainer}>{props.data.coinDescription}</div>
            <div className={styles.socialURLsContainer}>
                {props.data.socialURLs.map((item,index) => {
                        return (
                            <SvgIcon
                                key={index}
                                height="25px"
                                src={item.caller}
                                width="35px"
                            />
                        );
                    })
                }</div>
        </div>
    )
}

index.propTypes = {
    data: PropTypes.element.isRequired,
  };
  