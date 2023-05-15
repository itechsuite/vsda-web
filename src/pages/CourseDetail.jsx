import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_COURSE_DETAIL } from "../services/CourseServices";
import TabInstance from "../components/TabInstance";
import Testimony1 from "../components/Testimonies/Testimony1";

const CourseDetail = () => {
  const { id } = useParams();
  const [course_detail, setCourseDetail] = useState("");
  const [loading, setLoading] = useState(true);

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
          Course title
        </h2>
        <div> amount of course</div>
      </div>

      <p className="text-justify px-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dolorum,
        eum reiciendis architecto vitae natus voluptates qui excepturi corrupti
        eius cum ipsa ratione hic magni aspernatur? Vitae laborum culpa quia.
      </p>

      <div>
        <TabInstance />
      </div>

      <Testimony1 />
    </div>
  );
};

export default CourseDetail;
