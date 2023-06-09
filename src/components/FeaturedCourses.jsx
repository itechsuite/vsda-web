import React, { useEffect, useState } from "react";
import CoursesViewModels from "./view-models/CoursesViewModels";
import { GET_ALL_COURSES } from "../services/CourseServices";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const fetchAllCourse = async () => {
    const res = await GET_ALL_COURSES();

    console.log(res, "amaka");
    if (res.length >= 1) {
      setCourses(res.slice(3));
    }
  };

  useEffect(() => {
    fetchAllCourse();
  }, []);
  return (
    <div className="  px-5 py-10 bg-white  ">
      {/* <div className="grid grid-cols-3 gap-3  md:grid-cols-3 ">
        {courses && courses.length >= 1
          ? courses.map((data, index) => {
              return <CoursesViewModels key={index} payload={data} />;
            })
          : null}
      </div> */}
    </div>

    // sss
  );
};

export default FeaturedCourses;
