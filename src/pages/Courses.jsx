import { assertAwaitExpression } from "@babel/types";
import React, { useEffect, useState } from "react";
import {
  GET_ALL_COURSES,
  GET_ALL_COURSE_BY_CATEGORY,
  GET_ALL_COURSE_CATEGORY,
} from "../services/CourseServices";
import CoursesViewModels from "../components/view-models/CoursesViewModels";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState([]);

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

  const fetchAllCourses = async () => {
    const res = await GET_ALL_COURSES();
    setCourses(res);
    console.log(res);
  };
  const fetchCourseByCategory = async (category) => {
    const res = await GET_ALL_COURSE_BY_CATEGORY(category);
    setCourses(res);
    console.log(res);
  };

  useEffect(() => {
    fetchCourseCategory();
  }, []);

  useEffect(() => {
    fetchAllCourses();
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
          <p className="font-bold">Courses Category</p>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-5 py-5">
            {category && category.length >= 1 ? (
              category.map((cat, index) => {
                return (
                  <p
                    className={[
                      selected === cat.title
                        ? "btn bg-blue-300 font-extrabold hover:bg-blue-300"
                        : `cursor-pointer btn hover:bg-blue-300`,
                    ]}
                    onClick={() => {
                      setSelected(cat.title);
                      fetchCourseByCategory(cat.title);
                    }}
                  >
                    {cat.title}
                  </p>
                );
              })
            ) : (
              <p> no category found</p>
            )}
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="grid md:grid-cols-4 gap-5 py-5 grid-cols-1">
          {courses && courses.length >= 1 ? (
            courses.map((course, index) => {
              return (
                <CoursesViewModels
                  key={index}
                  payload={course}
                  onClick={() => navigate(`/course/detail/${course.id}`)}
                />
              );
            })
          ) : (
            <p> no course found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;
