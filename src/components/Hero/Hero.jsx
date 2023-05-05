import React from "react";
import { CarouselButtons } from "./CarouselButtons";

const Hero = () => {

  //something else

  return (
    <div>
      <div className="carousel w-full relative min-h-[300px]">
        <div> portable</div>

        <div
          id="slide1"


          className="carousel-item relative w-full"
        >
          {/* <img
            src={require("../../assets/images/main1.jpeg")}
            className="w-full"
          /> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* <img
            src={require("../../assets/images/main1.jpeg")}   
            className="w-full"
          /> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
