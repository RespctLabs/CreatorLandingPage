import React, {Component} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Animation from '../components/Animation';
import Banner from '../components/Banner';
import Joinform from '../components/Joinform';
import Slide from '../components/Slide';
import Timeline from '../components/Timeline';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>CassinoCafe</title>
          <meta name="CassinoCafe" content="CassinoCafe is a restaurant
           located in Dwarka Mor, Delhi" />
        </Head>
        <Header/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Banner/>
        <br />
        <br /><br />
        <br />
        <Animation/>
        <br />
        <br />

        <Slide/>
        <br />
        <br />

        <Joinform/>
        
        {/* <Timeline/> */}

        {/* <CarouselCover/> */}
        {/* <Menu/> */}
        {/* <AboutUs/> */}
        {/* <BlogsComponent/> */}
        {/* <OurTeam/> */}
        {/* <br /> */}
        {/* <Testimonials/> */}
        <Footer/>
        {/* <FindUs/> */}
      </div>
    );
  }
}
