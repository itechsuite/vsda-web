import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { CurrencyFormatter } from "../../helper/CurrencyFormatter";

const ProductModel = ({ payload, onClick, color }) => {
  return (
    <div className="  min-h-[280px] flex flex-col  rounded-lg border relative  ">
      <div className="absolute right-3 top-3 z-10  bg-[#2c3f51] text-white px-2 text-sm py-1 rounded-sm font-bold uppercase ">
        <p>Featured</p>
      </div>

      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.65), rgba(0,0,0, 0.30)),
        url('images/background.jpg') ,url(${payload.product_image})`,
        }}
        className={`min-h-[200px] ${color}   flex flex-col items-center justify-center px-10 text-center gap-4`}
      >
        <p className=" uppercase text-lg font-bold text-white">
          {payload.product_name}
        </p>
        <p className="font-bold text-white">Price on Request</p>
      </div>
      {/* <img
        src={
          payload.product_image || require("../../assets/images/no-image.png")
        }
        alt=""
        className=" max-h-[200px] rounded-tl-lg rounded-tr-lg bg-right-top"
      /> */}
      <div
        className=" 
              ref={personels_container}
 [&>*:nth-child(odd)]:bg-[#f5f5f5] [&>*:nth-child(even)]:bg-[#fafafa]"
      >
        {/* <p className="font-light">{payload.product_details}</p> */}

        {payload && payload.product_specification
          ? payload.product_specification.split(",").map((spec, index) => {
              return (
                <p className="font-normal mx-auto px-2 py-2 bg-slate-300">
                  {" "}
                  {spec}
                </p>
              );
            })
          : null}
      </div>

      <button
        className="btn  mx-5 my-5 text-sm bg-blue-400 border-none uppercase  after:-bottom-12 after:border-r-2  after:content-[''] after:-right-9  after:absolute after:-z-10 after:border-2"
        onClick={onClick}
      >
        Request
      </button>
    </div>
  );
};

export default ProductModel;
