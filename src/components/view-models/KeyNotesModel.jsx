import React from "react";
import { Link } from "react-router-dom";

const KeyNotesModel = ({ title, image, destination, target }) => {
  return (
    <Link
      to={destination ? destination : "#"}
      target={target}
      className=" border flex flex-col px-10 py-10 justify-center items-center min-w-[200px] cursor-pointer  hover:text-white gap-3"
    >
      {image}
      <p className="uppercase  text-white font-light text-sm hover:font-bold ">
        {title || "PAYMENT"}
      </p>
    </Link>
  );
};

export default KeyNotesModel;
