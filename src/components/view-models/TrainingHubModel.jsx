import React from "react";

const TrainingHubModel = ({ details, title, image }) => {
  return (
    <div className="mx-2  min-h-[200px] ">
      <img
        src={image || require("../../assets/images/automation.png")}
        alt=""
        className="cursor-pointer rounded-sm w-full h-[250px] "
      />
      <div className="py-3">
        <p className="text-md font-bold ">{title || "Training Hall"}</p>
        <p className="font-light ">{details || "somethiing else"} </p>
      </div>
    </div>
  );
};

export default TrainingHubModel;
