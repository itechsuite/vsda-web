import React from "react";
import { ReactSVG } from "react-svg";

const FlexLayout = ({ title, details, image }) => {
  return (
    <div className="flex justify-center  gap-3">
      <div className=" rounded-full bg-red-400  flex items-center justify-center px-2 py-2 w-20 h-20">
        <img
          src={image || require("../../assets/images/target-svgrepo-com.png")}
          alt="icon"
          className="w-10 h-10"
        />
      </div>
      <div className="w-2/4">
        <p className="uppercase font-bold text-2xl">{title || "title"} </p>
        <p>{details || ""}</p>
      </div>
    </div>
  );
};

export default FlexLayout;
