import React from "react";
import Slider from "react-slick";

const Partners = () => {
  var settings = {
    speed: 500,
    slidesToShow: 6,
  };
  const partners = [
    {
      thumbnail: require("../assets/images/clients/11.webp"),
    },
    {
      thumbnail: require("../assets/images/clients/11.webp"),
    },
    {
      thumbnail: require("../assets/images/clients/11.webp"),
    },
    {
      thumbnail: require("../assets/images/clients/11.webp"),
    },
  ];
  return (
    <div className="flex flex-row justify-center px-4 py-5 gap-10">
      <Slider {...settings}>
        {/* <img src={partners[0].thumbnail} alt="" /> */}

        <p>meke</p>
      </Slider>
      {/* <Slider {...settings} className="gap-3">
        {partners.map((p, index) => {
          return <img src={p.thumbnail} alt="" />;
        })}
      </Slider> */}
    </div>
  );
};

export default Partners;
