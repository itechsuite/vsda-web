import React, { useEffect, useState } from "react";
import CoursesViewModels from "./view-models/CoursesViewModels";
import { GET_ALL_COURSES } from "../services/CourseServices";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const fetchAllCourse = async () => {
    const res = await GET_ALL_COURSES();
    if (res.length >= 1) {
      setCourses(res);
    }
  };

  useEffect(() => {
    fetchAllCourse();
  }, []);
  return (
    <div className="  px-5 py-10 bg-white  ">
      <div className="grid grid-cols-2 gap-3  ">
        {courses &&
          courses.length > 0 &&
          courses.length > 0 &&
          courses.map((course) => {
            return <CoursesViewModels key={course.id} payload={course} />;
          })}
      </div>
    </div>
  );
};

export default FeaturedCourses;
