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

      <section className="min-h-[100vh] relative  bg-cover flex flex-col gap-3    bg-[url('/src/assets/images/lady.jpg')]  ">
        <div className="absolute flex  gap-3  flex-col   right-10 bottom-36">
          <p className="text-6xl font-bold text-white">
            Skills <span className="text-blue-400">Market Place</span>
          </p>

          <div className="flex gap-3  mx-8">
            <div className="h-[20px] w-[20px] bg-[#3091E9] rounded-full">
              &nbsp;
            </div>
            <div className="h-[20px] w-[20px] bg-[#3091E9] rounded-full">
              &nbsp;
            </div>
            <div className="h-[20px] w-[20px] bg-[#3091E9] rounded-full">
              &nbsp;
            </div>
          </div>

          <div className=" bg-[#3091E9] px-5 py-8 rounded-md flex items-center gap-4 text-white">
            <p className="">
              Find a technician and service personnel trained and certified by
              us
            </p>

            <Link
              to={"/skills"}
              className="btn lowercase bg-white text-[#3091E9] border-none font-bold"
            >
              learn more
            </Link>
          </div>
        </div>
      </section>

      <KeyNotes />

      {/* <CoursesList /> */}

      <Banner link={require("../assets/images/home/electrician.jpg")} />

      {/* <Hero /> */}

      {/* <Banner /> */}
      <CoursesList />

      <Testimony1 />

      {/* <KeyNotes /> */}
      {/* <p>Show courses</p> */}
      {/* <Banner /> */}

      <FeaturedCourses />

      <Partners />
    </div>
  );
};

export default Home;
