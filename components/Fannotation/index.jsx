/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { Row } from 'reactstrap';
import { Button } from 'semantic-ui-react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import {FIcon}  from "../../data";
import Image from 'next/image';


const Creator = ({ isMobile, isMobileOnly, isTablet }) => {
	const router = useRouter();
	const creators = [
		{
			title: 'amily',
			image: FIcon,
		},
        {
			title: 'amily',
			image: FIcon,
		},
        {
			title: 'amily',
			image: FIcon,
		},
        {
			title: 'amily',
			image: FIcon,
		},
        {
			title: 'amily',
			image: FIcon,
		},
        {
			title: 'amily',
			image: FIcon,
		},
        {
			title: 'amily',
			image: FIcon,
		},
		
	];
	const [creatorItem, setCreatorItem] = useState({
		creator: creators[0],
		index: 0,
	});
	React.useLayoutEffect(() => {
		const intervalId = setInterval(function () {
			setCreatorItem(prev => {
				if (prev.index === 8) {
					return { creator: creators[0], index: 0 };
				}
				return { creator: creators[prev.index + 1], index: prev.index + 1 };
			});
		}, 3000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
        <div className={styles.contentCenter}>
		<Row className="align-items-center">
			<div className={styles.leftContainer}>
                {!isMobileOnly && (
                    <div className="">
                        <Image
                            alt={"respct.club"}
                            src={FIcon}
                            size="medium"
                            height={260}
                            width={300}
                        />
                    </div>
                )}
			</div>
			<div  className={styles.rightContainer} >
					<div className={`${styles['carousel']} `}>
						{creators.map(item => (
							<div
								className={`${styles['carousel__item']} ${
									isMobile
										? styles['carousel__item_animation_mobile']
										: styles['carousel__item_animation']
								}`}>
								<div
									className={`${styles['carousel__item-body']} ${
										isMobile
											? item.title === 'Competitive Programmer' ||
											  item.title === 'Cybersecurity Expert'
												? 'h6'
												: 'h4'
											: ''
									} fw-700`}
									style={
										isMobile
											? { whiteSpace: 'nowrap' }
											: {
													fontSize:
														item.title === 'Competitive Programmer'
															? '42px'
															: '48px',
													whiteSpace: 'nowrap',
											  }
									}>
									{item.title}
								</div>
							</div>
						))}
					</div>
			</div>
			
		</Row>
        </div>
	);
};

export default Creator;