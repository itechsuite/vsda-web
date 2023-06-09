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

const Home = () => {
  return (
    <div>
      {/* <Banner link={require("../assets/images/home/electrician.jpg")} /> */}

      <section className="min-h-[100vh] relative  bg-cover flex flex-col gap-3   items-center justify-center  bg-[url('/src/assets/images/lady.jpg')]  ">
        <div className=" flex  gap-3  flex-col   right-20  top-32 bottom-30 items-center justify-center">
          <p className="font-extrabold text-white  md:text-7xl flex flex-col  text-4xl ">
            Skills Market <span className=""> Place</span>
          </p>

          <p className="font-bold">
            Find a technician and service personnel trained and certified by us
          </p>
          <Link
            to={"/skills"}
            className="btn normal  bg-white text-[#3091E9] border-none font-bold w-2/4 rounded-full"
          >
            Learn More
          </Link>
        </div>
      </section>

      <KeyNotes />

      {/* <CoursesList /> */}

      <Banner link={require("../assets/images/home/electrician.jpg")} />

      <CoursesList />

      <Testimony1 />

      <FeaturedCourses />

      <Partners />
    </div>
  );
};

export default Home;
