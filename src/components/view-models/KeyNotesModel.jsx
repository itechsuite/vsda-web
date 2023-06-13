import React from "react";
import { Link } from "react-router-dom";

const KeyNotesModel = ({ title, image, destination }) => {
  return (
    <Link
      to={destination ? destination : "#"}
      className=" border flex flex-col px-10 py-10 justify-center items-center min-w-[200px] cursor-pointer hover:bg-blue-300 hover:text-white"
    >
      {image}
      <p className="uppercase  text-gray-500 font-light text-sm">
        {title || "PAYMENT"}
      </p>
    </Link>
  );
};

export default KeyNotesModel;
