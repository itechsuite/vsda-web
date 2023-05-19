import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_COURSE_DETAIL } from "../services/CourseServices";
import TabInstance from "../components/TabInstance";
import Testimony1 from "../components/Testimonies/Testimony1";
import CourseOutline from "../components/CourseOutline";
import { CurrencyFormatter } from "../helper/constants";

const CourseDetail = () => {
  const { id } = useParams();
  const [course_detail, setCourseDetail] = useState("");
  const [loading, setLoading] = useState(true);

  let [categories] = useState({
    Outline: {
      name: "Course Outline",
      panel: <CourseOutline />,
    },

    Popular: {
      panel: <p> Popular</p>,
    },
  });

  const fetchCourseDetail = async () => {
    const res = await GET_COURSE_DETAIL(id);
    console.log(res);

    if (res === false) {
      setCourseDetail(res);
      setLoading(false);
      return;
    }
    setCourseDetail(res);

    setLoading(false);
    return res;
  };

  useEffect(() => {
    fetchCourseDetail();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (course_detail === false && loading === false) {
    return <p>invalid request</p>;
  }
  return (
    <div className="px-2">
      <div className="min-h-[200px] bg-gray-500">banner</div>

      <div className="flex justify-between py-3">
        <h2 className="font-bold" onClick={() => console.log(course_detail)}>
          {course_detail.course_title}
        </h2>
        <div> {CurrencyFormatter(course_detail.cost)}</div>
      </div>

      <p className="text-justify px-2">{course_detail.details}</p>

      <TabInstance categories={categories} />

      <Testimony1 />
    </div>
  );
};

export default CourseDetail;
