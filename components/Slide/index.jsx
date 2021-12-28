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
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person2,
		imageAlt: "Heemank Verma",
		coinShortName: "SFD",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person3,
		imageAlt: "Heemank Verma",
		coinShortName: "SDG",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person1,
		imageAlt: "Heemank Verma",
		coinShortName: "ETY",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person2,
		imageAlt: "Heemank Verma",
		coinShortName: "QHT",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person3,
		imageAlt: "Heemank Verma",
		coinShortName: "QH4",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person1,
		imageAlt: "Heemank Verma",
		coinShortName: "HST",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person2,
		imageAlt: "Heemank Verma",
		coinShortName: "WJ6",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person3,
		imageAlt: "Heemank Verma",
		coinShortName: "Q6J",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person1,
		imageAlt: "Heemank Verma",
		coinShortName: "WJ6",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person2,
		imageAlt: "Heemank Verma",
		coinShortName: "WJ6",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person3,
		imageAlt: "Heemank Verma",
		coinShortName: "W6JQQ",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person1,
		imageAlt: "Heemank Verma",
		coinShortName: "QGFJE",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
			},
		],
	},
	{
		imageURL: person2,
		imageAlt: "Heemank Verma",
		coinShortName: "ARH",
		coinDescription: "If my calculator had a history, it would be more embarrassing than my browser history.",
		socialURLs: [
			{
				caller: "facebook.svg",
				link: "https://facebook.com/",
			},
			{
				caller: "twitter.svg",
				link: "https://twitter.com/",
			},
			{
				caller: "linkedin.svg",
				link: "https://linkedin.com/",
			},
			{
				caller: "instagram.svg",
				link: "https://instagram.com/",
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
