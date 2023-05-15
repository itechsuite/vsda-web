import React from "react";
import TestimonyModel from "./TestimonyModel";
import Slider from "react-slick";

const Testimony1 = () => {
  return (
    <section className="min-h-[400px] w-full">
      <h3 className="mb-10">Testimonies</h3>
      <Slider
        dots
        speed={500}
        slidesToShow={2}
        slidesToScroll={2}
        nextArrow={""}
      >
        <TestimonyModel />
        <TestimonyModel />
        <TestimonyModel />
      </Slider>
    </section>
  );
};

export default Testimony1;
