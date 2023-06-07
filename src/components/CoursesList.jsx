import React, { useEffect, useState } from "react";
import CoursesListModel from "./view-models/CoursesListModel";
import Slider from "react-slick";
import { GET_ALL_COURSE_CATEGORY } from "../services/CourseServices";

const CoursesList = () => {
  const [categories, setCategories] = useState([]);
  const fetchCourses = async () => {
    const res = await GET_ALL_COURSE_CATEGORY();

    console.log(res);
    setCategories(res);
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="bg-gray-100">
      <div className="px-4 py-5 flex flex-col gap-4 ">
        <p className="uppercase  text-gray-400">COURses</p>
        <p className="font-normal text-2xl">
          Get trained by
          <span className="font-bold"> Industry Professionals</span>
        </p>
        <p className="w-2/4 justify-evenly text-gray-400">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>

        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories
            ? categories.map((category, index) => {
                return <CoursesListModel title={category.title} />;
              })
            : null}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
