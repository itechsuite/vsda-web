import { assertAwaitExpression } from "@babel/types";
import React, { useEffect, useState } from "react";
import {
  GET_ALL_COURSES,
  GET_ALL_COURSE_CATEGORY,
} from "../services/CourseServices";

import library from "../assets/images/library.jpeg";
import Slider from "react-slick";
import CoursesListModel from "../components/view-models/CoursesListModel";
import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import Testimony1 from "../components/Testimonies/Testimony1";
const bannerStyle = {
  backgroundImage: `url(https://pixabay.com/get/g2ad1a8f03fb7ee8cfc10f53fd1c44b0a91775e7745e0c3cf76a9141eec801f8100380151f31decda7c9aa0ba5e4259e03f4501918200fc4d1a89198b7881841ddb0fbc75b427e9aaf8dd9a8af5c2981a_1920.jpg)`,
  //   backgroundImage: `url(${library})`,
};

const Courses = () => {
  const [courses, setCourses] = useState([]);
  var settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const fetchCourses = async () => {
    const res = await GET_ALL_COURSE_CATEGORY();
    setCourses(res);
    console.log(res);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="py-4 px-2">
      <div
        className="flex w-full min-h-[300px] flex-row  items-center px-10 text-white rounded-md"
        style={bannerStyle}
      >
        <div className="bg-gradient-to-r from-gray-800 p-3">
          <p className="text-4xl font-bold relative ">
            Power Your <span className="">Future </span>
            in Tech
          </p>
          <p className="text-2xl font-light">
            Gain the digital career-ready skills to transform your Future
          </p>
        </div>
      </div>

      <section className="min-h-[400px] py-10 px-2">
        <p className="font-bold text-3xl">What are you Interested In? </p>
        <p>Checkout our courses </p>

        <div className="py-5">
          <Slider {...settings}>
            {courses &&
              courses.map((course) => {
                return (
                  <CoursesListModel
                    key={course.id}
                    title={course.title}
                    image={course.thumbnail}
                  />
                );
              })}
          </Slider>
        </div>
      </section>

      <div
        className="flex w-full min-h-[300px] bg-center px-4 py-5 rounded-lg flex-col gap-7"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${require("../assets/images/scholar.png")})`,
        }}
      >
        <div>
          <p className="text-[#0259d6] font-bold uppercase">
            vsda
            <span className="bg-[#0259d6] text-white text-xs"> {"plus"}</span>
          </p>

          <h2 className="font-semibold">
            Open new doors with vsda course plus
          </h2>

          <p className="font-light">
            Get unlimited access to Hundreds of courses, hands on project and
            job ready certificate programs..
          </p>
        </div>

        <button className="flex justify-center items-center gap-2 hover:text-[#0259d6] hover:font-extrabold">
          Learn more
          <span>
            <ArrowRightIcon width={13} />
          </span>
        </button>
      </div>

      <Testimony1 />
    </div>
  );
};

export default Courses;
