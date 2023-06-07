import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner";
import FeaturedCourses from "../components/FeaturedCourses";
import KeyNotes from "../components/KeyNotes";
import Partners from "../components/Partners";
import CoursesList from "../components/CoursesList";
import { KeyIcon } from "@heroicons/react/24/outline";
import Testimony1 from "../components/Testimonies/Testimony1";

const Home = () => {
  return (
    <div>
      <section className="min-h-[100vh]  bg-cover flex flex-col gap-3 justify-center items-center  bg-[url('/src/assets/images/lady.jpg')]">
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

      <section className="min-h-[80vh] px-5 py-5 ">
        <div className="flex flex-row gap-4">
          <div>
            <img
              src="https://proguards.ancorathemes.com/wp-content/uploads/2022/02/home-01-copyright.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="uppercase text-gray-500"> What we do </p>
            <p className="font-normal text-2xl">
              We Provide Services for Multiple{" "}
              <span className="font-bold">
                Customers in Various Industries Worldwide
              </span>
            </p>

            <p className="font-light">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>

            <button className="btn  rounded-none bg-blue-500 border-none">
              About us
            </button>
          </div>
        </div>
      </section>
      {/* <Banner /> */}
      <CoursesList />

      <Testimony1 />

      {/* <KeyNotes /> */}
      {/* <p>Show courses</p> */}
      {/* <Banner /> */}

      {/* <FeaturedCourses /> */}

      <Partners />
    </div>
  );
};

export default Home;
