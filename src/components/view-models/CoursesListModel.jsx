import { KeyIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";

const CoursesListModel = ({ payload }) => {
  const { title, thumbnail } = payload;
  console.log(thumbnail);
  const navigate = useNavigate();
  return (
    <div
      className={` rounded-md  min-h-[200px] flex flex-col gap-5 px-3 py-5 cursor-pointer mx-5 bg-no-repeat  hover:text-black `}
      // style={{
      //   background: `linear-gradient(to top, rgba(0,0,0,0.5), #ffffff), `,
      //   //   background: "rgba(0, 0, 0, 0.3)",
      // }}
    >
      {/* <KeyIcon className="w-[30px] hover:text-white " /> */}

      <img src={thumbnail} alt="image" className="rounded-md" />

      <p className="hover:font-extrabold ">{title || "Brand"} </p>
      {/* <p className="w-4/5">{thumbnail || "description"}</p> */}
    </div>
  );
};

export default CoursesListModel;
