import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './styles.module.css';
import Card from '../Card';
import { cardContent } from '../../data';

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
