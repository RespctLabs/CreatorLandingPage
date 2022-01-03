import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Animation from "../components/Animation";
import Banner from "../components/Banner";
import Joinform from "../components/Joinform";
import Slide from "../components/Slide";
import Roadmap from "../components/Roadmap";
import Roaddemo from "../components/RoadDemo";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Animation />
        <Slide />
        {/* <Roadmap /> */}
        <Roaddemo />
        <Joinform />
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
