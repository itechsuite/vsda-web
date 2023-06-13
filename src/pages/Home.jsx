import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner";
import FeaturedCourses from "../components/FeaturedCourses";
import KeyNotes from "../components/KeyNotes";
import Partners from "../components/Partners";
import CoursesList from "../components/CoursesList";
import { KeyIcon } from "@heroicons/react/24/outline";
import Testimony1 from "../components/Testimonies/Testimony1";
import { Link } from "react-router-dom";
import SlickCarousel from "../components/Carousels/SlickCarousel";
import IntroVideo from "../components/IntroVideo";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  return (
    <div>
      {/* <Banner link={require("../assets/images/home/electrician.jpg")} /> */}

      <SlickCarousel />

      <KeyNotes />

      <IntroVideo />

      {/* <CoursesList /> */}

      {/* <Banner link={require("../assets/images/home/electrician.jpg")} /> */}

      <FeaturedCourses />

      <GetInTouch />
      {/* <Partners /> */}
    </div>
  );
};

export default Home;
