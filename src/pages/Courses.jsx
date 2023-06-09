import { assertAwaitExpression } from "@babel/types";
import React, { useEffect, useState } from "react";
import {
  GET_ALL_COURSES,
  GET_ALL_COURSE_CATEGORY,
} from "../services/CourseServices";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState([]);
  var settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const fetchCourseCategory = async () => {
    const res = await GET_ALL_COURSE_CATEGORY();
    setCategory(res);
    console.log(res);
  };

  useEffect(() => {
    fetchCourseCategory();
  }, []);

  return (
    <section className="py-4 min-h-[90vh] px-5 ">
      <div
        className="min-h-[60vh] bg-right flex flex-col justify-evenly items-center gap-5"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(97,165,250, 0.92), rgba(0,0,0, 0.93)),
          url('images/background.jpg') ,url(${require("../assets/images/courses/learning.jpeg")})`,
        }}
      >
        <p className="font-extrabold text-white text-6xl">Courses</p>

        <div className="items-start text-white font-semibold w-full px-5 ">
          <p>Courses Category</p>

          <div className="grid grid-cols-4 gap-5">
            {category && category.length >= 1 ? (
              category.map((cat, index) => {
                return <p>cat</p>;
              })
            ) : (
              <p> no category found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
