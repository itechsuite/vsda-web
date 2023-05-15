import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_ALL_COURSE_BY_CATEGORY } from "../services/CourseServices";
import Courses from "./Courses";
import CoursesViewModels from "../components/view-models/CoursesViewModels";
import CoursesListLoader from "../components/ContentLoaders/CoursesListLoader";

const CourseList = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const { course } = useParams();
  console.log(course);
  const fetchCourses = async () => {
    const res = await GET_ALL_COURSE_BY_CATEGORY(course);
    console.log(res);
    if (res.length >= 1) {
      setCourses(res);
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading === true) {
    //render shimmer here
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <CoursesListLoader />
        <CoursesListLoader />
        <CoursesListLoader />
      </div>
    );
  }

  if (loading === false && courses.length === 0) {
    return <p>we couldn't find a course </p>;
  }
  return (
    <section className="px-3 py-4 flex flex-col gap-5 bg-[#f5f7f8] min-h-[100vh]">
      <h1 className="text-3xl font-extrabold">
        Explore Courses under{" "}
        <span className="bg-yellow-300 px-1 py-2"> {course} </span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {courses &&
          courses.map((course) => {
            return (
              <CoursesViewModels
                onClick={() => navigate(`/course/detail/${course.id}`)}
                key={course.id}
                payload={course}
              />
            );
          })}
      </div>
    </section>
  );
};

export default CourseList;
