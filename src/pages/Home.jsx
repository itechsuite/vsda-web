import React, { useEffect, useState } from "react";
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
import OurTrainingHub from "../components/OurTrainingHub";
import ModalVideo from "react-modal-video";

const Home = () => {
  const [isOpen, setOpen] = useState(true);

  const firstVisit = () => {
    const firstVisit = localStorage.getItem("firstVisit");

    if (!firstVisit === "1") {
      return;
    }
    setOpen(true);
    localStorage.setItem("firstVisit", "1");
  };

  useEffect(() => {
    setTimeout(() => {
      firstVisit();
    }, 3000);
  }, []);
  return (
    <div className="">
      {/* <Banner link={require("../assets/images/home/electrician.jpg")} /> */}

      <SlickCarousel />

      <KeyNotes />

      <IntroVideo />

      <OurTrainingHub />

      {/* <CoursesList /> */}

      {/* <Banner link={require("../assets/images/home/electrician.jpg")} /> */}

      {/* <FeaturedCourses /> */}

      <GetInTouch />
      {/* <Partners /> */}

      <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url="https://console.vitalskillsda.com/images/welcom.mp4"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Home;
