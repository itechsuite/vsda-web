import React from "react";
import Slider from "react-slick";
import TrainingHubModel from "./view-models/TrainingHubModel";

const OurTrainingHub = () => {
  return (
    <section className="min-h-[30vh]">
      <div className="flex flex-col items-center gap-4 ">
        <p className="font-bold text-3xl">Our Training Hub</p>

        <Slider slidesToShow={3} autoplay slidesToScroll={1}>
          <TrainingHubModel />
          <TrainingHubModel />
          <TrainingHubModel />
        </Slider>
      </div>
    </section>
  );
};

export default OurTrainingHub;
