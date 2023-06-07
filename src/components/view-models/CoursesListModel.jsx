import { KeyIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";

const CoursesListModel = ({ title, details }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-xs rounded-md bg-white min-h-[200px] flex flex-col gap-5 px-3 py-5 cursor-pointer hover:bg-blue-400 hover:text-white">
      <KeyIcon className="w-[30px] hover:text-white " />

      <p className="hover:font-extrabold ">{title || "Brand"} </p>
      <p className="w-4/5">{details || "description"}</p>
    </div>
  );
};

export default CoursesListModel;
