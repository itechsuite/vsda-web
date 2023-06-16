import React from "react";
import Slider from "react-slick";
import TrainingHubModel from "./view-models/TrainingHubModel";

const OurTrainingHub = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: "progressive",
    dots: false,
    asNavFor: false,
  };
  return (
    <section className="min-h-[30vh]   py-5">
      <div className="flex flex-col  gap-10 w-full">
        <p className="font-bold  text-center text-4xl">Our Training Hub</p>
        <Slider {...settings}>
          <TrainingHubModel
            title={"Training Hall"}
            details={"Equipped with state of the Art Training Materials"}
            image={require("../assets/images/solutions/GABBY.png")}
          />
          <TrainingHubModel
            title={"Training Hall"}
            details={"Equipped with state of the Art Training Materials"}
            image={require("../assets/images/solutions/HALL2.png")}
          />
          <TrainingHubModel
            title={"Automation Bench"}
            details={
              "Get Hands-On Experience with our Best-In-Class Automation Work bench"
            }
            image={require("../assets/images/solutions/HALL1.png")}
          />
          <TrainingHubModel
            title={"Industrial Electric"}
            details={
              "A pratical Lab where students do it themselves with A Real world Scenario Equipment"
            }
            image={require("../assets/images/solutions/WIRING-BOARD.png")}
          />
          <TrainingHubModel
            title={"Electric Motor Work Bench "}
            details={
              "A pratical workbench for Electric Motor Programming And Automation, Sliding Gate Programming Etc"
            }
            image={require("../assets/images/solutions/MOTOR.png")}
          />
        </Slider>
      </div>
    </section>
  );
};

export default OurTrainingHub;
