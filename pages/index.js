import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Animation from "../components/Animation";
import Banner from "../components/Banner";
import Joinform from "../components/Joinform";
import Slide from "../components/Slide";
import Roadmap from "../components/Roadmap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <br />
        <Banner />
        <br />
        <br />
        <Animation />
        <br />
        <br />
        <br />
        <Slide />
        <br />
        <br />
        <Roadmap />
        <br />
        <Joinform />
        <br />
        <br />

        {/* <Timeline/> */}

        {/* <CarouselCover/> */}
        {/* <Menu/> */}
        {/* <AboutUs/> */}
        {/* <BlogsComponent/> */}
        {/* <OurTeam/> */}
        {/* <br /> */}
        {/* <Testimonials/> */}
        <Footer />
        {/* <FindUs/> */}
      </div>
    );
  }
}
