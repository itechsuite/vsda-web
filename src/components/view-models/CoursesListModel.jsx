import React from "react";
import { useNavigate } from "react-router-dom";

const CoursesListModel = ({ title, image }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/courses/${title}`)}
      className="min-h-[200px] flex flex-col  mx-1"
    >
      <div className="h-[200px]  object-cover">
        <img
          className="object-cover h-full"
          src={
            image ||
            "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg"
          }
          alt="image"
        />
      </div>

      <div className="bg-white flex flex-col  px-3 py-3">
        <p>{title || "title"}</p>
      </div>
    </div>
  );
};

export default CoursesListModel;
