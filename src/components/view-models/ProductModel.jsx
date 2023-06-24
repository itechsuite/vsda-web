import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { CurrencyFormatter } from "../../helper/CurrencyFormatter";
import { Pallete, randomColor } from "../../helper/ColorPallete";

const ProductModel = ({ payload, onClick }) => {
  const [color_value, setColorValue] = useState();
  useEffect(() => {
    setColorValue(randomColor());
  }, []);
  let color = randomColor();

  return (
    <div className="  min-h-[280px] flex flex-col  rounded-lg  relative  ">
      <div className="absolute -right-2 top-0 z-10   text-white px-2 text-sm  rounded-sm font-bold uppercase ">
        <img
          src={require("../../assets/images/ribon_one.png")}
          alt="featured"
        />
      </div>

      <div
        style={{
          backgroundColor: `${color_value}`,
        }}
        className={`min-h-[200px] flex flex-col items-center justify-center px-10 text-center gap-4`}
      >
        <p className=" uppercase text-lg font-extrabold text-black">
          {payload.product_name}
        </p>
        <p className="font-bold ">Price on Request</p>
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
        className="btn w-2/5  px-5 mx-auto my-5 text-sm bg-[#f39c12] border-none uppercase  after:-bottom-12 after:border-r-2  after:content-[''] after:-right-9  after:absolute after:-z-10 after:border-2"
        onClick={onClick}
      >
        Request
      </button>
    </div>
  );
};

export default ProductModel;
