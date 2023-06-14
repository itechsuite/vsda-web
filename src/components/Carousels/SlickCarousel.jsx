import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const SlickCarousel = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop interval={3000}>
        {/*  bg-[url('/src/assets/images/automation.png')] */}
        <section
          className="min-h-[70vh] md:min-h-[100vh] relative  bg-cover flex flex-col gap-3   items-center justify-center   "
          style={{
            backgroundPosition: "center",
            backgroundImage: `linear-gradient(to bottom, rgba(97,165,250, 0.52), rgba(0,0,0, 0.93)),
            url('images/background.jpg') ,url(${require("../../assets/images/shop.jpeg")})`,
          }}
        >
          <div className=" flex  gap-3  flex-col   right-20  top-32 bottom-30 items-center justify-center  px-20">
            <p className="font-extrabold text-white  md:text-7xl flex flex-col  text-4xl ">
              Purchase High-End Devices
            </p>

            <p className="text-2xl text-gray-300">
              Make reservation and get it delivered in 24 Hours
            </p>
            <Link
              to={"/online"}
              className="btn normal  bg-blue-500  text-white border-none font-bold  rounded-sm flex  flex-row gap-3"
            >
              Shop Now
              <ShoppingCartIcon className="w-6" />
            </Link>
          </div>
        </section>
        <section
          className="min-h-[100vh] relative  bg-cover flex flex-col gap-3   items-center justify-center   "
          style={{
            backgroundPosition: "center",
            backgroundImage: `linear-gradient(to bottom, rgba(97,165,250, 0.52), rgba(0,0,0, 0.93)),
            url('images/background.jpg') ,url(${require("../../assets/images/automation.png")})`,
          }}
        >
          <div className=" flex  gap-3  flex-col   right-20  top-32 bottom-30 items-center justify-center  px-20">
            <p className="font-extrabold text-white  md:text-7xl flex flex-col  text-4xl ">
              We provide cutting edge solutions to electrical and automation
              challenges
            </p>

            <Link
              to={"https://serviceexpert.com.ng/services.html"}
              className="btn normal  bg-white text-[#3091E9] border-none font-bold  rounded-sm"
            >
              Learn More
            </Link>
          </div>
        </section>
        <section
          className="min-h-[100vh] relative  bg-cover flex flex-col gap-3   items-center justify-center    "
          style={{
            backgroundPosition: "center",
            backgroundImage: `linear-gradient(to bottom, rgba(97,165,250, 0.82), rgba(0,0,0, 0.93)),
          url('images/background.jpg') ,url(${require("../../assets/images/lady.jpg")})`,
          }}
        >
          <div className=" flex  gap-3  flex-col  right-40  top-32 bottom-30 items-center justify-center  px-20">
            <p className="font-extrabold text-white  md:text-7xl flex flex-col  text-4xl  ">
              Access <span className="text-blue-400"> Skilled Personels</span>
            </p>

            <p className="font-bold text-white">
              Find a technician and service personnel trained and certified by
              us
            </p>
            <Link
              to={"/skills"}
              className="btn normal  hover:bg-gray-100 hover:bg-opacity-20  text-white border-none font-bold w-2/4 rounded-sm bg-transparent hover:text-white hover:font-bold font-normal"
            >
              Explore
            </Link>
          </div>
        </section>
      </Carousel>
    </div>
  );
};

export default SlickCarousel;
