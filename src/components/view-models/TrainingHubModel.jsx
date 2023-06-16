import React from "react";

const TrainingHubModel = ({ details, title, image }) => {
  return (
    <div className="mx-2">
      <img
        src={require("../../assets/images/automation.png")}
        alt=""
        className="cursor-pointer "
      />
      <div>
        <p className="text-md font-bold ">{title || "Training Hall"}</p>
        <p>{details} </p>
      </div>
    </div>
  );
};

export default TrainingHubModel;
