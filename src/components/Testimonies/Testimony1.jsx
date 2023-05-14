import React from "react";
import TestimonyModel from "./TestimonyModel";
import Slider from "react-slick";

const Testimony1 = () => {
  return (
    <Slider dots speed={500} slidesToShow={2} slidesToScroll={2} nextArrow={""}>
      <TestimonyModel />
      <TestimonyModel />
      <TestimonyModel />
    </Slider>
  );
};

export default Testimony1;
