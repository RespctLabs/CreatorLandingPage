import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './styles.module.css';
import Card from '../Card';
// import { cardContent } from '../../data';
import person1 from '../../public/creators/creator1.jpg';
import person2 from '../../public/creators/creator2.jpg';
import person3 from '../../public/creators/creator3.jpg';



const cardContent = [
	{
		imageURL: person1,
		imageAlt: "Heemank Verma",
		coinShortName: "SMR",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person2,
		imageAlt: "Heemank Verma",
		coinShortName: "SFD",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person3,
		imageAlt: "Heemank Verma",
		coinShortName: "SDG",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person1,
		imageAlt: "Heemank Verma",
		coinShortName: "ETY",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person2,
		imageAlt: "Heemank Verma",
		coinShortName: "QHT",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person3,
		imageAlt: "Heemank Verma",
		coinShortName: "QH4",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person1,
		imageAlt: "Heemank Verma",
		coinShortName: "HST",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person2,
		imageAlt: "Heemank Verma",
		coinShortName: "WJ6",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person3,
		imageAlt: "Heemank Verma",
		coinShortName: "Q6J",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person1,
		imageAlt: "Heemank Verma",
		coinShortName: "WJ6",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person2,
		imageAlt: "Heemank Verma",
		coinShortName: "WJ6",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person3,
		imageAlt: "Heemank Verma",
		coinShortName: "W6JQQ",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person1,
		imageAlt: "Heemank Verma",
		coinShortName: "QGFJE",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
	{
		imageURL: person2,
		imageAlt: "Heemank Verma",
		coinShortName: "ARH",
		coinDescription: "I was a standup comedian before someone ate a bat",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "twitter.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "linkedin.svg",
				link: "https://instagram.com/heemank_v",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/heemank_v",
			},
		],
	},
];




export default function index() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
        <div id="Creators">
            <Carousel
                swipeable={true}
                draggable={true}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                infiniteLoop={true} interval={3000}
                useKeyboardArrows
                autoPlay
                showThumbs={true} stopOnHover={true} 
                showArrows={true} emulateTouch={true} swipable={true}
                >

                {cardContent.map((item,index) => {
                        return (
                              <div className={styles.cardContainer}  key={index}>
                                <Card data={item}/>
                              </div>
                        );
                    })
                }
            </Carousel>
        </div>
    )
}
