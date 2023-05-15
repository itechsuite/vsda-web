import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner";
import FeaturedCourses from "../components/FeaturedCourses";
import KeyNotes from "../components/KeyNotes";
import Partners from "../components/Partners";
import CoursesList from "../components/CoursesList";

const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Banner />
      <CoursesList />

      <KeyNotes />
      {/* <p>Show courses</p> */}
      <Banner />

      <FeaturedCourses />

      <Partners />
    </div>
  );
};

export default Home;
