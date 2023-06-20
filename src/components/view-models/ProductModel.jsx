import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { CurrencyFormatter } from "../../helper/CurrencyFormatter";

const ProductModel = ({ payload, onClick }) => {
  return (
    <div className="  min-h-[280px] flex flex-col  rounded-lg border relative  ">
      <div className="absolute right-3 top-3 z-10  bg-blue-400 px-2 text-sm py-1 rounded-lg font-bold uppercase ">
        <p>New</p>
      </div>
      <img
        src={
          payload.product_image || require("../../assets/images/no-image.png")
        }
        alt=""
        className="min-h-[200px] max-h-[200px] rounded-tl-lg rounded-tr-lg bg-right-top"
      />
      <div className="px-3 py-2 ">
        <p className=" uppercase text-lg font-bold">{payload.product_name}</p>

        <div>
          <p className="font-light">{payload.product_details}</p>
        </div>
      </div>

      <button
        className="btn  mx-5 my-5 text-sm bg-blue-400 border-none uppercase "
        onClick={onClick}
      >
        Details
      </button>
    </div>
  );
};

export default ProductModel;
