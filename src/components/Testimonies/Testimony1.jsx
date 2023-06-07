import React from "react";
import TestimonyModel from "./TestimonyModel";
import Slider from "react-slick";

const Testimony1 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <section className="min-h-[400px] w-full  bg-[#f9f9f9]">
      <div className="px-4 py-5 flex flex-col gap-4 ">
        <h3 className="uppercase text-gray-400">Testimonials</h3>
        <p className="font-normal text-2xl  ">
          We Provide Services for a
          <span className="font-bold"> Huge Number of Customers</span>
        </p>

        <Slider {...settings} className="gap-3">
          <TestimonyModel />
          <TestimonyModel />
          <TestimonyModel />
        </Slider>
      </div>
    </section>
  );
};

export default Testimony1;
