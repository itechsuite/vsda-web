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
    <div className="bg-gray-600 min-h-[90vh] px-3 py-3">
      <div>bread crumbs</div>

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold text-white">Course Title</h1>

        <h3 className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod, sit
          dicta eligendi nisi expedita animi quae ipsam perferendis, odit et
          iusto tenetur aut pariatur laboriosam, nihil dolores blanditiis qui.
          Natus, ducimus. Totam adipisci veritatis sunt eligendi est ex
          repellendus, voluptatum provident maxime facilis aliquid architecto id
          ipsum ab, quasi molestias error consectetur illo sint, quae aperiam
          voluptatem quisquam officiis!
        </h3>

        <button className="border w-2/5 px-3 py-4 rounded-full text-white font-bold">
          Previewe the course
        </button>

        <div>
          <h2>What you'll learn</h2>
        </div>
      </div>

      <div>
        <h1>Enroll this course</h1>

        <p>Get this course plus top rated picks</p>

        <div>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
