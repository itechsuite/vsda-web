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
      <section className="min-h-[80vh]  bg-cover flex flex-col gap-3 justify-center items-center  bg-[url('https://img.freepik.com/premium-photo/smile-black-female-industrial-electrical-engineer-with-safety-hardhat-her-head-standing-front-control-panel-touching-display-monitor-cnc-machines-factory-ai-generative_28914-4102.jpg?w=2000')]">
        <p className="text-6xl font-bold text-white">
          Skills <span className="text-blue-400">Market Place</span>
        </p>

        <div className="flex gap-3 ">
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

        <div className="w-2/4 bg-[#3091E9] px-5 py-8 rounded-md flex items-center gap-4 text-white">
          <p className="">
            Find a technician and service personnel trained and certified by us
          </p>

          <button className="btn lowercase bg-white text-[#3091E9] border-none font-bold">
            learn more
          </button>
        </div>
      </section>
      {/* <Hero /> */}
      {/* <Banner /> */}
      {/* <CoursesList /> */}

      <KeyNotes />
      {/* <p>Show courses</p> */}
      {/* <Banner /> */}

      <FeaturedCourses />

      <Partners />
    </div>
  );
};

export default Home;
